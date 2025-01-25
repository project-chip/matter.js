/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AudioOutput } from "#clusters/audio-output";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { AudioOutputInterface } from "./AudioOutputInterface.js";

/**
 * AudioOutputBehavior is the base class for objects that support interaction with {@link AudioOutput.Cluster}.
 *
 * This class does not have optional features of AudioOutput.Cluster enabled. You can enable additional features using
 * AudioOutputBehavior.with.
 */
export const AudioOutputBehavior = ClusterBehavior
    .withInterface<AudioOutputInterface>()
    .for(AudioOutput.Cluster);

type AudioOutputBehaviorType = InstanceType<typeof AudioOutputBehavior>;
export interface AudioOutputBehavior extends AudioOutputBehaviorType {}
type StateType = InstanceType<typeof AudioOutputBehavior.State>;
export namespace AudioOutputBehavior { export interface State extends StateType {} }
