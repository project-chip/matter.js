/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "#models/ClusterModel.js";
import { DatatypeModel } from "#models/DatatypeModel.js";
import { ValueModel } from "#models/ValueModel.js";

/**
 * Here we use the term "schema" to mean any model element that defines a datatype.  For schema we allow any Matter
 * model that defines a datatype.
 *
 * Most schema is a {@link ValueModel} which explicitly models data. {@link ClusterModel} is also valid schema.
 *
 * You will see references to "structs" and "lists" throughout our code. These are Matter's two container types and map
 * to JS objects and arrays respectively.  Thus we tend to use struct/object and list/array interchangeably.
 *
 * If schema is a {@link ClusterModel}, it models a struct with attributes as fields.
 *
 * TODO - move to @matter/model
 */
export type Schema = ClusterModel | ValueModel;

export namespace Schema {
    export const empty = new DatatypeModel({ name: "Empty", type: "struct" });
}
