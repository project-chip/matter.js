/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const double = Datatype({
    name: "double", byteSize: 8, description: "Double precision", isSeed: true, metatype: "float",

    details: "The double precision number format is based on the IEEE 754-2019 double precision (64-bit) format " +
        "for binary floating-point arithmetic." +
        "\n" +
        "The format and interpretation of values of this data type follow the same rules as given for the " +
        "single precision data type, but with wider mantissa and exponent ranges." +
        "\n" +
        "See IEEE 754-2019 for more details on the representable values.",

    xref: { document: "core", section: "7.19.1.6" }
});

MatterDefinition.children.push(double);
