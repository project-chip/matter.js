/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResumptionRecord, SessionManager } from "./session/SessionManager";
import { FabricManager } from "./fabric/FabricManager";
import { Session } from "./session/Session";
import { Fabric } from "./fabric/Fabric";
import { NetInterface } from "../net/NetInterface";
import { Channel } from "../net/Channel";
import { ProtocolHandler } from "./common/ProtocolHandler";
import { Broadcaster } from "./common/Broadcaster";
import { ExchangeManager } from "./common/ExchangeManager";
import { requireMinNodeVersion } from "../util/Node";
import { Scanner } from "./common/Scanner";
import { ChannelManager } from "./common/ChannelManager";
import { VendorId } from "./common/VendorId";
import { NodeId } from "./common/NodeId";
import { ByteArray } from "@project-chip/matter.js";
import { FabricIndex } from "./common/FabricIndex";

requireMinNodeVersion(16);

export class MatterDevice {
    private readonly scanners = new Array<Scanner>();
    private readonly broadcasters = new Array<Broadcaster>();
    private readonly netInterfaces = new Array<NetInterface>();
    private readonly fabricManager = new FabricManager();
    private readonly sessionManager = new SessionManager(this);
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager = new ExchangeManager<MatterDevice>(this.sessionManager, this.channelManager);

    constructor(
        private readonly deviceName: string,
        private readonly deviceType: number,
        private readonly vendorId: VendorId,
        private readonly productId: number,
        private readonly discriminator: number,
    ) {}

    addScanner(scanner: Scanner) {
        this.scanners.push(scanner);
        return this;
    }

    addBroadcaster(broadcaster: Broadcaster) {
        broadcaster.setCommissionMode(1, this.deviceName, this.deviceType, this.vendorId, this.productId, this.discriminator);
        this.broadcasters.push(broadcaster);
        return this;
    }

    addNetInterface(netInterface: NetInterface) {
        this.exchangeManager.addNetInterface(netInterface);
        this.netInterfaces.push(netInterface);
        return this;
    }

    addProtocolHandler(protocol: ProtocolHandler<MatterDevice>) {
        this.exchangeManager.addProtocolHandler(protocol);
        return this;
    }

    start() {
        this.broadcasters.forEach(broadcaster => broadcaster.announce());
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
        const fabricIndex = this.fabricManager.addFabric(fabric);
        this.broadcasters.forEach(broadcaster => {
            broadcaster.setFabric(fabric.operationalId, fabric.nodeId);
            broadcaster.announce();
        });
        return fabricIndex;
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
        return this.fabricManager.completeCommission();
    }

    openCommissioningModeWindow(mode: number, discriminator: number) {
        this.broadcasters.forEach(broadcaster => {
            broadcaster.setCommissionMode(mode, this.deviceName, this.deviceType, this.vendorId, this.productId, discriminator);
            broadcaster.announce();
        });
    }

    async findDevice(fabric: Fabric, nodeId: NodeId): Promise<undefined | {session: Session<MatterDevice>, channel: Channel<ByteArray>}> {
        // TODO: return the first not undefined answer or undefined
        const matterServer = await this.scanners[0].findDevice(fabric, nodeId);
        if (matterServer === undefined) return undefined;
        const { ip, port } = matterServer;
        const session = this.sessionManager.getSessionForNode(fabric, nodeId);
        if (session === undefined) return undefined;
        // TODO: have the interface and scanner linked
        return { session, channel: await this.netInterfaces[0].openChannel(ip, port)};
    }

    stop() {
        this.exchangeManager.close();
        this.broadcasters.forEach(broadcaster => broadcaster.close());
    }
}
