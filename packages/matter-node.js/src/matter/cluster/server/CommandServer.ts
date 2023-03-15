/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice";
import { Session } from "../../session/Session";
import { TlvSchema, TlvStream } from "@project-chip/matter.js";
import { Message } from "../../../codec/MessageCodec";
import { Logger } from "../../../log/Logger";

const logger = Logger.get("CommandServer");

export const enum ResultCode {
    Success = 0x00,
}

export class CommandServer<RequestT, ResponseT> {
    constructor(
        readonly invokeId: number,
        readonly responseId: number,
        readonly name: string,
        protected readonly requestSchema: TlvSchema<RequestT>,
        protected readonly responseSchema: TlvSchema<ResponseT>,
        protected readonly handler: (request: RequestT, session: Session<MatterDevice>, message: Message) => Promise<ResponseT> | ResponseT,
    ) {}

    async invoke(session: Session<MatterDevice>, args: TlvStream, message: Message): Promise<{ code: ResultCode, responseId: number, response: TlvStream }> {
        const request = this.requestSchema.decodeTlv(args);
        logger.debug(`Invoke ${this.name} with data ${Logger.toJSON(request)}`);
        const response = await this.handler(request, session, message);
        logger.debug(`Invoke ${this.name} response : ${Logger.toJSON(response)}`);
        return { code: ResultCode.Success, responseId: this.responseId, response: this.responseSchema.encodeTlv(response) };
    }
}
