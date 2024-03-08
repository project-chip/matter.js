/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeId } from "../../../datatype/NodeId.js";
import { ExposedFabricInformation } from "../../../fabric/Fabric.js";
import type { ServerNode } from "../../../node/ServerNode.js";
import { SecureSession } from "../../../session/SecureSession.js";
import { SessionManager } from "../../../session/SessionManager.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { Behavior } from "../../Behavior.js";

/**
 * Active {@link ServerNode} client sessions.
 */
export class SessionsBehavior extends Behavior {
    static override readonly id = "sessions";

    declare state: SessionsBehavior.State;
    declare events: SessionsBehavior.Events;

    override initialize() {
        const env = this.endpoint.env;
        if (env.has(SessionManager)) {
            this.#enterOnlineMode(env.get(SessionManager));
        }

        const sessionManagerEvents = env.eventsFor(SessionManager);
        this.reactTo(sessionManagerEvents.added, this.#enterOnlineMode);
        this.reactTo(sessionManagerEvents.deleted, this.#enterOfflineMode);
    }

    #convertToExposedSession(session: SecureSession<any>): SessionsBehavior.Session {
        return {
            name: session.name,
            nodeId: session.nodeId,
            peerNodeId: session.peerNodeId,
            fabric: session.fabric?.externalInformation,
            isPeerActive: session.isPeerActive(),
            lastInteractionTimestamp: session.timestamp,
            lastActiveTimestamp: session.activeTimestamp,
            numberOfActiveSubscriptions: session.numberOfActiveSubscriptions,
        };
    }

    #enterOnlineMode(sessions: SessionManager<any>) {
        this.reactTo(sessions.sessionOpened, this.#sessionOpened);

        this.reactTo(sessions.sessionClosed, this.#sessionClosed);

        this.reactTo(sessions.subscriptionsChanged, this.#subscriptionsChanged);
    }

    #sessionOpened(session: SecureSession<any>) {
        if (session.isPase) {
            return;
        }
        const exposedSession = this.#convertToExposedSession(session);
        this.state.sessions[session.id] = exposedSession;
        this.events.opened.emit(exposedSession);
    }

    #sessionClosed(session: SecureSession<any>) {
        delete this.state.sessions[session.id];
        this.events.closed.emit(this.#convertToExposedSession(session));
    }

    #subscriptionsChanged(session: SecureSession<any>) {
        if (session.isPase) {
            return;
        }
        const sessionEntry = this.state.sessions[session.id];
        if (sessionEntry === undefined) {
            return;
        }

        sessionEntry.numberOfActiveSubscriptions = session.numberOfActiveSubscriptions;
        this.state.sessions[session.id] = sessionEntry;
        this.events.subscriptionsChanged.emit(sessionEntry);
    }

    #enterOfflineMode() {
        this.state.sessions = {};
    }
}

export namespace SessionsBehavior {
    export interface Session {
        name: string;
        nodeId: NodeId;
        peerNodeId: NodeId;
        fabric?: ExposedFabricInformation;
        isPeerActive: boolean;
        lastInteractionTimestamp: number | undefined;
        lastActiveTimestamp: number | undefined;
        numberOfActiveSubscriptions: number;
    }

    export class State {
        sessions: Record<number, Session> = {};
    }

    export class Events extends EventEmitter {
        opened = Observable<[session: Session]>();
        closed = Observable<[session: Session]>();
        subscriptionsChanged = Observable<[session: Session]>();
    }
}
