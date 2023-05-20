/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityCluster, ClusterInterface } from "../index.js";

export module RelativeHumidity {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const RelativeHumidity: ClusterInterface<RelativeHumidity.State, RelativeHumidity.Client, RelativeHumidity.Server> = {
    definition: RelativeHumidityCluster
}
