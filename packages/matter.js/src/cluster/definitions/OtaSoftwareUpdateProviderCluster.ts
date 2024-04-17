/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvUInt16, TlvUInt32, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace OtaSoftwareUpdateProvider {
    /**
     * Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall
     *
     * NOT be supported, as there is no way to authenticate the involved participants.
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.4.3
     */
    export enum DownloadProtocol {
        /**
         * Indicates support for synchronous BDX.
         */
        BdxSynchronous = 0,

        /**
         * Indicates support for asynchronous BDX.
         */
        BdxAsynchronous = 1,

        /**
         * Indicates support for HTTPS.
         */
        Https = 2,

        /**
         * Indicates support for vendor specific protocol.
         */
        VendorSpecific = 3
    }

    /**
     * Input to the OtaSoftwareUpdateProvider queryImage command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.1
     */
    export const TlvQueryImageRequest = TlvObject({
        vendorId: TlvField(0, TlvVendorId),
        productId: TlvField(1, TlvUInt16),
        softwareVersion: TlvField(2, TlvUInt32),
        protocolsSupported: TlvField(3, TlvArray(TlvEnum<DownloadProtocol>(), { maxLength: 8 })),
        hardwareVersion: TlvOptionalField(4, TlvUInt16),
        location: TlvOptionalField(5, TlvString.bound({ length: 2 })),
        requestorCanConsent: TlvOptionalField(6, TlvBoolean),
        metadataForProvider: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
    });

    /**
     * Input to the OtaSoftwareUpdateProvider queryImage command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.1
     */
    export interface QueryImageRequest extends TypeFromSchema<typeof TlvQueryImageRequest> {}

    /**
     * See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.4.1
     */
    export enum Status {
        /**
         * Indicates that the OTA Provider has an update available.
         */
        UpdateAvailable = 0,

        /**
         * Indicates OTA Provider may have an update, but it is not ready yet.
         */
        Busy = 1,

        /**
         * Indicates that there is definitely no update currently available from the OTA Provider.
         */
        NotAvailable = 2,

        /**
         * Indicates that the requested download protocol is not supported by the OTA Provider.
         */
        DownloadProtocolNotSupported = 3
    }

    /**
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.10
     */
    export const TlvQueryImageResponse = TlvObject({
        status: TlvField(0, TlvEnum<Status>()),
        delayedActionTime: TlvOptionalField(1, TlvUInt32),
        imageUri: TlvOptionalField(2, TlvString.bound({ maxLength: 256 })),
        softwareVersion: TlvOptionalField(3, TlvUInt32),
        softwareVersionString: TlvOptionalField(4, TlvString.bound({ minLength: 1, maxLength: 64 })),
        updateToken: TlvOptionalField(5, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
        userConsentNeeded: TlvOptionalField(6, TlvBoolean),
        metadataForRequestor: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
    });

    /**
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.10
     */
    export interface QueryImageResponse extends TypeFromSchema<typeof TlvQueryImageResponse> {}

    /**
     * Input to the OtaSoftwareUpdateProvider applyUpdateRequest command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.19
     */
    export const TlvApplyUpdateRequest = TlvObject({
        updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
        newVersion: TlvField(1, TlvUInt32)
    });

    /**
     * Input to the OtaSoftwareUpdateProvider applyUpdateRequest command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.19
     */
    export interface ApplyUpdateRequest extends TypeFromSchema<typeof TlvApplyUpdateRequest> {}

    /**
     * See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
     * the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.4.2
     */
    export enum ApplyUpdateAction {
        /**
         * Apply the update.
         */
        Proceed = 0,

        /**
         * Wait at least the given delay time.
         */
        AwaitNextAction = 1,

        /**
         * The OTA Provider is conveying a desire to rescind a previously provided Software Image.
         */
        Discontinue = 2
    }

    /**
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.22
     */
    export const TlvApplyUpdateResponse = TlvObject({
        action: TlvField(0, TlvEnum<ApplyUpdateAction>()),
        delayedActionTime: TlvField(1, TlvUInt32)
    });

    /**
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.22
     */
    export interface ApplyUpdateResponse extends TypeFromSchema<typeof TlvApplyUpdateResponse> {}

    /**
     * Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.25
     */
    export const TlvNotifyUpdateAppliedRequest = TlvObject({
        updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
        softwareVersion: TlvField(1, TlvUInt32)
    });

    /**
     * Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.25
     */
    export interface NotifyUpdateAppliedRequest extends TypeFromSchema<typeof TlvNotifyUpdateAppliedRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x29,
        name: "OtaSoftwareUpdateProvider",
        revision: 1,

        commands: {
            /**
             * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA
             * Provider to match the OTA Requestor’s constraints provided in the payload fields.
             *
             * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.1
             */
            queryImage: Command(0x0, TlvQueryImageRequest, 0x1, TlvQueryImageResponse),

            /**
             * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.19
             */
            applyUpdateRequest: Command(0x2, TlvApplyUpdateRequest, 0x3, TlvApplyUpdateResponse),

            /**
             * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.25
             */
            notifyUpdateApplied: Command(0x4, TlvNotifyUpdateAppliedRequest, 0x4, TlvNoResponse)
        }
    });

    /**
     * OTA Software Update Provider
     *
     * Provides an interface for providing OTA software updates
     *
     * @see {@link MatterSpecification.v11.Core} § 11.19.6
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OtaSoftwareUpdateProviderCluster = OtaSoftwareUpdateProvider.Cluster;
export const OtaSoftwareUpdateProviderCluster = OtaSoftwareUpdateProvider.Cluster;
ClusterRegistry.register(OtaSoftwareUpdateProvider.Complete);
