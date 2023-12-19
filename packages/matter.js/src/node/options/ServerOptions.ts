/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceCertification } from "../../behavior/definitions/operational-credentials/DeviceCertification.js";
import { Environment } from "../../common/Environment.js";
import { ImplementationError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import type { NodeServer } from "../server/NodeServer.js";
import { CommissioningOptions } from "./CommissioningOptions.js";
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
    readonly root?: Part<RootEndpoint>;

    /**
     * The next ID assigned to a new endpoint.
     */
    readonly nextEndpointId?: number;

    /**
     * Certification information for the OperationalCredentials cluster.
     *
     * If omitted the server automatically generates development certificates
     * using CHIP test tool's root certificate.
     */
    readonly certification?: DeviceCertification.Configuration;

    /**
     * Networking options.
     */
    readonly network?: NetworkOptions;

    /**
     * Commissioning options.
     */
    readonly commissioning?: CommissioningOptions;

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
            root: configureRoot(options),
            commissioning: CommissioningOptions.initialConfigurationFor(options.commissioning),
            network: NetworkOptions.configurationFor(options.network),
            subscription: SubscriptionOptions.configurationFor(options.subscription),
            certification: options.certification,
            nextEndpointId: EndpointNumber(options.nextEndpointId ?? 1),
        };
    }

    export interface Configuration extends ReturnType<typeof configurationFor> {}
}

function configureRoot(options?: ServerOptions) {
    const root = options?.root ?? new Part(RootEndpoint);

    if (root.type.deviceType !== RootEndpoint.deviceType) {
        throw new ImplementationError(`Root node device type must be a ${RootEndpoint.deviceType}`);
    }

    if (root.id === undefined) {
        root.id = EndpointNumber(0);
    } else if (root.id !== 0) {
        throw new ImplementationError(`Root node ID must be 0`);
    }

    return root;
}
