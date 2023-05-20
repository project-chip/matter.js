/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensingCluster, ClusterInterface } from "../index.js";

export module OccupancySensing {
    export type State = {
        occupancy: number;
        occupancySensorType: number;
        occupancySensorTypeBitmap: number;
        pirOccupiedToUnoccupiedDelay?: number;
        pirUnoccupiedToOccupiedDelay?: number;
        pirUnoccupiedToOccupiedThreshold?: number;
        ultrasonicOccupiedToUnoccupiedDelay?: number;
        ultrasonicUnoccupiedToOccupiedDelay?: number;
        ultrasonicUnoccupiedToOccupiedThreshold?: number;
        physicalContactOccupiedToUnoccupiedDelay?: number | undefined;
        physicalContactUnoccupiedToOccupiedDelay?: number | undefined;
        physicalContactUnoccupiedToOccupiedThreshold?: number;
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const OccupancySensing: ClusterInterface<OccupancySensing.State, OccupancySensing.Client, OccupancySensing.Server> = {
    definition: OccupancySensingCluster
}
