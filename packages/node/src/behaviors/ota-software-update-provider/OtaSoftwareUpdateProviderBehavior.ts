/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateProvider } from "#clusters/ota-software-update-provider";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OtaSoftwareUpdateProviderInterface } from "./OtaSoftwareUpdateProviderInterface.js";

/**
 * OtaSoftwareUpdateProviderBehavior is the base class for objects that support interaction with
 * {@link OtaSoftwareUpdateProvider.Cluster}.
 */
export const OtaSoftwareUpdateProviderBehavior = ClusterBehavior
    .withInterface<OtaSoftwareUpdateProviderInterface>()
    .for(OtaSoftwareUpdateProvider.Cluster);

type OtaSoftwareUpdateProviderBehaviorType = InstanceType<typeof OtaSoftwareUpdateProviderBehavior>;
export interface OtaSoftwareUpdateProviderBehavior extends OtaSoftwareUpdateProviderBehaviorType {}
type StateType = InstanceType<typeof OtaSoftwareUpdateProviderBehavior.State>;
export namespace OtaSoftwareUpdateProviderBehavior { export interface State extends StateType {} }
