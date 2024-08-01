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
import { BindingServer as BaseBindingServer } from "../../../behavior/definitions/binding/BindingServer.js";
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
import {
    ContentAppObserverBehavior as BaseContentAppObserverBehavior
} from "../../../behavior/definitions/content-app-observer/ContentAppObserverBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * This defines conformance to the Content App device type.
 *
 * A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App
 * Platform is able to launch Content Apps and represent these apps as separate endpoints.
 *
 * @see {@link MatterSpecification.v13.Device} § 10.5
 */
export interface ContentAppDevice extends Identity<typeof ContentAppDeviceDefinition> {}

export namespace ContentAppRequirements {
    /**
     * The KeypadInput cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link KeypadInputServer} for convenience.
     */
    export const KeypadInputServer = BaseKeypadInputServer;

    /**
     * The ApplicationLauncher cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link ApplicationLauncherServer} for convenience.
     */
    export const ApplicationLauncherServer = BaseApplicationLauncherServer;

    /**
     * The ApplicationBasic cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link ApplicationBasicServer} for convenience.
     */
    export const ApplicationBasicServer = BaseApplicationBasicServer;

    /**
     * The Binding cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link BindingServer} for convenience.
     */
    export const BindingServer = BaseBindingServer;

    /**
     * The Channel cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ChannelServer} for convenience.
     */
    export const ChannelServer = BaseChannelServer;

    /**
     * The TargetNavigator cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link TargetNavigatorServer} for convenience.
     */
    export const TargetNavigatorServer = BaseTargetNavigatorServer;

    /**
     * The MediaPlayback cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link MediaPlaybackServer} for convenience.
     */
    export const MediaPlaybackServer = BaseMediaPlaybackServer;

    /**
     * The ContentLauncher cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ContentLauncherServer} for convenience.
     */
    export const ContentLauncherServer = BaseContentLauncherServer;

    /**
     * The AccountLogin cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link AccountLoginServer} for convenience.
     */
    export const AccountLoginServer = BaseAccountLoginServer;

    /**
     * The ContentAppObserver cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ContentAppObserverBehavior} for convenience.
     */
    export const ContentAppObserverBehavior = BaseContentAppObserverBehavior;

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
            Binding: BindingServer,
            Channel: ChannelServer,
            TargetNavigator: TargetNavigatorServer,
            MediaPlayback: MediaPlaybackServer,
            ContentLauncher: ContentLauncherServer,
            AccountLogin: AccountLoginServer
        }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { ContentAppObserver: ContentAppObserverBehavior }, mandatory: {} };
}

export const ContentAppDeviceDefinition = MutableEndpoint({
    name: "ContentApp",
    deviceType: 0x24,
    deviceRevision: 2,
    requirements: ContentAppRequirements,
    behaviors: SupportedBehaviors(
        ContentAppRequirements.server.mandatory.KeypadInput,
        ContentAppRequirements.server.mandatory.ApplicationLauncher,
        ContentAppRequirements.server.mandatory.ApplicationBasic
    )
});

export const ContentAppDevice: ContentAppDevice = ContentAppDeviceDefinition;
