/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { Contextual } from "#behavior/context/Contextual.js";
import { StructManager } from "#behavior/state/managed/values/StructManager.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { camelize, ImplementationError, InternalError, MaybePromise } from "#general";
import { CommandModel, ElementTag } from "#model";
import {
    ClusterDatasource,
    ClusterServer,
    CommandServer,
    createAttributeServer as ConstructAttributeServer,
    EventServer,
    FabricManager,
    Message,
    OccurrenceManager,
    Val,
} from "#protocol";
import { Attribute, Command, Event } from "#types";
import type { EndpointServer } from "./EndpointServer.js";

export interface BehaviorServer extends ClusterServer {
    close(): void;
}

/**
 * Create a {@link ClusterServer} for a {@link ClusterBehavior}.
 *
 * Note that we only create servers for cluster behaviors.  Other {@link Behavior} implementations do not have proper
 * metadata to go online.
 *
 * @deprecated
 */
export function BehaviorServer(endpointServer: EndpointServer, type: ClusterBehavior.Type): BehaviorServer {
    const { id, name, attributes, commands, events } = type.cluster;

    const { endpoint } = endpointServer;
    const datasource = createClusterDatasource(endpoint, type);

    const clusterServer: BehaviorServer = {
        id,
        name,
        datasource,
        attributes: {},
        commands: {},
        events: {},
        close() {},
    };

    // Extract read-only state and observables for setup purposes
    const stateView = endpoint.stateOf(type) as Val.Struct;
    const elements = endpointServer.endpoint.behaviors.elementsOf(type);

    // Add attribute servers.  Include global attributes as well as cluster attributes
    for (const name of elements.attributes) {
        const attribute = attributes[name];

        const server = createAttributeServer(name, attribute, endpoint, type, datasource, stateView);

        clusterServer.attributes[name] = server;
        server.assignToEndpoint(endpointServer);
    }

    // Add command servers
    for (const name of elements.commands) {
        const command = commands[name];

        clusterServer.commands[name] = createCommandServer(name, command, endpoint, type);
    }

    // Event servers
    for (const name of elements.events) {
        const server = createEventServer(name, events[name], endpoint, type);

        clusterServer.events[name] = server;
        server.assignToEndpoint(endpointServer);
    }

    return clusterServer;
}

/**
 * Create the {@link ClusterDatasource} that adapts the Behavior API to the AttributeServer API.
 */
function createClusterDatasource(endpoint: Endpoint, type: Behavior.Type): ClusterDatasource {
    const env = endpoint.env;

    return {
        get version() {
            return endpoint.behaviors.versionOf(type);
        },

        get eventHandler() {
            return env.get(OccurrenceManager);
        },

        get fabrics() {
            return env.get(FabricManager).fabrics;
        },

        // We handle change management ourselves
        changed() {},

        // We handle version management ourselves
        increaseVersion() {
            return this.version;
        },
    };
}

function createAttributeServer(
    name: string,
    definition: Attribute<any, any>,
    endpoint: Endpoint,
    type: ClusterBehavior.Type,
    datasource: ClusterDatasource,
    stateView: Val.Struct,
) {
    function getter(_session: any, _endpoint: any, _isFabricFiltered: any, message?: Message) {
        if (!message) {
            // If there is no message this is getLocal
            return stateView[name];
        }

        const behavior = behaviorFor(endpoint, type, message);

        behavior.context.activity?.frame(`read ${name}`);

        //logger.debug("Read", Diagnostic.strong(`${endpoint}.state.${name}`), "via", behavior.context.transaction.via);

        const state = behavior.state as Val.Struct;

        StructManager.assertDirectReadAuthorized(state, definition.id);

        return state[name];
    }

    function setter(_value: any, _session: any, _endpoint: any, _message?: Message): boolean {
        throw new ImplementationError("Legacy structures are read-only");
    }

    const server = ConstructAttributeServer(
        type.cluster,
        definition,
        name,
        stateView[name],
        datasource,
        getter,
        setter,
    );

    return server;
}

function createCommandServer(
    name: string,
    definition: Command<any, any, any>,
    _endpoint: Endpoint,
    type: ClusterBehavior.Type,
) {
    // TODO: Introduce nicer ways to get command incl caching and such, aka "make api suck less"
    const schema = type.schema?.member(camelize(name, true), [ElementTag.Command]) as CommandModel;
    if (schema === undefined) {
        throw new ImplementationError(`There is no metadata for command ${name}`);
    }

    const handler = (_request: unknown, _session: unknown, _message: Message) => {
        throw new ImplementationError("Legacy structures can not invoke commands");
    };

    const server = new CommandServer(
        definition.requestId,
        definition.responseId,
        name,
        definition.requestSchema,
        definition.responseSchema,
        definition.timed,
        definition.invokeAcl,
        handler,
    );

    // Eliminate redundant diagnostic messages
    server.debug = () => {};

    return server;
}

function createEventServer(name: string, definition: Event<any, any>, endpoint: Endpoint, type: ClusterBehavior.Type) {
    const server = new EventServer(
        definition.id,
        type.cluster.id,
        name,
        definition.schema,
        definition.priority,
        definition.readAcl,
    );

    const promise = server.bindToEventHandler(endpoint.env.get(OccurrenceManager));
    if (MaybePromise.is(promise)) {
        // Current code structure means this should never happen.  Refactor after removal of old API will resolve this
        throw new InternalError("Event handler binding returned a promise");
    }

    return server;
}

function behaviorFor(endpoint: Endpoint, type: ClusterBehavior.Type, message: Message | undefined) {
    const context = Contextual.contextOf(message);
    if (!context) {
        throw new InternalError("Message context not installed");
    }

    const agent = context.agentFor(endpoint);

    return agent.get(type);
}
