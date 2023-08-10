/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, DatatypeModel, FeatureSet, Globals, RecordValidator } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/String.js";
import { Properties } from "../../../src/util/Type.js";

function Fields(...definition: { name?: string; type?: string; conformance?: string }[]): Fields {
    return definition.map(
        f =>
            new DatatypeModel({
                name: "Test",
                type: "number",
                ...f,
            }),
    );
}

function Features(definition: { [code: string]: string }): AttributeModel {
    return new AttributeModel({
        ...Globals.FeatureMap,

        children: Object.entries(definition).map(
            ([name, description]) =>
                new DatatypeModel({
                    name,
                    description,
                }),
        ),
    });
}

const NESTING: unique symbol = Symbol("NESTING");

function Tests(...definition: (Fields | Features | Tests["entries"])[]): Tests {
    const result = { [NESTING]: true } as Tests;
    for (const d of definition) {
        if (Array.isArray(d)) {
            result.fields = d;
        } else if (d instanceof AttributeModel) {
            result.features = d;
        } else {
            result.entries = d;
        }
    }
    return result;
}

const AllTests = Tests({
    conformance: Tests({
        base: Tests({
            mandatory: Tests(Fields({ conformance: "M" }), {
                accepts: {
                    record: { test: 1234 },
                },

                requires: {
                    errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
                },

                "disallows if disabled": {
                    record: { test: 1234 },
                    errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
                },

                "allows omission if disabled": {},
            }),

            "negated mandatory": Tests(Fields({ conformance: "!F" }), {
                "allows if disabled": {
                    record: { test: 1234 },
                },

                "requires if disabled": {
                    errors: { conformance: "Test" },
                },

                "disallows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                    errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
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
                        errors: { conformance: "Test" },
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
                        errors: { conformance: "Test" },
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
                        errors: { conformance: "Test" },
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        errors: { conformance: "Test" },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        errors: { conformance: "Test" },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        errors: { conformance: "Test" },
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
                        errors: { conformance: "Test" },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        errors: { conformance: "Test" },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
                },

                "disallows if disabled (RHS & LHS enabled)": {
                    supports: ["aye", "see"],
                    record: { test: 1234 },
                    errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
                },

                "requires if enabled (disjunction LHS)": {
                    supports: ["aye", "see"],
                    errors: { conformance: "Test" },
                },

                "disallows if disabled (conjunction LHS)": {
                    supports: ["see"],
                    record: { test: 1234 },
                    errors: { conformance: "Test" },
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
                    errors: { conformance: "Test" },
                },
            }),
        }),

        choice: Tests({
            "exactly one": Tests(Fields({ name: "Test1", conformance: "O.a" }, { name: "Test2", conformance: "O.a" }), {
                "allows one field": {
                    record: { test1: 1234 },
                },

                "requires one field": {
                    errors: {
                        code: "CHOICE_THRESHOLD_NOT_MET",
                        message: "Choice minimum of 1 not met",
                        source: "?.a",
                    },
                },

                "disallows multiple fields": {
                    record: { test1: 1234, test2: 1234 },
                    errors: {
                        code: "CHOICE_THRESHOLD_EXCEEDED",
                        message: "Choice maximum of 1 exceeded",
                        source: "?.a",
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
                        errors: {
                            code: "CHOICE_THRESHOLD_NOT_MET",
                            message: "Choice minimum of 2 not met",
                            source: "?.a",
                        },
                    },

                    "disallows one field": {
                        record: { test1: 1 },
                        errors: {
                            code: "CHOICE_THRESHOLD_NOT_MET",
                            message: "Choice minimum of 2 not met",
                            source: "?.a",
                        },
                    },

                    "disallows three fields": {
                        record: { test1: 1, test2: 2, test3: 3 },
                        errors: {
                            code: "CHOICE_THRESHOLD_EXCEEDED",
                            message: "Choice maximum of 2 exceeded",
                            source: "?.a",
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
                        errors: {
                            code: "CHOICE_THRESHOLD_NOT_MET",
                            message: "Choice minimum of 1 not met",
                            source: "?.a",
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

function validate({ fields, features }: ClusterStructure, { supports, record, errors }: Test) {
    if (!fields) {
        throw new Error("Validation attempt with no fields defined");
    }

    // Create definition errors
    if (errors && !Array.isArray(errors)) {
        errors = [errors];
    }
    const definitionErrors =
        errors &&
        errors.map(e => {
            // Shortcut for conformance errors
            if (e.conformance) {
                const fieldName = camelize(e.conformance.replace(/^.*\./, ""), false);
                return {
                    code: "CONFORMANCE_VIOLATION",
                    message: `Value of ${fieldName} is disallowed by conformance`,
                    source: e.conformance,
                };
            }

            return e;
        });

    // Create record validator
    const validator = RecordValidator(
        fields,
        features ?? new AttributeModel(Globals.FeatureMap),
        new FeatureSet(supports),
    );

    // Perform validation
    try {
        const result = validator.validate(record ?? {});
        expect(result.valid).toBe(!errors);
        expect(result.errors).toEqual(definitionErrors);
    } catch (e) {
        validator.logFailure();
        throw e;
    }
}

function test(description: string, what: Tests | Test, structure: ClusterStructure) {
    if (what.fields) {
        structure = { ...structure, fields: what.fields };
    }
    if (what.features) {
        structure = { ...structure, features: what.features };
    }

    if (what[NESTING]) {
        describe(description, () => {
            for (const k in what.entries) {
                test(k, what.entries[k], structure);
            }
        });
    } else {
        it(description, () => validate(structure, what));
    }
}

test("RecordValidator", AllTests, {});

type Fields = DatatypeModel[];
type Features = AttributeModel;

type ClusterStructure = {
    fields?: Fields;
    features?: Features;
};

type ErrorOptions = {
    code?: string;
    message?: string;
    source?: string;
    conformance?: string;
};

type Test = ClusterStructure & {
    [NESTING]?: false;
    supports?: FeatureSet.Definition;
    record?: Properties;
    errors?: ErrorOptions[] | ErrorOptions;
};

type Tests = ClusterStructure & {
    [NESTING]: true;
    entries: { [description: string]: Tests | Test };
};
