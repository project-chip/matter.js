/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Construction, Crypto, ImplementationError, InternalError, PrivateKey } from "#general";
import { SecureSession } from "#session/SecureSession.js";
import { ProductDescription } from "#types";
import { AttestationCertificateManager } from "./AttestationCertificateManager.js";
import { CertificationDeclarationManager } from "./CertificationDeclarationManager.js";

/**
 * Device certification used by the OperationalCredentials cluster.
 */
export class DeviceCertification {
    #privateKey?: PrivateKey;
    #certificate?: Uint8Array;
    #intermediateCertificate?: Uint8Array;
    #declaration?: Uint8Array;
    readonly #construction: Construction<DeviceCertification>;

    get construction() {
        return this.#construction;
    }

    get certificate() {
        return this.#assertInitialized().certificate;
    }

    get intermediateCertificate() {
        return this.#assertInitialized().intermediateCertificate;
    }

    get declaration() {
        return this.#assertInitialized().declaration;
    }

    constructor(config?: DeviceCertification.Definition, product?: ProductDescription) {
        // Certification Provider function is used to request the certificates delayed
        if (typeof config === "function") {
            const configProvider = config;
            this.#construction = Construction(this, async () => {
                this.#initializeFromConfig(await configProvider());
            });
            return;
        }

        // We need a dummy construction to avoid errors
        this.#construction = Construction(this, () => {});

        // With a directly provided config or without we can initialize directly
        if (config === undefined) {
            if (product === undefined) {
                throw new ImplementationError(`Cannot generate device certification without product information`);
            }

            const paa = new AttestationCertificateManager(product.vendorId);
            const { keyPair: dacKeyPair, dac } = paa.getDACert(product.productId);

            config = {
                privateKey: PrivateKey(dacKeyPair.privateKey),
                certificate: dac,
                intermediateCertificate: paa.getPAICert(),
                declaration: CertificationDeclarationManager.generate(product.vendorId, product.productId),
            };
        }
        this.#initializeFromConfig(config);
    }

    #initializeFromConfig(config: DeviceCertification.Configuration) {
        this.#privateKey = config.privateKey instanceof Uint8Array ? PrivateKey(config.privateKey) : config.privateKey;
        this.#certificate = config.certificate;
        this.#intermediateCertificate = config.intermediateCertificate;
        this.#declaration = config.declaration;
    }

    sign(session: SecureSession, data: Uint8Array) {
        return Crypto.sign(this.#assertInitialized().privateKey, [data, session.attestationChallengeKey]);
    }

    /**
     * Makes sure that the device certification is initialized and construction is completed and returns "Non-undefined"
     * values
     */
    #assertInitialized() {
        this.#construction.assert();
        if (
            this.#certificate === undefined ||
            this.#intermediateCertificate === undefined ||
            this.#declaration === undefined ||
            this.#privateKey === undefined
        ) {
            throw new InternalError(
                `Device certification not initialized while trying to access it. This should never happen.`,
            );
        }
        return {
            certificate: this.#certificate,
            intermediateCertificate: this.#intermediateCertificate,
            declaration: this.#declaration,
            privateKey: this.#privateKey,
        };
    }
}

export namespace DeviceCertification {
    export interface Configuration {
        privateKey: PrivateKey | Uint8Array;
        certificate: Uint8Array;
        intermediateCertificate: Uint8Array;
        declaration: Uint8Array;
    }

    export type Definition = Configuration | (() => Promise<Configuration>);
}
