/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
}
