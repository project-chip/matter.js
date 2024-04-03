/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { KeypadInput } from "../../../cluster/definitions/KeypadInputCluster.js";

/**
 * Upon receipt, this shall process a keycode as input to the media device.
 *
 * If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider
 * the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the
 * endpoint will consider the last key press to be a release.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.8.3.1
 */
export type SendKeyRequest = TypeFromSchema<typeof KeypadInput.TlvSendKeyRequest>;

/**
 * This command shall be generated in response to a SendKey command.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.8.3.2
 */
export type SendKeyResponse = TypeFromSchema<typeof KeypadInput.TlvSendKeyResponse>;

export namespace KeypadInputInterface {
    export interface Base {
        /**
         * Upon receipt, this shall process a keycode as input to the media device.
         *
         * If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
         * consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within
         * 200ms, then the endpoint will consider the last key press to be a release.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.8.3.1
         */
        sendKey(request: SendKeyRequest): MaybePromise<SendKeyResponse>;
    }
}

export type KeypadInputInterface = { components: [{ flags: {}, methods: KeypadInputInterface.Base }] };
