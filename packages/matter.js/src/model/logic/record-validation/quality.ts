/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quality } from "../../aspects/index.js";
import { ValueModel } from "../../models/index.js";
import { type ValidatorBuilder } from "./ValidatorBuilder.js";

export function addQuality(builder: ValidatorBuilder, child: ValueModel, quality: Quality) {
    if (!quality.nullable) {
        builder.addTest(`v === null`, "NOT_NULLABLE_IS_NULL", child, "Field is null");
    }
}
