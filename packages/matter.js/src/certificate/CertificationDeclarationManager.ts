/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { CertificateManager, TlvCertificationDeclaration } from "./CertificateManager.js";
import { ByteArray } from "../util/ByteArray.js";
import { VendorId } from "../datatype/VendorId.js";

// CD Signer Certificate and Key taken from Chip-Tool repository

const TestCMS_SignerPrivateKey = ByteArray.fromHex("30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba");

const TestCMS_SignerSubjectKeyIdentifier = ByteArray.fromHex("62FA823359ACFAA9963E1CFA140ADDF504F37160");

export class CertificationDeclarationManager {
    static generate(vendorId: VendorId, productId: number) {
        const certificationElements = TlvCertificationDeclaration.encode({
            formatVersion: 1,
            vendorId,
            produceIdArray: [productId],
            deviceTypeId: 22,
            certificateId: "CSA00000SWC00000-00",
            securityLevel: 0,
            securityInformation: 0,
            versionNumber: 1,
            certificationType: 0,
        });

        return CertificateManager.CertificationDeclarationToAsn1(certificationElements, TestCMS_SignerSubjectKeyIdentifier, TestCMS_SignerPrivateKey);
    }
}

