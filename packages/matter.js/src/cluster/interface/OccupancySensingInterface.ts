/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensingCluster, ClusterInterface } from "../index.js";


export module OccupancySensing {
    export type State = {
        readonly occupancy: number;
        readonly occupancySensorType: number;
        readonly occupancySensorTypeBitmap: number;
        readonly pirOccupiedToUnoccupiedDelay?: number;
        readonly pirUnoccupiedToOccupiedDelay?: number;
        readonly pirUnoccupiedToOccupiedThreshold?: number;
        readonly ultrasonicOccupiedToUnoccupiedDelay?: number;
        readonly ultrasonicUnoccupiedToOccupiedDelay?: number;
        readonly ultrasonicUnoccupiedToOccupiedThreshold?: number;
        readonly physicalContactOccupiedToUnoccupiedDelay?: number | undefined;
        readonly physicalContactUnoccupiedToOccupiedDelay?: number | undefined;
        readonly physicalContactUnoccupiedToOccupiedThreshold?: number;
    }

    export interface Common {
    }
}

export const OccupancySensing: ClusterInterface<OccupancySensing.State, OccupancySensing.Common, OccupancySensing.Common> = {
    definition: OccupancySensingCluster
}
