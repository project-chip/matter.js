/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { ImplementationError } from "./MatterError.js";

export namespace Lifecycle {
    /**
     * Standard statuses in an object's lifecycle.
     */
    export enum Status {
        Unknown = "unknown",
        Inactive = "inactive",
        Initializing = "initializing",
        Active = "active",
        Incapacitated = "incapacitated",
        Destroying = "destroying",
        Destroyed = "destroyed",
    }

    /**
     * Lifecycle status for multiple items.
     */
    export type Map<T extends keyof any> = Record<T, Status>;

    /**
     * Assert subject is active.
     */
    export function assertActive(status: Status, description?: string) {
        if (!description) {
            description = "dependency";
        }

        switch (status) {
            case Status.Active:
                return;

            case Status.Inactive:
                throw new UninitializedDependencyError(description, "is not initialized");

            case Status.Initializing:
                throw new UninitializedDependencyError(description, "is still initializing");

            case Status.Incapacitated:
                throw new IncapacitatedDependencyError(description, "initialization failed");

            case Status.Destroyed:
                throw new DestroyedDependencyError(description, "was destroyed");
        }

        throw new DependencyLifecycleError(description, `status "${status}" is unknown`);
    }
}

/**
 * Base class for errors related to the lifecycle of a dependency.
 */
export class DependencyLifecycleError extends ImplementationError {
    constructor(what: string, why: string) {
        super(`${what} ${why}`);
        this.message = Diagnostic.upgrade(this.message, () => {
            Diagnostic.squash(Diagnostic.strong(what), " ", why);
        }) as string;
    }
}

/**
 * Thrown when a dependency is in an unsupported state.
 */
export class UnsupportedDependencyStatusError extends DependencyLifecycleError {}

/**
 * Thrown for actions that cannot be performed until further initialization occurs.
 */
export class UninitializedDependencyError extends DependencyLifecycleError {}

/**
 * Thrown for actions that cannot be performed because dependency is incapacitated.
 */
export class IncapacitatedDependencyError extends DependencyLifecycleError {}

/**
 * Thrown for actions that cannot be performed because a dependency has been destroyed.
 */
export class DestroyedDependencyError extends DependencyLifecycleError {}

/**
 * Thrown for actions that cannot be performed because a dependency is not supported.
 */
export class UnsupportedDependencyError extends DependencyLifecycleError {}
