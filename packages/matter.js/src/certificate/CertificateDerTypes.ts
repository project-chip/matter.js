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

/**
 * Generator function to create a specific ASN string field for a DN with the OID base 2.5.4.*.
 * The returned function takes the value of the string and returns the ASN.1 DER object. Optionally the string
 * can be encoded as a Printable String which adjusts the OID accordingly..
 */
const GenericString_X520 =
    (id: number) =>
    (value: string, asPrintedString = false) => [
        DerObject(`5504${(asPrintedString ? id + 0x80 : id).toString(16).padStart(2, "0")}`, { value }),
    ];

/** commonName = ASN.1 OID 2.5.4.3 */
export const CommonName_X520 = GenericString_X520(3);
/** surName = ASN.1 OID 2.5.4.4 */
export const SurName_X520 = GenericString_X520(4);
/** serialNumber = ASN.1 OID 2.5.4.5 */
export const SerialNumber_X520 = GenericString_X520(5);
/** countryName = ASN.1 OID 2.5.4.6 */
export const CountryName_X520 = GenericString_X520(6);
/** localityName = ASN.1 OID 2.5.4.7 */
export const LocalityName_X520 = GenericString_X520(7);
/** stateOrProvinceName = ASN.1 OID 2.5.4.8 */
export const StateOrProvinceName_X520 = GenericString_X520(8);
/** organizationName = ASN.1 OID 2.5.4.10 */
export const OrganisationName_X520 = GenericString_X520(10);
/** organizationalUnitName = ASN.1 OID 2.5.4.11 */
export const OrganizationalUnitName_X520 = GenericString_X520(11);
/** title = ASN.1 OID 2.5.4.12 */
export const Title_X520 = GenericString_X520(12);
/** name = ASN.1 OID 2.5.4.41 */
export const Name_X520 = GenericString_X520(41);
/** givenName = ASN.1 OID 2.5.4.42 */
export const GivenName_X520 = GenericString_X520(42);
/** initials = ASN.1 OID 2.5.4.43 */
export const Initials_X520 = GenericString_X520(43);
/** generationQualifier = ASN.1 OID 2.5.4.44 */
export const GenerationQualifier_X520 = GenericString_X520(44);
/** dnQualifier = ASN.1 OID 2.5.4.46 */
export const DnQualifier_X520 = GenericString_X520(46);
/** pseudonym = ASN.1 OID 2.5.4.65 */
export const Pseudonym_X520 = GenericString_X520(65);
/** domain-component = ASN.1 OID 0.9.2342.19200300.100.1.25, IA5String */
export const DomainComponent_X520 = (value: string) => [DerObject("06092A864886F70D010901", { value })];
