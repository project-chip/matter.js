/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Channel } from "#clusters/channel";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ChannelClientConstructor = ClusterBehavior.for(Channel.Complete);
export interface ChannelClient extends InstanceType<typeof ChannelClientConstructor> {}
export interface ChannelClientConstructor extends Identity<typeof ChannelClientConstructor> {}
export const ChannelClient: ChannelClientConstructor = ChannelClientConstructor;
