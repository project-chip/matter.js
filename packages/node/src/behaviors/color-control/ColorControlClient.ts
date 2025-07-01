/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ColorControl } from "#clusters/color-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ColorControlClientConstructor = ClusterBehavior.for(ColorControl.Complete);
export interface ColorControlClient extends InstanceType<typeof ColorControlClientConstructor> {}
export interface ColorControlClientConstructor extends Identity<typeof ColorControlClientConstructor> {}
export const ColorControlClient: ColorControlClientConstructor = ColorControlClientConstructor;
