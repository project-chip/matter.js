/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { ActionTracer } from "../../behavior/context/ActionTracer.js";
import { NodeActivity } from "../../behavior/context/server/NodeActivity.js";
import { OnlineContext } from "../../behavior/context/server/OnlineContext.js";
import { AnyAttributeServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { Endpoint } from "../../endpoint/Endpoint.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { EndpointServer } from "../../endpoint/EndpointServer.js";
import { EndpointLifecycle } from "../../endpoint/properties/EndpointLifecycle.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServer } from "../../protocol/interaction/InteractionServer.js";
import { StatusResponseError } from "../../protocol/interaction/StatusCode.js";
import { Session } from "../../session/Session.js";
import { MaybePromise } from "../../util/Promises.js";
import { ServerNode } from "../ServerNode.js";
import { ServerStore } from "./storage/ServerStore.js";

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
    #tracer?: ActionTracer;
    #activity: NodeActivity;

    constructor(endpoint: Endpoint<ServerNode.RootEndpoint>) {
        const structure = new InteractionEndpointStructure();

        super({
            eventHandler: endpoint.env.get(ServerStore).eventHandler,
            endpointStructure: structure,
            subscriptionOptions: endpoint.state.network.subscriptionOptions,
        });

        this.#activity = endpoint.env.get(NodeActivity);

        if (endpoint.env.has(ActionTracer)) {
            this.#tracer = endpoint.env.get(ActionTracer);
        }

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

    protected override async readAttribute(
        attribute: AnyAttributeServer<any>,
        session: Session<MatterDevice>,
        fabricFiltered: boolean,
        message: Message,
    ) {
        return this.#transact(
            "Read",
            {
                activity: this.#activity,
                fabricFiltered,
                message,
                session,
            },
            () => super.readAttribute(attribute, session, fabricFiltered, message),
        );
    }

    protected override async writeAttribute(
        attribute: AttributeServer<any>,
        value: any,
        session: Session<MatterDevice>,
        message: Message,
        timed = false,
    ) {
        return this.#transact(
            "Write",
            {
                activity: this.#activity,
                timed,
                message,
                session,
                fabricFiltered: true,
            },
            () => super.writeAttribute(attribute, value, session, message, timed),
        );
    }

    protected override async invokeCommand(
        command: CommandServer<any, any>,
        session: Session<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
        timed = false,
    ) {
        const invoke = () => super.invokeCommand(command, session, commandFields, message, endpoint, timed);

        return this.#transact(
            "Invoke",
            {
                activity: this.#activity,
                command: true,
                timed,
                message,
                session,
            },
            invoke,
        );
    }

    /**
     * Perform an action with transaction support.
     *
     * Note that we currently wrap individual reads/writes/invokes in transactions with no support for cross-action
     * transactionality.  Matter does not address this so semantics are going to be highly implementation dependent if
     * they make sense at all.
     */
    async #transact<T extends Promise<any>>(
        why: "Read" | "Write" | "Invoke",
        options: OnlineContext.Options,
        actor: () => T,
    ) {
        if (!this.#tracer) {
            return OnlineContext(options).act(actor);
        }

        const trace: ActionTracer.Action = {
            type: why.toLowerCase() as ActionTracer.ActionType,
        };
        options.trace = trace;

        return MaybePromise.then(
            () => OnlineContext(options).act(actor),
            result => {
                this.#tracer?.record(trace);
                return result;
            },
            error => {
                const status = (error as StatusResponseError).code;
                if (typeof status === "number") {
                    trace.status = status;
                }
                this.#tracer?.record(trace);
                throw error;
            },
        );
    }

    #updateStructure() {
        if (this.#endpoint.lifecycle.isTreeReady) {
            this.#endpointStructure.initializeFromEndpoint(EndpointServer.forEndpoint(this.#endpoint));
        }
    }
}
