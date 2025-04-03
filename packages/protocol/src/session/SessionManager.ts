/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricManager } from "#fabric/FabricManager.js";
import {
    BasicSet,
    Bytes,
    Construction,
    Crypto,
    Environment,
    Environmental,
    Lifecycle,
    Logger,
    MatterAggregateError,
    MatterFlowError,
    Mutex,
    Observable,
    ObserverGroup,
    StorageContext,
    StorageManager,
} from "#general";
import { Subscription } from "#interaction/Subscription.js";
import { Specification } from "#model";
import { PeerAddress, PeerAddressMap } from "#peer/PeerAddress.js";
import { CaseAuthenticatedTag, DEFAULT_MAX_PATHS_PER_INVOKE, FabricId, FabricIndex, NodeId } from "#types";
import { SupportedTransportsSchema } from "../common/Scanner.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { InsecureSession } from "./InsecureSession.js";
import { SecureSession } from "./SecureSession.js";
import {
    FALLBACK_DATAMODEL_REVISION,
    FALLBACK_INTERACTIONMODEL_REVISION,
    FALLBACK_MAX_PATHS_PER_INVOKE,
    FALLBACK_MAX_TCP_MESSAGE_SIZE,
    FALLBACK_SPECIFICATION_VERSION,
    Session,
    SESSION_ACTIVE_INTERVAL_MS,
    SESSION_ACTIVE_THRESHOLD_MS,
    SESSION_IDLE_INTERVAL_MS,
    SessionParameterOptions,
    SessionParameters,
} from "./Session.js";

const logger = Logger.get("SessionManager");

const DEFAULT_SESSION_PARAMETERS = {
    idleIntervalMs: SESSION_IDLE_INTERVAL_MS,
    activeIntervalMs: SESSION_ACTIVE_INTERVAL_MS,
    activeThresholdMs: SESSION_ACTIVE_THRESHOLD_MS,
    dataModelRevision: Specification.DATA_MODEL_REVISION,
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    specificationVersion: Specification.SPECIFICATION_VERSION,
    maxPathsPerInvoke: DEFAULT_MAX_PATHS_PER_INVOKE,
    supportedTransports: {},
    maxTcpMessageSize: FALLBACK_MAX_TCP_MESSAGE_SIZE,
};

export const UNICAST_UNSECURE_SESSION_ID = 0x0000;

export interface ResumptionRecord {
    sharedSecret: Uint8Array;
    resumptionId: Uint8Array;
    fabric: Fabric;
    peerNodeId: NodeId;
    sessionParameters: SessionParameters;
    caseAuthenticatedTags?: CaseAuthenticatedTag[];
}

type ResumptionStorageRecord = {
    nodeId: NodeId;
    sharedSecret: Uint8Array;
    resumptionId: Uint8Array;
    fabricId: FabricId;
    peerNodeId: NodeId;
    sessionParameters: {
        idleIntervalMs: number;
        activeIntervalMs: number;
        activeThresholdMs: number;
        dataModelRevision: number;
        interactionModelRevision: number;
        specificationVersion: number;
        maxPathsPerInvoke: number;
        supportedTransports?: number;
        maxTcpMessageSize?: number;
    };
    caseAuthenticatedTags?: CaseAuthenticatedTag[];
};

/**
 * Interfaces {@link SessionManager} with other components.
 */
export interface SessionManagerContext {
    fabrics: FabricManager;
    storage: StorageContext;

    /**
     * Parameter overrides.
     */
    parameters?: Partial<SessionParameters>;

    /**
     * This is an arbitrary contextual object attached to sessions used for compatibility with legacy APIs.
     *
     * @deprecated
     */
    owner?: unknown;
}

/**
 * Manages Matter sessions associated with peer connections.
 */
export class SessionManager {
    readonly #context: SessionManagerContext;
    readonly #insecureSessions = new Map<NodeId, InsecureSession>();
    readonly #sessions = new BasicSet<SecureSession>();
    #nextSessionId = Crypto.getRandomUInt16();
    #resumptionRecords = new PeerAddressMap<ResumptionRecord>();
    readonly #globalUnencryptedMessageCounter = new MessageCounter();
    readonly #subscriptionsChanged = Observable<[session: SecureSession, subscription: Subscription]>();
    #sessionParameters: SessionParameters;
    readonly #resubmissionStarted = Observable<[session: Session]>();
    readonly #construction: Construction<SessionManager>;
    readonly #observers = new ObserverGroup();
    readonly #subscriptionUpdateMutex = new Mutex(this);

    constructor(context: SessionManagerContext) {
        this.#context = context;
        this.#sessionParameters = { ...DEFAULT_SESSION_PARAMETERS, ...context.parameters };

        // When fabric is removed, also remove the resumption record
        this.#observers.on(context.fabrics.events.deleted, async fabric =>
            this.deleteResumptionRecordsForFabric(fabric),
        );

        this.#construction = Construction(this, () => this.#initialize());
    }

    static [Environmental.create](env: Environment) {
        const instance = new SessionManager({
            storage: env.get(StorageManager).createContext("sessions"),
            fabrics: env.get(FabricManager),
        });
        env.set(SessionManager, instance);
        return instance;
    }

    get construction() {
        return this.#construction;
    }

    get context() {
        return this.#context;
    }

    /**
     * Active secure sessions.
     */
    get sessions() {
        return this.#sessions;
    }

    /**
     * Active insecure sessions.
     */
    get insecureSessions() {
        return this.#insecureSessions;
    }

    /**
     * Our session parameters.  These are the parameters we provide during session negotiation.  The peer may specify
     * different parameters.
     */
    get sessionParameters(): SessionParameters {
        return this.#sessionParameters;
    }

    /**
     * Change session parameters.
     *
     * Parameters values you omit in {@link parameters} will retain their current values.  This only affects new
     * sessions.
     */
    set sessionParameters(parameters: Partial<SessionParameters>) {
        this.#sessionParameters = {
            ...this.#sessionParameters,
            ...parameters,
        };
    }

    /**
     * Emits when there is a change to the subscription set.
     */
    get subscriptionsChanged() {
        return this.#subscriptionsChanged;
    }

    /**
     * Emits when resubmission is necessary due to timeout or network error.
     */
    get resubmissionStarted() {
        return this.#resubmissionStarted;
    }

    /**
     * Convenience function for accessing a fabric by address.
     */
    fabricFor(address: FabricIndex | PeerAddress) {
        return this.#context.fabrics.for(address);
    }

    /**
     * @deprecated
     */
    get owner() {
        return this.#context.owner;
    }

    createInsecureSession(options: {
        initiatorNodeId?: NodeId;
        sessionParameters?: SessionParameterOptions;
        isInitiator?: boolean;
    }) {
        this.#construction.assert();

        const { initiatorNodeId, sessionParameters, isInitiator } = options;
        if (initiatorNodeId !== undefined) {
            if (this.#insecureSessions.has(initiatorNodeId)) {
                throw new MatterFlowError(`UnsecureSession with NodeId ${initiatorNodeId} already exists.`);
            }
        }
        while (true) {
            const session = new InsecureSession({
                manager: this,
                messageCounter: this.#globalUnencryptedMessageCounter,
                initiatorNodeId,
                sessionParameters,
                isInitiator: isInitiator ?? false,
            });

            const ephemeralNodeId = session.nodeId;
            if (this.#insecureSessions.has(ephemeralNodeId)) continue;

            this.#insecureSessions.set(ephemeralNodeId, session);
            return session;
        }
    }

    async createSecureSession(args: {
        sessionId: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        sharedSecret: Uint8Array;
        salt: Uint8Array;
        isInitiator: boolean;
        isResumption: boolean;
        peerSessionParameters?: SessionParameterOptions;
        caseAuthenticatedTags?: CaseAuthenticatedTag[];
    }) {
        await this.construction;

        const {
            sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            peerSessionParameters,
            caseAuthenticatedTags,
        } = args;
        const session = await SecureSession.create({
            manager: this,
            id: sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            peerSessionParameters: peerSessionParameters,
            caseAuthenticatedTags,
        });

        const subscriptionsChanged = (subscription: Subscription) => {
            if (session.isClosing) {
                return;
            }

            this.#subscriptionsChanged.emit(session, subscription);
        };

        session.subscriptions.added.on(subscriptionsChanged);
        session.subscriptions.deleted.on(subscriptionsChanged);

        this.#sessions.add(session);

        return session;
    }

    async deleteResumptionRecord(address: PeerAddress) {
        await this.#construction;

        this.#resumptionRecords.delete(address);
        await this.#storeResumptionRecords();
    }

    async deleteResumptionRecordsForFabric(fabric: Fabric) {
        await this.#construction;

        for (const address of this.#resumptionRecords.keys()) {
            if (address.fabricIndex === fabric.fabricIndex) {
                this.#resumptionRecords.delete(address);
            }
        }

        await this.#storeResumptionRecords();
    }

    findOldestInactiveSession() {
        this.#construction.assert();

        let oldestSession: SecureSession | undefined = undefined;
        for (const session of this.#sessions) {
            if (!oldestSession || session.activeTimestamp < oldestSession.activeTimestamp) {
                oldestSession = session;
            }
        }
        if (oldestSession === undefined) {
            throw new MatterFlowError("No session found to close and all session ids are taken.");
        }
        return oldestSession;
    }

    async getNextAvailableSessionId() {
        await this.#construction;

        for (let i = 0; i < 0xffff; i++) {
            const id = this.#nextSessionId;
            this.#nextSessionId = (this.#nextSessionId + 1) & 0xffff;
            if (this.#nextSessionId === 0) this.#nextSessionId++;

            if (this.getSession(id) === undefined) {
                return id;
            }
        }

        // All session ids are taken, search for the oldest unused session, and close it and re-use its ID
        const oldestSession = this.findOldestInactiveSession();
        await oldestSession.end(true, false);
        this.#nextSessionId = oldestSession.id;
        return this.#nextSessionId++;
    }

    getSession(sessionId: number) {
        this.#construction.assert();

        return this.#sessions.get("id", sessionId);
    }

    getPaseSession() {
        this.#construction.assert();

        return [...this.#sessions].find(
            session => session.isSecure && session.isPase && !session.closingAfterExchangeFinished,
        ) as SecureSession;
    }

    getSessionForNode(address: PeerAddress) {
        this.#construction.assert();

        //TODO: It can have multiple sessions for one node ...
        return [...this.#sessions].find(session => {
            if (!session.isSecure) return false;
            const secureSession = session;
            return secureSession.peerIs(address);
        });
    }

    async removeAllSessionsForNode(address: PeerAddress, sendClose = false, closeBeforeCreatedTimestamp?: number) {
        await this.#construction;

        for (const session of this.#sessions) {
            if (!session.isSecure) continue;
            if (closeBeforeCreatedTimestamp !== undefined && session.createdAt >= closeBeforeCreatedTimestamp) continue;
            const secureSession = session;
            if (secureSession.peerIs(address)) {
                await secureSession.destroy(sendClose, false);
                this.#sessions.delete(session);
            }
        }
    }

    getUnsecureSession(sourceNodeId?: NodeId) {
        this.#construction.assert();

        if (sourceNodeId === undefined) {
            return this.#insecureSessions.get(NodeId.UNSPECIFIED_NODE_ID);
        }
        return this.#insecureSessions.get(sourceNodeId);
    }

    findGroupSession(groupId: number, groupSessionId: number) {
        this.#construction.assert();

        // Use groupsession id to find the key ??!!
        // The Group Session ID MAY help receiving nodes efficiently locate the Operational Group Key used to encrypt an incoming groupcast message. It SHALL NOT be used as the sole means to locate the asso­ ciated Operational Group Key, since it MAY collide within the fabric. Instead, the Group Session ID provides receiving nodes a means to identify Operational Group Key candidates without the need to first attempt to decrypt groupcast messages using all available keys.
        // On receipt of a message of Group Session Type, all valid, installed, operational group key candidates referenced by the given Group Session ID SHALL be attempted until authentication is passed or there are no more operational group keys to try. This is done because the same Group Session ID might arise from different keys. The chance of a Group Session ID collision is 2-16 but the chance of both a Group Session ID collision and the message MIC matching two different operational group keys is 2-80.

        // TODO
        throw new Error(`Not implemented ${groupId} ${groupSessionId}`);
    }

    findResumptionRecordById(resumptionId: Uint8Array) {
        this.#construction.assert();
        return [...this.#resumptionRecords.values()].find(record => Bytes.areEqual(record.resumptionId, resumptionId));
    }

    findResumptionRecordByAddress(address: PeerAddress) {
        this.#construction.assert();
        return this.#resumptionRecords.get(address);
    }

    async saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        await this.#construction;
        this.#resumptionRecords.set(resumptionRecord.fabric.addressOf(resumptionRecord.peerNodeId), resumptionRecord);
        await this.#storeResumptionRecords();
    }

    async #storeResumptionRecords() {
        await this.#construction;
        await this.#context.storage.set(
            "resumptionRecords",
            [...this.#resumptionRecords].map(
                ([
                    address,
                    { sharedSecret, resumptionId, peerNodeId, fabric, sessionParameters, caseAuthenticatedTags },
                ]) =>
                    ({
                        nodeId: address.nodeId,
                        sharedSecret,
                        resumptionId,
                        fabricId: fabric.fabricId,
                        peerNodeId: peerNodeId,
                        sessionParameters: {
                            ...sessionParameters,
                            supportedTransports: sessionParameters.supportedTransports
                                ? SupportedTransportsSchema.encode(sessionParameters.supportedTransports)
                                : undefined,
                        },
                        caseAuthenticatedTags,
                    }) as ResumptionStorageRecord,
            ),
        );
    }

    async #initialize() {
        await this.#context.fabrics.construction;

        const storedResumptionRecords = await this.#context.storage.get<ResumptionStorageRecord[]>(
            "resumptionRecords",
            [],
        );

        storedResumptionRecords.forEach(
            ({
                nodeId,
                sharedSecret,
                resumptionId,
                fabricId,
                peerNodeId,
                sessionParameters: {
                    idleIntervalMs,
                    activeIntervalMs,
                    activeThresholdMs,
                    dataModelRevision,
                    interactionModelRevision,
                    specificationVersion,
                    maxPathsPerInvoke,
                    supportedTransports,
                    maxTcpMessageSize,
                } = {},
                caseAuthenticatedTags,
            }) => {
                const fabric = this.#context.fabrics.find(fabric => fabric.fabricId === fabricId);
                logger.info(
                    "restoring resumption record for node",
                    nodeId,
                    "and peer node",
                    peerNodeId,
                    "for fabric index",
                    fabric?.fabricIndex,
                );
                if (!fabric) {
                    logger.error("fabric not found for resumption record", fabricId);
                    return;
                }
                this.#resumptionRecords.set(fabric.addressOf(nodeId), {
                    sharedSecret,
                    resumptionId,
                    fabric,
                    peerNodeId,
                    sessionParameters: {
                        // Make sure to initialize default values when restoring an older resumption record
                        idleIntervalMs: idleIntervalMs ?? SESSION_IDLE_INTERVAL_MS,
                        activeIntervalMs: activeIntervalMs ?? SESSION_ACTIVE_INTERVAL_MS,
                        activeThresholdMs: activeThresholdMs ?? SESSION_ACTIVE_THRESHOLD_MS,
                        dataModelRevision: dataModelRevision ?? FALLBACK_DATAMODEL_REVISION,
                        interactionModelRevision: interactionModelRevision ?? FALLBACK_INTERACTIONMODEL_REVISION,
                        specificationVersion: specificationVersion ?? FALLBACK_SPECIFICATION_VERSION,
                        maxPathsPerInvoke: maxPathsPerInvoke ?? FALLBACK_MAX_PATHS_PER_INVOKE,
                        supportedTransports:
                            supportedTransports !== undefined
                                ? SupportedTransportsSchema.decode(supportedTransports)
                                : {},
                        maxTcpMessageSize: maxTcpMessageSize ?? FALLBACK_MAX_TCP_MESSAGE_SIZE,
                    },
                    caseAuthenticatedTags,
                });
            },
        );
    }

    getActiveSessionInformation() {
        this.#construction.assert();
        return [...this.#sessions]
            .filter(session => session.isSecure && !session.isPase)
            .map(session => ({
                name: session.name,
                nodeId: session.nodeId,
                peerNodeId: session.peerNodeId,
                fabric: session instanceof SecureSession ? session.fabric?.externalInformation : undefined,
                isPeerActive: session.isPeerActive(),
                secure: session.isSecure,
                lastInteractionTimestamp: session instanceof SecureSession ? session.timestamp : undefined,
                lastActiveTimestamp: session instanceof SecureSession ? session.activeTimestamp : undefined,
                numberOfActiveSubscriptions: session instanceof SecureSession ? session.subscriptions.size : 0,
            }));
    }

    async close() {
        if (this.#construction.status === Lifecycle.Status.Initializing) {
            await this.#construction;
        }

        await this.#subscriptionUpdateMutex;

        this.#observers.close();
        await this.#storeResumptionRecords();
        const closePromises = this.#sessions.map(async session => {
            await session?.end(false);
            this.#sessions.delete(session);
        });
        for (const session of this.#insecureSessions.values()) {
            closePromises.push(session?.end());
        }
        await MatterAggregateError.allSettled(closePromises, "Error closing sessions").catch(error =>
            logger.error(error),
        );
    }

    async clear() {
        await this.close();
        await this.#context.storage.clear();
        this.#resumptionRecords.clear();
    }

    updateAllSubscriptions() {
        this.#subscriptionUpdateMutex.run(async () => {
            for (const session of this.#sessions) {
                for (const subscription of session.subscriptions) {
                    await subscription.update();
                }
            }
        });
    }

    /** Clears all subscriptions for a given node and returns how many were cleared. */
    async clearSubscriptionsForNode(peerAddress: PeerAddress, flushSubscriptions?: boolean) {
        let clearedCount = 0;
        for (const session of this.#sessions) {
            if (PeerAddress.is(session.peerAddress, peerAddress)) {
                clearedCount += await session.clearSubscriptions(flushSubscriptions, true);
            }
        }
        return clearedCount;
    }
}

namespace SessionManager {
    export interface Options {
        maxPathsPerInvoke?: number;
    }
}
