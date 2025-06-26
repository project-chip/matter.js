/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherControls } from "#clusters/laundry-washer-controls";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const LaundryWasherControlsClientConstructor = ClusterBehavior.for(LaundryWasherControls.Complete);
export interface LaundryWasherControlsClient extends InstanceType<typeof LaundryWasherControlsClientConstructor> {}
export interface LaundryWasherControlsClientConstructor extends Identity<typeof LaundryWasherControlsClientConstructor> {}
export const LaundryWasherControlsClient: LaundryWasherControlsClientConstructor = LaundryWasherControlsClientConstructor;
