/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "WindowCovering",

    children: [
        // Formal definition of operational status bitmap fields
        {
            tag: "datatype",
            type: "enum8",
            name: "MovementStatus",
            details: "Values for OperationalStatus attribute fields.",

            children: [
                {
                    tag: "datatype",
                    id: 0,
                    name: "Stopped",
                    details: "Covering is not moving",
                },
                {
                    tag: "datatype",
                    id: 1,
                    name: "Opening",
                    details: "Covering is moving from closed to open",
                },
                {
                    tag: "datatype",
                    id: 2,
                    name: "Closing",
                    details: "Covering is moving from open to closed",
                },
            ],
        },

        // Set Mode field names.  They're correct in chip.ts but only
        // placeholders in spec.ts.  Since spec overrides chip for names we
        // need to re-write them here
        {
            tag: "attribute",
            id: 0x17,
            name: "Mode",

            children: [
                { tag: "datatype", name: "MotorDirectionReversed", constraint: "0" },
                { tag: "datatype", name: "CalibrationMode", constraint: "1" },
                { tag: "datatype", name: "MaintenanceMode", constraint: "2" },
                { tag: "datatype", name: "LedFeedback", constraint: "3" },
            ],
        },

        // Set the name of the ConfigStatus config fields.  Same issue as for
        // Mode
        {
            tag: "attribute",
            id: 7,
            name: "ConfigStatus",

            children: [
                { tag: "datatype", name: "Operational", constraint: "0" },
                { tag: "datatype", name: "OnlineReserved", constraint: "1" },
                { tag: "datatype", name: "LiftMovementReversed", constraint: "2" },
                { tag: "datatype", name: "LiftPositionAware", constraint: "3" },
                { tag: "datatype", name: "TiltPositionAware", constraint: "4" },
                { tag: "datatype", name: "LiftEncoderControlled", constraint: "5" },
                { tag: "datatype", name: "TiltEncoderControlled", constraint: "6" },
            ],
        },

        // Set the name, type and description of the OperationalStatus config
        // fields.  Otherwise name would be a placeholder, type would be a bare
        // number and the description would be overly-verbose bit-level
        // descriptions from the spec
        {
            tag: "attribute",
            id: 10,
            name: "OperationalStatus",

            children: [
                {
                    tag: "datatype",
                    name: "Global",
                    type: "MovementStatus",
                    constraint: "0 to 2",
                    description: "Movement status of the cover",
                },
                {
                    tag: "datatype",
                    name: "Lift",
                    type: "MovementStatus",
                    constraint: "2 to 4",
                    description: "Movement status of the cover's lift function",
                },
                {
                    tag: "datatype",
                    name: "Tilt",
                    type: "MovementStatus",
                    constraint: "4 to 6",
                    description: "Movement status of the cover's tilt function",
                },
            ],
        },
    ],
});
