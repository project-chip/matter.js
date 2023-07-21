/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, Cluster, Event, EventPriority, OptionalAttribute, OptionalCommand, TlvNoResponse } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvBitmap, TlvEnum, TlvUInt16, TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvString, TlvString32max } from "../tlv/TlvString.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * ====================== IMPORTANT INFORMATION ======================
 *
 * This file outdated and will soon be auto generated based on the Cluster Schemas in schema
 * directory!! They are still used within the codebase, but will be changed soon!
 *
 * ====================== IMPORTANT INFORMATION ======================
 */

/**
 * Supported Commands bitmap which SHALL be used to indicate which of the cluster’s commands are
 * supported for this particular action, with a bit set to 1 for each supported command.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.7
 */
const CommandBits = TlvBitmap(TlvUInt16, {
    /** This command triggers an action (state change) on the involved endpoints. */
    instantAction: BitFlag(0),

    /** This command triggers an action (state change) on the involved endpoints, with a specified time to transition from the current state to the new state. */
    instantActionWithTransition: BitFlag(1),

    /** This command triggers the commencement of an action on the involved endpoints. */
    startAction: BitFlag(2),

    /** This command triggers the commencement of an action (with a duration) on the involved endpoints. */
    startActionWithDuration: BitFlag(3),

    /** This command stops the ongoing action on the involved endpoints. */
    stopAction: BitFlag(4),

    /** This command pauses an ongoing action. */
    pauseAction: BitFlag(5),

    /** This command pauses an ongoing action with a duration. */
    pauseActionWithDuration: BitFlag(6),

    /** This command resumes a previously paused action. */
    resumeAction: BitFlag(7),

    /** This command enables a certain action or automation. */
    enableAction: BitFlag(8),

    /** This command enables a certain action or automation with a duration. */
    enableActionWithDuration: BitFlag(9),

    /** This command disables a certain action or automation. */
    disableAction: BitFlag(10),

    /** This command disables a certain action or automation with a duration. */
    disableActionWithDuration: BitFlag(11),

});

/**
 * Action error.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.3
 */
export const enum ActionErrorEnum {
    /** Other reason not listed below */
    Unknown = 0,

    /** The action was inter­rupted by another com­mand or interaction */
    Interrupted = 1,

}

/**
 * Action state.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.3
 */
export const enum ActionStateEnum {
    /** The action is not active */
    Inactive = 0,

    /** The action is active */
    Active = 1,

    /** The action has been paused */
    Paused = 2,

    /** The action has been disabled */
    Disabled = 3,
}

/**
 * Types of actions.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.2
 */
export const enum ActionTypeEnum {
    /** Use this only when none of the other values applies */
    Other = 0,

    /** Bring the endpoints into a certain state */
    Scene = 1,

    /** A sequence of states with a certain time pattern */
    Sequence = 2,

    /** Control an automation (e.g. motion sensor controlling lights) */
    Automation = 3,

    /** Sequence that will run when something doesn’t happen*/
    Exception = 4,

    /** Use the endpoints to send a message to user*/
    Notification = 5,

    /** Higher priority notification */
    Alarm = 6,
}

/**
 * Holds the details of a single action.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.1
 */
const TlvAction = TlvObject({
    /** Indicates the device type definition */
    actionID: TlvField(0, TlvUInt16),

    /** Indicates the implemented revision of the device type definition */
    name: TlvField(1, TlvString.bound({ maxLength: 32 })),

    /** Indicates the type of endpoint list */
    type: TlvField(2, TlvEnum<ActionTypeEnum>()),

    /** Provide a reference to the associated endpoint list, which specifies the endpoints on this Node which will be impacted by this ActionID */
    endpointListId: TlvField(3, TlvUInt16),

    /** A bitmap used to indicate which of the cluster’s commands are supported for this particular action */
    supportedCommands: TlvField(4, CommandBits),

    /** Indicates the current state of this action */
    state: TlvField(5, TlvEnum<ActionStateEnum>()),

});

/**
 * Types of endpoint lists.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.6
 */
export const enum EndpointListType {
    /** Another group of endpoints, tied specifically to this action, not independently created by the user.  */
    Other = 0,

    /** User-configured group of endpoints where an endpoint can be in only one room */
    Room = 1,

    /** User-configured group of endpoints where an endpoint can be in any number of zones */
    Zone = 2,
}

/**
 * Provides information about endpoint conformance to a release of a device type definition.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.9.5
 */
const TlvEndpointList = TlvObject({
    /** Indicates the device type definition */
    endpointListId: TlvField(0, TlvUInt16),

    /** Indicates the implemented revision of the device type definition */
    name: TlvField(1, TlvString32max),

    /** Indicates the type of endpoint list. */
    type: TlvField(2, TlvEnum<EndpointListType>()),

    /** A list of endpoint numbers */
    endpoints: TlvField(3, TlvArray(TlvEndpointNumber, { maxLength: 256 })),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.1 */
const TlvInstantActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.2 */
const TlvInstantActionWithTransitionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    transitionTime: TlvField(2, TlvUInt16),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} §9.14.7.3 */
const TlvStartActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.4 */
const TlvStartActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.5 */
const TlvStopActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.6 */
const TlvPauseActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.7 */
const TlvPauseActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.8 */
const TlvResumeActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.9 */
const TlvEnableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.10 */
const TlvEnableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.11 */
const TlvDisableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
});

/** @see {@link MatterCoreClusterSpecificationV1_0} § 9.14.7.12 */
const TlvDisableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32),
});

/**
 * Provides feedback to the client about the progress of the action.
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.8.1
 */
const StateChangedEvent = {
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvField(1, TlvUInt32),
    newState: TlvField(2, TlvEnum<ActionStateEnum>()),
};

/**
 * Provides feedback to the client about the non-successful progress of the action.
 * @see {@link MatterCoreSpecificationV1_0} § 9.14.8.2
 */
const ActionFailedEvent = {
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvField(1, TlvUInt32),
    newState: TlvField(2, TlvEnum<ActionStateEnum>()),
    error: TlvField(3, TlvEnum<ActionErrorEnum>()),
};

/**
 * This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose
 *  * information about logical grouping of endpoints on the Node (example: lights in a room)
 *  * information about named actions that can be performed on such a group of endpoints (example: recall a
 *    scene for a group of lights by its name)
 *  * commands to trigger such actions
 *  * events to receive feedback on the state of such actions.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.14
 */
export const ActionsCluster = Cluster({
    id: 0x25,
    name: "Actions",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 9.14.6 */
    attributes: {
        /** List of actions. */
        actionList: Attribute(0, TlvArray(TlvAction, { maxLength: 256 }), { default: [] }),

        /** List of endpoint lists. */
        endpointLists: Attribute(1, TlvArray(TlvEndpointList, { maxLength: 256 }), { default: [] }),

        /**
         * When used without suffix, provides information about the various actions which
         * the cluster provides.
         * When used with a suffix of "/?a=" and the decimal value of ActionID for one of
         * the actions, it may provide information about that particular action. */
        setupURL: OptionalAttribute(2, TlvString.bound({ maxLength: 512 }), { default: "" }),
    },
    commands: {
        /** This command triggers an action (state change) on the involved endpoints. */
        instantAction: OptionalCommand(0, TlvInstantActionRequest, 0, TlvNoResponse),

        /** This command triggers an action (state change) on the involved endpoints, with a specified time to transition from the current state to the new state. */
        instantActionWithTransition: OptionalCommand(1, TlvInstantActionWithTransitionRequest, 1, TlvNoResponse),

        /** This command triggers the commencement of an action on the involved endpoints. */
        startAction: OptionalCommand(2, TlvStartActionRequest, 2, TlvNoResponse),

        /** This command triggers the commencement of an action (with a duration) on the involved endpoints. */
        startActionWithDuration: OptionalCommand(3, TlvStartActionWithDurationRequest, 3, TlvNoResponse),

        /** This command stops the ongoing action on the involved endpoints. */
        stopAction: OptionalCommand(4, TlvStopActionRequest, 4, TlvNoResponse),

        /** This command pauses an ongoing action. */
        pauseAction: OptionalCommand(5, TlvPauseActionRequest, 5, TlvNoResponse),

        /** This command pauses an ongoing action with a duration. */
        pauseActionWithDuration: OptionalCommand(6, TlvPauseActionWithDurationRequest, 6, TlvNoResponse),

        /** This command resumes a previously paused action. */
        resumeAction: OptionalCommand(7, TlvResumeActionRequest, 7, TlvNoResponse),

        /** This command enables a certain action or automation. */
        enableAction: OptionalCommand(8, TlvEnableActionRequest, 8, TlvNoResponse),

        /** This command enables a certain action or automation with a duration. */
        enableActionWithDuration: OptionalCommand(9, TlvEnableActionWithDurationRequest, 9, TlvNoResponse),

        /** This command disables a certain action or automation. */
        disableAction: OptionalCommand(0x0A, TlvDisableActionRequest, 0x0A, TlvNoResponse),

        /** This command disables a certain action or automation with a duration. */
        disableActionWithDuration: OptionalCommand(0x0B, TlvDisableActionWithDurationRequest, 0x0B, TlvNoResponse),
    },
    events: {
        /** This event shall be generated when there is a change in the Status of an ActionID. */
        stateChanged: Event(0, EventPriority.Info, TlvObject(StateChangedEvent)),

        /** This event shall be generated when there is some error which prevents the action from its normal planned execution. */
        actionFailed: Event(1, EventPriority.Info, TlvObject(ActionFailedEvent)),
    },
});
