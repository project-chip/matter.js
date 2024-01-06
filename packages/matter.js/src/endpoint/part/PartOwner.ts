/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "../../behavior/Behavior.js";
import type { Part } from "../Part.js";

/**
 * This is the interface used by {@link Agent} and {@link Behavior} to
 * perform internal operations that differ between client and server
 * implementations.
 */
export interface PartOwner {
    /**
     * The parent of the owner.
     */
    readonly owner: PartOwner | undefined;

    /**
     * Adopt a {@link Part} as a direct descendent.
     */
    adoptChild(part: Part): void;

    /**
     * Access a service component supported by the owner.
     * 
     * This simple form of dependency injection acts as a bridge between parts
     * and the hosting node.
     */
    serviceFor<T>(type: abstract new (...args: any) => T): T;
}
