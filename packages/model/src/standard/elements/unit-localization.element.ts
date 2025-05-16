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
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const UnitLocalization = Cluster(
    { name: "UnitLocalization", id: 0x2d },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "TEMP", constraint: "0", title: "TemperatureUnit" })
    ),
    Attribute(
        { name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW VM", conformance: "TEMP", quality: "N" }
    ),

    Datatype(
        { name: "TempUnitEnum", type: "enum8" },
        Field({ name: "Fahrenheit", id: 0x0, conformance: "M" }),
        Field({ name: "Celsius", id: 0x1, conformance: "M" }),
        Field({ name: "Kelvin", id: 0x2, conformance: "M" })
    )
);

MatterDefinition.children.push(UnitLocalization);
