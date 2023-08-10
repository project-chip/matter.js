/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    CRYPTO_AEAD_MIC_LENGTH_BYTES,
    CRYPTO_GROUP_SIZE_BYTES,
    CRYPTO_HASH_LEN_BYTES,
    CRYPTO_PUBLIC_KEY_SIZE_BYTES,
} from "../../crypto/CryptoConstants.js";
import { MatterCoreSpecificationV1_0 } from "../../spec/Specifications.js";
import { TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { ByteArray } from "../../util/ByteArray.js";

const CASE_SIGNATURE_LENGTH = CRYPTO_GROUP_SIZE_BYTES * 2;

const CASE2_ENCRYPTED_LENGTH = 800 + CRYPTO_AEAD_MIC_LENGTH_BYTES + CASE_SIGNATURE_LENGTH; // NOC + ICAC + CASE-Sig + Mic

export const KDFSR1_KEY_INFO = ByteArray.fromString("Sigma1_Resume");
export const KDFSR2_KEY_INFO = ByteArray.fromString("Sigma2_Resume");
export const RESUME1_MIC_NONCE = ByteArray.fromString("NCASE_SigmaS1");
export const RESUME2_MIC_NONCE = ByteArray.fromString("NCASE_SigmaS2");
export const KDFSR2_INFO = ByteArray.fromString("Sigma2");
export const KDFSR3_INFO = ByteArray.fromString("Sigma3");
export const TBE_DATA2_NONCE = ByteArray.fromString("NCASE_Sigma2N");
export const TBE_DATA3_NONCE = ByteArray.fromString("NCASE_Sigma3N");

/** @see {@link MatterCoreSpecificationV1_0} § 2.12.5 */
const TlvSedParameters = TlvObject({
    /** Maximum sleep interval of node when in idle mode. */
    idleRetransTimeoutMs: TlvOptionalField(1, TlvUInt32) /* default: 300ms */,

    /** Maximum sleep interval of node when in active mode. */
    activeRetransTimeoutMs: TlvOptionalField(2, TlvUInt32) /* default: 300ms */,
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvCaseSigma1 = TlvObject({
    random: TlvField(1, TlvByteString.bound({ length: 32 })),
    sessionId: TlvField(2, TlvUInt16),
    destinationId: TlvField(3, TlvByteString.bound({ length: CRYPTO_HASH_LEN_BYTES })),
    ecdhPublicKey: TlvField(4, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
    mrpParams: TlvOptionalField(5, TlvSedParameters),
    resumptionId: TlvOptionalField(6, TlvByteString.bound({ length: 16 })),
    resumeMic: TlvOptionalField(7, TlvByteString.bound({ length: CRYPTO_AEAD_MIC_LENGTH_BYTES })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvCaseSigma2 = TlvObject({
    random: TlvField(1, TlvByteString.bound({ length: 32 })),
    sessionId: TlvField(2, TlvUInt16),
    ecdhPublicKey: TlvField(3, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
    encrypted: TlvField(4, TlvByteString.bound({ maxLength: CASE2_ENCRYPTED_LENGTH })),
    mrpParams: TlvOptionalField(5, TlvSedParameters),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvCaseSigma2Resume = TlvObject({
    resumptionId: TlvField(1, TlvByteString.bound({ length: 16 })),
    resumeMic: TlvField(2, TlvByteString.bound({ length: 16 })),
    sessionId: TlvField(3, TlvUInt16),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvCaseSigma3 = TlvObject({
    encrypted: TlvField(1, TlvByteString),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvSignedData = TlvObject({
    nodeOpCert: TlvField(1, TlvByteString),
    intermediateCACert: TlvOptionalField(2, TlvByteString),
    ecdhPublicKey: TlvField(3, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
    peerEcdhPublicKey: TlvField(4, TlvByteString.bound({ length: CRYPTO_PUBLIC_KEY_SIZE_BYTES })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvEncryptedDataSigma2 = TlvObject({
    nodeOpCert: TlvField(1, TlvByteString),
    intermediateCACert: TlvOptionalField(2, TlvByteString),
    signature: TlvField(3, TlvByteString.bound({ length: CASE_SIGNATURE_LENGTH })),
    resumptionId: TlvField(4, TlvByteString.bound({ length: 16 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 4.13.2.3 */
export const TlvEncryptedDataSigma3 = TlvObject({
    nodeOpCert: TlvField(1, TlvByteString),
    intermediateCACert: TlvOptionalField(2, TlvByteString),
    signature: TlvField(3, TlvByteString.bound({ length: CASE_SIGNATURE_LENGTH })),
});
