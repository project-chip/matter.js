/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementAccuracyRangeStruct = Datatype(
    { name: "MeasurementAccuracyRangeStruct", type: "struct" },
    Field({ name: "RangeMin", id: 0x0, type: "int64", conformance: "M", quality: "F" }),
    Field({ name: "RangeMax", id: 0x1, type: "int64", conformance: "M", quality: "F" }),
    Field({ name: "PercentMax", id: 0x2, type: "percent100ths", conformance: "O.a+", quality: "F" }),
    Field({
        name: "PercentMin", id: 0x3, type: "percent100ths", conformance: "[PercentMax]",
        constraint: "max percentTypical", quality: "F"
    }),
    Field({
        name: "PercentTypical", id: 0x4, type: "percent100ths", conformance: "[PercentMin]",
        constraint: "percentMin to percentMax", quality: "F"
    }),
    Field({ name: "FixedMax", id: 0x5, type: "uint64", conformance: "O.a+", quality: "F" }),
    Field({ name: "FixedMin", id: 0x6, type: "uint64", conformance: "[FixedMax]", constraint: "max fixedMax", quality: "F" }),
    Field({
        name: "FixedTypical", id: 0x7, type: "uint64", conformance: "[FixedMin]",
        constraint: "fixedMin to fixedMax", quality: "F"
    })
);

MatterDefinition.children.push(MeasurementAccuracyRangeStruct);
