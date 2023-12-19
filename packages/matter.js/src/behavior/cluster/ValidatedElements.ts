/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterType } from "../../cluster/ClusterType.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { Behavior } from "../Behavior.js";
import { ClusterBehavior } from "./ClusterBehavior.js";

const logger = Logger.get("ElementSupport");

/**
 * Analyzes a ClusterBehavior implementation to ensure it conforms to the
 * Matter specification.
 *
 * As this API is accessible via vanilla JavaScript, validation includes tests
 * for errors that TypeScript otherwise prevents.
 *
 * Records elements supported and a list of errors if validation fails.
 */
export class ValidatedElements {
    /**
     * Supported attributes.
     */
    attributes = new Set<string>();

    /**
     * Supported commands.
     */
    commands = new Set<string>();

    /**
     * Supported events.
     */
    events = new Set<string>();

    /**
     * A list of implementation errors, if any.
     */
    errors?: { element: string; message: string }[];

    #name: string;

    constructor(behavior: ClusterBehavior.Type) {
        this.#name = behavior.id;

        const cluster = behavior.cluster;
        if (cluster === undefined) {
            this.error("cluster", "Property missing");
            return;
        }
        if (typeof cluster !== "object") {
            this.error("cluster", "Property is not an object");
            return;
        }

        this.validateAttributes(behavior.cluster.attributes, new behavior.State());
        this.validateCommands(behavior.cluster?.commands, behavior.prototype);
        this.validateEvents(behavior.cluster?.events, new behavior.Events());
    }

    /**
     * If there are errors, log and throw an exception.
     */
    report() {
        if (!this.errors) {
            return;
        }

        for (const error of this.errors) {
            logger.error("Cluster implementation error", Logger.dict(error));
        }

        throw new ImplementationError(
            `There ${
                this.errors.length > 1 ? `are ${this.errors.length} errors` : `is 1 error`
            } in a ClusterBehavior implementation for property ${this.#name} (see log for details)`,
        );
    }

    private validateAttributes(
        attributes?: ClusterType.ElementSet<ClusterType.Attribute>,
        defaults?: Record<string, any>,
    ) {
        if (!attributes) {
            this.error("cluster.attributes", "Property missing");
            return;
        }
        if (!defaults) {
            this.error("State", "Implementation missing");
            return;
        }

        for (const name in attributes) {
            const attr = attributes[name];
            if (!attr) {
                this.error(`cluster.attributes.${name}`, "Undefined element");
                continue;
            }

            if (!(name in defaults)) {
                if (!attr.optional) {
                    this.error(`State.${name}`, "Mandatory element unsupported");
                }
                continue;
            }

            this.attributes.add(name);

            // TODO - should we enforce presence of events.<attr>$Change?

            // TODO - validate "optional but not nullable" if attributes get
            // proper metadata (or go to model for this)
        }
    }

    private validateCommands(
        commands?: ClusterType.ElementSet<ClusterType.Command>,
        implementations?: Record<string, any>,
    ) {
        if (!commands) {
            this.error("cluster.commands", "Property missing");
            return;
        }
        if (!implementations) {
            this.error("<command>", "Implementations missing");
            return;
        }

        for (const name in commands) {
            const command = commands[name];
            if (!command) {
                this.error(`cluster.commands.${name}`, "Undefined element");
                continue;
            }

            if (!(name in implementations) || implementations[name] === undefined) {
                if (!command.optional) {
                    this.error(name, `Implementation missing`);
                }
                continue;
            }

            if (typeof implementations[name] !== "function") {
                this.error(name, `Implementation is not a function`);
                continue;
            }

            if (implementations[name] === Behavior.unimplemented) {
                this.error(name, `Throws unimplemented exception`);
                continue;
            }

            this.commands.add(name);
        }
    }

    private validateEvents(events?: ClusterType.ElementSet<ClusterType.Event>, emitters?: Record<string, any>) {
        if (!events) {
            this.error("cluster.events", "Property missing");
            return;
        }
        if (!emitters) {
            this.error("Events", "Implementation missing");
            return;
        }

        for (const name in events) {
            const event = events[name];
            if (!event) {
                this.error(`cluster.events.${name}`, "Undefined element");
                continue;
            }

            if (!(name in emitters)) {
                if (!event.optional) {
                    this.error(`cluster.events.${name}`, "Implementation missing");
                }
                continue;
            }

            this.events.add(name);
        }
    }

    private error(element: string, message: string) {
        if (!this.errors) {
            this.errors = [];
        }
        this.errors?.push({ element: `${this.#name}.${element}`, message });
    }
}
