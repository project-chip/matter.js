/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EcosystemInformation } from "#clusters/ecosystem-information";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * EcosystemInformationBehavior is the base class for objects that support interaction with
 * {@link EcosystemInformation.Cluster}.
 */
export const EcosystemInformationBehavior = ClusterBehavior.for(EcosystemInformation.Cluster);

type EcosystemInformationBehaviorType = InstanceType<typeof EcosystemInformationBehavior>;
export interface EcosystemInformationBehavior extends EcosystemInformationBehaviorType {}
type StateType = InstanceType<typeof EcosystemInformationBehavior.State>;
export namespace EcosystemInformationBehavior { export interface State extends StateType {} }
