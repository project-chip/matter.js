/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { MediaInput } from "../../../cluster/definitions/MediaInputCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
 */
export type SelectInputRequest = TypeFromSchema<typeof MediaInput.TlvSelectInputRequest>;

/**
 * Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name shall
 * appear in the device’s settings menus.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
 */
export type RenameInputRequest = TypeFromSchema<typeof MediaInput.TlvRenameInputRequest>;

export namespace MediaInputInterface {
    export interface Base {
        /**
         * Upon receipt, this shall change the media input on the device to the input at a specific index in the Input
         * List.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
         */
        selectInput(request: SelectInputRequest): MaybePromise;

        /**
         * Upon receipt, this shall display the active status of the input list on screen.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.2
         */
        showInputStatus(): MaybePromise;

        /**
         * Upon receipt, this shall hide the input list from the screen.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.3
         */
        hideInputStatus(): MaybePromise;
    }

    export interface NameUpdates {
        /**
         * Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input name
         * shall appear in the device’s settings menus.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
         */
        renameInput(request: RenameInputRequest): MaybePromise;
    }
}

export type MediaInputInterface = {
    components: [
        { flags: {}, methods: MediaInputInterface.Base },
        { flags: { nameUpdates: true }, methods: MediaInputInterface.NameUpdates }
    ]
};
