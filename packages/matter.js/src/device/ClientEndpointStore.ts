/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Construction, isDeepEqual, StorageContext } from "#general";
import { ServerEndpointStore } from "#node";
import { Val } from "@matter/protocol";

/**
 * This is a simple and pragmatic adoption for EndpointStore for Client usecases to cache subscription data.
 * Most methods from EndpointStore are not meant to be used in this class. Please just use "get" and "set".
 * This class is supposed to be used in legacy code paths for Controller usage.
 */
export class ClientEndpointStore extends ServerEndpointStore {
    readonly #construction: Construction<ServerEndpointStore>;
    #values = new Map<string, Val.Struct>();

    constructor(storage: StorageContext, load = true) {
        super(storage);

        this.#construction = Construction(this, async () => {
            if (load) {
                await this.load();

                // Copy over initial values from the superclass
                this.#values = this.initialValues;
                this.initialValues = new Map();
            }
        });
    }

    get construction() {
        return this.#construction;
    }

    get get() {
        return this.#values;
    }

    override async set(values: Record<string, undefined | Val.Struct>) {
        await this.construction;

        // Update the cached data too
        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            if (behaviorValues === undefined) {
                this.#values.delete(behaviorId);
            } else {
                for (const key in behaviorValues) {
                    const value = behaviorValues[key];
                    if (value === undefined) {
                        delete this.#values.get(behaviorId)?.[key];
                    } else {
                        let vals = this.#values.get(behaviorId);
                        if (!vals) {
                            this.#values.set(behaviorId, (vals = {}));
                        } else if (isDeepEqual(vals[key], value)) {
                            delete behaviorValues[key];
                        }
                        vals[key] = value;
                    }
                }
            }
        }

        // Persist the data
        await super.set(values);
    }
}
