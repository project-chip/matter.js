/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ansi, Printer, screen } from "#tools";
import { FailureDetail } from "./failure-detail.js";
import { TextDiff } from "./text-diff.js";

const OUTER_PREFIX = `${ansi.red}▌ ${ansi.not.red}`;
const INNER_PREFIX = `${ansi.dim}┆ ${ansi.not.dim}`;

export namespace FailureReporter {
    export function report(out: Printer, failure: FailureDetail, title: string) {
        out.state({ style: ansi.reset.white.bg.red }, () => {
            out(screen.erase.toEol, "\n ", title, screen.erase.toEol, "\n", screen.erase.toEol, "\n");
        });

        out(screen.erase.toEol);

        out.state({ linePrefix: OUTER_PREFIX }, () => {
            dumpDetails(out, failure);
        });
    }
}

function dumpCause(out: Printer, failure: FailureDetail) {
    out.state({ linePrefix: INNER_PREFIX }, () => {
        dumpDetails(out, failure);
    });
}

function dumpDetails(out: Printer, { message, actual, expected, stack, cause, errors, logs }: FailureDetail) {
    out("\n", ansi.bright.red(message), "\n");

    if (actual !== undefined && expected !== undefined) {
        out("\n");
        out.state({ linePrefix: "    " }, () => out(TextDiff(actual, expected)));
        out("\n");
    }

    if (stack) {
        out("\n");
        out.state({ linePrefix: "  " }, () => out(stack));
        out("\n");
    }

    if (cause) {
        out("\n", ansi.bold("Caused by:"), "\n");
        dumpCause(out, cause);
    }

    if (errors?.length) {
        let num = 0;
        for (const cause of errors) {
            out("\n", ansi.bold(`Cause #${++num}:`), "\n");
            dumpCause(out, cause);
        }
    }

    if (logs) {
        out("\n", logs, "\n");
    }
}
