/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function repairConstraint(record: { constraint?: string }) {
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

export function repairConformance(conformance?: string) {
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
