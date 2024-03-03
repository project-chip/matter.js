/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement as Cluster } from "@project-chip/matter.js/model";
import { LocalMatter } from "../local.js";

LocalMatter.children.push(
    Cluster({
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
                        tag: "field",
                        id: 0,
                        name: "Stopped",
                        details: "Covering is not moving",
                    },
                    {
                        tag: "field",
                        id: 1,
                        name: "Opening",
                        details: "Covering is moving from closed to open",
                    },
                    {
                        tag: "field",
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
                    { tag: "field", name: "MotorDirectionReversed", constraint: "0" },
                    { tag: "field", name: "CalibrationMode", constraint: "1" },
                    { tag: "field", name: "MaintenanceMode", constraint: "2" },
                    { tag: "field", name: "LedFeedback", constraint: "3" },
                ],
            },

            // Set the name of the ConfigStatus config fields.  Same issue as for
            // Mode
            {
                tag: "attribute",
                id: 7,
                name: "ConfigStatus",

                children: [
                    { tag: "field", name: "Operational", constraint: "0" },
                    { tag: "field", name: "OnlineReserved", constraint: "1" },
                    { tag: "field", name: "LiftMovementReversed", constraint: "2" },
                    { tag: "field", name: "LiftPositionAware", constraint: "3" },
                    { tag: "field", name: "TiltPositionAware", constraint: "4" },
                    { tag: "field", name: "LiftEncoderControlled", constraint: "5" },
                    { tag: "field", name: "TiltEncoderControlled", constraint: "6" },
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
                        tag: "field",
                        name: "Global",
                        type: "MovementStatus",
                        constraint: "0 to 2",
                        description: "Movement status of the cover",
                    },
                    {
                        tag: "field",
                        name: "Lift",
                        type: "MovementStatus",
                        constraint: "2 to 4",
                        description: "Movement status of the cover's lift function",
                    },
                    {
                        tag: "field",
                        name: "Tilt",
                        type: "MovementStatus",
                        constraint: "4 to 6",
                        description: "Movement status of the cover's tilt function",
                    },
                ],
            },

            {
                tag: "command",
                name: "GoToLiftPercentage",
                id: 0x5,

                children: [
                    {
                        tag: "field",
                        name: "LiftPercent100thsValue",
                        id: 0x0,
                        type: "percent100ths",
                        conformance: "M",
                        constraint: "desc",
                    },
                ],
            },
            {
                tag: "command",
                name: "GoToTiltPercentage",
                id: 0x8,
                children: [
                    {
                        tag: "field",
                        name: "TiltPercent100thsValue",
                        id: 0x0,
                        type: "percent100ths",
                        conformance: "M",
                        constraint: "desc",
                    },
                ],
            },
        ],
    }),
);
