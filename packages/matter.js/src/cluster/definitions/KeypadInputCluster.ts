/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    ClusterForBaseCluster
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Command, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

export namespace KeypadInput {
    export const enum CecKeyCode {
        Select = 0,
        Up = 1,
        Down = 2,
        Left = 3,
        Right = 4,
        RightUp = 5,
        RightDown = 6,
        LeftUp = 7,
        LeftDown = 8,
        RootMenu = 9,
        SetupMenu = 10,
        ContentsMenu = 11,
        FavoriteMenu = 12,
        Exit = 13,
        MediaTopMenu = 16,
        MediaContextSensitiveMenu = 17,
        NumberEntryMode = 29,
        Number11 = 30,
        Number12 = 31,
        Number0OrNumber10 = 32,
        Numbers1 = 33,
        Numbers2 = 34,
        Numbers3 = 35,
        Numbers4 = 36,
        Numbers5 = 37,
        Numbers6 = 38,
        Numbers7 = 39,
        Numbers8 = 40,
        Numbers9 = 41,
        Dot = 42,
        Enter = 43,
        Clear = 44,
        NextFavorite = 47,
        ChannelUp = 48,
        ChannelDown = 49,
        PreviousChannel = 50,
        SoundSelect = 51,
        InputSelect = 52,
        DisplayInformation = 53,
        Help = 54,
        PageUp = 55,
        PageDown = 56,
        Power = 64,
        VolumeUp = 65,
        VolumeDown = 66,
        Mute = 67,
        Play = 68,
        Stop = 69,
        Pause = 70,
        Record = 71,
        Rewind = 72,
        FastForward = 73,
        Eject = 74,
        Forward = 75,
        Backward = 76,
        StopRecord = 77,
        PauseRecord = 78,
        Reserved = 79,
        Angle = 80,
        SubPicture = 81,
        VideoOnDemand = 82,
        ElectronicProgramGuide = 83,
        TimerProgramming = 84,
        InitialConfiguration = 85,
        SelectBroadcastType = 86,
        SelectSoundPresentation = 87,
        PlayFunction = 96,
        PausePlayFunction = 97,
        RecordFunction = 98,
        PauseRecordFunction = 99,
        StopFunction = 100,
        MuteFunction = 101,
        RestoreVolumeFunction = 102,
        TuneFunction = 103,
        SelectMediaFunction = 104,
        SelectAvInputFunction = 105,
        SelectAudioInputFunction = 106,
        PowerToggleFunction = 107,
        PowerOffFunction = 108,
        PowerOnFunction = 109,
        F1Blue = 113,
        F2Red = 114,
        F3Green = 115,
        F4Yellow = 116,
        F5 = 117,
        Data = 118
    }

    /**
     * Input to the KeypadInput sendKey command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
     */
    export const TlvSendKeyRequest = TlvObject({
        /**
         * This shall indicate the key code to process.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1.1
         */
        keyCode: TlvField(0, TlvEnum<CecKeyCode>())
    });

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.4.1
     */
    export const enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * Command failed: Key code is not supported.
         */
        UnsupportedKey = 1,

        /**
         * Command failed: Requested key code is invalid in the context of the responder’s current state.
         */
        InvalidKeyInCurrentState = 2
    }

    /**
     * This command shall be generated in response to a SendKey command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2
     */
    export const TlvSendKeyResponse = TlvObject({
        /**
         * This shall indicate the of the command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2.1
         */
        status: TlvField(0, TlvEnum<Status>())
    });

    /**
     * These are optional features supported by KeypadInputCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.2
     */
    export enum Feature {
        /**
         * NavigationKeyCodes
         *
         * Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU
         */
        NavigationKeyCodes = "NavigationKeyCodes",

        /**
         * LocationKeys
         *
         * Supports CEC keys 0x0A (Settings) and 0x09 (Home)
         */
        LocationKeys = "LocationKeys",

        /**
         * NumberKeys
         *
         * Supports numeric input 0..9
         */
        NumberKeys = "NumberKeys"
    }

    /**
     * These elements and properties are present in all KeypadInput clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x509,
        name: "KeypadInput",
        revision: 1,

        features: {
            /**
             * NavigationKeyCodes
             *
             * Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU
             */
            navigationKeyCodes: BitFlag(0),

            /**
             * LocationKeys
             *
             * Supports CEC keys 0x0A (Settings) and 0x09 (Home)
             */
            locationKeys: BitFlag(1),

            /**
             * NumberKeys
             *
             * Supports numeric input 0..9
             */
            numberKeys: BitFlag(2)
        },

        commands: {
            /**
             * Upon receipt, this shall process a keycode as input to the media device.
             *
             * If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
             * consider the first key press to be a press and hold. When such a repeat KeyCode value is not received
             * within 200ms, then the endpoint will consider the last key press to be a release.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
             */
            sendKey: Command(0x0, TlvSendKeyRequest, 0x1, TlvSendKeyResponse)
        }
    });

    /**
     * Keypad Input
     *
     * This cluster provides an interface for key code based input and control on a device like a Video Player or an
     * endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.
     *
     * KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
     * method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a KeypadInput cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a KeypadInput cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF };
}

export type KeypadInputCluster = typeof KeypadInput.Cluster;
export const KeypadInputCluster = KeypadInput.Cluster;
