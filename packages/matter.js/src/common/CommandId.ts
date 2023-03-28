/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications";
import { TlvUInt32 } from "../tlv/TlvNumber";
import { TlvWrapper } from "../tlv/TlvWrapper";

/**
 * A Command ID is a 32 bit number and indicates a command defined in a cluster specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.18.2.18
 */
export class CommandId {
    constructor(
        readonly id: number
    ) { }
}

/** Tlv schema for an Command Id. */
export const TlvCommandId = new TlvWrapper<CommandId, number>(
    TlvUInt32,
    commandId => commandId.id,
    value => new CommandId(value),
);
