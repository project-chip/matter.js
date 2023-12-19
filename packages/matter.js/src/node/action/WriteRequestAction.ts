/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributePayload } from "../payloads/AttributePayload.js";

/**
 * Initiates attribute modification.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.7.2
 */
export type WriteRequestAction = {
    attributes: AttributePayload.Write[];
    timedRequest?: boolean;
    suppressResponse?: boolean;
};
