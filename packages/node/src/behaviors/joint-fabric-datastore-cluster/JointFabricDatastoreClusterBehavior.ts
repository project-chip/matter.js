/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricDatastoreCluster } from "#clusters/joint-fabric-datastore-cluster";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { JointFabricDatastoreClusterInterface } from "./JointFabricDatastoreClusterInterface.js";

/**
 * JointFabricDatastoreClusterBehavior is the base class for objects that support interaction with
 * {@link JointFabricDatastoreCluster.Cluster}.
 */
export const JointFabricDatastoreClusterBehavior = ClusterBehavior
    .withInterface<JointFabricDatastoreClusterInterface>()
    .for(JointFabricDatastoreCluster.Cluster);

type JointFabricDatastoreClusterBehaviorType = InstanceType<typeof JointFabricDatastoreClusterBehavior>;
export interface JointFabricDatastoreClusterBehavior extends JointFabricDatastoreClusterBehaviorType {}
type StateType = InstanceType<typeof JointFabricDatastoreClusterBehavior.State>;
export namespace JointFabricDatastoreClusterBehavior { export interface State extends StateType {} }
