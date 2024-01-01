/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { Agent } from "../../../endpoint/Agent.js";
import { Part } from "../../../endpoint/Part.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { BasicSet, MutableSet } from "../../../util/Set.js";
import { Behavior } from "../../Behavior.js";
import { IdentityConflictError, IndexBehavior } from "../index/IndexBehavior.js";
import { StructuralChangeType } from "../lifecycle/StructuralChangeType.js";

/**
 * Manages parent-child relationship between endpoints.
 *
 * You can manipulate child parts using {@link MutableSet}
 * interface.
 *
 * Notifications of structural change bubble via
 * {@link LifecycleBehavior.events.structure$Change}.
 */
export class PartsBehavior extends Behavior implements MutableSet<Part, Part | Agent> {
    static override readonly id = "parts";

    declare readonly internal: PartsBehavior.Internal;
    declare readonly state: PartsBehavior.State;

    override initialize() {
        this.internal.structureChanged = (type: StructuralChangeType, part: Part) =>
            this.#emitChange(type, part);
        this.internal.childDestroyed = (part: Part) =>
            this.#childDestroyed(part);

        // Update state in response to the mutation state.parts
        const children = this.state.children;
        children.added.on(child => this.#adoptPart(child));
        children.deleted.on(child => this.#disownPart(child));

        // Immediately adopt any parts present in state upon initialization
        for (const part of this.state.children) {
            this.#adoptPart(part);
        }

        // Monitor online state so we can propagate to children
        this.part.lifecycle.events.online$Change.on(online => {
            for (const child of this.state.children) {
                child.lifecycle.state.online = online;
            }
        });
    }

    has(child: Part | Agent | EndpointType) {
        return this.state.children.has(partFor(child));
    }

    add(child: Part | Agent | EndpointType, options?: Part.Options) {
        this.state.children.add(partFor(child, options));
    }

    delete(child: Part | Agent | EndpointType) {
        return this.state.children.delete(partFor(child));
    }

    clear() {
        this.state.children.clear();
    }

    indexOf(child: Part | Agent | EndpointType) {
        const part = partFor(child);
        let index = 0;

        for (const other of this.state.children) {
            if (part === other) {
                return index;
            }
            index++;
        }

        return -1;
    }

    get added() {
        return this.state.children.added;
    }

    get deleted() {
        return this.state.children.deleted;
    }

    get size() {
        return this.state.children.size;
    }

    [Symbol.iterator]() {
        return this.state.children[Symbol.iterator]();
    }

    /**
     * Take ownership of a part.  Invoked when a part is added to
     * {@link state.children}.
     */
    #adoptPart(child: Part) {
        const lifecycle = this.part.lifecycle;

        child.owner = this.agent.part;

        const registerIfInitialized = () => {
            if (!lifecycle.state.initialized) {
                return;
            }

            lifecycle.events.initialized$Change.off(registerIfInitialized);
            this.state.initializing.delete(child);

            this.#partReady(child);
        };

        lifecycle.events.initialized$Change.on(registerIfInitialized);
        registerIfInitialized();

        const childLifecycle = child.lifecycle;

        if (!this.internal.structureChanged || !this.internal.childDestroyed) {
            throw new InternalError("Part adoption failed because PartsBehavior is not initialized");
        }

        childLifecycle.events.structure$Change.on(this.internal.structureChanged);
        childLifecycle.events.destroyed.on(this.internal.childDestroyed);

        this.#assertUniqueIdentities(child);

        this.#emitChange(
            StructuralChangeType.PartAdded,
            child,
        );
    }

    /**
     * Terminate ownership of a part.  Invoked when a part is removed from
     * state.parts.
     */
    #disownPart(child: Part) {
        if (child.number === undefined) {
            return;
        }

        if (!this.internal.structureChanged || !this.internal.childDestroyed) {
            throw new InternalError("Part disown failed because PartsBehavior is not initialized");
        }

        const childLifeCycle = child.lifecycle;
        childLifeCycle.events.structure$Change.off(this.internal.structureChanged);
        childLifeCycle.events.destroyed.off(this.internal.childDestroyed);

        this.internal.structureChanged?.(
            StructuralChangeType.PartDeleted,
            child
        );
    }

    /**
     * Validates and updates part status.
     */
    #partReady(child: Part) {
        if (child.number === undefined) {
            throw new InternalError("Part reports as initialized but has no assigned ID");
        }

        child.lifecycle.state.online = this.part.lifecycle.state.online;
    }

    /**
     * Remove a destroyed part.  Invoked in response to the child's "destroyed"
     * event.
     */
    #childDestroyed(part: Part) {
        this.state.children.delete(part);
    }

    #emitChange(type: StructuralChangeType, part: Part) {
        this.part.lifecycle.events.structure$Change.emit(type, part)
    }

    #assertUniqueIdentities(part: Part, usedIds?: Set<string>, usedNumbers?: Set<number>) {
        // If there is no index then we aren't yet installed.  This test
        // will occur instead when we're installed
        const index = this.part.root?.agent.get(IndexBehavior);
        if (!index) {
            return;
        }

        if (part.id) {
            index.assertIdAvailable(part.id, part);
            if (usedIds?.has(part.id)) {
                throw new IdentityConflictError(
                    `${part.description}: Cannot add part because descendents have conflicting definitions for ID ${part.id}`
                );
            }
        }

        if (part.number) {
            index.assertNumberAvailable(part.number, part);
            if (usedNumbers?.has(part.number)) {
                throw new IdentityConflictError(
                    `${part.description}: Cannot add part because descendents have conflicting definitions for endpoint number ${part.number}`
                );
            }
        }

        const children = this.state.children;
        if (children.size) {
            if (!usedIds) {
                usedIds = new Set;
            }
            if (part.id) {
                usedIds.add(part.id);
            }
            if (!usedNumbers) {
                usedNumbers = new Set;
            }
            if (part.number) {
                usedNumbers.add(part.number);
            }
            for (const child of children) {
                this.#assertUniqueIdentities(child, usedIds, usedNumbers);
            }
        }
    }
}

export namespace PartsBehavior {
    export class Internal {
        structureChanged?: (type: StructuralChangeType, part: Part) => void;
        childDestroyed?: (part: Part) => void;
    }

    export class State {
        /**
         * Child parts of the endpoint.
         */
        children = new BasicSet<Part>();

        /**
         * The behavior stores parts undergoing initialization here.
         */
        initializing = new Set<Part>();
    }
}

function partFor(child: Part | Agent | EndpointType, options?: Part.Options) {
    if (child instanceof Agent) {
        child = child.part;
    }

    if (child instanceof Part) {
        return child;
    }

    if (child.name != undefined && child.deviceType !== undefined && child.deviceRevision !== undefined) {
        return new Part(child, options);
    }

    throw new ImplementationError(`Illegal part value type`);
}
