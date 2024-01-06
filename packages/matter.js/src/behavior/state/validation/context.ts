/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../managed/Val.js";

/**
 * Contextual information tracked during validation.
 */
export interface ValidationContext {
    /**
     * To validate conformance and constraints we require access to sibling
     * values.  They are passed here when validating a record.
     */
    siblings?: Val.Struct;

    /**
     * Choice conformance requires context from the parent object.  This
     * context is passed here.
     */
    choices?: Record<string, ValidationContext.Choice>;
}

export namespace ValidationContext {
    /**
     * Details a conformance choice.  Used during conformance validation.
     */
    export interface Choice {
        count: number;
        target: number;
        orMore: boolean;
    }
}
