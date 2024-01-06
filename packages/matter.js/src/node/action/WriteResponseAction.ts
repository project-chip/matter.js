/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributePayload } from "../payloads/AttributePayload.js";

/**
 * Informs invoker of result of attribute modification.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.7.3
 */
export type WriteResponseAction = {
    responses: AttributePayload.Response;
    suppressResponse?: boolean;
    timedRequest?: boolean;
};
