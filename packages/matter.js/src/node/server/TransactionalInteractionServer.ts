/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { OnlineContext } from "../../behavior/context/server/OnlineContext.js";
import { AnyAttributeServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { Part } from "../../endpoint/Part.js";
import { PartServer } from "../../endpoint/PartServer.js";
import { PartLifecycle } from "../../endpoint/part/PartLifecycle.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServer } from "../../protocol/interaction/InteractionServer.js";
import { Session } from "../../session/Session.js";
import { track } from "../../util/Promises.js";
import { ServerRootEndpoint } from "./ServerRootEndpoint.js";
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
    #changeListener: (type: PartLifecycle.Change) => void;
    #part: Part;

    constructor(part: Part<ServerRootEndpoint>) {
        const structure = new InteractionEndpointStructure();

        super({
            eventHandler: part.env.get(ServerStore).eventHandler,
            endpointStructure: structure,
            subscriptionOptions: part.state.network.subscriptionOptions,
        });

        this.#part = part;
        this.#endpointStructure = structure;

        // TODO - rewrite element lookup so we don't need to build the secondary endpoint structure cache
        this.#updateStructure();
        this.#changeListener = type => {
            switch (type) {
                case PartLifecycle.Change.TreeReady:
                case PartLifecycle.Change.ClientsChanged:
                case PartLifecycle.Change.ServersChanged:
                case PartLifecycle.Change.Destroyed:
                    this.#updateStructure();
                    break;                    
            }
        };

        part.lifecycle.changed.on(this.#changeListener);
    }

    async [Symbol.asyncDispose]() {
        this.#part.lifecycle.changed.off(this.#changeListener);
        await this.close();
        this.#endpointStructure.destroy();
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
                timed,
                message,
                session,
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
        return this.#transact(
            "Invoke",
            {
                command: true,
                timed,
                message,
                session,
            },
            () => super.invokeCommand(command, session, commandFields, message, endpoint, timed),
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
        fn: () => T,
    ) {
        return OnlineContext(options).act(context => track(fn(), [why, context.transaction.via]));
    }

    #updateStructure() {
        if (this.#part.lifecycle.isTreeReady) {
            this.#endpointStructure.initializeFromEndpoint(PartServer.forPart(this.#part));
        }
    }
}
