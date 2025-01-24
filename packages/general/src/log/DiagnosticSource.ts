/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "./Diagnostic.js";

const sources = new Set<Diagnostic>();

/**
 * Registry of diagnostic sources.
 */
export const DiagnosticSource = {
    add(source: Diagnostic) {
        sources.add(source);
    },

    delete(source: Diagnostic) {
        sources.delete(source);
    },

    get [Diagnostic.presentation]() {
        return Diagnostic.Presentation.List;
    },

    get [Diagnostic.value]() {
        return sources;
    },
};
