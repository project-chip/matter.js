/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ApplicationBasic } from "#clusters/application-basic";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * ApplicationBasicBehavior is the base class for objects that support interaction with
 * {@link ApplicationBasic.Cluster}.
 */
export const ApplicationBasicBehavior = ClusterBehavior.for(ApplicationBasic.Cluster);

type ApplicationBasicBehaviorType = InstanceType<typeof ApplicationBasicBehavior>;
export interface ApplicationBasicBehavior extends ApplicationBasicBehaviorType {}
type StateType = InstanceType<typeof ApplicationBasicBehavior.State>;
export namespace ApplicationBasicBehavior { export interface State extends StateType {} }
