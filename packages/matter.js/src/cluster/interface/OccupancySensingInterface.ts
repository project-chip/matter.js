/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensingCluster, ClusterInterface } from "../index.js";

export interface OccupancySensingInterface {
    occupancy: number;
    addOccupancyListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOccupancyListener(listener: (newValue: number, oldValue: number) => void): void;

    occupancySensorType: number;
    addOccupancySensorTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOccupancySensorTypeListener(listener: (newValue: number, oldValue: number) => void): void;

    occupancySensorTypeBitmap: number;
    addOccupancySensorTypeBitmapListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOccupancySensorTypeBitmapListener(listener: (newValue: number, oldValue: number) => void): void;

    pirOccupiedToUnoccupiedDelay?: number;
    setPirOccupiedToUnoccupiedDelay(value: number): Promise<void>;
    addPirOccupiedToUnoccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;
    removePirOccupiedToUnoccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;

    pirUnoccupiedToOccupiedDelay?: number;
    setPirUnoccupiedToOccupiedDelay(value: number): Promise<void>;
    addPirUnoccupiedToOccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;
    removePirUnoccupiedToOccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;

    pirUnoccupiedToOccupiedThreshold?: number;
    setPirUnoccupiedToOccupiedThreshold(value: number): Promise<void>;
    addPirUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;
    removePirUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;

    ultrasonicOccupiedToUnoccupiedDelay?: number;
    setUltrasonicOccupiedToUnoccupiedDelay(value: number): Promise<void>;
    addUltrasonicOccupiedToUnoccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;
    removeUltrasonicOccupiedToUnoccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;

    ultrasonicUnoccupiedToOccupiedDelay?: number;
    setUltrasonicUnoccupiedToOccupiedDelay(value: number): Promise<void>;
    addUltrasonicUnoccupiedToOccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;
    removeUltrasonicUnoccupiedToOccupiedDelayListener(listener: (newValue: number, oldValue: number) => void): void;

    ultrasonicUnoccupiedToOccupiedThreshold?: number;
    setUltrasonicUnoccupiedToOccupiedThreshold(value: number): Promise<void>;
    addUltrasonicUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;
    removeUltrasonicUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;

    physicalContactOccupiedToUnoccupiedDelay?: number | undefined;
    setPhysicalContactOccupiedToUnoccupiedDelay(value: number | undefined): Promise<void>;
    addPhysicalContactOccupiedToUnoccupiedDelayListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removePhysicalContactOccupiedToUnoccupiedDelayListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    physicalContactUnoccupiedToOccupiedDelay?: number | undefined;
    setPhysicalContactUnoccupiedToOccupiedDelay(value: number | undefined): Promise<void>;
    addPhysicalContactUnoccupiedToOccupiedDelayListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removePhysicalContactUnoccupiedToOccupiedDelayListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    physicalContactUnoccupiedToOccupiedThreshold?: number;
    setPhysicalContactUnoccupiedToOccupiedThreshold(value: number): Promise<void>;
    addPhysicalContactUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;
    removePhysicalContactUnoccupiedToOccupiedThresholdListener(listener: (newValue: number, oldValue: number) => void): void;
}

export const OccupancySensing:
    ClusterInterface<OccupancySensingInterface> =
{
    definition: OccupancySensingCluster
};
