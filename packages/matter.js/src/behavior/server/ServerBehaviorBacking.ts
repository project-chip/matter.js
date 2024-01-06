/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PartStoreService } from "../../node/server/storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;

    override get store() {
        if (!this.#store) {
            this.#store = this.part.serviceFor(PartStoreService)
                .storeForPart(this.part)
                .storeForBehavior(this.type.id);
        }
        return this.#store;
    }

    get eventHandler() {
        return this.part.serviceFor(EventHandler);
    }
}
