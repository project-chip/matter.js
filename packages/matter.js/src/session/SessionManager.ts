/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { FabricId } from "../datatype/FabricId.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { StorageContext } from "../storage/StorageContext.js";
import { ByteArray } from "../util/ByteArray.js";
import { AsyncObservable, Observable } from "../util/Observable.js";
import { BasicSet } from "../util/Set.js";
import { InsecureSession } from "./InsecureSession.js";
import { SecureSession } from "./SecureSession.js";
import { SessionParameterOptions, SessionParameters } from "./Session.js";

const logger = Logger.get("SessionManager");

export const UNICAST_UNSECURE_SESSION_ID = 0x0000;

export interface ResumptionRecord {
    sharedSecret: ByteArray;
    resumptionId: ByteArray;
    fabric: Fabric;
    peerNodeId: NodeId;
    sessionParameters: SessionParameters;
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
    };
};

export class SessionManager<ContextT> {
    readonly #insecureSessions = new Map<NodeId, InsecureSession<ContextT>>();
    readonly #sessions = new BasicSet<SecureSession<ContextT>>();
    #nextSessionId = Crypto.getRandomUInt16();
    #resumptionRecords = new Map<NodeId, ResumptionRecord>();
    readonly #sessionStorage: StorageContext;
    readonly #globalUnencryptedMessageCounter = new MessageCounter();
    readonly #subscriptionsChanged = new Observable<[session: SecureSession<ContextT>]>();
    readonly #sessionOpened = new Observable<[session: SecureSession<ContextT>]>();
    readonly #sessionClosed = new AsyncObservable<[session: SecureSession<ContextT>], void>();

    constructor(
        private readonly context: ContextT,
        sessionStorage: StorageContext,
    ) {
        this.#sessionStorage = sessionStorage;
    }

    get subscriptionsChanged() {
        return this.#subscriptionsChanged;
    }

    get sessionOpened() {
        return this.#sessionOpened;
    }

    get sessionClosed() {
        return this.#sessionClosed;
    }

    createUnsecureSession(options: {
        initiatorNodeId?: NodeId;
        sessionParameters?: SessionParameterOptions;
        isInitiator?: boolean;
    }) {
        const { initiatorNodeId, sessionParameters, isInitiator } = options;
        if (initiatorNodeId !== undefined) {
            if (this.#insecureSessions.has(initiatorNodeId)) {
                throw new MatterFlowError(`UnsecureSession with NodeId ${initiatorNodeId} already exists.`);
            }
        }
        while (true) {
            const session = new InsecureSession({
                context: this.context,
                messageCounter: this.#globalUnencryptedMessageCounter,
                closeCallback: async () => {
                    logger.info(`End insecure session ${session.name}`);
                    this.#insecureSessions.delete(session.nodeId);
                },
                initiatorNodeId,
                sessionParameters,
                isInitiator: isInitiator ?? false,
            });

            const ephermalNodeId = session.nodeId;
            if (this.#insecureSessions.has(ephermalNodeId)) continue;

            this.#insecureSessions.set(ephermalNodeId, session);
            return session;
        }
    }

    async createSecureSession(args: {
        sessionId: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        sharedSecret: ByteArray;
        salt: ByteArray;
        isInitiator: boolean;
        isResumption: boolean;
        sessionParameters?: SessionParameterOptions;
    }) {
        const {
            sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            sessionParameters,
        } = args;
        const session = await SecureSession.create({
            context: this.context,
            id: sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            closeCallback: async () => {
                logger.info(`End ${session.isPase ? "PASE" : "CASE"} session ${session.name}`);
                this.#sessions.delete(session);
                await this.#sessionClosed.emit(session);
            },
            sessionParameters,
            subscriptionChangedCallback: () => {
                this.#subscriptionsChanged.emit(session);
            },
        });

        this.#sessions.add(session);
        this.#sessionOpened.emit(session);

        // TODO: Add a maximum of sessions and respect/close the "least recently used" session. See Core Specs 4.10.1.1
        return session;
    }

    removeSession(sessionId: number) {
        const session = this.getSession(sessionId);
        if (session !== undefined) {
            this.#sessions.delete(session);
        }
    }

    async removeResumptionRecord(peerNodeId: NodeId) {
        this.#resumptionRecords.delete(peerNodeId);
        await this.storeResumptionRecords();
    }

    findOldestInactiveSession() {
        let oldestSession: SecureSession<ContextT> | undefined = undefined;
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
        return this.#sessions.get("id", sessionId);
    }

    getPaseSession() {
        return [...this.#sessions].find(
            session => session.isSecure && session.isPase && !session.closingAfterExchangeFinished,
        ) as SecureSession<ContextT>;
    }

    getSessionForNode(fabric: Fabric, nodeId: NodeId) {
        //TODO: It can have multiple sessions for one node ...
        return [...this.#sessions].find(session => {
            if (!session.isSecure) return false;
            const secureSession = session as SecureSession<any>;
            return secureSession.fabric?.fabricId === fabric.fabricId && secureSession.peerNodeId === nodeId;
        });
    }

    async removeAllSessionsForNode(nodeId: NodeId, sendClose = false) {
        for (const session of this.#sessions) {
            if (!session.isSecure) continue;
            const secureSession = session as SecureSession<any>;
            if (secureSession.peerNodeId === nodeId) {
                await secureSession.destroy(sendClose, false);
            }
        }
    }

    getUnsecureSession(sourceNodeId?: NodeId) {
        if (sourceNodeId === undefined) {
            return this.#insecureSessions.get(NodeId.UNSPECIFIED_NODE_ID);
        }
        return this.#insecureSessions.get(sourceNodeId);
    }

    findGroupSession(groupId: number, groupSessionId: number) {
        // Use groupsession id to find the key ??!!
        // The Group Session ID MAY help receiving nodes efficiently locate the Operational Group Key used to encrypt an incoming groupcast message. It SHALL NOT be used as the sole means to locate the asso­ ciated Operational Group Key, since it MAY collide within the fabric. Instead, the Group Session ID provides receiving nodes a means to identify Operational Group Key candidates without the need to first attempt to decrypt groupcast messages using all available keys.
        // On receipt of a message of Group Session Type, all valid, installed, operational group key candidates referenced by the given Group Session ID SHALL be attempted until authentication is passed or there are no more operational group keys to try. This is done because the same Group Session ID might arise from different keys. The chance of a Group Session ID collision is 2-16 but the chance of both a Group Session ID collision and the message MIC matching two different operational group keys is 2-80.

        // TODO
        throw new Error(`Not implemented ${groupId} ${groupSessionId}`);
    }

    findResumptionRecordById(resumptionId: ByteArray) {
        return [...this.#resumptionRecords.values()].find(record => record.resumptionId.equals(resumptionId));
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.#resumptionRecords.get(nodeId);
    }

    async saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        this.#resumptionRecords.set(resumptionRecord.peerNodeId, resumptionRecord);
        await this.storeResumptionRecords();
    }

    async updateFabricForResumptionRecords(fabric: Fabric) {
        const record = this.#resumptionRecords.get(fabric.rootNodeId);
        if (record === undefined) {
            throw new MatterFlowError("Resumption record not found. Should never happen.");
        }
        this.#resumptionRecords.set(fabric.rootNodeId, { ...record, fabric });
        await this.storeResumptionRecords();
    }

    async storeResumptionRecords() {
        await this.#sessionStorage.set(
            "resumptionRecords",
            [...this.#resumptionRecords].map(
                ([nodeId, { sharedSecret, resumptionId, peerNodeId, fabric, sessionParameters }]) =>
                    ({
                        nodeId,
                        sharedSecret,
                        resumptionId,
                        fabricId: fabric.fabricId,
                        peerNodeId: peerNodeId,
                        sessionParameters,
                    }) as ResumptionStorageRecord,
            ),
        );
    }

    async initFromStorage(fabrics: Fabric[]) {
        const storedResumptionRecords = await this.#sessionStorage.get<ResumptionStorageRecord[]>(
            "resumptionRecords",
            [],
        );

        storedResumptionRecords.forEach(
            ({ nodeId, sharedSecret, resumptionId, fabricId, peerNodeId, sessionParameters }) => {
                logger.info("restoring resumption record for node", nodeId);
                const fabric = fabrics.find(fabric => fabric.fabricId === fabricId);
                if (!fabric) {
                    logger.error("fabric not found for resumption record", fabricId);
                    return;
                }
                this.#resumptionRecords.set(nodeId, {
                    sharedSecret,
                    resumptionId,
                    fabric,
                    peerNodeId,
                    sessionParameters,
                });
            },
        );
    }

    getActiveSessionInformation() {
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
                numberOfActiveSubscriptions: session instanceof SecureSession ? session.numberOfActiveSubscriptions : 0,
            }));
    }

    async close() {
        await this.storeResumptionRecords();
        for (const session of this.#sessions) {
            await session?.end(false);
            this.#sessions.delete(session);
        }
        for (const session of this.#insecureSessions.values()) {
            await session?.end();
            this.#insecureSessions.delete(session.nodeId);
        }
    }
}
