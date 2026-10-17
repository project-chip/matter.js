/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, isObject, StorageError, SupportedStorageTypes } from "@matter/main";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

/** A stored object value, as returned by {@link fromJson}. */
export type StoredRecord = { [key: string]: SupportedStorageTypes | null | undefined };

/**
 * One endpoint of a legacy (matter.js ≤ 0.12 `CommissioningServer`) node, rebuilt from its `EndpointStructure`
 * entries.
 *
 * The legacy API stored one `EndpointStructure` key per endpoint. The key is the parent's key plus `-` plus the
 * endpoint's own identifier:
 *
 * | identifier       | used when the endpoint has                                     |
 * |------------------|----------------------------------------------------------------|
 * | `custom_<key>`   | the `uniqueStorageKey` option                                  |
 * | `unique_<id>`    | a (Bridged) BasicInformation cluster with a `uniqueId`         |
 * | `serial_<sn>`    | a (Bridged) BasicInformation cluster with a `serialNumber` only |
 * | `index_<i>`      | none of these; `<i>` is its position in the parent's child list |
 *
 * The root endpoint (number 0) is never stored; its identifier is the prefix of every key.
 */
export interface LegacyEndpoint {
    /** The full legacy `EndpointStructure` key, including the root prefix. */
    readonly key: string;

    /** The endpoint's own identifier, such as `unique_DUE:7E2E:119` or `index_1`. Empty for the root. */
    readonly identifier: string;

    readonly number: number;

    /** Undefined only for the root endpoint. */
    readonly parent?: LegacyEndpoint;

    /** Ordered by endpoint number. Use the `index_<i>` identifier, not this order, for the legacy child position. */
    readonly children: LegacyEndpoint[];

    /** Persisted attribute values by cluster id, then attribute name. */
    readonly clusters: Map<number, Map<string, SupportedStorageTypes>>;
}

/** The legacy data of one node, grouped by storage context and key. */
export interface LegacyNode {
    readonly root: LegacyEndpoint;
    readonly endpoints: LegacyEndpoint[];
    readonly nextEndpointNumber: number;
    readonly fabrics: StoredRecord[];
    readonly nextFabricIndex?: number;
    readonly resumptionRecords: StoredRecord[];
    readonly lastEventNumber?: SupportedStorageTypes;
}

const IDENTIFIER_BOUNDARY = /-(?=(?:custom|unique|serial|index)_)/;
const CLUSTER_CONTEXT = /^Cluster-(\d+)-(\d+)$/;

/**
 * Read the legacy node stored under {@link nodeKey} from a node-localstorage directory.
 *
 * File names are decoded until they no longer change. Storage copied from devices in the field contained names that
 * were URL-encoded twice (`%253A`); a single decode would leave `%3A` inside the unique id. A unique id that itself
 * contains a `%` escape sequence is therefore decoded as well.
 *
 * @throws StorageError if the directory holds no fabrics or no endpoint structure for {@link nodeKey}
 */
export async function readLegacyNode(legacyPath: string, nodeKey = "0"): Promise<LegacyNode> {
    const contexts = await readContexts(legacyPath, nodeKey);

    const fabrics = recordList(contexts.get("FabricManager")?.get("fabrics"), "FabricManager.fabrics");
    if (!fabrics.length) {
        throw new StorageError(`No fabrics found for legacy node "${nodeKey}" in ${legacyPath}`);
    }

    const structure = contexts.get("EndpointStructure");
    if (structure === undefined) {
        throw new StorageError(`No EndpointStructure found for legacy node "${nodeKey}" in ${legacyPath}`);
    }

    const clusters = new Map<number, Map<number, Map<string, SupportedStorageTypes>>>();
    for (const [context, values] of contexts) {
        const match = context.match(CLUSTER_CONTEXT);
        if (match === null) {
            continue;
        }
        const [, endpointNumber, clusterId] = match.map(Number);
        let endpointClusters = clusters.get(endpointNumber);
        if (endpointClusters === undefined) {
            clusters.set(endpointNumber, (endpointClusters = new Map()));
        }
        endpointClusters.set(clusterId, values);
    }

    const { root, endpoints } = buildEndpointTree(structure, clusters);

    const storedNext = structure.get("nextEndpointId");
    const highest = Math.max(0, ...endpoints.map(endpoint => endpoint.number));
    const nextEndpointNumber = typeof storedNext === "number" && storedNext > highest ? storedNext : highest + 1;

    const nextFabricIndex = contexts.get("FabricManager")?.get("nextFabricIndex");

    return {
        root,
        endpoints,
        nextEndpointNumber,
        fabrics,
        nextFabricIndex: typeof nextFabricIndex === "number" ? nextFabricIndex : undefined,
        resumptionRecords: recordList(
            contexts.get("SessionManager")?.get("resumptionRecords"),
            "SessionManager.resumptionRecords",
        ),
        lastEventNumber: contexts.get("EventHandler")?.get("lastEventNumber"),
    };
}

async function readContexts(legacyPath: string, nodeKey: string) {
    const contexts = new Map<string, Map<string, SupportedStorageTypes>>();
    for (const entry of await readdir(legacyPath, { withFileTypes: true })) {
        if (!entry.isFile()) {
            continue;
        }

        // A legacy key may contain dots, so everything after the context is the key
        const [node, context, ...keyParts] = decodeFully(entry.name).split(".");
        if (node !== nodeKey || context === undefined || !keyParts.length) {
            continue;
        }

        let values = contexts.get(context);
        if (values === undefined) {
            contexts.set(context, (values = new Map()));
        }
        const content = await readFile(join(legacyPath, entry.name), "utf8");
        try {
            values.set(keyParts.join("."), fromJson(content));
        } catch (cause) {
            throw new StorageError(`Legacy file ${entry.name} does not contain valid JSON`, { cause });
        }
    }
    return contexts;
}

function decodeFully(name: string) {
    for (;;) {
        let decoded: string;
        try {
            decoded = decodeURIComponent(name);
        } catch {
            return name;
        }
        if (decoded === name) {
            return name;
        }
        name = decoded;
    }
}

function buildEndpointTree(
    structure: Map<string, SupportedStorageTypes>,
    clusters: Map<number, Map<number, Map<string, SupportedStorageTypes>>>,
) {
    const entries = [...structure].filter(
        (entry): entry is [string, number] => entry[0] !== "nextEndpointId" && typeof entry[1] === "number",
    );
    const rootPrefix = rootPrefixOf(entries.map(([key]) => key));

    const root: LegacyEndpoint = {
        key: rootPrefix,
        identifier: "",
        number: 0,
        children: [],
        clusters: clusters.get(0) ?? new Map(),
    };

    const byKey = new Map<string, LegacyEndpoint>([[rootPrefix, root]]);
    const endpoints = new Array<LegacyEndpoint>();

    // Shorter keys first, so every parent exists before its children
    entries.sort(([a], [b]) => a.split(IDENTIFIER_BOUNDARY).length - b.split(IDENTIFIER_BOUNDARY).length);
    for (const [key, number] of entries) {
        const segments = key.split(IDENTIFIER_BOUNDARY);
        const identifier = segments.pop() ?? key;
        const parent = byKey.get(segments.join("-"));
        if (parent === undefined) {
            throw new StorageError(`Legacy endpoint ${key} (#${number}) has no stored parent endpoint`);
        }
        const endpoint: LegacyEndpoint = {
            key,
            identifier,
            number,
            parent,
            children: [],
            clusters: clusters.get(number) ?? new Map(),
        };
        parent.children.push(endpoint);
        byKey.set(key, endpoint);
        endpoints.push(endpoint);
    }

    for (const endpoint of [root, ...endpoints]) {
        endpoint.children.sort((a, b) => a.number - b.number);
    }

    return { root, endpoints };
}

/**
 * The root endpoint's identifier is the first segment of every key, but is never stored as a key itself. If the root
 * had no identifier, its children are stored without a prefix.
 */
function rootPrefixOf(keys: string[]) {
    const firstSegments = new Set(keys.map(key => key.split(IDENTIFIER_BOUNDARY)[0]));
    if (firstSegments.size !== 1) {
        return "";
    }
    const [first] = firstSegments;
    return keys.includes(first) ? "" : first;
}

function recordList(value: SupportedStorageTypes | undefined, what: string): StoredRecord[] {
    if (value === undefined) {
        return [];
    }
    if (!Array.isArray(value)) {
        throw new StorageError(`Legacy ${what} is not a list`);
    }
    return value.map(entry => {
        if (!isRecord(entry)) {
            throw new StorageError(`Legacy ${what} contains an entry that is not an object`);
        }
        return entry;
    });
}

/** True for a plain stored object; false for lists, maps and byte arrays. */
export function isRecord(value: unknown): value is StoredRecord {
    return isObject(value) && !Array.isArray(value) && !(value instanceof Map) && !(value instanceof Uint8Array);
}
