/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const MediaPlayback = Cluster(
    {
        name: "MediaPlayback", id: 0x506, classification: "application", pics: "MEDIAPLAYBACK",
        details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
            "device such as a TV, Set-top Box, or Smart Speaker." +
            "\n" +
            "This cluster server would be supported on Video Player devices or endpoints that provide media " +
            "playback, such as a Content App. This cluster provides an interface for controlling Media Playback.",
        xref: { document: "cluster", section: "6.10" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.10.4" } },

        Field({
            name: "AS", constraint: "0", description: "AdvancedSeek",
            details: "This feature provides access to the time offset location within current playback media and allows " +
                "for jumping to a specific location using time offsets. This enables clients to implement more " +
                "advanced media seeking behavior in their user interface, for instance a \"seek bar\".",
            xref: { document: "cluster", section: "6.10.4.1" }
        }),

        Field({
            name: "VS", constraint: "1", description: "VariableSpeed",
            details: "This feature is for a device which supports variable speed playback on media that supports it.",
            xref: { document: "cluster", section: "6.10.4.2" }
        }),
        Field({
            name: "TT", constraint: "2", description: "TextTracks",
            details: "This feature is for a device or app that supports Text Tracks.",
            xref: { document: "cluster", section: "6.10.4.3" }
        }),
        Field({
            name: "AT", constraint: "3", description: "AudioTracks",
            details: "This feature is for a device or app that supports Audio Tracks.",
            xref: { document: "cluster", section: "6.10.4.4" }
        }),

        Field({
            name: "AA", constraint: "4", description: "AudioAdvance",

            details: "This feature is for a device or app that supports playing audio during fast and slow advance and" +
                "\n" +
                "rewind (e.g., while playback speed is not 1). A device that supports this feature may only support " +
                "playing audio during certain speeds." +
                "\n" +
                "A cluster implementing AA shall implement AS.",

            xref: { document: "cluster", section: "6.10.4.5" }
        })
    ),

    Attribute({
        name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", access: "R V", conformance: "M",
        constraint: "desc",
        details: "Indicates the current playback state of media." +
            "\n" +
            "During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.",
        xref: { document: "cluster", section: "6.10.6.1" }
    }),

    Attribute({
        name: "StartTime", id: 0x1, type: "epoch-us", access: "R V", conformance: "AS", constraint: "desc",
        default: null, quality: "X",
        details: "Indicates the start time of the media, in case the media has a fixed start time (for example, live " +
            "stream or television broadcast), or null when start time does not apply to the current media (for " +
            "example, video-on-demand). This time is a UTC time. The client needs to handle conversion to local " +
            "time, as required, taking in account time zone and possible local DST offset.",
        xref: { document: "cluster", section: "6.10.6.2" }
    }),

    Attribute({
        name: "Duration", id: 0x2, type: "uint64", access: "R V", conformance: "AS", constraint: "desc",
        default: null, quality: "X",
        details: "Indicates the duration, in milliseconds, of the current media being played back" +
            "\n" +
            "or null when duration is not applicable (for example, in live streaming content with no known " +
            "duration). This attribute shall never be 0.",
        xref: { document: "cluster", section: "6.10.6.3" }
    }),

    Attribute({
        name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", access: "R V", conformance: "AS",
        constraint: "desc", default: null, quality: "X",

        details: "Indicates the position of playback (Position field) at the time (UpdateAt field) specified in the " +
            "attribute. The client may use the SampledPosition attribute to compute the current position within " +
            "the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and " +
            "PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute shall be " +
            "updated whenever a change in either the playback speed or the playback position is triggered outside " +
            "the normal playback of the media. The events which may cause this to happen include:" +
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

        xref: { document: "cluster", section: "6.10.6.4" }
    }),

    Attribute({
        name: "PlaybackSpeed", id: 0x4, type: "single", access: "R V", conformance: "AS",
        constraint: "desc", default: 0,

        details: "Indicates the speed at which the current media is being played. The new PlaybackSpeed shall be " +
            "reflected in this attribute whenever any of the following occurs:" +
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
            "  • A value for PlaybackSpeed of 1 shall indicate normal playback where, for example, playback for 1 " +
            "    second causes the media to advance by 1 second within the duration of the media." +
            "\n" +
            "  • A value for PlaybackSpeed which is greater than 0 shall indicate that as playback is happening " +
            "    the media is currently advancing in time within the duration of the media." +
            "\n" +
            "  • A value for PlaybackSpeed which is less than 0 shall indicate that as playback is happening the " +
            "    media is currently going back in time within the duration of the media." +
            "\n" +
            "  • A value for PlaybackSpeed of 0 shall indicate that the media is currently not playing back. When " +
            "    the CurrentState attribute has the value of PAUSED, NOT_PLAYING or BUFFERING, the PlaybackSpeed " +
            "    shall be set to 0 to reflect that the media is not playing." +
            "\n" +
            "Following examples illustrate the PlaybackSpeed attribute values in various conditions.",

        xref: { document: "cluster", section: "6.10.6.5" }
    }),

    Attribute({
        name: "SeekRangeEnd", id: 0x5, type: "uint64", access: "R V", conformance: "AS", constraint: "desc",
        default: null, quality: "X",

        details: "Indicates the furthest forward valid position to which a client may seek forward, in milliseconds " +
            "from the start of the media. When the media has an associated StartTime, a value of null shall " +
            "indicate that a seek forward is valid only until the current time within the media, using a position " +
            "computed from the difference between the current time offset and StartTime, in milliseconds from " +
            "start of the media, truncating fractional milliseconds towards 0. A value of Nas when StartTime is " +
            "not specified shall indicate that seeking forward is not allowed.",

        xref: { document: "cluster", section: "6.10.6.7" }
    }),

    Attribute({
        name: "SeekRangeStart", id: 0x6, type: "uint64", access: "R V", conformance: "AS",
        constraint: "desc", default: null, quality: "X",
        details: "Indicates the earliest valid position to which a client may seek back, in milliseconds from start of " +
            "the media. A value of Nas shall indicate that seeking backwards is not allowed.",
        xref: { document: "cluster", section: "6.10.6.6" }
    }),

    Attribute({
        name: "ActiveAudioTrack", id: 0x7, type: "TrackStruct", access: "R V", conformance: "AT",
        constraint: "desc", default: null, quality: "X",
        details: "ActiveTrack refers to the Audio track currently set and being used for the streaming media. A value " +
            "of null shall indicate that no Audio Track corresponding to the current media is currently being " +
            "played.",
        xref: { document: "cluster", section: "6.10.6.8" }
    }),

    Attribute(
        {
            name: "AvailableAudioTracks", id: 0x8, type: "list", access: "R V", conformance: "AT",
            constraint: "desc", default: null, quality: "X",
            details: "AvailableAudioTracks refers to the list of Audio tracks available for the current title being " +
                "played. A value of null shall indicate that no Audio Tracks corresponding to the current media are " +
                "selectable by the client.",
            xref: { document: "cluster", section: "6.10.6.9" }
        },

        Field({ name: "entry", type: "TrackStruct" })
    ),

    Attribute({
        name: "ActiveTextTrack", id: 0x9, type: "TrackStruct", access: "R V", conformance: "TT",
        constraint: "desc", default: null, quality: "X",
        details: "ActiveTrack refers to the Text track currently set and being used for the streaming media. This can " +
            "be nil. A value of null shall indicate that no Text Track corresponding to the current media is " +
            "currently being displayed.",
        xref: { document: "cluster", section: "6.10.6.10" }
    }),

    Attribute(
        {
            name: "AvailableTextTracks", id: 0xa, type: "list", access: "R V", conformance: "TT",
            constraint: "desc", default: null, quality: "X",
            details: "AvailableTextTracks refers to the list of Text tracks available for the current title being played. " +
                "This can be an empty list. A value of null shall indicate that no Text Tracks corresponding to the " +
                "current media are selectable by the client.",
            xref: { document: "cluster", section: "6.10.6.11" }
        },

        Field({ name: "entry", type: "TrackStruct" })
    ),

    Event(
        {
            name: "StateChanged", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "If supported, this event shall be generated when there is a change in any of the supported " +
                "attributes of the Media Playback cluster.",
            xref: { document: "cluster", section: "6.10.8.1" }
        },

        Field({
            name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the updated playback state as defined by the CurrentState attribute, and " +
                "has the same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.1" }
        }),

        Field({
            name: "StartTime", id: 0x1, type: "epoch-us", conformance: "AS", constraint: "desc",
            details: "This field shall indicate the updated start time as defined by the StartTime attribute, and has the " +
                "same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.2" }
        }),

        Field({
            name: "Duration", id: 0x2, type: "uint64", conformance: "AS", constraint: "desc",
            details: "This field shall indicate the updated duration as defined by the Duration attribute, and has the " +
                "same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.3" }
        }),

        Field({
            name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", conformance: "AS",
            constraint: "desc",
            details: "This field shall indicate the updated position of playback as defined by the SampledPosition " +
                "attribute, and has the same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.4" }
        }),

        Field({
            name: "PlaybackSpeed", id: 0x4, type: "single", conformance: "AS", constraint: "desc",
            details: "This field shall indicate the updated speed at which the current media is being played as defined by " +
                "the PlaybackSpeed attribute, and has the same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.5" }
        }),

        Field({
            name: "SeekRangeEnd", id: 0x5, type: "uint64", conformance: "AS", constraint: "desc",
            details: "This field shall indicate the updated start of the seek range end as defined by the SeekRangeEnd " +
                "attribute, and has the same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.7" }
        }),

        Field({
            name: "SeekRangeStart", id: 0x6, type: "uint64", conformance: "AS", constraint: "desc",
            details: "This field shall indicate the updated start of the seek range start as defined by the SeekRangeStart " +
                "attribute, and has the same constraint as that attribute.",
            xref: { document: "cluster", section: "6.10.8.1.6" }
        }),

        Field({
            name: "Data", id: 0x7, type: "octstr", conformance: "O", constraint: "max 900",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.10.8.1.8" }
        }),

        Field({
            name: "AudioAdvanceUnmuted", id: 0x8, type: "bool", conformance: "AA", constraint: "desc",
            default: false,

            details: "This field shall indicate whether audio is unmuted by the player due to a FF or REW command. This " +
                "field is only meaningful when the PlaybackSpeed is present and not equal to 0 (paused) or 1 (normal " +
                "playback). Typically the value will be false (muted), however, some players will play audio during " +
                "certain fast forward and rewind speeds, and in these cases, the value will be true (not muted)." +
                "\n" +
                "A value of true does not guarantee that audio can be heard by the user since the speaker may be " +
                "muted, turned down to a low level and/or unplugged.",

            xref: { document: "cluster", section: "6.10.8.1.9" }
        })
    ),

    Command({
        name: "Play", id: 0x0, access: "O", conformance: "M", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play " +
            "shall return media to normal playback speed.",
        xref: { document: "cluster", section: "6.10.7.1" }
    }),

    Command({
        name: "Pause", id: 0x1, access: "O", conformance: "M", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall pause playback of the media.",
        xref: { document: "cluster", section: "6.10.7.2" }
    }),

    Command({
        name: "Stop", id: 0x2, access: "O", conformance: "M", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This " +
            "may navigate the user back to the location from where the media was originally launched.",
        xref: { document: "cluster", section: "6.10.7.3" }
    }),

    Command({
        name: "StartOver", id: 0x3, access: "O", conformance: "O", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall Start Over with the current media playback item.",
        xref: { document: "cluster", section: "6.10.7.4" }
    }),

    Command({
        name: "Previous", id: 0x4, access: "O", conformance: "O", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall cause the handler to be invoked for \"Previous\". User experience is " +
            "context-specific. This will often Go back to the previous media playback item.",
        xref: { document: "cluster", section: "6.10.7.5" }
    }),

    Command({
        name: "Next", id: 0x5, access: "O", conformance: "O", direction: "request",
        response: "PlaybackResponse",
        details: "Upon receipt, this shall cause the handler to be invoked for \"Next\". User experience is context- " +
            "specific. This will often Go forward to the next media playback item.",
        xref: { document: "cluster", section: "6.10.7.6" }
    }),

    Command(
        {
            name: "Rewind", id: 0x6, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",

            details: "Upon receipt, this shall start playback of the media backward in case the media is currently playing " +
                "in the forward direction or is not playing. If the playback is already happening in the backwards " +
                "direction receipt of this command shall increase the speed of the media playback backwards." +
                "\n" +
                "Different \"rewind\" speeds may be reflected on the media playback device based upon the number of " +
                "sequential calls to this function and the capability of the device. This is to avoid needing to " +
                "define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it " +
                "shall be updated to reflect the new speed of playback. If the playback speed cannot be changed for " +
                "the media being played(for example, in live streaming content not supporting seek), the status of " +
                "NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for " +
                "media playing backwards, the status of SPEED_OUT_OF_RANGE shall be returned.",

            xref: { document: "cluster", section: "6.10.7.7" }
        },

        Field({
            name: "AudioAdvanceUnmuted", id: 0x0, type: "bool", conformance: "AA", default: false,
            details: "This field shall indicate whether audio should be unmuted by the player during rewind." +
                "\n" +
                "A value of true does not guarantee that audio can be heard by the user since the speaker may be " +
                "muted, turned down to a low level and/or unplugged.",
            xref: { document: "cluster", section: "6.10.7.7.1" }
        })
    ),

    Command(
        {
            name: "FastForward", id: 0x7, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",

            details: "Upon receipt, this shall start playback of the media in the forward direction in case the media is" +
                "\n" +
                "currently playing in the backward direction or is not playing. If the playback is already happening " +
                "in the forward direction receipt of this command shall increase the speed of the media playback." +
                "\n" +
                "Different \"fast-forward\" speeds may be reflected on the media playback device based upon the number " +
                "of sequential calls to this function and the capability of the device. This is to avoid needing to " +
                "define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it " +
                "shall be updated to reflect the new speed of playback. If the playback speed cannot be changed for " +
                "the media being played(for example, in live streaming content not supporting seek), the status of " +
                "NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for " +
                "media playing forward, the status of SPEED_OUT_OF_RANGE shall be returned.",

            xref: { document: "cluster", section: "6.10.7.8" }
        },

        Field({
            name: "AudioAdvanceUnmuted", id: 0x0, type: "bool", conformance: "AA", default: false,
            details: "This field shall indicate whether audio should be unmuted by the player during fast forward." +
                "\n" +
                "A value of true does not guarantee that audio can be heard by the user since the speaker may be " +
                "muted, turned down to a low level and/or unplugged.",
            xref: { document: "cluster", section: "6.10.7.8.1" }
        })
    ),

    Command(
        {
            name: "SkipForward", id: 0x8, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall Skip forward in the media by the given number of milliseconds.",
            xref: { document: "cluster", section: "6.10.7.9" }
        },

        Field({
            name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

            details: "This field shall indicate the duration of the time span to skip forward in the media, in " +
                "milliseconds. In case the resulting position falls in the middle of a frame, the server shall set " +
                "the position to the beginning of that frame and set the SampledPosition attribute on the cluster " +
                "accordingly. If the resultant position falls beyond the furthest valid position in the media the " +
                "client may seek forward to, the position should be set to that furthest valid position. If the " +
                "SampledPosition attribute is supported it shall be updated on the cluster accordingly.",

            xref: { document: "cluster", section: "6.10.7.9.1" }
        })
    ),

    Command(
        {
            name: "SkipBackward", id: 0x9, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall Skip backward in the media by the given number of milliseconds.",
            xref: { document: "cluster", section: "6.10.7.10" }
        },

        Field({
            name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

            details: "This field shall indicate the duration of the time span to skip backward in the media, in " +
                "milliseconds. In case the resulting position falls in the middle of a frame, the server shall set " +
                "the position to the beginning of that frame and set the SampledPosition attribute on the cluster " +
                "accordingly. If the resultant position falls before the earliest valid position to which a client " +
                "may seek back to, the position should be set to that earliest valid position. If the SampledPosition " +
                "attribute is supported it shall be updated on the cluster accordingly.",

            xref: { document: "cluster", section: "6.10.7.10.1" }
        })
    ),

    Command(
        {
            name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
            details: "This command shall be generated in response to various Playback Commands.",
            xref: { document: "cluster", section: "6.10.7.12" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the status of the command which resulted in this response.",
            xref: { document: "cluster", section: "6.10.7.12.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O", constraint: "any",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.10.7.12.2" }
        })
    ),

    Command(
        {
            name: "Seek", id: 0xb, access: "O", conformance: "AS", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this shall change the playback position in the media to the given position.",
            xref: { document: "cluster", section: "6.10.7.11" }
        },

        Field({
            name: "Position", id: 0x0, type: "uint64", conformance: "M",

            details: "This field shall indicate the position (in milliseconds) in the media to seek to. In case the " +
                "position falls in the middle of a frame, the server shall set the position to the beginning of that " +
                "frame and set the SampledPosition attribute on the cluster accordingly. If the position falls before " +
                "the earliest valid position or beyond the furthest valid position to which a client may seek back or " +
                "forward to respectively, the status of SEEK_OUT_OF_RANGE shall be returned and no change shall be " +
                "made to the position of the playback.",

            xref: { document: "cluster", section: "6.10.7.11.1" }
        })
    ),

    Command(
        {
            name: "ActivateAudioTrack", id: 0xc, access: "O", conformance: "AT", direction: "request",
            response: "status",
            details: "Upon receipt, the server shall set the active Audio Track to the one identified by the TrackID in " +
                "the Track catalog for the streaming media. If the TrackID does not exist in the Track catalog, OR " +
                "does not correspond to the streaming media OR no media is being streamed at the time of receipt of " +
                "this command, the server will return an error status of INVALID_ARGUMENT.",
            xref: { document: "cluster", section: "6.10.7.13" }
        },

        Field({
            name: "TrackId", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall indicate the Audio Track to activate.",
            xref: { document: "cluster", section: "6.10.7.13.1" }
        }),

        Field({
            name: "AudioOutputIndex", id: 0x1, type: "uint8", conformance: "AT", quality: "X",
            details: "This value is the index field of the OutputInfoStruct from the OutputList attribute (from the " +
                "AudioOutput cluster) and indicates which audio output the Audio Track should be played on. This " +
                "field is absent for Text Tracks and only present for Audio Tracks. A value of null shall indicate " +
                "that the server can choose the audio output(s) to play the Audio Track on.",
            xref: { document: "cluster", section: "6.10.7.13.2" }
        })
    ),

    Command(
        {
            name: "ActivateTextTrack", id: 0xd, access: "O", conformance: "TT", direction: "request",
            response: "status",
            details: "Upon receipt, the server shall set the active Text Track to the one identified by the TrackID in the " +
                "Track catalog for the streaming media. If the TrackID does not exist in the Track catalog, OR does " +
                "not correspond to the streaming media OR no media is being streamed at the time of receipt of this " +
                "command, the server shall return an error status of INVALID_ARGUMENT.",
            xref: { document: "cluster", section: "6.10.7.14" }
        },

        Field({
            name: "TrackId", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall indicate the Text Track to activate.",
            xref: { document: "cluster", section: "6.10.7.14.1" }
        })
    ),

    Command({
        name: "DeactivateTextTrack", id: 0xe, access: "O", conformance: "TT", direction: "request",
        response: "status",
        details: "If a Text Track is active (i.e. being displayed), upon receipt of this command, the server shall " +
            "stop displaying it.",
        xref: { document: "cluster", section: "6.10.7.15" }
    }),

    Datatype(
        { name: "PlaybackStateEnum", type: "enum8", xref: { document: "cluster", section: "6.10.5.1" } },
        Field({ name: "Playing", id: 0x0, conformance: "M", description: "Media is currently playing (includes FF and REW)" }),
        Field({ name: "Paused", id: 0x1, conformance: "M", description: "Media is currently paused" }),
        Field({ name: "NotPlaying", id: 0x2, conformance: "M", description: "Media is not currently playing" }),
        Field({
            name: "Buffering", id: 0x3, conformance: "M",
            description: "Media is not currently buffering and playback will start when buffer has been filled"
        })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.10.5.2" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Succeeded" }),
        Field({
            name: "InvalidStateForCommand", id: 0x1, conformance: "M",
            description: "Requested playback command is invalid in the current playback state."
        }),
        Field({
            name: "NotAllowed", id: 0x2, conformance: "M",
            description: "Requested playback command is not allowed in the current playback state. For example, attempting to fast-forward during a commercial might return NotAllowed."
        }),
        Field({ name: "NotActive", id: 0x3, conformance: "M", description: "This endpoint is not active for playback." }),
        Field({
            name: "SpeedOutOfRange", id: 0x4, conformance: "VS",
            description: "The FastForward or Rewind Command was issued but the media is already playing back at the fastest speed supported by the server in the respective direction."
        }),
        Field({
            name: "SeekOutOfRange", id: 0x5, conformance: "AS",
            description: "The Seek Command was issued with a value of position outside of the allowed seek range of the media."
        })
    ),

    Datatype(
        { name: "CharacteristicEnum", type: "enum8", xref: { document: "cluster", section: "6.10.5.3" } },
        Field({
            name: "ForcedSubtitles", id: 0x0, conformance: "M",
            description: "Textual information meant for display when no other text representation is selected. It is used to clarify dialogue, alternate languages, texted graphics or location/person IDs that are not otherwise covered in the dubbed/localized audio."
        }),
        Field({
            name: "DescribesVideo", id: 0x1, conformance: "M",
            description: "Textual or audio media component containing a textual description (intended for audio synthesis) or an audio description describing a visual component"
        }),
        Field({
            name: "EasyToRead", id: 0x2, conformance: "M",
            description: "Simplified or reduced captions as specified in [United States Code Title 47 CFR 79.103(c)(9)]."
        }),
        Field({
            name: "FrameBased", id: 0x3, conformance: "M",
            description: "A media characteristic that indicates that a track selection option includes frame-based content."
        }),
        Field({
            name: "MainProgram", id: 0x4, conformance: "M",
            description: "Main media component(s) which is/are intended for presentation if no other information is provided"
        }),
        Field({
            name: "OriginalContent", id: 0x5, conformance: "M",
            description: "A media characteristic that indicates that a track or media selection option contains original content."
        }),
        Field({
            name: "VoiceOverTranslation", id: 0x6, conformance: "M",
            description: "A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog."
        }),
        Field({
            name: "Caption", id: 0x7, conformance: "M",
            description: "Textual media component containing transcriptions of spoken dialog and auditory cues such as sound effects and music for the hearing impaired."
        }),
        Field({ name: "Subtitle", id: 0x8, conformance: "M", description: "Textual transcriptions of spoken dialog." }),
        Field({
            name: "Alternate", id: 0x9, conformance: "M",
            description: "Textual media component containing transcriptions of spoken dialog and auditory cues such as sound effects and music for the hearing impaired."
        }),
        Field({
            name: "Supplementary", id: 0xa, conformance: "M",
            description: "Media content component that is supplementary to a media content component of a different media component type."
        }),
        Field({
            name: "Commentary", id: 0xb, conformance: "M",
            description: "Experience that contains a commentary (e.g. director’s commentary) (typically audio)"
        }),
        Field({
            name: "DubbedTranslation", id: 0xc, conformance: "M",
            description: "Experience that contains an element that is presented in a different language from the original (e.g. dubbed audio, translated captions)"
        }),
        Field({
            name: "Description", id: 0xd, conformance: "M",
            description: "Textual or audio media component containing a textual description (intended for audio synthesis) or an audio description describing a visual component"
        }),
        Field({
            name: "Metadata", id: 0xe, conformance: "M",
            description: "Media component containing information intended to be processed by application specific elements."
        }),
        Field({
            name: "EnhancedAudioIntelligibility", id: 0xf, conformance: "M",
            description: "Experience containing an element for improved intelligibility of the dialogue."
        }),
        Field({
            name: "Emergency", id: 0x10, conformance: "M",
            description: "Experience that provides information, about a current emergency, that is intended to enable the protection of life, health, safety, and property, and may also include critical details regarding the emergency and how to respond to the emergency."
        }),
        Field({
            name: "Karaoke", id: 0x11, conformance: "M",
            description: "Textual representation of a songs’ lyrics, usually in the same language as the associated song as specified in [SMPTE ST 2067-2]."
        })
    ),

    Datatype(
        {
            name: "PlaybackPositionStruct", type: "struct",
            details: "This structure defines a playback position within a media stream being played.",
            xref: { document: "cluster", section: "6.10.5.4" }
        },
        Field({
            name: "UpdatedAt", id: 0x0, type: "epoch-us", conformance: "M",
            details: "This field shall indicate the time when the position was last updated.",
            xref: { document: "cluster", section: "6.10.5.4.1" }
        }),

        Field({
            name: "Position", id: 0x1, type: "uint64", conformance: "M", quality: "X",

            details: "This field shall indicate the associated discrete position within the media stream, in milliseconds " +
                "from the beginning of the stream, being associated with the time indicated by the UpdatedAt field. " +
                "The Position shall NOT be greater than the duration of the media if duration is specified. The " +
                "Position shall NOT be greater than the time difference between current time and start time of the " +
                "media when start time is specified." +
                "\n" +
                "A value of null shall indicate that playback position is not applicable for the current state of the " +
                "media playback (For example : Live media with no known duration and where seek is not supported).",

            xref: { document: "cluster", section: "6.10.5.4.2" }
        })
    ),

    Datatype(
        {
            name: "TrackStruct", type: "struct",
            details: "This structure defines a uniquely identifiable Text Track or Audio Track.",
            xref: { document: "cluster", section: "6.10.5.5" }
        },

        Field({
            name: "Id", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall indicate the Identifier for the Track which is unique within the Track catalog. The " +
                "Track catalog contains all the Text/Audio tracks corresponding to the main media content.",
            xref: { document: "cluster", section: "6.10.5.5.1" }
        }),

        Field({
            name: "TrackAttributes", id: 0x1, type: "TrackAttributesStruct", conformance: "M",
            details: "This field shall indicate the Attributes associated to the Track, like languageCode.",
            xref: { document: "cluster", section: "6.10.5.5.2" }
        })
    ),

    Datatype(
        {
            name: "TrackAttributesStruct", type: "struct",
            details: "This structure includes the attributes associated with a Text/Audio Track",
            xref: { document: "cluster", section: "6.10.5.6" }
        },

        Field({
            name: "LanguageCode", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "The value is a String containing one of the standard Tags for Identifying Languages RFC 5646, which " +
                "identifies the primary language used in the Track.",
            xref: { document: "cluster", section: "6.10.5.6.1" }
        }),

        Field(
            {
                name: "Characteristics", id: 0x1, type: "list", conformance: "O", default: null, quality: "X",
                details: "This is a list of enumerated CharacteristicEnum values that indicate a purpose, trait or feature " +
                    "associated with the Track. A value of null shall indicate that there are no Characteristics " +
                    "corresponding to the Track.",
                xref: { document: "cluster", section: "6.10.5.6.2" }
            },

            Field({ name: "entry", type: "CharacteristicEnum" })
        ),

        Field({
            name: "DisplayName", id: 0x2, type: "string", conformance: "O", constraint: "max 256",
            default: null, quality: "X",
            details: "The value is a String containing a user displayable name for the Track. A value of null shall " +
                "indicate that there is no DisplayName corresponding to the Track.",
            xref: { document: "cluster", section: "6.10.5.6.3" }
        })
    )
);

MatterDefinition.children.push(MediaPlayback);
