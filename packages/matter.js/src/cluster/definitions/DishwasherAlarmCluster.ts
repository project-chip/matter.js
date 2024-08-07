/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import {
    FixedAttribute,
    Command,
    TlvNoResponse,
    Attribute,
    OptionalCommand,
    Event,
    EventPriority
} from "../Cluster.js";
import { TlvUInt32 } from "../../tlv/TlvNumber.js";
import { AlarmBase } from "./AlarmBaseCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace DishwasherAlarm {
    /**
     * These are optional features supported by DishwasherAlarmCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.15.4
     */
    export enum Feature {
        /**
         * Reset (RESET)
         *
         * This feature indicates that alarms can be reset via the Reset command.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.15.4.1
         */
        Reset = "Reset"
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 8.4.4.1
     */
    export const Alarm = {
        /**
         * Water inflow is abnormal
         */
        inflowError: BitFlag(0),

        /**
         * Water draining is abnormal
         */
        drainError: BitFlag(1),

        /**
         * Door or door lock is abnormal
         */
        doorError: BitFlag(2),

        /**
         * Unable to reach normal temperature
         */
        tempTooLow: BitFlag(3),

        /**
         * Temperature is too high
         */
        tempTooHigh: BitFlag(4),

        /**
         * Water level is abnormal
         */
        waterLevelError: BitFlag(5)
    };

    /**
     * A DishwasherAlarmCluster supports these elements if it supports feature Reset.
     */
    export const ResetComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates a bitmap where each bit set in the Latch attribute shall indicate that the corresponding alarm
             * will be latched when set, and will not reset to inactive when the underlying condition which caused the
             * alarm is no longer present, and so requires an explicit reset using the Reset command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.6.2
             */
            latch: FixedAttribute(0x1, TlvUInt32)
        },

        commands: {
            /**
             * This command resets active and latched alarms (if possible). Any generated Notify event shall contain
             * fields that represent the state of the server after the command has been processed.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.7.1
             */
            reset: Command(0x0, AlarmBase.TlvResetRequest, 0x0, TlvNoResponse)
        }
    });

    /**
     * These elements and properties are present in all DishwasherAlarm clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x5d,
        name: "DishwasherAlarm",
        revision: 1,

        features: {
            /**
             * Reset
             *
             * This feature indicates that alarms can be reset via the Reset command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.4.1
             */
            reset: BitFlag(0)
        },

        attributes: {
            /**
             * Indicates a bitmap where each bit set in the Mask attribute corresponds to an alarm that shall be
             * enabled.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.6.1
             */
            mask: Attribute(0x0, TlvUInt32),

            /**
             * Indicates a bitmap where each bit shall represent the state of an alarm. The value of true means the
             * alarm is active, otherwise the alarm is inactive.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.6.3
             */
            state: Attribute(0x2, TlvUInt32),

            /**
             * Indicates a bitmap where each bit shall represent whether or not an alarm is supported. The value of
             * true means the alarm is supported, otherwise the alarm is not supported.
             *
             * If an alarm is not supported, the corresponding bit in Mask, Latch, and State shall be false.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.6.4
             */
            supported: FixedAttribute(0x3, TlvUInt32)
        },

        commands: {
            /**
             * This command allows a client to request that an alarm be enabled or suppressed at the server.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.7.2
             */
            modifyEnabledAlarms: OptionalCommand(0x1, AlarmBase.TlvModifyEnabledAlarmsRequest, 0x1, TlvNoResponse)
        },

        events: {
            /**
             * This event shall be generated when one or more alarms change state, and shall have these fields:
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.15.8.1
             */
            notify: Event(0x0, EventPriority.Info, AlarmBase.TlvNotifyEvent)
        },

        /**
         * This metadata controls which DishwasherAlarmCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { reset: true }, component: ResetComponent })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is a derived cluster of the Alarm Base cluster.
     *
     * DishwasherAlarmCluster supports optional features that you can enable with the DishwasherAlarmCluster.with()
     * factory method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.4
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const RESET = { reset: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: {
            ...Cluster.attributes,
            latch: MutableCluster.AsConditional(ResetComponent.attributes.latch, { mandatoryIf: [RESET] })
        },
        commands: {
            ...Cluster.commands,
            reset: MutableCluster.AsConditional(ResetComponent.commands.reset, { mandatoryIf: [RESET] })
        },
        events: Cluster.events
    });

    /**
     * This cluster supports all DishwasherAlarm features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type DishwasherAlarmCluster = DishwasherAlarm.Cluster;
export const DishwasherAlarmCluster = DishwasherAlarm.Cluster;
ClusterRegistry.register(DishwasherAlarm.Complete);
