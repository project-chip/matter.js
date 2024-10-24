/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Important note: This file is part of the legacy matter-node (internal) API and should not be used anymore directly!
 * Please use the new API classes!
 * @deprecated
 */

import {
    Construction,
    InternalError,
    ObserverGroup,
    StorageContext,
    TransportInterface,
    TransportInterfaceSet,
    asyncNew,
} from "#general";
import {
    ChannelManager,
    CommissioningConfigProvider,
    DeviceAdvertiser,
    DeviceCommissioner,
    ExchangeManager,
    Fabric,
    FabricAction,
    FabricManager,
    FailsafeContext,
    InstanceBroadcaster,
    PaseServer,
    PeerAddress,
    ProtocolHandler,
    SecureChannelProtocol,
    Session,
    SessionManager,
    SessionParameters,
} from "#protocol";
import { CommissioningOptions, FabricIndex } from "#types";

export class MatterDevice {
    readonly #exchangeManager;
    readonly #fabricManager: FabricManager;
    readonly #sessionManager: SessionManager;
    readonly #commissioner: DeviceCommissioner;
    readonly #advertiser: DeviceAdvertiser;
    readonly #transportInterfaces: TransportInterfaceSet;
    readonly #channelManager: ChannelManager;
    readonly #observers = new ObserverGroup();
    #isClosing = false;

    #construction: Construction<MatterDevice>;

    get construction() {
        return this.#construction;
    }

    static async create(
        sessionStorage: StorageContext,
        fabricStorage: StorageContext,
        getCommissioningConfig: () => CommissioningOptions.Configuration,
        minimumCaseSessionsPerFabricAndNode = 3,
        commissioningChangedCallback: (fabricIndex: FabricIndex, fabricAction: FabricAction) => void,
        sessionChangedCallback: (fabricIndex: FabricIndex) => void,
        sessionParameters?: Partial<SessionParameters>,
    ) {
        return asyncNew(
            MatterDevice,
            sessionStorage,
            fabricStorage,
            getCommissioningConfig,
            minimumCaseSessionsPerFabricAndNode,
            commissioningChangedCallback,
            sessionChangedCallback,
            sessionParameters,
        );
    }

    constructor(
        readonly sessionStorage: StorageContext,
        readonly fabricStorage: StorageContext,
        getCommissioningConfig: () => CommissioningOptions.Configuration,
        minimumCaseSessionsPerFabricAndNode: number,
        private readonly commissioningChangedCallback: (fabricIndex: FabricIndex, fabricAction: FabricAction) => void,
        private readonly sessionChangedCallback: (fabricIndex: FabricIndex) => void,
        sessionParameters: Partial<SessionParameters> = {},
    ) {
        this.#channelManager = new ChannelManager(minimumCaseSessionsPerFabricAndNode);

        this.#fabricManager = new FabricManager(fabricStorage);

        this.#observers.on(this.#fabricManager.events.deleted, async ({ fabricIndex }) =>
            this.commissioningChangedCallback(fabricIndex, FabricAction.Removed),
        );
        this.#observers.on(this.#fabricManager.events.updated, ({ fabricIndex }) =>
            this.commissioningChangedCallback(fabricIndex, FabricAction.Updated),
        );

        this.#sessionManager = new SessionManager({
            fabrics: this.#fabricManager,
            storage: sessionStorage,
            parameters: sessionParameters,
            owner: this,
        });

        this.#transportInterfaces = new TransportInterfaceSet();

        this.#exchangeManager = new ExchangeManager({
            transportInterfaces: this.#transportInterfaces,
            sessionManager: this.#sessionManager,
            channelManager: this.#channelManager,
        });

        const secureChannelProtocol = new SecureChannelProtocol(this.#sessionManager, this.#fabricManager);

        this.#exchangeManager.addProtocolHandler(secureChannelProtocol);

        this.#observers.on(this.#sessionManager.sessions.added, session => {
            if (session.fabric) {
                this.sessionChangedCallback(session.fabric.fabricIndex);
            }
        });

        this.#observers.on(this.#sessionManager.sessions.deleted, async session => {
            const currentFabricIndex = session.fabric?.fabricIndex;
            if (currentFabricIndex !== undefined) {
                this.sessionChangedCallback(currentFabricIndex);
            }
        });

        this.#observers.on(this.#sessionManager.subscriptionsChanged, (session, _subscription) => {
            const currentFabric = session.fabric;
            if (currentFabric !== undefined) {
                this.sessionChangedCallback(currentFabric.fabricIndex);
            }
        });

        this.#advertiser = new DeviceAdvertiser({
            fabrics: this.fabricManager,
            sessions: this.sessionManager,
        });
        this.#commissioner = new DeviceCommissioner({
            fabrics: this.fabricManager,
            sessions: this.sessionManager,
            advertiser: this.#advertiser,
            secureChannelProtocol,
            commissioningConfig: new (class extends CommissioningConfigProvider {
                get values() {
                    return getCommissioningConfig();
                }
            })(),
        });

        this.#construction = Construction(this, async () => {
            await this.#fabricManager.construction.ready;

            // Attach added events delayed because initialization from storage would else trigger it
            this.#observers.on(this.#fabricManager.events.added, ({ fabricIndex }) =>
                this.commissioningChangedCallback(fabricIndex, FabricAction.Added),
            );

            await this.#sessionManager.construction.ready;
        });
    }

    get fabricManager() {
        return this.#fabricManager;
    }

    get sessionManager() {
        return this.#sessionManager;
    }

    get exchangeManager() {
        return this.#exchangeManager;
    }

    get advertiser() {
        return this.#advertiser;
    }

    get commissioner() {
        return this.#commissioner;
    }

    get failsafeContext() {
        return this.#commissioner.failsafeContext;
    }

    get isClosing() {
        return this.#isClosing;
    }

    async beginTimed(failsafeContext: FailsafeContext) {
        return this.#commissioner.beginTimed(failsafeContext);
    }

    assertFailSafeArmed(message?: string) {
        return this.#commissioner.assertFailsafeArmed(message);
    }

    isFailsafeArmed() {
        return this.#commissioner.isFailsafeArmed;
    }

    hasBroadcaster(broadcaster: InstanceBroadcaster) {
        return this.#advertiser.hasBroadcaster(broadcaster);
    }

    addBroadcaster(broadcaster: InstanceBroadcaster) {
        this.#advertiser.addBroadcaster(broadcaster);
        return this;
    }

    async deleteBroadcaster(broadcaster: InstanceBroadcaster) {
        return this.#advertiser.deleteBroadcaster(broadcaster);
    }

    addTransportInterface(transport: TransportInterface) {
        this.#transportInterfaces.add(transport);
        return this;
    }

    async deleteTransportInterface(transport: TransportInterface) {
        this.#transportInterfaces.delete(transport);
    }

    hasProtocolHandler(protocolId: number) {
        return this.exchangeManager.hasProtocolHandler(protocolId);
    }

    addProtocolHandler(protocol: ProtocolHandler) {
        this.exchangeManager.addProtocolHandler(protocol);
        return this;
    }

    async start() {
        await this.startAnnouncement();
    }

    async startAnnouncement() {
        return this.#advertiser.startAdvertising();
    }

    async announce(announceOnce = false) {
        return this.#advertiser.advertise(announceOnce);
    }

    reAnnounceAsCommissionable() {
        this.#commissioner.reactivateAdvertiser();
    }

    findFabricFromDestinationId(destinationId: Uint8Array, peerRandom: Uint8Array) {
        return this.#fabricManager.findFabricFromDestinationId(destinationId, peerRandom);
    }

    async sendFabricAnnouncements(fabrics: Fabric[], expireCommissioningAnnouncement = false) {
        return this.#advertiser.advertiseFabrics(fabrics, expireCommissioningAnnouncement);
    }

    getFabricByIndex(fabricIndex: FabricIndex) {
        return this.#fabricManager.findByIndex(fabricIndex);
    }

    initiateExchange(address: PeerAddress, protocolId: number) {
        return this.#exchangeManager.initiateExchange(address, protocolId);
    }

    getFabrics() {
        return this.#fabricManager.fabrics;
    }

    isCommissioned() {
        return !!this.#fabricManager.length;
    }

    async allowEnhancedCommissioning(
        discriminator: number,
        paseServer: PaseServer,
        commissioningEndCallback: () => void,
    ) {
        return this.#commissioner.allowEnhancedCommissioning(discriminator, paseServer, commissioningEndCallback);
    }

    async allowBasicCommissioning(commissioningEndCallback?: () => void) {
        return this.#commissioner.allowBasicCommissioning(commissioningEndCallback);
    }

    async endCommissioning() {
        return this.#commissioner.endCommissioning();
    }

    existsOpenPaseSession() {
        return !!this.#sessionManager.getPaseSession();
    }

    async close() {
        this.#isClosing = true;
        this.#observers.close();
        await this.#commissioner.close();
        await this.#advertiser.close();
        await this.exchangeManager.close();
        await this.#sessionManager.close();
        await this.#channelManager.close();
        await this.#transportInterfaces.close();
    }

    getActiveSessionInformation() {
        return this.#sessionManager.getActiveSessionInformation();
    }

    static of(session: Session | undefined) {
        if (session === undefined) {
            throw new InternalError("Device operation without session");
        }
        const device = session.owner;
        if (!(device instanceof MatterDevice)) {
            throw new InternalError("Device operation on non-device session");
        }
        return device;
    }
}
