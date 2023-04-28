/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { ByteArray } from "../util/ByteArray.js";
import { StorageContext } from "../storage/StorageContext.js";
import { StorageManager } from "../storage/StorageManager.js";
import { SecureSession } from "./SecureSession.js";
import { Session } from "./Session.js";
import { UnsecureSession } from "./UnsecureSession.js";

export const UNDEFINED_NODE_ID = new NodeId(BigInt(0));

export const UNICAST_UNSECURE_SESSION_ID = 0x0000;

export interface ResumptionRecord {
    sharedSecret: ByteArray,
    resumptionId: ByteArray,
    fabric: Fabric,
    peerNodeId: NodeId,
}

type ResumptionStorageRecord = {
    nodeId: bigint,
    sharedSecret: Uint8Array,
    resumptionId: Uint8Array,
    fabricId: bigint,
    peerNodeId: bigint,
}

export class SessionManager<ContextT> {
    private readonly unsecureSession: UnsecureSession<ContextT>;
    private readonly sessions = new Map<number, Session<ContextT>>();
    private nextSessionId = Crypto.getRandomUInt16();
    private resumptionRecords = new Map<bigint, ResumptionRecord>();
    private readonly sessionStorage: StorageContext;

    constructor(
        private readonly context: ContextT,
        storageManager: StorageManager,
    ) {
        this.sessionStorage = storageManager.createContext("SessionManager")
        this.unsecureSession = new UnsecureSession(context);
        this.sessions.set(UNICAST_UNSECURE_SESSION_ID, this.unsecureSession);
    }

    async createSecureSession(sessionId: number, fabric: Fabric | undefined, peerNodeId: NodeId, peerSessionId: number, sharedSecret: ByteArray, salt: ByteArray, isInitiator: boolean, isResumption: boolean, idleRetransTimeoutMs?: number, activeRetransTimeoutMs?: number) {
        const session = await SecureSession.create(this.context, sessionId, fabric, peerNodeId, peerSessionId, sharedSecret, salt, isInitiator, isResumption, () => this.removeSession(sessionId, peerNodeId), idleRetransTimeoutMs, activeRetransTimeoutMs);
        this.sessions.set(sessionId, session);

        // TODO: close previous secure channel for
        return session;
    }

    removeSession(sessionId: number, peerNodeId: NodeId) {
        this.sessions.delete(sessionId);
        this.resumptionRecords.delete(peerNodeId.id);
        this.storeResumptionRecords();
    }

    getNextAvailableSessionId() {
        while (true) {
            if (this.sessions.has(this.nextSessionId)) {
                this.nextSessionId = (this.nextSessionId + 1) & 0xFFFF;
                if (this.nextSessionId === 0) this.nextSessionId++;
                continue;
            }
            return this.nextSessionId++;
        }
    }

    getSession(sessionId: number) {
        return this.sessions.get(sessionId);
    }

    getSessionForNode(fabric: Fabric, nodeId: NodeId) {
        //TODO: It can have multiple sessions for one node ...
        return [...this.sessions.values()].find(session => {
            if (!session.isSecure()) return false;
            const secureSession = session as SecureSession<any>;
            return secureSession.getFabric()?.fabricId.id === fabric.fabricId.id && secureSession.getPeerNodeId().id === nodeId.id;
        });
    }

    getUnsecureSession() {
        return this.unsecureSession;
    }

    findResumptionRecordById(resumptionId: ByteArray) {
        return [...this.resumptionRecords.values()].find(record => record.resumptionId.equals(resumptionId));
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.resumptionRecords.get(nodeId.id);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        this.resumptionRecords.set(resumptionRecord.peerNodeId.id, resumptionRecord);
        this.storeResumptionRecords();
    }

    storeResumptionRecords() {
        this.sessionStorage.set<ResumptionStorageRecord[]>("resumptionRecords", [...this.resumptionRecords].map(([nodeId, { sharedSecret, resumptionId, peerNodeId, fabric }]) => ({
            nodeId,
            sharedSecret,
            resumptionId,
            fabricId: fabric.fabricId.id,
            peerNodeId: peerNodeId.id,
        })));
    }

    initFromStorage(fabrics: Fabric[]) {
        const storedResumptionRecords = this.sessionStorage.get<ResumptionStorageRecord[]>("resumptionRecords", []);

        storedResumptionRecords.forEach(({ nodeId, sharedSecret, resumptionId, fabricId, peerNodeId }) => {
            console.log("restoring resumption record for node", nodeId);
            const fabric = fabrics.find(fabric => fabric.fabricId.id === fabricId);
            if (!fabric) {
                console.log("fabric not found for resumption record", fabricId);
                return;
            }
            this.resumptionRecords.set(nodeId, {
                sharedSecret,
                resumptionId,
                fabric,
                peerNodeId: new NodeId(peerNodeId),
            });
        });
    }
}
