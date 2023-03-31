/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, FabricIndex } from "@project-chip/matter.js";
import { Fabric, FabricBuilder } from "./Fabric";
import { MatterError } from "../../error/MatterError";
import { Persistence } from "../../persistence/Persistence";
import { PersistenceManager } from "../../persistence/PersistenceManager";

/** Specific Error for when a fabric is not found. */
export class FabricNotFoundError extends MatterError { }

export class FabricManager {
    private nextFabricIndex = 1;
    private readonly fabrics = new Array<Fabric>();
    private fabricBuilder?: FabricBuilder;
    private readonly fabricPersistence: Persistence;

    constructor(persistenceManager: PersistenceManager) {
        this.fabricPersistence = persistenceManager.createPersistence("FabricManager");
        const fabrics = JSON.parse(this.fabricPersistence.get("fabrics", "[]")) as string[];
        fabrics.forEach(fabric => this.addFabric(Fabric.createFromStorageJson(fabric)));
        try {
            this.nextFabricIndex = parseInt(this.fabricPersistence.get("nextFabricIndex"));
        } catch (e) {
            // When no value in storage then former value is ised
        }
    }

    persistFabrics() {
        this.fabricPersistence.set("fabrics", JSON.stringify(this.fabrics.map(fabric => fabric.toStorageJson())));
        this.fabricPersistence.set("nextFabricIndex", this.nextFabricIndex.toString());
    }

    addFabric(fabric: Fabric) {
        this.fabrics.push(fabric);
        fabric.setRemoveCallback(() => this.removeFabric(fabric.fabricIndex));
        fabric.setPersistCallback(() => this.persistFabrics());
    }

    removeFabric(fabricIndex: FabricIndex) {
        const index = this.fabrics.findIndex(fabric => fabric.fabricIndex.index === fabricIndex.index);
        if (index === -1) throw new FabricNotFoundError(`Fabric with index ${fabricIndex} cannot be removed because it does not exist.`);
        this.fabrics.splice(index, 1);
        this.persistFabrics();
    }

    getFabrics() {
        return this.fabrics;
    }

    findFabricFromDestinationId(destinationId: ByteArray, initiatorRandom: ByteArray) {
        for (const fabric of this.fabrics) {
            const candidateDestinationId = fabric.getDestinationId(fabric.nodeId, initiatorRandom);
            if (!candidateDestinationId.equals(destinationId)) continue;
            return fabric;
        }

        throw new Error("Fabric cannot be found from destinationId");
    }

    armFailSafe() {
        this.fabricBuilder = new FabricBuilder(new FabricIndex(this.nextFabricIndex++));
    }

    getFabricBuilder() {
        const result = this.fabricBuilder;
        if (result === undefined) throw new Error("armFailSafe should be called first!");
        return result;
    }

    async tentativelyAddFabric() {
        if (this.fabricBuilder === undefined) throw new Error("armFailSafe should be called first!");
        this.fabrics.push(await this.fabricBuilder.build());
        this.fabricBuilder = undefined;
    }

    completeCommission() {
        this.persistFabrics();
        // TODO: disable failSafe timer
        // TODO: delete CASE sessions
    }
}
