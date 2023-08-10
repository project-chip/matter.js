/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../../MatterController.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MessageType } from "../../protocol/securechannel/SecureChannelMessages.js";
import { SecureChannelMessenger } from "../../protocol/securechannel/SecureChannelMessenger.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/ByteArray.js";
import {
    TlvPasePake1,
    TlvPasePake2,
    TlvPasePake3,
    TlvPbkdfParamRequest,
    TlvPbkdfParamResponse,
} from "./PaseMessages.js";

export const DEFAULT_PASSCODE_ID = 0;
export const SPAKE_CONTEXT = ByteArray.fromString("CHIP PAKE V1 Commissioning");

type PbkdfParamRequest = TypeFromSchema<typeof TlvPbkdfParamRequest>;
type PbkdfParamResponse = TypeFromSchema<typeof TlvPbkdfParamResponse>;
type PasePake1 = TypeFromSchema<typeof TlvPasePake1>;
type PasePake2 = TypeFromSchema<typeof TlvPasePake2>;
type PasePake3 = TypeFromSchema<typeof TlvPasePake3>;

export class PaseServerMessenger extends SecureChannelMessenger<MatterDevice> {
    async readPbkdfParamRequest() {
        const { payload } = await this.nextMessage(MessageType.PbkdfParamRequest);
        return { requestPayload: payload, request: TlvPbkdfParamRequest.decode(payload) };
    }

    async sendPbkdfParamResponse(response: PbkdfParamResponse) {
        return this.send(response, MessageType.PbkdfParamResponse, TlvPbkdfParamResponse);
    }

    readPasePake1() {
        return this.nextMessageDecoded(MessageType.PasePake1, TlvPasePake1);
    }

    sendPasePake2(pasePake2: PasePake2) {
        return this.send(pasePake2, MessageType.PasePake2, TlvPasePake2);
    }

    readPasePake3() {
        return this.nextMessageDecoded(MessageType.PasePake3, TlvPasePake3);
    }
}

export class PaseClientMessenger extends SecureChannelMessenger<MatterController> {
    sendPbkdfParamRequest(request: PbkdfParamRequest) {
        return this.send(request, MessageType.PbkdfParamRequest, TlvPbkdfParamRequest);
    }

    async readPbkdfParamResponse() {
        const { payload } = await this.nextMessage(MessageType.PbkdfParamResponse);
        return { responsePayload: payload, response: TlvPbkdfParamResponse.decode(payload) };
    }

    sendPasePake1(pasePake1: PasePake1) {
        return this.send(pasePake1, MessageType.PasePake1, TlvPasePake1);
    }

    readPasePake2() {
        return this.nextMessageDecoded(MessageType.PasePake2, TlvPasePake2);
    }

    sendPasePake3(pasePake3: PasePake3) {
        return this.send(pasePake3, MessageType.PasePake3, TlvPasePake3);
    }
}
