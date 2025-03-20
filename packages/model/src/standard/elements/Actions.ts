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

export const Actions = Cluster(
    {
        name: "Actions", id: 0x25, classification: "application", pics: "ACT",

        details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to " +
            "expose" +
            "\n" +
            "  • Information about logical grouping of endpoints on the Node (example: lights in a room)" +
            "\n" +
            "  • Information about named actions that can be performed on such a group of endpoints (example: " +
            "    recall a scene for a group of lights by its name)" +
            "\n" +
            "  • Commands to trigger such actions" +
            "\n" +
            "  • Events to receive feedback on the state of such actions." +
            "\n" +
            "The information on grouping and available actions is typically provided by the user or Bridge " +
            "manufacturer via some means not defined in Matter, and therefore provided as read-only to Nodes. For " +
            "example: a manufacturer-provided app allows a user to set up logical grouping and create/assign " +
            "scene for such groups." +
            "\n" +
            "Using this cluster, a Node can learn about such logical grouping, provided actions, and trigger such " +
            "actions." +
            "\n" +
            "While the origin of this cluster stems from use cases with a Bridge, its server side may also be " +
            "implemented on any Node which can expose certain grouping, actions or automations to other users." +
            "\n" +
            "After defining the attributes, commands and events for this cluster, and the associated data types, " +
            "several examples are provided to illustrate the capabilities of this cluster." +
            "\n" +
            "Actions can be defined in a flexible manner to suit the needs of the various nodes implementing this " +
            "cluster. For each action, the commands available for that particular action are defined." +
            "\n" +
            "This cluster can be used to expose only the grouping of endpoints without any actions defined by " +
            "populating the EndpointList attribute accordingly and providing an empty list for ActionList." +
            "\n" +
            "The term 'action' in the description of this cluster should not be confused with the term 'action' " +
            "as used in the Interaction Model.",

        xref: { document: "core", section: "9.14" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "ActionList", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "max 256",
            default: [],
            details: "The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and " +
                "its EndpointListID shall exist in the EndpointLists attribute.",
            xref: { document: "core", section: "9.14.5.1" }
        },

        Field({ name: "entry", type: "ActionStruct" })
    ),

    Attribute(
        {
            name: "EndpointLists", id: 0x1, type: "list", access: "R V", conformance: "M",
            constraint: "max 256", default: [],
            details: "The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique " +
                "EndpointListID.",
            xref: { document: "core", section: "9.14.5.2" }
        },

        Field({ name: "entry", type: "EndpointListStruct" })
    ),

    Attribute(
        {
            name: "SetupUrl", id: 0x2, type: "string", access: "R V", conformance: "O", constraint: "max 512",

            details: "The SetupURL attribute (when provided) shall indicate a URL; its syntax shall follow the syntax as " +
                "specified in RFC 1738, max. 512 ASCII characters and shall use the https scheme. The location " +
                "referenced by this URL shall provide additional information for the actions provided:" +
                "\n" +
                "  • When used without suffix, it shall provide information about the various actions which the " +
                "    cluster provides." +
                "\n" +
                "    ◦ Example: SetupURL could take the value of example://Actions or https://domain.example/ " +
                "      Matter/bridgev1/Actions for this generic case (access generic info how to use actions provided " +
                "      by this cluster)." +
                "\n" +
                "  • When used with a suffix of \"/?a=\" and the decimal value of ActionID for one of the actions, it " +
                "    may provide information about that particular action. This could be a deeplink to " +
                "    manufacturer-app/website (associated somehow to the server node) with the " +
                "    information/edit-screen for this action so that the user can view and update details of the " +
                "    action, e.g. edit the scene, or change the wake-up experience time period." +
                "\n" +
                "    ◦ Example of SetupURL with suffix added: example://Actions/?a=12345 or " +
                "      https://domain.example/Matter/bridgev1/Actions/?a=12345 for linking to specific info/editing " +
                "      of the action with ActionID 0x3039.",

            xref: { document: "core", section: "9.14.5.3" }
        }
    ),

    Event(
        {
            name: "StateChanged", id: 0x0, access: "V", conformance: "M", priority: "info",

            details: "This event shall be generated when there is a change in the State of an ActionID during the " +
                "execution of an action and the most recent command using that ActionID used an InvokeID data field." +
                "\n" +
                "It provides feedback to the client about the progress of the action." +
                "\n" +
                "Example: When InstantActionWithTransition is invoked (with an InvokeID data field), two StateChanged " +
                "events will be generated:" +
                "\n" +
                "  • one when the transition starts (NewState=Active)" +
                "\n" +
                "  • one when the transition completed (NewState=Inactive)",

            xref: { document: "core", section: "9.14.7.1" }
        },

        Field({
            name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall be set to the ActionID of the action which has changed state.",
            xref: { document: "core", section: "9.14.7.1.1" }
        }),

        Field({
            name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
            details: "This field shall be set to the InvokeID which was provided to the most recent command referencing " +
                "this ActionID.",
            xref: { document: "core", section: "9.14.7.1.2" }
        }),

        Field({
            name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
            details: "This field shall be set to state that the action has changed to.",
            xref: { document: "core", section: "9.14.7.1.3" }
        })
    ),

    Event(
        {
            name: "ActionFailed", id: 0x1, access: "V", conformance: "M", priority: "info",

            details: "This event shall be generated when there is some error which prevents the action from its normal " +
                "planned execution and the most recent command using that ActionID used an InvokeID data field." +
                "\n" +
                "It provides feedback to the client about the non-successful progress of the action." +
                "\n" +
                "Example: When InstantActionWithTransition is invoked (with an InvokeID data field), and another " +
                "controller changes the state of one or more of the involved endpoints during the transition, thus " +
                "interrupting the transition triggered by the action, two events would be generated:" +
                "\n" +
                "  • StateChanged when the transition starts (NewState=Active)" +
                "\n" +
                "  • ActionFailed when the interrupting command occurs (NewState=Inactive, Error=interrupted)" +
                "\n" +
                "Example: When InstantActionWithTransition is invoked (with an InvokeID data field = 1), and the same " +
                "client invokes an InstantAction with (the same or another ActionId and) InvokeID = 2, and this " +
                "second command interrupts the transition triggered by the first command, these events would be " +
                "generated:" +
                "\n" +
                "  • StateChanged (InvokeID=1, NewState=Active) when the transition starts" +
                "\n" +
                "  • ActionFailed (InvokeID=2, NewState=Inactive, Error=interrupted) when the second command " +
                "    interrupts the transition" +
                "\n" +
                "  • StateChanged (InvokeID=2, NewState=Inactive) upon the execution of the action for the second " +
                "    command",

            xref: { document: "core", section: "9.14.7.2" }
        },

        Field({
            name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall be set to the ActionID of the action which encountered an error.",
            xref: { document: "core", section: "9.14.7.2.1" }
        }),

        Field({
            name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
            details: "This field shall be set to the InvokeID which was provided to the most recent command referencing " +
                "this ActionID.",
            xref: { document: "core", section: "9.14.7.2.2" }
        }),

        Field({
            name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
            details: "This field shall be set to state that the action is in at the time of generating the event.",
            xref: { document: "core", section: "9.14.7.2.3" }
        }),
        Field({
            name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M",
            details: "This field shall be set to indicate the reason for non-successful progress of the action.",
            xref: { document: "core", section: "9.14.7.2.4" }
        })
    ),

    Command(
        {
            name: "InstantAction", id: 0x0, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command triggers an action (state change) on the involved endpoints, in a \"fire and forget\" " +
                "manner. Afterwards, the action’s state shall be Inactive." +
                "\n" +
                "Example: recall a scene on a number of lights.",
            xref: { document: "core", section: "9.14.6.1" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "InstantActionWithTransition", id: 0x1, access: "O", conformance: "desc",
            direction: "request", response: "status",

            details: "It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data " +
                "type), a gradual transition SHOULD take place from the old to the new state over this time period. " +
                "However, the exact transition is manufacturer dependent." +
                "\n" +
                "This command triggers an action (state change) on the involved endpoints, with a specified time to " +
                "transition from the current state to the new state. During the transition, the action’s state shall " +
                "be Active. Afterwards, the action’s state shall be Inactive." +
                "\n" +
                "Example: recall a scene on a number of lights, with a specified transition time.",

            xref: { document: "core", section: "9.14.6.2" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
            details: "This field shall indicate the transition time in 1/10th of seconds.",
            xref: { document: "core", section: "9.14.6.2.1" }
        })
    ),

    Command(
        {
            name: "StartAction", id: 0x2, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command triggers the commencement of an action on the involved endpoints. Afterwards, the " +
                "action’s state shall be Active." +
                "\n" +
                "Example: start a dynamic lighting pattern (such as gradually rotating the colors around the " +
                "setpoints of the scene) on a set of lights." +
                "\n" +
                "Example: start a sequence of events such as a wake-up experience involving lights moving through " +
                "several brightness/color combinations and the window covering gradually opening.",

            xref: { document: "core", section: "9.14.6.3" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "StartActionWithDuration", id: 0x3, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command triggers the commencement of an action on the involved endpoints, and shall change the " +
                "action’s state to Active. After the specified Duration, the action will stop, and the action’s state " +
                "shall change to Inactive." +
                "\n" +
                "Example: start a dynamic lighting pattern (such as gradually rotating the colors around the " +
                "setpoints of the scene) on a set of lights for 1 hour (Duration=3600).",

            xref: { document: "core", section: "9.14.6.4" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({
            name: "Duration", id: 0x2, type: "uint32", conformance: "M",
            details: "This field shall indicate the requested duration in seconds.",
            xref: { document: "core", section: "9.14.6.4.1" }
        })
    ),

    Command(
        {
            name: "StopAction", id: 0x4, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state " +
                "shall be Inactive." +
                "\n" +
                "Example: stop a dynamic lighting pattern which was previously started with StartAction.",
            xref: { document: "core", section: "9.14.6.5" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "PauseAction", id: 0x5, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command pauses an ongoing action, and shall change the action’s state to Paused." +
                "\n" +
                "Example: pause a dynamic lighting effect (the lights stay at their current color) which was " +
                "previously started with StartAction.",
            xref: { document: "core", section: "9.14.6.6" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "PauseActionWithDuration", id: 0x6, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command pauses an ongoing action, and shall change the action’s state to Paused. After the " +
                "specified Duration, the ongoing action will be automatically resumed. which shall change the " +
                "action’s state to Active." +
                "\n" +
                "Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes " +
                "(Duration=600)." +
                "\n" +
                "The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is " +
                "more of a transitionary nature while the latter is more permanent) and on the other hand these can " +
                "be implemented slightly differently in the implementation of the action (e.g. a Pause would be " +
                "automatically resumed after some hours or during a nightly reset, while an Disable would remain in " +
                "effect until explicitly enabled again).",

            xref: { document: "core", section: "9.14.6.7" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({
            name: "Duration", id: 0x2, type: "uint32", conformance: "M",
            details: "This field shall indicate the requested duration in seconds.",
            xref: { document: "core", section: "9.14.6.7.1" }
        })
    ),

    Command(
        {
            name: "ResumeAction", id: 0x7, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command resumes a previously paused action, and shall change the action’s state to Active." +
                "\n" +
                "The difference between ResumeAction and StartAction is that ResumeAction will continue the action " +
                "from the state where it was paused, while StartAction will start the action from the beginning." +
                "\n" +
                "Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from " +
                "the point they were paused).",

            xref: { document: "core", section: "9.14.6.8" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "EnableAction", id: 0x8, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command enables a certain action or automation. Afterwards, the action’s state shall be Active." +
                "\n" +
                "Example: enable a motion sensor to control the lights in an area.",
            xref: { document: "core", section: "9.14.6.9" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "EnableActionWithDuration", id: 0x9, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command enables a certain action or automation, and shall change the action’s state to be " +
                "Active. After the specified Duration, the action or automation will stop, and the action’s state " +
                "shall change to Disabled." +
                "\n" +
                "Example: enable a \"presence mimicking\" behavior for the lights in your home during a vacation; the " +
                "Duration field is used to indicated the length of your absence from home. After that period, the " +
                "presence mimicking behavior will no longer control these lights.",

            xref: { document: "core", section: "9.14.6.10" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({
            name: "Duration", id: 0x2, type: "uint32", conformance: "M",
            details: "This field shall indicate the requested duration in seconds.",
            xref: { document: "core", section: "9.14.6.10.1" }
        })
    ),

    Command(
        {
            name: "DisableAction", id: 0xa, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command disables a certain action or automation, and shall change the action’s state to " +
                "Inactive." +
                "\n" +
                "Example: disable a motion sensor to no longer control the lights in an area.",
            xref: { document: "core", section: "9.14.6.11" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "DisableActionWithDuration", id: 0xb, access: "O", conformance: "desc", direction: "request",
            response: "status",

            details: "This command disables a certain action or automation, and shall change the action’s state to " +
                "Disabled. After the specified Duration, the action or automation will re-start, and the action’s " +
                "state shall change to either Inactive or Active, depending on the actions (see examples 4 and 6)." +
                "\n" +
                "Example: disable a \"wakeup\" experience for a period of 1 week when going on holiday (to prevent them " +
                "from turning on in the morning while you’re not at home). After this period, the wakeup experience " +
                "will control the lights as before.",

            xref: { document: "core", section: "9.14.6.12" }
        },

        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({
            name: "Duration", id: 0x2, type: "uint32", conformance: "M",
            details: "This field shall indicate the requested duration in seconds.",
            xref: { document: "core", section: "9.14.6.12.1" }
        })
    ),

    Datatype(
        {
            name: "CommandBits", type: "map16",
            details: "Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.",
            xref: { document: "core", section: "9.14.4.1" }
        },
        Field({ name: "InstantAction", constraint: "0", description: "Indicate support for InstantAction command" }),
        Field({
            name: "InstantActionWithTransition", constraint: "1",
            description: "Indicate support for InstantActionWithTransition command"
        }),
        Field({ name: "StartAction", constraint: "2", description: "Indicate support for StartAction command" }),
        Field({
            name: "StartActionWithDuration", constraint: "3",
            description: "Indicate support for StartActionWithDuration command"
        }),
        Field({ name: "StopAction", constraint: "4", description: "Indicate support for StopAction command" }),
        Field({ name: "PauseAction", constraint: "5", description: "Indicate support for PauseAction command" }),
        Field({
            name: "PauseActionWithDuration", constraint: "6",
            description: "Indicate support for PauseActionWithDuration command"
        }),
        Field({ name: "ResumeAction", constraint: "7", description: "Indicate support for ResumeAction command" }),
        Field({ name: "EnableAction", constraint: "8", description: "Indicate support for EnableAction command" }),
        Field({
            name: "EnableActionWithDuration", constraint: "9",
            description: "Indicate support for EnableActionWithDuration command"
        }),
        Field({ name: "DisableAction", constraint: "10", description: "Indicate support for DisableAction command" }),
        Field({
            name: "DisableActionWithDuration", constraint: "11",
            description: "Indicate support for DisableActionWithDuration command"
        })
    ),

    Datatype(
        { name: "ActionTypeEnum", type: "enum8", xref: { document: "core", section: "9.14.4.2" } },
        Field({
            name: "Other", id: 0x0, conformance: "M",
            description: "Use this only when none of the other values applies"
        }),

        Field({
            name: "Scene", id: 0x1, conformance: "M", description: "Bring the endpoints into a certain state",

            details: "Can be used to set a static state of the associated endpoints (typically using InstantAction or " +
                "InstantActionWithTransition), or to bring these endpoints into a more dynamic state (typically using " +
                "StartAction), where the endpoints would e.g. gradually cycle through certain colors for a pleasing " +
                "effect. A voice controller could use \"set\" (to map to InstantAction) or \"play\" (to map to " +
                "StartAction) to trig" +
                "\n" +
                "ger such actions." +
                "\n" +
                "Example: see examples 1 and 2.",

            xref: { document: "core", section: "9.14.4.2.1" }
        }),

        Field({
            name: "Sequence", id: 0x2, conformance: "M",
            description: "A sequence of states with a certain time pattern",
            details: "Indicates an action which involves a sequence of events/states of the associated endpoints, such as " +
                "a wake-up experience." +
                "\n" +
                "Example: see example 4.",
            xref: { document: "core", section: "9.14.4.2.2" }
        }),

        Field({
            name: "Automation", id: 0x3, conformance: "M",
            description: "Control an automation (e.g. motion sensor controlling lights)",
            details: "Indications an automation (e.g. a motion sensor controlling lights, an alarm system) which can " +
                "bee.g. started, stopped, paused, resumed. Example: see example 3.",
            xref: { document: "core", section: "9.14.4.2.3" }
        }),

        Field({
            name: "Exception", id: 0x4, conformance: "M",
            description: "Sequence that will run when something doesn’t happen",
            details: "Indicates some action which the server will execute when a certain condition (which normally does " +
                "not happen) is not met." +
                "\n" +
                "Example: lock the doors when the server’s system has detected no one is at home while the doors are " +
                "in the 'unlocked' state.",
            xref: { document: "core", section: "9.14.4.2.4" }
        }),

        Field({
            name: "Notification", id: 0x5, conformance: "M",
            description: "Use the endpoints to send a message to user",
            details: "Indicates an action that can be triggered (e.g. by InstantAction) to notify the user." +
                "\n" +
                "Example: play a pattern on the lights in the living room if there is someone in the garden in the " +
                "evening.",
            xref: { document: "core", section: "9.14.4.2.5" }
        }),

        Field({
            name: "Alarm", id: 0x6, conformance: "M", description: "Higher priority notification",
            details: "Similar to Notification but with a higher priority (and might override other endpoint states which " +
                "Type=Notification would not override)." +
                "\n" +
                "Example: flash all lights in the house when CO sensor triggers.",
            xref: { document: "core", section: "9.14.4.2.6" }
        })
    ),

    Datatype(
        {
            name: "ActionStateEnum", type: "enum8",
            details: "Note that some of these states are applicable only for certain actions, as determined by their " +
                "SupportedCommands.",
            xref: { document: "core", section: "9.14.4.3" }
        },

        Field({ name: "Inactive", id: 0x0, conformance: "M", description: "The action is not active" }),
        Field({ name: "Active", id: 0x1, conformance: "M", description: "The action is active" }),
        Field({ name: "Paused", id: 0x2, conformance: "M", description: "The action has been paused" }),
        Field({ name: "Disabled", id: 0x3, conformance: "M", description: "The action has been disabled" })
    ),

    Datatype(
        { name: "ActionErrorEnum", type: "enum8", xref: { document: "core", section: "9.14.4.4" } },
        Field({ name: "Unknown", id: 0x0, conformance: "M", description: "Other reason not listed in the row(s) below" }),
        Field({
            name: "Interrupted", id: 0x1, conformance: "M",
            description: "The action was interrupted by another command or interaction"
        })
    ),

    Datatype(
        {
            name: "EndpointListTypeEnum", type: "enum8",
            details: "The Room and Zone values are provided for the cases where a user (or the system on behalf of the " +
                "user) has created logical grouping of the endpoints (e.g. bridged devices) based on location.",
            xref: { document: "core", section: "9.14.4.5" }
        },

        Field({
            name: "Other", id: 0x0, conformance: "M", description: "Another group of endpoints",
            details: "This value is provided for the case of an endpoint list which is tied specifically to this action " +
                "i.e. not independently created by the user. For Type=Other the Name may be empty. A Matter " +
                "controller would typically not use this for anything else than just to know which endpoints would be " +
                "affected by the action.",
            xref: { document: "core", section: "9.14.4.5.1" }
        }),

        Field({
            name: "Room", id: 0x1, conformance: "M",
            description: "User-configured group of endpoints where an endpoint can be in only one room",
            details: "Is used for the situation where an endpoint can only be part of one such rooms (e.g. physical " +
                "mapping). Using these exposed logical groups, a Matter controller who has a similar grouping concept " +
                "can use it to place each endpoint (bridged device) in the right room automatically, without user " +
                "having to redo that setup for each device in each system - both at first contact and upon later " +
                "updates to the endpoints (e.g. user adds a bridged device or creates a new room).",
            xref: { document: "core", section: "9.14.4.5.2" }
        }),

        Field({
            name: "Zone", id: 0x2, conformance: "M",
            description: "User-configured group of endpoints where an endpoint can be in any number of zones",

            details: "Is a more general concept where an endpoint can be part of multiple zones, e.g. a light in the " +
                "living" +
                "\n" +
                "room can be part of the \"reading corner\" zone (subset of the lights in the living room) but also " +
                "part of the \"downstairs\" zone which contains all the lights on a floor, e.g. combining living room, " +
                "kitchen and hallway. This indicates that a user has defined this list of endpoints as something they " +
                "logically would like to control as a group, so Matter controllers could provide the user with a way " +
                "to do as such.",

            xref: { document: "core", section: "9.14.4.5.3" }
        })
    ),

    Datatype(
        {
            name: "ActionStruct", type: "struct",
            details: "This data type holds the details of a single action, and contains the data fields below.",
            xref: { document: "core", section: "9.14.4.6" }
        },
        Field({
            name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall provide an unique identifier used to identify an action.",
            xref: { document: "core", section: "9.14.4.6.1" }
        }),

        Field({
            name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 128{32}",
            details: "This field shall indicate the name (as assigned by the user or automatically by the server) " +
                "associated with this action. This can be used for identifying the action to the user by the client. " +
                "Example: \"my colorful scene\".",
            xref: { document: "core", section: "9.14.4.6.2" }
        }),

        Field({
            name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M",
            details: "This field shall indicate the type of action. The value of Type of an action, along with its " +
                "SupportedCommands can be used by the client in its UX or logic to determine how to present or use " +
                "such action. See ActionTypeEnum for details and examples.",
            xref: { document: "core", section: "9.14.4.6.3" }
        }),

        Field({
            name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M",
            details: "This field shall provide a reference to the associated endpoint list, which specifies the endpoints " +
                "on this Node which will be impacted by this ActionID.",
            xref: { document: "core", section: "9.14.4.6.4" }
        }),

        Field({
            name: "SupportedCommands", id: 0x4, type: "CommandBits", conformance: "M", constraint: "0 to 4095",
            details: "This field is a bitmap which shall be used to indicate which of the cluster’s commands are supported " +
                "for this particular action, with a bit set to 1 for each supported command according to the table " +
                "below. Other bits shall be set to 0.",
            xref: { document: "core", section: "9.14.4.6.5" }
        }),

        Field({
            name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M",
            details: "This field shall indicate the current state of this action.",
            xref: { document: "core", section: "9.14.4.6.6" }
        })
    ),

    Datatype(
        {
            name: "EndpointListStruct", type: "struct",
            details: "This data type holds the details of a single endpoint list, which relates to a set of endpoints that " +
                "have some logical relation, and contains the data fields below.",
            xref: { document: "core", section: "9.14.4.7" }
        },

        Field({
            name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall provide an unique identifier used to identify the endpoint list.",
            xref: { document: "core", section: "9.14.4.7.1" }
        }),

        Field({
            name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 128{32}",
            details: "This field shall indicate the name (as assigned by the user or automatically by the server) " +
                "associated with the set of endpoints in this list. This can be used for identifying the action to " +
                "the user by the client. Example: \"living room\".",
            xref: { document: "core", section: "9.14.4.7.2" }
        }),

        Field({
            name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M",
            details: "This field shall indicate the type of endpoint list, see EndpointListTypeEnum.",
            xref: { document: "core", section: "9.14.4.7.3" }
        }),

        Field(
            {
                name: "Endpoints", id: 0x3, type: "list", conformance: "M", constraint: "max 256",
                details: "This field shall provide a list of endpoint numbers.",
                xref: { document: "core", section: "9.14.4.7.4" }
            },
            Field({ name: "entry", type: "endpoint-no" })
        )
    )
);

MatterDefinition.children.push(Actions);
