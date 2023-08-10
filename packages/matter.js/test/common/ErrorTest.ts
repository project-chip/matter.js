/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../src/common/MatterError.js";
import { tryCatch, tryCatchAsync } from "../../src/common/TryCatchHandler.js";

class SubMatterError extends MatterError {}
class SubSubMatterError extends SubMatterError {}
class OtherMatterError extends MatterError {}

describe("Errors", () => {
    describe("Test tryCatch method", () => {
        it("tryCatch without error return value", () => {
            const result = tryCatch(() => "ok", MatterError, "caught");

            expect(result).toBe("ok");
        });

        it("tryCatch with expected error, uses fallback value", () => {
            const result = tryCatch(
                () => {
                    throw new SubMatterError("test");
                },
                SubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with unexpected error, throw error", () => {
            expect(() =>
                tryCatch(
                    () => {
                        throw new Error("test");
                    },
                    SubMatterError,
                    "caught",
                ),
            ).toThrow(new Error("test"));
        });

        it("tryCatch with inherited error returns fallbackvalue", () => {
            const result = tryCatch(
                () => {
                    throw new SubSubMatterError("test");
                },
                SubSubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", () => {
            const result = tryCatch(
                () => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", () => {
            const result = tryCatch(
                () => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError,
                error => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                    throw error;
                },
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", () => {
            expect(() => {
                tryCatch(
                    () => {
                        throw new SubSubMatterError("test");
                    },
                    SubMatterError,
                    error => {
                        if (error instanceof OtherMatterError) {
                            return "caught";
                        }
                        throw error;
                    },
                );
            }).toThrow(new SubSubMatterError("test"));
        });
    });

    describe("Test tryCatchAsync method", () => {
        it("tryCatch without error return value", async () => {
            const result = await tryCatchAsync(async () => "ok", MatterError, "caught");

            expect(result).toBe("ok");
        });

        it("tryCatch with expected error, uses fallback value", async () => {
            const result = await tryCatchAsync(
                async () => {
                    throw new SubMatterError("test");
                },
                SubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with unexpected error, throw error", async () => {
            // change to expect().rejects.toThrow() when no longer using jasmine expect
            let error;
            try {
                await tryCatchAsync(
                    async () => {
                        throw new Error("test");
                    },
                    SubMatterError,
                    "caught",
                );
            } catch (e) {
                error = e;
            }
            expect(error).toEqual(new Error("test"));
        });

        it("tryCatch with inherited error returns fallback value", async () => {
            const result = await tryCatchAsync(
                () => {
                    throw new SubSubMatterError("test");
                },
                SubSubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", async () => {
            const result = await tryCatchAsync(
                async () => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError,
                "caught",
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", async () => {
            const result = await tryCatchAsync(
                async () => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError,
                async error => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                    throw error;
                },
            );

            expect(result).toBe("caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", async () => {
            // change to expect().rejects.toThrow() when no longer using jasmine expect
            let error;
            try {
                await tryCatchAsync(
                    () => {
                        throw new SubSubMatterError("test");
                    },
                    SubMatterError,
                    error => {
                        if (error instanceof OtherMatterError) {
                            return "caught";
                        }
                        throw error;
                    },
                );
            } catch (e) {
                error = e;
            }
            expect(error).toEqual(new SubSubMatterError("test"));
        });
    });
});
