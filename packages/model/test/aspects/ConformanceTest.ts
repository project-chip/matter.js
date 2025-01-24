/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance } from "#aspects/Conformance.js";

const TEST_DEFINITIONS = [
    "M",
    "O",
    "P",
    "D",
    "X",
    "WBL",
    "AX | WBL",
    "AX, WBL",
    "[WIRED]",
    "!AB",
    "AB.a",
    "AB.a+",
    "AB.a2",
    "AB.a2+",
    "AB == 2",
    "Mom",
    "[AB].a",
    "[LF & PA_LF & ABS]",
    "!USR & (PIN | RID | FGP)",
];

const TEST_DEFINITIONS2 = {
    "(AX | WBL)": "AX | WBL",
};

function testOne(definition: string, expected = definition) {
    describe(definition, () => {
        it("parses", () => {
            expect(() => new Conformance(definition)).not.throw();
        });

        it("serializes", () => {
            const conformance = new Conformance(definition);
            expect(`${conformance}`).equal(expected);
        });
    });
}

describe("Conformance", () => {
    TEST_DEFINITIONS.forEach(d => testOne(d));
    Object.entries(TEST_DEFINITIONS2).forEach(([d, e]) => testOne(d, e));

    describe("invalid conformance", () => {
        it("fails gracefully", () => {
            const conformance = new Conformance("%");
            expect(conformance.errors?.length).equal(1);
            expect(conformance.toString()).equal("");
        });
    });
});
