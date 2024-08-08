/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../../common/Lifecycle.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { IdentityConflictError, IdentityService } from "../../node/server/IdentityService.js";
import { Construction } from "../../util/Construction.js";
import { BasicSet, MutableSet, ObservableSet } from "../../util/Set.js";
import { Agent } from "../Agent.js";
import { Endpoint } from "../Endpoint.js";
import { EndpointPartsError, PartNotFoundError } from "../errors.js";
import { EndpointType } from "../type/EndpointType.js";
import { EndpointLifecycle } from "./EndpointLifecycle.js";

const logger = Logger.get("Parts");

/**
 * Manages parent-child relationship between endpoints.
 *
 * You can manipulate child parts using {@link MutableSet} interface.
 *
 * Notifications of structural change bubble via {@link Endpoint.lifecycle.changed}.
 */
export class Parts implements MutableSet<Endpoint, Endpoint | Agent>, ObservableSet<Endpoint> {
    #bubbleChange: (type: EndpointLifecycle.Change, endpoint: Endpoint) => void;
    #children = new BasicSet<Endpoint>();
    #endpoint: Endpoint;

    constructor(endpoint: Endpoint) {
        this.#endpoint = endpoint;
        const lifecycle = this.#endpoint.lifecycle;
        this.#bubbleChange = (type, endpoint) => lifecycle.bubble(type, endpoint);
    }

    add(child: Endpoint.Definition | Agent) {
        const endpoint = this.#endpointFor(child);

        // Setting endpoint.owner also invokes add() so make sure we don't recurse
        if (this.has(endpoint)) {
            return;
        }

        if (endpoint.lifecycle.hasId) {
            this.assertIdAvailable(endpoint.id, endpoint);
        }

        // Insertion validation is only possible in a fully configured node. If we are not yet installed then an
        // ancestor will handle validation when we installed
        if (this.#endpoint.lifecycle.isReady) {
            this.#validateInsertion(endpoint, endpoint);
        }

        this.#children.add(endpoint);
        endpoint.owner = this.#endpoint;

        endpoint.lifecycle.changed.on((type, endpoint) => this.#bubbleChange(type, endpoint));
        endpoint.lifecycle.destroyed.once(() => {
            this.delete(endpoint);
        });

        // If the part is already fully initialized we initialize the child now
        if (this.#endpoint.lifecycle.isPartsReady) {
            if (!endpoint.construction.isErrorHandled) {
                endpoint.construction.onError(error => logger.error(`Error initializing ${this.#endpoint}:`, error));
            }

            endpoint.construction.start();
        }

        return endpoint;
    }

    delete(child: Endpoint | Agent) {
        const endpoint = this.#endpointFor(child);

        if (!this.#children.delete(this.#endpointFor(child))) {
            return false;
        }

        const childLifeCycle = endpoint.lifecycle;
        childLifeCycle.changed.off(this.#bubbleChange);

        this.#children.delete(endpoint);

        return true;
    }

    clear() {
        this.#children.clear();
    }

    get(id: string) {
        for (const child of this.#children) {
            if (child.maybeId === id) {
                return child;
            }
        }
    }

    require(id: string) {
        const part = this.get(id);

        if (part === undefined) {
            throw new PartNotFoundError(`Endpoint ${this.#endpoint} has no part ${id}`);
        }

        return part;
    }

    #get(id: string) {
        for (const child of this.#children) {
            if (child.maybeId === id) {
                return child;
            }
        }
    }

    has(identity: string | Endpoint | Agent) {
        if (typeof identity === "string") {
            for (const child of this.#children) {
                if (child.maybeId === identity) {
                    return true;
                }
            }
            return false;
        }

        return this.#children.has(this.#endpointFor(identity));
    }

    indexOf(child: Endpoint | Agent) {
        const endpoint = this.#endpointFor(child);
        let index = 0;

        for (const other of this.#children) {
            if (endpoint === other) {
                return index;
            }
            index++;
        }

        return -1;
    }

    get added() {
        return this.#children.added;
    }

    get deleted() {
        return this.#children.deleted;
    }

    get size() {
        return this.#children.size;
    }

    [Symbol.iterator]() {
        return this.#children[Symbol.iterator]();
    }

    /**
     * Confirm availability of an ID amongst the endpoint's children.
     */
    assertIdAvailable(id: string, endpoint: Endpoint) {
        const other = this.#get(id);
        if (other && other !== endpoint) {
            throw new IdentityConflictError(`${other} is already defined; endpoint IDs must be unique within parent`);
        }
    }

    /**
     * Initialize all uninitialized Parts.
     *
     * Invoked automatically by the owner after behaviors initialize.
     */
    initialize() {
        // Sanity check
        if (!this.#endpoint.lifecycle.isReady) {
            throw new ImplementationError(`Cannot initialize parts because endpoint is not ready`);
        }

        // Our only purpose is to initialize child parts
        const onPartsReady = () => this.#endpoint.lifecycle.change(EndpointLifecycle.Change.PartsReady);
        if (!this.size) {
            onPartsReady();
            return;
        }

        // Initiate initialization of all parts
        for (const endpoint of this) {
            const isInactive = endpoint.construction.status === Lifecycle.Status.Inactive;
            if (isInactive || endpoint.construction.status === Lifecycle.Status.Initializing) {
                endpoint.construction.onError(error => {
                    // We always log startup errors as an AggregateError could lead to some deeply nested, confusing
                    // error hierarchies.  For essential endpoints we then throw EndpointPartsError for the owner
                    // that lists the parts that crashed
                    logger.error(`Error initializing ${endpoint}:`, error);
                });

                if (isInactive) {
                    endpoint.construction.start();
                }
            }
        }

        // Wait for parts to initialize.  Throws if any essential parts crashed
        const onPartsCrashed = (errored: Iterable<Endpoint>) => {
            const essential = [...errored].filter(endpoint => endpoint.lifecycle.isEssential);
            if (essential.length) {
                return new EndpointPartsError(essential);
            }
        };
        let promise = Construction.all(this, onPartsCrashed);

        // Once parts are initialized we consider the endpoint "tree ready"
        if (promise) {
            promise = promise.then(onPartsReady);
        } else {
            onPartsReady();
        }

        return promise;
    }

    /**
     * Soft-reset all parts.  Invoked automatically by the owner on reset.
     */
    async reset() {
        for (const endpoint of this) {
            await endpoint.reset();
        }
    }

    /**
     * Destroy all parts.  Invoked automatically by the owner on destroy.
     */
    async close() {
        for (const endpoint of this) {
            await endpoint.close();
        }
    }

    #validateInsertion(forefather: Endpoint, endpoint: Endpoint, usedNumbers?: Set<number>) {
        if (endpoint.lifecycle.hasNumber) {
            this.#endpoint.env.get(IdentityService).assertNumberAvailable(endpoint.number, endpoint);
            if (usedNumbers?.has(endpoint.number)) {
                throw new IdentityConflictError(
                    `Cannot add endpoint ${forefather} because descendents have conflicting definitions for endpoint number ${endpoint.number}`,
                );
            }
        }

        if (!endpoint.hasParts) {
            return;
        }

        const children = endpoint.parts;
        if (!children.size) {
            return;
        }

        // We cannot rely on index to track identity of incoming endopint hierarchy because the entries are not yet
        // present in the index
        if (!usedNumbers) {
            usedNumbers = new Set();
        }
        if (endpoint.lifecycle.hasNumber) {
            usedNumbers.add(endpoint.number);
        }

        for (const child of children) {
            this.#validateInsertion(forefather, child, usedNumbers);
        }
    }

    #endpointFor(child: Endpoint.Definition | Agent) {
        if (child instanceof Agent) {
            child = child.endpoint;
        }

        if (!(child instanceof Endpoint)) {
            if ((child as any).type) {
                (child as any).owner = this.#endpoint;
            } else {
                child = {
                    type: child as EndpointType,
                    owner: this.#endpoint,
                };
            }
        }

        return Endpoint.partFor(child);
    }
}
