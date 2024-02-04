/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../../behavior/context/ActionContext.js";
import { OfflineContext } from "../../behavior/context/server/OfflineContext.js";
import { Lifecycle } from "../../common/Lifecycle.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import type { Node } from "../../node/Node.js";
import { Observable } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import type { Part } from "../Part.js";

const logger = Logger.get("PartLifecycle");

/**
 * State related to a {@link Part}'s lifecycle.
 */
export class PartLifecycle {
    #part: Part;
    #isInstalled = false;
    #isReady = false;
    #isTreeReady = false;
    #hasId = false;
    #hasNumber = false;
    #installed = new Observable<[]>(error => this.emitError("installed", error));
    #ready = new Observable<[]>(error => this.emitError("ready", error));
    #treeReady = new Observable<[]>(error => this.emitError("treeReady", error));
    #destroyed = new Observable<[]>(error => this.emitError("destroyed", error));
    #changed = new Observable<[type: PartLifecycle.Change, part: Part]>(error => this.emitError("changed", error));
    #reset = new Observable<[context: ActionContext], MaybePromise>();
    #queuedUpdates?: Array<PartLifecycle.Change>;

    /**
     * Emitted when a part is installed into an initialized owner.
     */
    get installed() {
        return this.#installed;
    }

    /**
     * Emitted when a part is fully initialized excepting children.
     */
    get ready() {
        return this.#ready;
    }

    /**
     * Emitted when a part is fully initialized including children.
     */
    get treeReady() {
        return this.#treeReady;
    }

    /**
     * Emitted when the part is destroyed.
     */
    get destroyed() {
        return this.#destroyed;
    }

    /**
     * Bubbling event indicating changes to part structure.
     */
    get changed() {
        return this.#changed;
    }

    /**
     * Emitted on factory reset.
     */
    get reset() {
        return this.#reset;
    }

    /**
     * Is the {@link Part} installed in a {@link Node}?
     */
    get isInstalled() {
        return this.#isInstalled;
    }

    /**
     * Is the {@link Part} fully initialized, excepting children?
     */
    get isReady() {
        return this.#isReady;
    }

    /**
     * Is the {@link Part} fully initialized, including children?
     */
    get isTreeReady() {
        return this.#isTreeReady;
    }

    /**
     * Does the part have an ID?
     */
    get hasId() {
        return this.#hasId;
    }

    /**
     * Does the part have an endpoint number?
     */
    get hasNumber() {
        return this.#hasNumber;
    }

    constructor(part: Part) {
        this.#part = part;
    }

    /**
     * Perform factory reset.
     */
    async factoryReset() {
        if (!this.#isInstalled) {
            throw new ImplementationError("Cannot reset uninstalled part");
        }

        await this.#part.construction;

        // Run reset once cancelled
        this.#isReady = this.#isTreeReady = this.#isInstalled = false;

        await OfflineContext.act("factory-reset", async context => {
            await this.#factoryReset(context);
        });

        this.#part.construction.setStatus(Lifecycle.Status.Inactive);
        this.change(PartLifecycle.Change.Installed);
    }

    /**
     * Reset child parts and behaviors as part of factory reset.
     */
    async #factoryReset(context: ActionContext) {
        for (const part of this.#part.parts) {
            await part.lifecycle.#factoryReset(context);
        }

        await this.#reset.emit(context);
    }

    /**
     * Bubble a lifecycle change event from a child.
     */
    bubble(type: PartLifecycle.Change, part: Part) {
        this.#changed.emit(type, part);

        if (type === PartLifecycle.Change.Ready) {
            this.#checkTreeReadiness();
        }
    }

    /**
     * Inform the Lifecycle of a change in lifecycle.
     */
    change(type: PartLifecycle.Change) {
        // Update state
        switch (type) {
            case PartLifecycle.Change.Installed:
                this.#isInstalled = true;
                break;

            case PartLifecycle.Change.Ready:
                // Sanity checks
                if (!this.#hasId) {
                    throw new ImplementationError("Part reports as ready but has no ID assigned");
                }
                if (!this.#hasNumber) {
                    throw new ImplementationError("Part reports as ready but has no number assigned");
                }
                this.#isReady = true;
                this.#checkTreeReadiness();
                break;

            case PartLifecycle.Change.IdAssigned:
                this.#hasId = true;
                break;

            case PartLifecycle.Change.NumberAssigned:
                this.#hasNumber = true;
                break;
        }

        // We want events to trigger in correct order but some of them cascade.
        // So if we're currently emitting, enqueue
        if (this.#queuedUpdates) {
            this.#queuedUpdates?.push(type);
            return;
        }

        // Emit events
        this.#queuedUpdates = [type];
        try {
            while (this.#queuedUpdates.length) {
                const type = this.#queuedUpdates[0];
                this.#queuedUpdates.shift();

                // Emit change event
                this.changed.emit(type, this.#part);

                // Emit part-specific events
                const observable = (this as unknown as Record<string, Observable>)[type];
                if (observable) {
                    observable.emit();
                }

                this.#queuedUpdates.shift();
            }
        } finally {
            this.#queuedUpdates = undefined;
        }
    }

    protected emitError(name: string, error: Error) {
        logger.error("Unhandled error in", Diagnostic.strong(`${this.#part}.lifecycle.${name}`), "handler:", error);
    }

    #checkTreeReadiness() {
        if (this.#isTreeReady) {
            return;
        }

        if (!this.#part.parts.areReady) {
            return;
        }

        this.#isTreeReady = true;
        this.change(PartLifecycle.Change.TreeReady);
    }
}

export namespace PartLifecycle {
    export enum Change {
        Installed = "installed",
        Ready = "ready",
        TreeReady = "treeReady",
        Destroyed = "destroyed",
        ServersChanged = "serversChanged",
        ClientsChanged = "clientsChanged",
        IdAssigned = "idAssigned",
        NumberAssigned = "numberAssigned",
    }
}
