/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AccessControl } from "../../behavior/AccessControl.js";
import { ActionContext } from "../../behavior/context/ActionContext.js";
import { ActionTracer } from "../../behavior/context/ActionTracer.js";
import { NodeActivity } from "../../behavior/context/NodeActivity.js";
import { OnlineContext } from "../../behavior/context/server/OnlineContext.js";
import { AccessControlServer } from "../../behavior/definitions/access-control/AccessControlServer.js";
import { AnyAttributeServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { InternalError } from "../../common/MatterError.js";
import { Endpoint } from "../../endpoint/Endpoint.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { EndpointServer } from "../../endpoint/EndpointServer.js";
import { EndpointLifecycle } from "../../endpoint/properties/EndpointLifecycle.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { AccessDeniedError } from "../../protocol/interaction/AccessControlManager.js";
import { EventStorageData } from "../../protocol/interaction/EventHandler.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import {
    InteractionServerMessenger,
    WriteRequest,
    WriteResponse,
} from "../../protocol/interaction/InteractionMessenger.js";
import { TlvEventFilter } from "../../protocol/interaction/InteractionProtocol.js";
import {
    AttributePath,
    CommandPath,
    EventPath,
    InteractionServer,
} from "../../protocol/interaction/InteractionServer.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { MaybePromise } from "../../util/Promises.js";
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
    #endpoint: Endpoint<ServerNode.RootEndpoint>;
    #activity: NodeActivity;
    #newActivityBlocked = false;
    #aclServer?: AccessControlServer;

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

    get aclServer() {
        if (this.#aclServer !== undefined) {
            return this.#aclServer;
        }
        const aclServer = this.#endpoint.act(agent => agent.get(AccessControlServer));
        if (MaybePromise.is(aclServer)) {
            throw new InternalError("AccessControlServer should already be initialized.");
        }
        return (this.#aclServer = aclServer);
    }

    protected override async readAttribute(
        path: AttributePath,
        attribute: AnyAttributeServer<any>,
        exchange: MessageExchange<MatterDevice>,
        fabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
    ) {
        const readAttribute = () => super.readAttribute(path, attribute, exchange, fabricFiltered, message, endpoint);

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            fabricFiltered,
            message,
            exchange,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Read,
            endpoint,
            root: this.#endpoint,
        }).act(readAttribute);
    }

    protected override async readEvent(
        path: EventPath,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        event: EventServer<any, any>,
        exchange: MessageExchange<MatterDevice>,
        fabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
    ): Promise<EventStorageData<any>[]> {
        const readEvent = (context: ActionContext) => {
            if (!context.authorizedFor(event.readAcl, { cluster: path.clusterId } as AccessControl.Location)) {
                throw new AccessDeniedError(
                    `Access to ${endpoint.number}/${Diagnostic.hex(path.clusterId)} denied on ${exchange.session.name}.`,
                );
            }
            return super.readEvent(path, eventFilters, event, exchange, fabricFiltered, message, endpoint);
        };

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            fabricFiltered,
            message,
            exchange,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Read,
            endpoint,
            root: this.#endpoint,
        }).act(readEvent);
    }

    override async handleWriteRequest(
        exchange: MessageExchange<MatterDevice>,
        writeRequest: WriteRequest,
        message: Message,
    ): Promise<WriteResponse> {
        // TODO: This is a hack to prevent the ACL from updating while we are in the middle of a write transaction and will
        //  be removed again once we somehow handle relevant sub transactions
        this.aclServer.aclUpdateDelayed = true;

        const result = await super.handleWriteRequest(exchange, writeRequest, message);

        this.aclServer.aclUpdateDelayed = false;
        return result;
    }

    protected override async writeAttribute(
        path: AttributePath,
        attribute: AttributeServer<any>,
        value: any,
        exchange: MessageExchange<MatterDevice>,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
        isListWrite?: boolean,
    ) {
        const writeAttribute = () =>
            super.writeAttribute(path, attribute, value, exchange, message, endpoint, timed, isListWrite);

        // TODO add handling for List writes that require sub transactions and remove the delayed ACL update
        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            timed,
            message,
            exchange,
            fabricFiltered: true,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Write,
            endpoint,
            root: this.#endpoint,
        }).act(writeAttribute);
    }

    protected override async invokeCommand(
        path: CommandPath,
        command: CommandServer<any, any>,
        exchange: MessageExchange<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
    ) {
        const invokeCommand = (context: ActionContext) => {
            if (!context.authorizedFor(command.invokeAcl, { cluster: path.clusterId } as AccessControl.Location)) {
                throw new AccessDeniedError(
                    `Access to ${endpoint.number}/${Diagnostic.hex(path.clusterId)} denied on ${exchange.session.name}.`,
                );
            }
            return super.invokeCommand(path, command, exchange, commandFields, message, endpoint, timed);
        };

        return OnlineContext({
            activity: (exchange as WithActivity)[activityKey],
            command: true,
            timed,
            message,
            exchange,
            tracer: this.#tracer,
            actionType: ActionTracer.ActionType.Invoke,
            endpoint,
            root: this.#endpoint,
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
