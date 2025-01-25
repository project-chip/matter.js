/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Bytes, PrivateKey } from "#general";
import { VendorId } from "#types";
import { CertificateManager, TlvCertificationDeclaration } from "./CertificateManager.js";

// This is the private key from Appendix F of the Matter 1.1 Core Specification.
// The specification specifies it in PEM format:
//
// -----BEGIN EC PRIVATE KEY-----
// MHcCAQEEIK7zSEEW6UgexXvgRy30G/SZBk5QJK2GnspeiJgC1IB1oAoGCCqGSM49
// AwEHoUQDQgAEPDmJIkUrVcrzicJb0bykZWlSzLkOiGkkmthHRlMBTL+V1oeWXgNr
// UhxRA35rjO3vyh60QEZpT6CIgu7WUZ3sug==
// -----END EC PRIVATE KEY-----
//
// You can extract the key using openssl:
//
// openssl asn1parse -in key.txt
const TestCMS_SignerPrivateKey = Bytes.fromHex("AEF3484116E9481EC57BE0472DF41BF499064E5024AD869ECA5E889802D48075");

// You can extract the subject key identifier from the certificate in the same
// section.  The x509 command is best for that:
//
// openssl x509 -in cert.txt -text
//
// Look for the line under "X509v3 Subject Key Identifier:"
const TestCMS_SignerSubjectKeyIdentifier = Bytes.fromHex("62FA823359ACFAA9963E1CFA140ADDF504F37160");

export class CertificationDeclarationManager {
    static generate(vendorId: VendorId, productId: number, provisional = false) {
        const certificationElements = TlvCertificationDeclaration.encode({
            formatVersion: 1,
            vendorId,
            produceIdArray: [productId],
            deviceTypeId: 22,
            certificateId: "CSA00000SWC00000-00",
            securityLevel: 0,
            securityInformation: 0,
            versionNumber: 1,
            certificationType: provisional ? 1 : 0, // 0 = Test, 1 = Provisional/In certification, 2 = official
        });

        return CertificateManager.certificationDeclarationToAsn1(
            certificationElements,
            TestCMS_SignerSubjectKeyIdentifier,
            PrivateKey(TestCMS_SignerPrivateKey),
        );
    }
}
