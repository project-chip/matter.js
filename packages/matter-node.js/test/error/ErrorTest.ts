/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { MatterError } from "../../src/error/MatterError";
import { tryCatch, tryCatchAsync } from "../../src/error/TryCatchHandler";

class SubMatterError extends MatterError {}
class SubSubMatterError extends SubMatterError {}
class OtherMatterError extends MatterError {}

describe("Errors", () => {

    context("Test tryCatch method", () => {
        it("tryCatch without error return value", () => {
            const error = tryCatch((): string => {
                    return "ok";
                },
                MatterError, "caught"
            );

            assert.equal(error, "ok");
        });

        it("tryCatch with expected error, uses fallback value", () => {
            const error = tryCatch((): string => {
                    throw new SubMatterError("test");
                },
                SubMatterError, "caught"
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with unexpected error, throw error", () => {
            assert.throws(() => {
                tryCatch((): string => {
                        throw new Error("test");
                    },
                    SubMatterError, "caught");
            }, new Error("test"));
        });

        it("tryCatch with inherited error returns fallbackvalue", () => {
            const error = tryCatch((): string => {
                    throw new SubSubMatterError("test");
                },
                SubSubMatterError, "caught");

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", () => {
            const error = tryCatch((): string => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError, "caught"
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", () => {
            const error = tryCatch((): string => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError, (error) => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                }
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", () => {
            assert.throws(() => {
                tryCatch((): string => {
                        throw new SubSubMatterError("test");
                    },
                    SubMatterError, (error) => {
                        if (error instanceof OtherMatterError) {
                            return "caught";
                        } else {
                            throw error;
                        }
                    }
                );
            }, new SubSubMatterError("test"));
        });
    });

    context("Test tryCatchAsync method", () => {

        it("tryCatch without error return value", async () => {
            const error = await tryCatchAsync(async (): Promise<string> => {
                    return "ok";
                },
                MatterError, "caught"
            );

            assert.equal(error, "ok");
        });

        it("tryCatch with expected error, uses fallback value", async () => {
            const error = await tryCatchAsync(async (): Promise<string> => {
                    throw new SubMatterError("test");
                },
                SubMatterError, "caught"
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with unexpected error, throw error", async () => {
            assert.rejects(async () => {
                await tryCatchAsync(async (): Promise<string> => {
                        throw new Error("test");
                    },
                    SubMatterError, "caught"
                );
            }, new Error("test"));
        });

        it("tryCatch with inherited error returns fallback value", async () => {
            const error = await tryCatchAsync((): Promise<string> => {
                    throw new SubSubMatterError("test");
                },
                SubSubMatterError, "caught"
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error also return fallback when checking for parent error", async () => {
            const error = await tryCatchAsync(async (): Promise<string> => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError, "caught"
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error process error in handler function return dynamic fallback value", async () => {
            const error = await tryCatchAsync(async (): Promise<string> => {
                    throw new SubSubMatterError("test");
                },
                SubMatterError, (error) => {
                    if (error instanceof SubSubMatterError) {
                        return "caught";
                    }
                }
            );

            assert.equal(error, "caught");
        });

        it("tryCatch with inherited error process error in handler function that throws the error instead return valid value", async () => {
            await assert.rejects(async () => {
                await tryCatchAsync((): Promise<string> => {
                        throw new SubSubMatterError("test");
                    },
                    SubMatterError, (error) => {
                        if (error instanceof OtherMatterError) {
                            return "caught";
                        } else {
                            throw error;
                        }
                    }
                );
            }, new SubSubMatterError("test"));
        });
    });
});
