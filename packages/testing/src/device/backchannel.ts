/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A command received through an OOB channel from the test implementation to the subject.
 */
export type BackchannelCommand =
    | BackchannelCommand.SimulateLongPress
    | BackchannelCommand.SimulateMultiPress
    | BackchannelCommand.SimulateLatchedPosition
    | BackchannelCommand.NoParameters;

export namespace BackchannelCommand {
    export interface Subject {
        backchannel(command?: BackchannelCommand): void | Promise<void>;
    }

    export type SimulateLongPress = {
        name: "simulateLongPress";
        endpointId: number;
        buttonId: number;
        longPressDelayMillis: number;
        longPressDurationMillis: number;
    };

    export type SimulateMultiPress = {
        name: "simulateMultiPress";
        endpointId: number;
        buttonId: number;
        multiPressPressedTimeMillis: number;
        multiPressReleasedTimeMillis: number;
        multiPressNumPresses: number;
        featureMap: number;
        multiPressMax: number;
    };

    export type SimulateLatchedPosition = {
        name: "simulateLatchPosition";
        endpointId: number;
        positionId: number;
    };

    export type NoParameters = {
        name: "factoryReset" | "reboot" | "start" | "stop";
    };
}
