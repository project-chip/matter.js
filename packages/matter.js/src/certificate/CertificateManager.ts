/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AuthorityKeyIdentifier_X509,
    BasicConstraints_X509,
    BitByteArray,
    BYTES_KEY,
    ContextTagged,
    ContextTaggedBytes,
    DerCodec,
    DerObject,
    EcdsaWithSHA256_X962,
    ELEMENTS_KEY,
    ExtendedKeyUsage_X509,
    KeyUsage_Signature_ContentCommited_X509,
    KeyUsage_Signature_X509,
    OBJECT_ID_KEY,
    OrganisationName_X520,
    Pkcs7Data,
    Pkcs7SignedData,
    PublicKeyEcPrime256v1_X962,
    SHA256_CMS,
    SubjectKeyIdentifier_X509,
} from "../codec/DerCodec.js";
import { MatterError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { Key, PublicKey } from "../crypto/Key.js";
import { FabricId, TlvFabricId } from "../datatype/FabricId.js";
import { NodeId, TlvNodeId } from "../datatype/NodeId.js";
import { TlvVendorId, VendorId } from "../datatype/VendorId.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvUInt16, TlvUInt32, TlvUInt64, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvField, TlvList, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvByteString, TlvString } from "../tlv/TlvString.js";
import { ByteArray } from "../util/ByteArray.js";

export class CertificateError extends MatterError {}

const YEAR_S = 365 * 24 * 60 * 60;
const EPOCH_OFFSET_S = 10957 * 24 * 60 * 60;

// TODO replace usage of Date by abstraction

export function matterToJsDate(date: number) {
    return new Date((date + EPOCH_OFFSET_S) * 1000);
}

export function jsToMatterDate(date: Date, addYears = 0) {
    return Math.floor(date.getTime() / 1000) - EPOCH_OFFSET_S + addYears * YEAR_S;
}

function intTo16Chars(value: bigint | number) {
    const byteArray = new ByteArray(8);
    const dataView = byteArray.getDataView();
    dataView.setBigUint64(0, typeof value === "bigint" ? value : BigInt(value));
    return byteArray.toHex().toUpperCase();
}

function uInt16To4Chars(value: number) {
    const byteArray = new ByteArray(2);
    const dataView = byteArray.getDataView();
    dataView.setUint16(0, value);
    return byteArray.toHex().toUpperCase();
}

/** commonName = ASN.1 OID 2.5.4.3 */
export const CommonName_X520 = (name: string) => [DerObject("550403", { value: name })];

/** matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1 */
export const NodeId_Matter = (nodeId: NodeId) => [DerObject("2b0601040182a27c0101", { value: intTo16Chars(nodeId) })];

/** matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4 */
export const RcacId_Matter = (id: bigint | number) => [DerObject("2b0601040182a27c0104", { value: intTo16Chars(id) })];

/** matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5 */
export const FabricId_Matter = (id: FabricId) => [DerObject("2b0601040182a27c0105", { value: intTo16Chars(id) })];

/** matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1 */
export const VendorId_Matter = (vendorId: VendorId) => [
    DerObject("2b0601040182a27c0201", { value: uInt16To4Chars(vendorId) }),
];

/** matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.3724 4.2.2 */
export const ProductId_Matter = (id: number) => [DerObject("2b0601040182a27c0202", { value: uInt16To4Chars(id) })];

export const TlvRootCertificate = TlvObject({
    serialNumber: TlvField(1, TlvByteString.bound({ maxLength: 20 })),
    signatureAlgorithm: TlvField(2, TlvUInt8),
    issuer: TlvField(
        3,
        TlvList({
            issuerRcacId: TlvOptionalField(20, TlvUInt64),
        }),
    ),
    notBefore: TlvField(4, TlvUInt32),
    notAfter: TlvField(5, TlvUInt32),
    subject: TlvField(
        6,
        TlvList({
            rcacId: TlvField(20, TlvUInt64),
        }),
    ),
    publicKeyAlgorithm: TlvField(7, TlvUInt8),
    ellipticCurveIdentifier: TlvField(8, TlvUInt8),
    ellipticCurvePublicKey: TlvField(9, TlvByteString),
    extensions: TlvField(
        10,
        TlvList({
            basicConstraints: TlvField(
                1,
                TlvObject({
                    isCa: TlvField(1, TlvBoolean),
                    pathLen: TlvOptionalField(2, TlvUInt8),
                }),
            ),
            keyUsage: TlvField(2, TlvUInt16),
            extendedKeyUsage: TlvOptionalField(3, TlvArray(TlvUInt8)),
            subjectKeyIdentifier: TlvField(4, TlvByteString.bound({ length: 20 })),
            authorityKeyIdentifier: TlvField(5, TlvByteString.bound({ length: 20 })),
            futureExtension: TlvOptionalField(6, TlvByteString),
        }),
    ),
    signature: TlvField(11, TlvByteString),
});

export const TlvOperationalCertificate = TlvObject({
    serialNumber: TlvField(1, TlvByteString.bound({ maxLength: 20 })),
    signatureAlgorithm: TlvField(2, TlvUInt8),
    issuer: TlvField(
        3,
        TlvList({
            issuerRcacId: TlvOptionalField(20, TlvUInt64),
        }),
    ),
    notBefore: TlvField(4, TlvUInt32),
    notAfter: TlvField(5, TlvUInt32),
    subject: TlvField(
        6,
        TlvList({
            fabricId: TlvField(21, TlvFabricId),
            nodeId: TlvField(17, TlvNodeId),
        }),
    ),
    publicKeyAlgorithm: TlvField(7, TlvUInt8),
    ellipticCurveIdentifier: TlvField(8, TlvUInt8),
    ellipticCurvePublicKey: TlvField(9, TlvByteString),
    extensions: TlvField(
        10,
        TlvList({
            basicConstraints: TlvField(
                1,
                TlvObject({
                    isCa: TlvField(1, TlvBoolean),
                    pathLen: TlvOptionalField(2, TlvUInt8),
                }),
            ),
            keyUsage: TlvField(2, TlvUInt16),
            extendedKeyUsage: TlvOptionalField(3, TlvArray(TlvUInt8)),
            subjectKeyIdentifier: TlvField(4, TlvByteString.bound({ length: 20 })),
            authorityKeyIdentifier: TlvField(5, TlvByteString.bound({ length: 20 })),
            futureExtension: TlvOptionalField(6, TlvByteString),
        }),
    ),
    signature: TlvField(11, TlvByteString),
});

export interface DeviceAttestationCertificate {
    serialNumber: ByteArray;
    signatureAlgorithm: number;
    issuer: {
        commonName: string;
        productId?: number;
        vendorId: VendorId;
    };
    notBefore: number;
    notAfter: number;
    subject: {
        commonName: string;
        productId: number;
        vendorId: VendorId;
    };
    publicKeyAlgorithm: number;
    ellipticCurveIdentifier: number;
    ellipticCurvePublicKey: ByteArray;
    extensions: {
        basicConstraints: {
            isCa: boolean;
            pathLen?: number;
        };
        keyUsage: number;
        extendedKeyUsage?: number[];
        subjectKeyIdentifier: ByteArray;
        authorityKeyIdentifier: ByteArray;
        futureExtension?: ByteArray;
    };
    signature: ByteArray;
}

export interface ProductAttestationIntermediateCertificate {
    serialNumber: ByteArray;
    signatureAlgorithm: number;
    issuer: {
        commonName: string;
        vendorId?: VendorId;
    };
    notBefore: number;
    notAfter: number;
    subject: {
        commonName: string;
        productId?: number;
        vendorId: VendorId;
    };
    publicKeyAlgorithm: number;
    ellipticCurveIdentifier: number;
    ellipticCurvePublicKey: ByteArray;
    extensions: {
        basicConstraints: {
            isCa: boolean;
            pathLen?: number;
        };
        keyUsage: number;
        extendedKeyUsage?: number[];
        subjectKeyIdentifier: ByteArray;
        authorityKeyIdentifier: ByteArray;
        futureExtension?: ByteArray;
    };
    signature: ByteArray;
}

export interface ProductAttestationAuthorityCertificate {
    serialNumber: ByteArray;
    signatureAlgorithm: number;
    issuer: {
        commonName: string;
        vendorId?: VendorId;
    };
    notBefore: number;
    notAfter: number;
    subject: {
        commonName: string;
        vendorId?: VendorId;
    };
    publicKeyAlgorithm: number;
    ellipticCurveIdentifier: number;
    ellipticCurvePublicKey: ByteArray;
    extensions: {
        basicConstraints: {
            isCa: boolean;
            pathLen?: number;
        };
        keyUsage: number;
        extendedKeyUsage?: number[];
        subjectKeyIdentifier: ByteArray;
        authorityKeyIdentifier?: ByteArray;
        futureExtension?: ByteArray;
    };
    signature: ByteArray;
}

export const TlvCertificationDeclaration = TlvObject({
    formatVersion: TlvField(0, TlvUInt16),
    vendorId: TlvField(1, TlvVendorId),
    produceIdArray: TlvField(2, TlvArray(TlvUInt16, { minLength: 1, maxLength: 100 })),
    deviceTypeId: TlvField(3, TlvUInt32),
    certificateId: TlvField(4, TlvString.bound({ length: 19 })),
    securityLevel: TlvField(5, TlvUInt8),
    securityInformation: TlvField(6, TlvUInt16),
    versionNumber: TlvField(7, TlvUInt16),
    certificationType: TlvField(8, TlvUInt8),
    dacOriginVendorId: TlvOptionalField(9, TlvVendorId),
    dacOriginProductId: TlvOptionalField(10, TlvUInt16),
    authorizedPaaList: TlvOptionalField(
        11,
        TlvArray(TlvByteString.bound({ length: 20 }), { minLength: 1, maxLength: 10 }),
    ),
});

export type RootCertificate = TypeFromSchema<typeof TlvRootCertificate>;
export type OperationalCertificate = TypeFromSchema<typeof TlvOperationalCertificate>;
type Unsigned<Type> = { [Property in keyof Type as Exclude<Property, "signature">]: Type[Property] };

export class CertificateManager {
    static rootCertToAsn1({
        serialNumber,
        notBefore,
        notAfter,
        issuer: { issuerRcacId },
        subject: { rcacId },
        ellipticCurvePublicKey,
        extensions: { subjectKeyIdentifier, authorityKeyIdentifier },
    }: Unsigned<RootCertificate>) {
        return DerCodec.encode({
            version: ContextTagged(0, 2),
            serialNumber: serialNumber[0],
            signatureAlgorithm: EcdsaWithSHA256_X962,
            issuer: {
                issuerRcacId: issuerRcacId === undefined ? undefined : RcacId_Matter(issuerRcacId),
            },
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: {
                rcacId: RcacId_Matter(rcacId),
            },
            publicKey: PublicKeyEcPrime256v1_X962(ellipticCurvePublicKey),
            extensions: ContextTagged(3, {
                basicConstraints: BasicConstraints_X509({ isCa: true }),
                keyUsage: KeyUsage_Signature_ContentCommited_X509,
                subjectKeyIdentifier: SubjectKeyIdentifier_X509(subjectKeyIdentifier),
                authorityKeyIdentifier: AuthorityKeyIdentifier_X509(authorityKeyIdentifier),
            }),
        });
    }

    static nocCertToAsn1({
        serialNumber,
        notBefore,
        notAfter,
        issuer: { issuerRcacId },
        subject: { fabricId, nodeId },
        ellipticCurvePublicKey,
        extensions: { subjectKeyIdentifier, authorityKeyIdentifier },
    }: Unsigned<OperationalCertificate>) {
        return DerCodec.encode({
            version: ContextTagged(0, 2),
            serialNumber: serialNumber[0],
            signatureAlgorithm: EcdsaWithSHA256_X962,
            issuer: {
                issuerRcacId: issuerRcacId === undefined ? undefined : RcacId_Matter(issuerRcacId),
            },
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: {
                fabricId: FabricId_Matter(fabricId),
                nodeId: NodeId_Matter(NodeId(nodeId)),
            },
            publicKey: PublicKeyEcPrime256v1_X962(ellipticCurvePublicKey),
            extensions: ContextTagged(3, {
                basicConstraints: BasicConstraints_X509({}),
                keyUsage: KeyUsage_Signature_X509,
                extendedKeyUsage: ExtendedKeyUsage_X509({ serverAuth: true, clientAuth: true }),
                subjectKeyIdentifier: SubjectKeyIdentifier_X509(subjectKeyIdentifier),
                authorityKeyIdentifier: AuthorityKeyIdentifier_X509(authorityKeyIdentifier),
            }),
        });
    }

    static daCertToAsn1(
        {
            serialNumber,
            notBefore,
            notAfter,
            issuer: { commonName: issuerCommonName, vendorId: issuerVendorId },
            subject: { commonName: subjectCommonName, vendorId: subjectVendorId, productId: subjectProductId },
            ellipticCurvePublicKey,
            extensions: { subjectKeyIdentifier, authorityKeyIdentifier },
        }: Unsigned<DeviceAttestationCertificate>,
        key: Key,
    ) {
        const certificate = {
            version: ContextTagged(0, 2),
            serialNumber: serialNumber[0],
            signatureAlgorithm: EcdsaWithSHA256_X962,
            issuer: {
                commonName: CommonName_X520(issuerCommonName),
                vendorId: VendorId_Matter(issuerVendorId),
            },
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: {
                commonName: CommonName_X520(subjectCommonName),
                vendorId: VendorId_Matter(subjectVendorId),
                productId: ProductId_Matter(subjectProductId),
            },
            publicKey: PublicKeyEcPrime256v1_X962(ellipticCurvePublicKey),
            extensions: ContextTagged(3, {
                basicConstraints: BasicConstraints_X509({
                    isCa: false,
                }),
                keyUsage: KeyUsage_Signature_X509,
                subjectKeyIdentifier: SubjectKeyIdentifier_X509(subjectKeyIdentifier),
                authorityKeyIdentifier: AuthorityKeyIdentifier_X509(authorityKeyIdentifier),
            }),
        };
        return DerCodec.encode({
            certificate,
            signAlgorithm: EcdsaWithSHA256_X962,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
    }

    static paiCertToAsn1(
        {
            serialNumber,
            notBefore,
            notAfter,
            issuer: { commonName: issuerCommonName, vendorId: issuerVendorId },
            subject: { commonName, vendorId, productId },
            ellipticCurvePublicKey,
            extensions: { subjectKeyIdentifier, authorityKeyIdentifier },
        }: Unsigned<ProductAttestationIntermediateCertificate>,
        key: Key,
    ) {
        const certificate = {
            version: ContextTagged(0, 2),
            serialNumber: serialNumber[0],
            signatureAlgorithm: EcdsaWithSHA256_X962,
            issuer: {
                commonName: CommonName_X520(issuerCommonName),
                vendorId: issuerVendorId === undefined ? undefined : VendorId_Matter(issuerVendorId),
            },
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: {
                commonName: CommonName_X520(commonName),
                vendorId: VendorId_Matter(vendorId),
                productId: productId === undefined ? undefined : ProductId_Matter(productId),
            },
            publicKey: PublicKeyEcPrime256v1_X962(ellipticCurvePublicKey),
            extensions: ContextTagged(3, {
                basicConstraints: BasicConstraints_X509({
                    isCa: true,
                    pathLen: 0,
                }),
                keyUsage: KeyUsage_Signature_ContentCommited_X509,
                subjectKeyIdentifier: SubjectKeyIdentifier_X509(subjectKeyIdentifier),
                authorityKeyIdentifier: AuthorityKeyIdentifier_X509(authorityKeyIdentifier),
            }),
        };
        return DerCodec.encode({
            certificate,
            signAlgorithm: EcdsaWithSHA256_X962,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
    }

    static paaCertToAsn1(
        {
            serialNumber,
            notBefore,
            notAfter,
            issuer: { commonName: issuerCommonName, vendorId: issuerVendorId },
            subject: { commonName, vendorId },
            ellipticCurvePublicKey,
            extensions: { subjectKeyIdentifier, authorityKeyIdentifier },
        }: Unsigned<ProductAttestationAuthorityCertificate>,
        key: Key,
    ) {
        const certificate = {
            version: ContextTagged(0, 2),
            serialNumber: serialNumber[0],
            signatureAlgorithm: EcdsaWithSHA256_X962,
            issuer: {
                commonName: CommonName_X520(issuerCommonName),
                vendorId: issuerVendorId === undefined ? undefined : VendorId_Matter(issuerVendorId),
            },
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: {
                commonName: CommonName_X520(commonName),
                vendorId: vendorId === undefined ? undefined : VendorId_Matter(vendorId),
            },
            publicKey: PublicKeyEcPrime256v1_X962(ellipticCurvePublicKey),
            extensions: ContextTagged(3, {
                basicConstraints: BasicConstraints_X509({
                    isCa: false,
                }),
                keyUsage: KeyUsage_Signature_ContentCommited_X509,
                subjectKeyIdentifier: SubjectKeyIdentifier_X509(subjectKeyIdentifier),
                authorityKeyIdentifier:
                    authorityKeyIdentifier === undefined
                        ? undefined
                        : AuthorityKeyIdentifier_X509(authorityKeyIdentifier),
            }),
        };
        return DerCodec.encode({
            certificate,
            signAlgorithm: EcdsaWithSHA256_X962,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
    }

    static CertificationDeclarationToAsn1(
        eContent: ByteArray,
        subjectKeyIdentifier: ByteArray,
        privateKey: JsonWebKey,
    ) {
        const certificate = {
            version: 3,
            digestAlgorithm: [SHA256_CMS],
            encapContentInfo: Pkcs7Data(eContent),
            signerInfo: [
                {
                    version: 3,
                    subjectKeyIdentifier: ContextTaggedBytes(0, subjectKeyIdentifier),
                    digestAlgorithm: SHA256_CMS,
                    signatureAlgorithm: EcdsaWithSHA256_X962,
                    signature: Crypto.sign(privateKey, eContent, "der"),
                },
            ],
        };

        return DerCodec.encode(Pkcs7SignedData(certificate));
    }

    static validateRootCertificate(rootCert: RootCertificate) {
        Crypto.verify(PublicKey(rootCert.ellipticCurvePublicKey), this.rootCertToAsn1(rootCert), rootCert.signature);
    }

    static validateNocCertificate(rootCert: RootCertificate, nocCert: OperationalCertificate) {
        Crypto.verify(PublicKey(rootCert.ellipticCurvePublicKey), this.nocCertToAsn1(nocCert), nocCert.signature);
    }

    static createCertificateSigningRequest(key: Key) {
        const request = {
            version: 0,
            subject: { organization: OrganisationName_X520("CSR") },
            publicKey: PublicKeyEcPrime256v1_X962(key.publicKey),
            endSignedBytes: ContextTagged(0),
        };

        return DerCodec.encode({
            request,
            signAlgorithm: EcdsaWithSHA256_X962,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(request), "der")),
        });
    }

    static getPublicKeyFromCsr(csr: ByteArray) {
        const { [ELEMENTS_KEY]: rootElements } = DerCodec.decode(csr);
        if (rootElements?.length !== 3) throw new CertificateError("Invalid CSR data");
        const [requestNode, signAlgorithmNode, signatureNode] = rootElements;

        // Extract the public key
        const { [ELEMENTS_KEY]: requestElements } = requestNode;
        if (requestElements?.length !== 4) throw new CertificateError("Invalid CSR data");
        const [versionNode, _subjectNode, publicKeyNode] = requestElements;
        const requestVersion = versionNode[BYTES_KEY][0];
        if (requestVersion !== 0) throw new CertificateError(`Unsupported request version${requestVersion}`);
        // TODO: verify subject = { OrganisationName: "CSR" }

        const { [ELEMENTS_KEY]: publicKeyElements } = publicKeyNode;
        if (publicKeyElements?.length !== 2) throw new CertificateError("Invalid CSR data");
        const [_publicKeyTypeNode, publicKeyBytesNode] = publicKeyElements;
        // TODO: verify publicKey algorithm
        const publicKey = publicKeyBytesNode[BYTES_KEY];

        // Verify the CSR signature
        if (!EcdsaWithSHA256_X962[OBJECT_ID_KEY][BYTES_KEY].equals(signAlgorithmNode[ELEMENTS_KEY]?.[0]?.[BYTES_KEY]))
            throw new CertificateError("Unsupported signature type");
        Crypto.verify(PublicKey(publicKey), DerCodec.encode(requestNode), signatureNode[BYTES_KEY], "der");

        return publicKey;
    }
}
