/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Bytes,
    DatafileRoot,
    Endpoint,
    Environment,
    Filesystem,
    ImplementationError,
    ServerNode,
    StorageError,
    StorageManager,
    StorageService,
    SupportedStorageTypes,
    toJson,
} from "@matter/main";
import { WindowCoveringServer } from "@matter/main/behaviors/window-covering";
import { DimmableLightDevice } from "@matter/main/devices/dimmable-light";
import { WindowCoveringDevice } from "@matter/main/devices/window-covering";
import { AggregatorEndpoint } from "@matter/main/endpoints/aggregator";
import { BridgedNodeEndpoint } from "@matter/main/endpoints/bridged-node";
import { FabricManager } from "@matter/main/protocol";
import { NodeJsFilesystem } from "@matter/nodejs";
import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { convertLegacyDeviceStorage } from "../src/convertLegacyDeviceStorage.js";
import type { LegacyEndpoint } from "../src/LegacyDeviceStorage.js";
import { shadeBridgeEndpointId } from "../src/ShadeBridgeEndpointIds.js";

// Tests run from build/<format>/test; the fixture files are not copied there
const FIXTURE = join(import.meta.dirname, "..", "..", "..", "test", "fixtures", "shade-bridge-0.9.5");
const NODE_ID = "shade-bridge";
const AGGREGATOR_ID = "hd-aggregator";

const shadeIds = (endpoint: LegacyEndpoint) => shadeBridgeEndpointId(endpoint, AGGREGATOR_ID);

/** The fixture was written by a matter.js 0.9.5 `CommissioningServer` bridge; see fixtures/README.md. */
const FIXTURE_ENDPOINTS: Record<string, number> = {
    [AGGREGATOR_ID]: 1,
    [`${AGGREGATOR_ID}/119-node`]: 2,
    [`${AGGREGATOR_ID}/119-node/119-primary`]: 3,
    [`${AGGREGATOR_ID}/119-node/119-secondary`]: 4,
    [`${AGGREGATOR_ID}/274-node`]: 5,
    [`${AGGREGATOR_ID}/274-node/274-primary`]: 6,
    [`${AGGREGATOR_ID}/274-node/274-secondary`]: 7,
    [`${AGGREGATOR_ID}/274-node/274-aura`]: 8,
    [`${AGGREGATOR_ID}/209-node`]: 9,
    [`${AGGREGATOR_ID}/209-node/209-primary`]: 10,
    [`${AGGREGATOR_ID}/350-node`]: 11,
    [`${AGGREGATOR_ID}/350-node/350-primary`]: 12,
    [`${AGGREGATOR_ID}/350-node/350-aura`]: 13,
    [`${AGGREGATOR_ID}/401-node`]: 14,
    [`${AGGREGATOR_ID}/401-node/401-primary`]: 15,
    [`${AGGREGATOR_ID}/401-node/401-secondary`]: 16,
    [`${AGGREGATOR_ID}/162-node`]: 17,
    [`${AGGREGATOR_ID}/162-node/162-primary`]: 18,
    [`${AGGREGATOR_ID}/162-node/162-secondary`]: 19,
};

describe("convertLegacyDeviceStorage", () => {
    let environment: Environment;
    let workDir: string;
    let storagePath: string;

    beforeEach(async () => {
        workDir = await mkdtemp(join(tmpdir(), "legacy-storage-"));
        storagePath = join(workDir, "new");
        environment = new Environment("legacy-storage-test", Environment.default);
        environment.set(Filesystem, new NodeJsFilesystem(storagePath));
    });

    afterEach(async () => {
        await rm(workDir, { recursive: true, force: true });
    });

    async function convert(legacyPath = FIXTURE) {
        return convertLegacyDeviceStorage({
            legacyPath,
            storagePath,
            nodeId: NODE_ID,
            endpointIdFor: shadeIds,
            environment,
        });
    }

    async function openConverted() {
        return environment
            .get(StorageService)
            .open(new DatafileRoot(environment.get(Filesystem).directory(join(storagePath, NODE_ID))));
    }

    async function readConverted<T>(read: (storage: StorageManager) => Promise<T>) {
        const storage = await openConverted();
        try {
            return await read(storage);
        } finally {
            await storage.close();
        }
    }

    function endpointContext(storage: StorageManager, path: string) {
        let context = storage.createContext("root");
        for (const id of path.split("/")) {
            context = context.createContext("parts").createContext(id);
        }
        return context;
    }

    it("maps every legacy endpoint of the fixture to its new id and number", async () => {
        const { endpoints } = await convert();

        const mapped = Object.fromEntries(
            [...endpoints.values()].map(({ number, path }) => [path?.join("/") ?? "?", number]),
        );
        expect(mapped).deep.equals(FIXTURE_ENDPOINTS);

        const stored = await readConverted(async storage => {
            const numbers: Record<string, number> = {};
            for (const path of Object.keys(FIXTURE_ENDPOINTS)) {
                numbers[path] = await endpointContext(storage, path).get<number>("__number__");
            }
            return { numbers, next: await storage.createContext("root").get<number>("__nextNumber__") };
        });
        expect(stored.numbers).deep.equals(FIXTURE_ENDPOINTS);
        expect(stored.next).equals(20);
    });

    it("writes fabrics, derived OperationalCredentials state and the ACL", async () => {
        await convert();

        const { fabrics, nextFabricIndex, credentials, nocs, roots, commissioned, acl } = await readConverted(
            async storage => {
                const operationalCredentials = storage.createContext("root").createContext("operationalCredentials");
                return {
                    fabrics: await storage
                        .createContext("fabrics")
                        .get<Record<string, SupportedStorageTypes>[]>("fabrics"),
                    nextFabricIndex: await storage.createContext("fabrics").get<number>("nextFabricIndex"),
                    credentials: await operationalCredentials.get<Record<string, SupportedStorageTypes>[]>("fabrics"),
                    nocs: await operationalCredentials.get("nocs"),
                    roots: await operationalCredentials.get("trustedRootCertificates"),
                    commissioned: await operationalCredentials.get("commissionedFabrics"),
                    acl: await storage
                        .createContext("root")
                        .createContext("accessControl")
                        .get<Record<string, SupportedStorageTypes>[]>("acl"),
                };
            },
        );

        expect(fabrics.length).equals(1);
        expect(fabrics[0]).not.have.any.keys("scopedClusterData", "operationalId", "caseAuthenticatedTags");
        expect(fabrics[0].fabricIndex).equals(1);
        expect(nextFabricIndex).equals(2);
        expect(credentials).deep.equals([
            {
                fabricId: fabrics[0].fabricId,
                label: fabrics[0].label,
                nodeId: fabrics[0].nodeId,
                rootPublicKey: fabrics[0].rootPublicKey,
                vendorId: fabrics[0].rootVendorId,
                fabricIndex: 1,
            },
        ]);
        expect(nocs).deep.equals([{ noc: fabrics[0].operationalCert, icac: null, fabricIndex: 1 }]);
        expect(roots).deep.equals([fabrics[0].rootCert]);
        expect(commissioned).equals(1);
        expect(acl).deep.equals([
            { fabricIndex: 1, privilege: 5, authMode: 2, subjects: [fabrics[0].rootNodeId], targets: null },
        ]);
    });

    it("writes persisted attribute values to the new behaviors", async () => {
        await convert();

        const values = await readConverted(async storage => ({
            liftPrimary: await endpointContext(storage, `${AGGREGATOR_ID}/119-node/119-primary`)
                .createContext("windowCovering")
                .get("currentPositionLiftPercent100ths"),
            liftSecondary: await endpointContext(storage, `${AGGREGATOR_ID}/119-node/119-secondary`)
                .createContext("windowCovering")
                .get("currentPositionLiftPercent100ths"),
            tilt: await endpointContext(storage, `${AGGREGATOR_ID}/209-node/209-primary`)
                .createContext("windowCovering")
                .get("currentPositionTiltPercent100ths"),
            onOff: await endpointContext(storage, `${AGGREGATOR_ID}/350-node/350-aura`)
                .createContext("onOff")
                .get("onOff"),
            level: await endpointContext(storage, `${AGGREGATOR_ID}/350-node/350-aura`)
                .createContext("levelControl")
                .get("currentLevel"),
        }));

        expect(values).deep.equals({ liftPrimary: 2500, liftSecondary: 7500, tilt: 3000, onOff: true, level: 77 });
    });

    it("loads the converted storage into a ServerNode with the legacy fabric and endpoint numbers", async () => {
        await convert();

        const node = await ServerNode.create({ id: NODE_ID, environment });
        try {
            const aggregator = new Endpoint(AggregatorEndpoint, { id: AGGREGATOR_ID });
            await node.add(aggregator);

            const shade = new Endpoint(BridgedNodeEndpoint, { id: "350-node" });
            await aggregator.add(shade);
            const primary = new Endpoint(
                WindowCoveringDevice.with(WindowCoveringServer.with("Lift", "PositionAwareLift")),
                { id: "350-primary" },
            );
            await shade.add(primary);
            const aura = new Endpoint(DimmableLightDevice, { id: "350-aura", onOff: { onOff: false } });
            await shade.add(aura);

            // A shade that did not exist in the legacy storage gets the next free number
            const added = new Endpoint(BridgedNodeEndpoint, { id: "999-node" });
            await aggregator.add(added);

            expect([aggregator.number, shade.number, primary.number, aura.number, added.number]).deep.equals([
                1, 11, 12, 13, 20,
            ]);
            expect(aura.state.onOff.onOff).equals(true);
            expect(aura.state.levelControl.currentLevel).equals(77);
            const fabrics = node.env.get(FabricManager);
            await fabrics.construction;
            expect(fabrics.length).equals(1);
            expect(fabrics.fabrics[0].fabricIndex).equals(1);
            expect(fabrics.fabrics[0].globalId).not.undefined;
            expect(node.state.accessControl.acl.map(({ fabricIndex }) => fabricIndex)).deep.equals([1]);
        } finally {
            await node.close();
        }
    });

    it("refuses to write into a non-empty target", async () => {
        await mkdir(join(storagePath, NODE_ID), { recursive: true });
        await writeFile(join(storagePath, NODE_ID, "something"), "x");

        await expect(convert()).rejectedWith(ImplementationError, "is not empty");
    });

    it("leaves the legacy directory unchanged", async () => {
        const legacyPath = join(workDir, "legacy");
        await cp(FIXTURE, legacyPath, { recursive: true });

        await convert(legacyPath);

        const names = (await readdir(FIXTURE)).sort();
        expect((await readdir(legacyPath)).sort()).deep.equals(names);
        for (const name of names) {
            expect(await readFile(join(legacyPath, name), "utf8")).equals(await readFile(join(FIXTURE, name), "utf8"));
        }
    });

    it("resolves a relative storage path against the working directory", async () => {
        // A path that climbs to the filesystem root resolves the same from anywhere, so stay below the working directory
        const localDir = await mkdtemp(join(process.cwd(), ".legacy-storage-"));
        try {
            const localStorage = join(localDir, "new");
            const localEnvironment = new Environment("legacy-storage-relative", Environment.default);
            localEnvironment.set(Filesystem, new NodeJsFilesystem(localStorage));

            await convertLegacyDeviceStorage({
                legacyPath: FIXTURE,
                storagePath: relative(process.cwd(), localStorage),
                nodeId: NODE_ID,
                endpointIdFor: shadeIds,
                environment: localEnvironment,
            });

            expect(await readdir(join(localStorage, NODE_ID))).include("fabrics.fabrics");
        } finally {
            await rm(localDir, { recursive: true, force: true });
        }
    });

    describe("with a synthetic legacy storage", () => {
        const rootNodeA = 2840726405n;
        const rootNodeB = 354272939n;
        const appleCat = 18446744062088052737n;

        function fabric(
            fabricIndex: number,
            fabricId: bigint,
            rootNodeId: bigint,
            subjects: bigint[],
            aclEntryHasFabricIndex = true,
        ) {
            return {
                fabricIndex,
                fabricId,
                nodeId: 1000n + BigInt(fabricIndex),
                rootNodeId,
                operationalId: Bytes.fromHex("0102030405060708"),
                rootPublicKey: Bytes.fromHex(`04${"11".repeat(64)}`),
                keyPair: {
                    publicKey: Bytes.fromHex(`04${"22".repeat(64)}`),
                    privateKey: Bytes.fromHex("33".repeat(32)),
                },
                rootVendorId: 0xfff1,
                rootCert: Bytes.fromHex("1530"),
                identityProtectionKey: Bytes.fromHex("44".repeat(16)),
                operationalIdentityProtectionKey: Bytes.fromHex("55".repeat(16)),
                intermediateCACert: undefined,
                operationalCert: Bytes.fromHex("1531"),
                label: `Fabric ${fabricIndex}`,
                caseAuthenticatedTags: [],
                scopedClusterData: new Map([
                    [
                        31,
                        new Map([
                            [
                                "acl",
                                {
                                    value: [
                                        {
                                            privilege: 5,
                                            authMode: 2,
                                            subjects,
                                            targets: null,
                                            ...(aclEntryHasFabricIndex ? { fabricIndex } : {}),
                                        },
                                    ],
                                },
                            ],
                        ]),
                    ],
                ]),
            };
        }

        /** Writes the files like node-localstorage: one file per key, name URL-encoded once or twice. */
        async function writeLegacy(dir: string, entries: Record<string, SupportedStorageTypes>, encodeTwice = false) {
            await mkdir(dir, { recursive: true });
            for (const [name, value] of Object.entries(entries)) {
                const encoded = encodeURIComponent(name);
                await writeFile(join(dir, encodeTwice ? encodeURIComponent(encoded) : encoded), toJson(value));
            }
        }

        function legacyEntries() {
            return {
                "0.FabricManager.fabrics": [
                    fabric(1, 3261716207n, rootNodeA, [2989457934n, appleCat]),
                    fabric(2, 1818044104n, rootNodeB, [rootNodeB], false),
                ],
                "0.FabricManager.nextFabricIndex": 3,
                "0.SessionManager.resumptionRecords": [
                    {
                        nodeId: rootNodeB,
                        sharedSecret: Bytes.fromHex("66".repeat(32)),
                        resumptionId: Bytes.fromHex("77".repeat(16)),
                        fabricId: 1818044104n,
                        peerNodeId: rootNodeB,
                        sessionParameters: { idleIntervalMs: 500, activeIntervalMs: 300, activeThresholdMs: 4000 },
                        caseAuthenticatedTags: [],
                    },
                ],
                "0.EventHandler.lastEventNumber": 8n,
                "0.Cluster-0-40.location": "US",
                "0.Cluster-0-40.nodeLabel": "Living room bridge",
                "0.Cluster-0-51.totalOperationalHours": 2,
                "0.Cluster-0-48.breadcrumb": 0n,
                "0.EndpointStructure.nextEndpointId": 5,
                "0.EndpointStructure.serial_394249d4f24d7bd7-index_0": 1,
                "0.EndpointStructure.serial_394249d4f24d7bd7-index_0-unique_DUE:7E2E:119": 2,
                "0.EndpointStructure.serial_394249d4f24d7bd7-index_0-unique_DUE:7E2E:119-index_0": 3,
                "0.EndpointStructure.serial_394249d4f24d7bd7-index_0-unique_DUE:7E2E:119-index_1": 4,
                "0.Cluster-4-258.currentPositionLiftPercent100ths": 1234,
                "0.Cluster-4-258.targetPositionLiftPercent100ths": 1234,
                "0.Cluster-4-258.noSuchAttribute": 1,
                "0.Cluster-4-64512.vendorAttribute": 1,
                "0.Device.passcode": 20202021,
            };
        }

        it("converts every fabric's ACL, root attributes and resumption records", async () => {
            const legacyPath = join(workDir, "legacy");
            await writeLegacy(legacyPath, legacyEntries());

            await convert(legacyPath);

            const stored = await readConverted(async storage => {
                const root = storage.createContext("root");
                return {
                    acl: await root.createContext("accessControl").get("acl"),
                    location: await root.createContext("basicInformation").get("location"),
                    nodeLabel: await root.createContext("basicInformation").get("nodeLabel"),
                    hours: await root.createContext("generalDiagnostics").get("totalOperationalHoursCounter"),
                    nextFabricIndex: await storage.createContext("fabrics").get("nextFabricIndex"),
                    lastEventNumber: await storage.createContext("events").get("lastEventNumber"),
                    resumption: await storage
                        .createContext("sessions")
                        .get<Record<string, SupportedStorageTypes>[]>("resumptionRecords"),
                };
            });

            expect(stored.acl).deep.equals([
                { privilege: 5, authMode: 2, subjects: [2989457934n, appleCat], targets: null, fabricIndex: 1 },
                { privilege: 5, authMode: 2, subjects: [rootNodeB], targets: null, fabricIndex: 2 },
            ]);
            expect(stored.location).equals("US");
            expect(stored.nodeLabel).equals("Living room bridge");
            expect(stored.hours).equals(2 * 3_600_000);
            expect(stored.nextFabricIndex).equals(3);
            expect(stored.lastEventNumber).equals(9n);
            expect(stored.resumption[0].fabricIndex).equals(2);
            expect(stored.resumption[0].sessionParameters).deep.equals({
                idleInterval: 500,
                activeInterval: 300,
                activeThreshold: 4000,
            });
        });

        it("decodes file names that were URL-encoded twice", async () => {
            const legacyPath = join(workDir, "legacy");
            await writeLegacy(legacyPath, legacyEntries(), true);

            const { endpoints } = await convert(legacyPath);

            expect([...endpoints.values()].map(({ path }) => path?.join("/"))).deep.equals([
                AGGREGATOR_ID,
                `${AGGREGATOR_ID}/119-node`,
                `${AGGREGATOR_ID}/119-node/119-primary`,
                `${AGGREGATOR_ID}/119-node/119-secondary`,
            ]);
        });

        it("maps a second child with light values to the aura endpoint", async () => {
            const legacyPath = join(workDir, "legacy");
            const entries: Record<string, SupportedStorageTypes> = legacyEntries();
            delete entries["0.Cluster-4-258.currentPositionLiftPercent100ths"];
            entries["0.Cluster-4-8.currentLevel"] = 100;
            await writeLegacy(legacyPath, entries);

            const { endpoints } = await convert(legacyPath);

            expect([...endpoints.values()].at(-1)?.path?.at(-1)).equals("119-aura");
        });

        async function convertEntries(
            entries: Record<string, SupportedStorageTypes>,
            endpointIdFor: (endpoint: LegacyEndpoint) => string | undefined = shadeIds,
        ) {
            const legacyPath = join(workDir, "legacy");
            await writeLegacy(legacyPath, entries);
            return convertLegacyDeviceStorage({ legacyPath, storagePath, nodeId: NODE_ID, endpointIdFor, environment });
        }

        function pathsOf({ endpoints }: { endpoints: Map<string, { path?: string[] }> }) {
            return [...endpoints.values()].map(({ path }) => path?.join("/"));
        }

        it("skips attributes that are not persisted or unknown in the current model", async () => {
            await convertEntries(legacyEntries());

            const surface = await readConverted(async storage => {
                const context = endpointContext(storage, `${AGGREGATOR_ID}/119-node/119-secondary`);
                return {
                    keys: await context.createContext("windowCovering").keys(),
                    contexts: await context.contexts(),
                };
            });
            expect(surface.keys).deep.equals(["currentPositionLiftPercent100ths"]);
            expect(surface.contexts).deep.equals(["windowCovering"]);
        });

        it("leaves out an unmapped endpoint together with its children", async () => {
            const result = await convertEntries(legacyEntries(), endpoint =>
                endpoint.identifier.startsWith("unique_") ? undefined : shadeIds(endpoint),
            );

            expect(pathsOf(result)).deep.equals([AGGREGATOR_ID, undefined, undefined, undefined]);
            const parts = await readConverted(async storage =>
                endpointContext(storage, AGGREGATOR_ID).createContext("parts").contexts(),
            );
            expect(parts).deep.equals([]);
        });

        it("rejects two endpoints mapped to the same path", async () => {
            const surfaceOfShade = (endpoint: LegacyEndpoint) =>
                endpoint.parent?.identifier.startsWith("unique_") ? "surface" : shadeIds(endpoint);

            await expect(convertEntries(legacyEntries(), surfaceOfShade)).rejectedWith(
                ImplementationError,
                "mapped twice",
            );
        });

        it("rejects an empty endpoint id", async () => {
            await expect(convertEntries(legacyEntries(), () => "")).rejectedWith(ImplementationError, "is empty");
        });

        it("maps the second of three children to the secondary surface even with light values", async () => {
            const entries: Record<string, SupportedStorageTypes> = legacyEntries();
            entries["0.EndpointStructure.serial_394249d4f24d7bd7-index_0-unique_DUE:7E2E:119-index_2"] = 5;
            entries["0.Cluster-4-6.onOff"] = true;

            expect(pathsOf(await convertEntries(entries)).slice(-2)).deep.equals([
                `${AGGREGATOR_ID}/119-node/119-secondary`,
                `${AGGREGATOR_ID}/119-node/119-aura`,
            ]);
        });

        it("maps a second child without stored values to the secondary surface", async () => {
            const entries: Record<string, SupportedStorageTypes> = legacyEntries();
            delete entries["0.Cluster-4-258.currentPositionLiftPercent100ths"];
            delete entries["0.Cluster-4-258.targetPositionLiftPercent100ths"];
            delete entries["0.Cluster-4-258.noSuchAttribute"];

            expect(pathsOf(await convertEntries(entries)).at(-1)).equals(`${AGGREGATOR_ID}/119-node/119-secondary`);
        });

        it("reads a legacy root without an identifier", async () => {
            const entries: Record<string, SupportedStorageTypes> = {};
            for (const [name, value] of Object.entries(legacyEntries())) {
                entries[name.replace("serial_394249d4f24d7bd7-", "")] = value;
            }

            expect(pathsOf(await convertEntries(entries))).deep.equals([
                AGGREGATOR_ID,
                `${AGGREGATOR_ID}/119-node`,
                `${AGGREGATOR_ID}/119-node/119-primary`,
                `${AGGREGATOR_ID}/119-node/119-secondary`,
            ]);
        });

        it("sets the next endpoint number above the highest stored number", async () => {
            await convertEntries({ ...legacyEntries(), "0.EndpointStructure.nextEndpointId": 3 });

            expect(await readConverted(async storage => storage.createContext("root").get("__nextNumber__"))).equals(5);
        });

        it("rejects a legacy storage without fabrics", async () => {
            const entries: Record<string, SupportedStorageTypes> = legacyEntries();
            delete entries["0.FabricManager.fabrics"];

            await expect(convertEntries(entries)).rejectedWith(StorageError, "No fabrics found");
        });

        it("rejects a legacy storage without endpoint structure", async () => {
            const entries: Record<string, SupportedStorageTypes> = {};
            for (const [name, value] of Object.entries(legacyEntries())) {
                if (!name.startsWith("0.EndpointStructure.")) {
                    entries[name] = value;
                }
            }

            await expect(convertEntries(entries)).rejectedWith(StorageError, "No EndpointStructure found");
        });

        it("rejects a legacy file that is not JSON", async () => {
            const legacyPath = join(workDir, "legacy");
            await writeLegacy(legacyPath, legacyEntries());
            await writeFile(join(legacyPath, "0.EventHandler.lastEventNumber"), "{broken");

            await expect(
                convertLegacyDeviceStorage({
                    legacyPath,
                    storagePath,
                    nodeId: NODE_ID,
                    endpointIdFor: shadeIds,
                    environment,
                }),
            ).rejectedWith(StorageError, "not contain valid JSON");
        });

        it("rejects an endpoint id with a dot", async () => {
            const legacyPath = join(workDir, "legacy");
            await writeLegacy(legacyPath, legacyEntries());

            await expect(
                convertLegacyDeviceStorage({
                    legacyPath,
                    storagePath,
                    nodeId: NODE_ID,
                    endpointIdFor: () => "a.b",
                    environment,
                }),
            ).rejectedWith(ImplementationError, 'has a "."');
        });
    });
});
