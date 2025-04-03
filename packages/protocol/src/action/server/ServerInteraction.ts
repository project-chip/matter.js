/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interactable } from "#action/Interactable.js";
import { NodeProtocol } from "#action/protocols.js";
import { Invoke } from "#action/request/Invoke.js";
import { Read } from "#action/request/Read.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { Write } from "#action/request/Write.js";
import { InvokeResult } from "#action/response/InvokeResult.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { SubscribeResult } from "#action/response/SubscribeResult.js";
import { WriteResult } from "#action/response/WriteResult.js";
import { AccessControl } from "#action/server/AccessControl.js";
import { NotImplementedError } from "#general";
import { AttributeResponse } from "./AttributeResponse.js";

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
export class ServerInteraction<SessionT extends AccessControl.Session = AccessControl.Session>
    implements Interactable<SessionT>
{
    #node: NodeProtocol;

    constructor(node: NodeProtocol) {
        this.#node = node;
    }

    async *read(request: Read, session: SessionT): ReadResult {
        // TODO - validate request

        if (Read.isAttribute(request)) {
            yield* new AttributeResponse(this.#node, session, request);
        }

        // TODO - event reads
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
