/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedLabel } from "../../../cluster/definitions/FixedLabelCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * FixedLabelBehavior is the base class for objects that support interaction with {@link FixedLabel.Cluster}.
 */
export const FixedLabelBehavior = ClusterBehavior.for(FixedLabel.Cluster);

type FixedLabelBehaviorType = InstanceType<typeof FixedLabelBehavior>;
export interface FixedLabelBehavior extends FixedLabelBehaviorType {}
type StateType = InstanceType<typeof FixedLabelBehavior.State>;
export namespace FixedLabelBehavior { export interface State extends StateType {} }
