/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "../../behavior/Behavior.js";
import type { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { StorageContext } from "../../storage/StorageContext.js";
import type { Part } from "../Part.js";

/**
 * This is the interface used by {@link Agent} and {@link Behavior} to
 * perform internal operations that differ between client and server
 * implementations.
 */
export interface PartOwner {
    /**
     * Initialize a behavior.
     *
     * @param part the {@link Part} the behavior belongs to
     * @param type the {@link Behavior} type
     * @returns a new {@link BehaviorBacking}
     */
    createBacking(part: Part, behavior: Behavior.Type): BehaviorBacking;

    /**
     * Obtain a {@link StorageContext} for persisting state.
     */
    readonly stateStorage?: StorageContext;

    /**
     * Obtain an ancestor of a given class type.
     */
    getAncestor<T>(type: new (...args: any[]) => T): T;

    /**
     * Obtain a part's index within the parent.
     */
    indexOf(part: Part): number | undefined;
}
