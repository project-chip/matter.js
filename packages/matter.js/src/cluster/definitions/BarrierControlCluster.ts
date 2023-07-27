/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    Attribute,
    OptionalWritableAttribute,
    Command,
    TlvNoResponse
} from "../../cluster/Cluster.js";
import { TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace BarrierControl {
    /**
     * Input to the BarrierControl barrierControlGoToPercent command
     */
    export const TlvBarrierControlGoToPercentRequest = TlvObject({ percentOpen: TlvField(0, TlvUInt8) });

    /**
     * Barrier Control
     *
     * This cluster provides control of a barrier (garage door).
     */
    export const Cluster = CreateCluster({
        id: 0x103,
        name: "BarrierControl",
        revision: 1,

        attributes: {
            barrierMovingState: Attribute(0x1, TlvUInt8),
            barrierSafetyStatus: Attribute(0x2, TlvUInt16),
            barrierCapabilities: Attribute(0x3, TlvUInt8),
            barrierOpenEvents: OptionalWritableAttribute(0x4, TlvUInt16.bound({ max: 65534 }), { default: 0 }),
            barrierCloseEvents: OptionalWritableAttribute(0x5, TlvUInt16.bound({ max: 65534 }), { default: 0 }),
            barrierCommandOpenEvents: OptionalWritableAttribute(0x6, TlvUInt16.bound({ max: 65534 }), { default: 0 }),
            barrierCommandCloseEvents: OptionalWritableAttribute(0x7, TlvUInt16.bound({ max: 65534 }), { default: 0 }),
            barrierOpenPeriod: OptionalWritableAttribute(0x8, TlvUInt16.bound({ max: 65534 })),
            barrierClosePeriod: OptionalWritableAttribute(0x9, TlvUInt16.bound({ max: 65534 })),
            barrierPosition: Attribute(0xa, TlvUInt8)
        },

        commands: {
            barrierControlGoToPercent: Command(0x0, TlvBarrierControlGoToPercentRequest, 0x0, TlvNoResponse),
            barrierControlStop: Command(0x1, TlvNoArguments, 0x1, TlvNoResponse)
        }
    });
}

export type BarrierControlCluster = typeof BarrierControl.Cluster;
export const BarrierControlCluster = BarrierControl.Cluster;
