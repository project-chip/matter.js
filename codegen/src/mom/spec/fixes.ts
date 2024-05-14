/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This file contains hacks to repair various ingestion issues caused by spec mistakes and/or the AsciiDoc->PDF->HTML
// madness

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

export function fixTypeIdentifier<T extends string | undefined>(type: T): T {
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

export function fixTypeErrors(record: { type?: string; constraint?: string }) {
    let type = record.type;
    if (type === undefined) {
        return type;
    }

    type = fixTypeIdentifier(type);

    // Bug in scene ID in 1.3 cluster spec 1.4.9.15 "CopyScene" command
    if (type === "max254") {
        type = "uint8";
        record.constraint = "max 254";
    }

    record.type = type;
}

export function fixConstraintErrors(record: { constraint?: string }) {
    const { constraint } = record;
    if (!constraint) {
        return;
    }

    // Remove units and otherwise normalize constraint
    record.constraint = constraint
        .replace(/ octets| entries| bytes| per node/i, "")
        .replace(/ to(\d|max)/i, " to $1")
        .replace(/ValuetoMax/, "Value to Max")
        .replace(/Sup ported/, "Supported");

    // Ignore window covering's bitmap constraints
    if (constraint.match(/^[0x]{4} [0x]{4}$/)) {
        delete record.constraint;
    }
}

export function fixConformance(conformance?: string) {
    if (!conformance) {
        return;
    }

    if (conformance.match(/\[?Zigbee\]?(?:, D)?/)) {
        return "D";
    }

    if (conformance === "Matter!Zigbee") {
        return;
    }

    // This is global FabricScoped attribute.  We only install on fabric-scoped structs so if it's present it's
    // mandatory
    if (conformance.match(/fabric\s*-\s*scoped/i)) {
        return "M";
    }

    conformance = conformance?.replace(/\|CO N/, "|CON").replace("PIRUnoccupiedToOccupied", "PirUnoccupiedToOccupied");

    return conformance;
}

export function fixDefaultErrors(record: { default?: string; type?: string }) {
    const { default: def } = record;
    if (def === undefined) {
        return;
    }

    if (typeof def === "string") {
        switch (def.toLowerCase()) {
            case "desc": // See description
            case "n/a": // Not available
            case "ms": // Manufacturer specific
            case "-": // Sometimes used for "none"
            case "–": // This is perhaps the dash used for "none"
                delete record.default;
                break;

            case "empty":
                if (record.type?.toLowerCase().startsWith("enum") || record.type?.toLowerCase().endsWith("enum")) {
                    delete record.default;
                }
                break;

            case "varied":
                record.default = "any";
                break;

            case "!lt:0lt:1":
                // Pump control conditional defaults; just ignore
                delete record.default;
                break;

            default:
                // Sometimes enum values are suffixed with enum name in parenthesis
                if (def.match(/^\d+\(.*\)$/)) {
                    record.default = def.replace(/^(\d+).*/, "$1");
                }

                // Sometimes default value strings have "" around them
                if (def.startsWith('"') && def.endsWith('"')) {
                    record.default = def.slice(1, def.length - 1);
                }
                break;
        }
    }
}
