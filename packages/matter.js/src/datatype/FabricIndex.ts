/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
 * fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
 * of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
 * fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
 * a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
 * (zero) or null.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.5.2
 */
export class FabricIndex {
    static NO_FABRIC = new FabricIndex(0);

    constructor(
        readonly index: number,
    ) { }
}

/** Tlv Schema for a Fabric Index. */
export const TlvFabricIndex = new TlvWrapper<FabricIndex, number>(
    TlvUInt8.bound({ min: 0, max: 254 }),
    farbricIndex => farbricIndex.index,
    value => value === 0 ? FabricIndex.NO_FABRIC : new FabricIndex(value),
);
