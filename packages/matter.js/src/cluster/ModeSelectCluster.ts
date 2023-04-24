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
    value: TlvField(0x0, TlvUInt16), // enum16 in Standard, but values not defined "standard" or "Manufacturer sepcific"
    mfgCode: TlvField(0x1, TlvNullable(TlvUInt16)), // type in standard is "vendor-id" ??
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.8.1  */
const ModeOption = TlvObject({
    label: TlvField(0x0, TlvString64max),
    mode: TlvField(0x1, TlvUInt8),
    semanticTags: TlvField(0x2, TlvArray(SemanticTag, { maxLength: 64 })),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.6.1 */
const ChangeToModedRequest = TlvObject({
    newMode: TlvField(0x0, TlvUInt8),
});

/**
 * This cluster provides an interface for controlling a characteristic of a device that can be set to one
 * of several predefined values. For example, the light pattern of a disco ball, the mode of a massage
 * chair, or the wash cycle of a laundry machine.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8
 */
export const ModeSelectCluster = Cluster({
    id: 0x0050,
    name: "ModeSelect",
    revision: 1,
    features: {
        onOff: BitFlag(0), // Dependency with an On/Off cluster on same endpoint
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.5 */
    attributes: {
        /** describes the purpose of the server, in readable text */
        description: Attribute(0x0, TlvString64max),

        /** 
          * Indicates a single standard namespace for any standard semantic tag value supported 
          * Each standard namespace and corresponding values and value meanings SHALL be defined in another document
          * http://www.dial-multiscreen.org/dial-registry/namespace-database
          */
        standardNamespace: Attribute(0x1, TlvNullable(TlvInt16)),

        /** Supported modes that may be selected for the CurrentMode attribute */
        supportedModes: Attribute(0x2, TlvArray(ModeOption, { maxLength: 256 })),

        /** Represents the current mode */
        currentMode: OptionalAttribute(0x3, TlvUInt8),

        /** Indicates the desired startup mode */
        startUpMode: OptionalAttribute(0x4, TlvNullable(TlvInt16)),

        /**  
         * Indicates the value of CurrentMode that depends on the state of the On/Off cluster on the same endpoint 
         * See @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.6
         */
        onMode: OptionalAttribute(0x5, TlvNullable(TlvUInt8)), // TODO - Mandatory if OnOff flag set in features
    },
    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 1.8.5.6 */
    commands: {
        /** set the CurrentMode attribute to NewMode  */
        changeToMode: Command(0x0, ChangeToModedRequest, 0x0, TlvNoResponse),
    }
});
