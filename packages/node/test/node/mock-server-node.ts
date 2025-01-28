/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnlineContext } from "#behavior/context/server/OnlineContext.js";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import {
    Bytes,
    Crypto,
    Environment,
    Key,
    MaybePromise,
    Network,
    NetworkSimulator,
    PrivateKey,
    StorageBackendMemory,
    StorageService,
} from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import { MessageExchange, SessionManager } from "#protocol";
import { FabricIndex, NodeId } from "#types";

// These are temporary until we get proper crypto.subtle support
Crypto.get().sign = () => {
    return new Uint8Array(32);
};
Crypto.get().hash = () => {
    return new Uint8Array(32);
};
Crypto.get().createKeyPair = () => {
    const SEC1_KEY = Bytes.fromHex(
        "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
    );

    return Key({ sec1: SEC1_KEY }) as PrivateKey;
};
Crypto.get().hkdf = async () => {
    return new Uint8Array(16);
};

export class MockServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends ServerNode<T> {
    #simulator = new NetworkSimulator();

    constructor(type?: T, options?: Node.Options<T>, simulator?: NetworkSimulator);
    constructor(config: Partial<Node.Configuration<T>>);
    constructor(definition: T | Node.Configuration<T>, options?: Node.Options<T>, simulator?: NetworkSimulator) {
        const config = Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options);

        let environment = config.environment;
        if (!environment) {
            environment = new Environment("test");
        }
        const storage = environment.get(StorageService);
        if (storage.location !== "(memory-for-test)") {
            storage.location = "(memory-for-test)";
            storage.factory = () => new StorageBackendMemory();
        }

        config.environment = environment;

        super(config as any);

        this.#simulator = simulator ?? new NetworkSimulator();
        environment.set(Network, this.#simulator.addHost(1));
    }

    get simulator() {
        return this.#simulator;
    }

    /**
     * Perform fake online activity
     */
    online<R>(
        options: Partial<OnlineContext.Options>,
        actor: (agent: Agent.Instance<T>) => MaybePromise<R>,
    ): MaybePromise<R> {
        if (!options.exchange) {
            if (!options.fabric) {
                options.fabric = FabricIndex.NO_FABRIC;
            }
            if (!options.subject) {
                options.subject = NodeId(0);
            }
        }
        if (!options.node) {
            options.node = this;
        }
        return OnlineContext(options as OnlineContext.Options).act(context => actor(context.agentFor(this)));
    }

    static async createOnline<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        options?: MockServerNode.Options<T> & { simulator?: NetworkSimulator },
    ) {
        let { config, device } = options ?? {};

        if (!config) {
            config = { type: ServerNode.RootEndpoint as T } as Node.Configuration<T>;
        }

        const node = new MockServerNode<ServerNode.RootEndpoint>(config.type, config, options?.simulator);

        if (device === undefined && options && !("device" in options)) {
            device = OnOffLightDevice;
        }

        if (device) {
            await node.add(device);
        }

        if (options?.online === false) {
            await node.construction;
            return node;
        }

        await node.start();

        if (!node.lifecycle.isOnline) {
            await node.lifecycle.online;
        }

        return node;
    }

    async createSession(options?: Partial<Parameters<SessionManager["createSecureSession"]>[0]>) {
        return await this.env.get(SessionManager).createSecureSession({
            sessionId: 1,
            fabric: undefined,
            peerNodeId: NodeId(0),
            peerSessionId: 1,
            sharedSecret: new Uint8Array(),
            salt: new Uint8Array(),
            isInitiator: false,
            isResumption: false,
            ...options,
        });
    }

    async createExchange(options?: Partial<Parameters<SessionManager["createSecureSession"]>[0]>) {
        return {
            channel: { name: "test" },
            clearTimedInteraction: () => {},
            hasTimedInteraction: () => false,
            hasActiveTimedInteraction: () => false,
            hasExpiredTimedInteraction: () => false,
            session: await this.createSession(options),
            maxPayloadSize: 1000,
        } as unknown as MessageExchange;
    }

    override async cancel() {
        await MockTime.resolve(super.cancel());
    }

    override async close() {
        await MockTime.resolve(super.close());
    }
}

export namespace MockServerNode {
    export interface Options<T extends ServerNode.RootEndpoint> {
        online?: boolean;
        config?: Node.Configuration<T>;
        device?: Endpoint.Definition;
    }
}
