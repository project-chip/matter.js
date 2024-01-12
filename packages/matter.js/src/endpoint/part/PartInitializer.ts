/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { Part } from "../Part.js";

/**
 * Base class for {@link Part} initialization services.
 */
export abstract class PartInitializer {
    /**
     * Initialize a {@link Part}.
     */
    initializeDescendent(_part: Part) {};

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
