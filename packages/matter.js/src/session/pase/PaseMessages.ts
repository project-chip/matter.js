/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CRYPTO_HASH_LEN_BYTES, CRYPTO_PUBLIC_KEY_SIZE_BYTES } from "../../crypto/CryptoConstants.js";
import { MatterCoreSpecificationV1_0 } from "../../spec/Specifications.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/** @see {@link MatterCoreSpecificationV1_0} § 2.12.5 */
const TlvSedParameters = TlvObject({
    /** Maximum sleep interval of node when in idle mode. */
    idleRetransTimeoutMs: TlvOptionalField(1, TlvUInt32) /* default: 300ms */,

    /** Maximum sleep interval of node when in active mode. */
    activeRetransTimeoutMs: TlvOptionalField(2, TlvUInt32) /* default: 300ms */,
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.1.2 */
export const TlvPbkdfParamRequest = TlvObject({
    random: TlvField(1, TlvByteString.bound({ length: 32 })),
    sessionId: TlvField(2, TlvUInt16), // Specs: range: 16bits
    passcodeId: TlvField(3, TlvUInt16), // Specs: length: 16bits so min is 0x8000?
    hasPbkdfParameters: TlvField(4, TlvBoolean),
    mrpParameters: TlvOptionalField(5, TlvSedParameters),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.1.2 */
export const TlvPbkdfParamResponse = TlvObject({
    peerRandom: TlvField(1, TlvByteString.bound({ length: 32 })),
    random: TlvField(2, TlvByteString.bound({ length: 32 })),
    sessionId: TlvField(3, TlvUInt16),
    pbkdfParameters: TlvOptionalField(
        4,
        TlvObject({
            iterations: TlvField(1, TlvUInt32),
            salt: TlvField(2, TlvByteString.bound({ minLength: 16, maxLength: 32 })),
        }),
    ),
    mrpParameters: TlvOptionalField(5, TlvSedParameters),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.1.2 */
export const TlvPasePake1 = TlvObject({
    x: TlvField(1, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.1.2 */
export const TlvPasePake2 = TlvObject({
    y: TlvField(1, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
    verifier: TlvField(2, TlvByteString.bound({ length: CRYPTO_HASH_LEN_BYTES })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.1.2 */
export const TlvPasePake3 = TlvObject({
    verifier: TlvField(1, TlvByteString.bound({ length: CRYPTO_HASH_LEN_BYTES })),
});
