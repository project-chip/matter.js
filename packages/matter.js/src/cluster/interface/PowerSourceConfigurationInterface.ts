/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceConfigurationCluster, ClusterInterface } from "../index.js";

export interface PowerSourceConfigurationInterface {
    sources: number[];
    addSourcesListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeSourcesListener(listener: (newValue: number[], oldValue: number[]) => void): void;
}

export const PowerSourceConfiguration:
    ClusterInterface<PowerSourceConfigurationInterface> =
{
    definition: PowerSourceConfigurationCluster
};
