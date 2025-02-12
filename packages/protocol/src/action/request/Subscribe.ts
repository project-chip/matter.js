/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UINT16_MAX } from "#general";
import { MalformedRequestError } from "./MalformedRequestError.js";
import { Read } from "./Read.js";

/**
 * Defines a subscription.
 *
 * The subscription interval fields are optional as matter.js will set them to appropriate defaults based on physical
 * attributes of the target device.  If you are unsure of appropriate values do not set them.
 */
export interface Subscribe extends Read {
    keepSubscriptions: boolean;
    minIntervalFloorSeconds?: number;
    maxIntervalCeilingSeconds?: number;
}

export function Subscribe(options: Subscribe.Options): Subscribe {
    const subscribe = Read(options) as unknown as Subscribe;

    const { keepSubscriptions, minIntervalFloorSeconds, maxIntervalCeilingSeconds } = options;
    subscribe.keepSubscriptions = keepSubscriptions ?? true;

    if (minIntervalFloorSeconds !== undefined) {
        if (minIntervalFloorSeconds < 0 || minIntervalFloorSeconds > UINT16_MAX) {
            throw new MalformedRequestError(`Minimum interval floor ${minIntervalFloorSeconds} is out of range`);
        }
        subscribe.minIntervalFloorSeconds = minIntervalFloorSeconds;
    }

    if (maxIntervalCeilingSeconds !== undefined) {
        if (maxIntervalCeilingSeconds < 0 || maxIntervalCeilingSeconds > UINT16_MAX) {
            throw new MalformedRequestError(`Maximum interval ceiling ${maxIntervalCeilingSeconds} is out of range`);
        }
        subscribe.maxIntervalCeilingSeconds = maxIntervalCeilingSeconds;
    }

    return subscribe;
}

export namespace Subscribe {
    export interface Options extends Read.Options {
        keepSubscriptions?: boolean;
        minIntervalFloorSeconds?: number;
        maxIntervalCeilingSeconds?: number;
    }
}

// TODO - subscribe DSL extending read DSL
