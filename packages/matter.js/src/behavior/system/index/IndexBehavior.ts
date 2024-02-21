/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Endpoint } from "../../../endpoint/Endpoint.js";
import { EndpointLifecycle } from "../../../endpoint/properties/EndpointLifecycle.js";
import { IdentityService } from "../../../node/server/IdentityService.js";
import { Time, Timer } from "../../../time/Time.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { Behavior } from "../../Behavior.js";
import { ActionContext } from "../../context/ActionContext.js";
import { OfflineContext } from "../../context/server/OfflineContext.js";

/**
 * This behavior indexes all descendents of a {@link Endpoint} by number.
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
        this.reactTo(this.endpoint.lifecycle.changed, this.#handleChange);
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
     * Retrieve a {@link Endpoint} by number.
     *
     * Note that {@link state.partsByNumber} does not include {@link endpoint} but this method will return it if the number
     * matches.
     */
    forNumber(number: number) {
        if (this.endpoint.lifecycle.hasNumber && number === this.endpoint.number) {
            return this.endpoint;
        }
        return this.internal.partsByNumber[number];
    }

    #handleChange(type: EndpointLifecycle.Change, endpoint: Endpoint) {
        switch (type) {
            case EndpointLifecycle.Change.IdAssigned:
            case EndpointLifecycle.Change.NumberAssigned:
            case EndpointLifecycle.Change.Installed:
                this.#add(endpoint);
                break;

            case EndpointLifecycle.Change.Destroyed:
                this.#remove(endpoint);
                break;
        }
    }

    #add(endpoint: Endpoint) {
        // This assertion is a sanity check; if there is a conflict then state is already corrupted
        if (endpoint.lifecycle.hasNumber) {
            this.endpoint.env.get(IdentityService).assertNumberAvailable(endpoint.number, endpoint);
            this.internal.partsByNumber[endpoint.number] = endpoint;
        }

        for (const child of endpoint.parts) {
            this.#add(child);
        }

        this.#change();
    }

    #remove(endpoint: Endpoint) {
        if (endpoint.id && this.internal.partsById[endpoint.id] === endpoint) {
            delete this.internal.partsById[endpoint.id];
        }

        if (endpoint.number !== undefined && this.internal.partsByNumber[endpoint.number] === endpoint) {
            delete this.internal.partsByNumber[endpoint.number];
        }

        for (const child of endpoint.parts) {
            this.#remove(child);
        }

        this.#change();
    }

    #change() {
        if (this.internal.changeBroadcaster) {
            return;
        }
        broadcastChange(`Update ${this.endpoint} index`, this.internal, this.events.change);
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
         * Map of ID to {@link Endpoint}.
         */
        partsById = {} as Record<string, Endpoint | undefined>;

        /**
         * Map of number to {@link Endpoint}.
         */
        partsByNumber = {} as Record<number, Endpoint | undefined>;
    }

    export class Events extends EventEmitter {
        /**
         * Emitted when the index changes.
         */
        change = new Observable<[context: ActionContext]>();
    }
}
