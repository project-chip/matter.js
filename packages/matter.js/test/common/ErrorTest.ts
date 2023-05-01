/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { MatterError } from "../../src/common/MatterError.js";
import { tryCatch, tryCatchAsync } from "../../src/common/TryCatchHandler.js";

class SubMatterError extends MatterError { }
class SubSubMatterError extends SubMatterError { }
class OtherMatterError extends MatterError { }

describe("Errors", () => {

    describe("Test tryCatch method", () => {
        it("tryCatch without error return value", () => {
            const result = tryCatch(
                () => "ok",
                MatterError, "caught");

            assert.equal(result, "ok");
        });

        it("tryCatch with expected error, uses fallback value", () => {
            const result = tryCatch(
                () => { throw new SubMatterError("test") },
                SubMatterError, "caught");

            assert.equal(result, "caught");
        });

        it("tryCatch with unexpected error, throw error", () => {
            assert.throws(
                () => tryCatch(
                    () => { throw new Error("test") },
                    SubMatterError, "caught"
                ),
                Error, "test"
            );
        });

        it("tryCatch with inherited error returns fallbackvalue", () => {
            const result = tryCatch(
                () => { throw new SubSubMatterError("test") },
                SubSubMatterError, "caught");

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", () => {
            const result = tryCatch(
                () => { throw new SubSubMatterError("test") },
                SubMatterError, "caught");

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", () => {
            const result = tryCatch(
                () => { throw new SubSubMatterError("test") },
                SubMatterError, error => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                    throw error;
                }
            );

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", () => {
            assert.throws(() => {
                tryCatch(
                    () => { throw new SubSubMatterError("test") },
                    SubMatterError, error => {
                        if (error instanceof OtherMatterError) {
                            return "caught";
                        }
                        throw error;
                    }
                );
            },
                SubSubMatterError, "test"
            );
        });
    });

    describe("Test tryCatchAsync method", () => {

        it("tryCatch without error return value", async () => {
            const result = await tryCatchAsync(
                async () => "ok",
                MatterError, "caught",
            );

            assert.equal(result, "ok");
        });

        it("tryCatch with expected error, uses fallback value", async () => {
            const result = await tryCatchAsync(
                async () => { throw new SubMatterError("test") },
                SubMatterError, "caught"
            );

            assert.equal(result, "caught");
        });

        it("tryCatch with unexpected error, throw error", async () => {
            await assert.rejects(
                async () => tryCatchAsync(
                    async () => { throw new Error("test") },
                    SubMatterError, "caught"
                ),
                Error, "test"
            );
        });

        it("tryCatch with inherited error returns fallback value", async () => {
            const result = await tryCatchAsync(
                () => { throw new SubSubMatterError("test") },
                SubSubMatterError, "caught"
            );

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", async () => {
            const result = await tryCatchAsync(
                async () => { throw new SubSubMatterError("test") },
                SubMatterError, "caught"
            );

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", async () => {
            const result = await tryCatchAsync(
                async () => { throw new SubSubMatterError("test") },
                SubMatterError, error => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                    throw error;
                }
            );

            assert.equal(result, "caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", async () => {
            await assert.rejects(async () => await tryCatchAsync(
                () => { throw new SubSubMatterError("test") },
                SubMatterError, error => {
                    if (error instanceof OtherMatterError) {
                        return "caught";
                    }
                    throw error;
                }),
                SubSubMatterError, "test"
            );
        });
    });
});
