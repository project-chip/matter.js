/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricPki } from "#clusters/joint-fabric-pki";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { JointFabricPkiInterface } from "./JointFabricPkiInterface.js";
import { Identity } from "#general";

/**
 * JointFabricPkiBehavior is the base class for objects that support interaction with {@link JointFabricPki.Cluster}.
 */
export const JointFabricPkiBehaviorConstructor = ClusterBehavior
    .withInterface<JointFabricPkiInterface>()
    .for(JointFabricPki.Cluster);

export interface JointFabricPkiBehaviorConstructor extends Identity<typeof JointFabricPkiBehaviorConstructor> {}
export const JointFabricPkiBehavior: JointFabricPkiBehaviorConstructor = JointFabricPkiBehaviorConstructor;
export interface JointFabricPkiBehavior extends InstanceType<JointFabricPkiBehaviorConstructor> {}
export namespace JointFabricPkiBehavior {
    export interface State extends InstanceType<typeof JointFabricPkiBehavior.State> {}
}
