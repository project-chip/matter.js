/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError } from "../../common/MatterError.js";
import { MatterController } from "../../MatterController.js";
import { MatterDevice } from "../../MatterDevice.js";
import { MessageType } from "../../protocol/securechannel/SecureChannelMessages.js";
import { SecureChannelMessenger } from "../../protocol/securechannel/SecureChannelMessenger.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvCaseSigma1, TlvCaseSigma2, TlvCaseSigma2Resume, TlvCaseSigma3 } from "./CaseMessages.js";

export class CaseServerMessenger extends SecureChannelMessenger<MatterDevice> {
    async readSigma1() {
        const { payload } = await this.nextMessage(MessageType.Sigma1);
        return { sigma1Bytes: payload, sigma1: TlvCaseSigma1.decode(payload) };
    }

    sendSigma2(sigma2: TypeFromSchema<typeof TlvCaseSigma2>) {
        return this.send(sigma2, MessageType.Sigma2, TlvCaseSigma2);
    }

    sendSigma2Resume(sigma2Resume: TypeFromSchema<typeof TlvCaseSigma2Resume>) {
        return this.send(sigma2Resume, MessageType.Sigma2Resume, TlvCaseSigma2Resume);
    }

    async readSigma3() {
        const { payload } = await this.nextMessage(MessageType.Sigma3);
        return { sigma3Bytes: payload, sigma3: TlvCaseSigma3.decode(payload) };
    }
}

export class CaseClientMessenger extends SecureChannelMessenger<MatterController> {
    sendSigma1(sigma1: TypeFromSchema<typeof TlvCaseSigma1>) {
        return this.send(sigma1, MessageType.Sigma1, TlvCaseSigma1);
    }

    async readSigma2() {
        const {
            payload,
            payloadHeader: { messageType },
        } = await this.nextMessage();
        switch (messageType) {
            case MessageType.Sigma2:
                return { sigma2Bytes: payload, sigma2: TlvCaseSigma2.decode(payload) };
            case MessageType.Sigma2Resume:
                return { sigma2Resume: TlvCaseSigma2Resume.decode(payload) };
            default:
                throw new MatterFlowError(
                    `Received unexpected message type: ${messageType}, expected: ${MessageType.Sigma2} or ${MessageType.Sigma2Resume}`,
                );
        }
    }

    sendSigma3(sigma3: TypeFromSchema<typeof TlvCaseSigma3>) {
        return this.send(sigma3, MessageType.Sigma3, TlvCaseSigma3);
    }
}
