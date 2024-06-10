/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { PowerTopologyBehavior } from "./PowerTopologyBehavior.js";

/**
 * This is the default server implementation of {@link PowerTopologyBehavior}.
 *
 * The Matter specification requires the PowerTopology cluster to support features we do not enable by default. You
 * should use {@link PowerTopologyServer.with} to specialize the class for the features your implementation supports.
 */
export class PowerTopologyServer extends PowerTopologyBehavior {}
