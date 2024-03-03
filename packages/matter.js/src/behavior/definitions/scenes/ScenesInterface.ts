/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { Scenes } from "../../../cluster/definitions/ScenesCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * It is not mandatory for an extension field set to be included in the command for every cluster on that endpoint that
 * has a defined extension field set. Extension field sets may be omitted, including the case of no extension field
 * sets at all.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
 */
export type AddSceneRequest = TypeFromSchema<typeof Scenes.TlvAddSceneRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
 */
export type AddSceneResponse = TypeFromSchema<typeof Scenes.TlvAddSceneResponse>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
 */
export type ViewSceneRequest = TypeFromSchema<typeof Scenes.TlvViewSceneRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
 */
export type ViewSceneResponse = TypeFromSchema<typeof Scenes.TlvViewSceneResponse>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
 */
export type RemoveSceneRequest = TypeFromSchema<typeof Scenes.TlvRemoveSceneRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
 */
export type RemoveSceneResponse = TypeFromSchema<typeof Scenes.TlvRemoveSceneResponse>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
 */
export type RemoveAllScenesRequest = TypeFromSchema<typeof Scenes.TlvRemoveAllScenesRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
 */
export type RemoveAllScenesResponse = TypeFromSchema<typeof Scenes.TlvRemoveAllScenesResponse>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
 */
export type StoreSceneRequest = TypeFromSchema<typeof Scenes.TlvStoreSceneRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
 */
export type StoreSceneResponse = TypeFromSchema<typeof Scenes.TlvStoreSceneResponse>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
 */
export type RecallSceneRequest = TypeFromSchema<typeof Scenes.TlvRecallSceneRequest>;

/**
 * The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
 * commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain
 * group, for the endpoint that implements this cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
 */
export type GetSceneMembershipRequest = TypeFromSchema<typeof Scenes.TlvGetSceneMembershipRequest>;

/**
 * The fields of the get scene membership response command have the following semantics:
 *
 * The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
 * following values apply:
 *
 *   • 0 - No further scenes may be added.
 *
 *   • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.
 *
 *   • 0xfe - At least 1 further scene may be added (exact number is unknown).
 *
 *   • null - It is unknown if any further scenes may be added.
 *
 * The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as appropriate.
 *
 * The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.
 *
 * If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain the
 * identifiers of all the scenes in the Scene Table with the corresponding Group ID.
 *
 * Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a frame
 * to be exceeded, then the SceneList field shall contain only as many scenes as will fit.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
 */
export type GetSceneMembershipResponse = TypeFromSchema<typeof Scenes.TlvGetSceneMembershipResponse>;

/**
 * The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another
 * group/scene identifier pair.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
 */
export type CopySceneRequest = TypeFromSchema<typeof Scenes.TlvCopySceneRequest>;

/**
 * The CopySceneResponse command allows a server to respond to a CopyScene command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
 */
export type CopySceneResponse = TypeFromSchema<typeof Scenes.TlvCopySceneResponse>;

export namespace ScenesInterface {
    export interface Base {
        /**
         * It is not mandatory for an extension field set to be included in the command for every cluster on that
         * endpoint that has a defined extension field set. Extension field sets may be omitted, including the case of
         * no extension field sets at all.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
         */
        addScene(request: AddSceneRequest): MaybePromise<AddSceneResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
         */
        viewScene(request: ViewSceneRequest): MaybePromise<ViewSceneResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
         */
        removeScene(request: RemoveSceneRequest): MaybePromise<RemoveSceneResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
         */
        removeAllScenes(request: RemoveAllScenesRequest): MaybePromise<RemoveAllScenesResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
         */
        storeScene(request: StoreSceneRequest): MaybePromise<StoreSceneResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
         */
        recallScene(request: RecallSceneRequest): MaybePromise;

        /**
         * The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
         * commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a
         * certain group, for the endpoint that implements this cluster.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
         */
        getSceneMembership(request: GetSceneMembershipRequest): MaybePromise<GetSceneMembershipResponse>;

        /**
         * The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
         * AddScene command.
         *
         * This command shall have the same data fields as the AddScene command, with the following difference:
         *
         * The TransitionTime data field shall be measured in tenths of a second rather than in seconds.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
         */
        enhancedAddScene(request: AddSceneRequest): MaybePromise<AddSceneResponse>;

        /**
         * The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the
         * ViewScene command.
         *
         * This command shall have the same data fields as the ViewScene command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
         */
        enhancedViewScene(request: ViewSceneRequest): MaybePromise<ViewSceneResponse>;

        /**
         * The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
         * another group/scene identifier pair.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
         */
        copyScene(request: CopySceneRequest): MaybePromise<CopySceneResponse>;
    }
}

export type ScenesInterface = { components: [{ flags: {}, methods: ScenesInterface.Base }] };
