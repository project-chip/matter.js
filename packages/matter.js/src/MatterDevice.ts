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

import { AdministratorCommissioning } from "./cluster/definitions/AdministratorCommissioningCluster.js";

import { BasicInformation } from "./cluster/definitions/BasicInformationCluster.js";
import { GeneralCommissioning } from "./cluster/definitions/GeneralCommissioningCluster.js";
import { OperationalCredentials } from "./cluster/definitions/OperationalCredentialsCluster.js";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "./cluster/server/AdministratorCommissioningServer.js";
import { Channel } from "./common/Channel.js";
import { FailSafeManager } from "./common/FailSafeManager.js";
import { InstanceBroadcaster } from "./common/InstanceBroadcaster.js";
import { InternalError, MatterFlowError } from "./common/MatterError.js";
import { Scanner } from "./common/Scanner.js";
import { TransportInterface } from "./common/TransportInterface.js";
import { Crypto } from "./crypto/Crypto.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { EndpointInterface } from "./endpoint/EndpointInterface.js";
import { Fabric } from "./fabric/Fabric.js";
import { FabricManager } from "./fabric/FabricManager.js";
import { Logger } from "./log/Logger.js";
import { isNetworkInterface, NetInterface } from "./net/NetInterface.js";
import { NetworkError } from "./net/Network.js";
import { CommissioningOptions } from "./node/options/CommissioningOptions.js";
import { ChannelManager } from "./protocol/ChannelManager.js";
import { ExchangeManager } from "./protocol/ExchangeManager.js";
import { StatusResponseError } from "./protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "./protocol/interaction/InteractionProtocol.js";
import { ProtocolHandler } from "./protocol/ProtocolHandler.js";
import { SecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "./session/pase/PaseServer.js";
import { SecureSession } from "./session/SecureSession.js";
import { Session } from "./session/Session.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { StorageContext } from "./storage/StorageContext.js";
import { Time, Timer } from "./time/Time.js";
import { ByteArray } from "./util/ByteArray.js";

const logger = Logger.get("MatterDevice");

const DEVICE_ANNOUNCEMENT_DURATION_MS = MAXIMUM_COMMISSIONING_TIMEOUT_S * 1000; /** 15 minutes */
const DEVICE_ANNOUNCEMENT_INTERVAL_MS = 60 * 1000;

export class MatterDevice {
    private readonly scanners = new Array<Scanner>();
    private readonly broadcasters = new Array<InstanceBroadcaster>();
    private readonly transportInterfaces = new Array<TransportInterface | NetInterface>();
    private readonly fabricManager;
    private readonly sessionManager;
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private readonly secureChannelProtocol = new SecureChannelProtocol(() => this.endCommissioning());
    private activeCommissioningMode = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
    private activeCommissioningEndCallback?: () => void;
    private announceInterval: Timer;
    private announcementStartedTime: number | null = null;
    private isClosing = false;
    private failSafeContext?: FailSafeManager;

    constructor(
        private readonly commissioningOptions: CommissioningOptions.Configuration,
        private readonly storage: StorageContext,
        private readonly commissioningChangedCallback: (fabricIndex: FabricIndex) => void,
        private readonly sessionChangedCallback: (fabricIndex: FabricIndex) => void,
    ) {
        this.fabricManager = new FabricManager(this.storage, (fabricIndex: FabricIndex, peerNodeId: NodeId) => {
            // When fabric is removed, also remove the resumption record
            this.sessionManager.removeResumptionRecord(peerNodeId);
            this.commissioningChangedCallback(fabricIndex);
        });

        this.sessionManager = new SessionManager(this, this.storage);
        this.sessionManager.initFromStorage(this.fabricManager.getFabrics());

        this.exchangeManager = new ExchangeManager<MatterDevice>(this.sessionManager, this.channelManager);

        this.addProtocolHandler(this.secureChannelProtocol);

        this.announceInterval = Time.getPeriodicTimer(DEVICE_ANNOUNCEMENT_INTERVAL_MS, () => this.announce());
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

    addTransportInterface(netInterface: TransportInterface) {
        this.exchangeManager.addTransportInterface(netInterface);
        this.transportInterfaces.push(netInterface);
        return this;
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
        const fabrics = this.fabricManager.getFabrics();
        if (fabrics.length) {
            let fabricsWithoutSessions = 0;
            for (const fabric of fabrics) {
                const session = this.sessionManager.getSessionForNode(fabric, fabric.rootNodeId);
                if (
                    session === undefined ||
                    !session.isSecure() ||
                    (session as SecureSession<this>).numberOfActiveSubscriptions === 0
                ) {
                    fabricsWithoutSessions++;
                    logger.debug("Announcing", Logger.dict({ fabric: fabric.fabricId }));
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
            throw new InternalError("Commissioning window already open with different mode!");
        }
        if (this.activeCommissioningEndCallback !== undefined) {
            throw new InternalError("Commissioning window already open with different callback!");
        }
        this.activeCommissioningMode = mode;
        if (activeCommissioningEndCallback !== undefined) {
            this.activeCommissioningEndCallback = activeCommissioningEndCallback;
        }
        // MDNS is sent in parallel
        this.sendCommissionableAnnouncement(mode, discriminator).catch(error =>
            logger.warn("Error sending announcement", error),
        );
    }

    async sendCommissionableAnnouncement(
        mode: AdministratorCommissioning.CommissioningWindowStatus,
        discriminator?: number,
    ) {
        for (const broadcaster of this.broadcasters) {
            await broadcaster.setCommissionMode(
                mode === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen ? 2 : 1,
                {
                    ...this.commissioningOptions.productDescription,
                    discriminator: discriminator ?? this.commissioningOptions.discriminator,
                },
            );
        }
        await this.startAnnouncement();
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    async createSecureSession(
        sessionId: number,
        fabric: Fabric | undefined,
        peerNodeId: NodeId,
        peerSessionId: number,
        sharedSecret: ByteArray,
        salt: ByteArray,
        isInitiator: boolean,
        isResumption: boolean,
        idleRetransmissionTimeoutMs?: number,
        activeRetransmissionTimeoutMs?: number,
    ) {
        const session = await this.sessionManager.createSecureSession({
            sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            idleRetransmissionTimeoutMs,
            activeRetransmissionTimeoutMs,
            closeCallback: async () => {
                logger.debug(`Remove ${session.isPase() ? "PASE" : "CASE"} session`, session.name);
                if (session.isPase() && this.failSafeContext !== undefined) {
                    await this.failSafeContext.expire();
                }
                if (!session.closingAfterExchangeFinished) {
                    // Delayed closing is executed when exchange is closed
                    await this.exchangeManager.closeSession(session);
                }
                const currentFabric = session.getFabric();
                if (currentFabric !== undefined) {
                    this.sessionChangedCallback(currentFabric.fabricIndex);
                }
                await this.startAnnouncement();
            },
            subscriptionChangedCallback: () => {
                const currentFabric = session.getFabric();
                if (currentFabric !== undefined) {
                    this.sessionChangedCallback(currentFabric.fabricIndex);
                }
            },
        });
        if (fabric !== undefined) {
            this.sessionChangedCallback(fabric.fabricIndex);
        }
        return session;
    }

    findFabricFromDestinationId(destinationId: ByteArray, peerRandom: ByteArray) {
        return this.fabricManager.findFabricFromDestinationId(destinationId, peerRandom);
    }

    updateFabric(fabric: Fabric) {
        this.fabricManager.updateFabric(fabric);
        this.sessionManager.updateFabricForResumptionRecords(fabric);
        this.commissioningChangedCallback(fabric.fabricIndex);
    }

    getNextFabricIndex() {
        return this.fabricManager.getNextFabricIndex();
    }

    async addFabric(fabric: Fabric) {
        this.fabricManager.addFabric(fabric);
        if (this.failSafeContext !== undefined) {
            this.failSafeContext.associatedFabric = fabric;
        }
        if (this.activeCommissioningMode !== AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
            await this.endCommissioning();
        }
        this.commissioningChangedCallback(fabric.fabricIndex);
        const fabrics = this.fabricManager.getFabrics();
        this.sendFabricAnnouncements(fabrics, true).catch(error =>
            logger.warn(`Error sending Fabric announcement for Index ${fabric.fabricIndex}`, error),
        );
        logger.info("Announce done", Logger.dict({ fabric: fabric.fabricId }));
        return fabric.fabricIndex;
    }

    async sendFabricAnnouncements(fabrics: Fabric[], expireCommissioningAnnouncement = false) {
        for (const broadcaster of this.broadcasters) {
            await broadcaster.setFabrics(fabrics, expireCommissioningAnnouncement);
            await broadcaster.announce();
        }
    }

    getFabricByIndex(fabricIndex: FabricIndex) {
        return this.fabricManager.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
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

    async removePaseSession() {
        const session = this.sessionManager.getPaseSession();
        if (session) {
            await session.close(true);
        }
    }

    assertFailSafeArmed(message?: string) {
        if (this.isFailsafeArmed()) return;
        throw new StatusResponseError(
            message ?? "Failsafe timer needs to be armed to execute this action.",
            StatusCode.FailsafeRequired,
        );
    }

    private async failSafeExpired() {
        if (this.failSafeContext === undefined) return;
        const failSafeContext = this.failSafeContext;
        this.failSafeContext = undefined;

        logger.info("Failsafe timer expired, Reset fabric builder.");
        if (failSafeContext.fabricIndex !== undefined && !failSafeContext.forUpdateNoc) {
            await this.fabricManager.revokeFabric(failSafeContext.fabricIndex);
        }

        // On expiry of the fail-safe timer, the following actions SHALL be performed in order:
        // 1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the Server.
        await this.removePaseSession();

        // TODO 2. Revoke the temporary administrative privileges granted to any open PASE session (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”) at the Server.

        // 3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions associated with the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section 11.9.6.2, “ArmFailSafe Command”) by clearing any associated Secure Session Context at the Server.
        let fabric: Fabric | undefined = undefined;
        if (failSafeContext.fabricIndex !== undefined) {
            const fabricIndex = failSafeContext.fabricIndex;
            fabric = this.fabricManager.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
            if (fabric !== undefined) {
                const session = this.sessionManager.getSessionForNode(fabric, fabric.rootNodeId);
                if (session !== undefined && session.isSecure()) {
                    await (session as SecureSession<any>).close(false);
                }
            }
        }

        // 4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the
        //    Fail-Safe being armed.
        failSafeContext.restoreEndpointState();

        // 5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair, NOC and
        //    ICAC for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric Index that was
        //    the subject of the UpdateNOC command.
        if (failSafeContext.associatedFabric !== undefined) {
            if (failSafeContext.forUpdateNoc) {
                // update FabricManager and Resumption records but leave current session intact
                this.updateFabric(failSafeContext.associatedFabric);
            }

            const operationalCredentialsCluster = failSafeContext.rootEndpoint.getClusterServer(
                OperationalCredentials.Cluster,
            );
            operationalCredentialsCluster?.attributes.nocs.updatedLocalForFabric(failSafeContext.associatedFabric);
            operationalCredentialsCluster?.attributes.fabrics.updatedLocalForFabric(failSafeContext.associatedFabric);
        }

        // 6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the RemoveFabric command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index that was the subject of the AddNOC command. This SHALL remove all associations to that Fabric including all fabric-scoped data, and MAY possibly factory-reset the device depending on current device state. This SHALL only apply to Fabrics added during the fail-safe period as the result of the AddNOC command.
        // 7. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced by any entry in the Fabrics attribute.
        if (fabric !== undefined) {
            const fabricIndex = failSafeContext.fabricBuilder.getFabricIndex();
            if (fabricIndex !== undefined) {
                const fabric = this.fabricManager.getFabrics().find(fabric => fabric.fabricIndex === fabricIndex);
                if (fabric !== undefined) {
                    const basicInformationCluster = failSafeContext.rootEndpoint.getClusterServer(
                        BasicInformation.Cluster,
                    );
                    basicInformationCluster?.triggerLeaveEvent?.({ fabricIndex });

                    await fabric.remove();

                    const operationalCredentialsCluster = failSafeContext.rootEndpoint.getClusterServer(
                        OperationalCredentials.Cluster,
                    );
                    operationalCredentialsCluster?.attributes.nocs.updatedLocalForFabric(fabric);
                    operationalCredentialsCluster?.attributes.commissionedFabrics.updatedLocal();
                    operationalCredentialsCluster?.attributes.fabrics.updatedLocalForFabric(fabric);
                    operationalCredentialsCluster?.attributes.trustedRootCertificates.updatedLocal();
                }
            }
        }

        // 8. Reset the Breadcrumb attribute to zero.
        const generalCommissioningCluster = failSafeContext.rootEndpoint.getClusterServer(GeneralCommissioning.Cluster);
        generalCommissioningCluster?.setBreadcrumbAttribute(0);

        // TODO 9. Optionally: if no factory-reset resulted from the previous steps, it is RECOMMENDED that the
        //  Node rollback the state of all non fabric-scoped data present in the Fail-Safe context.
    }

    async armFailSafe(
        expiryLengthSeconds: number,
        maxCumulativeFailsafeSeconds: number,
        associatedFabric: Fabric | undefined,
        endpoint: EndpointInterface,
    ) {
        if (this.failSafeContext === undefined) {
            // If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation SHALL lead
            // to a success response with no side effect against the fail-safe context.
            if (expiryLengthSeconds === 0) return;

            // If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the fail-safe
            // timer SHALL be armed for that duration.
            this.failSafeContext = new FailSafeManager(
                this,
                associatedFabric,
                expiryLengthSeconds,
                maxCumulativeFailsafeSeconds,
                () => this.failSafeExpired(),
                endpoint,
            );
            logger.debug(`Arm failSafe timer for ${expiryLengthSeconds}s.`);
        } else {
            await this.failSafeContext.reArm(associatedFabric, expiryLengthSeconds);
            if (expiryLengthSeconds > 0) {
                logger.debug(`Extend failSafe timer for ${expiryLengthSeconds}s.`);
            }
        }
    }

    isFailsafeArmed() {
        return this.failSafeContext !== undefined;
    }

    getFailSafeContext() {
        if (this.failSafeContext === undefined) throw new MatterFlowError("armFailSafe should be called first!");
        return this.failSafeContext;
    }

    getFabrics() {
        return this.fabricManager.getFabrics();
    }

    async completeCommission() {
        // 1. The Fail-Safe timer associated with the current Fail-Safe context SHALL be disarmed.
        if (this.failSafeContext === undefined) {
            throw new MatterFlowError("armFailSafe should be called first!"); // TODO
        }
        this.failSafeContext.complete();

        if (this.failSafeContext.fabricIndex !== undefined) {
            this.fabricManager.persistFabrics();
        }

        this.failSafeContext = undefined;

        // 2. The commissioning window at the Server SHALL be closed.
        await this.endCommissioning();

        // TODO 3. Any temporary administrative privileges automatically granted to any open PASE session SHALL be revoked (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).

        // 4. The Secure Session Context of any PASE session still established at the Server SHALL be cleared.
        await this.removePaseSession();
    }

    isCommissioned() {
        return !!this.fabricManager.getFabrics().length;
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
            await PaseServer.fromPin(this.commissioningOptions.passcode, {
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
        return !!this.sessionManager.getPaseSession();
    }

    async findDevice(
        fabric: Fabric,
        nodeId: NodeId,
        timeOutSeconds = 5,
    ): Promise<undefined | { session: Session<MatterDevice>; channel: Channel<ByteArray> }> {
        // TODO: return the first not undefined answer or undefined
        const matterServer = await this.scanners[0].findOperationalDevice(fabric, nodeId, timeOutSeconds);
        if (matterServer.length === 0) return undefined;
        const session = this.sessionManager.getSessionForNode(fabric, nodeId);
        if (session === undefined) return undefined;
        // TODO: have the interface and scanner linked
        const networkInterface = this.transportInterfaces.find(netInterface => isNetworkInterface(netInterface));
        if (networkInterface === undefined || !isNetworkInterface(networkInterface)) {
            throw new NetworkError("No network interface found");
        } // TODO meeehhh
        return { session, channel: await networkInterface.openChannel(matterServer[0]) };
    }

    async stop() {
        this.isClosing = true;
        await this.endCommissioning();
        for (const broadcaster of this.broadcasters) {
            await broadcaster.expireAllAnnouncements();
        }
        if (this.failSafeContext) {
            await this.failSafeContext.expire();
            this.failSafeContext = undefined;
        }
        await this.exchangeManager.close();
        await this.sessionManager.close();
        await this.channelManager.close();
        for (const transportInterface of this.transportInterfaces) {
            await transportInterface.close();
        }
    }

    getActiveSessionInformation() {
        return this.sessionManager.getActiveSessionInformation();
    }
}
