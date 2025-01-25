/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccountLogin } from "#clusters/account-login";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { AccountLoginInterface } from "./AccountLoginInterface.js";

/**
 * AccountLoginBehavior is the base class for objects that support interaction with {@link AccountLogin.Cluster}.
 */
export const AccountLoginBehavior = ClusterBehavior
    .withInterface<AccountLoginInterface>()
    .for(AccountLogin.Cluster);

type AccountLoginBehaviorType = InstanceType<typeof AccountLoginBehavior>;
export interface AccountLoginBehavior extends AccountLoginBehaviorType {}
type StateType = InstanceType<typeof AccountLoginBehavior.State>;
export namespace AccountLoginBehavior { export interface State extends StateType {} }
