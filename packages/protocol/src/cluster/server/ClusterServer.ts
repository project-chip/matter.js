/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterId } from "#types";
import { AnyAttributeServer } from "./AttributeServer.js";
import { ClusterDatasource } from "./ClusterDatasource.js";
import { CommandServer } from "./CommandServer.js";
import { AnyEventServer } from "./EventServer.js";

/**
 * A collection of servers for a cluster's attributes, commands and events.
 */
export interface ClusterServer {
    /**
     * Cluster ID
     */
    id: ClusterId;

    /**
     * Cluster name
     */
    readonly name: string;

    /**
     * Cluster datasource
     */
    datasource?: ClusterDatasource;

    /**
     * Cluster attributes as named object that can be used to programmatically work with available attributes
     */
    readonly attributes: Record<string, AnyAttributeServer>;

    /**
     * Cluster commands as array
     */
    readonly commands: Record<string, CommandServer>;

    /**
     * Cluster events as named object
     */
    readonly events: Record<string, AnyEventServer>;
}
