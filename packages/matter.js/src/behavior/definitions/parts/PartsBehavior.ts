/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../../../endpoint/Agent.js";
import { Part } from "../../../endpoint/Part.js";
import { MutableSet } from "../../../util/Set.js";
import { Behavior } from "../../Behavior.js";

/**
 * Provides access to child endpoints.
 */
export class PartsBehavior extends Behavior implements MutableSet<Part, Part | Agent> {
    static override readonly id = "parts";

    add(child: Part.Definition | Agent) {
        this.part.parts.add(child);
    }

    delete(child: Part | Agent) {
        return this.part.parts.delete(child);
    }
 
    clear() {
        this.part.parts.clear();
    }

    has(child: Part | Agent) {
        return this.part.parts.has(child);
    }

    indexOf(child: Part | Agent) {
        return this.part.parts.indexOf(child);
    }

    *[Symbol.iterator]() {
        for (const part of this.part.parts) {
            yield part.getAgent(this.context);
        }
    }
}
