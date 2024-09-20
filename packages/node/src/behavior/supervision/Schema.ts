/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, type ClusterModel, type ValueModel } from "#model";

/**
 * We model behavior using Matter semantics.  For schema we allow any Matter
 * model that defines a datatype.
 *
 * Most schema is a {@link ValueModel} which explicitly models data.
 * {@link ClusterModel} is also valid schema.
 *
 * You will see references to "structs" and "lists" throughout this code.
 * These are Matter's two container types and map to JS objects and arrays
 * respectively.
 *
 * If the schema is a {@link ClusterModel}, it models a struct with attributes
 * as fields.
 */
export type Schema = ClusterModel | ValueModel;

export namespace Schema {
    export const empty = new DatatypeModel({ name: "Empty", type: "struct" });
}
