/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Important note: This file is part of the legacy matter-node (internal) API and should not be used anymore directly!
 * Please use the new API classes!
 * @deprecated
 */

import {
    DEVICE_ANNOUNCEMENT_DURATION_MS,
    DEVICE_ANNOUNCEMENT_INTERVAL_MS,
} from "./behavior/definitions/administrator-commissioning/AdministratorCommissioningConstants.js";
import { CommissioningOptions } from "./behavior/system/commissioning/CommissioningOptions.js";
import { AdministratorCommissioning } from "./cluster/definitions/AdministratorCommissioningCluster.js";

import { Channel } from "./common/Channel.js";
import { FailsafeContext } from "./common/FailsafeContext.js";
import { InstanceBroadcaster } from "./common/InstanceBroadcaster.js";
import { Lifecycle } from "./common/Lifecycle.js";
import { InternalError, MatterFlowError } from "./common/MatterError.js";
import { Scanner } from "./common/Scanner.js";
import { TransportInterface } from "./common/TransportInterface.js";
import { Crypto } from "./crypto/Crypto.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { Fabric } from "./fabric/Fabric.js";
import { FabricManager } from "./fabric/FabricManager.js";
import { Diagnostic } from "./log/Diagnostic.js";
import { Logger } from "./log/Logger.js";
import { NetInterface, isNetworkInterface } from "./net/NetInterface.js";
import { NetworkError } from "./net/Network.js";
import { ChannelManager } from "./protocol/ChannelManager.js";
import { ExchangeManager } from "./protocol/ExchangeManager.js";
import { ProtocolHandler } from "./protocol/ProtocolHandler.js";
import { StatusCode, StatusResponseError } from "./protocol/interaction/StatusCode.js";
import { SecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { Session } from "./session/Session.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { PaseServer } from "./session/pase/PaseServer.js";
import { StorageContext } from "./storage/StorageContext.js";
import { Time, Timer } from "./time/Time.js";
import { ByteArray } from "./util/ByteArray.js";
import { Mutex } from "./util/Mutex.js";

const logger = Logger.get("MatterDevice");

export enum FabricAction {
    Added,
    Removed,
    Updated,
}

export class MatterDevice {
    private readonly scanners = new Array<Scanner>();
    private readonly broadcasters = new Array<InstanceBroadcaster>();
    private readonly transportInterfaces = new Array<TransportInterface | NetInterface>();
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private readonly secureChannelProtocol = new SecureChannelProtocol(() => this.endCommissioning());
    private activeCommissioningMode = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
    private activeCommissioningEndCallback?: () => void;
    private announceInterval: Timer;
    private announcementStartedTime: number | null = null;
    private isClosing = false;
    readonly #fabricManager;
    readonly #sessionManager;
    #failsafeContext?: FailsafeContext;
    // Processor for closed sessions

    // Currently we do not put much effort into synchronizing announcements as it probably isn't really necessary.  But
    // this mutex prevents automated announcements from piling up and allows us to ensure announcements are complete
    // on close
    #announcementMutex = new Mutex(this);

    constructor(
        readonly sessionStorage: StorageContext,
        readonly fabricStorage: StorageContext,
        private readonly getCommissioningConfig: () => CommissioningOptions.Configuration,
        private readonly commissioningChangedCallback: (fabricIndex: FabricIndex, fabricAction: FabricAction) => void,
        private readonly sessionChangedCallback: (fabricIndex: FabricIndex) => void,
    ) {
        this.#fabricManager = new FabricManager(fabricStorage, (fabricIndex: FabricIndex, peerNodeId: NodeId) => {
            // When fabric is removed, also remove the resumption record
            this.#sessionManager.removeResumptionRecord(peerNodeId);
            this.commissioningChangedCallback(fabricIndex, FabricAction.Removed);
        });

        this.#sessionManager = new SessionManager(this, sessionStorage);
        this.#sessionManager.initFromStorage(this.#fabricManager.getFabrics());

        this.exchangeManager = new ExchangeManager<MatterDevice>(this.#sessionManager, this.channelManager);

        this.addProtocolHandler(this.secureChannelProtocol);

        this.announceInterval = Time.getPeriodicTimer("Server node announcement", DEVICE_ANNOUNCEMENT_INTERVAL_MS, () =>
            // Announcement needs to await a previous announcement because otherwise in testing at least announcement
            // may crash if started simultaneously
            this.#announcementMutex.run(() => this.announce()),
        );

        this.#sessionManager.sessionOpened.on(session => {
            if (session.fabric) {
                this.sessionChangedCallback(session.fabric.fabricIndex);
            }
        });

        this.#sessionManager.sessionClosed.on(async session => {
            if (!session.closingAfterExchangeFinished) {
                // Delayed closing is executed when exchange is closed
                await this.exchangeManager.closeSession(session);
            }
            const currentFabric = session.fabric;
            if (currentFabric !== undefined) {
                this.sessionChangedCallback(currentFabric.fabricIndex);
            }
            await this.startAnnouncement();
        });

        this.#sessionManager.subscriptionsChanged.on(session => {
            const currentFabric = session.fabric;
            if (currentFabric !== undefined) {
                this.sessionChangedCallback(currentFabric.fabricIndex);
            }
        });
    }

    get fabricManager() {
        return this.#fabricManager;
    }

    get sessionManager() {
        return this.#sessionManager;
    }

    get failsafeContext() {
        this.assertFailSafeArmed();
        return this.#failsafeContext as FailsafeContext;
    }

    async beginTimed(failsafeContext: FailsafeContext) {
        await failsafeContext.construction;

        this.#failsafeContext = failsafeContext;

        failsafeContext.events.fabricAdded.on(fabric => {
            this.commissioningChangedCallback(fabric.fabricIndex, FabricAction.Added);
            const fabrics = this.#fabricManager.getFabrics();
            this.sendFabricAnnouncements(fabrics, true).catch(error =>
                logger.warn(`Error sending Fabric announcement for Index ${fabric.fabricIndex}`, error),
            );
            logger.info("Announce done", Diagnostic.dict({ fabric: fabric.fabricId, fabricIndex: fabric.fabricIndex }));
        });

        failsafeContext.events.fabricUpdated.on(fabric => {
            this.commissioningChangedCallback(fabric.fabricIndex, FabricAction.Updated);
        });

        failsafeContext.events.commissioned.on(async () => await this.endCommissioning());

        failsafeContext.construction.change.on(status => {
            if (status === Lifecycle.Status.Destroyed) {
                this.#failsafeContext = undefined;
            }
        });
    }

    assertFailSafeArmed(message?: string) {
        if (this.isFailsafeArmed()) return;
        throw new StatusResponseError(
            message ?? "Failsafe timer needs to be armed to execute this action.",
            StatusCode.FailsafeRequired,
        );
    }

    isFailsafeArmed() {
        return this.#failsafeContext !== undefined;
    }

    addScanner(scanner: Scanner) {
        this.scanners.push(scanner);
        return this;
    }

    hasBroadcaster(broadcaster: InstanceBroadcaster) {
        return this.broadcasters.includes(broadcaster);
    }

    addBroadcaster(broadcaster: InstanceBroadcaster) {
        this.broadcasters.push(broadcaster);
        return this;
    }

    async deleteBroadcaster(broadcaster: InstanceBroadcaster) {
        const pos = this.broadcasters.findIndex(b => b === broadcaster);
        if (pos !== -1) {
            this.broadcasters.splice(pos, 1);
            await broadcaster.expireAllAnnouncements();
        }
    }

    addTransportInterface(transport: TransportInterface) {
        this.exchangeManager.addTransportInterface(transport);
        this.transportInterfaces.push(transport);
        return this;
    }

    async deleteTransportInterface(transport: TransportInterface) {
        const pos = this.transportInterfaces.findIndex(t => t === transport);
        if (pos !== -1) {
            this.transportInterfaces.splice(pos, 1);
            await transport.close();
        }
    }

    hasProtocolHandler(protocolId: number) {
        return this.exchangeManager.hasProtocolHandler(protocolId);
    }

    addProtocolHandler(protocol: ProtocolHandler<MatterDevice>) {
        this.exchangeManager.addProtocolHandler(protocol);
        return this;
    }

    async start() {
        await this.startAnnouncement();
    }

    async startAnnouncement() {
        if (this.isClosing) return;
        if (this.announceInterval.isRunning) {
            this.announceInterval.stop();
        }
        this.announcementStartedTime = Time.nowMs();
        this.announceInterval.start();
        await this.announce();
    }

    async announce(announceOnce = false) {
        if (!announceOnce) {
            // Stop announcement if duration is reached
            if (
                this.announcementStartedTime !== null &&
                Time.nowMs() - this.announcementStartedTime > DEVICE_ANNOUNCEMENT_DURATION_MS
            ) {
                await this.endCommissioning();
                logger.debug("Announcement duration reached, stop announcing");
                return;
            }
            if (this.activeCommissioningMode !== AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
                // Re-Announce but do not re-set Fabrics
                for (const broadcaster of this.broadcasters) {
                    await broadcaster.announce();
                }
                return;
            }
        }
        const fabrics = this.#fabricManager.getFabrics();
        if (fabrics.length) {
            let fabricsWithoutSessions = 0;
            for (const fabric of fabrics) {
                const session = this.#sessionManager.getSessionForNode(fabric, fabric.rootNodeId);
                if (session === undefined || !session.isSecure || session.numberOfActiveSubscriptions === 0) {
                    fabricsWithoutSessions++;
                    logger.debug("Announcing", Diagnostic.dict({ fabric: fabric.fabricId }));
                }
            }
            for (const broadcaster of this.broadcasters) {
                await broadcaster.setFabrics(fabrics);
                if (fabricsWithoutSessions > 0) {
                    await broadcaster.announce();
                }
            }
        } else {
            // No fabric paired yet, so announce as "ready for commissioning"
            // And expire operational Fabric announcements (if fabric got just deleted)
            for (const broadcaster of this.broadcasters) {
                await broadcaster.expireFabricAnnouncement(); // make sure no Fabric is announced anymore
            }
            await this.allowBasicCommissioning();
        }
    }

    private async announceAsCommissionable(
        mode: AdministratorCommissioning.CommissioningWindowStatus,
        activeCommissioningEndCallback?: () => void,
        discriminator?: number,
    ) {
        if (this.activeCommissioningMode !== AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
            throw new InternalError(
                `Commissioning window already open with different mode (${this.activeCommissioningMode})!`,
            );
        }
        if (this.activeCommissioningEndCallback !== undefined) {
            throw new InternalError("Commissioning window already open with different callback!");
        }
        this.activeCommissioningMode = mode;
        if (activeCommissioningEndCallback !== undefined) {
            this.activeCommissioningEndCallback = activeCommissioningEndCallback;
        }
        // MDNS is sent in parallel
        // TODO - untracked promise
        this.sendCommissionableAnnouncement(mode, discriminator).catch(error =>
            logger.warn("Error sending announcement", error),
        );
    }

    async sendCommissionableAnnouncement(
        mode: AdministratorCommissioning.CommissioningWindowStatus,
        discriminator?: number,
    ) {
        const commissioningConfig = this.getCommissioningConfig();
        for (const broadcaster of this.broadcasters) {
            await broadcaster.setCommissionMode(
                mode === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen ? 2 : 1,
                {
                    ...commissioningConfig.productDescription,
                    discriminator: discriminator ?? commissioningConfig.discriminator,
                },
            );
        }
        await this.startAnnouncement();
    }

    async getNextAvailableSessionId() {
        return this.#sessionManager.getNextAvailableSessionId();
    }

    findFabricFromDestinationId(destinationId: ByteArray, peerRandom: ByteArray) {
        return this.#fabricManager.findFabricFromDestinationId(destinationId, peerRandom);
    }

    async sendFabricAnnouncements(fabrics: Fabric[], expireCommissioningAnnouncement = false) {
        for (const broadcaster of this.broadcasters) {
            await broadcaster.setFabrics(fabrics, expireCommissioningAnnouncement);
            await broadcaster.announce();
        }
    }

    getFabricByIndex(fabricIndex: FabricIndex) {
        return this.#fabricManager.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
    }

    initiateExchange(fabric: Fabric, nodeId: NodeId, protocolId: number) {
        return this.exchangeManager.initiateExchange(fabric, nodeId, protocolId);
    }

    findResumptionRecordById(resumptionId: ByteArray) {
        return this.#sessionManager.findResumptionRecordById(resumptionId);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.#sessionManager.saveResumptionRecord(resumptionRecord);
    }

    getFabrics() {
        return this.#fabricManager.getFabrics();
    }

    isCommissioned() {
        return !!this.#fabricManager.getFabrics().length;
    }

    async allowEnhancedCommissioning(
        discriminator: number,
        paseServer: PaseServer,
        commissioningEndCallback: () => void,
    ) {
        if (this.activeCommissioningMode === AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen) {
            throw new MatterFlowError(
                "Basic commissioning window is already open! Can not set Enhanced commissioning mode.",
            );
        }

        this.secureChannelProtocol.setPaseCommissioner(paseServer);
        await this.announceAsCommissionable(
            AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen,
            commissioningEndCallback,
            discriminator,
        );
    }

    async allowBasicCommissioning(commissioningEndCallback?: () => void) {
        if (this.activeCommissioningMode === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen) {
            throw new MatterFlowError(
                "Enhanced commissioning window is already open! Can not set Basic commissioning mode.",
            );
        }

        this.secureChannelProtocol.setPaseCommissioner(
            await PaseServer.fromPin(this.getCommissioningConfig().passcode, {
                iterations: 1000,
                salt: Crypto.get().getRandomData(32),
            }),
        );

        await this.announceAsCommissionable(
            AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen,
            commissioningEndCallback,
        );
    }

    async endCommissioning() {
        logger.debug("Commissioning mode ended, stop announcements.");
        // Remove PASE responder when we close enhanced commissioning window or node is commissioned
        if (
            this.activeCommissioningMode === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen ||
            this.isCommissioned()
        ) {
            this.secureChannelProtocol.removePaseCommissioner();
        }
        this.activeCommissioningMode = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
        this.announceInterval.stop();
        this.announcementStartedTime = null;
        if (this.activeCommissioningEndCallback !== undefined) {
            const activeCommissioningEndCallback = this.activeCommissioningEndCallback;
            this.activeCommissioningEndCallback = undefined;
            activeCommissioningEndCallback();
        }
        for (const broadcaster of this.broadcasters) {
            await broadcaster.expireCommissioningAnnouncement();
        }
        logger.info("All Announcements expired");
    }

    existsOpenPaseSession() {
        return !!this.#sessionManager.getPaseSession();
    }

    async findDevice(
        fabric: Fabric,
        nodeId: NodeId,
        timeOutSeconds = 5,
    ): Promise<undefined | { session: Session<MatterDevice>; channel: Channel<ByteArray> }> {
        // TODO: return the first not undefined answer or undefined
        const device = await this.scanners[0].findOperationalDevice(fabric, nodeId, timeOutSeconds);
        if (device === undefined) return undefined;
        const session = this.#sessionManager.getSessionForNode(fabric, nodeId);
        if (session === undefined) return undefined;
        // TODO: have the interface and scanner linked
        const networkInterface = this.transportInterfaces.find(netInterface => isNetworkInterface(netInterface));
        if (networkInterface === undefined || !isNetworkInterface(networkInterface)) {
            throw new NetworkError("No network interface found");
        } // TODO meeehhh
        return { session, channel: await networkInterface.openChannel(device.addresses[0]) };
    }

    async close() {
        this.isClosing = true;
        await this.endCommissioning();
        await this.#announcementMutex;
        for (const broadcaster of this.broadcasters) {
            await broadcaster.close();
        }
        if (this.#failsafeContext) {
            await this.#failsafeContext.close();
            this.#failsafeContext = undefined;
        }
        await this.exchangeManager.close();
        await this.#sessionManager.close();
        await this.channelManager.close();
        for (const transportInterface of this.transportInterfaces) {
            await transportInterface.close();
        }
    }

    getActiveSessionInformation() {
        return this.#sessionManager.getActiveSessionInformation();
    }
}
