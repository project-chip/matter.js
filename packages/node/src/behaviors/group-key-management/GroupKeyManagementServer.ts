/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GroupKeyManagement } from "#clusters/group-key-management";
import { ImplementationError, MaybePromise } from "#general";
import { StatusCode, StatusResponseError } from "#types";
import { GroupKeyManagementBehavior } from "./GroupKeyManagementBehavior.js";

/**
 * This is the default server implementation of {@link GroupKeyManagementBehavior}.
 */
export class GroupKeyManagementServer extends GroupKeyManagementBehavior {
    override initialize(): MaybePromise {
        if (this.state.maxGroupKeysPerFabric !== 1) {
            throw new ImplementationError("maxGroupKeysPerFabric must be 1 for now.");
        }
        if (this.state.maxGroupsPerFabric !== 0) {
            throw new ImplementationError("maxGroupsPerFabric must be 0 for now.");
        }
        this.state.groupTable = [];
    }

    override keySetWrite(): MaybePromise {
        throw new StatusResponseError(
            "We do not support additional groups beyond the IPK",
            StatusCode.ResourceExhausted,
        );
    }

    override keySetRead({
        groupKeySetId,
    }: GroupKeyManagement.KeySetReadRequest): MaybePromise<GroupKeyManagement.KeySetReadResponse> {
        if (this.context.session === undefined) {
            throw new ImplementationError("Session must be defined");
        }
        const fabric = this.context.session.associatedFabric;

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
    }

    override keySetRemove({ groupKeySetId }: GroupKeyManagement.KeySetRemoveRequest): MaybePromise {
        if (groupKeySetId === 0) {
            throw new StatusResponseError(`GroupKeySet ${groupKeySetId} cannot be removed`, StatusCode.InvalidCommand);
        }

        // We only have key 0, so we can't remove it
        throw new StatusResponseError(`GroupKeySet ${groupKeySetId} not found`, StatusCode.NotFound);
    }

    override keySetReadAllIndices(): MaybePromise<GroupKeyManagement.KeySetReadAllIndicesResponse> {
        if (this.context.session === undefined) {
            throw new ImplementationError("Session must be defined");
        }
        const fabric = this.context.session.associatedFabric;

        const groupKeySetIDs = fabric.getAllGroupKeySets().map(({ groupKeySetId }) => groupKeySetId);

        return {
            groupKeySetIDs,
        };
    }
}
