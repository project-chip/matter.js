/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricPki } from "#clusters/joint-fabric-pki";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { JointFabricPkiInterface } from "./JointFabricPkiInterface.js";

/**
 * JointFabricPkiBehavior is the base class for objects that support interaction with {@link JointFabricPki.Cluster}.
 */
export const JointFabricPkiBehavior = ClusterBehavior
    .withInterface<JointFabricPkiInterface>()
    .for(JointFabricPki.Cluster);

type JointFabricPkiBehaviorType = InstanceType<typeof JointFabricPkiBehavior>;
export interface JointFabricPkiBehavior extends JointFabricPkiBehaviorType {}
type StateType = InstanceType<typeof JointFabricPkiBehavior.State>;
export namespace JointFabricPkiBehavior { export interface State extends StateType {} }
