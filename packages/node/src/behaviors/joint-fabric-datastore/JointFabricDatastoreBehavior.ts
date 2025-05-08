/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricDatastore } from "#clusters/joint-fabric-datastore";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { JointFabricDatastoreInterface } from "./JointFabricDatastoreInterface.js";

/**
 * JointFabricDatastoreBehavior is the base class for objects that support interaction with
 * {@link JointFabricDatastore.Cluster}.
 */
export const JointFabricDatastoreBehavior = ClusterBehavior
    .withInterface<JointFabricDatastoreInterface>()
    .for(JointFabricDatastore.Cluster);

type JointFabricDatastoreBehaviorType = InstanceType<typeof JointFabricDatastoreBehavior>;
export interface JointFabricDatastoreBehavior extends JointFabricDatastoreBehaviorType {}
type StateType = InstanceType<typeof JointFabricDatastoreBehavior.State>;
export namespace JointFabricDatastoreBehavior { export interface State extends StateType {} }
