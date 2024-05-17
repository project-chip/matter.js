/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const TYPE_ERRORS: { [badType: string]: string } = {
    "attribute-id": "attrib-id",
    bitmap8: "map8",
    "node-idx": "node-id",
    SystemTimeMicroseconds: "systime-us",
    HardwareAddress: "hwadr",
    String: "string",
    variable: "any",
    SubjectId: "subject-id",
    SubjectID: "subject-id",
    SignedTemperatureType: "SignedTemperature",
    UnsignedTemperatureType: "UnsignedTemperature",
    "system-us": "systime-us",
    "system-ms": "systime-ms",
    "Time of Day": "TimeOfDay",
    SemanticTagStruct: "semtag",
    "voltage-mW": "voltage-mV",
    utc: "epoch-s",
};

export function repairTypeIdentifier<T extends string | undefined>(type: T): T {
    if (type === undefined) {
        return type;
    }

    if (type.startsWith("list[") && type.endsWith("]")) {
        const entryType = type.slice(5, type.length - 1);
        if (TYPE_ERRORS[entryType]) {
            return `list[${TYPE_ERRORS[entryType]}]` as T;
        }
        return type;
    }

    if (TYPE_ERRORS[type]) {
        return TYPE_ERRORS[type] as T;
    }

    return type;
}

export function repairType(record: { type?: string; constraint?: string }) {
    let type = record.type;
    if (type === undefined) {
        return type;
    }

    type = repairTypeIdentifier(type);

    // Bug in scene ID in 1.3 cluster spec 1.4.9.15 "CopyScene" command
    if (type === "max254") {
        type = "uint8";
        record.constraint = "max 254";
    }

    record.type = type;
}
