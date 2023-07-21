/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "KeypadInput", id: 0x509, classification: "application",
    description: "Keypad Input",
    details: "This cluster provides an interface for key code based input and control on a device like a Video " +
        "Player or an endpoint like a Content App. This may include text or action commands such as UP, " +
        "DOWN, and SELECT.",
    xref: { document: "cluster", section: "6.8" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.8.2" },

            children: [
                {
                    tag: "datatype", name: "NV", constraint: "0", description: "NavigationKeyCodes",
                    details: "Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU"
                },
                {
                    tag: "datatype", name: "LK", constraint: "1", description: "LocationKeys",
                    details: "Supports CEC keys 0x0A (Settings) and 0x09 (Home)"
                },
                {
                    tag: "datatype", name: "NK", constraint: "2", description: "NumberKeys",
                    details: "Supports numeric input 0..9"
                }
            ]
        },

        {
            tag: "command", name: "SendKey", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "SendKeyResponse",
            details: "Upon receipt, this shall process a keycode as input to the media device." +
                "\n" +
                "If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint " +
                "will consider the first key press to be a press and hold. When such a repeat KeyCode value is not " +
                "received within 200ms, then the endpoint will consider the last key press to be a release.",
            xref: { document: "cluster", section: "6.8.3.1" },
            children: [{
                tag: "datatype", name: "KeyCode", id: 0x0, type: "CecKeyCode", conformance: "M",
                details: "This shall indicate the key code to process.",
                xref: { document: "cluster", section: "6.8.3.1.1" }
            }]
        },

        {
            tag: "command", name: "SendKeyResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command shall be generated in response to a SendKey command.",
            xref: { document: "cluster", section: "6.8.3.2" },
            children: [{
                tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                details: "This shall indicate the of the command.",
                xref: { document: "cluster", section: "6.8.3.2.1" }
            }]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.8.4.1" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "UnsupportedKey", id: 0x1, conformance: "M",
                    description: "Command failed: Key code is not supported."
                },
                {
                    tag: "datatype", name: "InvalidKeyInCurrentState", id: 0x2, conformance: "M",
                    description: "Command failed: Requested key code is invalid in the context of the responder’s current state."
                }
            ]
        },

        {
            tag: "datatype", name: "CecKeyCode", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Select", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Down", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Left", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Right", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "RightUp", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "RightDown", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "LeftUp", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "LeftDown", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "RootMenu", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "SetupMenu", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "ContentsMenu", id: 0xb, conformance: "M" },
                { tag: "datatype", name: "FavoriteMenu", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "Exit", id: 0xd, conformance: "M" },
                { tag: "datatype", name: "MediaTopMenu", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "MediaContextSensitiveMenu", id: 0x11, conformance: "M" },
                { tag: "datatype", name: "NumberEntryMode", id: 0x1d, conformance: "M" },
                { tag: "datatype", name: "Number11", id: 0x1e, conformance: "M" },
                { tag: "datatype", name: "Number12", id: 0x1f, conformance: "M" },
                { tag: "datatype", name: "Number0OrNumber10", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "Numbers1", id: 0x21, conformance: "M" },
                { tag: "datatype", name: "Numbers2", id: 0x22, conformance: "M" },
                { tag: "datatype", name: "Numbers3", id: 0x23, conformance: "M" },
                { tag: "datatype", name: "Numbers4", id: 0x24, conformance: "M" },
                { tag: "datatype", name: "Numbers5", id: 0x25, conformance: "M" },
                { tag: "datatype", name: "Numbers6", id: 0x26, conformance: "M" },
                { tag: "datatype", name: "Numbers7", id: 0x27, conformance: "M" },
                { tag: "datatype", name: "Numbers8", id: 0x28, conformance: "M" },
                { tag: "datatype", name: "Numbers9", id: 0x29, conformance: "M" },
                { tag: "datatype", name: "Dot", id: 0x2a, conformance: "M" },
                { tag: "datatype", name: "Enter", id: 0x2b, conformance: "M" },
                { tag: "datatype", name: "Clear", id: 0x2c, conformance: "M" },
                { tag: "datatype", name: "NextFavorite", id: 0x2f, conformance: "M" },
                { tag: "datatype", name: "ChannelUp", id: 0x30, conformance: "M" },
                { tag: "datatype", name: "ChannelDown", id: 0x31, conformance: "M" },
                { tag: "datatype", name: "PreviousChannel", id: 0x32, conformance: "M" },
                { tag: "datatype", name: "SoundSelect", id: 0x33, conformance: "M" },
                { tag: "datatype", name: "InputSelect", id: 0x34, conformance: "M" },
                { tag: "datatype", name: "DisplayInformation", id: 0x35, conformance: "M" },
                { tag: "datatype", name: "Help", id: 0x36, conformance: "M" },
                { tag: "datatype", name: "PageUp", id: 0x37, conformance: "M" },
                { tag: "datatype", name: "PageDown", id: 0x38, conformance: "M" },
                { tag: "datatype", name: "Power", id: 0x40, conformance: "M" },
                { tag: "datatype", name: "VolumeUp", id: 0x41, conformance: "M" },
                { tag: "datatype", name: "VolumeDown", id: 0x42, conformance: "M" },
                { tag: "datatype", name: "Mute", id: 0x43, conformance: "M" },
                { tag: "datatype", name: "Play", id: 0x44, conformance: "M" },
                { tag: "datatype", name: "Stop", id: 0x45, conformance: "M" },
                { tag: "datatype", name: "Pause", id: 0x46, conformance: "M" },
                { tag: "datatype", name: "Record", id: 0x47, conformance: "M" },
                { tag: "datatype", name: "Rewind", id: 0x48, conformance: "M" },
                { tag: "datatype", name: "FastForward", id: 0x49, conformance: "M" },
                { tag: "datatype", name: "Eject", id: 0x4a, conformance: "M" },
                { tag: "datatype", name: "Forward", id: 0x4b, conformance: "M" },
                { tag: "datatype", name: "Backward", id: 0x4c, conformance: "M" },
                { tag: "datatype", name: "StopRecord", id: 0x4d, conformance: "M" },
                { tag: "datatype", name: "PauseRecord", id: 0x4e, conformance: "M" },
                { tag: "datatype", name: "Reserved", id: 0x4f, conformance: "M" },
                { tag: "datatype", name: "Angle", id: 0x50, conformance: "M" },
                { tag: "datatype", name: "SubPicture", id: 0x51, conformance: "M" },
                { tag: "datatype", name: "VideoOnDemand", id: 0x52, conformance: "M" },
                { tag: "datatype", name: "ElectronicProgramGuide", id: 0x53, conformance: "M" },
                { tag: "datatype", name: "TimerProgramming", id: 0x54, conformance: "M" },
                { tag: "datatype", name: "InitialConfiguration", id: 0x55, conformance: "M" },
                { tag: "datatype", name: "SelectBroadcastType", id: 0x56, conformance: "M" },
                { tag: "datatype", name: "SelectSoundPresentation", id: 0x57, conformance: "M" },
                { tag: "datatype", name: "PlayFunction", id: 0x60, conformance: "M" },
                { tag: "datatype", name: "PausePlayFunction", id: 0x61, conformance: "M" },
                { tag: "datatype", name: "RecordFunction", id: 0x62, conformance: "M" },
                { tag: "datatype", name: "PauseRecordFunction", id: 0x63, conformance: "M" },
                { tag: "datatype", name: "StopFunction", id: 0x64, conformance: "M" },
                { tag: "datatype", name: "MuteFunction", id: 0x65, conformance: "M" },
                { tag: "datatype", name: "RestoreVolumeFunction", id: 0x66, conformance: "M" },
                { tag: "datatype", name: "TuneFunction", id: 0x67, conformance: "M" },
                { tag: "datatype", name: "SelectMediaFunction", id: 0x68, conformance: "M" },
                { tag: "datatype", name: "SelectAvInputFunction", id: 0x69, conformance: "M" },
                { tag: "datatype", name: "SelectAudioInputFunction", id: 0x6a, conformance: "M" },
                { tag: "datatype", name: "PowerToggleFunction", id: 0x6b, conformance: "M" },
                { tag: "datatype", name: "PowerOffFunction", id: 0x6c, conformance: "M" },
                { tag: "datatype", name: "PowerOnFunction", id: 0x6d, conformance: "M" },
                { tag: "datatype", name: "F1Blue", id: 0x71, conformance: "M" },
                { tag: "datatype", name: "F2Red", id: 0x72, conformance: "M" },
                { tag: "datatype", name: "F3Green", id: 0x73, conformance: "M" },
                { tag: "datatype", name: "F4Yellow", id: 0x74, conformance: "M" },
                { tag: "datatype", name: "F5", id: 0x75, conformance: "M" },
                { tag: "datatype", name: "Data", id: 0x76, conformance: "M" }
            ]
        }
    ]
});
