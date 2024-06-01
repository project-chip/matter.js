/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OzoneConcentrationMeasurement } from "../../../cluster/definitions/OzoneConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * OzoneConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * OzoneConcentrationMeasurement.Cluster}.
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
