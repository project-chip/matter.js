/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scanner } from "#common/Scanner.js";
import { Fabric } from "#fabric/Fabric.js";
import { Channel, Environment, Environmental, NotImplementedError, TransportInterfaceSet } from "#general";
import { Session } from "#session/Session.js";
import { SessionManager } from "#session/SessionManager.js";
import { NodeId } from "#types";

/**
 * Interfaces {@link NodeDiscoverer} with other components.
 */
export interface NodeDiscovererContext {
    sessions: SessionManager;
    transportInterfaces: TransportInterfaceSet;
}

/**
 * Connection generated after peer discovery.
 */
export interface PeerConnection {
    session: Session;
    channel: Channel<Uint8Array>;
}

/**
 * Performs discovery of other nodes.
 *
 * TODO - this is placeholder destination for node discovery logic
 */
export class NodeDiscoverer {
    readonly #transportInterfaces: TransportInterfaceSet;
    readonly #sessions: SessionManager;
    readonly #scanners = new Set<Scanner>();

    constructor(context: NodeDiscovererContext) {
        const { transportInterfaces, sessions } = context;

        this.#sessions = sessions;
        this.#transportInterfaces = transportInterfaces;
    }

    [Environmental.create](env: Environment) {
        const instance = new NodeDiscoverer({
            transportInterfaces: env.get(TransportInterfaceSet),
            sessions: env.get(SessionManager),
        });
        env.set(NodeDiscoverer, instance);
        return instance;
    }

    /**
     * Interfaces to the transports this NodeFinder supports.  This set may be modified.
     */
    get transportInterfaces() {
        return this.#transportInterfaces;
    }

    /**
     * The scanners this NodeFinder supports.
     */
    get scanners() {
        return this.#scanners;
    }

    /** TODO - remove, just to make codeql happy */
    get sessions() {
        return this.#sessions;
    }

    /**
     * Find a node for operational (non-commissioning) purposes.
     */
    async connectToPeer(_fabric: Fabric, _nodeId: NodeId, _timeoutSeconds = 5): Promise<undefined | PeerConnection> {
        throw new NotImplementedError("NodeDiscoverer is a WIP");
    }
}
