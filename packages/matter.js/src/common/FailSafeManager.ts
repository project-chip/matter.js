/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import { NetworkCommissioning } from "../cluster/definitions/index.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { Endpoint } from "../device/Endpoint.js";
import { EndpointInterface } from "../endpoint/EndpointInterface.js";
import { Fabric, FabricBuilder } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { Time, Timer } from "../time/Time.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { ByteArray } from "../util/ByteArray.js";
import { MatterFlowError } from "./MatterError.js";

const logger = Logger.get("FailSafeManager");

export class MatterFabricConflictError extends MatterFlowError {}

/** Class to Handle one FailSafe context. This is mainly used when adding (Commissioning) or updating new Fabrics. */
export class FailSafeManager {
    public readonly fabricBuilder = new FabricBuilder();
    public failSafeTimer: Timer;
    private maxCumulativeFailsafeTimer: Timer;
    private storedNetworkClusterState = new Map<
        EndpointNumber,
        TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfoStruct>[]
    >();
    public csrSessionId: number | undefined;
    public forUpdateNoc: boolean | undefined;

    constructor(
        private readonly device: MatterDevice,
        public associatedFabric: Fabric | undefined,
        expiryLengthSeconds: number,
        maxCumulativeFailsafeSeconds: number,
        private readonly expiryCallback: () => Promise<void>,
        readonly rootEndpoint: EndpointInterface,
    ) {
        this.storeEndpointState();
        this.failSafeTimer = Time.getTimer(expiryLengthSeconds * 1000, () => this.expire()).start();
        this.maxCumulativeFailsafeTimer = Time.getTimer(maxCumulativeFailsafeSeconds * 1000, () =>
            this.expire(),
        ).start();
    }

    /** Store required CLuster data when opening the FailSafe context to allow to restore them on expiry. */
    private storeEndpointState(endpoint: EndpointInterface = this.rootEndpoint) {
        // TODO: When implementing Network clusters we somehow need to make sure that a "temporary" network
        //  configuration is not persisted to disk. The NetworkClusterHandlers need to make sure it is only persisted
        //  when the commissioning is completed.
        const networkCluster = endpoint.getClusterServer(NetworkCommissioning.Complete);
        if (networkCluster !== undefined) {
            this.storedNetworkClusterState.set(endpoint.getId(), networkCluster.getNetworksAttribute());
        }
        for (const childEndpoint of endpoint.getChildEndpoints()) {
            this.storeEndpointState(childEndpoint);
        }
    }

    /** Restore Cluster data when the FailSafe context expired. */
    restoreEndpointState(endpoint: EndpointInterface = this.rootEndpoint) {
        const endpointId = endpoint.getId();
        const networkState = this.storedNetworkClusterState.get(endpointId);
        if (networkState !== undefined) {
            const networkCluster = endpoint.getClusterServer(NetworkCommissioning.Complete);
            if (networkCluster !== undefined) {
                networkCluster.setNetworksAttribute(networkState);
            } else {
                logger.warn(
                    `NetworkCluster not found for endpoint ${endpointId}, but expected. Can not restore network data!`,
                );
            }
            this.storedNetworkClusterState.delete(endpointId);
        }
        for (const childEndpoint of endpoint.getChildEndpoints()) {
            if (childEndpoint instanceof Endpoint) {
                this.restoreEndpointState(childEndpoint);
            }
        }
    }

    get fabricIndex() {
        return this.fabricBuilder.getFabricIndex();
    }

    /** Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed. */
    async reArm(associatedFabric: Fabric | undefined, expiryLengthSeconds: number) {
        if (!this.failSafeTimer.isRunning) {
            throw new MatterFlowError("FailSafe already expired.");
        }

        if (this.associatedFabric?.fabricIndex !== associatedFabric?.fabricIndex) {
            throw new MatterFlowError(
                `FailSafe already armed (index=${this.associatedFabric?.fabricIndex}) with different fabric (index=${associatedFabric?.fabricIndex}).`,
            );
        }

        this.failSafeTimer.stop();

        if (expiryLengthSeconds === 0) {
            // If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric matches
            // the Fabric currently associated with the fail-safe context, then the fail-safe timer SHALL be
            // immediately expired (see further below for side-effects of expiration).
            await this.expire();
        } else {
            // If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing Fabric
            // matches the fail-safe context’s associated Fabric, then the fail-safe timer SHALL be re- armed to expire
            // in ExpiryLengthSeconds.
            this.failSafeTimer = Time.getTimer(expiryLengthSeconds * 1000, () => this.expire()).start();
        }
    }

    /** Expire the FailSafe context. This is called by the timer and can also be called manually if needed. */
    async expire() {
        this.failSafeTimer.stop();
        this.maxCumulativeFailsafeTimer.stop();
        await this.expiryCallback();
    }

    /** Complete the FailSafe context. This is called when the commissioning is completed. */
    complete() {
        this.failSafeTimer.stop();
        this.maxCumulativeFailsafeTimer.stop();
    }

    /**
     * Handles a CSR from OperationalCredentials cluster and stores additional internal information for further
     * validity checks.
     */
    createCertificateSigningRequest(isForUpdateNoc: boolean, sessionId: number) {
        // TODO handle isForUpdateNoc and UpdateNoc correctly

        // TODO If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is
        //  found to collide with an existing key pair already previously generated and installed, and that check had
        //  been executed, then this command SHALL fail with a FAILURE status code sent back to the initiator.

        const result = this.fabricBuilder.createCertificateSigningRequest();
        this.csrSessionId = sessionId;
        this.forUpdateNoc = isForUpdateNoc;
        return result;
    }

    /** Handles adding a trusted root certificate from Operational Credentials cluster. */
    setRootCert(rootCert: ByteArray) {
        // TODO If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
        //  requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
        //  value, then this command SHALL fail with an INVALID_COMMAND status code sent back to the initiator.
        this.fabricBuilder.setRootCert(rootCert);
    }

    /**
     * Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
     * cluster.
     */
    async buildUpdatedFabric(nocValue: ByteArray, icacValue: ByteArray | undefined) {
        if (this.associatedFabric === undefined) {
            throw new MatterFlowError("No fabric associated with failsafe context, but we prepare an Fabric update.");
        }
        this.fabricBuilder.initializeFromFabricForUpdate(this.associatedFabric);
        this.fabricBuilder.setOperationalCert(nocValue);
        if (icacValue && icacValue.length > 0) this.fabricBuilder.setIntermediateCACert(icacValue);
        return await this.fabricBuilder.build(this.associatedFabric.fabricIndex);
    }

    /** Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster. */
    async buildFabric(nocData: {
        nocValue: ByteArray;
        icacValue: ByteArray | undefined;
        adminVendorId: VendorId;
        ipkValue: ByteArray;
        caseAdminSubject: NodeId;
    }) {
        // TODO If the CaseAdminSubject field is not a valid ACL subject in the context of AuthMode set to CASE, such as
        //  not being in either the Operational or CASE Authenticated Tag range, then the device SHALL process the error
        //  by responding with a StatusCode of InvalidAdminSubject as described in Section 11.17.6.7.2, “Handling Errors”.

        const { nocValue, icacValue, adminVendorId, ipkValue, caseAdminSubject } = nocData;
        this.fabricBuilder.setOperationalCert(nocValue);
        const fabricAlreadyExisting = this.device
            .getFabrics()
            .find(fabric => this.fabricBuilder.matchesToFabric(fabric));
        if (fabricAlreadyExisting) {
            throw new MatterFabricConflictError(
                `Fabric with Id ${this.fabricBuilder.getFabricId()} and Node Id ${this.fabricBuilder.getNodeId()} already exists.`,
            );
        }
        if (icacValue && icacValue.length > 0) this.fabricBuilder.setIntermediateCACert(icacValue);
        this.fabricBuilder.setRootVendorId(adminVendorId);
        this.fabricBuilder.setIdentityProtectionKey(ipkValue);
        this.fabricBuilder.setRootNodeId(caseAdminSubject);

        return await this.fabricBuilder.build(this.device.getNextFabricIndex());
    }
}
