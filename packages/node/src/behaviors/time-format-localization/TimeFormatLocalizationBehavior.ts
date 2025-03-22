/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeFormatLocalization } from "#clusters/time-format-localization";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * TimeFormatLocalizationBehavior is the base class for objects that support interaction with
 * {@link TimeFormatLocalization.Cluster}.
 *
 * This class does not have optional features of TimeFormatLocalization.Cluster enabled. You can enable additional
 * features using TimeFormatLocalizationBehavior.with.
 */
export const TimeFormatLocalizationBehavior = ClusterBehavior.for(TimeFormatLocalization.Cluster);

type TimeFormatLocalizationBehaviorType = InstanceType<typeof TimeFormatLocalizationBehavior>;
export interface TimeFormatLocalizationBehavior extends TimeFormatLocalizationBehaviorType {}
type StateType = InstanceType<typeof TimeFormatLocalizationBehavior.State>;
export namespace TimeFormatLocalizationBehavior { export interface State extends StateType {} }
