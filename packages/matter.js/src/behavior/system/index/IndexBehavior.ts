/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../../../endpoint/Part.js";
import { PartLifecycle } from "../../../endpoint/part/PartLifecycle.js";
import { IdentityService } from "../../../node/server/IdentityService.js";
import { Time, Timer } from "../../../time/Time.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { Behavior } from "../../Behavior.js";
import { ActionContext } from "../../context/ActionContext.js";
import { OfflineContext } from "../../context/server/OfflineContext.js";

/**
 * This behavior indexes all descendents of a {@link Part} by number.
 *
 * IndexBehavior should only be present on root and aggregator parts as its presence causes the endpoint's PartsList
 * attribute to reflect a flat namespace as required by the Matter standard.
 */
export class IndexBehavior extends Behavior {
    static override readonly id = "index";

    declare internal: IndexBehavior.Internal;
    declare events: IndexBehavior.Events;

    static override readonly early = true;

    override initialize() {
        this.reactTo(this.part.lifecycle.changed, this.#handleChange);
    }

    override [Symbol.asyncDispose]() {
        this.internal.changeBroadcaster?.stop();
        delete this.internal.changeBroadcaster;
    }

    get partsById() {
        return this.internal.partsById;
    }

    get partsByNumber() {
        return this.internal.partsByNumber;
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
        return this.internal.partsByNumber[number];
    }

    #handleChange(type: PartLifecycle.Change, part: Part) {
        switch (type) {
            case PartLifecycle.Change.IdAssigned:
            case PartLifecycle.Change.NumberAssigned:
            case PartLifecycle.Change.Installed:
                this.#add(part);
                break;

            case PartLifecycle.Change.Destroyed:
                this.#remove(part);
                break;
        }
    }

    #add(part: Part) {
        // This assertion is a sanity check; if there is a conflict then state is already corrupted
        if (part.lifecycle.hasNumber) {
            this.part.env.get(IdentityService).assertNumberAvailable(part.number, part);
            this.internal.partsByNumber[part.number] = part;
        }

        for (const child of part.parts) {
            this.#add(child);
        }

        this.#change();
    }

    #remove(part: Part) {
        if (part.id && this.internal.partsById[part.id] === part) {
            delete this.internal.partsById[part.id];
        }

        if (part.number !== undefined && this.internal.partsByNumber[part.number] === part) {
            delete this.internal.partsByNumber[part.number];
        }

        for (const child of part.parts) {
            this.#remove(child);
        }

        this.#change();
    }

    #change() {
        if (this.internal.changeBroadcaster) {
            return;
        }
        broadcastChange(`Update ${this.part} index`, this.internal, this.events.change);
    }
}

/**
 * Trigger change event lazily so transactions complete and we can coalesce into fewer events.
 */
function broadcastChange(name: string, internal: IndexBehavior.Internal, change: Observable<[context: ActionContext]>) {
    if (internal.changeBroadcaster) {
        return;
    }

    internal.changeBroadcaster = Time.getTimer(name, 0, () => {
        delete internal.changeBroadcaster;
        OfflineContext.act("index-change", context => change.emit(context));
    });
}

export namespace IndexBehavior {
    export class Internal {
        changeBroadcaster?: Timer;

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
        change = new Observable<[context: ActionContext]>();
    }
}
