/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ClassExtends } from "../util/Type.js";

type ErrorHandler<T, E extends Error> = (error: E) => T;

/**
 * Try to execute the code block and catch the error if it is of the given type.
 * If the error is of the given type, the fallback value or the result of the function is returned.
 * If the function returns undefined or the error type do not match, the error is normally thrown and not handled.
 *
 * @param codeBlock Code block to execute
 * @param errorType Errortype to catch and handle
 * @param fallbackValueOrFunction Fallback value or function to compute the fallback value
 */
export function tryCatch<T, E extends Error>(
    codeBlock: () => T,
    errorType: ClassExtends<E>,
    fallbackValueOrFunction: ErrorHandler<T, E> | T,
): T {
    try {
        return codeBlock();
    } catch (error) {
        if (error instanceof errorType) {
            if (typeof fallbackValueOrFunction === "function") {
                return (fallbackValueOrFunction as ErrorHandler<T, E>)(error);
            } else {
                return fallbackValueOrFunction;
            }
        }
        throw error;
    }
}

/**
 * Try to execute the async code block and catch the error if it is of the given type.
 * If the error is of the given type, the fallback value or the result of the function is returned.
 * If the function returns undefined or the error type do not match, the error is normally thrown and not handled.
 *
 * @param codeBlock Async code block to execute
 * @param errorType Errortype to catch and handle
 * @param fallbackValueOrFunction Fallback value or function to compute the fallback value
 */
export async function tryCatchAsync<T, E extends Error>(
    codeBlock: () => Promise<T>,
    errorType: ClassExtends<E>,
    fallbackValueOrFunction: ErrorHandler<Promise<T>, E> | T,
): Promise<T> {
    try {
        return await codeBlock();
    } catch (error) {
        if (error instanceof errorType) {
            if (typeof fallbackValueOrFunction === "function") {
                return await (fallbackValueOrFunction as ErrorHandler<Promise<T>, E>)(error);
            } else {
                return fallbackValueOrFunction;
            }
        }
        throw error;
    }
}
