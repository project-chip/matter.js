/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OzoneConcentrationMeasurement } from "#clusters/ozone-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * OzoneConcentrationMeasurementBehavior is the base class for objects that support interaction with
 * {@link OzoneConcentrationMeasurement.Cluster}.
 *
 * OzoneConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link OzoneConcentrationMeasurementBehavior.with}.
 */
export const OzoneConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(OzoneConcentrationMeasurement.Base));

type OzoneConcentrationMeasurementBehaviorType = InstanceType<typeof OzoneConcentrationMeasurementBehavior>;
export interface OzoneConcentrationMeasurementBehavior extends OzoneConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof OzoneConcentrationMeasurementBehavior.State>;
export namespace OzoneConcentrationMeasurementBehavior { export interface State extends StateType {} }
