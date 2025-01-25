/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Messages } from "#clusters/messages";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { MessagesInterface } from "./MessagesInterface.js";

/**
 * MessagesBehavior is the base class for objects that support interaction with {@link Messages.Cluster}.
 */
export const MessagesBehavior = ClusterBehavior
    .withInterface<MessagesInterface>()
    .for(Messages.Cluster);

type MessagesBehaviorType = InstanceType<typeof MessagesBehavior>;
export interface MessagesBehavior extends MessagesBehaviorType {}
type StateType = InstanceType<typeof MessagesBehavior.State>;
export namespace MessagesBehavior { export interface State extends StateType {} }
