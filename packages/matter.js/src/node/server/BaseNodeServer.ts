/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Ble } from "../../ble/Ble.js";
import { Attributes, Cluster, Commands, Events } from "../../cluster/Cluster.js";
import { ClusterClientObj } from "../../cluster/client/ClusterClientTypes.js";
import { BasicInformationCluster } from "../../cluster/definitions/BasicInformationCluster.js";
import { GeneralDiagnostics, GeneralDiagnosticsCluster } from "../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { ClusterServerHandlers, ClusterServerObj } from "../../cluster/server/ClusterServerTypes.js";
import { ImplementationError, NoProviderError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { MdnsBroadcaster } from "../../mdns/MdnsBroadcaster.js";
import { MdnsInstanceBroadcaster } from "../../mdns/MdnsInstanceBroadcaster.js";
import { MdnsScanner } from "../../mdns/MdnsScanner.js";
import { UdpInterface } from "../../net/UdpInterface.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "../../schema/PairingCodeSchema.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { NetworkOptions } from "../options/NetworkOptions.js";

const logger = Logger.get("CommissioningServer");

/**
 * Information required to complete pairing.
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
export abstract class BaseNodeServer {
    #deviceInstance?: MatterDevice;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #primaryNetInterface?: UdpInterface;

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

    protected abstract getMdnsBroadcaster(): Promise<MdnsBroadcaster>;
    protected abstract getMdnsScanner(): Promise<MdnsScanner>;

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
    >(cluster: Cluster<F, SF, A, C, E>): MaybePromise<ClusterServerObj<A, E> | undefined> {
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
        return this.rootEndpoint.addClusterClient(cluster);
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
    >(cluster: Cluster<F, SF, A, C, E>): MaybePromise<ClusterClientObj<F, A, C, E> | undefined> {
        return this.rootEndpoint.getClusterClient(cluster);
    }

    /**
     * Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process
     *
     * @param limitTo Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet
     *                and BLE if configured
     */
    async advertise(limitTo?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>) {
        const port = (await this.#getPrimaryNetInterface()).port;

        this.#mdnsBroadcaster = new MdnsInstanceBroadcaster(port, await this.getMdnsBroadcaster());

        const mdnsScanner = await this.getMdnsScanner();

        if (this.#deviceInstance !== undefined) {
            logger.debug("Device already initialized, just advertise the instance again ...");
            await this.#deviceInstance.announce();
            return;
        }

        const basicInformation = await this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }

        this.#deviceInstance = await this.createMatterDevice();
        this.#deviceInstance.addScanner(mdnsScanner);

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
        await basicInformation.triggerStartUpEvent({ softwareVersion: basicInformation.getSoftwareVersionAttribute() });

        const generalDiagnostics = await this.getRootClusterServer(GeneralDiagnosticsCluster);
        if (generalDiagnostics !== undefined) {
            await (
                await this.getRootClusterServer(GeneralDiagnosticsCluster)
            )?.triggerBootReasonEvent({
                bootReason: generalDiagnostics.getBootReasonAttribute?.() ?? GeneralDiagnostics.BootReason.Unspecified,
            });
        }
    }

    /**
     * Is the device commissioned?
     *
     * This is true if the device is paired with at least one controller.
     */
    get commissioned() {
        return this.#deviceInstance?.isCommissioned() ?? false;
    }

    /**
     * Get the port the server is configured for (before startup) or listening
     * on (after startup).
     */
    get port() {
        return this.#primaryNetInterface ? this.#primaryNetInterface.port : this.networkConfig.port;
    }

    /**
     * Close network connections of the device and stop responding to requests
     */
    async close() {
        await (await this.rootEndpoint.getClusterServer(BasicInformationCluster))?.triggerShutDownEvent?.();
        await this.#deviceInstance?.stop();
        this.#deviceInstance = undefined;
    }

    async factoryReset() {
        const wasStarted = this.#deviceInstance !== undefined;
        let fabrics = new Array<Fabric>();
        if (wasStarted) {
            fabrics = this.commissioned ? this.#deviceInstance?.getFabrics() ?? [] : [];
            await this.close();
        }

        await this.clearStorage();

        if (wasStarted) {
            await this.advertise();
            fabrics.forEach(fabric => this.emitCommissioningChanged(fabric.fabricIndex));
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
    async setReachability(reachable: boolean) {
        const basicInformationCluster = await this.getRootClusterServer(BasicInformationCluster);
        if (basicInformationCluster === undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }
        if (basicInformationCluster.attributes.reachable !== undefined) {
            await basicInformationCluster.setReachableAttribute(reachable);
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

    // TODO adjust later and refactor MatterDevice
    protected async createMatterDevice() {
        return new MatterDevice(
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
        ).addTransportInterface(await this.#getPrimaryNetInterface());
    }

    async #getPrimaryNetInterface() {
        if (this.#primaryNetInterface === undefined) {
            this.#primaryNetInterface = await UdpInterface.create(
                "udp6",
                this.networkConfig.port,
                this.networkConfig.listeningAddressIpv6,
            );
        }
        return this.#primaryNetInterface;
    }
}
