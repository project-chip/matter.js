/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Construction,
    Diagnostic,
    Environment,
    Environmental,
    Logger,
    MaybePromise,
    Network,
    VariableService,
} from "#general";
import { MdnsBroadcaster } from "../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";

const logger = Logger.get("MDNS");

export class MdnsService {
    #broadcaster?: MdnsBroadcaster;
    #scanner?: MdnsScanner;
    readonly #construction: Construction<MdnsService>;
    readonly #enableIpv4: boolean;
    readonly limitedToNetInterface?: string;

    get enableIpv4() {
        return this.#enableIpv4;
    }

    constructor(environment: Environment, options?: MdnsService.Options) {
        environment.set(MdnsService, this);
        environment.runtime.add(this);

        const vars = environment.get(VariableService);
        this.#enableIpv4 = vars.boolean("mdns.ipv4") ?? options?.ipv4 ?? true;
        this.limitedToNetInterface = vars.get("mdns.networkInterface", options?.networkInterface);

        this.#construction = Construction(this, async () => {
            const network = environment.get(Network);

            this.#broadcaster = await MdnsBroadcaster.create(network, {
                enableIpv4: this.enableIpv4,
                multicastInterface: this.limitedToNetInterface,
            });

            this.#scanner = await MdnsScanner.create(network, {
                enableIpv4: this.enableIpv4,
                netInterface: this.limitedToNetInterface,
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
        return this.#construction.assert("MDNS service", this.#broadcaster);
    }

    get scanner() {
        return this.#construction.assert("MDNS service", this.#scanner);
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
