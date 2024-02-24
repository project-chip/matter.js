/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { NodeId } from "../../../datatype/NodeId.js";
import type { ServerNode } from "../../../node/ServerNode.js";
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

    #enterOnlineMode(sessions: SessionManager<any>) {
        this.reactTo(sessions.sessionOpened, session => {
            this.state.sessions[session.id] = {
                id: session.id,
                type: session.isPase ? SessionsBehavior.SessionType.Pase : SessionsBehavior.SessionType.Case,
                fabricIndex: session.fabric?.fabricIndex,
                peerNodeId: session.peerNodeId,
            };
        });

        this.reactTo(sessions.sessionClosed, session => {
            delete this.state.sessions[session.id];
        });
    }

    #enterOfflineMode() {
        this.state.sessions = {};
    }
}

export namespace SessionsBehavior {
    export enum SessionType {
        Pase = "PASE",
        Case = "CASE",
    }

    export interface Session {
        id: number;
        type: SessionType;
        fabricIndex?: FabricIndex;
        peerNodeId: NodeId;
    }

    export class State {
        sessions = {} as Record<number, Session>;
    }

    export class Events extends EventEmitter {
        opened = Observable<[session: Session]>;
        closed = Observable<[session: Session]>;
    }
}
