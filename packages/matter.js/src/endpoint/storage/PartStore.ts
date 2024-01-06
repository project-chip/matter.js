/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../../behavior/state/managed/Val.js";
import type { Datasource } from "../../behavior/state/managed/Datasource.js";

/**
 * Persistence backing for a {@link Part}.
 * 
 * This is the interface a {@link Part} uses for reading and writing
 * non-volatile values.
 */
export interface PartStore {
    /**
     * Currently persisted values, keyed by {@link Behavior.id} then
     * property name.
     */
    initialValues: Record<string, Val.Struct>;

    /**
     * Patch values.  Keyed by {@link Behavior.id} then property name.
     * 
     * See {@link Datasource.Store.set} for the patch semantics the individual
     * structs use.
     */
    set(values: Record<string, Val.Struct | undefined>): Promise<void>;

    /**
     * Remove persisted values for the {@link Part}
     */
    delete(): Promise<void>;

    /**
     * Obtain a {@link Datasource.Store} for a behavior.
     */
    storeForBehavior(behaviorId: string): Datasource.Store;
}
