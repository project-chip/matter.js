/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { PressureMeasurementCluster } from "../index.js";

export interface PressureMeasurementInterface {
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

    scaledValue?: number | undefined;
    addScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    minScaledValue?: number | undefined;
    addMinScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMinScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    maxScaledValue?: number | undefined;
    addMaxScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMaxScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    scaledTolerance?: number;
    addScaledToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScaledToleranceListener(listener: (newValue: number, oldValue: number) => void): void;

    scale?: number;
    addScaleListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScaleListener(listener: (newValue: number, oldValue: number) => void): void;
}

export const PressureMeasurementClientImpl = ClientIfaceImpl<PressureMeasurementInterface>(PressureMeasurementCluster);
export const PressureMeasurementServerImpl = ServerIfaceImpl<PressureMeasurementInterface>(PressureMeasurementCluster);
