/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { WrapCommandHandler } from "../../device/Device.js";
import { Time, Timer } from "../../time/Time.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { OnOff, OnOffCluster } from "../definitions/OnOffCluster.js";
import { AttributeServer } from "./AttributeServer.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

export const OnOffClusterDefaultHandler: () => ClusterServerHandlers<typeof OnOff.Complete> = () => {
    let timedOnTimer: Timer | undefined;
    let delayedOffTimer: Timer | undefined;

    const getTimedOnTimer = (onTime: AttributeServer<number | null>, onOff: AttributeServer<boolean>) => {
        if (timedOnTimer === undefined) {
            timedOnTimer = Time.getPeriodicTimer(100, () => {
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

    const getDelayedOffTimer = (offWaitTime: AttributeServer<number | null>) => {
        if (delayedOffTimer === undefined) {
            delayedOffTimer = Time.getTimer(100, () => {
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
            }  else {
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
    attributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
) =>
    ClusterServer(
        OnOffCluster,
        attributeInitialValues ?? {
            onOff: false,
        },
        WrapCommandHandler(OnOffClusterDefaultHandler(), commandHandler),
    );
