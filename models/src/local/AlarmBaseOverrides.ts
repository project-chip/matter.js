/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "AlarmBase",

    children: [
        // Event ID Numbers of Fields were changed
        // InitialTimeEstimate -> EstimatedTime
        /*
        TODO: This generates duplicate errors. YOu also need to add the import in index.ts!
        {
            tag: "event",
            name: "Notify",
            id: 0x0,
            children: [
                {
                    tag: "field",
                    name: "Active",
                    id: 0x0,
                    type: "AlarmBitmap",
                    conformance: "M",
                    default: 0,
                    details: "This field shall indicate those alarms that have become active.",
                    xref: { document: "cluster", section: "1.15.8.1.1" },
                },
                {
                    tag: "field",
                    name: "Inactive",
                    id: 0x1,
                    type: "AlarmBitmap",
                    conformance: "M",
                    default: 0,
                    details: "This field shall indicate those alarms that have become inactive.",
                    xref: { document: "cluster", section: "1.15.8.1.2" },
                },

                {
                    tag: "field",
                    name: "State",
                    id: 0x2,
                    type: "AlarmBitmap",
                    conformance: "M",
                    default: 0,
                    details:
                        "This field shall be a copy of the new State attribute value that resulted in the event being " +
                        "generated. That is, this field shall have all the bits in Active set and shall NOT have any of the " +
                        "bits in Inactive set.",
                    xref: { document: "cluster", section: "1.15.8.1.4" },
                },

                {
                    tag: "field",
                    name: "Mask",
                    id: 0x3,
                    type: "AlarmBitmap",
                    conformance: "M",
                    default: 0,
                    details: "This field shall be a copy of the Mask attribute when this event was generated.",
                    xref: { document: "cluster", section: "1.15.8.1.3" },
                },
            ],
        },*/
    ],
});
