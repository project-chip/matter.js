/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../common/MatterError.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A CASE Authenticated Tag (CAT) is a special subject distinguished name within the Operational Certificate.
 *
 * @see {@link MatterCoreSpecificationV1_2} § 6.6.2.1.2.
 */
export type CaseAuthenticatedTag = Branded<number, "CaseAuthenticatedTag">;

export function CaseAuthenticatedTag(id: number): CaseAuthenticatedTag {
    return id as CaseAuthenticatedTag;
}

export namespace CaseAuthenticatedTag {
    export const getIdentifyValue = (tag: CaseAuthenticatedTag) => tag >>> 16;

    export const getVersion = (tag: CaseAuthenticatedTag) => tag & 0xffff;

    export const increaseVersion = (tag: CaseAuthenticatedTag) => {
        const version = getVersion(tag);
        if (version > 0xffff) {
            throw new ValidationError("CaseAuthenticatedTag version number must not exceed 0xffff.");
        }
        return tag + 1;
    };
}

/** Tlv schema for an CASE Authenticated Tag. */
class TlvCaseAuthenticatedTagSchema extends TlvWrapper<CaseAuthenticatedTag, number> {
    constructor() {
        super(
            TlvUInt32,
            caseAuthenticatedTag => caseAuthenticatedTag,
            value => CaseAuthenticatedTag(value),
        );
    }

    override validate(value: CaseAuthenticatedTag) {
        super.validate(value);

        // verify that lower 16 bit are not 0
        if ((value & 0xffff) === 0) {
            throw new ValidationError("CaseAuthenticatedTag version number must not be 0.");
        }
    }
}

export const TlvCaseAuthenticatedTag = new TlvCaseAuthenticatedTagSchema();
