/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccessControl } from "#clusters/access-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const AccessControlClientConstructor = ClusterBehavior.for(AccessControl.Complete);
export interface AccessControlClient extends InstanceType<typeof AccessControlClientConstructor> {}
export interface AccessControlClientConstructor extends Identity<typeof AccessControlClientConstructor> {}
export const AccessControlClient: AccessControlClientConstructor = AccessControlClientConstructor;
