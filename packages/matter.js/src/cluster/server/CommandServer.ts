/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Message } from "../../codec/MessageCodec.js";
import { ValidationError } from "../../common/MatterError.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { CommandId } from "../../datatype/CommandId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import { Globals } from "../../model/index.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { SecureSession } from "../../session/SecureSession.js";
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
        readonly requiresTimedInteraction: boolean,
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
    ): Promise<{
        /** Primary StatusCode of the invoke request  as defined by Interaction proptocol. */
        code: StatusCode;

        /** Cluster specific StatusCode of the invoke request if required */
        clusterCode?: number;

        /** ID of the response */
        responseId: CommandId;

        /** Response data */
        response: TlvStream;
    }> {
        return await tryCatchAsync(
            async () => {
                let request = this.requestSchema.decodeTlv(args);

                // Inject fabric index into structures in general if undefined, if set it will be used
                if (session.isSecure()) {
                    const fabric = (session as SecureSession<any>).getFabric();
                    if (fabric) {
                        request = this.requestSchema.injectField(
                            request,
                            <number>Globals.FabricIndex.id,
                            session.getAssociatedFabric().fabricIndex,
                            existingFieldIndex => existingFieldIndex === undefined,
                        );
                    }
                }

                this.requestSchema.validate(request);
                logger.debug(`Invoke ${this.name} with data ${Logger.toJSON(request)}`);
                const response = await this.handler(request, session, message, endpoint);
                logger.debug(`Invoke ${this.name} response : ${Logger.toJSON(response)}`);
                return {
                    code: StatusCode.Success,
                    responseId: this.responseId,
                    response: this.responseSchema.encodeTlv(response),
                };
            },
            ValidationError,
            async (error: ValidationError) => {
                const statusError = new StatusResponseError(error.message, StatusCode.ConstraintError);
                statusError.stack = error.stack;
                throw statusError;
            },
        );
    }
}
