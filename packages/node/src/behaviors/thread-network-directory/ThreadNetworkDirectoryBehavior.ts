/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDirectory } from "#clusters/thread-network-directory";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ThreadNetworkDirectoryInterface } from "./ThreadNetworkDirectoryInterface.js";

/**
 * ThreadNetworkDirectoryBehavior is the base class for objects that support interaction with
 * {@link ThreadNetworkDirectory.Cluster}.
 */
export const ThreadNetworkDirectoryBehavior = ClusterBehavior
    .withInterface<ThreadNetworkDirectoryInterface>()
    .for(ThreadNetworkDirectory.Cluster);

type ThreadNetworkDirectoryBehaviorType = InstanceType<typeof ThreadNetworkDirectoryBehavior>;
export interface ThreadNetworkDirectoryBehavior extends ThreadNetworkDirectoryBehaviorType {}
type StateType = InstanceType<typeof ThreadNetworkDirectoryBehavior.State>;
export namespace ThreadNetworkDirectoryBehavior { export interface State extends StateType {} }
