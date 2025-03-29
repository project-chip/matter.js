/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvByteString } from "../tlv/TlvString.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvEnum } from "../tlv/TlvNumber.js";
import { AccessLevel } from "#model";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace JointFabricPki {
    /**
     * Input to the JointFabricPki icacsrRequest command
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.5.1
     */
    export const TlvIcacsrRequest = TlvObject({ icacsr: TlvField(0, TlvByteString.bound({ maxLength: 400 })) });

    /**
     * Input to the JointFabricPki icacsrRequest command
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.5.1
     */
    export interface IcacsrRequest extends TypeFromSchema<typeof TlvIcacsrRequest> {}

    /**
     * This enumeration is used by the ICACSRResponse command to convey the detailed outcome of this cluster’s
     * ICACSRRequest command.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.4.1
     */
    export enum IcacsrRequestStatus {
        /**
         * No error
         */
        Ok = 0,

        /**
         * The ICACSR in the request is not compliant to PKCS #10 rules
         */
        InvalidIcaCsrFormat = 1,

        /**
         * The ICACSR in the request has an incorrect signature
         */
        InvalidIcaCsrSignature = 2,

        /**
         * DCL Vendor ID validation failed
         */
        FailedDclVendorIdValidation = 3,

        /**
         * DCL returned certificate is not an ICAC
         */
        NotAnIcac = 4,

        /**
         * Error due to an in progress Anchor Transfer
         */
        BusyAnchorTransfer = 5,

        /**
         * Signing the ICA CSR failed
         */
        IcaCsrSigningFailed = 6,

        /**
         * No user consent
         */
        IcaCsrRequestNoUserConsent = 7
    }

    /**
     * This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing for details
     * about the generation and contents of ICAC.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.5.2
     */
    export const TlvIcacsrResponse = TlvObject({
        /**
         * This field shall contain an ICACSRRequestStatusEnum value representing the status of the Section 11.25.5.1,
         * “ICACSRRequest Command” operation.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.25.5.2.1
         */
        statusCode: TlvField(0, TlvEnum<IcacsrRequestStatus>()),

        /**
         * If present, it shall contain the NOC Issuer Certificate in PEM format.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.25.5.2.2
         */
        icac: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 }))
    });

    /**
     * This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing for details
     * about the generation and contents of ICAC.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.5.2
     */
    export interface IcacsrResponse extends TypeFromSchema<typeof TlvIcacsrResponse> {}

    /**
     * This enumeration is used by the TransferAnchorResponse command to convey the detailed outcome of this cluster’s
     * TransferAnchorRequest command.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25.4.2
     */
    export enum TransferAnchorResponseStatus {
        /**
         * No error
         */
        Ok = 0,

        /**
         * Anchor Transfer was not started due to on- going Datastore operations
         */
        TransferAnchorStatusDatastoreBusy = 1,

        /**
         * User has not consented for Anchor Transfer
         */
        TransferAnchorStatusNoUserConsent = 2
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x753,
        name: "JointFabricPki",
        revision: 1,

        commands: {
            /**
             * This command shall be generated and executed during the Joint Commissioning Method steps and subsequently
             * respond in the form of an ICACSRResponse command.
             *
             * Check ICA Cross Signing for details about the generation and contents of the ICACSR.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.25.5.1
             */
            icacsrRequest: Command(
                0x0,
                TlvIcacsrRequest,
                0x1,
                TlvIcacsrResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.25.5
             */
            transferAnchorRequest: Command(
                0x2,
                TlvNoArguments,
                0x3,
                TlvNoArguments,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.25.5
             */
            transferAnchorComplete: Command(
                0x4,
                TlvNoArguments,
                0x4,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes fulfilling the role
     * of Anchor CA.
     *
     * NOTE Support for Joint Fabric PKI Cluster is provisional.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.25
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type JointFabricPkiCluster = JointFabricPki.Cluster;
export const JointFabricPkiCluster = JointFabricPki.Cluster;
ClusterRegistry.register(JointFabricPki.Complete);
