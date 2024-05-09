/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { ActionTracer } from "../../behavior/context/ActionTracer.js";
import { NodeActivity } from "../../behavior/context/NodeActivity.js";
import { OnlineContext } from "../../behavior/context/server/OnlineContext.js";
import { AnyAttributeServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { Endpoint } from "../../endpoint/Endpoint.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { EndpointServer } from "../../endpoint/EndpointServer.js";
import { EndpointLifecycle } from "../../endpoint/properties/EndpointLifecycle.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServerMessenger } from "../../protocol/interaction/InteractionMessenger.js";
import { InteractionServer } from "../../protocol/interaction/InteractionServer.js";
import { ServerNode } from "../ServerNode.js";
import { ServerStore } from "./storage/ServerStore.js";

const activityKey = Symbol("activity");

interface WithActivity {
    [activityKey]?: NodeActivity.Activity;
}

/**
 * Wire up an InteractionServer that initializes an InvocationContext earlier than the cluster API supports.
 *
 * This is necessary for attributes because the ClusterServer attribute APIs are synchronous while transaction
 * management is asynchronous.
 *
 * It's not necessary for command handling because that API is entirely async.  We do it here, however, just for the
 * sake of consistency.
 *
 * This could be integrated directly into InteractionServer but this further refactoring is probably warranted there
 * regardless.  This keeps the touch light for now.
 */
export class TransactionalInteractionServer extends InteractionServer {
    #endpointStructure: InteractionEndpointStructure;
    #changeListener: (type: EndpointLifecycle.Change) => void;
    #endpoint: Endpoint;
    #activity: NodeActivity;
    #newActivityBlocked = false;

    constructor(endpoint: Endpoint<ServerNode.RootEndpoint>) {
        const structure = new InteractionEndpointStructure();

        super({
            eventHandler: endpoint.env.get(ServerStore).eventHandler,
            endpointStructure: structure,
            subscriptionOptions: endpoint.state.network.subscriptionOptions,
        });

        this.#activity = endpoint.env.get(NodeActivity);

        this.#endpoint = endpoint;
        this.#endpointStructure = structure;

        // TODO - rewrite element lookup so we don't need to build the secondary endpoint structure cache
        this.#updateStructure();
        this.#changeListener = type => {
            switch (type) {
                case EndpointLifecycle.Change.TreeReady:
                case EndpointLifecycle.Change.ClientsChanged:
                case EndpointLifecycle.Change.ServersChanged:
                case EndpointLifecycle.Change.Destroyed:
                    this.#updateStructure();
                    break;
            }
        };

        endpoint.lifecycle.changed.on(this.#changeListener);
    }

    async [Symbol.asyncDispose]() {
        this.#endpoint.lifecycle.changed.off(this.#changeListener);
        await this.close();
        this.#endpointStructure.close();
    }

    blockNewActivity() {
        this.#newActivityBlocked = true;
    }

    override async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        // When closing, ignore anything newly incoming
        if (this.#newActivityBlocked || this.isClosing) {
            return;
        }

        // Activity tracking.  This provides diagnostic information and prevents the server from shutting down whilst
        // the exchange is active
        using activity = this.#activity.begin(`session#${exchange.session.id.toString(16)}`);
        (exchange as WithActivity)[activityKey] = activity;

        // Delegate to InteractionServerMessenger
        return new InteractionServerMessenger(exchange)
            .handleRequest(this)
            .finally(() => delete (exchange as WithActivity)[activityKey]);
    }

    protected override async readAttribute(
        attribute: AnyAttributeServer<any>,
        exchange: MessageExchange<MatterDevice>,
        fabricFiltered: boolean,
        message: Message,
    ) {
        const readAttribute = () => super.readAttribute(attribute, exchange, fabricFiltered, message);

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            fabricFiltered,
            message,
            session: exchange.session,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Read,
        }).act(readAttribute);
    }

    protected override async writeAttribute(
        attribute: AttributeServer<any>,
        value: any,
        exchange: MessageExchange<MatterDevice>,
        message: Message,
        timed = false,
    ) {
        const writeAttribute = () => super.writeAttribute(attribute, value, exchange, message, timed);

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            timed,
            message,
            session: exchange.session,
            fabricFiltered: true,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Write,
        }).act(writeAttribute);
    }

    protected override async invokeCommand(
        command: CommandServer<any, any>,
        exchange: MessageExchange<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
    ) {
        const invokeCommand = () => super.invokeCommand(command, exchange, commandFields, message, endpoint, timed);

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            command: true,
            timed,
            message,
            session: exchange.session,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Invoke,
        }).act(invokeCommand);
    }

    get #tracer() {
        if (this.#endpoint.env.has(ActionTracer)) {
            return this.#endpoint.env.get(ActionTracer);
        }
    }

    #updateStructure() {
        if (this.#endpoint.lifecycle.isTreeReady) {
            this.#endpointStructure.initializeFromEndpoint(EndpointServer.forEndpoint(this.#endpoint));
        }
    }
}
