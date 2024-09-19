/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOff } from "#clusters";
import { NamedHandler, NotImplementedError, Time, Timer } from "#general";
import { AttributeServer } from "#protocol";
import { WrapCommandHandler } from "../../device/Device.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

const Cluster = OnOff.Cluster.with("Lighting");

export const OnOffClusterDefaultHandler: () => ClusterServerHandlers<typeof Cluster> = () => {
    let timedOnTimer: Timer | undefined;
    let delayedOffTimer: Timer | undefined;

    const getTimedOnTimer = (onTime: AttributeServer<number>, onOff: AttributeServer<boolean>) => {
        if (timedOnTimer === undefined) {
            timedOnTimer = Time.getPeriodicTimer("Delayed on", 100, () => {
                let time = onTime.getLocal() ?? 0 - 0.1;
                if (time <= 0) {
                    time = 0;
                    timedOnTimer?.stop();
                    onOff.setLocal(false); // Timed on state end by turning off
                }
                onTime.setLocal(time);
            });
        }
        return timedOnTimer;
    };

    const getDelayedOffTimer = (offWaitTime: AttributeServer<number>) => {
        if (delayedOffTimer === undefined) {
            delayedOffTimer = Time.getTimer("Delayed off", 100, () => {
                let time = offWaitTime.getLocal() ?? 0 - 0.1;
                if (time <= 0) {
                    time = 0;
                    delayedOffTimer?.stop(); //Delayed off
                }
                offWaitTime.setLocal(time);
            });
        }
        return delayedOffTimer;
    };

    return {
        initializeClusterServer: ({ attributes: { onOff, startUpOnOff } }) => {
            const startUpOnOffValue = startUpOnOff?.getLocal() ?? null;
            if (startUpOnOffValue !== null) {
                const currentOnOffStatus = onOff.getLocal();
                const targetOnOffValue =
                    startUpOnOffValue === OnOff.StartUpOnOff.Toggle
                        ? !currentOnOffStatus
                        : startUpOnOffValue === OnOff.StartUpOnOff.On;
                if (targetOnOffValue !== currentOnOffStatus) {
                    onOff.setLocal(targetOnOffValue);
                }
            }
        },
        destroyClusterServer: () => {
            timedOnTimer?.stop();
            delayedOffTimer?.stop();
        },
        on: async ({ attributes: { onOff } }) => {
            onOff.setLocal(true);
        },
        off: async ({ attributes: { onOff } }) => {
            onOff.setLocal(false);
        },
        toggle: async ({ attributes: { onOff } }) => {
            if (onOff.getLocal()) {
                onOff.setLocal(false);
            } else {
                onOff.setLocal(true);
            }
        },
        offWithEffect: async () => {
            throw new NotImplementedError("Not implemented");
        },
        onWithRecallGlobalScene: async () => {
            throw new NotImplementedError("Not implemented");
        },
        onWithTimedOff: async ({
            request: { onOffControl, onTime: reqOnTime, offWaitTime: reqOffWaitTime },
            attributes: { onOff, onTime, offWaitTime },
        }) => {
            if (onTime === undefined || offWaitTime === undefined) return; // Should never happen that this method is called without these attributes

            const timedOnTimer = getTimedOnTimer(onTime, onOff);
            const delayedOffTimer = getDelayedOffTimer(offWaitTime);
            const onOffState = onOff.getLocal();

            if (!onOffState && onOffControl.acceptOnlyWhenOn) {
                return;
            }

            if (delayedOffTimer.isRunning && !onOffState) {
                // we are already in "Delayed off state" - this means reqOffWaitTime attribute > 0 and the device is off now
                offWaitTime.setLocal(Math.min(reqOffWaitTime ?? 0, offWaitTime.getLocal() ?? 0));
                delayedOffTimer.start();
                timedOnTimer.stop();
            } else {
                onTime.setLocal(Math.max(reqOnTime ?? 0, onTime.getLocal() ?? 0));
                offWaitTime.setLocal(reqOffWaitTime);
                timedOnTimer.start();
                delayedOffTimer.stop();
            }
        },
    };
};

export const createDefaultOnOffClusterServer = (
    commandHandler?: NamedHandler<any>,
    attributeInitialValues?: AttributeInitialValues<typeof OnOff.Complete.attributes>,
    isLighting = false,
) => {
    if (isLighting) {
        return ClusterServer(
            OnOff.Cluster.with(OnOff.Feature.Lighting),
            {
                onOff: false,
                globalSceneControl: false,
                onTime: 0,
                offWaitTime: 0,
                startUpOnOff: null,
                ...attributeInitialValues,
            },
            WrapCommandHandler(OnOffClusterDefaultHandler(), commandHandler),
        );
    }

    return ClusterServer(
        OnOff.Cluster,
        {
            onOff: false,
            ...attributeInitialValues,
        },
        WrapCommandHandler(
            OnOffClusterDefaultHandler(),
            commandHandler,
        ) as unknown as ClusterServerHandlers<OnOff.Cluster>,
    );
};
