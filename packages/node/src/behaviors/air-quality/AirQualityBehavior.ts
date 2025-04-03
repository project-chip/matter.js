/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AirQuality } from "#clusters/air-quality";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * AirQualityBehavior is the base class for objects that support interaction with {@link AirQuality.Cluster}.
 */
export const AirQualityBehavior = ClusterBehavior.for(AirQuality.Cluster);

type AirQualityBehaviorType = InstanceType<typeof AirQualityBehavior>;
export interface AirQualityBehavior extends AirQualityBehaviorType {}
type StateType = InstanceType<typeof AirQualityBehavior.State>;
export namespace AirQualityBehavior { export interface State extends StateType {} }
