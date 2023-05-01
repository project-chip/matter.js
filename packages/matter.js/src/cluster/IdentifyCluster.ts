/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { Attribute, Cluster, Command, OptionalCommand, TlvNoResponse, WritableAttribute } from "./Cluster.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt16 } from "../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.5.2 */
export const enum IdentifyType {
    None = 0,
    VisibleLight = 1,
    VisibleLED = 2,
    AudibleBeep = 3,
    Display = 4,
    Actuator = 5,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6.3.1 */
export const enum IdentifyEffectIdentifier {
    Blink = 0,
    Breathe = 1,
    Okay = 2,
    ChannelChange = 0x0b,
    FinishEffect = 0xfe,
    StopEffect = 0xff,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6.3.2 */
export const enum EffectVariant {
    Default = 0,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6.1 */
const TlvIdentifyRequest = TlvObject({
    identifyTime: TlvField(0, TlvUInt16),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6.3 */
const TlvTriggerEffectRequest = TlvObject({
    effectIdentifier: TlvField(0, TlvEnum<IdentifyEffectIdentifier>()),
    effectVariant: TlvField(1, TlvEnum<EffectVariant>()),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6.4 */
/*
const TlvIdentifyQueryResponse = TlvObject({
    timeout: TlvField(0, TlvUInt16),
});
*/

/**
 * Attributes and commands for putting a device into Identification mode (e.g. flashing a light).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2
 */
export const IdentifyCluster = Cluster({
    id: 0x03,
    name: "Identify",
    revision: 4,
    features: {
        /** Replies to multicast / groupcast queries if the identification state is active. */
        query: BitFlag(0),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.5 */
    attributes: {
        /** Specifies the remaining length of time, in seconds, that the endpoint will continue to identify itself. */
        identifyTime: WritableAttribute(0, TlvUInt16, { default: 0 }), /* unit: seconds */

        /** Specifies how the identification state is presented to the user. */
        identifyType: Attribute(1, TlvEnum<IdentifyType>(), { default: 0 }),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.2.6 */
    commands: {
        /** Starts or stops the receiving device identifying itself. */
        identify: Command(0, TlvIdentifyRequest, 0, TlvNoResponse),

        /**
         * Allows the sending device to request the target or targets to respond if they are currently identifying themselves.
         *
         * TODO: Add when adding support for the Query Feature
         */
        //identifyQuery: Command(1, NoArgumentsT, 0, TlvIdentifyQueryResponse),

        /** Allows the support of feedback to the user, such as a certain light effect when identifying. */
        triggerEffect: OptionalCommand(0x40, TlvTriggerEffectRequest, 0, TlvNoResponse),
    },
});
