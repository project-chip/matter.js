/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ChannelBehavior } from "./ChannelBehavior.js";
import { Channel } from "../../../cluster/definitions/ChannelCluster.js";

const Base = ChannelBehavior.for(Channel.Complete);

/**
 * This is the default server implementation of ChannelBehavior.
 *
 * This implementation includes all features of Channel.Cluster. You should use ChannelServer.with to specialize the
 * class for the features your implementation supports.
 */
export class ChannelServer extends Base {
}
