/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { limitNodeDataToAllowedFabrics } from "#behavior/cluster/FabricScopedDataHandler.js";
import { EndpointInitializer } from "#endpoint/index.js";
import { ServerEndpointInitializer } from "#endpoint/server/ServerEndpointInitializer.js";
import { Observable } from "#general";
import type { ServerNode } from "#node/ServerNode.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { FabricManager, SessionManager } from "#protocol";
import { IdentityService } from "./IdentityService.js";

/**
 * Manages the environment of a server.
 */
export namespace ServerEnvironment {
    /** Emits the fabric-scoped data are sanitized after the removal of a fabric. Only use for testing! */
    export const fabricScopedDataSanitized = Observable();

    export async function initialize(node: ServerNode) {
        const { env } = node;

        // Install support services
        env.set(ServerNodeStore, await ServerNodeStore.create(env, node.id));
        env.set(EndpointInitializer, new ServerEndpointInitializer(env));
        env.set(IdentityService, new IdentityService(node));

        // Ensure these are fully initialized
        const fabrics = await env.load(FabricManager);

        fabrics.events.deleted.on(async () => {
            const fabricIndices = fabrics.fabrics.map(fabric => fabric.fabricIndex);
            if (fabricIndices.length > 0) {
                await limitNodeDataToAllowedFabrics(node, fabricIndices);
            }
            fabricScopedDataSanitized.emit(); // Only for testing purposes
        });

        await env.load(SessionManager);
    }

    export async function close(node: ServerNode) {
        const { env } = node;

        env.close(FabricManager);
        await env.close(SessionManager);
        await env.close(ServerNodeStore);
    }
}
