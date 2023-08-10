/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize, capitalize } from "../../src/util/String.js";

const CAMELIZE_TESTS = {
    foo: "Foo",
    "foo bar": "FooBar",
    FOOBar: "FooBar",
    "foo/bar": "FooBar",
    FooBar: "FooBar",
    "foo bar biz baz": "FooBarBizBaz",
    foo100bar: "Foo100Bar",
    "Wake On LAN": "WakeOnLan",
};

describe("String", () => {
    describe("capitalize", () => {
        it("capitalizes", () => {
            expect(capitalize("foo")).toBe("Foo");
        });
    });

    describe("camelize", () => {
        for (const [k, v] of Object.entries(CAMELIZE_TESTS)) {
            it(`camelizes "${k}"`, () => {
                expect(camelize(k)).toBe(v);
            });
        }

        it(`camelizes lowercase`, () => {
            expect(camelize("Foo", false)).toBe("foo");
        });
    });
});
