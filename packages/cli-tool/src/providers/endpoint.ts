/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#node";
import { Directory, Stat } from "#stat.js";

Stat.provide(endpoint => {
    if (!isEndpoint(endpoint)) {
        return;
    }

    return Directory({
        definitionAt(path) {
            const part = endpoint.parts.get(path);

            if (part) {
                if (!part.lifecycle.isReady) {
                    return part.construction.then(() => Stat.of(part));
                }
                return Stat.of(part);
            }
        },

        paths() {
            if (!endpoint.lifecycle.isPartsReady) {
                return endpoint.construction.then(() => endpoint.parts.map(part => part.id));
            }
            return endpoint.parts.map(part => part.id);
        },
    });
});

function isEndpoint(item: unknown): item is Endpoint {
    return item instanceof Endpoint;
}
