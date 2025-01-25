/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedLabel } from "#clusters/fixed-label";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * FixedLabelBehavior is the base class for objects that support interaction with {@link FixedLabel.Cluster}.
 */
export const FixedLabelBehavior = ClusterBehavior.for(FixedLabel.Cluster);

type FixedLabelBehaviorType = InstanceType<typeof FixedLabelBehavior>;
export interface FixedLabelBehavior extends FixedLabelBehaviorType {}
type StateType = InstanceType<typeof FixedLabelBehavior.State>;
export namespace FixedLabelBehavior { export interface State extends StateType {} }
