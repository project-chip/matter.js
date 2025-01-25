/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";

export interface FailureDetail {
    message: string;
    stack?: string;
    diff?: string;
    logs?: string;
    cause?: FailureDetail;
    errors?: FailureDetail[];
}

export function FailureDetail(error: any, logs?: string[]) {
    let diff: string | undefined;

    const { message, stack, cause, errors } = parseError(error);

    if (error.expected && error.actual) {
        if (FailureDetail.diff === undefined) {
            diff = "(no diff implementation installed)";
        } else {
            diff = FailureDetail.diff(error.actual.toString(), error.expected.toString());
            diff = diff.trim().replace(/^ {6}/gm, "");
        }
    }

    const result = { message } as FailureDetail;
    if (diff) {
        result.diff = diff;
    }
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

    return result;
}

export namespace FailureDetail {
    export function dump(failure: FailureDetail, prefix: string = "") {
        process.stdout.write(colors.redBright(`${prefix}${failure.message}\n\n`));

        if (failure.diff) {
            process.stdout.write(`${prefix}    ${failure.diff.replace(/\n/g, "\n      ")}\n\n`);
        }

        if (failure.stack) {
            process.stdout.write(`${prefix}${colors.dim(failure.stack.replace(/\n/g, `\n${prefix}`))}\n\n`);
        }

        if (failure.cause) {
            process.stdout.write(`${prefix}Caused by:\n\n`);
            dump(failure.cause, prefix);
        }

        if (failure.errors?.length) {
            let num = 0;
            for (const cause of failure.errors) {
                process.stdout.write(`${prefix}Cause #${++num}:\n\n`);
                dump(cause, `${prefix}  `);
            }
        }

        if (failure.logs) {
            process.stdout.write(`  ${failure.logs.replace(/\n/g, "\n  ")}\n\n`);
        }
    }

    export let diff: undefined | ((actual: string, expected: string) => string);
}

function parseError(error: Error) {
    let message, stack, cause: FailureDetail | undefined, errors: FailureDetail[] | undefined;

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
    } else if (error.message) {
        message = error.message;
    } else {
        message = error.toString();
    }

    message = message.trim().replace(/Error: /, "");

    if (message.endsWith(":")) {
        message = message.slice(0, message.length - 1);
    }

    const errorCause = error.cause;
    if (errorCause) {
        cause = FailureDetail(errorCause);
    }

    const errorErrors = (error as AggregateError).errors;
    if (Array.isArray(errorErrors)) {
        errors = errorErrors.map(e => FailureDetail(e));
    }

    return { message, stack, cause, errors };
}
