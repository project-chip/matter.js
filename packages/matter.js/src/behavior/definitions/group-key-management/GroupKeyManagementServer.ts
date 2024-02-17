/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { GroupKeyManagementBehavior } from "./GroupKeyManagementBehavior.js";

const Base = GroupKeyManagementBehavior.with("CacheAndSync");

/**
 * This is the default server implementation of GroupKeyManagementBehavior.
 *
 * This implementation includes all features of GroupKeyManagement.Cluster. You should use
 * GroupKeyManagementServer.with to specialize the class for the features your implementation supports.
 */
export class GroupKeyManagementServer extends Base {
}
