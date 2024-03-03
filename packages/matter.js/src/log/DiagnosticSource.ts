/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "./Diagnostic.js";

const sources = new Set<DiagnosticSource>();

/**
 * A source of diagnostic data.
 */
export interface DiagnosticSource {
    name: string;
    readonly [Diagnostic.value]: {};
}

/**
 * Registry of diagnostic sources.
 */
export const DiagnosticSource = {
    add(source: DiagnosticSource) {
        sources.add(source);
    },

    delete(source: DiagnosticSource) {
        sources.delete(source);
    },

    get [Diagnostic.presentation]() {
        return Diagnostic.Presentation.List;
    },

    get [Diagnostic.value]() {
        return [...sources].map(source => [Diagnostic.strong(source.name), source]);
    },
};
