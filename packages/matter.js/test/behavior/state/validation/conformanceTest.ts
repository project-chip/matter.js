/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConformanceError } from "../../../../src/behavior/errors.js";
import { Features, Fields, Tests, testValidation } from "./validation-test-utils.js";

const AllTests = Tests({
    conformance: Tests({
        base: Tests({
            mandatory: Tests(Fields({ conformance: "M" }), {
                accepts: {
                    record: { test: 1234 },
                },

                requires: {
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "M": Field must be defined',
                    },
                },
            }),

            optional: Tests(Fields({ conformance: "O" }), {
                accepts: {
                    record: { test: 1234 },
                },

                "allows omission": {},
            }),
        }),

        feature: Tests(Features({ F: "Foo" }), {
            mandatory: Tests(Fields({ conformance: "F" }), {
                "allows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                },

                "requires if enabled": {
                    supports: ["foo"],
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "F": Field must be defined',
                    },
                },

                "disallows if disabled": {
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "F": Field must not be defined',
                    },
                },

                "allows omission if disabled": {},
            }),

            optional: Tests(Fields({ conformance: "[F]" }), {
                "allows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },

                "disallows if disabled": {
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "[F]": Field must not be defined',
                    },
                },

                "allows omission if disabled": {},
            }),

            "negated mandatory": Tests(Fields({ conformance: "!F" }), {
                "allows if disabled": {
                    record: { test: 1234 },
                },

                "requires if disabled": {
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "!F": Field must be defined',
                    },
                },

                "disallows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "!F": Field must not be defined',
                    },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },
            }),

            "negated optional": Tests(Fields({ conformance: "[!F]" }), {
                "allows if disabled": {
                    record: { test: 1234 },
                },

                "allows omission if disabled": {},

                "disallows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "[!F]": Field must not be defined',
                    },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },
            }),
        }),

        "binary logical feature": Tests(Features({ F: "Foo", B: "Bar" }), {
            disjunction: Tests({
                mandatory: Tests(Fields({ conformance: "F | B" }), {
                    "allows if enabled (LHS)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                    },

                    "allows if enabled (RHS)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "F | B": Field must not be defined',
                        },
                    },

                    "allows omission if disabled": {},
                }),

                optional: Tests(Fields({ conformance: "[F | B]" }), {
                    "allows if enabled (LHS)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                    },

                    "allows if enabled (RHS)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                    },

                    "allows omission if enabled (LHS)": {
                        supports: ["foo"],
                    },

                    "allows omission if enabled (RHS)": {
                        supports: ["bar"],
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "[F | B]": Field must not be defined',
                        },
                    },

                    "allows omission if disabled": {},
                }),
            }),

            conjunction: Tests({
                mandatory: Tests(Fields({ conformance: "F & B" }), {
                    "allows if enabled": {
                        supports: ["foo", "bar"],
                        record: { test: 1234 },
                    },

                    "requires if enabled": {
                        supports: ["foo", "bar"],
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "F & B": Field must be defined',
                        },
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "F & B": Field must not be defined',
                        },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "F & B": Field must not be defined',
                        },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "F & B": Field must not be defined',
                        },
                    },

                    "allows omission if disabled": {},

                    "allows omission if disabled (LHS enabled)": {
                        supports: ["foo"],
                    },

                    "allows omission if disabled (RHS enabled)": {
                        supports: ["bar"],
                    },
                }),

                optional: Tests(Fields({ conformance: "[F & B]" }), {
                    "allows if enabled": {
                        supports: ["foo", "bar"],
                        record: { test: 1234 },
                    },

                    "allows omission if enabled": {
                        supports: ["foo", "bar"],
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "[F & B]": Field must not be defined',
                        },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "[F & B]": Field must not be defined',
                        },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test.test: Conformance "[F & B]": Field must not be defined',
                        },
                    },

                    "allows omission if disabled": {},

                    "allows omission if disabled (LHS enabled)": {
                        supports: ["foo"],
                    },

                    "allows omission if disabled (RHS enabled)": {
                        supports: ["bar"],
                    },
                }),
            }),
        }),

        "trinary logical feature": Tests(Features({ A: "Aye", B: "Bee", C: "See" }), {
            conjunction: Tests(Fields({ conformance: "A & B & C" }), {
                "allows if enabled": {
                    supports: ["aye", "bee", "see"],
                    record: { test: 1234 },
                },

                "requires if enabled": {
                    supports: ["aye", "bee", "see"],
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A & B & C": Field must be defined',
                    },
                },

                "disallows if disabled (RHS & LHS enabled)": {
                    supports: ["aye", "see"],
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A & B & C": Field must not be defined',
                    },
                },

                "allows omission if disabled (RHS & LHS enabled)": {
                    supports: ["aye", "see"],
                },
            }),

            "disjunction within conjunction": Tests(Fields({ conformance: "A & (B | C)" }), {
                "allows if enabled (disjunction RHS)": {
                    supports: ["aye", "bee"],
                    record: { test: 1234 },
                },

                "allows if enabled (disjunction LHS)": {
                    supports: ["aye", "see"],
                    record: { test: 1234 },
                },

                "requires if enabled (disjunction RHS)": {
                    supports: ["aye", "bee"],
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A & (B | C)": Field must be defined',
                    },
                },

                "requires if enabled (disjunction LHS)": {
                    supports: ["aye", "see"],
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A & (B | C)": Field must be defined',
                    },
                },

                "disallows if disabled (conjunction LHS)": {
                    supports: ["see"],
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A & (B | C)": Field must not be defined',
                    },
                },

                "allows omission if disabled (conjunction LHS)": {
                    supports: ["see"],
                },
            }),

            "conjunction within disjunction": Tests(Fields({ conformance: "A | (B & C)" }), {
                "allows if enabled (conjunction LHS)": {
                    supports: ["aye"],
                    record: { test: 1234 },
                },

                "allows if enabled (conjunction RHS)": {
                    supports: ["bee", "see"],
                    record: { test: 1234 },
                },

                "disallows if disabled (conjunction LHS enabled)": {
                    supports: ["bee"],
                    record: { test: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test.test: Conformance "A | B & C": Field must not be defined',
                    },
                },
            }),
        }),

        choice: Tests({
            "exactly one": Tests(Fields({ name: "Test1", conformance: "O.a" }, { name: "Test2", conformance: "O.a" }), {
                "allows one field": {
                    record: { test1: 1234 },
                },

                "requires one field": {
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test: Conformance choice "a": Too few fields present (0 of min 1)',
                    },
                },

                "disallows multiple fields": {
                    record: { test1: 1234, test2: 1234 },
                    error: {
                        type: ConformanceError,
                        message: 'Validating Test: Conformance choice "a": Too many fields present (2 of max 1)',
                    },
                },
            }),

            "exactly two": Tests(
                Fields(
                    { name: "Test1", conformance: "O.a2" },
                    { name: "Test2", conformance: "O.a2" },
                    { name: "Test3", conformance: "O.a2" },
                ),
                {
                    "allows two fields": {
                        record: { test1: 1234, test3: 4321 },
                    },

                    "disallows no fields": {
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test: Conformance choice "a": Too few fields present (0 of min 2)',
                        },
                    },

                    "disallows one field": {
                        record: { test1: 1 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test: Conformance choice "a": Too few fields present (1 of min 2)',
                        },
                    },

                    "disallows three fields": {
                        record: { test1: 1, test2: 2, test3: 3 },
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test: Conformance choice "a": Too many fields present (3 of max 2)',
                        },
                    },
                },
            ),

            "one or more": Tests(
                Fields({ name: "Test1", conformance: "O.a+" }, { name: "Test2", conformance: "O.a+" }),
                {
                    "allows one field": {
                        record: { test1: 1234 },
                    },

                    "requires one field": {
                        error: {
                            type: ConformanceError,
                            message: 'Validating Test: Conformance choice "a": Too few fields present (0 of min 1)',
                        },
                    },

                    "allows multiple fields": {
                        record: { test1: 1234, test2: 1234 },
                    },
                },
            ),
        }),
    }),
});

testValidation("conformance", AllTests);
