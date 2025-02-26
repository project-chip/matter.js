/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointInitializer } from "#endpoint/index.js";
import type { ServerNode } from "#node/ServerNode.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { FabricManager, SessionManager } from "#protocol";
import { ServerEndpointInitializer } from "../../endpoint/server/ServerEndpointInitializer.js";
import { IdentityService } from "./IdentityService.js";

/**
 * Manages the environment of a server.
 */
export namespace ServerEnvironment {
    export async function initialize(node: ServerNode) {
        const { env } = node;

        // Install support services
        env.set(ServerNodeStore, await ServerNodeStore.create(env, node.id));
        env.set(EndpointInitializer, new ServerEndpointInitializer(env));
        env.set(IdentityService, new IdentityService(node));

        // Ensure these are fully initialized
        await env.load(FabricManager);
        await env.load(SessionManager);
    }

    export async function close(node: ServerNode) {
        const { env } = node;

        env.close(FabricManager);
        await env.close(SessionManager);
        await env.close(ServerNodeStore);
    }
}
