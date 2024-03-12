/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Model } from "./Model.js";

export namespace Aspects {
    export function getAspect<T>(model: Model, symbol: symbol, constructor: new (definition: any) => T) {
        return ((model as any)[symbol] as T) || ((model as any)[symbol] = new constructor(undefined));
    }

    export function setAspect(model: Model, symbol: symbol, constructor: new (definition: any) => any, value: any) {
        if (value instanceof constructor) {
            (model as any)[symbol] = value;
        } else {
            (model as any)[symbol] = new constructor(value);
        }
    }

    export function cloneAspects(source: Model, dest: Model, symbols: symbol[]) {
        for (const symbol of symbols) {
            const aspect = (source as any)[symbol];
            if (aspect !== undefined) {
                (dest as any)[symbol] = aspect;
            }
        }
    }

    export function getEffectiveAspect<T>(model: Model, symbol: symbol, constructor: new (definition: any) => T) {
        const aspect = new ModelTraversal().findAspect(model, symbol) as T | undefined;
        if (aspect) {
            return aspect;
        }
        return getAspect(model, symbol, constructor);
    }
}
