/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes } from "@project-chip/matter.js-general";
import { TypeFromSchema } from "@project-chip/matter.js-types";
import { MatterController } from "../../MatterController.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MessageType } from "../../protocol/securechannel/SecureChannelMessages.js";
import {
    DEFAULT_NORMAL_PROCESSING_TIME_MS,
    SecureChannelMessenger,
} from "../../protocol/securechannel/SecureChannelMessenger.js";
import {
    TlvPasePake1,
    TlvPasePake2,
    TlvPasePake3,
    TlvPbkdfParamRequest,
    TlvPbkdfParamResponse,
} from "./PaseMessages.js";

export const DEFAULT_PASSCODE_ID = 0;
export const SPAKE_CONTEXT = Bytes.fromString("CHIP PAKE V1 Commissioning");

type PbkdfParamRequest = TypeFromSchema<typeof TlvPbkdfParamRequest>;
type PbkdfParamResponse = TypeFromSchema<typeof TlvPbkdfParamResponse>;
type PasePake1 = TypeFromSchema<typeof TlvPasePake1>;
type PasePake2 = TypeFromSchema<typeof TlvPasePake2>;
type PasePake3 = TypeFromSchema<typeof TlvPasePake3>;

export class PaseServerMessenger extends SecureChannelMessenger<MatterDevice> {
    async readPbkdfParamRequest() {
        const { payload } = await this.nextMessage(
            "PASE PbkdfParamRequest",
            MessageType.PbkdfParamRequest,
            DEFAULT_NORMAL_PROCESSING_TIME_MS,
        );
        return { requestPayload: payload, request: TlvPbkdfParamRequest.decode(payload) };
    }

    async sendPbkdfParamResponse(response: PbkdfParamResponse) {
        return this.send(response, MessageType.PbkdfParamResponse, TlvPbkdfParamResponse, {
            expectedProcessingTimeMs: DEFAULT_NORMAL_PROCESSING_TIME_MS,
        });
    }

    readPasePake1() {
        return this.nextMessageDecoded(MessageType.PasePake1, TlvPasePake1, "PASE Pake1");
    }

    sendPasePake2(pasePake2: PasePake2) {
        return this.send(pasePake2, MessageType.PasePake2, TlvPasePake2);
    }

    readPasePake3() {
        return this.nextMessageDecoded(MessageType.PasePake3, TlvPasePake3, "PASE Pake3");
    }
}

export class PaseClientMessenger extends SecureChannelMessenger<MatterController> {
    sendPbkdfParamRequest(request: PbkdfParamRequest) {
        return this.send(request, MessageType.PbkdfParamRequest, TlvPbkdfParamRequest, {
            expectedProcessingTimeMs: DEFAULT_NORMAL_PROCESSING_TIME_MS,
        });
    }

    async readPbkdfParamResponse() {
        const { payload } = await this.nextMessage(
            "PASE PbkdfParamResponse",
            MessageType.PbkdfParamResponse,
            DEFAULT_NORMAL_PROCESSING_TIME_MS,
        );
        return { responsePayload: payload, response: TlvPbkdfParamResponse.decode(payload) };
    }

    sendPasePake1(pasePake1: PasePake1) {
        return this.send(pasePake1, MessageType.PasePake1, TlvPasePake1);
    }

    readPasePake2() {
        return this.nextMessageDecoded(MessageType.PasePake2, TlvPasePake2, "PASE Pake2");
    }

    sendPasePake3(pasePake3: PasePake3) {
        return this.send(pasePake3, MessageType.PasePake3, TlvPasePake3);
    }
}
