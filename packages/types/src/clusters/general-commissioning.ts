/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { WritableAttribute, FixedAttribute, Attribute, Command } from "../cluster/Cluster.js";
import { TlvUInt64, TlvUInt16, TlvEnum } from "../tlv/TlvNumber.js";
import { AccessLevel } from "#model";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace GeneralCommissioning {
    /**
     * This structure provides some constant values that may be of use to all commissioners.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.4.3
     */
    export const TlvBasicCommissioningInfo = TlvObject({
        /**
         * This field shall contain a conservative initial duration (in seconds) to set in the FailSafe for the
         * commissioning flow to complete successfully. This may vary depending on the speed or sleepiness of the
         * Commissionee. This value, if used in the ArmFailSafe command’s ExpiryLengthSeconds field SHOULD allow a
         * Commissioner to proceed with a nominal commissioning without having to-rearm the fail-safe, with some margin.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.4.3.1
         */
        failSafeExpiryLengthSeconds: TlvField(0, TlvUInt16),

        /**
         * This field shall contain a conservative value in seconds denoting the maximum total duration for which a
         * fail safe timer can be re-armed. See Section 11.10.6.2.1, “Fail Safe Context”.
         *
         * The value of this field shall be greater than or equal to the FailSafeExpiryLengthSeconds. Absent additional
         * guidelines, it is recommended that the value of this field be aligned with the initial Announcement Duration
         * and default to 900 seconds.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.4.3.2
         */
        maxCumulativeFailsafeSeconds: TlvField(1, TlvUInt16)
    });

    /**
     * This structure provides some constant values that may be of use to all commissioners.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.4.3
     */
    export interface BasicCommissioningInfo extends TypeFromSchema<typeof TlvBasicCommissioningInfo> {}

    /**
     * This enumeration is used by the RegulatoryConfig and LocationCapability attributes to indicate possible radio
     * usage.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.4.2
     */
    export enum RegulatoryLocationType {
        /**
         * Indoor only
         */
        Indoor = 0,

        /**
         * Outdoor only
         */
        Outdoor = 1,

        /**
         * Indoor/Outdoor
         */
        IndoorOutdoor = 2
    }

    /**
     * Input to the GeneralCommissioning armFailSafe command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.2
     */
    export const TlvArmFailSafeRequest = TlvObject({
        expiryLengthSeconds: TlvField(0, TlvUInt16),
        breadcrumb: TlvField(1, TlvUInt64)
    });

    /**
     * Input to the GeneralCommissioning armFailSafe command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.2
     */
    export interface ArmFailSafeRequest extends TypeFromSchema<typeof TlvArmFailSafeRequest> {}

    /**
     * This enumeration is used by several response commands in this cluster to indicate particular errors.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.4.1
     */
    export enum CommissioningError {
        /**
         * No error
         */
        Ok = 0,

        /**
         * Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not
         * have proper configuration.
         */
        ValueOutsideRange = 1,

        /**
         * Executed CommissioningComplete outside CASE session.
         */
        InvalidAuthentication = 2,

        /**
         * Executed CommissioningComplete when there was no active Fail-Safe context.
         */
        NoFailSafe = 3,

        /**
         * Attempting to arm fail- safe or execute CommissioningComplete from a fabric different than the one
         * associated with the current fail- safe context.
         */
        BusyWithOtherAdmin = 4
    }

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.3
     */
    export const TlvArmFailSafeResponse = TlvObject({
        /**
         * This field shall contain the result of the operation, based on the behavior specified in the functional
         * description of the ArmFailSafe command.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.3.1
         */
        errorCode: TlvField(0, TlvEnum<CommissioningError>()),

        /**
         * See Section 11.10.6.1, “Common fields in General Commissioning cluster responses”.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.3.2
         */
        debugText: TlvField(1, TlvString.bound({ maxLength: 128 }))
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.3
     */
    export interface ArmFailSafeResponse extends TypeFromSchema<typeof TlvArmFailSafeResponse> {}

    /**
     * Input to the GeneralCommissioning setRegulatoryConfig command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.4
     */
    export const TlvSetRegulatoryConfigRequest = TlvObject({
        newRegulatoryConfig: TlvField(0, TlvEnum<RegulatoryLocationType>()),
        countryCode: TlvField(1, TlvString.bound({ length: 2 })),
        breadcrumb: TlvField(2, TlvUInt64)
    });

    /**
     * Input to the GeneralCommissioning setRegulatoryConfig command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.4
     */
    export interface SetRegulatoryConfigRequest extends TypeFromSchema<typeof TlvSetRegulatoryConfigRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.5
     */
    export const TlvSetRegulatoryConfigResponse = TlvObject({
        /**
         * This field shall contain the result of the operation, based on the behavior specified in the functional
         * description of the SetRegulatoryConfig command.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.5.1
         */
        errorCode: TlvField(0, TlvEnum<CommissioningError>()),

        /**
         * See Section 11.10.6.1, “Common fields in General Commissioning cluster responses”.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.5.2
         */
        debugText: TlvField(1, TlvString)
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.5
     */
    export interface SetRegulatoryConfigResponse extends TypeFromSchema<typeof TlvSetRegulatoryConfigResponse> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.7
     */
    export const TlvCommissioningCompleteResponse = TlvObject({
        /**
         * This field shall contain the result of the operation, based on the behavior specified in the functional
         * description of the CommissioningComplete command.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.7.1
         */
        errorCode: TlvField(0, TlvEnum<CommissioningError>()),

        /**
         * See Section 11.10.6.1, “Common fields in General Commissioning cluster responses”.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.10.6.7.2
         */
        debugText: TlvField(1, TlvString)
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.10.6.7
     */
    export interface CommissioningCompleteResponse extends TypeFromSchema<typeof TlvCommissioningCompleteResponse> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x30,
        name: "GeneralCommissioning",
        revision: 1,

        attributes: {
            /**
             * This attribute allows for the storage of a client-provided small payload which Administrators and
             * Commissioners may write and then subsequently read, to keep track of their own progress. This may be
             * used by the Commissioner to avoid repeating already-executed actions upon re-establishing a
             * commissioning link after an error.
             *
             * On start/restart of the server, such as when a device is power-cycled, this attribute shall be reset to
             * zero.
             *
             * Some commands related to commissioning also have a side-effect of updating or resetting this attribute
             * and this is specified in their respective functional descriptions.
             *
             * The format of the value within this attribute is unspecified and its value is not otherwise used by the
             * functioning of any cluster, other than being set as a side-effect of commands where this behavior is
             * described.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.5.1
             */
            breadcrumb: WritableAttribute(0x0, TlvUInt64, { default: 0, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute shall describe critical parameters needed at the beginning of commissioning flow. See
             * BasicCommissioningInfo for more information.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.5.2
             */
            basicCommissioningInfo: FixedAttribute(0x1, TlvBasicCommissioningInfo),

            /**
             * Indicates the regulatory configuration for the product.
             *
             * Note that the country code is part of Basic Information Cluster and therefore NOT listed on the
             * RegulatoryConfig attribute.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.5.3
             */
            regulatoryConfig: Attribute(0x2, TlvEnum<RegulatoryLocationType>()),

            /**
             * LocationCapability is statically set by the manufacturer and indicates if this Node needs to be told an
             * exact RegulatoryLocation. For example a Node which is "Indoor Only" would not be certified for outdoor
             * use at all, and thus there is no need for a commissioner to set or ask the user about whether the device
             * will be used inside or outside. However a device which states its capability is "Indoor/Outdoor" means
             * it would like clarification if possible.
             *
             * For Nodes without radio network interfaces (e.g. Ethernet-only devices), the value IndoorOutdoor shall
             * always be used.
             *
             * The default value of the RegulatoryConfig attribute is the value of LocationCapability attribute. This
             * means devices always have a safe default value, and Commissioners which choose to implement smarter
             * handling can.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.5.4
             */
            locationCapability: FixedAttribute(
                0x3,
                TlvEnum<RegulatoryLocationType>(),
                { default: RegulatoryLocationType.IndoorOutdoor }
            ),

            /**
             * Indicates whether this device supports "concurrent connection flow" commissioning mode (see Section 5.5,
             * “Commissioning Flows”). If false, the device only supports "non-concurrent connection flow" mode.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.5.5
             */
            supportsConcurrentConnection: FixedAttribute(0x4, TlvBoolean, { default: true })
        },

        commands: {
            /**
             * Success or failure of this command shall be communicated by the ArmFailSafeResponse command, unless some
             * data model validations caused a failure status code to be issued during the processing of the command.
             *
             * If the fail-safe timer is not currently armed, the commissioning window is open, and the command was
             * received over a CASE session, the command shall leave the current fail-safe state unchanged and
             * immediately respond with an ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin.
             * This is done to allow commissioners, which use PASE connections, the opportunity to use the failsafe
             * during the relatively short commissioning window.
             *
             * Otherwise, the command shall arm or re-arm the "fail-safe timer" with an expiry time set for a duration
             * of ExpiryLengthSeconds, or disarm it, depending on the situation:
             *
             *   • If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric
             *     matches the Fabric currently associated with the fail-safe context, then the fail-safe timer
             *
             * shall be immediately expired (see further below for side-effects of expiration).
             *
             *   • If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation
             *     shall lead to a success response with no side-effects against the fail-safe context.
             *
             *   • If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the
             *     fail-safe timer shall be armed for that duration.
             *
             *   • If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing
             *     Fabric matches the fail-safe context’s associated Fabric, then the fail-safe timer shall be re-
             *     armed to expire in ExpiryLengthSeconds.
             *
             *   • Otherwise, the command shall leave the current fail-safe state unchanged and immediately respond
             *     with ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin, indicating a likely
             *     conflict between commissioners.
             *
             * The value of the Breadcrumb field shall be written to the Breadcrumb Attribute on successful execution
             * of the command.
             *
             * If the receiver restarts unexpectedly (e.g., power interruption, software crash, or other reset) the
             * receiver shall behave as if the fail-safe timer expired and perform the sequence of clean-up steps
             * listed below.
             *
             * On successful execution of the command, the ErrorCode field of the ArmFailSafeResponse shall be set to
             * OK.
             *
             * ### Fail Safe Context
             *
             * When first arming the fail-safe timer, a 'Fail Safe Context' shall be created on the receiver, to track
             * the following state information while the fail-safe is armed:
             *
             *   • The fail-safe timer duration.
             *
             *   • The state of all Network Commissioning Networks attribute configurations, to allow recovery of
             *     connectivity after Fail-Safe expiry.
             *
             *   • Whether an AddNOC command or UpdateNOC command has taken place.
             *
             *   • A Fabric Index for the fabric-scoping of the context, starting at the accessing fabric index for the
             *     ArmFailSafe command, and updated with the Fabric Index associated with an AddNOC command or an
             *     UpdateNOC command being invoked successfully during the ongoing Fail-Safe timer period.
             *
             *   • The operational credentials associated with any Fabric whose configuration is affected by the
             *     UpdateNOC command.
             *
             *   • Optionally: the previous state of non-fabric-scoped data that is mutated during the fail-safe period.
             *
             * Note the following to assist in understanding the above state-keeping, which summarizes other normative
             * requirements in the respective sections:
             *
             *   • The AddNOC command can only be invoked once per contiguous non-expiring fail-safe timer period, and
             *     only if no UpdateNOC command was previously processed within the same fail-safe timer period.
             *
             *   • The UpdateNOC command can only be invoked once per contiguous non-expiring fail-safe timer period,
             *     can only be invoked over a CASE session, and only if no AddNOC command was previously processed in
             *     the same fail-safe timer period.
             *
             * On creation of the Fail Safe Context a second timer shall be created to expire at
             * MaxCumulativeFailsafeSeconds as specified in BasicCommissioningInfo. This Cumulative Fail Safe Context
             * timer (CFSC timer) serves to limit the lifetime of any particular Fail Safe Context; it shall NOT be
             * extended or modified on subsequent invocations of ArmFailSafe associated with this Fail Safe Context.
             * Upon expiry of the CFSC timer, the receiver shall execute cleanup behavior equivalent to that of
             * fail-safe timer expiration as detailed in Section 11.10.6.2.2, “Behavior on expiry of Fail-Safe timer”.
             * Termination of the session prior to the expiration of that timer for any reason (including a successful
             * end of commissioning or an expiry of a fail-safe timer) shall also delete the CFSC timer.
             *
             * ### Behavior on expiry of Fail-Safe timer
             *
             * If the fail-safe timer expires before the CommissioningComplete command is successfully invoked, the
             * following sequence of clean-up steps shall be executed, in order, by the receiver:
             *
             *   1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the
             *       Server.
             *
             *   2. Revoke the temporary administrative privileges granted to any open PASE session (see Section
             *       6.6.2.8, “Bootstrapping of the Access Control Cluster”) at the Server.
             *
             *   3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions
             *       associated with the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section
             *       11.10.6.2, “ArmFailSafe Command”) by clearing any associated Secure Session Context at the Server.
             *
             *   4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the
             *       Fail-Safe being armed.
             *
             *   5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair,
             *       NOC and ICAC for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric
             *       Index that was the subject of the UpdateNOC command.
             *
             *   6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the
             *       RemoveFabric command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index
             *       that was the subject of the AddNOC command. This shall remove all associations to that Fabric
             *       including all fabric-scoped data, and may possibly factory-reset the device depending on current
             *       device state. This shall only apply to Fabrics added during the fail-safe period as the result of
             *       the AddNOC command.
             *
             *   7. If the CSRRequest command had been successfully invoked, but no AddNOC or UpdateNOC command had
             *       been successfully invoked, then the new operational key pair temporarily generated for the
             *       purposes of NOC addition or update (see Node Operational CSR Procedure) shall be removed as it is
             *       no longer needed.
             *
             *   8. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced
             *       by any entry in the Fabrics attribute.
             *
             *   9. Reset the Breadcrumb attribute to zero.
             *
             *   10. Optionally: if no factory-reset resulted from the previous steps, it is recommended that the
             *
             * Node rollback the state of all non fabric-scoped data present in the Fail-Safe context.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.6.2
             */
            armFailSafe: Command(
                0x0,
                TlvArmFailSafeRequest,
                0x1,
                TlvArmFailSafeResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall add or update the regulatory configuration in the RegulatoryConfig Attribute to the value
             * provided in the NewRegulatoryConfig field.
             *
             * Success or failure of this command shall be communicated by the SetRegulatoryConfigResponse command,
             * unless some data model validations caused a failure status code to be issued during the processing of
             * the command.
             *
             * The CountryCode field shall conforms to ISO 3166-1 alpha-2 and shall be used to set the Location
             * attribute reflected by the Basic Information Cluster.
             *
             * If the server limits some of the values (e.g. locked to a particular country, with no regulatory data
             * for others), then setting regulatory information outside a valid country or location shall still set the
             * Location attribute reflected by the Basic Information Cluster configuration, but the
             * SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange error.
             *
             * If the LocationCapability attribute is not Indoor/Outdoor and the NewRegulatoryConfig value received
             * does not match either the Indoor or Outdoor fixed value in LocationCapability, then the
             * SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange error and
             * the RegulatoryConfig attribute and associated internal radio configuration shall remain unchanged.
             *
             * If the LocationCapability attribute is set to Indoor/Outdoor, then the RegulatoryConfig attribute shall
             * be set to match the NewRegulatoryConfig field.
             *
             * On successful execution of the command, the ErrorCode field of the SetRegulatoryConfigResponse shall be
             * set to OK.
             *
             * The Breadcrumb field shall be used to atomically set the Breadcrumb attribute on success of this
             * command, when SetRegulatoryConfigResponse has the ErrorCode field set to OK. If the command fails, the
             * Breadcrumb attribute shall be left unchanged.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.6.4
             */
            setRegulatoryConfig: Command(
                0x2,
                TlvSetRegulatoryConfigRequest,
                0x3,
                TlvSetRegulatoryConfigResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command has no data.
             *
             * Success or failure of this command shall be communicated by the CommissioningCompleteResponse command,
             * unless some data model validations caused a failure status code to be issued during the processing of
             * the command.
             *
             * This command signals the Server that the Commissioner or Administrator has successfully completed all
             * steps needed during the Fail-Safe period, such as commissioning (see Section 5.5, “Commissioning Flows”)
             * or other Administrator operations requiring usage of the Fail Safe timer. It ensures that the Server is
             * configured in a state such that it still has all necessary elements to be fully operable within a
             * Fabric, such as ACL entries (see Access Control Cluster) and operational credentials (see Section 6.4,
             * “Node Operational Credentials Specification”), and that the Node is reach
             *
             * able using CASE (see Section 4.14.2, “Certificate Authenticated Session Establishment (CASE)”) over an
             * operational network.
             *
             * An ErrorCode of NoFailSafe shall be responded to the invoker if the CommissioningComplete command was
             * received when no Fail-Safe context exists.
             *
             * This command is fabric-scoped, so cannot be issued over a session that does not have an associated
             * fabric, i.e. over PASE session prior to an AddNOC command. In addition, this command is only permitted
             * over CASE and must be issued by a node associated with the ongoing Fail-Safe context. An ErrorCode of
             * InvalidAuthentication shall be responded to the invoker if the CommissioningComplete command was
             * received outside a CASE session (e.g., over Group messaging, or PASE session after AddNOC), or if the
             * accessing fabric is not the one associated with the ongoing Fail-Safe context.
             *
             * This command shall only result in success with an ErrorCode value of OK in the
             * CommissioningCompleteResponse if received over a CASE session and the accessing fabric index matches the
             * Fabric Index associated with the current Fail-Safe context. In other words:
             *
             *   • If no AddNOC command had been successfully invoked, the CommissioningComplete command must originate
             *     from the Fabric that initiated the Fail-Safe context.
             *
             *   • After an AddNOC command has been successfully invoked, the CommissioningComplete command must
             *     originate from the Fabric which was joined through the execution of that command, which updated the
             *     Fail-Safe context’s Fabric Index.
             *
             * On successful execution of the CommissioningComplete command, where the CommissioningCompleteResponse
             * has an ErrorCode of OK, the following actions shall be undertaken on the Server:
             *
             *   1. The Fail-Safe timer associated with the current Fail-Safe context shall be disarmed.
             *
             *   2. The commissioning window at the Server shall be closed.
             *
             *   3. Any temporary administrative privileges automatically granted to any open PASE session shall be
             *      revoked (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).
             *
             *   4. The Secure Session Context of any PASE session still established at the Server shall be cleared.
             *
             *   5. The Breadcrumb attribute shall be reset to zero.
             *
             * After receipt of a CommissioningCompleteResponse with an ErrorCode value of OK, a client cannot expect
             * any previously established PASE session to still be usable, due to the server having cleared such
             * sessions.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.10.6.6
             */
            commissioningComplete: Command(
                0x4,
                TlvNoArguments,
                0x5,
                TlvCommissioningCompleteResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * This cluster is used to manage basic commissioning lifecycle.
     *
     * This cluster also represents responsibilities related to commissioning that don’t well fit other commissioning
     * clusters, like Section 11.9, “Network Commissioning Cluster”. It also hosts functionalities those other clusters
     * may depend on.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.10
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type GeneralCommissioningCluster = GeneralCommissioning.Cluster;
export const GeneralCommissioningCluster = GeneralCommissioning.Cluster;
ClusterRegistry.register(GeneralCommissioning.Complete);
