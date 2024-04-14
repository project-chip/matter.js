/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BitByteArray,
    ContextTagged,
    ContextTaggedBytes,
    DatatypeOverride,
    DerCodec,
    DerObject,
    DerType,
    ObjectId,
} from "../codec/DerCodec.js";
import { ByteArray } from "../util/ByteArray.js";
import { CertificateError } from "./CertificateManager.js";

export const PublicKeyEcPrime256v1_X962 = (key: ByteArray) => ({
    type: {
        algorithm: ObjectId("2A8648CE3D0201") /* EC Public Key */,
        curve: ObjectId("2A8648CE3D030107") /* Curve P256_V1 */,
    },
    bytes: BitByteArray(key),
});
export const EcdsaWithSHA256_X962 = DerObject("2A8648CE3D040302");
export const SHA256_CMS = DerObject("608648016503040201"); // 2.16.840.1.101.3.4.2.1
export const OrganisationName_X520 = (name: string) => [DerObject("55040A", { name })];
export const SubjectKeyIdentifier_X509 = (identifier: ByteArray) =>
    DerObject("551d0e", { value: DerCodec.encode(identifier) });
export const AuthorityKeyIdentifier_X509 = (identifier: ByteArray) =>
    DerObject("551d23", { value: DerCodec.encode({ id: ContextTaggedBytes(0, identifier) }) });
export const BasicConstraints_X509 = (constraints: any) => {
    const toEncode = { ...constraints };
    if (toEncode?.isCa === false) {
        // This is the default value, so we can remove it according to
        // https://datatracker.ietf.org/doc/html/rfc5280#appendix-B
        delete toEncode.isCa;
    }
    return DerObject("551d13", { critical: true, value: DerCodec.encode(toEncode) });
};
export const ExtendedKeyUsage_X509 = (values: number[] | undefined) => {
    if (values === undefined) {
        return undefined;
    }
    const data = {} as any;
    values.forEach(value => {
        switch (value) {
            case 1: // server Auth
                data.serverAuth = ObjectId("2b06010505070301");
                break;
            case 2: // client Auth
                data.clientAuth = ObjectId("2b06010505070302");
                break;
            case 3: // Code Signing
                data.codeSigning = ObjectId("2b06010505070303");
                break;
            case 4: // Email Protection
                data.emailProtection = ObjectId("2b06010505070304");
                break;
            case 5: // Time Stamping
                data.timeStamping = ObjectId("2b06010505070308");
                break;
            case 6: // OCSP Signing
                data.ocspSigning = ObjectId("2b06010505070309");
                break;
            default:
                throw new CertificateError(`Unsupported extended key usage value ${value}`);
        }
    });
    return DerObject("551d25", {
        critical: true,
        value: DerCodec.encode(data),
    });
};
export const KeyUsage_X509 = (value: number) => {
    return DerObject("551d0f", {
        critical: true,
        value: DerCodec.encode(DatatypeOverride(DerType.BitString, ByteArray.of(value))),
    });
};
export const Pkcs7Data = (data: any) => DerObject("2A864886F70D010701", { value: ContextTagged(0, data) });
export const Pkcs7SignedData = (data: any) => DerObject("2a864886f70d010702", { value: ContextTagged(0, data) });
