/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { MdnsBroadcaster } from "../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";
import { Network } from "../net/Network.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { MaybePromise } from "../util/Promises.js";
import { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";
import { VariableService } from "./VariableService.js";

const logger = Logger.get("MDNS");

export class MdnsService {
    #broadcaster?: MdnsBroadcaster;
    #scanner?: MdnsScanner;
    readonly #construction: AsyncConstruction<MdnsService>;
    readonly #enableIpv4: boolean;

    get enableIpv4() {
        return this.#enableIpv4;
    }

    constructor(environment: Environment, options?: MdnsService.Options) {
        environment.set(MdnsService, this);
        environment.runtime.add(this);

        const vars = environment.get(VariableService);
        this.#enableIpv4 = vars.boolean("mdns.ipv4") ?? options?.ipv4 ?? true;

        this.#construction = AsyncConstruction(this, async () => {
            const vars = environment.get(VariableService);
            const network = environment.get(Network);

            const netInterface = vars.get("mdns.networkInterface", options?.networkInterface);
            this.#broadcaster = await MdnsBroadcaster.create(network, {
                enableIpv4: this.enableIpv4,
                multicastInterface: netInterface,
            });

            this.#scanner = await MdnsScanner.create(network, {
                enableIpv4: this.enableIpv4,
                netInterface: netInterface,
            });
        });
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    createInstanceBroadcaster(port: number) {
        return this.broadcaster.createInstanceBroadcaster(port);
    }

    get broadcaster() {
        return this.#construction.assert("MDNS broadcaster", this.#broadcaster);
    }

    get scanner() {
        return this.#construction.assert("MDNS scanner", this.#scanner);
    }

    get [Diagnostic.value]() {
        return "MDNS";
    }

    get construction() {
        return this.#construction;
    }

    async [Symbol.asyncDispose]() {
        await this.#construction.close(async () => {
            const broadcasterDisposal = MaybePromise.then(this.#broadcaster?.close(), undefined, e =>
                logger.error("Error disposing of MDNS broadcaster", e),
            );

            const scannerDisposal = MaybePromise.then(this.#scanner?.close(), undefined, e =>
                logger.error("Error disposing of MDNS scanner", e),
            );

            await Promise.all([broadcasterDisposal, scannerDisposal]);

            this.#broadcaster = this.#scanner = undefined;
        });
    }
}

export namespace MdnsService {
    export interface Options {
        networkInterface?: string;
        ipv4?: boolean;
    }
}
