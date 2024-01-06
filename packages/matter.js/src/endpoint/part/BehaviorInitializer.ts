/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { Part } from "../Part.js";

/**
 * Pure-abstract base class for behavior initialization services.
 * 
 * Not an interface because PartOwner service uses the class to differentiate
 * component types.
 */
export abstract class BehaviorInitializer {
    /**
     * Initialize a {@link Part}.
     */
    abstract initializeDescendent(part: Part): void;

    /**
     * Create backing for a behavior of a descendent.
     *
     * @param part the {@link Part} the behavior belongs to
     * @param type the {@link Behavior} type
     * @param defaults default values for behavior state
     * @returns a new {@link BehaviorBacking}
     */
    abstract createBacking(part: Part, behavior: Behavior.Type): BehaviorBacking;
}
