/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Construction, isDeepEqual, StorageContext } from "#general";
import { EndpointStore } from "#node";
import { Val } from "@matter/protocol";

/**
 * This is a simple and pragmatic adoption for EndpointStore for Client usecases to cache subscription data.
 * Most methods from EndpointStore are not meant to be used in this class. Please just use "get" and "set".
 * This class is supposed to be used in legacy code paths for Controller usage.
 */
export class ClientEndpointStore extends EndpointStore {
    readonly #construction: Construction<EndpointStore>;
    #values: Record<string, Val.Struct> = {};

    constructor(storage: StorageContext, load = true) {
        super(storage, load);

        this.#construction = Construction(this, async () => {
            await super.construction;
            if (load) {
                // Copy over initial values from the superclass
                this.#values = this.initialValues;
                this.initialValues = {};
            }
        });
    }

    override get construction() {
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
                delete this.#values[behaviorId];
            } else {
                for (const key in behaviorValues) {
                    const value = behaviorValues[key];
                    if (value === undefined) {
                        delete this.#values[behaviorId][key];
                    } else {
                        if (!this.#values[behaviorId]) {
                            this.#values[behaviorId] = {};
                        } else if (isDeepEqual(this.#values[behaviorId][key], value)) {
                            delete behaviorValues[key];
                        }
                        this.#values[behaviorId][key] = value;
                    }
                }
            }
        }

        // Persist the data
        await super.set(values);
    }
}
