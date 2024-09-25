/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scanner } from "#common/Scanner.js";
import { Fabric } from "#fabric/Fabric.js";
import { Channel, Environment, Environmental, isNetworkInterface, NetworkError, TransportInterfaceSet } from "#general";
import { Session } from "#session/Session.js";
import { SessionManager } from "#session/SessionManager.js";
import { NodeId } from "#types";

/**
 * Interfaces {@link NodeFinder} with other components.
 */
export interface NodeFinderContext {
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
 * TODO - currently just does operational discovery, may add discovery of uncommissioned nodes
 */
export class NodeFinder {
    readonly #transportInterfaces: TransportInterfaceSet;
    readonly #sessions: SessionManager;
    readonly #scanners = new Set<Scanner>();

    constructor(context: NodeFinderContext) {
        const { transportInterfaces, sessions } = context;

        this.#sessions = sessions;
        this.#transportInterfaces = transportInterfaces;
    }

    [Environmental.create](env: Environment) {
        const instance = new NodeFinder({
            transportInterfaces: env.get(TransportInterfaceSet),
            sessions: env.get(SessionManager),
        });
        env.set(NodeFinder, instance);
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

    /**
     * Find a node for operational (non-commissioning) purposes.
     */
    async connectToPeer(fabric: Fabric, nodeId: NodeId, timeoutSeconds = 5): Promise<undefined | PeerConnection> {
        let device;
        for (const scanner of this.scanners) {
            device = await scanner.findOperationalDevice(fabric, nodeId, timeoutSeconds);
            if (device !== undefined) {
                break;
            }
        }
        if (device === undefined) {
            return;
        }

        const session = this.#sessions.getSessionForNode(fabric, nodeId);
        if (session === undefined) {
            return undefined;
        }

        // TODO: have the interface and scanner linked
        const networkInterface = this.transportInterfaces.find(netInterface => isNetworkInterface(netInterface));
        if (networkInterface === undefined || !isNetworkInterface(networkInterface)) {
            throw new NetworkError("No network interface found");
        }

        // TODO meeehhh
        return { session, channel: await networkInterface.openChannel(device.addresses[0]) };
    }
}
