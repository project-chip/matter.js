/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { MdnsBroadcaster } from "../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { MaybePromise } from "../util/Promises.js";
import { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";
import { RuntimeService } from "./RuntimeService.js";
import { VariableService } from "./VariableService.js";

const logger = Logger.get("MDNS");

export class MdnsService {
    #runtime: RuntimeService;
    #broadcaster?: MdnsBroadcaster;
    #scanner?: MdnsScanner;
    #construction: AsyncConstruction<MdnsService>;

    constructor(environment: Environment, options?: MdnsService.Options) {
        environment.set(MdnsService, this);
        this.#runtime = environment.get(RuntimeService);

        this.#construction = AsyncConstruction(this, async () => {
            const vars = environment.get(VariableService);

            const enableIpv4 = options?.ipv4 ?? environment.get(VariableService).boolean("mdns.ipv4") ?? true;
            this.#broadcaster = await MdnsBroadcaster.create({
                enableIpv4,
                multicastInterface: vars.get("mdns.discoverInterface", options?.discoverInterface),
            });

            this.#scanner = await MdnsScanner.create({
                enableIpv4,
                netInterface: vars.get("mdns.announceInterface", options?.announceInterface),
            })
        });
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    get broadcaster() {
        this.#runtime.add(this);
        return this.#construction.assert("MDNS broadcaster", this.#broadcaster)
    }

    get scanner() {
        return this.#construction.assert("MDNS scanner", this.#scanner)
    }

    get [Diagnostic.value]() {
        return "MDNS";
    }

    get construction() {
        return this.#construction;
    }

    async [Symbol.asyncDispose]() {
        await this.#construction;

        const broadcasterDisposal = MaybePromise.then(
            this.#broadcaster?.close(),
            undefined,
            e => logger.error("Error disposing of MDNS broadcaster", e)
        );

        const scannerDisposal = MaybePromise.then(
            this.#scanner?.close(),
            undefined,
            e => logger.error("Error disposing of MDNS scanner", e)
        );

        await Promise.all([ broadcasterDisposal, scannerDisposal ]);

        this.#broadcaster = this.#scanner = undefined;
    }
}

export namespace MdnsService {
    export interface Options {
        discoverInterface?: string;
        announceInterface?: string;
        ipv4?: boolean;
    }
}
