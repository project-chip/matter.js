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
import { OnOffLightDevice } from "../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { Environment } from "../../src/environment/Environment.js";
import { StorageService } from "../../src/environment/StorageService.js";
import { Network } from "../../src/net/Network.js";
import { NetworkFake } from "../../src/net/fake/NetworkFake.js";
import { Node } from "../../src/node/Node.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { ServerRootEndpoint } from "../../src/node/server/ServerRootEndpoint.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { MaybePromise } from "../../src/util/Promises.js";

export class MockServerNode<T extends ServerRootEndpoint = ServerRootEndpoint> extends ServerNode<T> {
    constructor(type: T = ServerRootEndpoint as T) {
        const environment = new Environment("test");

        const storage = environment.get(StorageService);
        storage.location = "(memory)";
        storage.factory = () => new StorageBackendMemory();

        environment.set(
            Network,
            new NetworkFake("00:B0:D0:63:C2:26", ["fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe", "192.168.20.20"]),
        );

        const config = {
            type,
            environment,
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

    static async createOnline(options: { online?: boolean, device?: Part.Definition } = { device: OnOffLightDevice }) {
        const node = new MockServerNode<ServerRootEndpoint>();
    
        if (options.device !== undefined) {
            node.add(OnOffLightDevice);
        }
    
        if (options.online === false) {
            await node.construction;
            return node;
        }

        node.start();

        if (!node.lifecycle.isOnline) {
            await node.lifecycle.online;
        }
    
        return node;
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
}
