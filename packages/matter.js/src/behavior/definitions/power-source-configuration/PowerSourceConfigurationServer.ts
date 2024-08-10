/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PowerSource } from "../../../cluster/definitions/PowerSourceCluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { RootEndpoint } from "../../../endpoint/definitions/system/RootEndpoint.js";
import { Logger } from "../../../log/Logger.js";
import { PowerSourceBehavior } from "../power-source/PowerSourceBehavior.js";
import { PowerSourceConfigurationBehavior } from "./PowerSourceConfigurationBehavior.js";

const logger = Logger.get("PowerSourceConfigurationServer");

/**
 * This is the default server implementation of {@link PowerSourceConfigurationBehavior}.
 *
 * When the sources list is not empty, the implementation will verify that all configured PowerSource clusters are still
 * available and remove any that are not.
 * When the sources list is empty, this implementation will find all PowerSource clusters in the system which status is
 * not "Unavailable" and initialize the sources list with the first 6 found sorted by their order attribute.
 *
 * The `updateSources` method can be called any time by the developer to update the sources list after changes to
 * PowerSources clusters.
 */
export class PowerSourceConfigurationServer extends PowerSourceConfigurationBehavior {
    override initialize(): void {
        if (!this.state.sources.length) {
            this.updateSources();
        } else {
            this.#verifySources();
        }
    }

    /**
     * Finds all PowerSource clusters in the system and returns a Map with EndpointNumber as key and order as value.
     * The ignoreUnavailable parameter can be used to exclude PowerSource clusters with status "Unavailable".
     */
    #findPowerSources(ignoreUnavailable = true) {
        const rootEndpoint = this.endpoint.ownerOfType(RootEndpoint);
        if (rootEndpoint === undefined) {
            throw new ImplementationError("Can not find the root endpoint");
        }
        const powerSources = new Map<EndpointNumber, number>();
        rootEndpoint.visit(endpoint => {
            if (
                endpoint.behaviors.has(PowerSourceBehavior) &&
                (!ignoreUnavailable ||
                    endpoint.stateOf(PowerSourceBehavior).status !== PowerSource.PowerSourceStatus.Unavailable)
            ) {
                powerSources.set(endpoint.number, endpoint.stateOf(PowerSourceBehavior).order);
            }
        });
        return powerSources;
    }

    /**
     * Updates the list of power sources in the state. All available PowerSource are sorted by their order and the
     * first 6 are used.
     * This is used when the sources list is empty on initialization or can be called any time by the developer when
     * needed.
     */
    updateSources() {
        const sources = this.#findPowerSources();
        // Sort the map into an array, sorted increasing by order
        this.state.sources = [...sources.entries()]
            .sort((a, b) => a[1] - b[1])
            .map(entry => entry[0])
            .slice(0, 6);
    }

    /**
     * Verifies that all configured PowerSource clusters are still available and removes any that are not. The correct
     * order is not validated! If the list is empty the sources list is updated via the `updateSources()` method.
     */
    #verifySources() {
        const sources = this.state.sources;
        const allSources = this.#findPowerSources(false);
        const knownSources = sources.filter(source => {
            if (!allSources.has(source)) {
                logger.warn(
                    `PowerSource ${source} do not have any PowerSource cluster anymore, removing from source list.`,
                );
            }
        });
        if (!knownSources.length) {
            logger.warn("All configured PowerSource clusters are gone, updating source list.");
            this.updateSources();
        } else {
            this.state.sources = knownSources;
        }
    }
}
