/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Session } from "../../session/Session.js";
import { TlvSchema, TlvStream } from "../../tlv/TlvSchema.js";
import { Message } from "../../codec/MessageCodec.js";
import { Logger } from "../../log/Logger.js";
import { EndpointData, StatusCode } from "../../protocol/interaction/index.js";

const logger = Logger.get("CommandServer");

export class CommandServer<RequestT, ResponseT> {
    constructor(
        readonly invokeId: number,
        readonly responseId: number,
        readonly name: string,
        protected readonly requestSchema: TlvSchema<RequestT>,
        protected readonly responseSchema: TlvSchema<ResponseT>,
        protected readonly handler: (request: RequestT, session: Session<MatterDevice>, message: Message, endpoint: EndpointData) => Promise<ResponseT> | ResponseT,
    ) { }

    async invoke(session: Session<MatterDevice>, args: TlvStream, message: Message, endpoint: EndpointData): Promise<{ code: StatusCode, responseId: number, response: TlvStream }> {
        const request = this.requestSchema.decodeTlv(args);
        logger.debug(`Invoke ${this.name} with data ${Logger.toJSON(request)}`);
        const response = await this.handler(request, session, message, endpoint);
        logger.debug(`Invoke ${this.name} response : ${Logger.toJSON(response)}`);
        return { code: StatusCode.Success, responseId: this.responseId, response: this.responseSchema.encodeTlv(response) };
    }
}
