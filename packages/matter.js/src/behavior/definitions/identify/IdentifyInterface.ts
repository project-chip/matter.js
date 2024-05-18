/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { Identify } from "../../../cluster/definitions/IdentifyCluster.js";

/**
 * This command starts or stops the receiving device identifying itself.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 1.2.6.1
 */
export type IdentifyRequest = TypeFromSchema<typeof Identify.TlvIdentifyRequest>;

/**
 * This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an
 * implementation to provide visual feedback to the user under certain circumstances such as a color light turning
 * green when it has successfully connected to a network. The use of this command and the effects themselves are
 * entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not
 * replace the identify mechanism used during commissioning.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 1.2.6.3
 */
export type TriggerEffectRequest = TypeFromSchema<typeof Identify.TlvTriggerEffectRequest>;

export namespace IdentifyInterface {
    export interface Base {
        /**
         * This command starts or stops the receiving device identifying itself.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 1.2.6.1
         */
        identify(request: IdentifyRequest): MaybePromise;

        /**
         * This command allows the support of feedback to the user, such as a certain light effect. It is used to allow
         * an implementation to provide visual feedback to the user under certain circumstances such as a color light
         * turning green when it has successfully connected to a network. The use of this command and the effects
         * themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the
         * same as and does not replace the identify mechanism used during commissioning.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 1.2.6.3
         */
        triggerEffect(request: TriggerEffectRequest): MaybePromise;
    }
}

export type IdentifyInterface = {
    components: [
        { flags: {}, methods: IdentifyInterface.Base }
    ]
};
