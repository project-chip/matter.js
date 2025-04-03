/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UnitLocalization } from "#clusters/unit-localization";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * UnitLocalizationBehavior is the base class for objects that support interaction with
 * {@link UnitLocalization.Cluster}.
 *
 * This class does not have optional features of UnitLocalization.Cluster enabled. You can enable additional features
 * using UnitLocalizationBehavior.with.
 */
export const UnitLocalizationBehavior = ClusterBehavior.for(UnitLocalization.Cluster);

type UnitLocalizationBehaviorType = InstanceType<typeof UnitLocalizationBehavior>;
export interface UnitLocalizationBehavior extends UnitLocalizationBehaviorType {}
type StateType = InstanceType<typeof UnitLocalizationBehavior.State>;
export namespace UnitLocalizationBehavior { export interface State extends StateType {} }
