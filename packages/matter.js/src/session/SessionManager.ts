/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
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
import { SecureSession } from "./SecureSession.js";
import { UnsecureSession } from "./UnsecureSession.js";

const logger = Logger.get("SessionManager");

export const UNICAST_UNSECURE_SESSION_ID = 0x0000;

export interface ResumptionRecord {
    sharedSecret: ByteArray;
    resumptionId: ByteArray;
    fabric: Fabric;
    peerNodeId: NodeId;
}

type ResumptionStorageRecord = {
    nodeId: NodeId;
    sharedSecret: Uint8Array;
    resumptionId: Uint8Array;
    fabricId: FabricId;
    peerNodeId: NodeId;
};

export class SessionManager<ContextT> {
    private readonly unsecureSessions = new Map<NodeId, UnsecureSession<ContextT>>();
    private readonly sessions = new Map<number, SecureSession<ContextT>>();
    private nextSessionId = Crypto.getRandomUInt16();
    private resumptionRecords = new Map<NodeId, ResumptionRecord>();
    private readonly sessionStorage: StorageContext;
    private readonly globalUnencryptedMessageCounter = new MessageCounter();

    constructor(
        private readonly context: ContextT,
        sessionStorage: StorageContext,
    ) {
        this.sessionStorage = sessionStorage;
    }

    createUnsecureSession(initiatorNodeId?: NodeId) {
        if (initiatorNodeId !== undefined) {
            if (this.unsecureSessions.has(initiatorNodeId)) {
                throw new MatterFlowError(`UnsecureSession with NodeId ${initiatorNodeId} already exists.`);
            }
        }
        while (true) {
            const session = new UnsecureSession(
                this.context,
                this.globalUnencryptedMessageCounter,
                () => {
                    logger.info(`Remove Session ${session.name} from session manager.`);
                    this.unsecureSessions.delete(session.getNodeId());
                },
                initiatorNodeId,
            );

            const ephermalNodeId = session.getNodeId();
            if (this.unsecureSessions.has(ephermalNodeId)) continue;

            this.unsecureSessions.set(ephermalNodeId, session);
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
        idleRetransmissionTimeoutMs?: number;
        activeRetransmissionTimeoutMs?: number;
        closeCallback?: () => Promise<void>;
        subscriptionChangedCallback?: () => void;
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
            idleRetransmissionTimeoutMs,
            activeRetransmissionTimeoutMs,
            closeCallback,
            subscriptionChangedCallback,
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
                logger.info(`Remove Session ${session.name} from session manager.`);
                await closeCallback?.();
                this.sessions.delete(sessionId);
            },
            idleRetransmissionTimeoutMs,
            activeRetransmissionTimeoutMs,
            subscriptionChangedCallback: () => subscriptionChangedCallback?.(),
        });
        this.sessions.set(sessionId, session);

        // TODO: Add a maximum of sessions and respect/close the "least recently used" session. See Core Specs 4.10.1.1
        return session;
    }

    removeSession(sessionId: number) {
        this.sessions.delete(sessionId);
    }

    removeResumptionRecord(peerNodeId: NodeId) {
        this.resumptionRecords.delete(peerNodeId);
        this.storeResumptionRecords();
    }

    findOldestInactiveSession() {
        let oldestSessionId: number | undefined = undefined;
        let oldestActiveTimestamp = Number.MAX_SAFE_INTEGER;
        for (const session of this.sessions.values()) {
            if (session.activeTimestamp < oldestActiveTimestamp) {
                oldestActiveTimestamp = session.timestamp;
                oldestSessionId = session.getId();
            }
        }
        if (oldestSessionId === undefined) {
            throw new MatterFlowError("No session found to close and all session ids are taken.");
        }
        return oldestSessionId;
    }

    async getNextAvailableSessionId() {
        for (let i = 0; i < 0xffff; i++) {
            const id = this.nextSessionId;
            this.nextSessionId = (this.nextSessionId + 1) & 0xffff;
            if (this.nextSessionId === 0) this.nextSessionId++;

            if (!this.sessions.has(id)) {
                return id;
            }
        }
        // All session ids are taken, search for te oldest unused session id and close it and use this
        const oldestSessionId = this.findOldestInactiveSession();
        await this.sessions.get(oldestSessionId)?.end(true, false);
        this.nextSessionId = oldestSessionId;
        return this.nextSessionId++;
    }

    getSession(sessionId: number) {
        return this.sessions.get(sessionId);
    }

    getPaseSession() {
        return [...this.sessions.values()].find(
            session => session.isSecure() && session.isPase() && !session.closingAfterExchangeFinished,
        ) as SecureSession<ContextT>;
    }

    getSessionForNode(fabric: Fabric, nodeId: NodeId) {
        //TODO: It can have multiple sessions for one node ...
        return [...this.sessions.values()].find(session => {
            if (!session.isSecure()) return false;
            const secureSession = session as SecureSession<any>;
            return secureSession.getFabric()?.fabricId === fabric.fabricId && secureSession.getPeerNodeId() === nodeId;
        });
    }

    async removeAllSessionsForNode(nodeId: NodeId, sendClose = false) {
        for (const session of this.sessions.values()) {
            if (!session.isSecure()) continue;
            const secureSession = session as SecureSession<any>;
            if (secureSession.getPeerNodeId() === nodeId) {
                await secureSession.destroy(sendClose, false);
            }
        }
    }

    getUnsecureSession(sourceNodeId?: NodeId) {
        if (sourceNodeId === undefined) {
            return this.unsecureSessions.get(NodeId.UNSPECIFIED_NODE_ID);
        }
        return this.unsecureSessions.get(sourceNodeId);
    }

    findGroupSession(groupId: number, groupSessionId: number) {
        // Use groupsession id to find the key ??!!
        // The Group Session ID MAY help receiving nodes efficiently locate the Operational Group Key used to encrypt an incoming groupcast message. It SHALL NOT be used as the sole means to locate the asso­ ciated Operational Group Key, since it MAY collide within the fabric. Instead, the Group Session ID provides receiving nodes a means to identify Operational Group Key candidates without the need to first attempt to decrypt groupcast messages using all available keys.
        // On receipt of a message of Group Session Type, all valid, installed, operational group key candidates referenced by the given Group Session ID SHALL be attempted until authentication is passed or there are no more operational group keys to try. This is done because the same Group Session ID might arise from different keys. The chance of a Group Session ID collision is 2-16 but the chance of both a Group Session ID collision and the message MIC matching two different operational group keys is 2-80.

        // TODO
        throw new Error(`Not implemented ${groupId} ${groupSessionId}`);
    }

    findResumptionRecordById(resumptionId: ByteArray) {
        return [...this.resumptionRecords.values()].find(record => record.resumptionId.equals(resumptionId));
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.resumptionRecords.get(nodeId);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        this.resumptionRecords.set(resumptionRecord.peerNodeId, resumptionRecord);
        this.storeResumptionRecords();
    }

    updateFabricForResumptionRecords(fabric: Fabric) {
        const record = this.resumptionRecords.get(fabric.rootNodeId);
        if (record === undefined) {
            throw new MatterFlowError("Resumption record not found. Should never happen.");
        }
        this.resumptionRecords.set(fabric.rootNodeId, { ...record, fabric });
        this.storeResumptionRecords();
    }

    storeResumptionRecords() {
        this.sessionStorage.set<ResumptionStorageRecord[]>(
            "resumptionRecords",
            [...this.resumptionRecords].map(([nodeId, { sharedSecret, resumptionId, peerNodeId, fabric }]) => ({
                nodeId,
                sharedSecret,
                resumptionId,
                fabricId: fabric.fabricId,
                peerNodeId: peerNodeId,
            })),
        );
    }

    initFromStorage(fabrics: Fabric[]) {
        const storedResumptionRecords = this.sessionStorage.get<ResumptionStorageRecord[]>("resumptionRecords", []);

        storedResumptionRecords.forEach(({ nodeId, sharedSecret, resumptionId, fabricId, peerNodeId }) => {
            logger.info("restoring resumption record for node", nodeId);
            const fabric = fabrics.find(fabric => fabric.fabricId === fabricId);
            if (!fabric) {
                logger.error("fabric not found for resumption record", fabricId);
                return;
            }
            this.resumptionRecords.set(nodeId, {
                sharedSecret,
                resumptionId,
                fabric,
                peerNodeId,
            });
        });
    }

    getActiveSessionInformation() {
        return [...this.sessions.values()]
            .filter(session => session.isSecure() && !session.isPase())
            .map(session => ({
                name: session.name,
                nodeId: session.getNodeId(),
                peerNodeId: session.getPeerNodeId(),
                fabric: session instanceof SecureSession ? session.getFabric()?.getExternalInformation() : undefined,
                isPeerActive: session.isPeerActive(),
                secure: session.isSecure(),
                lastInteractionTimestamp: session instanceof SecureSession ? session.timestamp : undefined,
                lastActiveTimestamp: session instanceof SecureSession ? session.activeTimestamp : undefined,
                numberOfActiveSubscriptions: session instanceof SecureSession ? session.numberOfActiveSubscriptions : 0,
            }));
    }

    async close() {
        this.storeResumptionRecords();
        for (const sessionId of this.sessions.keys()) {
            const session = this.sessions.get(sessionId);
            await session?.end(false);
            this.sessions.delete(sessionId);
        }
        for (const session of this.unsecureSessions.values()) {
            await session?.end();
            this.unsecureSessions.delete(session.getNodeId());
        }
    }
}
