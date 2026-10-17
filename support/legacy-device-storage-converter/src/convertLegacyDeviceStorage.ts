/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    camelize,
    DatafileRoot,
    Environment,
    Filesystem,
    ImplementationError,
    Logger,
    StorageContext,
    StorageManager,
    StorageService,
    SupportedStorageTypes,
} from "@matter/main";
import { AttributeModel, ClusterModel, Matter } from "@matter/main/model";
import { readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { isRecord, LegacyEndpoint, LegacyNode, readLegacyNode, StoredRecord } from "./LegacyDeviceStorage.js";

const logger = Logger.get("LegacyDeviceStorageConverter");

const ACCESS_CONTROL_CLUSTER = 0x1f;
const GENERAL_DIAGNOSTICS_CLUSTER = 0x33;
const MS_PER_HOUR = 3_600_000;

/** The fabric-scoped root attributes that are converted, by cluster id and attribute name. */
const FABRIC_SCOPED_ROOT_ATTRIBUTES: Record<number, string[]> = {
    [ACCESS_CONTROL_CLUSTER]: ["acl", "extension"],
};

export interface ConvertLegacyDeviceStorageOptions {
    /** Directory of the legacy node-localstorage files. It is only read. */
    legacyPath: string;

    /** The `storage.path` the new node uses. The converter writes into `<storagePath>/<nodeId>`; a relative path is resolved against the working directory. */
    storagePath: string;

    /** The `id` of the new `ServerNode`. */
    nodeId: string;

    /** The legacy storage context of the node: `uniqueStorageKey`, `uniqueNodeId`, or the node index. Default: "0". */
    legacyNodeKey?: string;

    /**
     * Returns the new `Endpoint` id for a legacy endpoint, or undefined to leave the endpoint and its children out.
     * The new endpoint path is built from the ids of the endpoint and its parents. An id must not contain ".".
     */
    endpointIdFor(endpoint: LegacyEndpoint): string | undefined;

    environment?: Environment;
}

/** Where each legacy endpoint went, keyed by the legacy `EndpointStructure` key. */
export interface LegacyConversionResult {
    readonly endpoints: Map<string, { number: number; path?: string[] }>;
}

/**
 * Convert the storage of a legacy (matter.js ≤ 0.12 `CommissioningServer`) device into the storage layout of a
 * `ServerNode`, so the device stays commissioned with its endpoint numbers after moving to the new API.
 *
 * The legacy directory is not modified. The target directory `<storagePath>/<nodeId>` must not exist or must be
 * empty; the converter never merges into an existing node storage.
 *
 * Converted:
 * - fabrics, the next fabric index, and the derived OperationalCredentials attributes
 * - the access control list, which the legacy API kept inside each fabric record
 * - CASE resumption records and the event number counter
 * - the endpoint number of every mapped endpoint, and the next free endpoint number
 * - persisted attribute values whose attribute still exists and is persisted by the new API
 *
 * The application must create its endpoints with the ids that {@link ConvertLegacyDeviceStorageOptions.endpointIdFor}
 * returns. Stored attribute values override the defaults the application passes when it creates an endpoint.
 *
 * Do not run this while a node uses either directory. If the conversion fails after it started writing, the target
 * directory is removed again, so the conversion can simply be repeated.
 *
 * @throws ImplementationError if the target directory is not empty, or an endpoint id is empty, has a "." or is
 *   returned for two endpoints with the same parent
 * @throws StorageError if the legacy directory holds no fabrics or no endpoint structure for the node key, or a
 *   legacy file is not valid JSON
 */
export async function convertLegacyDeviceStorage(
    options: ConvertLegacyDeviceStorageOptions,
): Promise<LegacyConversionResult> {
    const { legacyPath, storagePath, nodeId, legacyNodeKey = "0", endpointIdFor } = options;
    const environment = options.environment ?? Environment.default;

    const targetPath = join(resolve(storagePath), nodeId);
    if (await hasEntries(targetPath)) {
        throw new ImplementationError(`Target storage ${targetPath} is not empty; refusing to overwrite it`);
    }

    const legacy = await readLegacyNode(legacyPath, legacyNodeKey);
    const paths = endpointPaths(legacy, endpointIdFor);

    const storage = await environment
        .get(StorageService)
        .open(new DatafileRoot(environment.get(Filesystem).directory(targetPath)));
    let written = false;
    try {
        await writeNode(storage, legacy, paths);
        written = true;
    } finally {
        await storage.close();
        if (!written) {
            await rm(targetPath, { recursive: true, force: true });
        }
    }

    const endpoints = new Map<string, { number: number; path?: string[] }>();
    for (const endpoint of legacy.endpoints) {
        endpoints.set(endpoint.key, { number: endpoint.number, path: paths.get(endpoint) });
    }
    return { endpoints };
}

async function writeNode(storage: StorageManager, legacy: LegacyNode, paths: Map<LegacyEndpoint, string[]>) {
    await writeFabrics(storage.createContext("fabrics"), legacy);
    const root = storage.createContext("root");
    await writeOperationalCredentials(root.createContext("operationalCredentials"), legacy);
    await writeAccessControl(root.createContext("accessControl"), legacy);
    await writeSessions(storage.createContext("sessions"), legacy);
    await writeEventNumber(storage.createContext("events"), legacy);

    await root.set("__nextNumber__", legacy.nextEndpointNumber);
    await writeAttributes(root, legacy.root);
    for (const endpoint of legacy.endpoints) {
        const path = paths.get(endpoint);
        if (path === undefined) {
            continue;
        }
        const context = endpointContext(root, path);
        await context.set("__number__", endpoint.number);
        await writeAttributes(context, endpoint);
    }
}

async function hasEntries(path: string) {
    try {
        return (await readdir(path)).length > 0;
    } catch (error) {
        if (error instanceof Error && "code" in error && error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

function endpointPaths(legacy: LegacyNode, endpointIdFor: ConvertLegacyDeviceStorageOptions["endpointIdFor"]) {
    const paths = new Map<LegacyEndpoint, string[]>();
    const used = new Set<string>();

    for (const endpoint of legacy.endpoints) {
        const { parent } = endpoint;
        const parentPath = parent === undefined || parent === legacy.root ? [] : paths.get(parent);
        if (parentPath === undefined) {
            logger.info(`Legacy endpoint #${endpoint.number} (${endpoint.key}) is left out with its parent`);
            continue;
        }

        const id = endpointIdFor(endpoint);
        if (id === undefined) {
            logger.info(`Legacy endpoint #${endpoint.number} (${endpoint.key}) is not mapped and left out`);
            continue;
        }
        if (id === "" || id.includes(".")) {
            throw new ImplementationError(
                `Endpoint id "${id}" for legacy endpoint ${endpoint.key} is empty or has a "."`,
            );
        }

        const path = [...parentPath, id];
        const pathKey = path.join(".");
        if (used.has(pathKey)) {
            throw new ImplementationError(`Endpoint path ${pathKey} is mapped twice (second: ${endpoint.key})`);
        }
        used.add(pathKey);
        paths.set(endpoint, path);
    }

    return paths;
}

function endpointContext(root: StorageContext, path: string[]) {
    let context = root;
    for (const id of path) {
        context = context.createContext("parts").createContext(id);
    }
    return context;
}

/** Drops the fields the legacy API added to the fabric record; the new API derives or no longer has them. */
function fabricConfigOf(fabric: StoredRecord): StoredRecord {
    const {
        scopedClusterData: _scoped,
        operationalId: _operationalId,
        caseAuthenticatedTags: _cats,
        ...config
    } = fabric;
    return config;
}

async function writeFabrics(context: StorageContext, legacy: LegacyNode) {
    await context.set("fabrics", legacy.fabrics.map(fabricConfigOf));
    if (legacy.nextFabricIndex !== undefined) {
        await context.set("nextFabricIndex", legacy.nextFabricIndex);
    }
}

/** Mirrors the attributes OperationalCredentialsServer derives from the fabrics when the node goes online. */
async function writeOperationalCredentials(context: StorageContext, legacy: LegacyNode) {
    await context.set({
        fabrics: legacy.fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        })),
        nocs: legacy.fabrics.map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null,
            fabricIndex: fabric.fabricIndex,
        })),
        trustedRootCertificates: legacy.fabrics.map(fabric => fabric.rootCert),
        commissionedFabrics: legacy.fabrics.length,
    });
}

/**
 * The legacy API kept fabric-scoped data per fabric as `scopedClusterData`, a map of cluster id to a map of name to
 * value. For attributes the name is the attribute name and the value is `{ value }`; such an entry does not record
 * the endpoint, so only root endpoint attributes are converted. Other entries, such as group memberships, are logged
 * and skipped.
 */
async function writeAccessControl(context: StorageContext, legacy: LegacyNode) {
    const values: Record<string, SupportedStorageTypes[]> = {};
    for (const fabric of legacy.fabrics) {
        const scoped = fabric.scopedClusterData;
        if (!(scoped instanceof Map)) {
            continue;
        }
        for (const [clusterId, attributes] of scoped) {
            const names = FABRIC_SCOPED_ROOT_ATTRIBUTES[Number(clusterId)];
            if (!(attributes instanceof Map)) {
                continue;
            }
            for (const [name, stored] of attributes) {
                const entries = isRecord(stored) ? stored.value : undefined;
                if (Array.isArray(entries) && !entries.length) {
                    continue;
                }
                if (names === undefined || !names.includes(String(name)) || !Array.isArray(entries)) {
                    logger.warn(
                        `Fabric ${fabric.fabricIndex}: fabric-scoped data "${name}" of cluster ${clusterId} is not converted`,
                    );
                    continue;
                }
                (values[String(name)] ??= []).push(
                    ...entries.map(entry => (isRecord(entry) ? { ...entry, fabricIndex: fabric.fabricIndex } : entry)),
                );
            }
        }
    }
    if (Object.keys(values).length) {
        await context.set(values);
    }
}

/** The legacy session intervals carried an `Ms` suffix; the new names have none, with the same unit. */
async function writeSessions(context: StorageContext, legacy: LegacyNode) {
    if (!legacy.resumptionRecords.length) {
        return;
    }
    await context.set(
        "resumptionRecords",
        legacy.resumptionRecords.map(record => {
            const fabric = legacy.fabrics.find(fabric => fabric.fabricId === record.fabricId);
            const parameters = isRecord(record.sessionParameters) ? record.sessionParameters : {};
            const sessionParameters: StoredRecord = {};
            for (const [name, value] of Object.entries(parameters)) {
                sessionParameters[
                    name.endsWith("IntervalMs") || name.endsWith("ThresholdMs") ? name.slice(0, -2) : name
                ] = value;
            }
            return { ...record, fabricIndex: fabric?.fabricIndex, sessionParameters };
        }),
    );
}

/** The legacy API stored the last event number it used; the new API stores the next number it hands out. */
async function writeEventNumber(context: StorageContext, legacy: LegacyNode) {
    const last = legacy.lastEventNumber;
    if (typeof last === "bigint" || typeof last === "number") {
        await context.set("lastEventNumber", BigInt(last) + 1n);
    }
}

async function writeAttributes(context: StorageContext, endpoint: LegacyEndpoint) {
    for (const [clusterId, attributes] of endpoint.clusters) {
        const cluster = Matter.clusters(clusterId);
        if (cluster === undefined) {
            logger.warn(`Endpoint #${endpoint.number}: unknown cluster ${clusterId}, attributes not converted`);
            continue;
        }
        const values: Record<string, SupportedStorageTypes> = {};
        for (const [name, value] of attributes) {
            const converted = convertAttribute(cluster, name, value);
            if (converted === undefined) {
                logger.info(
                    `Endpoint #${endpoint.number}: ${cluster.name}.${name} is unknown or not persisted in the current model, skipped`,
                );
                continue;
            }
            values[converted.name] = converted.value;
        }
        if (Object.keys(values).length) {
            await context.createContext(camelize(cluster.name)).set(values);
        }
    }
}

function convertAttribute(cluster: ClusterModel, name: string, value: SupportedStorageTypes) {
    // The legacy API stored whole hours; the new API keeps the counter in milliseconds
    if (cluster.id === GENERAL_DIAGNOSTICS_CLUSTER && name === "totalOperationalHours" && typeof value === "number") {
        return { name: "totalOperationalHoursCounter", value: value * MS_PER_HOUR };
    }

    const attribute = cluster.attributes.find(attribute => attribute.propertyName === name);
    if (attribute === undefined || !isPersisted(attribute)) {
        return;
    }
    return { name, value };
}

/** The persistence rule of the node's RootSupervisor, applied to the standard cluster model. */
function isPersisted(attribute: AttributeModel) {
    const access = attribute.effectiveAccess;
    return attribute.effectiveQuality.nonvolatile || access.writable || access.fabricScoped;
}
