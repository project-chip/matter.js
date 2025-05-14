/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interactable, InteractionSession } from "#action/Interactable.js";
import { NodeProtocol } from "#action/protocols.js";
import { Invoke } from "#action/request/Invoke.js";
import { Read } from "#action/request/Read.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { Write } from "#action/request/Write.js";
import { InvokeResult } from "#action/response/InvokeResult.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { SubscribeResult } from "#action/response/SubscribeResult.js";
import { WriteResult } from "#action/response/WriteResult.js";
import { EventReadResponse } from "#action/server/EventReadResponse.js";
import { Logger, NotImplementedError } from "#general";
import { AttributeReadResponse } from "./AttributeReadResponse.js";
import { AttributeWriteResponse } from "./AttributeWriteResponse.js";

const logger = Logger.get("ServerInteraction");

/**
 * Implementation of server interaction.
 *
 * This implementation currently focuses on read of attribute data with other actions to be implemented later.  Until
 * completion there will be redundancy with other components including:
 *
 * - InteractionServer (significant overlap with this class)
 *
 * - InteractionEndpointStructure ({@link NodeProtocol} is largely duplicative)
 */
export class ServerInteraction<SessionT extends InteractionSession = InteractionSession>
    implements Interactable<SessionT>
{
    #node: NodeProtocol;

    constructor(node: NodeProtocol) {
        this.#node = node;
    }

    async *read(request: Read, session: SessionT): ReadResult {
        // TODO - validate request

        let readInfo = "";
        if (Read.containsAttribute(request)) {
            const attributeReader = new AttributeReadResponse(this.#node, session);
            yield* attributeReader.process(request);

            const { existent, status, value } = attributeReader.counts;
            readInfo = `${existent} matching attributes (${status ? `${status} status, ` : ""}${value ? `${value} values` : ""})`;
        }

        if (Read.containsEvent(request)) {
            const eventReader = new EventReadResponse(this.#node, session);
            yield* eventReader.process(request);
            const { existent, status, value } = eventReader.counts;
            readInfo += `${readInfo.length > 0 ? ", " : ""}${existent} matching events (${status ? `${status} status, ` : ""}${value ? `${value} values` : ""})`;
        }
        logger.debug(`Read request resolved to ${readInfo}`);
    }

    subscribe(_request: Subscribe, _session?: SessionT): SubscribeResult {
        // TODO
        throw new NotImplementedError();
    }

    write<T extends Write>(_request: T, _session?: SessionT): WriteResult<T> {
        // TODO
        throw new NotImplementedError();
    }

    invoke<T extends Invoke>(_request: T, _session?: SessionT): InvokeResult<T> {
        // TODO
        throw new NotImplementedError();
    }
}
