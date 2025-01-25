/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Construction,
    Diagnostic,
    Environment,
    Environmental,
    Logger,
    MatterAggregateError,
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
    #env: Environment;
    readonly #construction: Construction<MdnsService>;
    readonly #enableIpv4: boolean;
    readonly limitedToNetInterface?: string;

    get enableIpv4() {
        return this.#enableIpv4;
    }

    constructor(environment: Environment, options?: MdnsService.Options) {
        this.#env = environment;
        const rootEnvironment = environment.root;
        rootEnvironment.set(MdnsService, this);
        rootEnvironment.runtime.add(this);

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
        this.#env.delete(MdnsService, this);

        await this.#construction.close(async () => {
            const broadcasterDisposal = MaybePromise.then(this.#broadcaster?.close(), undefined, e =>
                logger.error("Error disposing of MDNS broadcaster", e),
            );

            const scannerDisposal = MaybePromise.then(this.#scanner?.close(), undefined, e =>
                logger.error("Error disposing of MDNS scanner", e),
            );

            await MatterAggregateError.allSettled(
                [broadcasterDisposal, scannerDisposal],
                "Error disposing MDNS services",
            ).catch(error => logger.error(error));

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
