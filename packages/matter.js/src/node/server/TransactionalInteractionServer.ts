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

    constructor(part: Part<ServerRootEndpoint>) {
        const structure = new InteractionEndpointStructure();

        // TODO - rewrite element lookup so we don't need to build the secondary endpoint structure cache
        structure.initializeFromEndpoint(PartServer.forPart(part));
        part.lifecycle.changed.on(() => structure.initializeFromEndpoint(PartServer.forPart(part)));

        super({
            eventHandler: part.env.get(ServerStore).eventHandler,
            endpointStructure: structure,
            subscriptionOptions: part.state.network.subscriptionOptions,
        });
        this.#endpointStructure = structure;
    }

    async [Symbol.asyncDispose]() {
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
    ) {
        return this.#transact(
            "Write",
            {
                message,
                session,
            },
            () => super.writeAttribute(attribute, value, session, message),
        );
    }

    protected override async invokeCommand(
        command: CommandServer<any, any>,
        session: Session<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
    ) {
        return this.#transact(
            "Invoke",
            {
                command: true,
                message,
                session,
            },
            () => super.invokeCommand(command, session, commandFields, message, endpoint),
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
}
