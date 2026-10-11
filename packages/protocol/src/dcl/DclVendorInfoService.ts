/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Construction,
    Days,
    Diagnostic,
    Duration,
    Environment,
    Logger,
    StorageContext,
    StorageManager,
    StorageService,
    Time,
    Timer,
    asError,
} from "@matter/general";
import {
    CommissioningFlowType,
    DeviceModelDclSchema,
    DeviceTypeId,
    DiscoveryCapabilitiesSchema,
    EnhancedSetupFlowOptionsSchema,
    TypeFromBitmapSchema,
    VendorDclSchema,
} from "@matter/types";
import { PairingHintBitmapSchema } from "../advertisement/PairingHintBitmap.js";
import { DclClient, MatterDclError, MatterDclResponseError } from "./DclClient.js";
import { DclConfig } from "./DclConfig.js";
import { DclErrorCodes } from "./DclRestApiTypes.js";
import type { SeedSource, VendorEntry as VendorSeedEntry } from "./SeedTypes.js";

const logger = Logger.get("DclVendorInfoService");

/**
 * Normalized vendor information with consistent naming conventions.
 */
export type VendorInfo = {
    vendorId: number;
    vendorName: string;
    companyLegalName: string;
    companyPreferredName: string;
    vendorLandingPageUrl: string;
    creator: string;
};

/**
 * Normalized product information from DCL, with bitmaps decoded and wire-format
 * internals (vid, pid, schemaVersion, TC digest/size) stripped.
 */
export type ProductInfo = {
    /** Primary Device Type identifier for the device, e.g. 0x000A for Door Lock. */
    deviceTypeID: DeviceTypeId;

    /** Human-readable product name. Matches the ProductName field in the Basic Information Cluster. */
    productName: string;

    /** Human-readable product label. Matches the ProductLabel field in the Basic Information Cluster. */
    productLabel: string;

    /**
     * Part number for this product. Matches the PartNumber field in the Basic Information Cluster.
     * Multiple products sharing the same ProductID (e.g. different regional packaging or colors)
     * may have different part numbers.
     */
    partNumber: string;

    /**
     * Device discovery technologies supported by this device — whether it supports BLE,
     * IP network, or Wi-Fi Public Action Frame for discovery.
     */
    discoveryCapabilities: TypeFromBitmapSchema<typeof DiscoveryCapabilitiesSchema>;

    /**
     * Commissioning flow type: Standard (device enters commissioning on power-up),
     * UserIntent (user action required), or Custom (vendor-specified means needed).
     */
    commissioningFlow: CommissioningFlowType;

    /** Vendor-specific URL to initiate commissioning when flow is Custom. */
    commissioningCustomFlowUrl?: string;

    /**
     * Hints for how to put a not-yet-commissioned device into commissioning mode,
     * e.g. power cycle, press reset button, or use the device manual.
     */
    commissioningModeInitialStepsHint: TypeFromBitmapSchema<typeof PairingHintBitmapSchema>;

    /** Pairing instruction text for initial commissioning steps that require user guidance. */
    commissioningModeInitialStepsInstruction?: string;

    /**
     * Hints for how to put an already-commissioned device back into commissioning mode,
     * e.g. via an existing Administrator or by pressing the setup button.
     */
    commissioningModeSecondaryStepsHint: TypeFromBitmapSchema<typeof PairingHintBitmapSchema>;

    /** Pairing instruction text for secondary commissioning steps that require user guidance. */
    commissioningModeSecondaryStepsInstruction?: string;

    /** Vendor URL to help users resolve commissioning failures. */
    commissioningFallbackUrl?: string;

    /** Link to the product's user manual. */
    userManualUrl?: string;

    /** Link to the product's support page. */
    supportUrl?: string;

    /** Link to the product's web page. Matches the ProductURL field in the Basic Information Cluster. */
    productUrl?: string;

    /** Link to the Localized String File for this product. */
    lsfUrl?: string;

    /** Version number of the Localized String File — increases with each published revision. */
    lsfRevision?: number;

    /**
     * Configuration flags for the Enhanced Setup Flow, e.g. whether Terms and Conditions
     * must be shown during initial commissioning.
     */
    enhancedSetupFlowOptions: TypeFromBitmapSchema<typeof EnhancedSetupFlowOptionsSchema>;

    /** Link to the Enhanced Setup Flow Terms and Conditions file. */
    enhancedSetupFlowTCUrl?: string;

    /** Version number of the Terms and Conditions file — increases with each published revision. */
    enhancedSetupFlowTCRevision?: number;

    /** Vendor URL to resolve functionality limitations after Terms and Conditions change. */
    enhancedSetupFlowMaintenanceUrl?: string;
};

/**
 * Vendors known without the DCL: the test vendor IDs of the specification (0xFFF1–0xFFF4) and Nabu Casa. A DCL record
 * for the same vendor ID takes precedence.
 */
const STATIC_VENDORS: readonly VendorInfo[] = [
    ...[0xfff1, 0xfff2, 0xfff3, 0xfff4].map(vendorId => ({
        vendorId,
        vendorName: "Test Vendor",
        companyLegalName: "Test Vendor Inc.",
        companyPreferredName: "Test Vendor",
        vendorLandingPageUrl: "https://test.example.com",
        creator: "System",
    })),
    {
        vendorId: 4939,
        vendorName: "Nabu Casa",
        companyLegalName: "Nabu Casa, Inc.",
        companyPreferredName: "Nabu Casa",
        vendorLandingPageUrl: "https://www.nabucasa.com",
        creator: "System",
    },
];

/**
 * Implements a service to manage DCL vendor information as a singleton in the environment and so will be shared by
 * multiple nodes if relevant. It is mainly relevant for controller use cases.
 * The service supports fetching vendor information from the CSA production DCL instance.
 */
export class DclVendorInfoService {
    readonly #construction: Construction<DclVendorInfoService>;
    #storageManager?: StorageManager;
    #storage?: StorageContext;
    #vendorIndex = new Map<number, VendorInfo>();
    #updateTimer?: Timer;
    #closed = false;
    #options: DclVendorInfoService.Options;
    #fetchPromise?: Promise<void>;

    constructor(environment: Environment, options: DclVendorInfoService.Options = {}) {
        environment.root.set(DclVendorInfoService, this);
        this.#options = options;
        logger.info(
            "Initialize VendorInfoService",
            Diagnostic.dict({
                source: options.dclConfig?.url ?? DclConfig.production.url,
                interval:
                    options.updateInterval === null ? "disabled" : Duration.format(options.updateInterval ?? Days.one),
                flags: Diagnostic.asFlags({ offline: options.offline }),
            }),
        );

        this.#construction = Construction(this, async () => {
            this.#storageManager = await environment.get(StorageService).open("vendors");
            this.#storage = this.#storageManager.createContext("info");
            await this.#loadVendors(this.#storage);
            if (options.seed?.vendors) {
                await this.#consumeVendorSeed(options.seed.vendors);
            }
            this.#addStaticVendors();
            await this.update();

            if (!options.offline && options.updateInterval !== null) {
                // Start periodic update timer
                const updateInterval = options.updateInterval ?? Days.one;
                this.#updateTimer = Time.getPeriodicTimer("DCL Vendor Info Update", updateInterval, () =>
                    this.update(),
                ).start();
            }
        });
    }

    get construction() {
        return this.#construction;
    }

    /** Whether the service runs {@link DclVendorInfoService.Options.offline}. */
    get offline() {
        return this.#options.offline ?? false;
    }

    /**
     * Get vendor information by vendor ID. Returns undefined if not found.
     */
    infoFor(vendorId: number): VendorInfo | undefined {
        this.construction.assert();
        return this.#vendorIndex.get(vendorId);
    }

    /**
     * Get all vendor information as a map indexed by vendor ID.
     */
    get vendors(): ReadonlyMap<number, VendorInfo> {
        this.construction.assert();
        return this.#vendorIndex;
    }

    /**
     * Update vendor information from DCL. Does nothing when the service is
     * {@link DclVendorInfoService.Options.offline}.
     */
    async update() {
        if (this.#closed || !this.#storage || this.#options.offline) {
            return;
        }

        if (this.#fetchPromise !== undefined) {
            // Wait for ongoing fetch to complete
            await this.#fetchPromise;
            return;
        }

        try {
            this.#fetchPromise = this.#fetchVendorsFromDcl(this.#storage).finally(() => {
                this.#fetchPromise = undefined;
            });
            await this.#fetchPromise;
        } catch (error) {
            logger.info("Error updating vendor information", Diagnostic.errorMessage(asError(error)));
        }
    }

    /**
     * Fetch product details for a given vendor ID and product ID from DCL.
     * Returns undefined if the product is not found or the service is closed or
     * {@link DclVendorInfoService.Options.offline}.
     */
    async productInfoFor(vendorId: number, productId: number): Promise<ProductInfo | undefined> {
        if (this.#closed || this.#options.offline) {
            return undefined;
        }
        try {
            const dclClient = new DclClient(this.#options.dclConfig ?? DclConfig.production);
            const model = await dclClient.fetchModelByVidPid(vendorId, productId, this.#options);
            return this.#normalizeProductModel(model);
        } catch (error) {
            if (error instanceof MatterDclResponseError && error.response.code === DclErrorCodes.NotFound) {
                logger.debug("Product not found in DCL", Diagnostic.dict({ vendorId, productId }));
                return undefined;
            }
            throw error;
        }
    }

    #normalizeProductModel(model: DeviceModelDclSchema): ProductInfo | undefined {
        const {
            deviceTypeId,
            productName,
            productLabel,
            partNumber,
            discoveryCapabilitiesBitmask,
            commissioningCustomFlow,
            commissioningCustomFlowUrl,
            commissioningModeInitialStepsHint,
            commissioningModeInitialStepsInstruction,
            commissioningModeSecondaryStepsHint,
            commissioningModeSecondaryStepsInstruction,
            commissioningFallbackUrl,
            userManualUrl,
            supportUrl,
            productUrl,
            lsfUrl,
            lsfRevision,
            enhancedSetupFlowOptions,
            enhancedSetupFlowTCUrl,
            enhancedSetupFlowTCRevision,
            maintenanceUrl,
        } = model;
        try {
            return {
                deviceTypeID: deviceTypeId,
                productName,
                productLabel,
                partNumber,
                discoveryCapabilities: DiscoveryCapabilitiesSchema.decode(discoveryCapabilitiesBitmask),
                commissioningFlow: commissioningCustomFlow as CommissioningFlowType,
                commissioningCustomFlowUrl,
                commissioningModeInitialStepsHint: PairingHintBitmapSchema.decode(commissioningModeInitialStepsHint),
                commissioningModeInitialStepsInstruction,
                commissioningModeSecondaryStepsHint: PairingHintBitmapSchema.decode(
                    commissioningModeSecondaryStepsHint,
                ),
                commissioningModeSecondaryStepsInstruction,
                commissioningFallbackUrl,
                userManualUrl,
                supportUrl,
                productUrl,
                lsfUrl,
                lsfRevision,
                enhancedSetupFlowOptions: EnhancedSetupFlowOptionsSchema.decode(enhancedSetupFlowOptions),
                enhancedSetupFlowTCUrl,
                enhancedSetupFlowTCRevision,
                enhancedSetupFlowMaintenanceUrl: maintenanceUrl,
            };
        } catch (error) {
            logger.warn(
                "Invalid DCL product entry",
                Diagnostic.dict({ vendorId: model.vid, productId: model.pid }),
                error,
            );
            return undefined;
        }
    }

    /**
     * Load vendor information from storage.
     */
    async #loadVendors(storage: StorageContext) {
        const storedVendors = await storage.get<VendorInfo[]>("vendors", []);
        for (const vendor of storedVendors) {
            this.#vendorIndex.set(vendor.vendorId, vendor);
        }
        if (storedVendors.length > 0) {
            logger.info(`Loaded ${this.#vendorIndex.size} vendors from storage`);
        }
    }

    /**
     * Add the {@link STATIC_VENDORS} the index does not hold yet. They are not stored, and the index is never cleared
     * after this, so they stay available whether or not the DCL is reachable.
     */
    #addStaticVendors() {
        for (const vendor of STATIC_VENDORS) {
            if (!this.#vendorIndex.has(vendor.vendorId)) {
                this.#vendorIndex.set(vendor.vendorId, { ...vendor });
            }
        }
    }

    /**
     * Fetch vendor information from DCL and store it.
     */
    async #fetchVendorsFromDcl(storage: StorageContext) {
        logger.info("Fetching vendor information from DCL");

        const dclClient = new DclClient(this.#options.dclConfig ?? DclConfig.production);
        const vendors = await dclClient.fetchAllVendors(this.#options);

        logger.info(`Fetched ${vendors.length} vendors from DCL`);

        // Convert DCL format to internal format and update index
        const vendorsToStore: VendorInfo[] = [];
        for (const vendor of vendors) {
            const normalizedVendor = this.#normalizeDclVendor(vendor);
            this.#vendorIndex.set(normalizedVendor.vendorId, normalizedVendor);
            vendorsToStore.push(normalizedVendor);
        }

        // Store all vendors as an array
        await storage.set("vendors", vendorsToStore);

        logger.info(`Stored ${vendorsToStore.length} vendors`);
    }

    /**
     * Normalize DCL vendor format to internal format.
     */
    #normalizeDclVendor(dclVendor: VendorDclSchema): VendorInfo {
        return {
            vendorId: dclVendor.vendorID,
            vendorName: dclVendor.vendorName,
            companyLegalName: dclVendor.companyLegalName,
            companyPreferredName: dclVendor.companyPreferredName ?? "",
            vendorLandingPageUrl: dclVendor.vendorLandingPageURL ?? "",
            creator: dclVendor.creator,
        };
    }

    async #consumeVendorSeed(source: SeedSource<VendorSeedEntry>) {
        if (this.#vendorIndex.size >= source.expectedCount) {
            logger.info(
                `seed: skipping vendors — storage has ${this.#vendorIndex.size} entries >= seed expectedCount ${source.expectedCount}`,
            );
            return;
        }

        const collected = new Array<VendorInfo>();
        try {
            for await (const entry of source.entries) {
                if (this.#closed) break;
                try {
                    if (
                        typeof entry.vendorId !== "number" ||
                        typeof entry.vendorName !== "string" ||
                        !entry.vendorName ||
                        (entry.kind !== "production" && entry.kind !== "test")
                    ) {
                        throw new MatterDclError("invalid vendor entry shape");
                    }
                    collected.push({
                        vendorId: entry.vendorId,
                        vendorName: entry.vendorName,
                        companyLegalName: entry.companyLegalName ?? "",
                        companyPreferredName: entry.companyPreferredName ?? "",
                        vendorLandingPageUrl: entry.vendorLandingPageURL ?? "",
                        creator: entry.creator ?? "",
                    });
                } catch (err) {
                    logger.warn("seed: malformed vendor entry, aborting stream", Diagnostic.errorMessage(asError(err)));
                    break;
                }
            }
        } catch (err) {
            logger.warn("seed: vendor stream failed", Diagnostic.errorMessage(asError(err)));
            return;
        }

        if (this.#closed || collected.length === 0) return;

        this.#vendorIndex.clear();
        for (const vendor of collected) {
            this.#vendorIndex.set(vendor.vendorId, vendor);
        }
        await this.#storage!.set("vendors", collected);

        logger.info(`seed: consumed ${collected.length} vendors from snapshot ${source.builtAt}`);
    }

    /**
     * Close the service and stop periodic updates.
     */
    async close() {
        if (this.#closed) return;
        this.#closed = true;
        await this.#construction.close(async () => {
            await this.#fetchPromise;
            this.#updateTimer?.stop();
            this.#updateTimer = undefined;
            await this.#storageManager?.close();
        });
    }
}

export namespace DclVendorInfoService {
    export interface Options extends DclClient.Options {
        /**
         * Interval for periodic vendor information updates.
         * Default is 1 day. Set to null to disable periodic updates.
         */
        updateInterval?: Duration | null;

        /** DCL config for production endpoint. Defaults to DclConfig.production. */
        dclConfig?: DclConfig;

        /**
         * Pre-populate storage from snapshot when stored vendor count is less than seed.expectedCount. Network update
         * still runs after unless `offline`.
         */
        seed?: { vendors?: SeedSource<VendorSeedEntry> };

        /**
         * Reaches no network at all: no vendor update, neither at start nor periodically, and no product lookup.
         * Vendor information is whatever storage and `seed` carried plus the built-in test vendors, and a product
         * reads as absent.
         *
         * For a deployment with no route to the ledger, and for short-lived test processes that must not depend on
         * it.
         */
        offline?: boolean;
    }
}
