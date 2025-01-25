/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An identifier for every non-derived datatype from the Matter Core
 * Specification.
 */
export enum Datatype {
    bool = "bool",
    map8 = "map8",
    map16 = "map16",
    map32 = "map32",
    map64 = "map64",
    uint8 = "uint8",
    uint16 = "uint16",
    uint24 = "uint24",
    uint32 = "uint32",
    uint40 = "uint40",
    uint48 = "uint48",
    uint56 = "uint56",
    uint64 = "uint64",
    int8 = "int8",
    int16 = "int16",
    int24 = "int24",
    int32 = "int32",
    int40 = "int40",
    int48 = "int48",
    int56 = "int56",
    int64 = "int64",
    single = "single",
    double = "double",
    octstr = "octstr",
    list = "list",
    struct = "struct",

    // Formally these are derived datatypes, however we largely treat them
    // like non-derived so define them here
    string = "string",
    enum8 = "enum8",
    enum16 = "enum16",

    // Extension -- any value is allowed
    any = "any",
}
