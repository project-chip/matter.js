/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError, MatterError } from "#MatterError.js";
import "../src/log/LogFormat.js";

function errorFrame0() {
    const error = new MatterError("oopsy!");
    error.cause = new MatterAggregateError(
        [new Error("a problem"), new MatterError("another problem")],
        "some details",
    );
    (error.cause as AggregateError).errors[0].cause = new Error("your mom");
    throw error;
}

function errorFrame1() {
    try {
        errorFrame0();
    } catch (e) {
        if (e instanceof MatterError) {
            return e;
        }

        // Impossible
        const error = new MatterError("Umm, error not a MatterError??");
        error.cause = e;
        return error;
    }

    // Impossible
    return new MatterError("Umm, failed to throw??");
}

// This is the error we're going to test.  We create a couple of functions deep so we can ensure there are common stack
// frames in all environments
const error = errorFrame1();

function assertExpectedText(text: string, { truncatedStack, ansi }: { truncatedStack?: boolean; ansi?: boolean } = {}) {
    try {
        const iterator = text.split("\n")[Symbol.iterator]();

        let current = iterator.next().value;

        let stackShouldTruncate = false;

        function next() {
            current = iterator.next().value;
        }

        function expectMessage(text: string, indents = 0) {
            let prefix = " ".repeat(indents * 2);
            if (ansi) {
                prefix += "\x1b\\[(?:0;)?31m";
            }
            expect(current).match(new RegExp(`${prefix}${text}`));
            next();
        }

        function expectStack(indents = 0, withReset = false) {
            const indent = " ".repeat(2 + indents * 2);
            const frameMarker = ansi
                ? new RegExp(`^${indent}(?:\x1b\\[2;39m)?at \x1b\\[0m`)
                : new RegExp(`^${indent}at `);
            const reset = ansi && withReset ? "\x1b[0m" : "";

            expect(current).match(frameMarker);
            next();

            while (current?.match(frameMarker)) {
                next();
            }

            if (stackShouldTruncate) {
                expect(current).equals(`${indent}(see parent frames)${reset}`);
                next();
            }
        }

        expectMessage("oopsy!");
        expectStack();
        stackShouldTruncate = truncatedStack !== false;
        expectMessage("Caused by: some details");
        expectStack();
        expectMessage("Cause #0: a problem", 1);
        expectStack(1);
        expectMessage("Caused by: your mom", 1);
        expectStack(1);
        expectMessage("Cause #1: another problem", 1);
        expectStack(1, true);
        expect(current).undefined;
    } catch (e) {
        console.log("Failing formatted error follows");
        console.log(text);
        throw e;
    }
}

describe("MatterError", () => {
    it("formats plain", () => {
        assertExpectedText(error.format());
    });

    it("formats ansi", () => {
        assertExpectedText(error.format("ansi"), { ansi: true });
    });

    it("formats fallback", () => {
        const originalFormatter = MatterError.formatterFor;
        try {
            (MatterError as any).formatterFor = undefined;
            assertExpectedText(error.format(), { truncatedStack: false });
        } finally {
            MatterError.formatterFor = originalFormatter;
        }
    });
});
