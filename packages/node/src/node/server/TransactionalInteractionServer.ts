/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "#behavior/AccessControl.js";
import { ActionContext } from "#behavior/context/ActionContext.js";
import { ActionTracer } from "#behavior/context/ActionTracer.js";
import { NodeActivity } from "#behavior/context/NodeActivity.js";
import { OfflineContext } from "#behavior/context/server/OfflineContext.js";
import { OnlineContext } from "#behavior/context/server/OnlineContext.js";
import { AccessControlCluster } from "#clusters/access-control";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointServer } from "#endpoint/EndpointServer.js";
import { EndpointLifecycle } from "#endpoint/properties/EndpointLifecycle.js";
import { Diagnostic, InternalError, MaybePromise } from "#general";
import {
    AccessDeniedError,
    AnyAttributeServer,
    AnyEventServer,
    AttributePath,
    AttributeServer,
    CommandPath,
    CommandServer,
    EndpointInterface,
    EventPath,
    EventStorageData,
    ExchangeManager,
    InteractionContext,
    InteractionEndpointStructure,
    InteractionServer,
    InteractionServerMessenger,
    Message,
    MessageExchange,
    SessionManager,
    WriteRequest,
    WriteResponse,
} from "#protocol";
import { TlvEventFilter, TypeFromSchema } from "#types";
import { AccessControlServer } from "../../behaviors/access-control/AccessControlServer.js";
import { ServerNode } from "../ServerNode.js";

const activityKey = Symbol("activity");

interface WithActivity {
    [activityKey]?: NodeActivity.Activity;
}

const AclClusterId = AccessControlCluster.id;
const AclAttributeId = AccessControlCluster.attributes.acl.id;

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
    #aclUpdateIsDelayed = false;

    static async create(endpoint: Endpoint<ServerNode.RootEndpoint>, sessions: SessionManager) {
        const structure = new InteractionEndpointStructure();

        return new TransactionalInteractionServer(endpoint, {
            sessions,
            structure,
            subscriptionOptions: endpoint.state.network.subscriptionOptions,
            maxPathsPerInvoke: endpoint.state.basicInformation.maxPathsPerInvoke,
            initiateExchange: (address, protocolId) =>
                endpoint.env.get(ExchangeManager).initiateExchange(address, protocolId),
        });
    }

    constructor(endpoint: Endpoint<ServerNode.RootEndpoint>, context: InteractionContext) {
        super(context);

        const { structure } = context;

        this.#activity = endpoint.env.get(NodeActivity);

        this.#endpoint = endpoint;
        this.#endpointStructure = structure;

        // TODO - rewrite element lookup so we don't need to build the secondary endpoint structure cache
        this.#updateStructure();
        this.#changeListener = type => {
            switch (type) {
                case EndpointLifecycle.Change.PartsReady:
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

    override async onNewExchange(exchange: MessageExchange) {
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
        exchange: MessageExchange,
        fabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
        offline = false,
    ) {
        const readAttribute = () =>
            super.readAttribute(path, attribute, exchange, fabricFiltered, message, endpoint, offline);

        // Offline read do not require ACL checks
        if (offline) {
            return OfflineContext.act("offline-read", this.#activity, readAttribute);
        }

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
        event: AnyEventServer<any, any>,
        exchange: MessageExchange,
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
        exchange: MessageExchange,
        writeRequest: WriteRequest,
        message: Message,
    ): Promise<WriteResponse> {
        const result = await super.handleWriteRequest(exchange, writeRequest, message);

        // We delayed the ACL update during the write transaction, so we need to update it now that anything is written
        if (this.#aclUpdateIsDelayed) {
            this.aclServer.aclUpdateDelayed = false;
            this.#aclUpdateIsDelayed = false;
        }
        return result;
    }

    protected override async writeAttribute(
        path: AttributePath,
        attribute: AttributeServer<any>,
        value: any,
        exchange: MessageExchange,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
        isListWrite?: boolean,
    ) {
        const writeAttribute = () =>
            super.writeAttribute(path, attribute, value, exchange, message, endpoint, timed, isListWrite);

        if (path.endpointId === 0 && path.clusterId === AclClusterId && path.attributeId === AclAttributeId) {
            // This is a hack to prevent the ACL from updating while we are in the middle of a write transaction
            // and is needed because Acl should not become effective during writing of the ACL itself.
            this.aclServer.aclUpdateDelayed = true;
            this.#aclUpdateIsDelayed = true;
        } else if (this.#aclUpdateIsDelayed) {
            // Ok it seems that acl was written, but we now write another path, so we can update Acl attribute now
            this.aclServer.aclUpdateDelayed = false;
            this.#aclUpdateIsDelayed = false;
        }

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
        exchange: MessageExchange,
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
        if (this.#endpoint.lifecycle.isPartsReady) {
            this.#endpointStructure.initializeFromEndpoint(EndpointServer.forEndpoint(this.#endpoint));
        }
    }
}
