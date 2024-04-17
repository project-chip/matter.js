/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConstraintError } from "../../../../src/behavior/errors.js";
import { Fields, Tests, testValidation } from "./validation-test-utils.js";

const AllTests = Tests({
    min: Tests(Fields({ constraint: "min 4" }), {
        "accepts if over": { record: { test: 5 } },
        "accepts if equal": { record: { test: 4 } },
        "rejects if under": {
            record: { test: 3 },
            error: {
                type: ConstraintError,
                message: 'Validating Test.test: Constraint "min 4": Value 3 is not within bounds defined by constraint',
            },
        },
    }),

    max: Tests(Fields({ constraint: "max 4" }), {
        "rejects if over": {
            record: { test: 5 },
            error: {
                type: ConstraintError,
                message: 'Validating Test.test: Constraint "max 4": Value 5 is not within bounds defined by constraint',
            },
        },
        "accepts if equal": { record: { test: 4 } },
        "accepts if under": {
            record: { test: 3 },
        },
    }),

    compound: Tests(Fields({ constraint: "3 to 4, 6 to 7" }), {
        "rejects if under": {
            record: { test: 2 },
            error: {
                type: ConstraintError,
                message:
                    'Validating Test.test: Constraint "3 to 4, 6 to 7": Value 2 is not within bounds defined by constraint',
            },
        },
        "accepts at bottom of first sub-range": {
            record: { test: 3 },
        },
        "accepts at top of first sub-range": {
            record: { test: 4 },
        },
        "rejects between ranges": {
            record: { test: 5 },
            error: {
                type: ConstraintError,
                message:
                    'Validating Test.test: Constraint "3 to 4, 6 to 7": Value 5 is not within bounds defined by constraint',
            },
        },
        "accepts at bottom of second sub-range": {
            record: { test: 6 },
        },
        "accepts at top of second sub-range": {
            record: { test: 7 },
        },
        "rejects if over": {
            record: { test: 8 },
            error: {
                type: ConstraintError,
                message:
                    'Validating Test.test: Constraint "3 to 4, 6 to 7": Value 8 is not within bounds defined by constraint',
            },
        },
    }),
});

testValidation("constraint", AllTests);
