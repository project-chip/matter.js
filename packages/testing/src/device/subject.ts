/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackchannelCommand } from "./backchannel.js";

/**
 * The test subject.
 */
export interface Subject {
    id: string;
    commissioning: Subject.CommissioningParameters;
    initialize(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    close(): Promise<void>;
    snapshot(): Promise<{}>;
    restore(snapshot: {}): Promise<void>;
    backchannel(command: BackchannelCommand): Promise<void>;
}

export namespace Subject {
    /**
     * Producer for test subjects.
     *
     * We cache subjects based on the subject factory although a factory may be invoked multiple times if the subject
     * initializes differently for different test implementations.
     */
    export interface Factory {
        (domain: string): Subject;
    }

    export type CommissioningMethod = "onnetwork";

    export interface WifiNetwork {
        kind: "wifi";
        ssid: string;
        password: string;
    }

    export interface ThreadNetwork {
        kind: "thread";
        datasetHex: string;
    }

    /**
     * Subject commissioning details.
     */
    export interface CommissioningParameters {
        kind: "on-network" | "ble-wifi" | "ble-thread";
        passcode: number;
        discriminator: number;
        qrPairingCode: string;
        network?: WifiNetwork | ThreadNetwork;
    }
}
