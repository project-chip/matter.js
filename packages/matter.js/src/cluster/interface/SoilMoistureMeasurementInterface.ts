/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SoilMoistureMeasurementCluster, ClusterInterface } from "../index.js";

export interface SoilMoistureMeasurementInterface {
    measuredValue: number | undefined;
    addMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    minMeasuredValue: number | undefined;
    addMinMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMinMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    maxMeasuredValue: number | undefined;
    addMaxMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMaxMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    tolerance?: number;
    addToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    removeToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
}

export const SoilMoistureMeasurement:
    ClusterInterface<SoilMoistureMeasurementInterface> =
{
    definition: SoilMoistureMeasurementCluster
};
