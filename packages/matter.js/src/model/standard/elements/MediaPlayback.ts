/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "MediaPlayback", id: 0x506, classification: "application",
    description: "Media Playback",
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
        "device such as a TV, Set-top Box, or Smart Speaker.",
    xref: { document: "cluster", section: "6.10" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.10.2" },

            children: [
                {
                    tag: "datatype", name: "AS", constraint: "0", description: "AdvancedSeek",
                    details: "Enables clients to implement more advanced media seeking behavior in their user interface, such as " +
                        "for example a \"seek bar\". Adds support for Attributes and Commands related to advanced seek support"
                },
                {
                    tag: "datatype", name: "VS", constraint: "1", description: "VariableSpeed",
                    details: "Support for commands to support variable speed playback on media that supports it."
                }
            ]
        },

        {
            tag: "attribute", name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", access: "R V",
            conformance: "M", constraint: "desc", default: 0,
            details: "This shall indicate the current playback state of media." +
                "\n" +
                "During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.",
            xref: { document: "cluster", section: "6.10.3.1" }
        },

        {
            tag: "attribute", name: "StartTime", id: 0x1, type: "epoch-us", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",
            details: "This shall indicate the start time of the media, in case the media has a fixed start time (for " +
                "example, live stream or television broadcast), or null when start time does not apply to the current" +
                "\n" +
                "media (for example, video-on-demand). This time is a UTC time. The client needs to handle " +
                "conversion to local time, as required, taking in account time zone and possible local DST offset.",
            xref: { document: "cluster", section: "6.10.3.2" }
        },

        {
            tag: "attribute", name: "Duration", id: 0x2, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",
            details: "This shall indicate the duration, in milliseconds, of the current media being played back or null " +
                "when duration is not applicable (for example, in live streaming content with no known duration). " +
                "This attribute shall never be 0.",
            xref: { document: "cluster", section: "6.10.3.3" }
        },

        {
            tag: "attribute", name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", access: "R V",
            conformance: "AS", constraint: "desc", default: null, quality: "X",

            details: "This shall indicate the position of playback (Position field) at the time (UpdateAt field) " +
                "specified in the attribute. The client may use the SampledPosition attribute to compute the current " +
                "position within the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and " +
                "PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute shall be " +
                "updated whenever a change in either the playback speed or the playback position is triggered " +
                "outside the normal playback of the media. The events which may cause this to happen include:" +
                "\n" +
                "  • Starting or resumption of playback" +
                "\n" +
                "  • Seeking" +
                "\n" +
                "  • Skipping forward or backward" +
                "\n" +
                "  • Fast-forwarding or rewinding" +
                "\n" +
                "  • Updating of playback speed as a result of explicit request, or as a result of buffering events",

            xref: { document: "cluster", section: "6.10.3.4" }
        },

        {
            tag: "attribute", name: "PlaybackSpeed", id: 0x4, type: "single", access: "R V", conformance: "AS",
            constraint: "desc", default: 0,

            details: "This shall indicate the speed at which the current media is being played. The new PlaybackSpeed" +
                "\n" +
                "shall be reflected in this attribute whenever any of the following occurs:" +
                "\n" +
                "  • Starting of playback" +
                "\n" +
                "  • Resuming of playback" +
                "\n" +
                "  • Fast-forwarding" +
                "\n" +
                "  • Rewinding" +
                "\n" +
                "The PlaybackSpeed shall reflect the ratio of time elapsed in the media to the actual time taken for " +
                "the playback assuming no changes to media playback (for example buffering events or requests to " +
                "pause/rewind/forward)." +
                "\n" +
                "  • A value for PlaybackSpeed of 1 shall indicate normal playback where, for example, playback for " +
                "    1 second causes the media to advance by 1 second within the duration of the media." +
                "\n" +
                "  • A value for PlaybackSpeed which is greater than 0 shall indicate that as playback is happening " +
                "    the media is currently advancing in time within the duration of the media." +
                "\n" +
                "  • A value for PlaybackSpeed which is less than 0 shall indicate that as playback is happening the " +
                "    media is currently going back in time within the duration of the media." +
                "\n" +
                "  • A value for PlaybackSpeed of 0 shall indicate that the media is currently not playing back. " +
                "    When the CurrentState attribute has the value of PAUSED, NOT_PLAYING or BUFFERING, the Playback" +
                "\n" +
                "Speed shall be set to 0 to reflect that the media is not playing." +
                "\n" +
                "Following examples illustrate the PlaybackSpeed attribute values in various conditions.",

            xref: { document: "cluster", section: "6.10.3.5" }
        },

        {
            tag: "attribute", name: "SeekRangeEnd", id: 0x5, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",

            details: "This shall indicate the furthest forward valid position to which a client may seek forward, in " +
                "milliseconds from the start of the media. When the media has an associated StartTime, a value of " +
                "null shall indicate that a seek forward is valid only until the current time within the media, " +
                "using a position computed from the difference between the current time offset and StartTime, in " +
                "milliseconds from start of the media, truncating fractional milliseconds towards 0. A value of Nas " +
                "when StartTime is not specified shall indicate that seeking forward is not allowed.",

            xref: { document: "cluster", section: "6.10.3.7" }
        },

        {
            tag: "attribute", name: "SeekRangeStart", id: 0x6, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",
            details: "This shall indicate the earliest valid position to which a client may seek back, in milliseconds " +
                "from start of the media. A value of Nas shall indicate that seeking backwards is not allowed.",
            xref: { document: "cluster", section: "6.10.3.6" }
        },

        {
            tag: "command", name: "Play", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play " +
                "shall return media to normal playback speed.",
            xref: { document: "cluster", section: "6.10.4.1" }
        },

        {
            tag: "command", name: "Pause", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall pause playback of the media.",
            xref: { document: "cluster", section: "6.10.4.2" }
        },

        {
            tag: "command", name: "Stop", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This " +
                "may navigate the user back to the location from where the media was originally launched.",
            xref: { document: "cluster", section: "6.10.4.3" }
        },

        {
            tag: "command", name: "StartOver", id: 0x3, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall Start Over with the current media playback item.",
            xref: { document: "cluster", section: "6.10.4.4" }
        },

        {
            tag: "command", name: "Previous", id: 0x4, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall cause the handler to be invoked for \"Previous\". User experience is " +
                "context-specific. This will often Go back to the previous media playback item.",
            xref: { document: "cluster", section: "6.10.4.5" }
        },

        {
            tag: "command", name: "Next", id: 0x5, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall cause the handler to be invoked for \"Next\". User experience is context- " +
                "specific. This will often Go forward to the next media playback item.",
            xref: { document: "cluster", section: "6.10.4.6" }
        },

        {
            tag: "command", name: "Rewind", id: 0x6, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",

            details: "Upon receipt, this shall start playback of the media backward in case the media is currently " +
                "playing in the forward direction or is not playing. If the playback is already happening in the " +
                "backwards direction receipt of this command shall increase the speed of the media playback back" +
                "\n" +
                "wards." +
                "\n" +
                "Different \"rewind\" speeds may be be reflected on the media playback device based upon the number of " +
                "sequential calls to this function and the capability of the device. This is to avoid needing to " +
                "define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported " +
                "it shall be updated to reflect the new speed of playback. If the playback speed cannot be changed " +
                "for the media being played(for example, in live streaming content not supporting seek), the status " +
                "of NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for " +
                "media playing backwards, the status of SPEED_OUT_OF_RANGE shall be returned.",

            xref: { document: "cluster", section: "6.10.4.7" }
        },

        {
            tag: "command", name: "FastForward", id: 0x7, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",

            details: "Upon receipt, this shall start playback of the media in the forward direction in case the media is " +
                "currently playing in the backward direction or is not playing. If the playback is already happening " +
                "in the forward direction receipt of this command shall increase the speed of the media playback." +
                "\n" +
                "Different \"fast-forward\" speeds may be be reflected on the media playback device based upon the " +
                "number of sequential calls to this function and the capability of the device. This is to avoid " +
                "needing to define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is " +
                "supported it shall be updated to reflect the new speed of playback. If the playback speed cannot be " +
                "changed for the media being played(for example, in live streaming content not supporting seek), the " +
                "status of NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported " +
                "speed for media playing forward, the status of SPEED_OUT_OF_RANGE shall be returned.",

            xref: { document: "cluster", section: "6.10.4.8" }
        },

        {
            tag: "command", name: "SkipForward", id: 0x8, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall Skip forward in the media by the given number of milliseconds.",
            xref: { document: "cluster", section: "6.10.4.9" },

            children: [{
                tag: "datatype", name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

                details: "This shall indicate the duration of the time span to skip forward in the media, in milliseconds. In " +
                    "case the resulting position falls in the middle of a frame, the server shall set the position to " +
                    "the beginning of that frame and set the SampledPosition attribute on the cluster accordingly. If " +
                    "the resultant position falls beyond the furthest valid position in the media the client may seek " +
                    "forward to, the position should be set to that furthest valid position. If the SampledPosition " +
                    "attribute is supported it shall be updated on the cluster accordingly.",

                xref: { document: "cluster", section: "6.10.4.9.1" }
            }]
        },

        {
            tag: "command", name: "SkipBackward", id: 0x9, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall Skip backward in the media by the given number of milliseconds.",
            xref: { document: "cluster", section: "6.10.4.10" },

            children: [{
                tag: "datatype", name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

                details: "This shall indicate the duration of the time span to skip backward in the media, in milliseconds. " +
                    "In case the resulting position falls in the middle of a frame, the server shall set the position to " +
                    "the beginning of that frame and set the SampledPosition attribute on the cluster accordingly. If " +
                    "the resultant position falls before the earliest valid position to which a client may seek back to, " +
                    "the position should be set to that earliest valid position. If the SampledPosition attribute is " +
                    "supported it shall be updated on the cluster accordingly.",

                xref: { document: "cluster", section: "6.10.4.10.1" }
            }]
        },

        {
            tag: "command", name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
            details: "This command shall be generated in response to various Playback Commands.",
            xref: { document: "cluster", section: "6.10.4.12" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
                    details: "This shall indicate the status of the command which resulted in this response.",
                    xref: { document: "cluster", section: "6.10.4.12.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O",
                    details: "This shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.10.4.12.2" }
                }
            ]
        },

        {
            tag: "command", name: "Seek", id: 0xb, access: "O", conformance: "AS", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall change the playback position in the media to the given position.",
            xref: { document: "cluster", section: "6.10.4.11" },

            children: [{
                tag: "datatype", name: "Position", id: 0x0, type: "uint64", conformance: "M",

                details: "This shall indicate the position (in milliseconds) in the media to seek to. In case the position " +
                    "falls in the middle of a frame, the server shall set the position to the beginning of that frame " +
                    "and set the SampledPosition attribute on the cluster accordingly. If the position falls before the " +
                    "earliest valid position or beyond the furthest valid position to which a client may seek back or " +
                    "forward to respectively, the status of SEEK_OUT_OF_RANGE shall be returned and no change shall be " +
                    "made to the position of the playback.",

                xref: { document: "cluster", section: "6.10.4.11.1" }
            }]
        },

        {
            tag: "datatype", name: "PlaybackStateEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.10.5.1" },

            children: [
                {
                    tag: "datatype", name: "Playing", id: 0x0, conformance: "M",
                    description: "Media is currently playing (includes FF and REW)"
                },
                {
                    tag: "datatype", name: "Paused", id: 0x1, conformance: "M",
                    description: "Media is currently paused"
                },
                {
                    tag: "datatype", name: "NotPlaying", id: 0x2, conformance: "M",
                    description: "Media is not currently playing"
                },
                {
                    tag: "datatype", name: "Buffering", id: 0x3, conformance: "M",
                    description: "Media is not currently buffering and playback will start when buffer has been filled"
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.10.5.2" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "InvalidStateForCommand", id: 0x1, conformance: "M",
                    description: "Command failed: Requested playback command is invalid in the current playback state."
                },
                {
                    tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M",
                    description: "Command failed: Requested playback command is not allowed in the current playback state. For example, attempting to fast-forward during a commercial might return NotAllowed."
                },
                {
                    tag: "datatype", name: "NotActive", id: 0x3, conformance: "M",
                    description: "Command failed: This endpoint is not active for playback."
                },
                {
                    tag: "datatype", name: "SpeedOutOfRange", id: 0x4, conformance: "VS",
                    description: "Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the fastest speed supported by the server in the respective direction."
                },
                {
                    tag: "datatype", name: "SeekOutOfRange", id: 0x5, conformance: "AS",
                    description: "Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of the media."
                }
            ]
        },

        {
            tag: "datatype", name: "PlaybackPositionStruct", type: "struct", conformance: "M",
            details: "This structure defines a playback position within a media stream being played.",
            xref: { document: "cluster", section: "6.10.5.3" },

            children: [
                {
                    tag: "datatype", name: "UpdatedAt", id: 0x0, type: "epoch-us", conformance: "M",
                    details: "This shall indicate the time when the position was last updated.",
                    xref: { document: "cluster", section: "6.10.5.3.1" }
                },

                {
                    tag: "datatype", name: "Position", id: 0x1, type: "uint64", conformance: "M", quality: "X",

                    details: "This shall indicate the associated discrete position within the media stream, in milliseconds from " +
                        "the beginning of the stream, being associated with the time indicated by the UpdatedAt field. The " +
                        "Position shall not be greater than the duration of the media if duration is specified. The Position " +
                        "shall not be greater than the time difference between current time and start time of the media when " +
                        "start time is specified." +
                        "\n" +
                        "A value of null shall indicate that playback position is not applicable for the current state of " +
                        "the media playback (For example : Live media with no known duration and where seek is not " +
                        "supported).",

                    xref: { document: "cluster", section: "6.10.5.3.2" }
                }
            ]
        }
    ]
});
