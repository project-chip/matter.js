/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { GroupKeyManagement } from "#clusters/group-key-management";

export type GroupKeySet = GroupKeyManagement.GroupKeySet;

/** Enhanced structure of GroupKeySet to include operational data for easier operational processing. */
export type OperationalGroupKeySet = GroupKeySet & {
    operationalEpochKey0: Uint8Array;
    groupSessionId0: number | null;
    operationalEpochKey1: Uint8Array | null;
    groupSessionId1: number | null;
    operationalEpochKey2: Uint8Array | null;
    groupSessionId2: number | null;
};

export namespace OperationalGroupKeySet {
    export const asGroupSet = ({
        groupKeySetId,
        epochKey0,
        epochStartTime0,
        epochKey1,
        epochStartTime1,
        epochKey2,
        epochStartTime2,
        groupKeySecurityPolicy,
        groupKeyMulticastPolicy,
    }: OperationalGroupKeySet): GroupKeySet => {
        return {
            groupKeySetId,
            epochKey0,
            epochStartTime0,
            epochKey1,
            epochStartTime1,
            epochKey2,
            epochStartTime2,
            groupKeySecurityPolicy,
            groupKeyMulticastPolicy,
        };
    };
}
