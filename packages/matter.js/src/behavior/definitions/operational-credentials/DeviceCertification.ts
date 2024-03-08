/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { AttestationCertificateManager } from "../../../certificate/AttestationCertificateManager.js";
import { CertificationDeclarationManager } from "../../../certificate/CertificationDeclarationManager.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Crypto } from "../../../crypto/Crypto.js";
import { PrivateKey } from "../../../crypto/Key.js";
import { SecureSession } from "../../../session/SecureSession.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { ProductDescription } from "../../system/product-description/ProductDescription.js";

/**
 * Device certification used by the OperationalCredentials cluster.
 */
export class DeviceCertification {
    #privateKey: PrivateKey;
    #certificate: ByteArray;
    #intermediateCertificate: ByteArray;
    #declaration: ByteArray;

    get certificate() {
        return this.#certificate;
    }

    get intermediateCertificate() {
        return this.#intermediateCertificate;
    }

    get declaration() {
        return this.#declaration;
    }

    constructor(config?: DeviceCertification.Configuration, product?: ProductDescription) {
        if (config) {
            this.#privateKey =
                config.privateKey instanceof ByteArray ? PrivateKey(config.privateKey) : config.privateKey;
            this.#certificate = config.certificate;
            this.#intermediateCertificate = config.intermediateCertificate;
            this.#declaration = config.declaration;
        } else {
            if (product === undefined) {
                throw new ImplementationError(`Cannot generate device certification without product information`);
            }

            const paa = new AttestationCertificateManager(product.vendorId);
            const { keyPair: dacKeyPair, dac } = paa.getDACert(product.productId);

            this.#privateKey = PrivateKey(dacKeyPair.privateKey);
            this.#certificate = dac;
            this.#intermediateCertificate = paa.getPAICert();
            this.#declaration = CertificationDeclarationManager.generate(product.vendorId, product.productId);
        }
    }

    sign(session: SecureSession<MatterDevice>, data: ByteArray) {
        return Crypto.sign(this.#privateKey, [data, session.getAttestationChallengeKey()]);
    }
}

export namespace DeviceCertification {
    export interface Configuration {
        privateKey: PrivateKey | ByteArray;
        certificate: ByteArray;
        intermediateCertificate: ByteArray;
        declaration: ByteArray;
    }
}
