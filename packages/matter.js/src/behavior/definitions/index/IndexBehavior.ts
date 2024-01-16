/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../../../endpoint/Part.js";
import { PartLifecycle } from "../../../endpoint/part/PartLifecycle.js";
import { IdentityService } from "../../../node/server/IdentityService.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { Behavior } from "../../Behavior.js";

/**
 * This behavior indexes all descendents of a {@link Part} by number.
 * 
 * IndexBehavior should only be present on root and aggregator parts as its presence causes the endpoint's PartsList
 * attribute to reflect a flat namespace as required by the Matter standard.
 */
export class IndexBehavior extends Behavior {
    static override id = "index";

    declare state: IndexBehavior.State;
    declare events: IndexBehavior.Events;

    override initialize() {
        for (const part of this.part.parts) {
            this.#add(part);
        }

        this.part.lifecycle.changed.on((type, part) => {
            switch (type) {
                case PartLifecycle.Change.IdAssigned:
                case PartLifecycle.Change.NumberAssigned:
                case PartLifecycle.Change.Ready:
                    this.#add(part);
                    break;

                case PartLifecycle.Change.Destroyed:
                    this.#remove(part);
                    break;
            }
        });
    }

    /**
     * Retrieve a {@link Part} by number.
     * 
     * Note that {@link state.partsByNumber} does not include {@link part} but this method will return it if the number
     * matches.
     */
    forNumber(number: number) {
        if (this.part.lifecycle.hasNumber && number === this.part.number) {
            return this.part;
        }
        return this.state.partsByNumber[number];
    }

    #add(part: Part) {
        // This assertion is a sanity check; if there is a conflict then state is already corrupted
        if (part.lifecycle.hasNumber) {
            this.part.serviceFor(IdentityService).assertNumberAvailable(part.number, part);
            this.state.partsByNumber[part.number] = part;
        }

        for (const child of part.parts) {
            this.#add(child);
        }

        this.events.change.emit();
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

        this.events.change.emit();
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

    export class Events extends EventEmitter {
        /**
         * Emitted when the index changes.
         */
        change = new Observable();
    }
}
