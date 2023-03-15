/**
* @license
* Copyright 2022 The node-matter Authors
* SPDX-License-Identifier: Apache-2.0
*/
import { Persistence } from "./Persistence";
import { Storage } from "./Storage";

export class PersistenceManager {
    private initialized = false;

    constructor(
        private storage: Storage
    ) {}

    async initialize() {
        await this.storage.initialize();
        this.initialized = true;
    }

    async close() {
        await this.storage.close();
    }

    createPersistence(context: string) {
        if (!this.initialized) throw new Error("The persistence should be initialized first!");
        return new Persistence(this.storage, context);
    }
}
