/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IdentityConflictError, IdentityService } from "../../node/server/IdentityService.js";
import { BasicSet, MutableSet, ObservableSet } from "../../util/Set.js";
import { Agent } from "../Agent.js";
import { Part } from "../Part.js";
import { EndpointType } from "../type/EndpointType.js";
import { PartLifecycle } from "./PartLifecycle.js";

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
    #bubbleChange: (type: PartLifecycle.Change, part: Part) => void;
    #children = new BasicSet<Part>();
    #part: Part;

    constructor(part: Part) {
        this.#part = part;
        const lifecycle = this.#part.lifecycle;
        this.#bubbleChange = (type, part) => lifecycle.bubble(type, part);

        // Update state in response to mutation of state.parts
        this.#children.added.on(child => this.#adoptPart(child));

        // Inform children they're installed once my part is fully initialized
        this.#part.lifecycle.ready.on(() => {
            for (const part of this.#children) {
                if (!part.lifecycle.isInstalled) {
                    part.lifecycle.change(PartLifecycle.Change.Installed);
                }
            }
        });
    }

    get(id: string) {
        for (const part of this) {
            if (part.lifecycle.hasId && part.id === id) {
                return part;
            }
        }
    }

    add(child: Part.Definition | Agent) {
        const part = this.#partFor(child);
        this.#children.add(part);
        return part;
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

    get areReady() {
        return [...this.#children].findIndex(child => !child.lifecycle.isTreeReady) === -1;
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
     * Confirm availability of an ID amongst the part's children.
     */
    assertIdAvailable(id: string, part: Part) {
        const other = this.get(id);
        if (other && other !== part) {
            throw new IdentityConflictError(`${other} is already defined; part IDs must be unique within parent`);
        }
    }

    async [Symbol.asyncDispose]() {
        for (const part of this) {
            await part[Symbol.asyncDispose]();
        }
    }

    /**
     * Take ownership of a part.  Invoked when a part is added.
     */
    #adoptPart(child: Part) {
        if (child.lifecycle.hasId) {
            this.assertIdAvailable(child.id, child);
        }

        // Insertion validation is only possible in a fully configured node.
        // If we are not yet installed then an ancestor will handle validation
        // when we are installed
        if (this.#part.lifecycle.isReady) {
            this.#validateInsertion(child, child);
        }

        child.owner = this.#part;

        child.lifecycle.changed.on((type, part) => this.#bubbleChange(type, part));
        child.lifecycle.destroyed.once(() => this.#disownPart(child));

        if (this.#part.lifecycle.isReady) {
            child.lifecycle.change(PartLifecycle.Change.Installed);
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

    #validateInsertion(forefather: Part, part: Part, usedNumbers?: Set<number>) {
        if (part.lifecycle.hasNumber) {
            this.#part.env.get(IdentityService).assertNumberAvailable(part.number, part);
            if (usedNumbers?.has(part.number)) {
                throw new IdentityConflictError(
                    `Cannot add part ${forefather} because descendents have conflicting definitions for endpoint number ${part.number}`,
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
        if (!usedNumbers) {
            usedNumbers = new Set();
        }
        if (part.number) {
            usedNumbers.add(part.number);
        }

        for (const child of children) {
            this.#validateInsertion(forefather, child, usedNumbers);
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
                };
            }
        }

        return Part.partFor(child);
    }
}
