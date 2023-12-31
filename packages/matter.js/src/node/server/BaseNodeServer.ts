/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { MatterNode } from "../../MatterNode.js";
import { Ble } from "../../ble/Ble.js";
import { Attributes, Cluster, Commands, Events } from "../../cluster/Cluster.js";
import { ClusterClientObj } from "../../cluster/client/ClusterClientTypes.js";
import { BasicInformationCluster } from "../../cluster/definitions/BasicInformationCluster.js";
import { GeneralDiagnostics, GeneralDiagnosticsCluster } from "../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { OperationalCredentialsCluster } from "../../cluster/definitions/OperationalCredentialsCluster.js";
import { ClusterServerHandlers, ClusterServerObj } from "../../cluster/server/ClusterServerTypes.js";
import { ImplementationError, NoProviderError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Aggregator } from "../../device/Aggregator.js";
import { Device } from "../../device/Device.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { Logger } from "../../log/Logger.js";
import { MdnsBroadcaster } from "../../mdns/MdnsBroadcaster.js";
import { MdnsInstanceBroadcaster } from "../../mdns/MdnsInstanceBroadcaster.js";
import { MdnsScanner } from "../../mdns/MdnsScanner.js";
import { UdpInterface } from "../../net/UdpInterface.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServer } from "../../protocol/interaction/InteractionServer.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    DiscoveryCapabilitiesBitmap,
} from "../../schema/PairingCodeSchema.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { NetworkOptions } from "../options/NetworkOptions.js";

const logger = Logger.get("CommissioningServer");

/**
 * Represents device pairing information.
 */
export interface DevicePairingInformation {
    manualPairingCode: string;
    qrPairingCode: string;
}

/**
 * Commands exposed by the CommissioningServer
 */
type CommissioningServerCommands = {
    /** Provide a means for certification tests to trigger some test-plan-specific events. */
    testEventTrigger: ClusterServerHandlers<typeof GeneralDiagnosticsCluster>["testEventTrigger"];
};

// TODO decline using set/getRootClusterClient
// TODO Decline cluster access after announced/paired

/**
 * BaseNodeServer implements NodeServer functionality using the lower-level
 * ClusterServer API.
 */
export abstract class BaseNodeServer implements MatterNode {
    #mdnsScanner?: MdnsScanner;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;

    #deviceInstance?: MatterDevice;
    #interactionServer?: InteractionServer;

    protected endpointStructure = new InteractionEndpointStructure;

    protected readonly commandHandler = new NamedHandler<CommissioningServerCommands>();

    protected abstract readonly networkConfig: NetworkOptions.Configuration;
    protected abstract readonly commissioningConfig: CommissioningOptions.Configuration;
    protected abstract readonly rootEndpoint: EndpointInterface;
    protected abstract nextEndpointId: EndpointNumber;
    protected abstract readonly advertiseOnStartup: boolean;
    protected abstract readonly sessionStorage: StorageContext;
    protected abstract readonly fabricStorage: StorageContext;

    protected abstract emitCommissioningChanged(fabric: FabricIndex): void;
    protected abstract emitActiveSessionsChanged(fabric: FabricIndex): void;

    /**
     * Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterServer to get or undefined if not existing
     */
    getRootClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterServerObj<A, E> | undefined {
        return this.rootEndpoint.getClusterServer(cluster);
    }

    /**
     * Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient object to add
     */
    addRootClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: ClusterClientObj<F, A, C, E>,
    ) {
        this.rootEndpoint.addClusterClient(cluster);
    }

    /**
     * Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient to get or undefined if not existing
     */
    getRootClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterClientObj<F, A, C, E> | undefined {
        return this.rootEndpoint.getClusterClient(cluster);
    }

    /**
     * Get the root endpoint of the node.
     */
    getRootEndpoint() {
        return this.rootEndpoint;
    }

    /**
     * Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpoint Endpoint to add
     * @protected
     */
    protected addEndpoint(endpoint: EndpointInterface) {
        this.rootEndpoint.addChildEndpoint(endpoint);
    }

    /**
     * Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpointId Endpoint ID of the child endpoint to get
     * @protected
     */
    protected getChildEndpoint(endpointId: EndpointNumber): EndpointInterface | undefined {
        return this.rootEndpoint.getChildEndpoint(endpointId);
    }

    /**
     * Add a new cluster server to the root endpoint
     * BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
     * added in the constructor
     *
     * @param cluster
     */
    addRootClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
        if (cluster.id === BasicInformationCluster.id) {
            throw new ImplementationError(
                "BasicInformationCluster can not be modified, provide all details in constructor options!",
            );
        }
        if (cluster.id === OperationalCredentialsCluster.id) {
            throw new ImplementationError(
                "OperationalCredentialsCluster can not be modified, provide the certificates in constructor options!",
            );
        }
        this.rootEndpoint.addClusterServer(cluster);
    }

    /**
     * Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process
     *
     * @param limitTo Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet
     *                and BLE if configured
     */
    async advertise(limitTo?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>) {
        if (
            this.#mdnsBroadcaster === undefined ||
            this.#mdnsScanner === undefined
        ) {
            throw new ImplementationError("Add the node to the Matter instance before!");
        }

        if (this.#interactionServer !== undefined && this.#deviceInstance !== undefined) {
            logger.debug("Device already initialized, just advertise the instance again ...");
            await this.#deviceInstance.announce();
            return;
        }

        const basicInformation = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }

        this.#interactionServer = this.createInteractionServer();

        this.initializeEndpoints();

        this.endpointStructure.initializeFromEndpoint(this.rootEndpoint);

        // TODO adjust later and refactor MatterDevice
        this.#deviceInstance = new MatterDevice(
            this.commissioningConfig,
            this.sessionStorage,
            this.fabricStorage,
            (fabricIndex: FabricIndex) => {
                const fabricsCount = this.#deviceInstance?.getFabrics().length ?? 0;
                if (fabricsCount === 1) {
                    // When first Fabric is added (aka initial commissioning) and we did not advertised on MDNS before, add broadcaster now
                    // TODO Refactor this out when we remove MatterDevice class
                    if (
                        this.#mdnsBroadcaster !== undefined &&
                        !this.#deviceInstance?.hasBroadcaster(this.#mdnsBroadcaster)
                    ) {
                        this.#deviceInstance?.addBroadcaster(this.#mdnsBroadcaster);
                    }
                }
                if (fabricsCount === 0) {
                    // When last fabric gets deleted we do a factory reset
                    this.factoryReset()
                        .then(() => this.emitCommissioningChanged(fabricIndex))
                        .catch(error => logger.error("Error while doing factory reset of the device", error));
                } else {
                    this.emitCommissioningChanged(fabricIndex);
                }
            },
            (fabricIndex: FabricIndex) => this.emitActiveSessionsChanged(fabricIndex),
        )
            .addTransportInterface(
                await UdpInterface.create("udp6", this.networkConfig.port, this.networkConfig.listeningAddressIpv6),
            )
            .addScanner(this.#mdnsScanner)
            .addProtocolHandler(this.#interactionServer);
        if (!this.networkConfig.disableIpv4) {
            this.#deviceInstance.addTransportInterface(
                await UdpInterface.create("udp4", this.networkConfig.port, this.networkConfig.listeningAddressIpv4),
            );
        }

        if (this.commissioned) {
            limitTo = { onIpNetwork: true }; // If already commissioned the device is on network already
        } else {
            // BLE or SoftAP only relevant when not commissioned yet
            try {
                const ble = Ble.get();
                this.#deviceInstance.addTransportInterface(ble.getBlePeripheralInterface());
                if (limitTo === undefined || limitTo.ble) {
                    this.#deviceInstance.addBroadcaster(
                        ble.getBleBroadcaster(this.commissioningConfig.additionalBleAdvertisementData),
                    );
                }
            } catch (error) {
                if (error instanceof NoProviderError) {
                    logger.debug("Ble not enabled");
                } else {
                    throw error;
                }
            }

            if (limitTo?.softAccessPoint) {
                logger.error("Advertising as SoftAP not implemented yet. Ignoring ...");
            }
        }

        if (limitTo === undefined || limitTo.onIpNetwork) {
            this.#deviceInstance.addBroadcaster(this.#mdnsBroadcaster);
        }

        await this.#deviceInstance.start();

        // Send required events
        basicInformation.triggerStartUpEvent({ softwareVersion: basicInformation.getSoftwareVersionAttribute() });

        const generalDiagnostics = this.getRootClusterServer(GeneralDiagnosticsCluster);
        if (generalDiagnostics !== undefined) {
            this.getRootClusterServer(GeneralDiagnosticsCluster)?.triggerBootReasonEvent({
                bootReason: generalDiagnostics.getBootReasonAttribute?.() ?? GeneralDiagnostics.BootReason.Unspecified,
            });
        }
    }

    protected abstract initializeEndpoints(): void;

    protected abstract createInteractionServer(): InteractionServer;

    /**
     * Is the device commissioned?
     * 
     * This is true if the device is paired with at least one controller.
     */
    get commissioned() {
        return this.#deviceInstance?.isCommissioned() ?? false;
    }

    /**
     * Set the MDNS Scanner instance. Should be only used internally
     *
     * @param mdnsScanner MdnsScanner instance
     */
    set mdnsScanner(mdnsScanner: MdnsScanner) {
        this.#mdnsScanner = mdnsScanner;
    }

    /**
     * Set the MDNS Broadcaster instance. Should be only used internally
     *
     * @param mdnsBroadcaster MdnsBroadcaster instance
     */
    set mdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster) {
        if (this.networkConfig.port === undefined) {
            throw new ImplementationError("Port must be set before setting the MDNS broadcaster!");
        }
        this.#mdnsBroadcaster = new MdnsInstanceBroadcaster(this.networkConfig.port, mdnsBroadcaster);
    }

    /**
     * Add a new device to the node
     *
     * @param device Device or Aggregator instance to add
     */
    addDevice(device: Device | Aggregator) {
        this.addEndpoint(device);
    }

    /**
     * Return the port the device is listening on
     */
    get port(): number | undefined {
        return this.networkConfig.port;
    }

    /** Set the port the device is listening on. Can only be called before the device is initialized. */
    set port(port: number) {
        if (port === this.networkConfig.port) return;
        if (this.#deviceInstance !== undefined || this.#mdnsBroadcaster !== undefined) {
            throw new ImplementationError("Port cannot be changed after device is initialized!");
        }
        this.networkConfig.port = port;
    }

    /**
     * Close network connections of the device and stop responding to requests
     */
    async close() {
        this.rootEndpoint.getClusterServer(BasicInformationCluster)?.triggerShutDownEvent?.();
        await this.#interactionServer?.close();
        this.#interactionServer = undefined;
        await this.#deviceInstance?.stop();
        this.#deviceInstance = undefined;
        this.endpointStructure.destroy();
    }
 
    async factoryReset() {
        const wasStarted = this.#interactionServer !== undefined || this.#deviceInstance !== undefined;
        if (wasStarted) {
            await this.close();
        }

        this.clearStorage();

        if (wasStarted) {
            await this.advertise();
        }
        logger.info(`The device was factory reset${wasStarted ? " and restarted" : ""}.`);
    }

    protected abstract clearStorage(): Promise<void>;

    /**
     * Add a new command handler for the given command
     *
     * @param command Command to add the handler for
     * @param handler Handler function to add
     */
    addCommandHandler<K extends keyof CommissioningServerCommands>(
        command: K,
        handler: CommissioningServerCommands[K],
    ) {
        this.commandHandler.addHandler(command, handler);
    }

    /**
     * Remove a command handler for the given command
     *
     * @param command Command to remove the handler for
     * @param handler Handler function to remove
     */
    removeCommandHandler<K extends keyof CommissioningServerCommands>(
        command: K,
        handler: CommissioningServerCommands[K],
    ) {
        this.commandHandler.removeHandler(command, handler);
    }

    /**
     * Set the reachability of the commissioning server aka "the main matter device". This call only has effect when
     * the reachability flag was set in the BasicInformationCluster or in the BasicInformation data in the constructor!
     *
     * @param reachable true if reachable, false otherwise
     */
    setReachability(reachable: boolean) {
        const basicInformationCluster = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformationCluster === undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }
        if (basicInformationCluster.attributes.reachable !== undefined) {
            basicInformationCluster.setReachableAttribute(reachable);
        }
    }

    /** used internally by MatterServer to initialize the state of the device. */
    initialize(ipv4Disabled: boolean) {
        if (this.networkConfig.disableIpv4 !== undefined && this.networkConfig.disableIpv4 !== ipv4Disabled) {
            throw new ImplementationError(
                "Changing the IPv4 disabled flag after starting the device is not supported.",
            );
        }
        this.networkConfig.disableIpv4 = ipv4Disabled;
    }

    /** Starts the Matter device and advertises it. */
    async start() {
        if (this.networkConfig.disableIpv4 === undefined) {
            throw new ImplementationError("Add the device to the MatterServer first.");
        }
        if (this.advertiseOnStartup) {
            return this.advertise();
        }
    }

    /**
     * Get some basic details of all Fabrics the server is commissioned to.
     *
     * @param fabricIndex Optional fabric index to filter for. If not set all fabrics are returned.
     */
    getCommissionedFabricInformation(fabricIndex?: FabricIndex) {
        if (!this.commissioned) return [];
        const allFabrics = this.#deviceInstance?.getFabrics() ?? [];
        const fabrics = fabricIndex === undefined ? allFabrics : allFabrics.filter(f => f.fabricIndex === fabricIndex);
        return fabrics.map(fabric => fabric.getExternalInformation()) ?? [];
    }

    /**
     * Get some basic details of all currently active sessions.
     *
     * @param fabricIndex Optional fabric index to filter for. If not set all sessions are returned.
     */
    getActiveSessionInformation(fabricIndex?: FabricIndex) {
        if (!this.commissioned) return [];
        const allSessions = this.#deviceInstance?.getActiveSessionInformation() ?? [];
        return allSessions.filter(({ fabric }) => fabricIndex === undefined || fabric?.fabricIndex === fabricIndex);
    }
}
