/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes } from "#general";
import { SecureMessageType, TypeFromSchema } from "#types";
import {
    DEFAULT_NORMAL_PROCESSING_TIME_MS,
    SecureChannelMessenger,
} from "../../securechannel/SecureChannelMessenger.js";
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

export class PaseServerMessenger extends SecureChannelMessenger {
    async readPbkdfParamRequest() {
        const { payload } = await this.nextMessage(
            SecureMessageType.PbkdfParamRequest,
            DEFAULT_NORMAL_PROCESSING_TIME_MS,
        );
        return { requestPayload: payload, request: TlvPbkdfParamRequest.decode(payload) };
    }

    async sendPbkdfParamResponse(response: PbkdfParamResponse) {
        return this.send(response, SecureMessageType.PbkdfParamResponse, TlvPbkdfParamResponse, {
            expectedProcessingTimeMs: DEFAULT_NORMAL_PROCESSING_TIME_MS,
        });
    }

    readPasePake1() {
        return this.nextMessageDecoded(SecureMessageType.PasePake1, TlvPasePake1);
    }

    sendPasePake2(pasePake2: PasePake2) {
        return this.send(pasePake2, SecureMessageType.PasePake2, TlvPasePake2);
    }

    readPasePake3() {
        return this.nextMessageDecoded(SecureMessageType.PasePake3, TlvPasePake3);
    }
}

export class PaseClientMessenger extends SecureChannelMessenger {
    sendPbkdfParamRequest(request: PbkdfParamRequest) {
        return this.send(request, SecureMessageType.PbkdfParamRequest, TlvPbkdfParamRequest, {
            expectedProcessingTimeMs: DEFAULT_NORMAL_PROCESSING_TIME_MS,
        });
    }

    async readPbkdfParamResponse() {
        const { payload } = await this.nextMessage(
            SecureMessageType.PbkdfParamResponse,
            DEFAULT_NORMAL_PROCESSING_TIME_MS,
        );
        return { responsePayload: payload, response: TlvPbkdfParamResponse.decode(payload) };
    }

    sendPasePake1(pasePake1: PasePake1) {
        return this.send(pasePake1, SecureMessageType.PasePake1, TlvPasePake1);
    }

    readPasePake2() {
        return this.nextMessageDecoded(SecureMessageType.PasePake2, TlvPasePake2);
    }

    sendPasePake3(pasePake3: PasePake3) {
        return this.send(pasePake3, SecureMessageType.PasePake3, TlvPasePake3);
    }
}
