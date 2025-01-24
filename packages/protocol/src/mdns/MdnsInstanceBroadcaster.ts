/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "#general";
import {
    CommissionerInstanceData,
    CommissioningModeInstanceData,
    InstanceBroadcaster,
} from "../common/InstanceBroadcaster.js";
import { Fabric } from "../fabric/Fabric.js";
import type { MdnsBroadcaster } from "./MdnsBroadcaster.js";

/**
 * This class is handing MDNS Announcements for one instance of a device aka "port".
 *
 * Obtain an instance via {@link MdnsBroadcaster.createInstanceBroadcaster}.
 */
export class MdnsInstanceBroadcaster implements InstanceBroadcaster {
    readonly #instancePort: number;
    readonly #mdnsBroadcaster: MdnsBroadcaster;
    readonly #onclose: () => void;
    #isClosed = false;

    constructor(instancePort: number, mdnsBroadcaster: MdnsBroadcaster, onclose: () => void) {
        this.#instancePort = instancePort;
        this.#mdnsBroadcaster = mdnsBroadcaster;
        this.#onclose = onclose;
    }

    async close() {
        if (this.#isClosed) {
            return;
        }
        this.#isClosed = true;

        await this.#mdnsBroadcaster.expireAllAnnouncements(this.#instancePort);
        this.#onclose();
    }

    async setCommissionMode(mode: number, deviceData: CommissioningModeInstanceData) {
        this.#assertOpen();
        await this.#mdnsBroadcaster.setCommissionMode(this.#instancePort, mode, deviceData);
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async setFabrics(fabrics: Fabric[], expireCommissioningAnnouncements = false) {
        this.#assertOpen();
        if (expireCommissioningAnnouncements) {
            await this.#mdnsBroadcaster.expireCommissioningAnnouncement(this.#instancePort);
        }
        await this.#mdnsBroadcaster.setFabrics(this.#instancePort, fabrics);
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async setCommissionerInfo(commissionerData: CommissionerInstanceData) {
        this.#assertOpen();
        await this.#mdnsBroadcaster.setCommissionerInfo(this.#instancePort, commissionerData);
    }

    async announce() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.announce(this.#instancePort);
    }

    async expireFabricAnnouncement() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireFabricAnnouncement(this.#instancePort);
    }

    async expireCommissioningAnnouncement() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireCommissioningAnnouncement(this.#instancePort);
    }

    async expireAllAnnouncements() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireAllAnnouncements(this.#instancePort);
    }

    #assertOpen() {
        if (this.#isClosed) {
            throw new ImplementationError("Illegal operation on closed MdnsInstanceBroadcaster");
        }
    }
}
