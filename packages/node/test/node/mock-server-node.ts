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
    AsyncObservable,
    Crypto,
    DataReadQueue,
    Environment,
    MaybePromise,
    MockCrypto,
    Network,
    NetworkSimulator,
    StorageBackendMemory,
    StorageService,
} from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import { ExchangeManager, FabricManager, MessageExchange, SessionManager, TestFabric } from "#protocol";
import { FabricIndex, NodeId } from "#types";
import { MockExchange } from "./mock-exchange.js";

export class MockServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends ServerNode<T> {
    #newExchanges = new DataReadQueue<MockExchange>();
    #simulator = new NetworkSimulator();

    constructor(type?: T, options?: Node.Options<T>, simulator?: NetworkSimulator);
    constructor(config: Partial<Node.Configuration<T>>);
    constructor(definition: T | Node.Configuration<T>, options?: Node.Options<T>, simulator?: NetworkSimulator) {
        // Server operation contains numeric time components that must be mocked
        MockTime.init();

        const config = Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options);

        let environment = config.environment;
        if (!environment) {
            environment = new Environment("test");
        }

        // Stabilize random numbers
        environment.set(Crypto, MockCrypto());

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

        node.env.get(ExchangeManager).initiateExchange = address => {
            const exchange = new MockExchange(address, node.env.get(SessionManager).getSession(1));

            node.#newExchanges.push(exchange);

            return exchange;
        };

        if (!node.lifecycle.isOnline) {
            await node.lifecycle.online;
        }

        return node;
    }

    async handleExchange(): Promise<MockExchange> {
        return await this.#newExchanges.read();
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
            closing: AsyncObservable<[void]>(),
        } as unknown as MessageExchange;
    }

    override async cancel() {
        await MockTime.resolve(super.cancel());
    }

    override async close(stepMs?: number) {
        await MockTime.resolve(super.close(), { macrotasks: true, stepMs });
    }

    async addFabric() {
        const fabric = await TestFabric({ fabrics: this.env.get(FabricManager) });

        // Wait for fabric install
        await this.events.commissioning.fabricsChanged;

        return fabric;
    }
}

export namespace MockServerNode {
    export interface Options<T extends ServerNode.RootEndpoint> {
        online?: boolean;
        config?: Node.Configuration<T>;
        device?: Endpoint.Definition;
    }
}
