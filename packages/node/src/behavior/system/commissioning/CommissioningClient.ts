/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ImplementationError, NotImplementedError, ServerAddress, Time } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import type { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import { IdentityService } from "#node/server/IdentityService.js";
import {
    CommissioningMode,
    ControllerCommissioner,
    DiscoveryData,
    Fabric,
    FabricAuthority,
    FabricManager,
    LocatedNodeCommissioningOptions,
    PeerAddress,
    SessionParameters,
} from "#protocol";
import { DeviceTypeId, DiscoveryCapabilitiesBitmap, NodeId, TypeFromPartialBitSchema, VendorId } from "#types";
import { ControllerBehavior } from "../controller/ControllerBehavior.js";
import { RemoteDescriptor } from "./RemoteDescriptor.js";

/**
 * Client functionality related to commissioning.
 *
 * Updates node state based on commissioning status and commissions new nodes.
 */
export class CommissioningClient extends Behavior {
    declare state: CommissioningClient.State;

    static override readonly early = true;

    static override readonly id = "commissioning";
    override initialize(options: { descriptor?: RemoteDescriptor }) {
        const descriptor = options?.descriptor;
        if (descriptor) {
            this.descriptor = descriptor;
        }

        if (this.state.discoveredAt === undefined) {
            this.state.discoveredAt = Time.nowMs();
        }

        this.reactTo((this.endpoint as Node).lifecycle.partsReady, this.#initializeNode);
    }

    commission(passcode: number): Promise<ClientNode>;

    commission(options: CommissioningClient.CommissioningOptions): Promise<ClientNode>;

    async commission(options: number | CommissioningClient.CommissioningOptions) {
        if (typeof options !== "object") {
            options = { passcode: options };
        }

        // Validate passcode
        let { passcode } = options;
        if (typeof passcode !== "number" || Number.isNaN(passcode)) {
            passcode = Number.parseInt(passcode as unknown as string);
            if (Number.isNaN(passcode)) {
                throw new ImplementationError(`You must provide the numeric passcode to commission a node`);
            }
        }

        // Commissioning can only happen once
        const node = this.endpoint as ClientNode;
        if (this.state.peerAddress !== undefined) {
            throw new ImplementationError(`${node} is already commissioned`);
        }

        // Ensure controller is initialized
        await this.endpoint.owner?.act(agent => agent.load(ControllerBehavior));

        // Obtain the fabric we will commission into
        const fabricAuthority = options.fabricAuthority || this.env.get(FabricAuthority);
        let { fabric } = options;
        if (fabric === undefined) {
            if (this.context.fabric === undefined) {
                fabric = await fabricAuthority.defaultFabric();
            } else {
                fabric = node.env.get(FabricManager).for(this.context.fabric);
            }
        }

        if (!fabricAuthority.hasControlOf(fabric)) {
            throw new ImplementationError(
                `Cannot commission ${node} fabric ${fabric.fabricIndex} because we do not control this fabric`,
            );
        }

        const addresses = this.state.addresses;
        if (!addresses?.length) {
            throw new ImplementationError(`Cannot commission ${node} because the node has not been located`);
        }

        const commissioner = this.endpoint.env.get(ControllerCommissioner);

        const identityService = this.endpoint.env.get(IdentityService);
        const address = identityService.assignNodeAddress(node, fabric.fabricIndex, options.nodeId);

        const commissioningOptions: LocatedNodeCommissioningOptions = {
            addresses,
            fabric,
            nodeId: address.nodeId,
            passcode,
            discoveryData: this.descriptor,
        };

        if (this.finalizeCommissioning !== CommissioningClient.prototype.finalizeCommissioning) {
            commissioningOptions.finalizeCommissioning = this.finalizeCommissioning.bind(this);
        }

        try {
            await commissioner.commission(commissioningOptions);
            this.state.peerAddress = address;
        } finally {
            if (this.state.peerAddress !== address) {
                identityService.releaseNodeAddress(address);
            }
        }

        return node;
    }

    /**
     * Override to implement CASE commissioning yourself.
     *
     * If you override, matter.js commissions to the point where over PASE is complete.  You must then complete
     * commissioning yourself by connecting to the device and invokeint the "CommissioningComplete" command.
     */
    protected async finalizeCommissioning(_address: PeerAddress, _discoveryData?: DiscoveryData) {
        throw new NotImplementedError();
    }

    get descriptor() {
        return RemoteDescriptor.fromLongForm(this.state);
    }

    set descriptor(descriptor: RemoteDescriptor | undefined) {
        RemoteDescriptor.toLongForm(descriptor, this.state);
    }

    #initializeNode() {
        const endpoint = this.endpoint as ClientNode;
        endpoint.lifecycle.initialized.emit(this.state.peerAddress !== undefined);
    }

    /**
     * Define logical schema.  This enables runtime validation, make fields persistent and makes subfields editable.
     */
    static override readonly schema = new DatatypeModel({
        name: "CommissioningState",
        type: "struct",

        children: [
            FieldElement({
                name: "peerAddress",
                type: "struct",
                quality: "N",
                children: [
                    FieldElement({ name: "fabricIndex", type: "fabric-id" }),
                    FieldElement({ name: "nodeId", type: "node-id" }),
                ],
            }),
            FieldElement({
                name: "addresses",
                type: "list",
                quality: "N",
                children: [
                    FieldElement({
                        name: "entry",
                        type: "struct",
                        children: [
                            FieldElement({ name: "type", type: "string" }),
                            FieldElement({ name: "ip", type: "string" }),
                            FieldElement({ name: "port", type: "uint16" }),
                            FieldElement({ name: "peripheralAddress", type: "string" }),
                        ],
                    }),
                ],
            }),
            FieldElement({ name: "discoveredAt", type: "systime-ms", quality: "N", conformance: "M" }),
            FieldElement({ name: "onlineAt", type: "systime-ms" }),
            FieldElement({ name: "offlineAt", type: "systime-ms" }),
            FieldElement({ name: "ttl", type: "uint32", quality: "N" }),
            FieldElement({ name: "deviceIdentifier", type: "string", quality: "N" }),
            FieldElement({ name: "discriminator", type: "uint16", quality: "N" }),
            FieldElement({ name: "commissioningMode", type: "uint8", quality: "N" }),
            FieldElement({ name: "vendorId", type: "vendor-id", quality: "N" }),
            FieldElement({ name: "productId", type: "uint16", quality: "N" }),
            FieldElement({ name: "deviceType", type: "uint16", quality: "N" }),
            FieldElement({ name: "deviceName", type: "string", quality: "N" }),
            FieldElement({ name: "rotatingIdentifier", type: "string", quality: "N" }),
            FieldElement({ name: "pairingHint", type: "uint32", quality: "N" }),
            FieldElement({ name: "pairingInstructions", type: "string", quality: "N" }),
            FieldElement({
                name: "sessionParameters",
                type: "struct",
                quality: "N",
                children: [
                    FieldElement({ name: "idleIntervalMs", type: "uint32", constraint: "max 3600000" }),
                    FieldElement({ name: "activeIntervalMs", type: "uint32", constraint: "max 3600000" }),
                    FieldElement({ name: "activeThresholdMs", type: "uint16" }),
                ],
            }),
            FieldElement({ name: "tcpSupport", type: "uint8", quality: "N" }),
            FieldElement({ name: "longIdleOperatingMode", type: "bool", quality: "N" }),
        ],
    });
}

export namespace CommissioningClient {
    export class State {
        /**
         * Fabric index and node ID for paired peers.  If this is undefined the node is uncommissioned.
         */
        peerAddress?: PeerAddress;

        /**
         * Known network addresses for the device.  If this is undefined the node has not been located on any network
         * interface.
         */
        addresses?: ServerAddress[];

        /**
         * Time at which the device was discovered.
         */
        discoveredAt: number = Time.nowMs();

        /**
         * Time at which we discovered the device's current operational addresses.
         */
        onlineAt?: number;

        /**
         * Time at which we concluded the device's current operational address is unreachable.
         */
        offlineAt?: number;

        /**
         * The TTL of the discovery record if applicable.
         */
        ttl?: number;

        /**
         * The canonical global ID of the device.
         */
        deviceIdentifier?: string;

        /**
         * The device's long discriminator.
         */
        discriminator?: number;

        /**
         * The last know commissioning mode of the device.
         */
        commissioningMode?: CommissioningMode;

        /**
         * Vendor.
         */
        vendorId?: VendorId;

        /**
         * Product.
         */
        productId?: number;

        /**
         * Advertised device type.
         */
        deviceType?: DeviceTypeId;

        /**
         * The advertised device name specified by the user.
         */
        deviceName?: string;

        /**
         * An optional manufacturer-specific unique rotating ID for uniquely identifying the device.
         */
        rotatingIdentifier?: string;

        /**
         * A bitmap indicating how to transition the device to commissioning mode from its current state.
         */
        pairingHint?: number;

        /**
         * Textual pairing instructions associated with pairing hint.
         */
        pairingInstructions?: string;

        /**
         * The remote node's session parameters.
         */
        sessionParameters?: Partial<SessionParameters>;

        /**
         * TCP support bitmap.
         */
        tcpSupport?: number;

        /**
         * Indicates whether node is ICD with a slow (15 s+) polling interval.
         */
        longIdleTimeOperatingMode?: boolean;
    }

    /**
     * Options that control commissioning.
     */
    export interface CommissioningOptions {
        /**
         * The device's passcode.
         */
        passcode: number;

        /**
         * The ID to assign the node during commissioning.  By default the node receives the next available ID.
         */
        nodeId?: NodeId;

        /**
         * The fabric the joins upon commissioning.  Defaults to the default fabric of the assigned
         * {@link FabricAuthority}.
         */
        fabric?: Fabric;

        /**
         * The authority controlling the commissioning fabric.  Defaults to the {@link FabricAuthority} of the local
         * environment.
         */
        fabricAuthority?: FabricAuthority;

        /**
         * Discovery capabilities to use for discovery. These are included in the QR code normally and defined if BLE
         * is supported for initial commissioning.
         */
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>;
    }
}
