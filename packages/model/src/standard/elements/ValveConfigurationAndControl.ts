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

export const ValveConfigurationAndControl = Cluster(
    {
        name: "ValveConfigurationAndControl", id: 0x81, classification: "application", pics: "VALCC",
        details: "This cluster is used to configure a valve.",
        xref: { document: "cluster", section: "4.6" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "4.6.4" } },

        Field({
            name: "TS", conformance: "desc", constraint: "0", description: "TimeSync",
            details: "This feature shall indicate that the valve uses Time Synchronization and UTC time to indicate " +
                "duration and auto close time." +
                "\n" +
                "This feature shall NOT be supported unless the device supports the Time Synchronization cluster.",
            xref: { document: "cluster", section: "4.6.4.1" }
        }),

        Field({
            name: "LVL", conformance: "O", constraint: "1", description: "Level",
            details: "This feature shall indicate that the valve is capable of being adjusted to a specific position, as a " +
                "percentage, of its full range of motion.",
            xref: { document: "cluster", section: "4.6.4.2" }
        })
    ),

    Attribute({
        name: "OpenDuration", id: 0x0, type: "elapsed-s", access: "R V", conformance: "M",
        constraint: "min 1", default: null, quality: "X",
        details: "Indicates the total duration, in seconds, for which the valve will remain open for this current " +
            "opening." +
            "\n" +
            "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
            "until closed by the user or some other automation.",
        xref: { document: "cluster", section: "4.6.7.1" }
    }),

    Attribute({
        name: "DefaultOpenDuration", id: 0x1, type: "elapsed-s", access: "RW VO", conformance: "M",
        constraint: "min 1", default: null, quality: "X N",
        details: "Indicates the default duration, in seconds, for which the valve will remain open, if the " +
            "OpenDuration field is not present in the Open command." +
            "\n" +
            "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
            "until closed by the user or some other automation.",
        xref: { document: "cluster", section: "4.6.7.2" }
    }),

    Attribute({
        name: "AutoCloseTime", id: 0x2, type: "epoch-us", access: "R V", conformance: "TS", default: null,
        quality: "X",

        details: "Indicates the UTC time when the valve will close, depending on value of the OpenDuration attribute." +
            "\n" +
            "Null:" +
            "\n" +
            "  • When OpenDuration is null, or" +
            "\n" +
            "  • When the valve does not have a synchronized UTCTime in the Time Synchronization cluster, or" +
            "\n" +
            "  • When the valve is closed." +
            "\n" +
            "When the value of this attribute is earlier or equal to the current UTC time, the valve shall " +
            "automatically transition to its closed position. The behavior of transitioning to the closed " +
            "position, shall match the behavior described in the Close command." +
            "\n" +
            "If this attribute is not null and the Time Synchronization cluster receives a SetUTCTime command, " +
            "modifying the current UTC time of the device, the value of this attribute shall be adjusted to match " +
            "the new UTC time plus the value of the RemainingDuration attribute.",

        xref: { document: "cluster", section: "4.6.7.3" }
    }),

    Attribute({
        name: "RemainingDuration", id: 0x3, type: "elapsed-s", access: "R V", conformance: "M",
        default: null, quality: "X Q",

        details: "Indicates the remaining duration, in seconds, until the valve closes. Null:" +
            "\n" +
            "  • When OpenDuration is null, or" +
            "\n" +
            "  • When the valve is closed." +
            "\n" +
            "The value of this attribute shall only be reported in the following cases:" +
            "\n" +
            "  • When it changes from null to any other value and vice versa, or" +
            "\n" +
            "  • When it changes to 0, or" +
            "\n" +
            "  • When it increases, or" +
            "\n" +
            "  • When the closing time changes." +
            "\n" +
            "Meaning that clients SHOULD NOT rely on the reporting of this attribute in order to keep track of " +
            "the remaining duration, due to this attribute not being reported during regular countdown." +
            "\n" +
            "When reading this attribute it shall return the remaining duration, in seconds, until the valve " +
            "closes." +
            "\n" +
            "When the value of this attribute counts down to 0, the valve shall automatically transition to its " +
            "closed position. The behavior of transitioning to the closed position shall match the behavior " +
            "described in the Close command.",

        xref: { document: "cluster", section: "4.6.7.4" }
    }),

    Attribute({
        name: "CurrentState", id: 0x4, type: "ValveStateEnum", access: "R V", conformance: "M",
        default: null, quality: "X",
        details: "Indicates the current state of the valve." +
            "\n" +
            "A value of null shall indicate that the current state is not known.",
        xref: { document: "cluster", section: "4.6.7.5" }
    }),

    Attribute({
        name: "TargetState", id: 0x5, type: "ValveStateEnum", access: "R V", conformance: "M",
        default: null, quality: "X",
        details: "Indicates the target state, while changing the state, of the valve." +
            "\n" +
            "A value of null shall indicate that no target position is set, since the change in state is either " +
            "done or failed.",
        xref: { document: "cluster", section: "4.6.7.6" }
    }),

    Attribute({
        name: "CurrentLevel", id: 0x6, type: "percent", access: "R V", conformance: "LVL", default: null,
        quality: "X",

        details: "Indicates the current level of the valve as a percentage value, between fully closed and fully open. " +
            "During a transition from one level to another level, the valve SHOULD keep this attribute updated to " +
            "the best of its ability, in order to represent the actual level of the valve during the movement." +
            "\n" +
            "A value of 100 percent shall indicate the fully open position. A value of 0 percent shall indicate " +
            "the fully closed position." +
            "\n" +
            "A value of null shall indicate that the current state is not known.",

        xref: { document: "cluster", section: "4.6.7.7" }
    }),

    Attribute({
        name: "TargetLevel", id: 0x7, type: "percent", access: "R V", conformance: "LVL", default: null,
        quality: "X",

        details: "Indicates the target level of the valve as a percentage value, between fully closed and fully open." +
            "\n" +
            "The interpretation of the percentage value is the same as for the CurrentLevel attribute." +
            "\n" +
            "A value of null shall indicate that no target position is set, since the change of level is either " +
            "done or failed.",

        xref: { document: "cluster", section: "4.6.7.8" }
    }),

    Attribute({
        name: "DefaultOpenLevel", id: 0x8, type: "percent", access: "RW VO", conformance: "[LVL]",
        constraint: "1 to 100", default: 100, quality: "N",

        details: "Indicates the default value used for the TargetLevel attribute, when a valve transitions from the " +
            "closed to the open state, caused by an Open command, if a TargetLevel field is not present in the " +
            "Open command." +
            "\n" +
            "If the LevelStep attribute is present and the value of a write interaction to this attribute field " +
            "is not 100, the value shall be a supported value as defined by the LevelStep attribute, such that " +
            "(Value received in the write interaction) % (Value of LevelStep attribute) equals 0. If the " +
            "resulting value is not 0, the requested DefaultOpenLevel value is considered an unsupported value " +
            "and a CONSTRAINT_ERROR status shall be returned.",

        xref: { document: "cluster", section: "4.6.7.9" }
    }),

    Attribute({
        name: "ValveFault", id: 0x9, type: "ValveFaultBitmap", access: "R V", conformance: "O", default: 0,
        details: "Indicates any faults registered by the valve.",
        xref: { document: "cluster", section: "4.6.7.10" }
    }),

    Attribute({
        name: "LevelStep", id: 0xa, type: "uint8", access: "R V", conformance: "[LVL]",
        constraint: "1 to 50", default: 1, quality: "F",

        details: "Indicates the step size the valve can support." +
            "\n" +
            "The step size defined by this attribute is counted from 0 and the final step towards 100 may be " +
            "different than what is defined in this attribute. For example, if the value of this attribute is 15, " +
            "it results in these target values being supported; 0, 15, 30, 45, 60, 75, 90 and 100." +
            "\n" +
            "The values of 0 and 100 shall always be supported, regardless of the value of this attribute.",

        xref: { document: "cluster", section: "4.6.7.11" }
    }),

    Event(
        {
            name: "ValveStateChanged", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when the valve state changed. For level changes, after the end of " +
                "movement, for state changes when the new state has been reached.",
            xref: { document: "cluster", section: "4.6.9.1" }
        },

        Field({
            name: "ValveState", id: 0x0, type: "ValveStateEnum", conformance: "M",
            details: "This field shall indicate the new state of the valve.",
            xref: { document: "cluster", section: "4.6.9.1.1" }
        }),
        Field({
            name: "ValveLevel", id: 0x1, type: "percent", conformance: "LVL",
            details: "This field shall indicate the new level of the valve.",
            xref: { document: "cluster", section: "4.6.9.1.2" }
        })
    ),

    Event(
        {
            name: "ValveFault", id: 0x1, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when the valve registers or clears a fault, e.g. not being able to " +
                "transition to the requested target level or state.",
            xref: { document: "cluster", section: "4.6.9.2" }
        },

        Field({
            name: "ValveFault", id: 0x0, type: "ValveFaultBitmap", conformance: "M",
            details: "This field shall indicate the value of the ValveFault attribute, at the time this event is " +
                "generated.",
            xref: { document: "cluster", section: "4.6.9.2.1" }
        })
    ),

    Command(
        {
            name: "Open", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command is used to set the valve to its open position.",
            xref: { document: "cluster", section: "4.6.8.1" }
        },

        Field({
            name: "OpenDuration", id: 0x0, type: "elapsed-s", conformance: "O", constraint: "min 1",
            quality: "X",
            details: "This field shall indicate the duration that the valve will remain open for this specific Open " +
                "command." +
                "\n" +
                "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
                "until closed by the user or some other automation.",
            xref: { document: "cluster", section: "4.6.8.1.1" }
        }),

        Field({
            name: "TargetLevel", id: 0x1, type: "percent", conformance: "[LVL]", constraint: "min 1",
            details: "This field shall indicate the target level used for this specific Open command.",
            xref: { document: "cluster", section: "4.6.8.1.2" }
        })
    ),

    Command({
        name: "Close", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
        details: "This command is used to set the valve to its closed position.",
        xref: { document: "cluster", section: "4.6.8.2" }
    }),

    Datatype(
        { name: "ValveFaultBitmap", type: "map16", xref: { document: "cluster", section: "4.6.5.1" } },
        Field({ name: "GeneralFault", constraint: "0", description: "Unspecified fault detected" }),
        Field({ name: "Blocked", constraint: "1", description: "Valve is blocked" }),
        Field({ name: "Leaking", constraint: "2", description: "Valve has detected a leak" }),
        Field({ name: "NotConnected", constraint: "3", description: "No valve is connected to controller" }),
        Field({ name: "ShortCircuit", constraint: "4", description: "Short circuit is detected" }),
        Field({ name: "CurrentExceeded", constraint: "5", description: "The available current has been exceeded" })
    ),

    Datatype(
        { name: "ValveStateEnum", type: "enum8", xref: { document: "cluster", section: "4.6.5.2" } },
        Field({ name: "Closed", id: 0x0, conformance: "M", description: "Valve is in closed position" }),
        Field({ name: "Open", id: 0x1, conformance: "M", description: "Valve is in open position" }),
        Field({
            name: "Transitioning", id: 0x2, conformance: "M",
            description: "Valve is transitioning between closed and open positions or between levels"
        })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8", xref: { document: "cluster", section: "4.6.6.1" } },
        Field({
            name: "FailureDueToFault", id: 0x2, conformance: "M",
            description: "The requested action could not be performed due to a fault on the valve."
        })
    )
);

MatterDefinition.children.push(ValveConfigurationAndControl);
