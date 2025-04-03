/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FailureDetail {
    message: string;
    stack?: string;
    stackLines?: string[];
    actual?: string;
    expected?: string;
    logs?: string;
    cause?: FailureDetail;
    errors?: FailureDetail[];
}

/**
 * Captures all pertinent information about a failed test.
 */
export function FailureDetail(error: any, logs?: string[], parentStack?: string[]) {
    const { message, stack, stackLines, cause, errors } = parseError(error, parentStack);
    const result = { message } as FailureDetail;

    if (stack) {
        result.stack = stack;
    }
    if (logs?.length) {
        result.logs = logs.join("\n");
    }
    if (cause) {
        result.cause = cause;
    }
    if (errors) {
        result.errors = errors;
    }
    if (stackLines) {
        result.stackLines = stackLines;
    }

    const { actual, expected } = error;
    if (actual) {
        result.actual = actual;
    }
    if (expected) {
        result.expected = expected;
    }

    return result;
}

function messageAndStackFor(
    error: Error,
    parentStack?: string[],
): { message: string; stack?: string; stackLines?: string[] } {
    // If an error formatting hook is installed, use that
    if (MatterHooks?.messageAndStackFor) {
        return MatterHooks.messageAndStackFor(error, parentStack);
    }

    // Fallback message formatting
    let message, stack;
    if (error === undefined || error === null) {
        message = `(error is ${error})`;
    } else {
        message = error.message;
    }

    if (error.stack) {
        let lines = error.stack.trim().split("\n");
        if (!message) {
            message = lines[0];
        }
        lines = lines.filter(line => line.match(/:\d+:\d+\)?/));
        if (lines.length) {
            stack = lines.map(line => line.trim()).join("\n");
        }
    }

    if (!message) {
        message = error.toString();
    }

    return { message, stack };
}

function parseError(error: Error, parentStack?: string[]) {
    const { message, stack, stackLines } = messageAndStackFor(error, parentStack);

    let cause: FailureDetail | undefined, errors: FailureDetail[] | undefined;

    const errorCause = error.cause;
    if (errorCause) {
        cause = FailureDetail(errorCause, undefined, stackLines);
    }

    const errorErrors = (error as AggregateError).errors;
    if (Array.isArray(errorErrors)) {
        errors = errorErrors.map(e => FailureDetail(e, undefined, stackLines));
    }

    return { message, stack, stackLines, cause, errors };
}
