/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, MatterError, MatterFlowError } from "../common/MatterError.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { StorageContext } from "../storage/StorageContext.js";
import { ByteArray } from "../util/ByteArray.js";
import { Fabric, FabricBuilder, FabricJsonObject } from "./Fabric.js";

/** Specific Error for when a fabric is not found. */
export class FabricNotFoundError extends MatterError {}

export class FabricManager {
    private nextFabricIndex = 1;
    private readonly fabrics = new Array<Fabric>();
    private fabricBuilder?: FabricBuilder;
    private readonly fabricStorage: StorageContext;

    constructor(storage: StorageContext) {
        this.fabricStorage = storage.createContext("FabricManager");
        const fabrics = this.fabricStorage.get<FabricJsonObject[]>("fabrics", []);
        fabrics.forEach(fabric => this.addFabric(Fabric.createFromStorageObject(fabric)));
        this.nextFabricIndex = this.fabricStorage.get("nextFabricIndex", this.nextFabricIndex);
    }

    persistFabrics() {
        this.fabricStorage.set(
            "fabrics",
            this.fabrics.map(fabric => fabric.toStorageObject()),
        );
        this.fabricStorage.set("nextFabricIndex", this.nextFabricIndex);
    }

    addFabric(fabric: Fabric) {
        this.fabrics.push(fabric);
        fabric.setRemoveCallback(() => this.removeFabric(fabric.fabricIndex));
        fabric.setPersistCallback(() => this.persistFabrics());
    }

    removeFabric(fabricIndex: FabricIndex) {
        const index = this.fabrics.findIndex(fabric => fabric.fabricIndex === fabricIndex);
        if (index === -1)
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be removed because it does not exist.`,
            );
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

        throw new InternalError("Fabric cannot be found from destinationId");
    }

    armFailSafe() {
        this.fabricBuilder = new FabricBuilder(FabricIndex(this.nextFabricIndex++));
    }

    getFabricBuilder() {
        const result = this.fabricBuilder;
        if (result === undefined) throw new MatterFlowError("armFailSafe should be called first!");
        return result;
    }

    async tentativelyAddFabric() {
        if (this.fabricBuilder === undefined) throw new MatterFlowError("armFailSafe should be called first!");
        this.fabrics.push(await this.fabricBuilder.build());
        this.fabricBuilder = undefined;
    }

    completeCommission() {
        this.persistFabrics();
        // TODO: disable failSafe timer
        // TODO: delete CASE sessions
    }
}
