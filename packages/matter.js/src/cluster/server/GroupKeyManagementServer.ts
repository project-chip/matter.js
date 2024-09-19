/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GroupKeyManagement } from "#clusters";
import { ImplementationError } from "#general";
import { assertSecureSession } from "#protocol";
import { StatusCode, StatusResponseError } from "#types";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

export const GroupKeyManagementClusterHandler: () => ClusterServerHandlers<typeof GroupKeyManagement.Cluster> = () => ({
    initializeClusterServer: ({ attributes: { maxGroupKeysPerFabric, maxGroupsPerFabric } }) => {
        if (maxGroupKeysPerFabric.getLocal() !== 1) {
            throw new ImplementationError("maxGroupKeysPerFabric must be 1 for now.");
        }
        if (maxGroupsPerFabric.getLocal() !== 0) {
            throw new ImplementationError("maxGroupsPerFabric must be 0 for now.");
        }
    },

    groupTableAttributeGetter: () => {
        return []; // List is always empty because only IPK exists
    },

    keySetWrite: async () => {
        throw new StatusResponseError(
            "We do not support and additional groups then the IPK",
            StatusCode.ResourceExhausted,
        );
    },

    keySetRead: async ({ request: { groupKeySetId }, session }) => {
        assertSecureSession(session);
        const fabric = session.associatedFabric;

        const groupKeySet = fabric.getGroupKeySet(groupKeySetId);
        if (groupKeySet === undefined) {
            throw new StatusResponseError(`GroupKeySet ${groupKeySetId} not found`, StatusCode.NotFound);
        }

        return {
            groupKeySet: {
                ...groupKeySet,
                epochKey0: null,
                epochKey1: null,
                epochKey2: null,
            },
        };
    },

    keySetRemove: async ({ request: { groupKeySetId } }) => {
        if (groupKeySetId === 0) {
            throw new StatusResponseError(`GroupKeySet ${groupKeySetId} cannot be removed`, StatusCode.InvalidCommand);
        }

        // We only have key 0, so we can't remove it
        throw new StatusResponseError(`GroupKeySet ${groupKeySetId} not found`, StatusCode.NotFound);
    },

    keySetReadAllIndices: async ({ session }) => {
        assertSecureSession(session);
        const fabric = session.associatedFabric;

        const groupKeySetIDs = fabric.getAllGroupKeySets().map(({ groupKeySetId }) => groupKeySetId);

        return {
            groupKeySetIDs,
        };
    },
});
