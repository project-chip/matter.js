/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointServer } from "#endpoint/EndpointServer.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { Environment, InternalError, Logger } from "#general";
import { DescriptorServer } from "../../behaviors/descriptor/DescriptorServer.js";
import { ServerNodeStore } from "../storage/ServerNodeStore.js";

const logger = Logger.get("BehaviorInit");

export class ServerEndpointInitializer extends EndpointInitializer {
    #store: ServerNodeStore;

    constructor(environment: Environment) {
        super();
        this.#store = environment.get(ServerNodeStore);
    }

    override initializeDescendant(endpoint: Endpoint) {
        if (!endpoint.lifecycle.hasId) {
            endpoint.id = this.#identifyPart(endpoint);
        }

        this.#store.endpointStores.assignNumber(endpoint);

        endpoint.behaviors.require(DescriptorServer);
    }

    async eraseDescendant(endpoint: Endpoint) {
        if (!endpoint.lifecycle.hasId) {
            return;
        }

        await this.#store.endpointStores.eraseStoreForEndpoint(endpoint);
    }

    async deactivateDescendant(endpoint: Endpoint) {
        if (!endpoint.lifecycle.hasId || endpoint.number === 0) {
            return;
        }

        this.#store.endpointStores.deactivateStoreForEndpoint(endpoint);
    }

    /**
     * If a {@link Endpoint} does not yet have a {@link EndpointServer}, create one now, then create a
     * {@link BehaviorBacking} for a specific {@link Behavior}.
     *
     * This is where we adapt endpoints and behaviors for a server role.
     */
    createBacking(endpoint: Endpoint, behavior: Behavior.Type): BehaviorBacking {
        return EndpointServer.forEndpoint(endpoint).createBacking(behavior);
    }

    /**
     * Select an ID for an endpoint automatically based on available metadata.
     */
    #identifyPart(endpoint: Endpoint) {
        const basicInfo =
            endpoint.behaviors.supported.basicInformation ?? endpoint.behaviors.supported.bridgedDeviceBasicInformation;
        if (basicInfo) {
            const defaults = {
                ...new basicInfo.State(),
                ...endpoint.behaviors.defaultsFor(basicInfo),
            };

            let id = (defaults as Record<string, string>).uniqueId;
            if (id) {
                return id;
            }

            id = (defaults as Record<string, string>).serialNumber;
            if (id) {
                return id;
            }
        }

        if (!(endpoint.owner instanceof Endpoint)) {
            throw new InternalError("Cannot determine ID for endpoint with unknown parent type");
        }
        if (!endpoint.owner.lifecycle.hasId) {
            throw new InternalError("Cannot determine ID for endpoint because parent has no ID");
        }

        const index = endpoint.owner.parts.indexOf(endpoint);
        if (index === -1) {
            throw new InternalError("Cannot determine ID for endpoint because parent does not list as child");
        }

        // Use "part" rather than "endpoint" because it is scoped within parent endpoint
        const id = `part${index}`;
        logger.warn(`Using fallback ID of ${id} for child of ${endpoint.owner}; assign ID to remove this warning`);

        return id;
    }
}
