/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { ImplementationError } from "./MatterError.js";

/**
 * Standard statuses in an object's lifecycle.
 */
export enum LifecycleStatus {
    Unknown = "unknown",
    Inactive = "inactive",
    Initializing = "initializing",
    Active = "active",
    Incapacitated = "incapacitated",
    Destroyed = "destroyed",
}

export namespace LifecycleStatus {
    /**
     * Lifecycle status for multiple items.
     */
    export type Map<T extends keyof any> = Record<T, LifecycleStatus>;

    /**
     * Assert subject is active.
     */
    export function assertActive(status: LifecycleStatus, description?: string) {
        if (!description) {
            description = "dependency";
        }

        switch (status) {
            case LifecycleStatus.Active:
                return;

            case LifecycleStatus.Inactive:
                throw new UninitializedDependencyError(description, "is not initialized");

            case LifecycleStatus.Initializing:
                throw new UninitializedDependencyError(description, "is still initializing");

            case LifecycleStatus.Incapacitated:
                throw new IncapacitatedDependencyError(description, "initialization failed");

            case LifecycleStatus.Destroyed:
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
        });
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
