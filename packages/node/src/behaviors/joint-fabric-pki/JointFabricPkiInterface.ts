/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { JointFabricPki } from "#clusters/joint-fabric-pki";

export namespace JointFabricPkiInterface {
    export interface Base {
        /**
         * This command shall be generated and executed during the Joint Commissioning Method steps and subsequently
         * respond in the form of an ICACSRResponse command.
         *
         * Check ICA Cross Signing for details about the generation and contents of the ICACSR.
         *
         * @see {@link MatterSpecification.v141.Core} § 11.25.5.1
         */
        icacsrRequest(request: JointFabricPki.IcacsrRequest): MaybePromise<JointFabricPki.IcacsrResponse>;

        /**
         * @see {@link MatterSpecification.v141.Core} § 11.25.5
         */
        transferAnchorRequest(): MaybePromise;

        /**
         * @see {@link MatterSpecification.v141.Core} § 11.25.5
         */
        transferAnchorComplete(): MaybePromise;
    }
}

export type JointFabricPkiInterface = { components: [{ flags: {}, methods: JointFabricPkiInterface.Base }] };
