/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ApplicationLauncher } from "../../../cluster/definitions/ApplicationLauncherCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * Upon receipt of this command, the server shall launch the application with optional data. The application shall be
 * either
 *
 *   • the specified application, if the Application Platform feature is supported;
 *
 *   • otherwise the application corresponding to the endpoint.
 *
 * The endpoint shall launch and bring to foreground the requisite application if the application is not already
 * launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic
 * cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any
 * other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported,
 * shall be updated to reflect the new application in the foreground.
 *
 * This command returns a Launcher Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
 */
export type LaunchAppRequest = TypeFromSchema<typeof ApplicationLauncher.TlvLaunchAppRequest>;

/**
 * This command shall be generated in response to LaunchApp/StopApp/HideApp commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
 */
export type LauncherResponse = TypeFromSchema<typeof ApplicationLauncher.TlvLauncherResponse>;

/**
 * Upon receipt of this command, the server shall stop the application if it is running. The application shall be either
 *
 *   • the specified application, if the Application Platform feature is supported;
 *
 *   • otherwise the application corresponding to the endpoint.
 *
 * The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to
 * the stopped application. The Status attribute shall be updated on any other application whose Status may have
 * changed as a result of this command.
 *
 * This command returns a Launcher Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
 */
export type StopAppRequest = TypeFromSchema<typeof ApplicationLauncher.TlvStopAppRequest>;

/**
 * Upon receipt of this command, the server shall hide the application. The application shall be either
 *
 *   • the specified application, if the Application Platform feature is supported;
 *
 *   • otherwise the application corresponding to the endpoint.
 *
 * The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if
 * any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the
 * Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status
 * attribute shall be updated on any other application whose Status may have changed as a result of this command.
 *
 * This command returns a Launcher Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
 */
export type HideAppRequest = TypeFromSchema<typeof ApplicationLauncher.TlvHideAppRequest>;

export namespace ApplicationLauncherInterface {
    export interface Base {
        /**
         * Upon receipt of this command, the server shall launch the application with optional data. The application
         * shall be either
         *
         *   • the specified application, if the Application Platform feature is supported;
         *
         *   • otherwise the application corresponding to the endpoint.
         *
         * The endpoint shall launch and bring to foreground the requisite application if the application is not
         * already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
         * Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute
         * shall be updated on any other application whose Status may have changed as a result of this command. The
         * CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground.
         *
         * This command returns a Launcher Response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
         */
        launchApp(request: LaunchAppRequest): MaybePromise<LauncherResponse>;

        /**
         * Upon receipt of this command, the server shall stop the application if it is running. The application shall
         * be either
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
        stopApp(request: StopAppRequest): MaybePromise<LauncherResponse>;

        /**
         * Upon receipt of this command, the server shall hide the application. The application shall be either
         *
         *   • the specified application, if the Application Platform feature is supported;
         *
         *   • otherwise the application corresponding to the endpoint.
         *
         * The endpoint may decide to stop the application based on manufacturer specific behavior or resource
         * constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
         * action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the
         * action was taken. The Status attribute shall be updated on any other application whose Status may have
         * changed as a result of this command.
         *
         * This command returns a Launcher Response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
         */
        hideApp(request: HideAppRequest): MaybePromise<LauncherResponse>;
    }
}

export type ApplicationLauncherInterface = { components: [{ flags: {}, methods: ApplicationLauncherInterface.Base }] };
