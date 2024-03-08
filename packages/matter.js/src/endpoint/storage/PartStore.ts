/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../../behavior/state/Val.js";
import type { Datasource } from "../../behavior/state/managed/Datasource.js";
import type { Endpoint } from "../../device/Endpoint.js";

/**
 * Persistence backing for an {@link Endpoint}.
 *
 * This is the interface a {@link Endpoint} uses for reading and writing
 * non-volatile values.
 */
export interface PartStore {
    /**
     * Description used in diagnostic messages.
     */
    toString(): string;

    /**
     * Currently persisted values, keyed by {@link Behavior.id} then property name.
     */
    initialValues: Record<string, Val.Struct>;

    /**
     * Patch values.  Keyed by {@link Behavior.id} then property name.
     *
     * See {@link Datasource.Store.set} for the patch semantics the individual structs use.
     */
    set(values: Record<string, Val.Struct | undefined>): Promise<void>;

    /**
     * Remove all persisted information for the {@link Endpoint}
     */
    delete(): Promise<void>;

    /**
     * Obtain a {@link Datasource.Store} for a behavior.
     */
    storeForBehavior(behaviorId: string): Datasource.Store;
}
