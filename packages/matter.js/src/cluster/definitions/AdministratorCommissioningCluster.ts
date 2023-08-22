/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, Command, TlvNoResponse, AccessLevel, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvFabricIndex } from "../../datatype/FabricIndex.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace AdministratorCommissioning {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.18.5.1
     */
    export const enum CommissioningWindowStatus {
        /**
         * Commissioning window not open
         */
        WindowNotOpen = 0,

        /**
         * An Enhanced Commissioning Method window is open
         */
        EnhancedWindowOpen = 1,

        /**
         * A Basic Commissioning Method window is open
         */
        BasicWindowOpen = 2
    }

    /**
     * Input to the AdministratorCommissioning openCommissioningWindow command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1
     */
    export const TlvOpenCommissioningWindowRequest = TlvObject({
        /**
         * This field shall specify the time in seconds during which commissioning session establishment is allowed by
         * the Node. This is known as Open Commissioning Window (OCW). This timeout value shall follow guidance as
         * specified in Announcement Duration. The CommissioningTimeout applies only to cessation of any announcements
         * and to accepting of new commissioning sessions; it does not apply to abortion of connections, i.e., a
         * commissioning session SHOULD NOT abort prematurely upon expiration of this timeout.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1.1
         */
        commissioningTimeout: TlvField(0, TlvUInt16),

        /**
         * This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, “Password-Authenticated Key
         * Exchange (PAKE)”) computed by the existing Administrator to be used for this commissioning. The field is
         * concatenation of two values (w0 || L) shall be (CRYPTO_GROUP_SIZE_BYTES +
         * CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in Crypto_PAKEValues_Responder. It shall be derived
         * from an ephemeral passcode (See PAKE). It shall be deleted by the Node at the end of commissioning or
         * expiration of OCW, and shall be deleted by the existing Administrator after sending it to the Node(s).
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1.2
         */
        pakePasscodeVerifier: TlvField(1, TlvByteString.bound({ length: 97 })),

        /**
         * This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see Commissioning
         * Discriminator) for discovery by the new Administrator. The new Administrator can find and filter DNS-SD
         * records by long discriminator to locate and initiate commissioning with the appropriate Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1.3
         */
        discriminator: TlvField(2, TlvUInt16.bound({ max: 4095 })),

        /**
         * This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE passcode
         * verifier to be used for this commissioning, which shall be sent by the Node to the new Administrator’s
         * software as response to the PBKDFParamRequest during PASE negotiation. The permitted range of values shall
         * match the range specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”, within the
         * definition of the Crypto_PBKDFParameterSet.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1.4
         */
        iterations: TlvField(3, TlvUInt32.bound({ min: 1000, max: 100000 })),

        /**
         * This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode verifier
         * to be used for this commissioning, which shall be sent by the Node to the new
         *
         * Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The constraints on
         * the value shall match those specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”,
         * within the definition of the Crypto_PBKDFParameterSet.
         *
         * When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as
         * described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
         * 11.18.8.1.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
         * mode and set its fast-polling interval to SLEEPY_ACTIVE_INTERVAL for at least the entire duration of the
         * CommissioningTimeout.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1.5
         */
        salt: TlvField(4, TlvByteString.bound({ minLength: 16, maxLength: 32 }))
    });

    /**
     * Input to the AdministratorCommissioning openBasicCommissioningWindow command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.2
     */
    export const TlvOpenBasicCommissioningWindowRequest = TlvObject({ commissioningTimeout: TlvField(0, TlvUInt16) });

    /**
     * These are optional features supported by AdministratorCommissioningCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18.4
     */
    export enum Feature {
        /**
         * Basic
         *
         * Node supports Basic Commissioning Method.
         */
        Basic = "Basic"
    }

    /**
     * These elements and properties are present in all AdministratorCommissioning clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x3c,
        name: "AdministratorCommissioning",
        revision: 1,

        features: {
            /**
             * Basic
             *
             * Node supports Basic Commissioning Method.
             */
            basic: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
             * using either the OCW command or the OBCW command.
             *
             * This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.
             *
             * Note that an initial commissioning window is not opened using either the OCW command or the OBCW
             * command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.1
             */
            windowStatus: Attribute(0x0, TlvEnum<CommissioningWindowStatus>()),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
             * FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
             * used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.
             *
             * If, during an open commissioning window, the fabric for the Administrator that opened the window is
             * removed, then this attribute shall be set to null.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.2
             */
            adminFabricIndex: Attribute(0x1, TlvNullable(TlvFabricIndex)),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
             * associated with the Fabric scoping of the Administrator that opened the window. This field shall match
             * the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
             * the window, at the time of window opening. If the fabric for the Administrator that opened the window is
             * removed from the node while the commissioning window is still open, this attribute shall NOT be updated.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.3
             */
            adminVendorId: Attribute(0x2, TlvNullable(TlvVendorId))
        },

        commands: {
            /**
             * This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
             * Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
             * accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.
             *
             * When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
             * passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
             * described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
             * completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
             * “Commissioning Flows”.
             *
             * The parameters for OpenCommissioningWindow command are as follows:
             *
             * A current Administrator may invoke this command to put a node in commissioning mode for the next
             * Administrator. On completion, the command shall return a cluster specific status code from the
             * enumeration below reflecting success or reasons for failure of the operation. The new Administrator
             * shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.
             *
             * If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
             * arise, this command shall fail with a cluster specific status code of PAKEParameterError.
             *
             * If a commissioning window is already currently open, this command shall fail with a cluster specific
             * status code of Busy.
             *
             * If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
             * of Busy, since it is likely that concurrent commissioning operations from multiple separate
             * Commissioners are about to take place.
             *
             * In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.1
             */
            openCommissioningWindow: Command(
                0x0,
                TlvOpenCommissioningWindowRequest,
                0x0,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * This command is used by a current Administrator to instruct a Node to revoke any active Open
             * Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
             * Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
             * the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
             * command, see Section 4.3.1, “Commissionable Node Discovery”.
             *
             * If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
             * status code of WindowNotOpen.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.3
             */
            revokeCommissioning: Command(
                0x2,
                TlvNoArguments,
                0x2,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        }
    });

    /**
     * A AdministratorCommissioningCluster supports these elements if it supports feature Basic.
     */
    export const BasicComponent = ClusterComponent({
        commands: {
            /**
             * This command may be used by a current Administrator to instruct a Node to go into commissioning mode, if
             * the node supports the Basic Commissioning Method. The Basic Commissioning Method specifies a window of
             * time during which an already commissioned Node accepts PASE sessions. The current Administrator shall
             * specify a timeout value for the duration of OBCW.
             *
             * If a commissioning window is already currently open, this command shall fail with a cluster specific
             * status code of Busy.
             *
             * If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
             * of Busy, since it is likely that concurrent commissioning operations from multiple separate
             * Commissioners are about to take place.
             *
             * In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.
             *
             * The commissioning into a new Fabric completes when the Node successfully receives a
             * CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The new Administrator shall
             * discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.
             *
             * This field shall specify the time in seconds during which commissioning session establishment is allowed
             * by the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance
             * as specified in Announcement Duration.
             *
             * When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD
             * as described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in
             * Section 11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter
             * into active mode and set its fast-polling interval to SLEEPY_AC
             *
             * TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.2
             */
            openBasicCommissioningWindow: Command(
                0x1,
                TlvOpenBasicCommissioningWindowRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        }
    });

    /**
     * Administrator Commissioning
     *
     * This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines Attributes,
     * Commands and Responses needed for this purpose.
     *
     * For the management of Operational Credentials and Trusted Root Certificates, the Node Operational Credentials
     * cluster is used.
     *
     * AdministratorCommissioningCluster supports optional features that you can enable with the
     * AdministratorCommissioningCluster.with() factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create an AdministratorCommissioning cluster with support for optional features.
         * Include each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns an AdministratorCommissioning cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, BasicComponent, { basic: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { basic: true } ? typeof BasicComponent : {});
    const BC = { basic: true };

    /**
     * This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: Cluster.attributes,

        commands: {
            ...Cluster.commands,
            openBasicCommissioningWindow: AsConditional(
                BasicComponent.commands.openBasicCommissioningWindow,
                { mandatoryIf: [BC] }
            )
        }
    });
}

export type AdministratorCommissioningCluster = typeof AdministratorCommissioning.Cluster;
export const AdministratorCommissioningCluster = AdministratorCommissioning.Cluster;
