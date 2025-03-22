/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OperationalCredentials } from "#clusters/operational-credentials";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OperationalCredentialsInterface } from "./OperationalCredentialsInterface.js";

/**
 * OperationalCredentialsBehavior is the base class for objects that support interaction with
 * {@link OperationalCredentials.Cluster}.
 */
export const OperationalCredentialsBehavior = ClusterBehavior
    .withInterface<OperationalCredentialsInterface>()
    .for(OperationalCredentials.Cluster);

type OperationalCredentialsBehaviorType = InstanceType<typeof OperationalCredentialsBehavior>;
export interface OperationalCredentialsBehavior extends OperationalCredentialsBehaviorType {}
type StateType = InstanceType<typeof OperationalCredentialsBehavior.State>;
export namespace OperationalCredentialsBehavior { export interface State extends StateType {} }
