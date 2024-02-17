/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../src/MatterDevice.js";
import { OnlineContext } from "../../src/behavior/context/server/OnlineContext.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Part } from "../../src/endpoint/Part.js";
import { Environment } from "../../src/environment/Environment.js";
import { StorageService } from "../../src/environment/StorageService.js";
import { Network } from "../../src/net/Network.js";
import { NetworkFake } from "../../src/net/fake/NetworkFake.js";
import { Node } from "../../src/node/Node.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { ServerRootEndpoint } from "../../src/node/server/ServerRootEndpoint.js";
import { MessageExchange } from "../../src/protocol/MessageExchange.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { MaybePromise } from "../../src/util/Promises.js";
import { Crypto } from "../../src/crypto/Crypto.js";
import { Key, PrivateKey } from "../../src/crypto/Key.js";
import { OnOffLightDevice } from "../../src/endpoint/definitions/device/OnOffLightDevice.js";

// These are temporary until we get proper crypto.subtle support
Crypto.get().sign = () => {
    return new ByteArray(32);
};
Crypto.get().hash = () => {
    return new ByteArray(32);
};
Crypto.get().createKeyPair = () => {
    const SEC1_KEY = ByteArray.fromHex(
        "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
    );

    return Key({ sec1: SEC1_KEY }) as PrivateKey;
};
Crypto.get().hkdf = async () => {
    return new ByteArray(16);
};

export class MockServerNode<T extends ServerRootEndpoint = ServerRootEndpoint> extends ServerNode<T> {
    constructor(type: T = ServerRootEndpoint as T, options?: Node.Options<T>) {
        const environment = new Environment("test");

        const storage = environment.get(StorageService);
        storage.location = "(memory)";
        storage.factory = () => new StorageBackendMemory();

        environment.set(
            Network,
            MockServerNode.createNetwork(1),
        );

        const config = {
            type,
            environment,
            ...options,
        } as Node.Configuration<T>;

        super(config);
    }

    /**
     * Perform fake online activity
     */
    online<R>(
        options: Partial<OnlineContext.Options>,
        actor: (agent: Agent.Instance<T>) => MaybePromise<R>,
    ): MaybePromise<R> {
        if (!options.session) {
            if (!options.fabric) {
                options.fabric = FabricIndex.NO_FABRIC;
            }
            if (!options.subject) {
                options.subject = NodeId(0);
            }
        }
        return OnlineContext(options as OnlineContext.Options).act(context => actor(context.agentFor(this)));
    }

    static async createOnline<T extends ServerRootEndpoint = ServerRootEndpoint>(options?: MockServerNode.Options<T>) {
        let { online, config, device } = options ?? {};

        if (!config) {
            config = { type: ServerRootEndpoint as T } as Node.Configuration<T>
        }
        
        const node = new MockServerNode<ServerRootEndpoint>(config.type, config);

        if (device === undefined && options && !("device" in options)) {
            device = OnOffLightDevice;
        }

        if (device) {
            await node.add(device);
        }

        if (online === false) {
            await node.construction;
            return node;
        }

        node.start();

        if (!node.lifecycle.isOnline) {
            await node.lifecycle.online;
        }

        return node;
    }

    static createNetwork(lastIdentifierByte: number) {
        const byte = lastIdentifierByte.toString(16).padStart(2, "0");
        return new NetworkFake(
            `00:11:22:33:44:${byte}`,
            [
                `1111:2222:3333:4444:5555:6666:7777:88${byte}`,
                `10.10.10.${lastIdentifierByte}`,
            ]
        );
    }

    async createSession(options?: Partial<Parameters<MatterDevice["createSecureSession"]>[0]>) {
        return await this.env.get(MatterDevice).createSecureSession({
            sessionId: 1,
            fabric: undefined,
            peerNodeId: NodeId(0),
            peerSessionId: 1,
            sharedSecret: new ByteArray(),
            salt: new ByteArray(),
            isInitiator: false,
            isResumption: false,
            ...options,
        });
    }

    async createExchange(options?: Partial<Parameters<MatterDevice["createSecureSession"]>[0]>) {
        return {
            channel: { name: "test" },
            clearTimedInteraction: () => {},
            hasTimedInteraction: () => false,
            hasActiveTimedInteraction: () => false,
            hasExpiredTimedInteraction: () => false,
            session: await this.createSession(options),
        } as unknown as MessageExchange<any>;
    }
}

export namespace MockServerNode {
    export interface Options<T extends ServerRootEndpoint> {
        online?: boolean;
        config?: Node.Configuration<T>;
        device?: Part.Definition;
    }
}