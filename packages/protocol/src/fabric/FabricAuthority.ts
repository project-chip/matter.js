/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateAuthority } from "#certificate/CertificateAuthority.js";
import {
    Bytes,
    Crypto,
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    Environment,
    Environmental,
    ImplementationError,
    Logger,
} from "#general";
import { CaseAuthenticatedTag, FabricId, FabricIndex, NodeId, VendorId } from "#types";
import { Fabric, FabricBuilder } from "./Fabric.js";
import { FabricManager } from "./FabricManager.js";

const logger = Logger.get("FabricAuthority");

/**
 * Configuration for fabrics controlled by a FabricAuthority.
 */
interface FabricAuthorityConfiguration {
    adminVendorId?: VendorId;
    fabricIndex?: FabricIndex;
    fabricId?: FabricId;
    caseAuthenticatedTags?: CaseAuthenticatedTag[];
    adminFabricLabel: string;
}

/**
 * Concrete {@link FabricAuthorityConfiguration} for environmental configuration.
 */
export class FabricAuthorityConfigurationProvider implements FabricAuthorityConfiguration {
    get adminFabricLabel(): string {
        throw new ImplementationError("Admin Fabric Label must be set for FabricAuthorityConfigurationProvider.");
    }
}

/**
 * Interfaces FabricAuthority with other components.
 */
export interface FabricAuthorityContext {
    ca: CertificateAuthority;
    fabrics: FabricManager;
    config: FabricAuthorityConfiguration;
}

export const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);
export const DEFAULT_FABRIC_ID = FabricId(1);

/**
 * Manages fabrics controlled locally associated with a specific CA.
 */
export class FabricAuthority {
    #ca: CertificateAuthority;
    #fabrics: FabricManager;
    #config: FabricAuthorityConfiguration;

    constructor(context: FabricAuthorityContext) {
        this.#ca = context.ca;
        this.#fabrics = context.fabrics;
        this.#config = context.config;
    }

    /**
     * Obtain the default fabric for this authority.
     */
    async defaultFabric() {
        // First search for a fabric associated with the CA's root certificate
        const fabric = this.fabrics[0];
        if (fabric !== undefined) {
            if (fabric.label !== this.#config.adminFabricLabel) {
                await fabric.setLabel(this.#config.adminFabricLabel);
            }
            return fabric;
        }

        // Create a new fabric
        return await this.createFabric();
    }

    /**
     * List all controlled fabrics.
     */
    get fabrics() {
        return Array.from(this.#fabrics).filter(this.hasControlOf.bind(this));
    }

    /**
     * Determine whether a fabric belongs to this authority.
     */
    hasControlOf(fabric: Fabric) {
        return Bytes.areEqual(fabric.rootCert, this.#ca.rootCert);
    }

    /**
     * Create a new fabric under our control.
     */
    async createFabric() {
        const rootNodeId = NodeId.randomOperationalNodeId();
        const ipkValue = Crypto.getRandomData(CRYPTO_SYMMETRIC_KEY_LENGTH);

        let vendorId = this.#config.adminVendorId;
        if (vendorId === undefined) {
            vendorId = DEFAULT_ADMIN_VENDOR_ID;
            logger.warn(`Using test vendor ID 0x${vendorId.toString(16)} for controller fabric`);
        }

        const fabricBuilder = new FabricBuilder()
            .setRootCert(this.#ca.rootCert)
            .setRootNodeId(rootNodeId)
            .setIdentityProtectionKey(ipkValue)
            .setRootVendorId(this.#config.adminVendorId ?? DEFAULT_ADMIN_VENDOR_ID)
            .setLabel(this.#config.adminFabricLabel);

        fabricBuilder.setOperationalCert(
            this.#ca.generateNoc(
                fabricBuilder.publicKey,
                this.#config.fabricId ?? DEFAULT_FABRIC_ID,
                rootNodeId,
                this.#config.caseAuthenticatedTags,
            ),
        );

        let index = this.#config.fabricIndex;
        if (index === undefined) {
            index = this.#fabrics.allocateFabricIndex();
        } else if (this.#fabrics.findByIndex(index) !== undefined) {
            throw new ImplementationError(`Cannot allocate controller fabric ${index} because index is in use`);
        }

        const fabric = await fabricBuilder.build(index);
        this.#fabrics.addFabric(fabric);

        logger.debug(`Created new controller fabric ${index}`);

        return fabric;
    }

    static [Environmental.create](env: Environment) {
        const instance = new FabricAuthority({
            ca: env.get(CertificateAuthority),
            fabrics: env.get(FabricManager),
            config: env.get(FabricAuthorityConfigurationProvider),
        });
        env.set(FabricAuthority, instance);
        return instance;
    }
}
