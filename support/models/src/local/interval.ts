/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Metatype } from "@matter/model";
import { LocalMatter } from "../local.js";

// Matter does not formally define an interval type but matter.js uses it for some fields
LocalMatter.children.push({
    tag: "datatype",
    name: "interval",
    metatype: Metatype.interval,
    description: "A datatype that represents an arbitrary time interval.",
    details: "This is a matter.js extension to Matter semantics.",
});
