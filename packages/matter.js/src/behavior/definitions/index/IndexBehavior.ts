/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import type { Part } from "../../../endpoint/Part.js";
import { Behavior } from "../../Behavior.js";
import { StructuralChangeType } from "../lifecycle/StructuralChangeType.js";

/**
 * Thrown when there is a part ID or number conflict.
 */
export class IdentityConflictError extends ImplementationError {};

/**
 * This behavior indexes all descendents of a {@link Part} by ID and number.
 * 
 * IndexBehavior should only be present on root and aggregator parts as its
 * presence causes the endpoint's PartsList attribute to reflect a flat
 * namespace as required by the Matter standard.
 */
export class IndexBehavior extends Behavior {
    static override id = "index";

    declare state: IndexBehavior.State;

    override initialize() {
        for (const part of this.part.parts) {
            this.#add(part);
        }

        this.part.lifecycle.events.structure$Change.on((type, part) => {
            switch (type) {
                case StructuralChangeType.IdAssigned:
                case StructuralChangeType.NumberAssigned:
                case StructuralChangeType.PartAdded:
                    this.#add(part);
                    break;

                case StructuralChangeType.PartDeleted:
                    this.#remove(part);
                    break;
            }
        });
    }

    /**
     * Retrieve a {@link Part} by ID.
     * 
     * Note that {@link state.partsById} does not include {@link part} but this
     * method will return it if the ID matches.
     */
    forId(id: string) {
        if (id === this.part.id) {
            return this.part;
        }
        return this.state.partsById[id];
    }

    /**
     * Retrieve a {@link Part} by number.
     * 
     * Note that {@link state.partsByNumber} does not include {@link part} but
     * this method will return it if the number matches.
     */
    forNumber(number: number) {
        if (number === this.part.number) {
            return this.part;
        }
        return this.state.partsByNumber[number];
    }

    /**
     * Ensure that an ID is available for assignment to a {@link Part}.
     */
    assertIdAvailable(id: string, part: Part) {
        const other = this.forId(id);
        if (other && other !== part) {
            throw new IdentityConflictError(`Another part already exists with ID ${id}`)
        }
    }

    /**
     * Ensure that a number is available for assignment to a {@link Part}.
     */
    assertNumberAvailable(number: number, part: Part) {
        const other = this.forNumber(number);
        if (number === 0) {

        }
        if (other && other !== part) {
            throw new IdentityConflictError(`Another part already exists with number ${number}`)
        }
    }

    #add(part: Part) {
        // The assertions herein are sanity checks; if there is a conflict then
        // state is already corrupted
        if (part.id !== undefined) {
            this.assertIdAvailable(part.id, part);
            this.state.partsById[part.id] = part;
        }

        if (part.number !== undefined) {
            this.assertNumberAvailable(part.number, part);
            this.state.partsByNumber[part.number] = part;
        }

        for (const child of part.parts) {
            this.#add(child);
        }
    }

    #remove(part: Part) {
        if (part.id && this.state.partsById[part.id] === part) {
            delete this.state.partsById[part.id];
        }

        if (part.number !== undefined && this.state.partsByNumber[part.number] === part) {
            delete this.state.partsByNumber[part.number];
        }
        
        for (const child of part.parts) {
            this.#remove(child);
        }
    }
}

export namespace IndexBehavior {
    export class State {
        /**
         * Map of ID to {@link Part}.
         */
        partsById = {} as Record<string, Part | undefined>;

        /**
         * Map of number to {@link Part}.
         */
        partsByNumber = {} as Record<number, Part | undefined>;
    }
}
