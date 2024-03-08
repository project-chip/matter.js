/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    KeypadInputServer as BaseKeypadInputServer
} from "../../../behavior/definitions/keypad-input/KeypadInputServer.js";
import {
    ApplicationLauncherServer as BaseApplicationLauncherServer
} from "../../../behavior/definitions/application-launcher/ApplicationLauncherServer.js";
import {
    ApplicationBasicServer as BaseApplicationBasicServer
} from "../../../behavior/definitions/application-basic/ApplicationBasicServer.js";
import { ChannelServer as BaseChannelServer } from "../../../behavior/definitions/channel/ChannelServer.js";
import {
    TargetNavigatorServer as BaseTargetNavigatorServer
} from "../../../behavior/definitions/target-navigator/TargetNavigatorServer.js";
import {
    MediaPlaybackServer as BaseMediaPlaybackServer
} from "../../../behavior/definitions/media-playback/MediaPlaybackServer.js";
import {
    ContentLauncherServer as BaseContentLauncherServer
} from "../../../behavior/definitions/content-launcher/ContentLauncherServer.js";
import {
    AccountLoginServer as BaseAccountLoginServer
} from "../../../behavior/definitions/account-login/AccountLoginServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance to the Content App device type.
 *
 * A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App
 * Platform is able to launch Content Apps and represent these apps as separate endpoints.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.5
 */
export interface ContentAppDevice extends Identity<typeof ContentAppDeviceDefinition> {}

export namespace ContentAppRequirements {
    /**
     * The {@link KeypadInput} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const KeypadInputServer = BaseKeypadInputServer;

    /**
     * The {@link ApplicationLauncher} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ApplicationLauncherServer = BaseApplicationLauncherServer;

    /**
     * The {@link ApplicationBasic} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ApplicationBasicServer = BaseApplicationBasicServer;

    /**
     * The {@link Channel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ChannelServer = BaseChannelServer;

    /**
     * The {@link TargetNavigator} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TargetNavigatorServer = BaseTargetNavigatorServer;

    /**
     * The {@link MediaPlayback} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const MediaPlaybackServer = BaseMediaPlaybackServer;

    /**
     * The {@link ContentLauncher} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ContentLauncherServer = BaseContentLauncherServer;

    /**
     * The {@link AccountLogin} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const AccountLoginServer = BaseAccountLoginServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            KeypadInput: KeypadInputServer,
            ApplicationLauncher: ApplicationLauncherServer,
            ApplicationBasic: ApplicationBasicServer
        },

        optional: {
            Channel: ChannelServer,
            TargetNavigator: TargetNavigatorServer,
            MediaPlayback: MediaPlaybackServer,
            ContentLauncher: ContentLauncherServer,
            AccountLogin: AccountLoginServer
        }
    };
}

export const ContentAppDeviceDefinition = MutableEndpoint({
    name: "ContentApp",
    deviceType: 0x24,
    deviceRevision: 1,
    requirements: ContentAppRequirements,
    behaviors: SupportedBehaviors(
        ContentAppRequirements.server.mandatory.KeypadInput,
        ContentAppRequirements.server.mandatory.ApplicationLauncher,
        ContentAppRequirements.server.mandatory.ApplicationBasic
    )
});

export const ContentAppDevice: ContentAppDevice = ContentAppDeviceDefinition;
