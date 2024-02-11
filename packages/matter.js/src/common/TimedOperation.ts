/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointStructuralAdapter } from "../endpoint/StructuralAdapter.js";
import { FabricManager } from "../fabric/FabricManager.js";
import { Logger } from "../log/Logger.js";
import { SessionManager } from "../session/SessionManager.js";
import { FailsafeManager, MatterFabricConflictError } from "./FailsafeManager.js";
import type { MatterDevice } from "../MatterDevice.js";
import { Fabric, FabricBuilder } from "../fabric/Fabric.js";
import { MatterFlowError } from "./MatterError.js";
import { SecureSession } from "../session/SecureSession.js";
import { OperationalCredentials } from "../cluster/definitions/OperationalCredentialsCluster.js";
import { BasicInformation } from "../cluster/definitions/BasicInformationCluster.js";
import { GeneralCommissioning } from "../cluster/definitions/GeneralCommissioningCluster.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { Observable } from "../util/Observable.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { NetworkCommissioning } from "../cluster/definitions/NetworkCommissioningCluster.js";
import { ByteArray } from "../util/ByteArray.js";
import { VendorId } from "../datatype/VendorId.js";
import { NodeId } from "../datatype/NodeId.js";

const logger = Logger.get("TimedOperation");

/**
 * A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
 * operation if it does not complete within a specific window.
 * 
 * TimedOperation maintains the failsafe timer and tracks information required to rollback state if the operation
 * aborts.
 * 
 * Timed operations are exclusive for a node.
 */
export class TimedOperation {
    #sessions: SessionManager<MatterDevice>;
    #fabrics: FabricManager;
    #failsafe?: FailsafeManager;
    #construction: AsyncConstruction<TimedOperation>;
    #associatedFabric?: Fabric;
    #storedNetworkClusterState = new Map<
        EndpointNumber,
        TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfoStruct>[]
    >();
    #csrSessionId?: number;
    #forUpdateNoc?: boolean;
    #fabricBuilder = new FabricBuilder();

    #events = {
        fabricAdded: Observable<[fabric: Fabric]>(),
        fabricUpdated: Observable<[fabric: Fabric]>(),
        commissioned: Observable<[], Promise<void>>(),
    };

    constructor(options: TimedOperation.Options) {
        const { expiryLengthSeconds, associatedFabric, rootEndpoint, maxCumulativeFailsafeSeconds } = options;

        this.#sessions = options.sessions;
        this.#fabrics = options.fabrics;
        this.#associatedFabric = options.associatedFabric;

        this.#storeEndpointState(options.rootEndpoint);

        this.#construction = AsyncConstruction(this, async () => {
            // If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the fail-safe
            // timer SHALL be armed for that duration.
            this.#failsafe = new FailsafeManager(
                associatedFabric,
                expiryLengthSeconds,
                maxCumulativeFailsafeSeconds,
                () => this.failSafeExpired(rootEndpoint),
            );
            logger.debug(`Arm failSafe timer for ${expiryLengthSeconds}s.`);
        });
    }

    async extend(fabric: Fabric | undefined, expiryLengthSeconds: number) {
        await this.#construction;
        await this.#failsafe?.reArm(fabric, expiryLengthSeconds);
        if (expiryLengthSeconds > 0) {
            logger.debug(`Extend failSafe timer for ${expiryLengthSeconds}s.`);
        }
    }

    get fabricIndex() {
        return this.#fabricBuilder.getFabricIndex();
    }

    get construction() {
        return this.#construction;
    }

    get events() {
        return this.#events;
    }

    get associatedFabric() {
        return this.#associatedFabric;
    }

    get csrSessionId() {
        return this.#csrSessionId;
    }

    get forUpdateNoc() {
        return this.#forUpdateNoc;
    }

    get hasRootCert() {
        return this.#fabricBuilder.hasRootCert();
    }

    private async failSafeExpired(rootEndpoint: EndpointStructuralAdapter) {
        if (this.#failsafe === undefined) return;
        const failsafeContext = this.#failsafe;
        this.#failsafe = undefined;

        logger.info("Failsafe timer expired, Reset fabric builder.");
        if (this.fabricIndex !== undefined && !this.#forUpdateNoc) {
            logger.debug(`Revoking fabric with index ${this.fabricIndex}`);
            await this.#fabrics.revokeFabric(this.fabricIndex);
        }

        // On expiry of the fail-safe timer, the following actions SHALL be performed in order:
        // 1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the Server.
        await this.removePaseSession();

        // TODO 2. Revoke the temporary administrative privileges granted to any open PASE session (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”) at the Server.

        // 3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions associated with the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section 11.9.6.2, “ArmFailSafe Command”) by clearing any associated Secure Session Context at the Server.
        let fabric: Fabric | undefined = undefined;
        if (this.fabricIndex !== undefined) {
            const fabricIndex = this.fabricIndex;
            fabric = this.#fabrics.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
            if (fabric !== undefined) {
                const session = this.#sessions.getSessionForNode(fabric, fabric.rootNodeId);
                if (session !== undefined && session.isSecure()) {
                    await (session as SecureSession<any>).close(false);
                }
            }
        }

        // 4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the
        //    Fail-Safe being armed.
        await this.#restoreEndpointState(rootEndpoint);

        // 5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair, NOC and
        //    ICAC for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric Index that was
        //    the subject of the UpdateNOC command.
        if (failsafeContext.associatedFabric !== undefined) {
            if (this.#forUpdateNoc) {
                // update FabricManager and Resumption records but leave current session intact
                this.updateFabric(failsafeContext.associatedFabric);
            }

            const operationalCredentialsCluster = rootEndpoint.getCluster(OperationalCredentials.Cluster);
            operationalCredentialsCluster?.refresh("nocs", fabric);
            operationalCredentialsCluster?.refresh("fabrics", fabric);
        }

        // 6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the RemoveFabric command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index that was the subject of the AddNOC command. This SHALL remove all associations to that Fabric including all fabric-scoped data, and MAY possibly factory-reset the device depending on current device state. This SHALL only apply to Fabrics added during the fail-safe period as the result of the AddNOC command.
        // 7. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced by any entry in the Fabrics attribute.
        if (fabric !== undefined) {
            const fabricIndex = this.fabricIndex;
            if (fabricIndex !== undefined) {
                const fabric = this.#fabrics.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
                if (fabric !== undefined) {
                    const basicInformationCluster = rootEndpoint.getCluster(BasicInformation.Cluster);
                    basicInformationCluster?.trigger("leave", { fabricIndex });

                    await fabric.remove();

                    const operationalCredentialsCluster = rootEndpoint.getCluster(OperationalCredentials.Cluster);
                    operationalCredentialsCluster?.refresh("nocs", fabric);
                    operationalCredentialsCluster?.refresh("commissionedFabrics", fabric);
                    operationalCredentialsCluster?.refresh("fabrics", fabric);
                    operationalCredentialsCluster?.refresh("trustedRootCertificates", fabric);
                }
            }
        }

        // 8. Reset the Breadcrumb attribute to zero.
        const generalCommissioningCluster = rootEndpoint.getCluster(GeneralCommissioning.Cluster);
        await generalCommissioningCluster?.set("breadcrumb", 0);

        // TODO 9. Optionally: if no factory-reset resulted from the previous steps, it is RECOMMENDED that the
        //  Node rollback the state of all non fabric-scoped data present in the Fail-Safe context.
    }

    getFailSafeContext() {
        if (this.#failsafe === undefined) throw new MatterFlowError("armFailSafe should be called first!");
        return this.#failsafe;
    }

    getNextFabricIndex() {
        return this.#fabrics.getNextFabricIndex();
    }

    async addFabric(fabric: Fabric) {
        this.#fabrics.addFabric(fabric);
        if (this.#failsafe !== undefined) {
            this.#associatedFabric = this.#failsafe.associatedFabric = fabric;
        }
        this.#events.fabricAdded.emit(fabric);
        return fabric.fabricIndex;
    }

    updateFabric(fabric: Fabric) {
        this.#fabrics.updateFabric(fabric);
        this.#sessions.updateFabricForResumptionRecords(fabric);
        this.#events.fabricUpdated.emit(fabric);
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

        const result = this.#fabricBuilder.createCertificateSigningRequest();
        this.#csrSessionId = sessionId;
        this.#forUpdateNoc = isForUpdateNoc;
        return result;
    }

    async removePaseSession() {
        const session = this.#sessions.getPaseSession();
        if (session) {
            await session.close(true);
        }
    }

    async completeCommission() {
        // 1. The Fail-Safe timer associated with the current Fail-Safe context SHALL be disarmed.
        if (this.#failsafe === undefined) {
            throw new MatterFlowError("armFailSafe should be called first!"); // TODO
        }
        this.#failsafe.complete();

        if (this.fabricIndex !== undefined) {
            this.#fabrics.persistFabrics();
        }

        this.#failsafe = undefined;

        // 2. The commissioning window at the Server SHALL be closed.
        await this.events.commissioned.emit();

        // TODO 3. Any temporary administrative privileges automatically granted to any open PASE session SHALL be revoked (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).

        // 4. The Secure Session Context of any PASE session still established at the Server SHALL be cleared.
        await this.removePaseSession();

        await this.destroy();
    }

    async destroy() {
        await this.#construction;
        await this.#construction.destroy(async () => {
            await this.#failsafe?.expire();
        });
    }

    /** Handles adding a trusted root certificate from Operational Credentials cluster. */
    setRootCert(rootCert: ByteArray) {
        // TODO If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
        //  requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
        //  value, then this command SHALL fail with an INVALID_COMMAND status code sent back to the initiator.
        this.#fabricBuilder.setRootCert(rootCert);
    }

    /**
     * Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
     * cluster.
     */
    async buildUpdatedFabric(nocValue: ByteArray, icacValue: ByteArray | undefined) {
        if (this.associatedFabric === undefined) {
            throw new MatterFlowError("No fabric associated with failsafe context, but we prepare an Fabric update.");
        }
        this.#fabricBuilder.initializeFromFabricForUpdate(this.associatedFabric);
        this.#fabricBuilder.setOperationalCert(nocValue);
        if (icacValue && icacValue.length > 0) this.#fabricBuilder.setIntermediateCACert(icacValue);
        return await this.#fabricBuilder.build(this.associatedFabric.fabricIndex);
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

        const builder = this.#fabricBuilder;

        const { nocValue, icacValue, adminVendorId, ipkValue, caseAdminSubject } = nocData;
        builder.setOperationalCert(nocValue);
        const fabricAlreadyExisting = this.#fabrics
            .getFabrics()
            .find(fabric => builder.matchesToFabric(fabric));
        
        if (fabricAlreadyExisting) {
            throw new MatterFabricConflictError(
                `Fabric with Id ${builder.getFabricId()} and Node Id ${builder.getNodeId()} already exists.`,
            );
        }
        
        if (icacValue && icacValue.length > 0) {
            builder.setIntermediateCACert(icacValue);
        }
        
        return builder.setRootVendorId(adminVendorId)
            .setIdentityProtectionKey(ipkValue)
            .setRootNodeId(caseAdminSubject)
            .build(this.#fabrics.getNextFabricIndex());
    }

    /** Store required CLuster data when opening the FailSafe context to allow to restore them on expiry. */
    #storeEndpointState(endpoint: EndpointStructuralAdapter) {
        // TODO: When implementing Network clusters we somehow need to make sure that a "temporary" network
        //  configuration is not persisted to disk. The NetworkClusterHandlers need to make sure it is only persisted
        //  when the commissioning is completed.
        const networkCluster = endpoint.getCluster(NetworkCommissioning.Complete);
        if (networkCluster !== undefined) {
            this.#storedNetworkClusterState.set(endpoint.number, networkCluster.get("networks"));
        }
        for (const childEndpoint of endpoint.children) {
            this.#storeEndpointState(childEndpoint);
        }
    }

    /** Restore Cluster data when the FailSafe context expired. */
    async #restoreEndpointState(endpoint: EndpointStructuralAdapter) {
        const endpointId = endpoint.number;
        const networkState = this.#storedNetworkClusterState.get(endpointId);
        if (networkState !== undefined) {
            const networkCluster = endpoint.getCluster(NetworkCommissioning.Complete);
            if (networkCluster !== undefined) {
                await networkCluster.set("networks", networkState);
            } else {
                logger.warn(
                    `NetworkCluster not found for endpoint ${endpointId}, but expected. Can not restore network data!`,
                );
            }
            this.#storedNetworkClusterState.delete(endpointId);
        }
        for (const childEndpoint of endpoint.children) {
            await this.#restoreEndpointState(childEndpoint);
        }
    }
}

export namespace TimedOperation {
    export interface Options {
        sessions: SessionManager<MatterDevice>;
        fabrics: FabricManager;
        expiryLengthSeconds: number,
        maxCumulativeFailsafeSeconds: number,
        associatedFabric: Fabric | undefined,
        rootEndpoint: EndpointStructuralAdapter,
    }
}
