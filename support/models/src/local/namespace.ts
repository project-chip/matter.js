/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { LocalMatter } from "../local.js";

// Namespace is a standard or device-specific Enum ID
LocalMatter.children.push({
    tag: "datatype",
    name: "namespace",
    type: "enum8",
    children: [
        {
            tag: "field",
            id: 0x1,
            name: "Closure",
            details: "Tags which are useful in describing things related to closing and opening",
        },
        {
            tag: "field",
            id: 0x2,
            name: "CompassDirection",
            details: "Tags which are useful in describing things related to compass direction",
        },
        {
            tag: "field",
            id: 0x3,
            name: "CompassLocation",
            details: "Tags which are useful in describing things related to compass location",
        },
        {
            tag: "field",
            id: 0x4,
            name: "Direction",
            details: "Tags which are useful in describing things related to direction",
        },
        {
            tag: "field",
            id: 0x5,
            name: "Level",
            details: "Tags which are useful in describing things related to level",
        },
        {
            tag: "field",
            id: 0x6,
            name: "Location",
            details: "Tags which are useful in describing things related to location",
        },
        {
            tag: "field",
            id: 0x7,
            name: "Number",
            details: "Tags which are useful in describing things related to numbering",
        },
        {
            tag: "field",
            id: 0x8,
            name: "Position",
            details: "Tags which are useful in describing things related to position",
        },
        {
            tag: "field",
            id: 0xa,
            name: "ElectricalMeasurement",
            details: "Tags which are useful in describing electrical loads",
        },
        { tag: "field", id: 0xe, name: "Laundry", details: "Tags which are useful with laundry device types" },
        { tag: "field", id: 0xf, name: "PowerSource", details: "Tags which are useful with power source device types" },
        {
            tag: "field",
            id: 0x10,
            name: "AreaNamespace",
            details: "Tags which are useful in describing things related to home areas",
        },
        {
            tag: "field",
            id: 0x11,
            name: "LandmarkNamespace",
            details: "Tags which are useful in describing things related to home landmarks",
        },
        {
            tag: "field",
            id: 0x12,
            name: "RelativePosition",
            details:
                "Tags which are useful in describing things related to position relative to a reference external to the device",
        },
        {
            tag: "field",
            id: 0x41,
            name: "Refrigerator",
            details: "Tags which are useful with refrigeration device types",
        },
        {
            tag: "field",
            id: 0x42,
            name: "RoomAirConditioner",
            details: "Tags which are useful with Room Air Conditioner device types",
        },
        { tag: "field", id: 0x43, name: "Switches", details: "Tags which are useful with switch device types" },
    ],
});
