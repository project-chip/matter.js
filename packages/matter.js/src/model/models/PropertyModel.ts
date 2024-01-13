/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "./ValueModel.js";

/**
 * This is the base class for fields and attributes, both of which define
 * subvalues of logical structs.
 */
export abstract class PropertyModel extends ValueModel {
    abstract isGlobalAttribute: boolean;
}
