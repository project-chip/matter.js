/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
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
import { OptionalAttribute, Command, Attribute, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";

export namespace ApplicationLauncher {
    /**
     * This indicates a global identifier for an Application given a catalog.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2
     */
    export const TlvApplicationStruct = TlvObject({
        /**
         * This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.
         *
         * Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
         * assign an ApplicationID to each Content App.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.1
         */
        catalogVendorId: TlvField(0, TlvUInt16),

        /**
         * This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
         * This field shall be unique within a catalog.
         *
         * For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.2
         */
        applicationId: TlvField(1, TlvString)
    });

    /**
     * This specifies an app along with its corresponding endpoint.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.3
     */
    export const TlvApplicationEPStruct = TlvObject({
        application: TlvField(0, TlvApplicationStruct),
        endpoint: TlvOptionalField(1, TlvEndpointNumber)
    });

    /**
     * Input to the ApplicationLauncher launchApp command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
     */
    export const TlvLaunchAppRequest = TlvObject({
        /**
         * This field shall specify the Application to launch.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.1
         */
        application: TlvOptionalField(0, TlvApplicationStruct),

        /**
         * This field shall specify optional app-specific data to be sent to the app.
         *
         * Note: This format and meaning of this value is proprietary and outside the specification. It provides a
         * transition path for device makers that use other protocols (like DIAL) which allow for proprietary data.
         * Apps that are not yet Matter aware can be launched via Matter, while retaining the existing ability to
         * launch with proprietary data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.2
         */
        data: TlvOptionalField(1, TlvByteString)
    });

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.1
     */
    export const enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * Requested app is not available.
         */
        AppNotAvailable = 1,

        /**
         * Video platform unable to honor command.
         */
        SystemBusy = 2
    }

    /**
     * This command shall be generated in response to LaunchApp/StopApp/HideApp commands.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
     */
    export const TlvLauncherResponse = TlvObject({
        /**
         * This shall indicate the status of the command which resulted in this response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.1
         */
        status: TlvField(0, TlvEnum<Status>()),

        /**
         * This shall specify Optional app-specific data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.2
         */
        data: TlvOptionalField(1, TlvByteString)
    });

    /**
     * Input to the ApplicationLauncher stopApp command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
     */
    export const TlvStopAppRequest = TlvObject({
        /**
         * This field shall specify the Application to stop.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2.1
         */
        application: TlvOptionalField(0, TlvApplicationStruct)
    });

    /**
     * Input to the ApplicationLauncher hideApp command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
     */
    export const TlvHideAppRequest = TlvObject({
        /**
         * This field shall specify the Application to hide.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3.1
         */
        application: TlvOptionalField(0, TlvApplicationStruct)
    });

    /**
     * These are optional features supported by ApplicationLauncherCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.2
     */
    export enum Feature {
        /**
         * ApplicationPlatform
         *
         * Support for attributes and commands required for endpoint to support launching any application within the
         * supported application catalogs
         */
        ApplicationPlatform = "ApplicationPlatform"
    }

    /**
     * These elements and properties are present in all ApplicationLauncher clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x50c,
        name: "ApplicationLauncher",
        revision: 1,

        features: {
            /**
             * ApplicationPlatform
             *
             * Support for attributes and commands required for endpoint to support launching any application within
             * the supported application catalogs
             */
            applicationPlatform: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute shall specify the current in-focus application, identified using an Application ID,
             * catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
             * App endpoint. A null shall be used to indicate there is no current in-focus application.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.2
             */
            currentApp: OptionalAttribute(0x1, TlvNullable(TlvApplicationEPStruct), { default: null })
        },

        commands: {
            /**
             * Upon receipt of this command, the server shall launch the application with optional data. The
             * application shall be either
             *
             *   • the specified application, if the Application Platform feature is supported;
             *
             *   • otherwise the application corresponding to the endpoint.
             *
             * The endpoint shall launch and bring to foreground the requisite application if the application is not
             * already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
             * Application Basic cluster of the Endpoint corresponding to the launched application. The Status
             * attribute shall be updated on any other application whose Status may have changed as a result of this
             * command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
             * foreground.
             *
             * This command returns a Launcher Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
             */
            launchApp: Command(0x0, TlvLaunchAppRequest, 0x3, TlvLauncherResponse),

            /**
             * Upon receipt of this command, the server shall stop the application if it is running. The application
             * shall be either
             *
             *   • the specified application, if the Application Platform feature is supported;
             *
             *   • otherwise the application corresponding to the endpoint.
             *
             * The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
             * corresponding to the stopped application. The Status attribute shall be updated on any other application
             * whose Status may have changed as a result of this command.
             *
             * This command returns a Launcher Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
             */
            stopApp: Command(0x1, TlvStopAppRequest, 0x3, TlvLauncherResponse),

            /**
             * Upon receipt of this command, the server shall hide the application. The application shall be either
             *
             *   • the specified application, if the Application Platform feature is supported;
             *
             *   • otherwise the application corresponding to the endpoint.
             *
             * The endpoint may decide to stop the application based on manufacturer specific behavior or resource
             * constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
             * action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
             * the action was taken. The Status attribute shall be updated on any other application whose Status may
             * have changed as a result of this command.
             *
             * This command returns a Launcher Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
             */
            hideApp: Command(0x2, TlvHideAppRequest, 0x3, TlvLauncherResponse)
        }
    });

    /**
     * A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.
     */
    export const ApplicationPlatformComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall specify the list of supported application catalogs, where each entry in the list is
             * the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use value 0x0000.
             *
             * It is expected that Content App Platform providers will have their own catalog vendor ID (set to their
             * own Vendor ID) and will assign an ApplicationID to each Content App.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.1
             */
            catalogList: Attribute(0x0, TlvArray(TlvUInt16), { persistent: true })
        }
    });

    /**
     * Application Launcher
     *
     * This cluster provides an interface for launching applications on a Video Player device such as a TV.
     *
     * ApplicationLauncherCluster supports optional features that you can enable with the
     * ApplicationLauncherCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create an ApplicationLauncher cluster with support for optional features. Include
         * each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns an ApplicationLauncher cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, ApplicationPlatformComponent, { applicationPlatform: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { applicationPlatform: true } ? typeof ApplicationPlatformComponent : {});
    const AP = { applicationPlatform: true };

    /**
     * This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: {
            ...Cluster.attributes,
            catalogList: AsConditional(ApplicationPlatformComponent.attributes.catalogList, { mandatoryIf: [AP] })
        },
        commands: Cluster.commands
    });
}

export type ApplicationLauncherCluster = typeof ApplicationLauncher.Cluster;
export const ApplicationLauncherCluster = ApplicationLauncher.Cluster;
