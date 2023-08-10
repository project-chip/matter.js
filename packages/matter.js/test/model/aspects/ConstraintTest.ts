/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Constraint } from "../../../src/model/aspects/Constraint.js";

const TEST_CONSTRAINTS: [text: string, ast: Constraint.Ast, expectedText?: string][] = [
    ["0", { value: 0 }],
    ["desc", { desc: true }],
    ["4", { value: 4 }],
    ["min 4", { min: 4 }],
    ["max 4", { max: 4 }],
    ["4 to 44", { min: 4, max: 44 }],
    ["0x4 to 0x44", { min: 4, max: 68 }, "4 to 68"],
    ["0xff to 0xffff", { min: 255, max: 65535 }, "255 to 65535"],
    ["4[44]", { value: 4, entry: { value: 44 } }],
    ["4, 44", { parts: [{ value: 4 }, { value: 44 }] }],
    [
        "4[44, 444], 5[max 55, min 555]",
        {
            parts: [
                {
                    value: 4,
                    entry: {
                        parts: [{ value: 44 }, { value: 444 }],
                    },
                },
                {
                    value: 5,
                    entry: {
                        parts: [{ max: 55 }, { min: 555 }],
                    },
                },
            ],
        },
    ],
];

describe("Constraint", () => {
    TEST_CONSTRAINTS.forEach(([text, ast, expectedText]) => {
        describe(text, () => {
            it("parses", () => {
                expect(new Constraint(text)).toEqual(new Constraint({ ...ast, definition: text }));
            });

            it("serializes", () => {
                expect(new Constraint(ast).toString()).toEqual(expectedText ?? text);
            });
        });
    });
});
