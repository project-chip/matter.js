/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#general";

const logger = Logger.get("PhysicalDeviceProperties");

const DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S = 1;
const DEFAULT_SUBSCRIPTION_FLOOR_ICD_S = 0;
const DEFAULT_SUBSCRIPTION_CEILING_WIFI_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S = 180;
const DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S = 600;

export interface PhysicalDeviceProperties {
    threadConnected: boolean;
    wifiConnected: boolean;
    ethernetConnected: boolean;
    rootEndpointServerList: number[];
    isBatteryPowered: boolean;
    isIntermittentlyConnected: boolean;
    isThreadSleepyEndDevice: boolean;
}

export namespace PhysicalDeviceProperties {
    export function determineSubscriptionParameters(options?: {
        properties?: PhysicalDeviceProperties;
        description?: string;
        subscribeMinIntervalFloorSeconds?: number;
        subscribeMaxIntervalCeilingSeconds?: number;
    }) {
        const { properties } = options ?? {};

        let {
            description,
            subscribeMinIntervalFloorSeconds: minIntervalFloorSeconds,
            subscribeMaxIntervalCeilingSeconds: maxIntervalCeilingSeconds,
        } = options ?? {};

        if (description === undefined) {
            description = "Node";
        }

        const { isBatteryPowered, isIntermittentlyConnected, threadConnected, isThreadSleepyEndDevice } =
            properties ?? {};

        if (isIntermittentlyConnected) {
            if (minIntervalFloorSeconds !== undefined && minIntervalFloorSeconds !== DEFAULT_SUBSCRIPTION_FLOOR_ICD_S) {
                logger.info(
                    `${description}: Overwriting minIntervalFloorSeconds for intermittently connected device to ${DEFAULT_SUBSCRIPTION_FLOOR_ICD_S}`,
                );
                minIntervalFloorSeconds = DEFAULT_SUBSCRIPTION_FLOOR_ICD_S;
            }
        }

        const defaultCeiling = isBatteryPowered
            ? DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S
            : isThreadSleepyEndDevice
              ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S
              : threadConnected
                ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_S
                : DEFAULT_SUBSCRIPTION_CEILING_WIFI_S;
        if (maxIntervalCeilingSeconds === undefined) {
            maxIntervalCeilingSeconds = defaultCeiling;
        }
        if (maxIntervalCeilingSeconds < defaultCeiling) {
            logger.debug(
                `${description}: maxIntervalCeilingSeconds ideally is ${defaultCeiling}s instead of ${maxIntervalCeilingSeconds}s due to device type`,
            );
        }

        return {
            minIntervalFloorSeconds: minIntervalFloorSeconds ?? DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S,
            maxIntervalCeilingSeconds,
        };
    }
}
