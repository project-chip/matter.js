/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { BitFlag, BitmapSchema, TypeFromPartialBitSchema } from "#types";

export const ExtensionKeyUsageBitmap = {
    digitalSignature: BitFlag(0),
    nonRepudiation: BitFlag(1),
    keyEncipherment: BitFlag(2),
    dataEncipherment: BitFlag(3),
    keyAgreement: BitFlag(4),
    keyCertSign: BitFlag(5),
    cRLSign: BitFlag(6),
    encipherOnly: BitFlag(7),
    decipherOnly: BitFlag(8),
};
export const ExtensionKeyUsageSchema = BitmapSchema(ExtensionKeyUsageBitmap);

export interface X509Certificate {
    serialNumber: Uint8Array;
    signatureAlgorithm: number;
    issuer: {};
    notBefore: number;
    notAfter: number;
    subject: {};
    publicKeyAlgorithm: number;
    ellipticCurveIdentifier: number;
    ellipticCurvePublicKey: Uint8Array;
    extensions: {
        basicConstraints: {
            isCa: boolean;
            pathLen?: number;
        };
        keyUsage: TypeFromPartialBitSchema<typeof ExtensionKeyUsageBitmap>;
        extendedKeyUsage?: number[];
        subjectKeyIdentifier: Uint8Array;
        authorityKeyIdentifier: Uint8Array;
        futureExtension?: Uint8Array[];
    };
    signature: Uint8Array;
}
