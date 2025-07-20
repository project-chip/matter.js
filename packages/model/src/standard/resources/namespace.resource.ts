/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "datatype", name: "namespace", description: "Namespace", xref: "core§7.19.2.43",
    details: "The Namespace type identifies the namespace used for a semantic tag.",

    children: [
        {
            tag: "field", name: "Closure",
            details: "Tags which are useful in describing things related to closing and opening"
        },
        {
            tag: "field", name: "CompassDirection",
            details: "Tags which are useful in describing things related to compass direction"
        },
        {
            tag: "field", name: "CompassLocation",
            details: "Tags which are useful in describing things related to compass location"
        },
        { tag: "field", name: "Direction", details: "Tags which are useful in describing things related to direction" },
        { tag: "field", name: "Level", details: "Tags which are useful in describing things related to level" },
        { tag: "field", name: "Location", details: "Tags which are useful in describing things related to location" },
        { tag: "field", name: "Number", details: "Tags which are useful in describing things related to numbering" },
        { tag: "field", name: "Position", details: "Tags which are useful in describing things related to position" },
        {
            tag: "field", name: "ElectricalMeasurement",
            details: "Tags which are useful in describing electrical loads"
        },
        { tag: "field", name: "Laundry", details: "Tags which are useful with laundry device types" },
        { tag: "field", name: "PowerSource", details: "Tags which are useful with power source device types" },
        {
            tag: "field", name: "AreaNamespace",
            details: "Tags which are useful in describing things related to home areas"
        },
        {
            tag: "field", name: "LandmarkNamespace",
            details: "Tags which are useful in describing things related to home landmarks"
        },
        {
            tag: "field", name: "RelativePosition",
            details: "Tags which are useful in describing things related to position relative to a reference external to " +
                "the device"
        },
        { tag: "field", name: "Refrigerator", details: "Tags which are useful with refrigeration device types" },
        {
            tag: "field", name: "RoomAirConditioner",
            details: "Tags which are useful with Room Air Conditioner device types"
        },
        { tag: "field", name: "Switches", details: "Tags which are useful with switch device types" }
    ]
});
