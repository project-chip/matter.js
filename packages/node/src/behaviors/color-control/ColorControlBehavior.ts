/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ColorControl } from "#clusters/color-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ColorControlInterface } from "./ColorControlInterface.js";

/**
 * ColorControlBehavior is the base class for objects that support interaction with {@link ColorControl.Cluster}.
 *
 * This class does not have optional features of ColorControl.Cluster enabled. You can enable additional features using
 * ColorControlBehavior.with.
 */
export const ColorControlBehavior = ClusterBehavior
    .withInterface<ColorControlInterface>()
    .for(ColorControl.Cluster);

type ColorControlBehaviorType = InstanceType<typeof ColorControlBehavior>;
export interface ColorControlBehavior extends ColorControlBehaviorType {}
type StateType = InstanceType<typeof ColorControlBehavior.State>;
export namespace ColorControlBehavior { export interface State extends StateType {} }
