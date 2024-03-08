/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { OtaSoftwareUpdateProvider } from "../../../cluster/definitions/OtaSoftwareUpdateProviderCluster.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match
 * the OTA Requestor’s constraints provided in the payload fields.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
 */
export type QueryImageRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvQueryImageRequest>;

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
 */
export type QueryImageResponse = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvQueryImageResponse>;

/**
 * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This field may be
 * used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of the application of
 * Software Images by OTA Requestors.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
 */
export type ApplyUpdateRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvApplyUpdateRequest>;

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
 */
export type ApplyUpdateResponse = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvApplyUpdateResponse>;

/**
 * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.
 *
 * The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion attribute in
 * the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value representing a new
 * version running on the Node invoking the command.
 *
 * When Generated
 *
 * The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:
 *
 *   1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous QueryImage
 *      response.
 *
 *   2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different than
 *      those of this Cluster.
 *
 * An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
 * Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor may
 * never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider shall NOT
 * expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.
 *
 * This command shall be considered optional and shall not result in reduced availability of the OTA Provider
 * functionality if OTA Requestors never invoke this command.
 *
 * Effect on Receipt
 *
 * An OTA Provider receiving an invocation of this command may log it internally.
 *
 * On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached Software
 * Images, or use it for other similar administrative purposes.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
 */
export type NotifyUpdateAppliedRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvNotifyUpdateAppliedRequest>;

export namespace OtaSoftwareUpdateProviderInterface {
    export interface Base {
        /**
         * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to
         * match the OTA Requestor’s constraints provided in the payload fields.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
         */
        queryImage(request: QueryImageRequest): MaybePromise<QueryImageResponse>;

        /**
         * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This
         * field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of
         * the application of Software Images by OTA Requestors.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
         */
        applyUpdateRequest(request: ApplyUpdateRequest): MaybePromise<ApplyUpdateResponse>;

        /**
         * This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.
         *
         * The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion
         * attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value
         * representing a new version running on the Node invoking the command.
         *
         * When Generated
         *
         * The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:
         *
         *   1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous
         *      QueryImage response.
         *
         *   2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different
         *      than those of this Cluster.
         *
         * An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
         * Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor
         * may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider
         * shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.
         *
         * This command shall be considered optional and shall not result in reduced availability of the OTA Provider
         * functionality if OTA Requestors never invoke this command.
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
        notifyUpdateApplied(request: NotifyUpdateAppliedRequest): MaybePromise;
    }
}

export type OtaSoftwareUpdateProviderInterface = {
    components: [{ flags: {}, methods: OtaSoftwareUpdateProviderInterface.Base }]
};
