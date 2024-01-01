/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * These are the types of structural changes LifecycleBehavior notifies for.
 */
export enum StructuralChangeType {
    PartAdded = "added",
    PartDeleted = "removed",
    ServersChanged = "servers-changed",
    ClientsChanged = "clients-changed",
    IdAssigned = "id-assigned",
    NumberAssigned = "number-assigned",
}
