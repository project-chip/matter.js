/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PulseWidthModulation } from "#clusters/pulse-width-modulation";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LevelControlInterface } from "../level-control/LevelControlInterface.js";

/**
 * PulseWidthModulationBehavior is the base class for objects that support interaction with {@link
 * PulseWidthModulation.Cluster}.
 *
 * This class does not have optional features of PulseWidthModulation.Cluster enabled. You can enable additional
 * features using PulseWidthModulationBehavior.with.
 */
export const PulseWidthModulationBehavior = ClusterBehavior
    .withInterface<LevelControlInterface>()
    .for(PulseWidthModulation.Cluster);

type PulseWidthModulationBehaviorType = InstanceType<typeof PulseWidthModulationBehavior>;
export interface PulseWidthModulationBehavior extends PulseWidthModulationBehaviorType {}
type StateType = InstanceType<typeof PulseWidthModulationBehavior.State>;
export namespace PulseWidthModulationBehavior { export interface State extends StateType {} }
