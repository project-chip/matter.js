/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeFormatLocalization } from "#clusters/time-format-localization";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const TimeFormatLocalizationClientConstructor = ClusterBehavior.for(TimeFormatLocalization.Complete);
export interface TimeFormatLocalizationClient extends InstanceType<typeof TimeFormatLocalizationClientConstructor> {}
export interface TimeFormatLocalizationClientConstructor extends Identity<typeof TimeFormatLocalizationClientConstructor> {}
export const TimeFormatLocalizationClient: TimeFormatLocalizationClientConstructor = TimeFormatLocalizationClientConstructor;
