/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOffLighting, LevelControl } from "../../cluster/interface/index.js";

export class DimmableLight extends AutoDevice.with(DeviceTypes.DIMMABLE_LIGHT, Identify, OnOffLighting, LevelControl) {
}
