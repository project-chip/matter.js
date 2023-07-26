/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvUInt16, TlvUInt32, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

export namespace OtaSoftwareUpdateProvider {
    /**
     * Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall
     *
     * NOT be supported, as there is no way to authenticate the involved participants.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.3
     */
    export const enum DownloadProtocol {
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
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
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
     * See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.1
     */
    export const enum Status {
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
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
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
     * Input to the OtaSoftwareUpdateProvider applyUpdateRequest command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
     */
    export const TlvApplyUpdateRequestRequest = TlvObject({
        updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
        newVersion: TlvField(1, TlvUInt32)
    });

    /**
     * See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
     * the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.2
     */
    export const enum ApplyUpdateAction {
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
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
     */
    export const TlvApplyUpdateResponse = TlvObject({
        action: TlvField(0, TlvEnum<ApplyUpdateAction>()),
        delayedActionTime: TlvField(1, TlvUInt32)
    });

    /**
     * Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
     */
    export const TlvNotifyUpdateAppliedRequest = TlvObject({
        updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
        softwareVersion: TlvField(1, TlvUInt32)
    });

    /**
     * OTA Software Update Provider
     *
     * Provides an interface for providing OTA software updates
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6
     */
    export const Cluster = CreateCluster({
        id: 0x29,
        name: "OtaSoftwareUpdateProvider",
        revision: 1,

        commands: {
            /**
             * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA
             * Provider to match the OTA Requestor’s constraints provided in the payload fields.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
             */
            queryImage: Command(0x0, TlvQueryImageRequest, 0x1, TlvQueryImageResponse),

            /**
             * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This
             * field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling
             * of the application of Software Images by OTA Requestors.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
             */
            applyUpdateRequest: Command(0x2, TlvApplyUpdateRequestRequest, 0x3, TlvApplyUpdateResponse),

            /**
             * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.
             *
             * The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion
             * attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the
             * value representing a new version running on the Node invoking the command.
             *
             * When Generated
             *
             * The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:
             *
             *   1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous
             *      QueryImage response.
             *
             *   2. An OTA Requestor has just successfully applied a Software Image it had obtained through means
             *      different than those of this Cluster.
             *
             * An OTA Provider may use the state of invocation of this command to help track the progress of update for
             * OTA Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA
             * Requestor may never come back (e.g. device removed from Fabric altogether, or a critical malfunction),
             * an OTA Provider shall NOT expect every OTA Requestor to invoke this command for correct operation of the
             * OTA Provider.
             *
             * This command shall be considered optional and shall not result in reduced availability of the OTA
             * Provider functionality if OTA Requestors never invoke this command.
             *
             * Effect on Receipt
             *
             * An OTA Provider receiving an invocation of this command may log it internally.
             *
             * On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached
             * Software Images, or use it for other similar administrative purposes.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
             */
            notifyUpdateApplied: Command(0x4, TlvNotifyUpdateAppliedRequest, 0x4, TlvNoResponse)
        }
    });
}

export type OtaSoftwareUpdateProviderCluster = typeof OtaSoftwareUpdateProvider.Cluster;
export const OtaSoftwareUpdateProviderCluster = OtaSoftwareUpdateProvider.Cluster;
