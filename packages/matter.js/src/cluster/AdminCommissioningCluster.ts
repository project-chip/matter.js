/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvFabricIndex } from "../datatype/FabricIndex.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { Cluster, Command, TlvNoResponse, Attribute, OptionalCommand } from "./Cluster.js";
import { CRYPTO_GROUP_SIZE_BYTES, CRYPTO_PUBLIC_KEY_SIZE_BYTES } from "../crypto/CryptoConstants.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt16, TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvByteString } from "../tlv/TlvString.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";

const PAKE_PASSCODE_VERIFIER_LENGTH = CRYPTO_GROUP_SIZE_BYTES + CRYPTO_PUBLIC_KEY_SIZE_BYTES;

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.18.9 */
export const enum AdminCommissioningStatusCode {
    /** Could not be completed because another commissioning is in progress. */
    Busy = 2,

    /** Provided PAKE parameters were incorrectly formatted or otherwise invalid. */
    PAKEParameterError = 3,

    /** No commissioning window was currently open */
    WindowNotOpen = 4,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.18.6.1 */
export const enum CommissioningWindowStatus {
    /** Commissioning window not open */
    WindowNotOpen = 0,

    /** An Enhanced Commissioning Method window is open */
    EnhancedWindowOpen = 1,

    /** A Basic Commissioning Method window is open */
    BasicWindowOpen = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.18.8.1 */
const TlvOpenCommissioningWindowRequest = TlvObject({
    /** Time in seconds during which commissioning session establishment is allowed by the Node. */
    commissioningTimeout: TlvField(0, TlvUInt16),

    /** Ephemeral PAKE passcode verifier computed by the existing Administrator to be used for this commissioning. */
    pakePasscodeVerifier: TlvField(1, TlvByteString.bound({ length: PAKE_PASSCODE_VERIFIER_LENGTH })),

    /** Long discriminator for DNS-SD advertisement for discovery by the new Administrator. */
    discriminator: TlvField(2, TlvUInt16.bound({ max: 4095 })),

    /** PAKE iteration count associated with the ephemeral PAKE passcode verifier to be used for this commissioning. */
    iterations: TlvField(3, TlvUInt32.bound({ min: 1000, max: 100000 })),

    /** PAKE Salt associated with the ephemeral PAKE passcode verifier to be used for this commissioning. */
    salt: TlvField(4, TlvByteString.bound({ minLength: 16, maxLength: 32 })),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.18.8.2 */
const TlvOpenBasicCommissioningWindowRequest = TlvObject({
    /** Time in seconds during which commissioning session establishment is allowed by the Node. */
    commissioningTimeout: TlvField(0, TlvUInt16),
});

/**
 * This cluster is used to trigger a Node to allow a new Administrator to commission it.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.18
 */
export const AdminCommissioningCluster = Cluster({
    id: 0x3c,
    name: "AdministratorCommissioning",
    revision: 1,
    features: {
        /** Node supports Basic Commissioning Method. */
        basic: BitFlag(0),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.18.7 */
    attributes: {
        /** Indicates whether a new Commissioning window has been opened by an Administrator. */
        windowStatus: Attribute(0, TlvEnum<CommissioningWindowStatus>()),

        /** If a window is opened, indicates the FabricIndex of the Administrator fabric that opened the window. */
        adminFabricIndex: Attribute(1, TlvNullable(TlvFabricIndex)),

        /** If a window is opened, indicates the vendorId of the Administrator fabric that opened the window. */
        adminVendorId: Attribute(2, TlvNullable(TlvVendorId)),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.18.8 */
    commands: { // all Commands: mustUseTimedInvoke: "true"
        /** Used to instruct a Node to go into commissioning mode using enhanced commissioning method. */
        openCommissioningWindow: Command(0, TlvOpenCommissioningWindowRequest, 0, TlvNoResponse),

        /** Used to instruct a Node to go into commissioning mode using basic commissioning method, if the node supports it. */
        openBasicCommissioningWindow: OptionalCommand(1, TlvOpenBasicCommissioningWindowRequest, 1, TlvNoResponse),

        /** Used to instruct a Node to revoke any active Open Commissioning Window or Open Basic Commissioning Window command. */
        revokeCommissioning: Command(2, TlvNoArguments, 2, TlvNoResponse),
    },
});
