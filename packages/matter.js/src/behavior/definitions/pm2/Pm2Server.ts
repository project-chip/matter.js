/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { Pm2Behavior } from "./Pm2Behavior.js";

/**
 * This is the default server implementation of {@link Pm2Behavior}.
 *
 * The Matter specification requires the Pm2 cluster to support features we do not enable by default. You should use
 * {@link Pm2Server.with} to specialize the class for the features your implementation supports.
 */
export class Pm2Server extends Pm2Behavior {}
