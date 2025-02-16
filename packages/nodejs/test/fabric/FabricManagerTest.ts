/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError, StorageBackendMemory, StorageManager } from "#general";
import { FabricManager, FabricNotFoundError, FabricTableFullError } from "#protocol";
import { FabricIndex } from "#types";
import * as assert from "node:assert";
import { buildFabric } from "./FabricTestingUtil.js";

describe("FabricManager", () => {
    let storage: StorageBackendMemory;
    let storageManager: StorageManager;
    let fabricManager: FabricManager;

    beforeEach(async () => {
        storage = new StorageBackendMemory();
        storageManager = new StorageManager(storage);
        await storageManager.initialize();
        fabricManager = new FabricManager(storageManager.createContext("Context"));
        await fabricManager.construction.ready;
    });

    describe("adding Fabrics", () => {
        it("add a new fabric (but not persist directly)", async () => {
            const fabric = await buildFabric();
            fabricManager.addFabric(fabric);

            assert.deepEqual(fabricManager.fabrics, [fabric]);

            assert.deepEqual(storage.get(["Context"], "fabrics"), undefined);
        });

        it("adding a fabric with same index twice throws error", async () => {
            const storage = new StorageManager(new StorageBackendMemory());
            await storage.initialize();
            const fabricManager = new FabricManager(storage.createContext("Context"));
            await fabricManager.construction.ready;
            const fabric = await buildFabric();
            fabricManager.addFabric(fabric);

            assert.throws(
                () => fabricManager.addFabric(fabric),
                new MatterFlowError(`Fabric with index 1 already exists.`),
            );
        });
    });

    describe("persistence", () => {
        it("add a new fabric and persist", async () => {
            const fabric = await buildFabric();
            fabricManager.addFabric(fabric);
            await fabricManager.persistFabrics();

            assert.deepEqual(fabricManager.fabrics, [fabric]);

            assert.deepEqual(storage.get(["Context"], "fabrics"), [fabric.config]);
        });

        it("restore a fabric from storage", async () => {
            const fabric = await buildFabric();
            storage.set(["Context"], "fabrics", [fabric.config]);

            fabricManager = new FabricManager(storageManager.createContext("Context"));
            await fabricManager.construction.ready;
            assert.equal(fabricManager.fabrics.length, 1);
            assert.deepEqual(fabricManager.fabrics[0].config, fabric.config);
        });
    });

    describe("removing Fabrics", () => {
        it("remove an added fabric", async () => {
            const fabric = await buildFabric();
            fabricManager.addFabric(fabric);
            await fabricManager.removeFabric(fabric.fabricIndex);

            assert.deepEqual(fabricManager.fabrics, []);
        });

        it("throws when removing a non-existent fabric", async () => {
            await assert.rejects(
                fabricManager.removeFabric(FabricIndex(1)),
                new FabricNotFoundError(`Fabric with index 1 cannot be removed because it does not exist.`),
            );
        });
    });

    describe("determine next FabricIndex", () => {
        it("get next fabric index initially", async () => {
            assert.equal(fabricManager.allocateFabricIndex(), 1);
        });

        it("get next fabric index after adding fabric", async () => {
            const fabric = await buildFabric(fabricManager.allocateFabricIndex());
            fabricManager.addFabric(fabric);

            assert.equal(fabricManager.allocateFabricIndex(), 2);
        });

        it("get next fabric index after adding fabric and removing it", async () => {
            const fabric = await buildFabric(fabricManager.allocateFabricIndex());
            fabricManager.addFabric(fabric);
            await fabricManager.removeFabric(fabric.fabricIndex);

            assert.equal(fabricManager.allocateFabricIndex(), 2);
        });

        it("get next fabric index after adding fabric and revoking it", async () => {
            const fabric = await buildFabric(fabricManager.allocateFabricIndex());
            fabricManager.addFabric(fabric);
            await fabricManager.revokeFabric(fabric.fabricIndex);

            assert.equal(fabricManager.allocateFabricIndex(), 2);
        });

        it("get jumps over one fabric index after adding fabric and revoking it", async () => {
            const fabric = await buildFabric(fabricManager.allocateFabricIndex()); // Index 1
            fabricManager.addFabric(fabric);
            const fabric2 = await buildFabric(fabricManager.allocateFabricIndex()); // Index 2
            fabricManager.addFabric(fabric2);
            await fabricManager.revokeFabric(fabric.fabricIndex); // We do not remove the last generated Index

            assert.equal(fabricManager.allocateFabricIndex(), 3); // So index now changed
        });

        it("it find first open slot for next index", async () => {
            for (let i = 1; i < 255; i++) {
                const fabric = await buildFabric(fabricManager.allocateFabricIndex());
                fabricManager.addFabric(fabric);
            }
            await fabricManager.removeFabric(FabricIndex(100));

            assert.equal(fabricManager.allocateFabricIndex(), 100);
        });

        it("it find first open slot for next index id including overflow", async () => {
            for (let i = 1; i < 255; i++) {
                const fabric = await buildFabric(fabricManager.allocateFabricIndex());
                fabricManager.addFabric(fabric);
            }
            await fabricManager.removeFabric(FabricIndex(1));

            assert.equal(fabricManager.allocateFabricIndex(), 1);
        });

        it("throws when table is full", async () => {
            for (let i = 1; i < 255; i++) {
                const fabric = await buildFabric(fabricManager.allocateFabricIndex());
                fabricManager.addFabric(fabric);
            }

            assert.throws(
                () => fabricManager.allocateFabricIndex(),
                new FabricTableFullError("No free fabric index available."),
            );
        });
    });
});
