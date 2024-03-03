/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../../common/Lifecycle.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import type { Node } from "../../node/Node.js";
import { AsyncObservable, Observable } from "../../util/Observable.js";
import type { Endpoint } from "../Endpoint.js";

const logger = Logger.get("PartLifecycle");

/**
 * State related to a {@link Endpoint}'s lifecycle.
 */
export class EndpointLifecycle {
    #endpoint: Endpoint;
    #isInstalled = false;
    #isReady = false;
    #isTreeReady = false;
    #hasId = false;
    #hasNumber = false;
    #installed = new Observable<[]>(error => this.emitError("installed", error));
    #ready = new Observable<[]>(error => this.emitError("ready", error));
    #treeReady = new Observable<[]>(error => this.emitError("treeReady", error));
    #destroyed = new Observable<[]>(error => this.emitError("destroyed", error));
    #changed = new Observable<[type: EndpointLifecycle.Change, endpoint: Endpoint]>(error =>
        this.emitError("changed", error),
    );
    #reset = new AsyncObservable<[]>();
    #queuedUpdates?: Array<EndpointLifecycle.Change>;

    /**
     * Emitted when an endpoint is installed into an initialized owner.
     */
    get installed() {
        return this.#installed;
    }

    /**
     * Emitted when an endpoint is fully initialized excepting children.
     */
    get ready() {
        return this.#ready;
    }

    /**
     * Emitted when an endpoint is fully initialized including children.
     */
    get treeReady() {
        return this.#treeReady;
    }

    /**
     * Emitted when the endpoint is destroyed.
     */
    get destroyed() {
        return this.#destroyed;
    }

    /**
     * Bubbling event indicating changes to endpoint structure.
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
     * Is the {@link Endpoint} installed in a {@link Node}?
     */
    get isInstalled() {
        return this.#isInstalled;
    }

    /**
     * Is the {@link Endpoint} fully initialized, excepting children?
     */
    get isReady() {
        return this.#isReady;
    }

    /**
     * Is the {@link Endpoint} fully initialized, including children?
     */
    get isTreeReady() {
        return this.#isTreeReady;
    }

    /**
     * Does the endpoint have an ID?
     */
    get hasId() {
        return this.#hasId;
    }

    /**
     * Does the endpoint have an endpoint number?
     */
    get hasNumber() {
        return this.#hasNumber;
    }

    constructor(endpoint: Endpoint) {
        this.#endpoint = endpoint;

        // Bubble crash events
        endpoint.construction.change.on(status => {
            if (status === Lifecycle.Status.Crashed) {
                this.change(EndpointLifecycle.Change.Crashed);
            }
        });
    }

    /**
     * Bubble a lifecycle change event from a child.
     */
    bubble(type: EndpointLifecycle.Change, endpoint: Endpoint) {
        this.#changed.emit(type, endpoint);

        if (type === EndpointLifecycle.Change.TreeReady) {
            this.#checkTreeReadiness();
        }
    }

    /**
     * Inform the Lifecycle of a change in lifecycle.
     */
    change(type: EndpointLifecycle.Change) {
        // Update state
        switch (type) {
            case EndpointLifecycle.Change.Installed:
                this.#isInstalled = true;
                break;

            case EndpointLifecycle.Change.Ready:
                // Sanity checks
                if (!this.#hasId) {
                    throw new ImplementationError("Endpoint reports as ready but has no ID assigned");
                }
                if (!this.#hasNumber) {
                    throw new ImplementationError("Endpoint reports as ready but has no number assigned");
                }
                this.#isReady = true;
                this.#checkTreeReadiness();
                break;

            case EndpointLifecycle.Change.IdAssigned:
                this.#hasId = true;
                break;

            case EndpointLifecycle.Change.NumberAssigned:
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
                this.#changed.emit(type, this.#endpoint);

                // Emit endpoint-specific events
                const observable = (this as unknown as Record<string, Observable>)[type];
                if (observable !== undefined) {
                    observable.emit();
                }
            }
        } finally {
            this.#queuedUpdates = undefined;
        }
    }

    protected emitError(name: string, error: Error) {
        logger.error("Unhandled error in", Diagnostic.strong(`${this.#endpoint}.lifecycle.${name}`), "handler:", error);
    }

    /**
     * Revert to uninstalled state.
     */
    resetting() {
        this.#isInstalled = this.#isReady = this.#isTreeReady = false;
    }

    #checkTreeReadiness() {
        if (this.#isTreeReady) {
            return;
        }

        if (!this.#endpoint.parts.areReady) {
            return;
        }

        this.#isTreeReady = true;
        this.change(EndpointLifecycle.Change.TreeReady);
    }
}

export namespace EndpointLifecycle {
    export enum Change {
        Installed = "installed",
        Ready = "ready",
        TreeReady = "treeReady",
        Crashed = "crashed",
        Destroyed = "destroyed",
        ServersChanged = "serversChanged",
        ClientsChanged = "clientsChanged",
        IdAssigned = "idAssigned",
        NumberAssigned = "numberAssigned",
    }
}
