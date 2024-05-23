/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TargetNavigator } from "../../../cluster/definitions/TargetNavigatorCluster.js";

export namespace TargetNavigatorInterface {
    export interface Base {
        /**
         * Upon receipt, this shall navigation the UX to the target identified.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 6.11.6.1
         */
        navigateTarget(request: TargetNavigator.NavigateTargetRequest): MaybePromise<TargetNavigator.NavigateTargetResponse>;
    }
}

export type TargetNavigatorInterface = { components: [{ flags: {}, methods: TargetNavigatorInterface.Base }] };
