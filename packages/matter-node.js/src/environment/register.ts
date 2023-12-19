/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "../exports/common.js";
import { NodeJsEnvironment } from "./NodeJsEnvironment.js";

Environment.default = new NodeJsEnvironment();
