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

import { Session } from "./session/Session.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { Fabric } from "./fabric/Fabric.js";
import { FabricManager } from "./fabric/FabricManager.js";
import { Channel } from "./common/Channel.js";
import { TransportInterface } from "./common/TransportInterface.js";
import { ChannelManager } from "./protocol/ChannelManager.js";
import { ExchangeManager } from "./protocol/ExchangeManager.js";
import { ProtocolHandler } from "./protocol/ProtocolHandler.js";
import { InstanceBroadcaster } from "./common/InstanceBroadcaster.js";
import { Scanner } from "./common/Scanner.js";
import { VendorId } from "./datatype/VendorId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { Logger } from "./log/Logger.js";
import { Time, Timer } from "./time/Time.js";
import { ByteArray } from "./util/ByteArray.js";
import { StorageContext } from "./storage/StorageContext.js";
import { isNetworkInterface, NetInterface } from "./net/NetInterface.js";

const logger = Logger.get("MatterDevice");

const DEVICE_ANNOUNCEMENT_DURATION = 15 * 60 * 1000; /** 15 minutes */
const DEVICE_ANNOUNCEMENT_INTERVAL = 60 * 1000; /** 1 minute */

export class MatterDevice {
    private readonly scanners = new Array<Scanner>();
    private readonly broadcasters = new Array<InstanceBroadcaster>();
    private readonly transportInterfaces = new Array<TransportInterface | NetInterface>();
    private readonly fabricManager;
    private readonly sessionManager;
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private announceInterval: Timer | null = null;
    private announcementStartedTime: number | null = null
    private commissioningWindowOpened = false;

    constructor(
        private readonly deviceName: string,
        private readonly deviceType: number,
        private readonly vendorId: VendorId,
        private readonly productId: number,
        private readonly discriminator: number,
        private readonly storage: StorageContext,
        private readonly initialCommissioningCallback: () => void,
    ) {
        this.fabricManager = new FabricManager(this.storage);

        this.sessionManager = new SessionManager(this, this.storage);
        this.sessionManager.initFromStorage(this.fabricManager.getFabrics());

        this.exchangeManager = new ExchangeManager<MatterDevice>(this.sessionManager, this.channelManager);
    }

    addScanner(scanner: Scanner) {
        this.scanners.push(scanner);
        return this;
    }

    addBroadcaster(broadcaster: InstanceBroadcaster) {
        this.broadcasters.push(broadcaster);
        return this;
    }

    addTransportInterface(netInterface: TransportInterface) {
        this.exchangeManager.addTransportInterface(netInterface);
        this.transportInterfaces.push(netInterface);
        return this;
    }

    addProtocolHandler(protocol: ProtocolHandler<MatterDevice>) {
        this.exchangeManager.addProtocolHandler(protocol);
        return this;
    }

    async start() {
        /*for (const broadcaster of this.broadcasters) {
            broadcaster.setCommissionMode(0, this.deviceName, this.deviceType, this.vendorId, this.productId, this.discriminator);
            broadcaster.announce();
        }*/
        this.startAnnouncement();
    }

    startAnnouncement() {
        this.announcementStartedTime = Time.nowMs();
        this.announceInterval = Time.getPeriodicTimer(DEVICE_ANNOUNCEMENT_INTERVAL, () => this.announce()).start();
        this.announce();
    }

    announce(announceOnce = false) {
        if (!announceOnce) {
            // Stop announcement if duration is reached
            if (this.announcementStartedTime !== null && Time.nowMs() - this.announcementStartedTime > DEVICE_ANNOUNCEMENT_DURATION) {
                this.announceInterval?.stop();
                this.announcementStartedTime = null;
                logger.debug("Announcement duration reached, stop announcing");
                return;
            }
            if (this.commissioningWindowOpened) {
                // Re-Announce but do not re-set Fabrics
                for (const broadcaster of this.broadcasters) {
                    broadcaster.announce();
                }
                return;
            }
        }
        const fabrics = this.fabricManager.getFabrics();
        if (fabrics.length) {
            const fabricsToAnnounce: Fabric[] = [];
            for (const fabric of fabrics) {
                const session = this.sessionManager.getSessionForNode(fabric, fabric.rootNodeId);
                if (session) {
                    // We have a session, no need to re-announce
                    logger.debug("Skipping announce for fabric", fabric.fabricId.id, "because we have a session", session.getId());
                    continue;
                }
                logger.debug("Announcing", Logger.dict({ fabric: fabric.fabricId.id }));
                fabricsToAnnounce.push(fabric);
            }
            for (const broadcaster of this.broadcasters) {
                broadcaster.setFabrics(fabricsToAnnounce);
                broadcaster.announce();
            }
        } else {
            // No fabric paired yeet, so announce as "ready for commissioning"
            for (const broadcaster of this.broadcasters) {
                broadcaster.setCommissionMode(1, {
                    deviceName: this.deviceName,
                    deviceType: this.deviceType,
                    vendorId: this.vendorId,
                    productId: this.productId,
                    discriminator: this.discriminator,
                });
                broadcaster.announce();
            }
        }
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    createSecureSession(sessionId: number, fabric: Fabric | undefined, peerNodeId: NodeId, peerSessionId: number, sharedSecret: ByteArray, salt: ByteArray, isInitiator: boolean, isResumption: boolean, idleRetransTimeoutMs?: number, activeRetransTimeoutMs?: number) {
        return this.sessionManager.createSecureSession(sessionId, fabric, peerNodeId, peerSessionId, sharedSecret, salt, isInitiator, isResumption, idleRetransTimeoutMs, activeRetransTimeoutMs);
    }

    findFabricFromDestinationId(destinationId: ByteArray, peerRandom: ByteArray) {
        return this.fabricManager.findFabricFromDestinationId(destinationId, peerRandom);
    }

    addFabric(fabric: Fabric) {
        if (this.fabricManager.getFabrics().length === 0) {
            this.initialCommissioningCallback(); // Inform upper layer to pot add MDNS Broadcaster: TODO Change when refactoring MatterDevice away
        }
        this.fabricManager.addFabric(fabric);
        this.broadcasters.forEach(broadcaster => {
            broadcaster.setFabrics([fabric]);
            broadcaster.announce();
        });
        return fabric.fabricIndex;
    }

    getFabricByIndex(fabricIndex: FabricIndex) {
        return this.fabricManager.getFabrics().find(fabric => fabric.fabricIndex.index === fabricIndex.index);
    }

    initiateExchange(fabric: Fabric, nodeId: NodeId, protocolId: number) {
        return this.exchangeManager.initiateExchange(fabric, nodeId, protocolId);
    }

    findResumptionRecordById(resumptionId: ByteArray) {
        return this.sessionManager.findResumptionRecordById(resumptionId);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.sessionManager.saveResumptionRecord(resumptionRecord);
    }

    armFailSafe() {
        return this.fabricManager.armFailSafe();
    }

    getFabricBuilder() {
        return this.fabricManager.getFabricBuilder();
    }

    getFabrics() {
        return this.fabricManager.getFabrics();
    }

    completeCommission() {
        this.commissioningWindowOpened = false;
        return this.fabricManager.completeCommission();
    }

    isCommissioned() {
        return !!this.fabricManager.getFabrics().length;
    }

    openCommissioningModeWindow(mode: number, discriminator: number, timeout: number) {
        this.commissioningWindowOpened = true;
        this.broadcasters.forEach(broadcaster => {
            broadcaster.setCommissionMode(mode, {
                deviceName: this.deviceName,
                deviceType: this.deviceType,
                vendorId: this.vendorId,
                productId: this.productId,
                discriminator,
            });
        });
        this.startAnnouncement();

        Time.getTimer(timeout * 1000, () => this.commissioningWindowOpened = false).start();
    }

    async findDevice(fabric: Fabric, nodeId: NodeId, timeOutSeconds = 5): Promise<undefined | { session: Session<MatterDevice>, channel: Channel<ByteArray> }> {
        // TODO: return the first not undefined answer or undefined
        const matterServer = await this.scanners[0].findOperationalDevice(fabric, nodeId, timeOutSeconds);
        if (matterServer.length === 0) return undefined;
        const session = this.sessionManager.getSessionForNode(fabric, nodeId);
        if (session === undefined) return undefined;
        // TODO: have the interface and scanner linked
        const networkInterface = this.transportInterfaces.find(netInterface => isNetworkInterface(netInterface));
        if (networkInterface === undefined || !isNetworkInterface(networkInterface)) {
            throw new Error("No network interface found");
        } // TODO meeehhh
        return { session, channel: await networkInterface.openChannel(matterServer[0]) };
    }

    async stop() {
        this.exchangeManager.close();
        this.announceInterval?.stop();
    }
}
