/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec.js";
import { CommandId } from "../../datatype/CommandId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { Session } from "../../session/Session.js";
import { TlvSchema, TlvStream } from "../../tlv/TlvSchema.js";

const logger = Logger.get("CommandServer");

export class CommandServer<RequestT, ResponseT> {
    constructor(
        readonly invokeId: CommandId,
        readonly responseId: CommandId,
        readonly name: string,
        readonly requestSchema: TlvSchema<RequestT>,
        readonly responseSchema: TlvSchema<ResponseT>,
        protected readonly handler: (
            request: RequestT,
            session: Session<MatterDevice>,
            message: Message,
            endpoint: Endpoint,
        ) => Promise<ResponseT> | ResponseT,
    ) {}

    async invoke(
        session: Session<MatterDevice>,
        args: TlvStream,
        message: Message,
        endpoint: Endpoint,
    ): Promise<{ code: StatusCode; responseId: CommandId; response: TlvStream }> {
        const request = this.requestSchema.decodeTlv(args);
        logger.debug(`Invoke ${this.name} with data ${Logger.toJSON(request)}`);
        const response = await this.handler(request, session, message, endpoint);
        logger.debug(`Invoke ${this.name} response : ${Logger.toJSON(response)}`);
        return {
            code: StatusCode.Success,
            responseId: this.responseId,
            response: this.responseSchema.encodeTlv(response),
        };
    }
}
