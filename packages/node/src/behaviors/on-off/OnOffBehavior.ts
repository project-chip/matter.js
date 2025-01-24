/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOff } from "#clusters/on-off";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OnOffInterface } from "./OnOffInterface.js";

/**
 * OnOffBehavior is the base class for objects that support interaction with {@link OnOff.Cluster}.
 *
 * This class does not have optional features of OnOff.Cluster enabled. You can enable additional features using
 * OnOffBehavior.with.
 */
export const OnOffBehavior = ClusterBehavior
    .withInterface<OnOffInterface>()
    .for(OnOff.Cluster);

type OnOffBehaviorType = InstanceType<typeof OnOffBehavior>;
export interface OnOffBehavior extends OnOffBehaviorType {}
type StateType = InstanceType<typeof OnOffBehavior.State>;
export namespace OnOffBehavior { export interface State extends StateType {} }
