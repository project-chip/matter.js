/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const BallastConfiguration = Cluster(
    { name: "BallastConfiguration", id: 0x301 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),
    Attribute({
        name: "PhysicalMinLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
        constraint: "1 to 254", default: 1
    }),
    Attribute({
        name: "PhysicalMaxLevel", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        constraint: "1 to 254", default: 254
    }),
    Attribute({ name: "BallastStatus", id: 0x2, type: "BallastStatusBitmap", access: "R V", conformance: "O", default: 0 }),
    Attribute({
        name: "MinLevel", id: 0x10, type: "uint8", access: "RW VM", conformance: "M",
        constraint: "physicalMinLevel to maxLevel",
        default: { type: "reference", name: "PhysicalMinLevel" }
    }),
    Attribute({
        name: "MaxLevel", id: 0x11, type: "uint8", access: "RW VM", conformance: "M",
        constraint: "minLevel to physicalMaxLevel",
        default: { type: "reference", name: "PhysicalMaxLevel" }
    }),
    Attribute({ name: "PowerOnLevel", id: 0x12, conformance: "D" }),
    Attribute({ name: "PowerOnFadeTime", id: 0x13, conformance: "D" }),
    Attribute({ name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW VM", conformance: "O", quality: "X" }),
    Attribute({
        name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW VM", conformance: "O",
        constraint: "100 to ms", default: null, quality: "X"
    }),
    Attribute({ name: "LampQuantity", id: 0x20, type: "uint8", access: "R V", conformance: "M" }),
    Attribute({ name: "LampType", id: 0x30, type: "string", access: "RW VM", conformance: "O", constraint: "max 16" }),
    Attribute(
        { name: "LampManufacturer", id: 0x31, type: "string", access: "RW VM", conformance: "O", constraint: "max 16" }
    ),
    Attribute({
        name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW VM", conformance: "O", default: null,
        quality: "X"
    }),
    Attribute({ name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW VM", conformance: "O", default: 0, quality: "X" }),
    Attribute(
        { name: "LampAlarmMode", id: 0x34, type: "LampAlarmModeBitmap", access: "RW VM", conformance: "O", default: 0 }
    ),
    Attribute({
        name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW VM", conformance: "O",
        default: null, quality: "X"
    }),
    Datatype(
        { name: "BallastStatusBitmap", type: "map8" },
        Field({ name: "BallastNonOperational", constraint: "0" }),
        Field({ name: "LampFailure", constraint: "1" })
    ),
    Datatype({ name: "LampAlarmModeBitmap", type: "map8" }, Field({ name: "LampBurnHours", constraint: "0" }))
);

MatterDefinition.children.push(BallastConfiguration);
