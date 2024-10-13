/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import * as general from "#general";
import * as model from "#model";
import { Matter as matter } from "#model";
import * as node from "#node";
import * as protocol from "#protocol";
import * as tools from "#tools";
import * as types from "#types";

export type GlobalCommand = (this: Domain, ...args: unknown[]) => unknown;

export const bin: Record<string, GlobalCommand> = {};

export const globals: Record<string, unknown> = {
    general,
    tools,
    protocol,
    node,
    types,
    matter,
    model,
    bin,
};
