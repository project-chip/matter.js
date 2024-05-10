/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "datatype",
    name: "subject-id",
    type: "uint64",
    description: "A subject granted privileges to interact with a node.",
    details:
        "The Matter specifications do not define this formally as a global but the core specification references it (as subject-id or SubjectID) from a number of different clusters.",
});
