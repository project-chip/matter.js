/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "../../common/Environment.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import type { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import type { NodeServer } from "../server/NodeServer.js";
import { NetworkOptions } from "./NetworkOptions.js";
import { SubscriptionOptions } from "./SubscriptionOptions.js";

/**
 * Configuration options for {@link NodeServer}.
 */
export type ServerOptions = {
    /**
     * Execution environment.
     */
    readonly environment?: Environment;

    /**
     * Initial endpoints published by the server.
     */
    readonly root?: Part.Definition<RootEndpoint>;

    /**
     * The next ID assigned to a new endpoint.
     */
    readonly nextEndpointNumber?: number;

    /**
     * Networking options.
     */
    readonly network?: NetworkOptions;

    /**
     * Attribute and event subscription options.
     */
    readonly subscription?: SubscriptionOptions;
};

export namespace ServerOptions {
    export function configurationFor(options?: ServerOptions) {
        if (!options) {
            options = {};
        }

        return {
            environment: options?.environment ?? Environment.default,
            root: options?.root ?? RootEndpoint,
            network: NetworkOptions.configurationFor(options.network),
            subscription: SubscriptionOptions.configurationFor(options.subscription),
            nextEndpointNumber: EndpointNumber(options.nextEndpointNumber ?? 1),
        };
    }

    export interface Configuration extends ReturnType<typeof configurationFor> {}
}
