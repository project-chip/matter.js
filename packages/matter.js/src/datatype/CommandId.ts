/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Command ID is a 32 bit number and indicates a command defined in a cluster specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.18
 */
export type CommandId = Branded<number, "CommandId">;

export function CommandId(v: number): CommandId {
    return v as CommandId;
}

/** Tlv schema for an Command Id. */
export const TlvCommandId = new TlvWrapper<CommandId, number>(
    TlvUInt32,
    commandId => commandId,
    value => CommandId(value),
);
