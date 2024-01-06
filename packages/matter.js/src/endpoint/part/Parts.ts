/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../Agent.js";
import { Part } from "../Part.js";
import { Lifecycle } from "./Lifecycle.js";
import { EndpointType } from "../type/EndpointType.js";
import { BasicSet, MutableSet, ObservableSet } from "../../util/Set.js";
import { IdentityConflictError, IdentityService } from "../../node/server/IdentityService.js";

/**
 * Manages parent-child relationship between endpoints.
 *
 * You can manipulate child parts using {@link MutableSet}
 * interface.
 *
 * Notifications of structural change bubble via
 * {@link Part.lifecycle.changed}.
 */
export class Parts implements MutableSet<Part, Part | Agent>, ObservableSet<Part> {
    #bubbleChange: (type: Lifecycle.Change, part: Part) => void;
    #children = new BasicSet<Part>;
    #part: Part;

    constructor(part: Part) {
        this.#part = part;
        const change = this.#part.lifecycle.changed;
        this.#bubbleChange = (type, part) => change.emit(type, part);

        // Update state in response to mutation of state.parts
        this.#children.added.on(child => this.#adoptPart(child));

        // Inform children they're installed once my part is fully initialized
        this.#part.lifecycle.ready.once(() => {
            for (const part of this.#children) {
                part.lifecycle.change(Lifecycle.Change.Installed);
            }
        });
    }

    add(child: Part.Definition | Agent) {
        this.#children.add(this.#partFor(child));
    }

    delete(child: Part | Agent) {
        return this.#children.delete(this.#partFor(child));
    }
 
    clear() {
        this.#children.clear();
    }

    has(child: Part | Agent) {
        return this.#children.has(this.#partFor(child));
    }

    indexOf(child: Part | Agent) {
        const part = this.#partFor(child);
        let index = 0;

        for (const other of this.#children) {
            if (part === other) {
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
     * Take ownership of a part.  Invoked when a part is added.
     */
    #adoptPart(child: Part) {
        // Insertion validation is only possible in a fully configured node.
        // If we are not yet installed then an ancestor will handle validation
        // when we are installed
        //
        // TODO - It's an edge case but we may miss the case where a part is
        // owned but the parent is not yet initialized
        if (this.#part.lifecycle.isInstalled) {
            this.#validateInsertion(child, child);
        }

        child.owner = this.#part;

        child.lifecycle.changed.on((type, part) => this.#bubbleChange(type, part));
        child.lifecycle.destroyed.once(() => this.#disownPart(child));

        if (this.#part.lifecycle.isReady) {
            child.lifecycle.change(Lifecycle.Change.Installed);
        }
    }

    /**
     * Terminate ownership of a part.  Invoked when a part is destroyed or
     * removed from state.parts.
     */
    #disownPart(child: Part) {
        const childLifeCycle = child.lifecycle;
        childLifeCycle.changed.off(this.#bubbleChange);

        this.#children.delete(child);
    }
    
    #validateInsertion(forefather: Part, part: Part, usedIds?: Set<string>, usedNumbers?: Set<number>) {
        if (part.lifecycle.hasId) {
            this.#part.serviceFor(IdentityService).assertIdAvailable(part.id, part);
            if (usedIds?.has(part.id)) {
                throw new IdentityConflictError(
                    `Cannot add part ${forefather.description} because descendents have conflicting definitions for ID ${part.id}`
                );
            }
        }

        if (part.lifecycle.hasNumber) {
            this.#part.serviceFor(IdentityService).assertNumberAvailable(part.number, part);
            if (usedNumbers?.has(part.number)) {
                throw new IdentityConflictError(
                    `Cannot add part ${forefather.description} because descendents have conflicting definitions for endpoint number ${part.number}`
                );
            }
        }

        if (!part.hasParts) {
            return;
        }

        const children = part.parts;
        if (!children.size) {
            return;
        }

        // We cannot rely on index to track identity of incoming part hierarchy
        // because the entries are not yet present in the index
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
            this.#validateInsertion(forefather, child, usedIds, usedNumbers);
        }
    }

    #partFor(child: Part.Definition | Agent) {
        if (child instanceof Agent) {
            child = child.part;
        }

        if (!(child instanceof Part)) {
            if ((child as any).type) {
                (child as any).owner = this.#part;
            } else {
                child = {
                    type: child as EndpointType,
                    owner: this.#part,
                }
            }
        }

        return Part.partFor(child);
    }
}
