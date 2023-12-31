/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../../../endpoint/Part.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { BasicSet } from "../../../util/Set.js";
import { Behavior } from "../../Behavior.js";

/**
 * This behavior manages state related to the owning {@link Part}'s lifecycle.
 *
 * {@link LifecycleBehavior.state} includes:
 *     - Whether the part is installed into an owner
 *     - Whether the part's behaviors are initialized
 *     - Whether the part is online (addressable from a network)
 *
 * Other components that depend on this information may react to changes via
 * {@link LifecycleBehavior.events}.
 */
export class LifecycleBehavior extends Behavior {
    static override readonly id = "lifecycle";

    declare state: LifecycleBehavior.State;
    declare events: LifecycleBehavior.Events;

    /**
     * Initiate initialization.  Initialization is asynchronous.  When
     * initialization completes {@link LifecycleBehavior.State.initialized}
     * becomes true.
     */
    override initialize() {
        const state = this.state;

        function updateStatus() {
            if (state.initialized) {
                return;
            }

            if (state.installed && !state.initializingBehaviors.size) {
                state.initialized = true;
            }
        }

        this.events.installed$Change.on(() => updateStatus());

        this.state.initializingBehaviors.deleted.on(updateStatus);
    }
}

export namespace LifecycleBehavior {
    export class State {
        /**
         * True when the part is installed into a parent and the parent has
         * been initialized.
         *
         * Updated by the part when its owner is set.
         */
        installed = false;

        /**
         * True when the part and all child parts have completed
         * initialization.
         *
         * Set by LifecycleBehavior when the part is installed and
         * {@link initializingBehaviors} is empty.
         */
        initialized = false;

        /**
         * True when the part is online (addressable from a network).
         *
         * Updated by the Node when it is started or stopped.
         */
        online = false;

        /**
         * The set of behaviors still undergoing initialization.
         *
         * Updated by parts that perform asynchronous initialization.
         */
        initializingBehaviors = new BasicSet<Behavior>();
    }

    export class Events extends EventEmitter {
        number$Change = Observable<[number: number ]>();
        installed$Change = Observable<[installed: boolean ]>();
        initialized$Change = Observable<[initialized: boolean ]>();
        online$Change = Observable<[online: boolean]>();

        /**
         * This event is special cased in Part.  It is invoked after all
         * behaviors are destroyed.
         */
        destroyed = new Observable<[part: Part]>();

        /**
         * This event bubbles up when any part or behavior is added or removed
         * in the part ownership tree.
         */
        structure$Change = new Observable<[part: Part]>();
    }
}
