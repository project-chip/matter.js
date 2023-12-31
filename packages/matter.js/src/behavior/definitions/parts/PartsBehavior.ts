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
import { LifecycleBehavior } from "../lifecycle/LifecycleBehavior.js";

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

    declare readonly state: PartsBehavior.State;

    override initialize() {
        const children = this.state.children;
        const state = this.state;
        const agent = this.agent;
        const lifecycle = agent.get(LifecycleBehavior);

        // Update state in response to the mutation state.parts
        children.added.on(child => adoptPart(child));
        children.deleted.on(child => disownPart(child));

        // Immediately adopt any parts present in state upon initialization
        for (const part of this.state.children) {
            adoptPart(part);
        }

        // Monitor online state of owner so we can propagate to children
        lifecycle.events.online$Change.on(online => {
            for (const part of state.children) {
                part.agent.get(LifecycleBehavior).state.online = online;
            }
        });

        /**
         * Broadcast the lifecycle "structure changed" event.  Invoked in
         * response to structure changes in children.  This is how the event
         * bubbles.
         */
        function structureChangeEmitter(part: Part) {
            agent.get(LifecycleBehavior).events.structure$Change.emit(part);
        }

        /**
         * Remove a destroyed part.  Invoked in response to the child's
         * "destroyed" event.
         */
        function childDestroyed(part: Part) {
            if (children.has(part)) {
                children.delete(part);
            }
        }

        /**
         * Validates and updates part status.
         */
        function partReady(child: Part) {
            if (child.number === undefined) {
                throw new InternalError("Part reports as initialized but has no assigned ID");
            }

            child.agent.get(LifecycleBehavior).state.online = lifecycle.state.online;
        }

        /**
         * Take ownership of a part.  Invoked when a part is added to
         * state.parts.
         */
        function adoptPart(child: Part) {
            child.owner = agent.part;

            const registerIfInitialized = () => {
                if (!lifecycle.state.initialized) {
                    return;
                }

                lifecycle.events.initialized$Change.off(registerIfInitialized);
                state.initializing.delete(child);

                partReady(child);
            };

            lifecycle.events.initialized$Change.on(registerIfInitialized);
            registerIfInitialized();

            const childLifecycle = child.agent.get(LifecycleBehavior);
            childLifecycle.events.structure$Change.on(structureChangeEmitter);
            childLifecycle.events.destroyed.on(childDestroyed);

            structureChangeEmitter(agent.part);
        }

        /**
         * Terminate ownership of a part.  Invoked when a part is removed from
         * state.parts.
         */
        function disownPart(child: Part) {
            if (child.number === undefined) {
                return;
            }

            const childLifeCycle = child.agent.get(LifecycleBehavior);
            childLifeCycle.events.structure$Change.off(structureChangeEmitter);
            childLifeCycle.events.destroyed.off(childDestroyed);

            structureChangeEmitter(agent.part);
        }
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
}

export namespace PartsBehavior {
    export class State extends Behavior.State {
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
