/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ValidProxies } from "#clusters/valid-proxies";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ValidProxiesInterface } from "./ValidProxiesInterface.js";
import { Identity } from "#general";

/**
 * ValidProxiesBehavior is the base class for objects that support interaction with {@link ValidProxies.Cluster}.
 */
export const ValidProxiesBehaviorConstructor = ClusterBehavior
    .withInterface<ValidProxiesInterface>()
    .for(ValidProxies.Cluster);

export interface ValidProxiesBehaviorConstructor extends Identity<typeof ValidProxiesBehaviorConstructor> {}
export const ValidProxiesBehavior: ValidProxiesBehaviorConstructor = ValidProxiesBehaviorConstructor;
export interface ValidProxiesBehavior extends InstanceType<ValidProxiesBehaviorConstructor> {}
export namespace ValidProxiesBehavior { export interface State extends InstanceType<typeof ValidProxiesBehavior.State> {} }
