/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel, Attribute, Cluster, Command, WritableAttribute } from "./Cluster.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt16, TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvString } from "../tlv/TlvString.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";

/**
 * This enumeration is used by the RegulatoryConfig and LocationCapability attributes to indicate possible radio usage.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.9.5.3
 */
export const enum RegulatoryLocationType {
    /** Indoor only */
    Indoor = 0,

    /** Outdoor only */
    Outdoor = 1,

    /** Indoor/Outdoor */
    IndoorOutdoor = 2,
}

/**
 * This enumeration is used by several response commands in this cluster to indicate particular errors.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.9.5.1
 */
export const enum CommissioningError {
    /** No error. */
    Ok = 0,

    /** Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not have proper configuration. */
    ValueOutsideRange = 1,

    /** Executed CommissioningComplete outside CASE session. */
    InvalidAuthentication = 2,

    /** Executed CommissioningComplete when there was no active Fail-Safe context. */
    NoFailSafe = 3,

    /** Attempting to arm fail-safe or execute CommissioningComplete from a fabric different than the one associated with the current fail-safe context. */
    BusyWithOtherAdmin = 4,
}

/**
 * This structure provides some constant values that MAY be of use to all commissioners.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.9.5.2
 */
const TlvBasicCommissioningInfo = TlvObject({
    /** Contains a conservative initial duration (in seconds) to set in the FailSafe for the commissioning flow to complete successfully. */
    failSafeExpiryLengthSeconds: TlvField(0, TlvUInt16),

    /** Contain a conservative value in seconds denoting the maximum total duration for which a fail-safe timer can be re-armed. */
    maxCumulativeFailsafeSeconds: TlvField(1, TlvUInt16),
});

/**
 * Used by the following commands as response payload:
 * ArmFailSafeResponse, @see {@link MatterCoreSpecificationV1_0} § 11.9.7.3
 * CommissioningCompleteResponse, @see {@link MatterCoreSpecificationV1_0} § 11.9.7.7
 * CommissioningCompleteResponse, @see {@link MatterCoreSpecificationV1_0} § 11.9.7.7
 */
const TlvCommissioningSuccessFailureResponse = TlvObject({
    /** Contain the result of the operation. */
    errorCode: TlvField(0, TlvEnum<CommissioningError>()),

    /** Should help developers in troubleshooting errors. The value MAY go into logs or crash reports, not User UIs. */
    debugText: TlvField(1, TlvString.bound({ maxLength: 128 })),
});
export type CommissioningSuccessFailureResponse = TypeFromSchema<typeof TlvCommissioningSuccessFailureResponse>;

/** @see {@link MatterCoreSpecificationV1_0} § 11.9.7.3. */
const TlvArmFailSafeRequest = TlvObject({
    /** Contains timeframe for fail-safe timer actions. */
    expiryLengthSeconds: TlvField(0, TlvUInt16), /* default: 900 */

    /** Value to atomically set the Breadcrumb attribute on success of this command. */
    breadcrumb: TlvField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.9.7.4 */
const TlvSetRegulatoryConfigRequest = TlvObject({
    /** Contains the new regulatory location to be set. */
    newRegulatoryConfig: TlvField(0, TlvEnum<RegulatoryLocationType>()),

    /** Contains a ISO 3166-1 alpha-2 country code*/
    countryCode: TlvField(1, TlvString.bound({ length: 2 })),

    /** Value to atomically set the Breadcrumb attribute on success of this command. */
    breadcrumb: TlvField(2, TlvUInt64),
});

/**
 * This cluster is used to manage global aspects of the Commissioning flow.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.9
 */
export const GeneralCommissioningCluster = Cluster({
    id: 0x30,
    name: "GeneralCommissioning",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 11.9.6 */
    attributes: {
        /** Allows for the storage of a client-provided small payload which Administrators and Commissioners MAY write
         * and then subsequently read, to keep track of their own progress.
         */
        breadcrumb: WritableAttribute(0, TlvUInt64, { default: BigInt(0), writeAcl: AccessLevel.Administer }),

        /** Describe critical parameters needed at the beginning of commissioning flow. */
        basicCommissioningInfo: Attribute(1, TlvBasicCommissioningInfo),

        /** Indicates the regulatory configuration for the product. */
        regulatoryConfig: Attribute(2, TlvEnum<RegulatoryLocationType>()), /* default: value of locationCapability */

        /** Indicates if this Node needs to be told an exact RegulatoryLocation. */
        locationCapability: Attribute(3, TlvEnum<RegulatoryLocationType>(), { default: RegulatoryLocationType.IndoorOutdoor }),

        /** Indicates whether this device supports "concurrent connection flow" commissioning mode */
        supportsConcurrentConnections: Attribute(4, TlvBoolean, { default: true }),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.9.7 */
    commands: {
        /** Arms the persistent fail-safe timer with an expiry time of now + ExpiryLengthSeconds using device clock. */
        armFailSafe: Command(0, TlvArmFailSafeRequest, 1, TlvCommissioningSuccessFailureResponse),

        /** Sets or Updates the regulatory configuration to be used during commissioning. */
        setRegulatoryConfig: Command(2, TlvSetRegulatoryConfigRequest, 3, TlvCommissioningSuccessFailureResponse),

        /**
         * Informs that all steps of Commissioning/Reconfiguration needed during the fail-safe period have been
         * completed.
         */
        commissioningComplete: Command(4, TlvNoArguments, 5, TlvCommissioningSuccessFailureResponse), /* fabricScoped: true */
    },
});
