/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { OtaSoftwareUpdateProvider } from "../../../cluster/definitions/OtaSoftwareUpdateProviderCluster.js";

/**
 * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match
 * the OTA Requestor’s constraints provided in the payload fields.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.1
 */
export type QueryImageRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvQueryImageRequest>;

/**
 * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.10
 */
export type QueryImageResponse = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvQueryImageResponse>;

/**
 * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.19
 */
export type ApplyUpdateRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvApplyUpdateRequest>;

/**
 * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.22
 */
export type ApplyUpdateResponse = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvApplyUpdateResponse>;

/**
 * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.25
 */
export type NotifyUpdateAppliedRequest = TypeFromSchema<typeof OtaSoftwareUpdateProvider.TlvNotifyUpdateAppliedRequest>;

export namespace OtaSoftwareUpdateProviderInterface {
    export interface Base {
        /**
         * Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to
         * match the OTA Requestor’s constraints provided in the payload fields.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.1
         */
        queryImage(request: QueryImageRequest): MaybePromise<QueryImageResponse>;

        /**
         * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.19
         */
        applyUpdateRequest(request: ApplyUpdateRequest): MaybePromise<ApplyUpdateResponse>;

        /**
         * @see {@link MatterSpecification.v11.Core} § 11.19.6.5.25
         */
        notifyUpdateApplied(request: NotifyUpdateAppliedRequest): MaybePromise;
    }
}

export type OtaSoftwareUpdateProviderInterface = {
    components: [{ flags: {}, methods: OtaSoftwareUpdateProviderInterface.Base }]
};
