/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster, Command, TlvNoResponse } from "./Cluster.js";
import { TlvInt16, TlvUInt16, TlvUInt8 } from "../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvString64max } from "../tlv/TlvString.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvArray } from "../tlv/TlvArray.js";

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8. */
export const SemanticTag = TlvObject({
    Value: TlvField(0x0, TlvUInt16), // enum16
    MfgCode: TlvField(0x1, TlvUInt16), // vendor-id
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.8.1  */
const ModeOption = TlvObject({
    Label: TlvField(0x0, TlvString64max),
    Mode: TlvField(0x1, TlvUInt8),
    SemanticTags: TlvField(0x2, TlvArray(SemanticTag, { maxLength: 64 })),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.6.1 */
const ChangeToModedRequest = TlvObject({
    NewMode: TlvField(0x0, TlvUInt8),
});

/**
 * This cluster provides an interface for controlling a characteristic of a device that can be set to one
 * of several predefined values. For example, the light pattern of a disco ball, the mode of a massage
 * chair, or the wash cycle of a laundry machine.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3
 */
export const ModeSelectCluster = Cluster({
    id: 0x0050,
    name: "ModeSelect",
    revision: 1,
    features: {
        OnOff: BitFlag(0), // Dependency with the On/Off cluster
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.5 */
    attributes: {
        /** describes the purpose of the server, in readable text */
        description: Attribute(0x0, TlvString64max),

        /** Indicates a single standard namespace for any standard semantic tag value supported */
        StandardNamespace: Attribute(0x1, TlvNullable(TlvInt16)), // standard-nameapace enum - defined externally - http://www.dial-multiscreen.org/dial-registry/namespace-database

        /** Supported modes that may be selected for the CurrentMode attribute */
        SupportedModes: Attribute(0x2, TlvArray(ModeOption, { maxLength: 256 })),

        /** Represents the current mode */
        CurrentMode: OptionalAttribute(0x3, TlvUInt8),

        /** Indicates the desired startup mode */
        StartUpMode: OptionalAttribute(0x4, TlvNullable(TlvInt16)),

        /**  
         * Indicates the value of CurrentMode that depends on the state of the On/Off cluster on the same endpoint 
         * See @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.6
         */
        OnMode: OptionalAttribute(0x5, TlvNullable(TlvUInt8)), // TODO - Mandatory if OnOff flag set in features
    },
    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.5.6 */
    commands: {
        /** set the CurrentMode attribute to NewMode  */
        ChangeToMode: Command(0x0, ChangeToModedRequest, 0x0, TlvNoResponse),
    }
});
