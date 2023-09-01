/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "PumpConfigurationAndControl",

    children: [
        // The spec only defines long-form names for these bits in a
        // non-standard table we don't bother parsing because it contains
        // nothing else useful
        {
            tag: "attribute",
            id: 0x1d,
            name: "AlarmMask",
            children: [
                {
                    tag: "datatype",
                    constraint: "0",
                    name: "InitializationFailure",
                    details: "The device failed to complete initialization at powerup",
                },
                {
                    tag: "datatype",
                    constraint: "1",
                    name: "HardwareFailure",
                    details: "The device has detected a hardware fault",
                },
                {
                    tag: "datatype",
                    constraint: "2",
                    name: "SelfCalibrationFailure",
                    details: "The device was unable to complete self calibration",
                },
            ],
        },
    ],
});
