/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "@project-chip/matter.js/environment";
import { NodeJsEnvironment } from "./NodeJsEnvironment.js";

Environment.default = NodeJsEnvironment();
