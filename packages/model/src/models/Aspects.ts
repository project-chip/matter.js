/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Aspect } from "#aspects/Aspect.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Model } from "./Model.js";

// Aspects are immutable, there are not many permutations, and their definitions are largely normalized strings.  So we
// cache them to keep the object count down
const aspectCache: Record<string, Record<string, Aspect>> = {
    Access: {},
    Conformance: {},
    Constraint: {},
    Quality: {},
};

const emptyAspects: Record<string, Aspect> = {};

export namespace Aspects {
    export function getAspect<T extends Aspect>(model: Model, symbol: symbol, constructor: new (definition: any) => T) {
        const aspect = (model as any)[symbol] ?? emptyAspects[constructor.name];
        if (aspect) {
            return aspect as T;
        }
        return (emptyAspects[constructor.name] = new constructor(undefined));
    }

    export function setAspect(model: Model, symbol: symbol, constructor: new (definition: any) => any, value: any) {
        if (value instanceof constructor) {
            (model as any)[symbol] = value;
        } else {
            const cacheKey = typeof value === "string" ? value : JSON.stringify(value);
            let aspect = aspectCache[constructor.name][value];
            if (!aspect) {
                aspect = aspectCache[constructor.name][cacheKey] = new constructor(value);
            }
            (model as any)[symbol] = aspect;
        }
    }

    export function cloneAspects(source: Model, dest: Model, ...symbols: symbol[]) {
        for (const symbol of symbols) {
            const aspect = (source as any)[symbol];
            if (aspect !== undefined) {
                (dest as any)[symbol] = aspect;
            }
        }
    }

    export function getEffectiveAspect<T extends Aspect>(
        model: Model,
        symbol: symbol,
        constructor: new (definition: any) => T,
    ) {
        const aspect = new ModelTraversal().findAspect(model, symbol) as T | undefined;
        if (aspect) {
            return aspect;
        }
        return getAspect(model, symbol, constructor);
    }
}
