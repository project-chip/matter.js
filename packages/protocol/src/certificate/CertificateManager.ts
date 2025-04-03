/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BitByteArray,
    Bytes,
    ContextTagged,
    ContextTaggedBytes,
    Crypto,
    DatatypeOverride,
    DerCodec,
    DerKey,
    DerObject,
    DerType,
    Diagnostic,
    ImplementationError,
    Key,
    Logger,
    MatterError,
    Pkcs7,
    PublicKey,
    RawBytes,
    SHA256_CMS,
    Time,
    X509,
    X520,
    X962,
} from "#general";
import {
    BitFlag,
    BitmapSchema,
    CaseAuthenticatedTag,
    FabricId,
    NodeId,
    TlvArray,
    TlvBitmap,
    TlvBoolean,
    TlvByteString,
    TlvCaseAuthenticatedTag,
    TlvFabricId,
    TlvField,
    TlvNodeId,
    TlvObject,
    TlvObjectWithMaxSize,
    TlvOptionalField,
    TlvOptionalRepeatedField,
    TlvString,
    TlvTaggedList,
    TlvUInt16,
    TlvUInt32,
    TlvUInt64,
    TlvUInt8,
    TlvVendorId,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    VendorId,
} from "#types";

const logger = Logger.get("CertificateManager");

export class CertificateError extends MatterError {}

const YEAR_S = 365 * 24 * 60 * 60;
const EPOCH_OFFSET_S = 10957 * 24 * 60 * 60;

/**
 * Matter specific Certificate Sizes
 * @see {@link MatterSpecification.v13.Core} 6.1.3.
 */
const MAX_DER_CERTIFICATE_SIZE = 600;
const MAX_TLV_CERTIFICATE_SIZE = 400;

// TODO replace usage of Date by abstraction

export function matterToJsDate(date: number) {
    return date === 0 ? X520.NON_WELL_DEFINED_DATE : new Date((date + EPOCH_OFFSET_S) * 1000);
}

export function jsToMatterDate(date: Date, addYears = 0) {
    return date.getTime() === X520.NON_WELL_DEFINED_DATE.getTime()
        ? 0
        : Math.floor(date.getTime() / 1000) - EPOCH_OFFSET_S + addYears * YEAR_S;
}

function intTo16Chars(value: bigint | number) {
    const byteArray = new Uint8Array(8);
    const dataView = Bytes.dataViewOf(byteArray);
    dataView.setBigUint64(0, typeof value === "bigint" ? value : BigInt(value));
    return Bytes.toHex(byteArray).toUpperCase();
}

function uInt16To8Chars(value: number) {
    const byteArray = new Uint8Array(4);
    const dataView = Bytes.dataViewOf(byteArray);
    dataView.setUint32(0, value);
    return Bytes.toHex(byteArray).toUpperCase();
}

function uInt16To4Chars(value: number) {
    const byteArray = new Uint8Array(2);
    const dataView = Bytes.dataViewOf(byteArray);
    dataView.setUint16(0, value);
    return Bytes.toHex(byteArray).toUpperCase();
}

/**
 * Matter specific ASN.1 OIDs
 * @see {@link MatterSpecification.v12.Core} Appendix E
 */

/**
 * Generator function to create a specific ASN field for a Matter OpCert DN with the OID base 1.3.6.1.4.1.37244.1.*.
 * The returned function takes the value and returns the ASN.1 DER object.
 */
const GenericMatterOpCertObject =
    <T>(id: number, valueConverter?: (value: T) => string) =>
    (value: T) => [
        DerObject(`2b0601040182a27c01${id.toString(16).padStart(2, "0")}`, {
            value: (valueConverter ?? intTo16Chars)(value as any),
        }),
    ];

/**
 * Generator function to create a specific ASN field for a Matter AttCert DN with the OID base 1.3.6.1.4.1.37244.2.*.
 * The returned function takes the value and returns the ASN.1 DER object.
 */
const GenericMatterAttCertObject =
    <T>(id: number, valueConverter?: (value: T) => string) =>
    (value: T) => [
        DerObject(`2b0601040182a27c02${id.toString(16).padStart(2, "0")}`, {
            value: (valueConverter ?? intTo16Chars)(value as any),
        }),
    ];

/** matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1 */
export const NodeId_Matter = GenericMatterOpCertObject<NodeId>(1);

/** matter-firmware-signing-id = ASN.1 OID 1.3.6.1.4.1.37244.1.2 */
export const FirmwareSigningId_Matter = GenericMatterOpCertObject<number>(2);

/** matter-icac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.3 */
export const IcacId_Matter = GenericMatterOpCertObject<bigint | number>(3);

/** matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4 */
export const RcacId_Matter = GenericMatterOpCertObject<bigint | number>(4);

/** matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5 */
export const FabricId_Matter = GenericMatterOpCertObject<FabricId>(5);

/** matter-noc-cat = ASN.1 OID 1.3.6.1.4.1.37244.1.6 */
export const NocCat_Matter = GenericMatterOpCertObject<number>(6, uInt16To8Chars);

/** matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1 */
export const VendorId_Matter = GenericMatterAttCertObject<VendorId>(1, uInt16To4Chars);

/** matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.37244.2.2 */
export const ProductId_Matter = GenericMatterAttCertObject<number>(2, uInt16To4Chars);

/** All defined Matter fields for subject and issuer that we always allow optionally to be encoded */
const AllowedSubjectAndIssuerMatterFields = {
    nodeId: TlvOptionalField(17, TlvNodeId),
    firmwareSigningId: TlvOptionalField(18, TlvUInt32),
    icacId: TlvOptionalField(19, TlvUInt64),
    rcacId: TlvOptionalField(20, TlvUInt64),
    fabricId: TlvOptionalField(21, TlvFabricId),
    caseAuthenticatedTags: TlvOptionalRepeatedField(22, TlvCaseAuthenticatedTag, { maxLength: 3 }),
};

/**
 * TLV schema for a generic subject or issuer field in a certificate. We handle all fields as optional here for the TLV
 * parsing and check required fields in the logic to make sure we return the correct errors.
 */
const TlvGenericMatterSubjectOrIssuerTaggedList = <T>(matterFields: T) => {
    const fields = {
        // Standard DNs
        commonName: TlvOptionalField(1, TlvString),
        sureName: TlvOptionalField(2, TlvString),
        serialNum: TlvOptionalField(3, TlvString),
        countryName: TlvOptionalField(4, TlvString),
        localityName: TlvOptionalField(5, TlvString),
        stateOrProvinceName: TlvOptionalField(6, TlvString),
        orgName: TlvOptionalField(7, TlvString),
        orgUnitName: TlvOptionalField(8, TlvString),
        title: TlvOptionalField(9, TlvString),
        name: TlvOptionalField(10, TlvString),
        givenName: TlvOptionalField(11, TlvString),
        initials: TlvOptionalField(12, TlvString),
        genQualifier: TlvOptionalField(13, TlvString),
        dnQualifier: TlvOptionalField(14, TlvString),
        pseudonym: TlvOptionalField(15, TlvString),
        domainComponent: TlvOptionalField(16, TlvString),

        // Matter specific DNs
        ...matterFields,

        // Standard DNs when encoded as Printable String
        commonNamePs: TlvOptionalField(129, TlvString),
        sureNamePs: TlvOptionalField(130, TlvString),
        serialNumPs: TlvOptionalField(131, TlvString),
        countryNamePs: TlvOptionalField(132, TlvString),
        localityNamePs: TlvOptionalField(133, TlvString),
        stateOrProvinceNamePs: TlvOptionalField(134, TlvString),
        orgNamePs: TlvOptionalField(135, TlvString),
        orgUnitNamePs: TlvOptionalField(136, TlvString),
        titlePs: TlvOptionalField(137, TlvString),
        namePs: TlvOptionalField(138, TlvString),
        givenNamePs: TlvOptionalField(139, TlvString),
        initialsPs: TlvOptionalField(140, TlvString),
        genQualifierPs: TlvOptionalField(141, TlvString),
        dnQualifierPs: TlvOptionalField(142, TlvString),
        pseudonymPs: TlvOptionalField(143, TlvString),
    };
    return TlvTaggedList(fields);
};

const ExtensionKeyUsageBitmap = {
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
const ExtensionKeyUsageSchema = BitmapSchema(ExtensionKeyUsageBitmap);

/**
 * This generator enhances the generic Matter Certificate definition by allowing to override the subject and issuer
 * fields. The overriding serves two needs:
 * 1. to make some fields mandatory for the Tlv parsing and definition for the typescript types
 * 2. have typing guidance when generating certificates ourself in code
 *
 * On Tlv definition level also all not specified allowed Matter Fields are optionally allowed and are decoded,
 * re-encoded into Tlv and also encoded into ASN if the certificate is converted. Just the typing system do not know
 * about them.
 */
const BaseMatterCertificate = <S, I>(matterFields?: { subject?: S; issuer?: I }) =>
    TlvObjectWithMaxSize(
        {
            serialNumber: TlvField(1, TlvByteString.bound({ maxLength: 20 })),
            signatureAlgorithm: TlvField(2, TlvUInt8),
            issuer: TlvField(
                3,
                TlvGenericMatterSubjectOrIssuerTaggedList<I>({
                    ...AllowedSubjectAndIssuerMatterFields,
                    ...(matterFields?.issuer ?? {}),
                } as I),
            ),
            notBefore: TlvField(4, TlvUInt32),
            notAfter: TlvField(5, TlvUInt32),
            subject: TlvField(
                6,
                TlvGenericMatterSubjectOrIssuerTaggedList<S>({
                    ...AllowedSubjectAndIssuerMatterFields,
                    ...(matterFields?.subject ?? {}),
                } as S),
            ),
            publicKeyAlgorithm: TlvField(7, TlvUInt8),
            ellipticCurveIdentifier: TlvField(8, TlvUInt8),
            ellipticCurvePublicKey: TlvField(9, TlvByteString),
            extensions: TlvField(
                10,
                TlvTaggedList({
                    basicConstraints: TlvField(
                        1,
                        TlvObject({
                            isCa: TlvField(1, TlvBoolean),
                            pathLen: TlvOptionalField(2, TlvUInt8),
                        }),
                    ),
                    keyUsage: TlvField(2, TlvBitmap(TlvUInt16, ExtensionKeyUsageBitmap)),
                    extendedKeyUsage: TlvOptionalField(3, TlvArray(TlvUInt8)),
                    subjectKeyIdentifier: TlvField(4, TlvByteString.bound({ length: 20 })),
                    authorityKeyIdentifier: TlvField(5, TlvByteString.bound({ length: 20 })),
                    futureExtension: TlvOptionalRepeatedField(6, TlvByteString),
                }),
            ),
            signature: TlvField(11, TlvByteString),
        },
        MAX_TLV_CERTIFICATE_SIZE,
    );

export const TlvRootCertificate = BaseMatterCertificate({
    subject: {
        rcacId: TlvField(20, TlvUInt64),
        fabricId: TlvOptionalField(21, TlvFabricId),
    },
    issuer: AllowedSubjectAndIssuerMatterFields,
});

export const TlvOperationalCertificate = BaseMatterCertificate({
    subject: {
        nodeId: TlvField(17, TlvNodeId),
        fabricId: TlvField(21, TlvFabricId),
        caseAuthenticatedTags: TlvOptionalRepeatedField(22, TlvCaseAuthenticatedTag, { maxLength: 3 }),
    },
    issuer: AllowedSubjectAndIssuerMatterFields,
});

export const TlvIntermediateCertificate = BaseMatterCertificate({
    subject: {
        icacId: TlvField(19, TlvUInt64),
        fabricId: TlvOptionalField(21, TlvFabricId),
    },
    issuer: AllowedSubjectAndIssuerMatterFields,
});

const TlvBaseCertificate = BaseMatterCertificate();

interface AttestationCertificateBase {
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

export interface DeviceAttestationCertificate extends AttestationCertificateBase {
    issuer: {
        commonName: string;
        productId?: number;
        vendorId: VendorId;
    };
    subject: {
        commonName: string;
        productId: number;
        vendorId: VendorId;
    };
}

export interface ProductAttestationIntermediateCertificate extends AttestationCertificateBase {
    issuer: {
        commonName: string;
        vendorId?: VendorId;
    };
    subject: {
        commonName: string;
        productId?: number;
        vendorId: VendorId;
    };
}

export interface ProductAttestationAuthorityCertificate extends AttestationCertificateBase {
    issuer: {
        commonName: string;
        vendorId?: VendorId;
    };
    subject: {
        commonName: string;
        vendorId?: VendorId;
    };
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

export type BaseCertificate = TypeFromSchema<typeof TlvBaseCertificate>;
export type RootCertificate = TypeFromSchema<typeof TlvRootCertificate>;
export type IntermediateCertificate = TypeFromSchema<typeof TlvIntermediateCertificate>;
export type OperationalCertificate = TypeFromSchema<typeof TlvOperationalCertificate>;
export type Unsigned<Type> = { [Property in keyof Type as Exclude<Property, "signature">]: Type[Property] };

/**
 * Preserve order of keys from original subject and also copy potential custom elements
 * @param data
 */
function subjectOrIssuerToAsn1(data: { [field: string]: any }) {
    const asn = {} as { [field: string]: any[] };
    Object.entries(data).forEach(([key, value]) => {
        if (value === undefined) {
            return;
        }
        switch (key) {
            case "commonName":
                asn.commonName = X520.CommonName(value as string);
                break;
            case "sureName":
                asn.sureName = X520.SurName(value as string);
                break;
            case "serialNum":
                asn.serialNum = X520.SerialNumber(value as string);
                break;
            case "countryName":
                asn.countryName = X520.CountryName(value as string);
                break;
            case "localityName":
                asn.localityName = X520.LocalityName(value as string);
                break;
            case "stateOrProvinceName":
                asn.stateOrProvinceName = X520.StateOrProvinceName(value as string);
                break;
            case "orgName":
                asn.orgName = X520.OrganisationName(value as string);
                break;
            case "orgUnitName":
                asn.orgUnitName = X520.OrganizationalUnitName(value as string);
                break;
            case "title":
                asn.title = X520.Title(value as string);
                break;
            case "name":
                asn.name = X520.Name(value as string);
                break;
            case "givenName":
                asn.givenName = X520.GivenName(value as string);
                break;
            case "initials":
                asn.initials = X520.Initials(value as string);
                break;
            case "genQualifier":
                asn.genQualifier = X520.GenerationQualifier(value as string);
                break;
            case "dnQualifier":
                asn.dnQualifier = X520.DnQualifier(value as string);
                break;
            case "pseudonym":
                asn.pseudonym = X520.Pseudonym(value as string);
                break;
            case "domainComponent":
                asn.domainComponent = X520.DomainComponent(value as string);
                break;
            case "nodeId":
                asn.nodeId = NodeId_Matter(value as NodeId);
                break;
            case "firmwareSigningId":
                asn.firmwareSigningId = FirmwareSigningId_Matter(value as number);
                break;
            case "icacId":
                asn.icacId = IcacId_Matter(value as number | bigint);
                break;
            case "rcacId":
                asn.rcacId = RcacId_Matter(value as number | bigint);
                break;
            case "fabricId":
                asn.fabricId = FabricId_Matter(value as FabricId);
                break;
            case "caseAuthenticatedTags":
                // In theory if someone mixes multiple caseAuthenticatedTag fields with other fields we currently would
                // code them in ASN.1 as fields at the first position from the original data which might fail
                // certificate validation. Changing this would require to change Tlv decoding, so lets try that way for now.
                const caseAuthenticatedTags = value as CaseAuthenticatedTag[];
                CaseAuthenticatedTag.validateNocTagList(caseAuthenticatedTags);

                const cat0 = caseAuthenticatedTags[0];
                const cat1 = caseAuthenticatedTags[1];
                const cat2 = caseAuthenticatedTags[2];
                if (cat0 !== undefined) {
                    asn.caseAuthenticatedTag0 = NocCat_Matter(cat0);
                }
                if (cat1 !== undefined) {
                    asn.caseAuthenticatedTag1 = NocCat_Matter(cat1);
                }
                if (cat2 !== undefined) {
                    asn.caseAuthenticatedTag2 = NocCat_Matter(cat2);
                }
                break;
            case "vendorId": // Only relevant for ASN.1 encoding of DAC/PAA/PAI certificates
                asn.vendorId = VendorId_Matter(value as VendorId);
                break;
            case "productId": // Only relevant for ASN.1 encoding of DAC/PAA/PAI certificates
                asn.productId = ProductId_Matter(value as number);
                break;
            case "commonNamePs":
                asn.commonNamePs = X520.CommonName(value as string, true);
                break;
            case "sureNamePs":
                asn.sureNamePs = X520.SurName(value as string, true);
                break;
            case "serialNumPs":
                asn.serialNumPs = X520.SerialNumber(value as string, true);
                break;
            case "countryNamePs":
                asn.countryNamePs = X520.CountryName(value as string, true);
                break;
            case "localityNamePs":
                asn.localityNamePs = X520.LocalityName(value as string, true);
                break;
            case "stateOrProvinceNamePs":
                asn.stateOrProvinceNamePs = X520.StateOrProvinceName(value as string, true);
                break;
            case "orgNamePs":
                asn.orgNamePs = X520.OrganisationName(value as string, true);
                break;
            case "orgUnitNamePs":
                asn.orgUnitNamePs = X520.OrganizationalUnitName(value as string, true);
                break;
            case "titlePs":
                asn.titlePs = X520.Title(value as string, true);
                break;
            case "namePs":
                asn.namePs = X520.Name(value as string, true);
                break;
            case "givenNamePs":
                asn.givenNamePs = X520.GivenName(value as string, true);
                break;
            case "initialsPs":
                asn.initialsPs = X520.Initials(value as string, true);
                break;
            case "genQualifierPs":
                asn.genQualifierPs = X520.GenerationQualifier(value as string, true);
                break;
            case "dnQualifierPs":
                asn.dnQualifierPs = X520.DnQualifier(value as string, true);
                break;
            case "pseudonymPs":
                asn.pseudonymPs = X520.Pseudonym(value as string, true);
                break;
        }
    });
    return asn;
}

function extensionsToAsn1(extensions: BaseCertificate["extensions"]) {
    const asn = {} as { [field: string]: any[] | any };
    Object.entries(extensions).forEach(([key, value]) => {
        if (value === undefined) {
            return;
        }
        switch (key) {
            case "basicConstraints":
                asn.basicConstraints = X509.BasicConstraints(value);
                break;
            case "keyUsage":
                asn.keyUsage = X509.KeyUsage(
                    ExtensionKeyUsageSchema.encode(value as TypeFromPartialBitSchema<typeof ExtensionKeyUsageBitmap>),
                );
                break;
            case "extendedKeyUsage":
                asn.extendedKeyUsage = X509.ExtendedKeyUsage(value as number[] | undefined);
                break;
            case "subjectKeyIdentifier":
                asn.subjectKeyIdentifier = X509.SubjectKeyIdentifier(value as Uint8Array);
                break;
            case "authorityKeyIdentifier":
                asn.authorityKeyIdentifier = X509.AuthorityKeyIdentifier(value as Uint8Array);
                break;
            case "futureExtension":
                asn.futureExtension = RawBytes(Bytes.concat(...((value as Uint8Array[] | undefined) ?? [])));
                break;
        }
    });
    return asn;
}

export namespace CertificateManager {
    function assertCertificateDerSize(certBytes: Uint8Array) {
        if (certBytes.length > MAX_DER_CERTIFICATE_SIZE) {
            throw new ImplementationError(
                `Certificate to generate is too big: ${certBytes.length} bytes instead of max ${MAX_DER_CERTIFICATE_SIZE} bytes`,
            );
        }
    }

    function genericBuildAsn1Structure({
        serialNumber,
        notBefore,
        notAfter,
        issuer,
        subject,
        ellipticCurvePublicKey,
        extensions,
    }: Unsigned<BaseCertificate>) {
        const {
            basicConstraints: { isCa, pathLen },
        } = extensions;
        if (!isCa && pathLen !== undefined) {
            throw new CertificateError("Path length must be undefined for non-CA certificates.");
        }
        return {
            version: ContextTagged(0, 2), // v3
            serialNumber: DatatypeOverride(DerType.Integer, serialNumber),
            signatureAlgorithm: X962.EcdsaWithSHA256,
            issuer: subjectOrIssuerToAsn1(issuer),
            validity: {
                notBefore: matterToJsDate(notBefore),
                notAfter: matterToJsDate(notAfter),
            },
            subject: subjectOrIssuerToAsn1(subject),
            publicKey: X962.PublicKeyEcPrime256v1(ellipticCurvePublicKey),
            extensions: ContextTagged(3, extensionsToAsn1(extensions)),
        };
    }

    function genericCertToAsn1(cert: Unsigned<BaseCertificate>) {
        const certBytes = DerCodec.encode(genericBuildAsn1Structure(cert));
        assertCertificateDerSize(certBytes);
        return certBytes;
    }

    export function rootCertToAsn1(cert: Unsigned<RootCertificate>) {
        const {
            extensions: {
                basicConstraints: { isCa },
            },
        } = cert;
        if (!isCa) {
            throw new CertificateError("Root certificate must be a CA.");
        }
        return genericCertToAsn1(cert);
    }

    export function intermediateCaCertToAsn1(cert: Unsigned<IntermediateCertificate>) {
        const {
            extensions: {
                basicConstraints: { isCa },
            },
        } = cert;
        if (!isCa) {
            throw new CertificateError("Intermediate certificate must be a CA.");
        }
        return genericCertToAsn1(cert);
    }

    export function nodeOperationalCertToAsn1(cert: Unsigned<OperationalCertificate>) {
        const {
            issuer: { icacId, rcacId },
            extensions: {
                basicConstraints: { isCa },
            },
        } = cert;
        if (icacId === undefined && rcacId === undefined) {
            throw new CertificateError("Issuer RCAC or ICAC ID must be defined for an operational certificate.");
        }
        if (isCa) {
            throw new CertificateError("Node operational certificate must not be a CA.");
        }

        return genericCertToAsn1(cert);
    }

    export function deviceAttestationCertToAsn1(cert: Unsigned<DeviceAttestationCertificate>, key: Key) {
        const certificate = genericBuildAsn1Structure(cert);
        const certBytes = DerCodec.encode({
            certificate,
            signAlgorithm: X962.EcdsaWithSHA256,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
        assertCertificateDerSize(certBytes);
        return certBytes;
    }

    export function productAttestationIntermediateCertToAsn1(
        cert: Unsigned<ProductAttestationIntermediateCertificate>,
        key: Key,
    ) {
        const certificate = genericBuildAsn1Structure(cert);
        const certBytes = DerCodec.encode({
            certificate,
            signAlgorithm: X962.EcdsaWithSHA256,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
        assertCertificateDerSize(certBytes);
        return certBytes;
    }

    export function productAttestationAuthorityCertToAsn1(
        cert: Unsigned<ProductAttestationAuthorityCertificate>,
        key: Key,
    ) {
        const certificate = genericBuildAsn1Structure(cert);
        const certBytes = DerCodec.encode({
            certificate,
            signAlgorithm: X962.EcdsaWithSHA256,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(certificate), "der")),
        });
        assertCertificateDerSize(certBytes);
        return certBytes;
    }

    export function certificationDeclarationToAsn1(
        eContent: Uint8Array,
        subjectKeyIdentifier: Uint8Array,
        privateKey: JsonWebKey,
    ) {
        const certificate = {
            version: 3,
            digestAlgorithm: [SHA256_CMS],
            encapContentInfo: Pkcs7.Data(eContent),
            signerInfo: [
                {
                    version: 3,
                    subjectKeyIdentifier: ContextTaggedBytes(0, subjectKeyIdentifier),
                    digestAlgorithm: SHA256_CMS,
                    signatureAlgorithm: X962.EcdsaWithSHA256,
                    signature: Crypto.sign(privateKey, eContent, "der"),
                },
            ],
        };

        const certBytes = DerCodec.encode(Pkcs7.SignedData(certificate));
        assertCertificateDerSize(certBytes);
        return certBytes;
    }

    /**
     * Validate general requirements a Matter certificate fields must fulfill.
     * Rules for this are listed in @see {@link MatterSpecification.v12.Core} §6.5.x
     */
    export function validateGeneralCertificateFields(
        cert: RootCertificate | OperationalCertificate | IntermediateCertificate,
    ) {
        if (cert.serialNumber.length > 20)
            throw new CertificateError(
                `Serial number must not be longer then 20 octets. Current serial number has ${cert.serialNumber.length} octets.`,
            );

        if (cert.signatureAlgorithm !== 1) {
            // ecdsa-with-sha256
            throw new CertificateError(`Unsupported signature algorithm: ${cert.signatureAlgorithm}`);
        }

        if (cert.publicKeyAlgorithm !== 1) {
            // ec-pub-key
            throw new CertificateError(`Unsupported public key algorithm: ${cert.publicKeyAlgorithm}`);
        }

        if (cert.ellipticCurveIdentifier !== 1) {
            // prime256v1
            throw new CertificateError(`Unsupported elliptic curve identifier: ${cert.ellipticCurveIdentifier}`);
        }

        // All implementations SHALL reject Matter certificates with more than 5 RDNs in a single DN.
        if (Object.keys(cert.subject).length > 5) {
            throw new CertificateError(`Certificate subject must not contain more than 5 RDNs.`);
        }
        if (Object.keys(cert.issuer).length > 5) {
            throw new CertificateError(`Certificate issuer must not contain more than 5 RDNs.`);
        }

        // notBefore date should be already reached, notAfter is not checked right now
        // TODO: implement real checks when we add "Last known Good UTC time"
        if (cert.notBefore * 1000 > Time.nowMs()) {
            logger.warn(`Certificate notBefore date is in the future: ${cert.notBefore * 1000} vs ${Time.nowMs()}`);
            /*throw new CertificateError(
                `Certificate notBefore date is in the future: ${cert.notBefore * 1000} vs ${Time.nowMs()}`,
            );*/
        }
    }

    /**
     * Verify requirements a Matter Root certificate must fulfill.
     * Rules for this are listed in @see {@link MatterSpecification.v12.Core} §6.5.x
     */
    export function verifyRootCertificate(rootCert: RootCertificate) {
        CertificateManager.validateGeneralCertificateFields(rootCert);

        // The subject DN SHALL NOT encode any matter-node-id attribute.
        if ("nodeId" in rootCert.subject) {
            throw new CertificateError(`Root certificate must not contain a nodeId.`);
        }

        // The subject DN MAY encode at most one matter-fabric-id attribute.
        if (rootCert.subject.fabricId !== undefined) {
            if (Array.isArray(rootCert.subject.fabricId)) {
                throw new CertificateError(
                    `Invalid fabricId in NoC certificate: ${Diagnostic.json(rootCert.subject.fabricId)}`,
                );
            }
            // If present, the matter-fabric-id attribute’s value SHALL NOT be 0
            if (rootCert.subject.fabricId === FabricId(0)) {
                throw new CertificateError(
                    `Invalid fabricId in NoC certificate: ${Diagnostic.json(rootCert.subject.fabricId)}`,
                );
            }
        }

        // The subject DN SHALL NOT encode any matter-icac-id attribute.
        if ("icacId" in rootCert.subject) {
            throw new CertificateError(`Root certificate must not contain an icacId.`);
        }

        // The subject DN SHALL encode exactly one matter-rcac-id attribute.
        if (rootCert.subject.rcacId === undefined || Array.isArray(rootCert.subject.rcacId)) {
            throw new CertificateError(
                `Invalid rcacId in Root certificate: ${Diagnostic.json(rootCert.subject.rcacId)}`,
            );
        }

        // The subject DN SHALL NOT encode any matter-noc-cat attribute.
        if ("caseAuthenticatedTags" in rootCert.subject) {
            throw new CertificateError(`Root certificate must not contain a caseAuthenticatedTags.`);
        }

        // The basic constraints extension SHALL be encoded with is-ca set to true.
        if (rootCert.extensions.basicConstraints.isCa !== true) {
            throw new CertificateError(`Root certificate must have isCa set to true.`);
        }

        // The key usage extension SHALL be encoded with at least two flags: keyCertSign (0x0020) and CRLSign (0x0040)
        // and optionally with digitalSignature (0x0001).
        if (
            ExtensionKeyUsageSchema.encode(rootCert.extensions.keyUsage) !== 0x0060 &&
            ExtensionKeyUsageSchema.encode(rootCert.extensions.keyUsage) !== 0x0061
        ) {
            throw new CertificateError(
                `Root certificate keyUsage must have keyCertSign and CRLSign and optionally digitalSignature set.`,
            );
        }

        // The extended key usage extension SHALL NOT be present.
        if (rootCert.extensions.extendedKeyUsage !== undefined) {
            throw new CertificateError(`Root certificate must not have extendedKeyUsage set.`);
        }

        // The subject key identifier extension SHALL be present and 160 bit long.
        if (rootCert.extensions.subjectKeyIdentifier === undefined) {
            throw new CertificateError(`Root certificate must have subjectKeyIdentifier set.`);
        }
        if (rootCert.extensions.subjectKeyIdentifier.length !== 20) {
            throw new CertificateError(`Root certificate subjectKeyIdentifier must be 160 bit.`);
        }

        // The authority key identifier extension SHALL be present and 160 bit long.
        if (rootCert.extensions.authorityKeyIdentifier === undefined) {
            throw new CertificateError(`Root certificate must have authorityKeyIdentifier set.`);
        }
        if (rootCert.extensions.authorityKeyIdentifier.length !== 20) {
            throw new CertificateError(`Root certificate authorityKeyIdentifier must be 160 bit.`);
        }

        // The authority key identifier extension SHALL be equal to the subject key identifier extension.
        if (!Bytes.areEqual(rootCert.extensions.authorityKeyIdentifier, rootCert.extensions.subjectKeyIdentifier)) {
            throw new CertificateError(
                `Root certificate authorityKeyIdentifier must be equal to subjectKeyIdentifier.`,
            );
        }

        Crypto.verify(PublicKey(rootCert.ellipticCurvePublicKey), rootCertToAsn1(rootCert), rootCert.signature);
    }

    /**
     * Verify requirements a Matter Node Operational certificate must fulfill.
     * Rules for this are listed in @see {@link MatterSpecification.v12.Core} §6.5.x
     */
    export function verifyNodeOperationalCertificate(
        nocCert: OperationalCertificate,
        rootCert: RootCertificate,
        icaCert?: IntermediateCertificate,
    ) {
        CertificateManager.validateGeneralCertificateFields(nocCert);

        // The subject DN SHALL encode exactly one matter-node-id attribute.
        if (nocCert.subject.nodeId === undefined || Array.isArray(nocCert.subject.nodeId)) {
            throw new CertificateError(`Invalid nodeId in NoC certificate: ${Diagnostic.json(nocCert.subject.nodeId)}`);
        }
        // The matter-node-id attribute’s value SHALL be in the Operational Node ID
        if (!NodeId.isOperationalNodeId(nocCert.subject.nodeId)) {
            throw new CertificateError(`Invalid nodeId in NoC certificate: ${Diagnostic.json(nocCert.subject.nodeId)}`);
        }

        // The subject DN SHALL encode exactly one matter-fabric-id attribute.
        if (nocCert.subject.fabricId === undefined || Array.isArray(nocCert.subject.fabricId)) {
            throw new CertificateError(
                `Invalid fabricId in NoC certificate: ${Diagnostic.json(nocCert.subject.fabricId)}`,
            );
        }
        // The matter-fabric-id attribute’s value SHALL NOT be 0
        if (nocCert.subject.fabricId === FabricId(0)) {
            throw new CertificateError(
                `Invalid fabricId in NoC certificate: ${Diagnostic.json(nocCert.subject.fabricId)}`,
            );
        }

        // The subject DN SHALL NOT encode any matter-icac-id attribute.
        if ("icacId" in nocCert.subject) {
            throw new CertificateError(`Noc certificate must not contain an icacId.`);
        }

        // The subject DN SHALL NOT encode any matter-rcac-id attribute.
        if ("rcacId" in nocCert.subject) {
            throw new CertificateError(`Noc certificate must not contain an rcacId.`);
        }

        // The subject DN MAY encode at most three matter-noc-cat attributes.
        if (nocCert.subject.caseAuthenticatedTags !== undefined) {
            CaseAuthenticatedTag.validateNocTagList(nocCert.subject.caseAuthenticatedTags); // throws ValidationError
        }

        // When any matter-fabric-id attributes are present in either the Matter Root CA Certificate or the Matter ICA
        // Certificate, the value SHALL match the one present in the Matter Node Operational Certificate (NOC) within
        // the same certificate chain.
        if (rootCert.subject.fabricId !== undefined && rootCert.subject.fabricId !== nocCert.subject.fabricId) {
            throw new CertificateError(
                `FabricId in NoC certificate does not match the fabricId in the parent certificate. ${Diagnostic.json(
                    rootCert.subject.fabricId,
                )} !== ${Diagnostic.json(nocCert.subject.fabricId)}`,
            );
        }
        if (
            icaCert !== undefined &&
            icaCert.subject.fabricId !== undefined &&
            icaCert.subject.fabricId !== nocCert.subject.fabricId
        ) {
            throw new CertificateError(
                `FabricId in NoC certificate does not match the fabricId in the parent certificate. ${Diagnostic.json(
                    icaCert.subject.fabricId,
                )} !== ${Diagnostic.json(nocCert.subject.fabricId)}`,
            );
        }

        // The basic constraints extension SHALL be encoded with is-ca set to false.
        if (nocCert.extensions.basicConstraints.isCa) {
            throw new CertificateError(`Noc certificate must not have isCa set to true.`);
        }

        // The key usage extension SHALL be encoded with exactly two flags: keyCertSign (0x0020) and CRLSign (0x0040).
        // Formally the check should be the following line but Amazon uses a wrong Root cert which also has
        // digitalCertificate set, so we just check the the two needed are set and ignore additionally set parameters.
        //if (ExtensionKeyUsageSchema.encode(nocCert.extensions.keyUsage) !== 1) {
        if (!nocCert.extensions.keyUsage.digitalSignature) {
            throw new CertificateError(`Noc certificate must have keyUsage set to digitalSignature.`);
        }

        // The extended key usage extension SHALL be encoded with exactly two key-purpose-id values: serverAuth and clientAuth.
        if (
            nocCert.extensions.extendedKeyUsage === undefined ||
            (!nocCert.extensions.extendedKeyUsage.includes(1) && !nocCert.extensions.extendedKeyUsage.includes(2))
        ) {
            throw new CertificateError(
                `Noc certificate must have extendedKeyUsage with serverAuth and clientAuth: ${Diagnostic.json(nocCert.extensions.extendedKeyUsage)}`,
            );
        }

        // The subject key identifier extension SHALL be present and 160 bit long.
        if (nocCert.extensions.subjectKeyIdentifier === undefined) {
            throw new CertificateError(`Noc certificate must have subjectKeyIdentifier set.`);
        }
        if (nocCert.extensions.subjectKeyIdentifier.length !== 20) {
            throw new CertificateError(`Noc certificate subjectKeyIdentifier must be 160 bit.`);
        }

        // The authority key identifier extension SHALL be present and 160 bit long.
        if (nocCert.extensions.authorityKeyIdentifier === undefined) {
            throw new CertificateError(`Noc certificate must have authorityKeyIdentifier set.`);
        }
        if (nocCert.extensions.authorityKeyIdentifier.length !== 20) {
            throw new CertificateError(`Noc certificate authorityKeyIdentifier must be 160 bit.`);
        }

        // Validate authority key identifier against subject key identifier
        if (
            !Bytes.areEqual(
                nocCert.extensions.authorityKeyIdentifier,
                (icaCert ?? rootCert).extensions.subjectKeyIdentifier,
            )
        ) {
            throw new CertificateError(
                `Noc certificate authorityKeyIdentifier must be equal to Root/Ica subjectKeyIdentifier.`,
            );
        }

        Crypto.verify(
            PublicKey((icaCert ?? rootCert).ellipticCurvePublicKey),
            nodeOperationalCertToAsn1(nocCert),
            nocCert.signature,
        );
    }

    /**
     * Verify requirements a Matter Intermediate CA certificate must fulfill.
     * Rules for this are listed in @see {@link MatterSpecification.v12.Core} §6.5.x
     */
    export function verifyIntermediateCaCertificate(rootCert: RootCertificate, icaCert: IntermediateCertificate) {
        CertificateManager.validateGeneralCertificateFields(icaCert);

        // The subject DN SHALL NOT encode any matter-node-id attribute.
        if ("nodeId" in icaCert.subject) {
            throw new CertificateError(`Ica certificate must not contain a nodeId.`);
        }

        // The subject DN MAY encode at most one matter-fabric-id attribute.
        if (icaCert.subject.fabricId !== undefined) {
            if (Array.isArray(icaCert.subject.fabricId)) {
                throw new CertificateError(
                    `Invalid fabricId in NoC certificate: ${Diagnostic.json(icaCert.subject.fabricId)}`,
                );
            }
            // If present, the matter-fabric-id attribute’s value SHALL NOT be 0
            if (icaCert.subject.fabricId === FabricId(0)) {
                throw new CertificateError(
                    `Invalid fabricId in NoC certificate: ${Diagnostic.json(icaCert.subject.fabricId)}`,
                );
            }
        }

        // The subject DN SHALL encode exactly one matter-icac-id attribute.
        if (icaCert.subject.icacId === undefined || Array.isArray(icaCert.subject.icacId)) {
            throw new CertificateError(`Invalid icacId in Ica certificate: ${Diagnostic.json(icaCert.subject.icacId)}`);
        }

        // The subject DN SHALL NOT encode any matter-rcac-id attribute.
        if ("rcacId" in icaCert.subject) {
            throw new CertificateError(`Ica certificate must not contain an rcacId.`);
        }

        // The subject DN SHALL NOT encode any matter-noc-cat attribute.
        if ("caseAuthenticatedTags" in icaCert.subject) {
            throw new CertificateError(`Ica certificate must not contain a caseAuthenticatedTags.`);
        }

        // When any matter-fabric-id attributes are present in either the Matter Root CA Certificate or the Matter ICA
        // Certificate, the value SHALL match the one present in the Matter Node Operational Certificate (NOC) within
        // the same certificate chain.
        // Here means: When both are set, they must match
        if (
            rootCert.subject.fabricId !== undefined &&
            icaCert.subject.fabricId !== undefined &&
            rootCert.subject.fabricId !== icaCert.subject.fabricId
        ) {
            throw new CertificateError(
                `FabricId in Ica certificate does not match the fabricId in the parent certificate. ${Diagnostic.json(
                    rootCert.subject.fabricId,
                )} !== ${Diagnostic.json(icaCert.subject.fabricId)}`,
            );
        }

        // Verify the certificate chain by checking rcac ids in subject and issuer
        if (rootCert.subject.rcacId !== icaCert.issuer.rcacId) {
            throw new CertificateError(
                `RcacId in Ica certificate does not match the rcacId in the parent certificate. ${Diagnostic.json(
                    rootCert.subject.rcacId,
                )} !== ${Diagnostic.json(icaCert.issuer.rcacId)}`,
            );
        }

        // The basic constraints extension SHALL be encoded with is-ca set to true.
        if (!icaCert.extensions.basicConstraints.isCa) {
            throw new CertificateError(`Ica certificate must have isCa set to true.`);
        }

        // The key usage extension SHALL be encoded with at least two flags: keyCertSign (0x0020) and CRLSign (0x0040)
        // and optionally with digitalSignature (0x0001).
        if (
            ExtensionKeyUsageSchema.encode(rootCert.extensions.keyUsage) !== 0x0060 &&
            ExtensionKeyUsageSchema.encode(rootCert.extensions.keyUsage) !== 0x0061
        ) {
            throw new CertificateError(
                `Ica certificate keyUsage must have keyCertSign and CRLSign and optionally digitalSignature set.`,
            );
        }

        // The extended key usage extension SHALL NOT be present.
        if (icaCert.extensions.extendedKeyUsage !== undefined) {
            throw new CertificateError(`Ica certificate must not have extendedKeyUsage set.`);
        }

        // The subject key identifier extension SHALL be present and 160 bit long.
        if (icaCert.extensions.subjectKeyIdentifier === undefined) {
            throw new CertificateError(`Ica certificate must have subjectKeyIdentifier set.`);
        }
        if (icaCert.extensions.subjectKeyIdentifier.length !== 20) {
            throw new CertificateError(`Ica certificate subjectKeyIdentifier must be 160 bit.`);
        }

        // The authority key identifier extension SHALL be present and 160 bit long.
        if (icaCert.extensions.authorityKeyIdentifier === undefined) {
            throw new CertificateError(`Ica certificate must have authorityKeyIdentifier set.`);
        }
        if (icaCert.extensions.authorityKeyIdentifier.length !== 20) {
            throw new CertificateError(`Ica certificate authorityKeyIdentifier must be 160 bit.`);
        }

        // Validate authority key identifier against subject key identifier
        if (!Bytes.areEqual(icaCert.extensions.authorityKeyIdentifier, rootCert.extensions.subjectKeyIdentifier)) {
            throw new CertificateError(
                `Ica certificate authorityKeyIdentifier must be equal to root cert subjectKeyIdentifier.`,
            );
        }

        Crypto.verify(PublicKey(rootCert.ellipticCurvePublicKey), intermediateCaCertToAsn1(icaCert), icaCert.signature);
    }

    export function createCertificateSigningRequest(key: Key) {
        const request = {
            version: 0,
            subject: { organization: X520.OrganisationName("CSR") },
            publicKey: X962.PublicKeyEcPrime256v1(key.publicKey),
            endSignedBytes: ContextTagged(0),
        };

        return DerCodec.encode({
            request,
            signAlgorithm: X962.EcdsaWithSHA256,
            signature: BitByteArray(Crypto.sign(key, DerCodec.encode(request), "der")),
        });
    }

    export function getPublicKeyFromCsr(csr: Uint8Array) {
        const { [DerKey.Elements]: rootElements } = DerCodec.decode(csr);
        if (rootElements?.length !== 3) throw new CertificateError("Invalid CSR data");
        const [requestNode, signAlgorithmNode, signatureNode] = rootElements;

        // Extract the public key
        const { [DerKey.Elements]: requestElements } = requestNode;
        if (requestElements?.length !== 4) throw new CertificateError("Invalid CSR data");
        const [versionNode, _subjectNode, publicKeyNode] = requestElements;
        const requestVersion = versionNode[DerKey.Bytes][0];
        if (requestVersion !== 0) throw new CertificateError(`Unsupported request version${requestVersion}`);
        // TODO: verify subject = { OrganisationName: "CSR" }

        const { [DerKey.Elements]: publicKeyElements } = publicKeyNode;
        if (publicKeyElements?.length !== 2) throw new CertificateError("Invalid CSR data");
        const [_publicKeyTypeNode, publicKeyBytesNode] = publicKeyElements;
        // TODO: verify publicKey algorithm
        const publicKey = publicKeyBytesNode[DerKey.Bytes];

        // Verify the CSR signature
        if (
            signAlgorithmNode[DerKey.Elements]?.[0]?.[DerKey.Bytes] === undefined ||
            !Bytes.areEqual(
                X962.EcdsaWithSHA256[DerKey.ObjectId][DerKey.Bytes],
                signAlgorithmNode[DerKey.Elements]?.[0]?.[DerKey.Bytes],
            )
        )
            throw new CertificateError("Unsupported signature type");
        Crypto.verify(PublicKey(publicKey), DerCodec.encode(requestNode), signatureNode[DerKey.Bytes], "der");

        return publicKey;
    }
}
