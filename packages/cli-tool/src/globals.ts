/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Domain } from "#domain.js";
import * as general from "#general";
import * as model from "#model";
import { Matter as matter } from "#model";
import * as node from "#node";
import * as protocol from "#protocol";
import * as tools from "#tools";
import * as types from "#types";

export interface DomainCommand {
    (domain: Domain, ...args: unknown[]): unknown;
    help(domain: Domain): void;
}

export const bin: Record<string, DomainCommand> = {};

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
