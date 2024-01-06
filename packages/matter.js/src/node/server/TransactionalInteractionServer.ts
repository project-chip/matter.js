/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { AnyAttributeServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { Message } from "../../codec/MessageCodec.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { Part } from "../../endpoint/Part.js";
import { PartServer } from "../../endpoint/PartServer.js";
import { Logger } from "../../log/Logger.js";
import { InteractionEndpointStructure } from "../../protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServer } from "../../protocol/interaction/InteractionServer.js";
import { Session } from "../../session/Session.js";
import { SubscriptionOptions } from "../options/SubscriptionOptions.js";
import { ServerStore } from "./storage/ServerStore.js";

const TRANSACTION = Symbol("transaction");

const logger = Logger.get("TransactionalInteractionServer");

/**
 * We graft an InvocationContext onto the session in
 * {@link TransactionalInteractionServer}.
 *
 * This could become part of the public session API but it may make sense
 * to merge InvocationContext into session fully so leaving as private for now.
 */
interface InternalSession extends Session<MatterDevice> {
    [TRANSACTION]?: Transaction;
}

/**
 * Wire up an InteractionServer that initializes an InvocationContext earlier
 * than the cluster API supports.
 *
 * This is necessary for attributes because the ClusterServer attribute
 * APIs are synchronous while transaction management is asynchronous.
 *
 * It's not necessary for command handling because that API is entirely async.
 * We do it here, however, just for the sake of consistency.
 *
 * This could be integrated directly into InteractionServer but this further
 * refactoring is probably warranted there regardless.  This keeps the touch
 * light for now.
 */
export class TransactionalInteractionServer extends InteractionServer {
    constructor(root: Part, store: ServerStore, subscriptionOptions: SubscriptionOptions) {
        const structure = new InteractionEndpointStructure;
        root.lifecycle.changed.on(() => structure.initializeFromEndpoint(PartServer.forPart(root)))
        super({
            eventHandler: store.eventHandler,
            endpointStructure: structure,
            subscriptionOptions: subscriptionOptions,
        })
    }

    /**
     * Obtain the transaction for a session.
     */
    static transactionFor(session: Session<MatterDevice>) {
        let transaction = (session as InternalSession)[TRANSACTION];
        if (transaction === undefined) {
            transaction = new Transaction();
            (session as InternalSession)[TRANSACTION] = transaction;
        }
        return transaction;
    }

    protected override async readAttribute(
        attribute: AnyAttributeServer<any>,
        session: Session<MatterDevice>,
        isFabricFiltered: boolean,
    ) {
        return this.#transact(session, () => super.readAttribute(attribute, session, isFabricFiltered));
    }

    protected override async writeAttribute(
        attribute: AttributeServer<any>,
        value: any,
        session: Session<MatterDevice>,
    ) {
        return this.#transact(session, () => super.writeAttribute(attribute, value, session));
    }

    protected override async invokeCommand(
        command: CommandServer<any, any>,
        session: Session<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
    ) {
        return this.#transact(session, () => super.invokeCommand(command, session, commandFields, message, endpoint));
    }

    /**
     * Perform an action with transaction support.
     *
     * If a transaction is present in the session after the action, commit or
     * rollback depending on whether the action succeeded.
     *
     * Note that we currently wrap individual reads/writes/invokes in
     * transactions with no support for cross-action transactionality.  Matter
     * does not address this so semantics are going to be highly implementation
     * dependent if they make sense at all.
     */
    async #transact<T>(session: Session<MatterDevice>, fn: () => T) {
        try {
            return fn();
        } catch (e) {
            try {
                this.#endTransaction(session, "rollback");
            } catch (e) {
                logger.error("Unhandled error in transaction rollback", e);
            }
            throw e;
        } finally {
            this.#endTransaction(session, "commit");
        }
    }

    async #endTransaction(session: Session<MatterDevice>, method: "commit" | "rollback") {
        const transaction = (session as InternalSession)[TRANSACTION];

        if (transaction === undefined) {
            return;
        }

        delete (session as InternalSession)[TRANSACTION];

        if (transaction.status === Transaction.Status.Shared) {
            await transaction[method]();
        }
    }
}
