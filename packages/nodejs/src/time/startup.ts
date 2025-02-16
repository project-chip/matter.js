/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "#general";
import { uptime } from "node:os";

Time.startup.processMs = Math.floor(Time.nowMs() - process.uptime() * 1000);
Time.startup.systemMs = Math.floor(Time.nowMs() - uptime());
