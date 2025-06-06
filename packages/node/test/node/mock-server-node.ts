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
    Bytes,
    Crypto,
    DataReadQueue,
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
import { ExchangeManager, FabricBuilder, FabricManager, MessageExchange, SessionManager } from "#protocol";
import { FabricIndex, NodeId, VendorId } from "#types";
import { MockExchange } from "./mock-exchange.js";

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

const ROOT_CERT = Bytes.fromHex(
    "153001010024020137032414001826048012542826058015203b37062414001824070124080130094104d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d370a3501290118240260300414e766069362d7e35b79687161644d222bdde93a68300514e766069362d7e35b79687161644d222bdde93a6818300b404e8fb06526f0332b3e928166864a6d29cade53fb5b8918a6d134d0994bf1ae6dce6762dcba99e80e96249d2f1ccedb336b26990f935dba5a0b9e5b4c9e5d1d8f1818181824ff0118",
);

const NEW_OP_CERT = Bytes.fromHex(
    "153001010124020137032414001826048012542826058015203b370624150124110918240701240801300941043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba370a35012801182402013603040204011830041402cce0d7bfa29e98e454be38e27bfe6c0f162302300514e766069362d7e35b79687161644d222bdde93a6818300b4050e8183c290f438a57516faea006282d6d2b5178d5d15dfcc3ec8a9232db942894ff2d2ce941d3b42dd8a2cd51eea4f3f50b66757959368868c3a0a1b5fe665f18",
);

const IPK_KEY = Bytes.fromHex("74656d706f726172792069706b203031");

export class MockServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends ServerNode<T> {
    #newExchanges = new DataReadQueue<MockExchange>();
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

    async addFabric(index = 1) {
        const builder = await FabricBuilder.create();
        builder.setRootVendorId(VendorId(0));
        builder.setRootNodeId(NodeId(1));
        await builder.setRootCert(ROOT_CERT);
        await builder.setOperationalCert(NEW_OP_CERT);
        builder.setIdentityProtectionKey(IPK_KEY);
        const fabric = await builder.build(FabricIndex(index));
        this.env.get(FabricManager).addFabric(fabric);
        await this.events.commissioning.fabricsChanged; // Wait till the fabric addition is processed
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
