/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    CommissioningControllerOptions,
    ControllerEnvironmentOptions,
    NodeCommissioningOptions,
} from "./CommissioningController.js";
import { MatterController } from "./MatterController.js";
import { RootCertificateManager } from "./certificate/RootCertificateManager.js";
import { ImplementationError } from "./common/MatterError.js";
import { CommissionableDevice, CommissionableDeviceIdentifiers, DiscoveryData, Scanner } from "./common/Scanner.js";
import { NodeId } from "./datatype/NodeId.js";
import { Environment } from "./environment/Environment.js";
import { MdnsService } from "./environment/MdnsService.js";
import { FabricJsonObject } from "./fabric/Fabric.js";
import { Logger } from "./log/Logger.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { Network } from "./net/Network.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { ControllerDiscovery } from "./protocol/ControllerDiscovery.js";
import { TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "./schema/PairingCodeSchema.js";

const logger = new Logger("PaseCommissioner");

type PaseCommissionerOptions = Omit<CommissioningControllerOptions, "environment"> & {
    /** The environment for the controller. */
    environment: ControllerEnvironmentOptions;

    /** The root certificate data for the controller. */
    rootCertificateData: RootCertificateManager.Data;

    /** The fabric data of the controller. */
    fabricData: FabricJsonObject;
};

/**
 * This represents a lightweight commissioner that can be used to start the commissioning process to commission
 * devices into an existing controller fabric. Once the initial commissioning process is completed, it uses a callback
 * to all to complete the commissioning process.
 */
export class PaseCommissioner {
    private readonly environment: Environment;
    private controllerInstance?: MatterController;

    /**
     * Creates a new CommissioningController instance
     *
     * @param options The options for the CommissioningController
     */
    constructor(private readonly options: PaseCommissionerOptions) {
        if (options.environment === undefined) {
            throw new ImplementationError("You need to prove an environment for the commissioner.");
        }
        const { environment } = options.environment;
        this.environment = environment;
    }

    get nodeId() {
        return this.controllerInstance?.nodeId;
    }

    assertControllerIsStarted(errorText?: string) {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError(
                errorText ?? "Controller instance not yet started. Please call start() first.",
            );
        }
        return this.controllerInstance;
    }

    /** Internal method to initialize a MatterController instance. */
    private async initializeController() {
        if (this.controllerInstance !== undefined) {
            return this.controllerInstance;
        }

        const { localPort, listeningAddressIpv4, listeningAddressIpv6, rootCertificateData, fabricData } = this.options;

        let mdnsScanner: MdnsScanner | undefined;
        let ipv4Disabled = false;
        let netInterfaceIpv4: UdpInterface | undefined;
        let netInterfaceIpv6: UdpInterface | undefined;

        try {
            const mdnsService = await this.environment.load(MdnsService);
            ipv4Disabled = !mdnsService.enableIpv4;
            mdnsScanner = mdnsService.scanner;
            if (!ipv4Disabled) {
                netInterfaceIpv4 = await UdpInterface.create(Network.get(), "udp4", localPort, listeningAddressIpv4);
            }
            netInterfaceIpv6 = await UdpInterface.create(Network.get(), "udp6", localPort, listeningAddressIpv6);
        } catch {
            logger.debug("No networking available, using only BLE");
        }

        return await MatterController.createAsPaseCommissioner({
            rootCertificateData,
            fabricData,
            netInterfaceIpv4,
            netInterfaceIpv6,
            mdnsScanner,
        });
    }

    /**
     * Commissions/Pairs a new device into the controller fabric. The method returns the NodeId of the commissioned node.
     *
     * Use the connectNodeAfterCommissioning callback to implement an own logic to do the operative device discovery and
     * to complete the commissioning process.
     * Return true when the commissioning process is completed successfully, false on error.
     */
    async commissionNode(
        nodeOptions: NodeCommissioningOptions,
        completeCommissioningCallback: (peerNodeId: NodeId, discoveryData?: DiscoveryData) => Promise<boolean>,
    ) {
        const controller = this.assertControllerIsStarted();

        return await controller.commission(nodeOptions, completeCommissioningCallback);
    }

    /** Disconnects all connected nodes and Closes the network connections and other resources of the controller. */
    async close() {
        await this.controllerInstance?.close();
        this.controllerInstance = undefined;
    }

    /** Initialize the controller. */
    async start() {
        const runtime = this.environment.runtime;
        runtime.add(this);
        if (this.controllerInstance === undefined) {
            this.controllerInstance = await this.initializeController();
        }
    }

    cancelCommissionableDeviceDiscovery(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
    ) {
        const controller = this.assertControllerIsStarted();
        controller
            .collectScanners(discoveryCapabilities)
            .forEach((scanner: Scanner) =>
                ControllerDiscovery.cancelCommissionableDeviceDiscovery(scanner, identifierData),
            );
    }

    async discoverCommissionableDevices(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
        discoveredCallback?: (device: CommissionableDevice) => void,
        timeoutSeconds = 900,
    ) {
        const controller = this.assertControllerIsStarted();
        return await ControllerDiscovery.discoverCommissionableDevices(
            controller.collectScanners(discoveryCapabilities),
            timeoutSeconds,
            identifierData,
            discoveredCallback,
        );
    }
}
