/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#log/Logger.js";
import { Bytes } from "#util/Bytes.js";

const logger = Logger.get("MockRouter");

export interface MockRouter extends MockRouter.Route {
    add(route: MockRouter.Route): void;
    delete(route: MockRouter.Route): void;
}

export function MockRouter() {
    const routes = new Set<MockRouter.Route>();

    const router = function router(packet: MockRouter.Packet) {
        for (const route of routes) {
            try {
                route(packet);
            } catch (e) {
                logger.error("Unhandled error in network listener", e);
            }
        }
    };

    router.add = routes.add.bind(routes);
    router.delete = routes.delete.bind(routes);

    return router;
}

export namespace MockRouter {
    export interface Packet {
        kind: "udp";
        sourceAddress: string;
        sourcePort: number;
        destAddress: string;
        destPort: number;
        payload: Bytes;
    }

    export interface Route {
        (packet: Packet): void;
    }
}
