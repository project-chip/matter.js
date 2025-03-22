/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Aspect } from "./Aspect.js";

/**
 * An operational representation of "other quality" as defined by the Matter specification.
 *
 * "Other qualities" are defined behaviors of data fields and cluster elements that do not involve access or
 * conformance.
 *
 * See {@link MatterSpecification.v14} § 7.7
 */
export class Quality extends Aspect<Quality.Definition> implements Quality.Ast {
    /**
     * The value may be null.
     */
    declare nullable?: boolean;

    /**
     * An attribute persists across restarts.
     *
     * Note that Matter designates any configuration as persistent so matter.js persists writable attributes even
     * without this flag.
     */
    declare nonvolatile?: boolean;

    /**
     * An attribute never changes unless software revision changes.
     */
    declare fixed?: boolean;

    /**
     * An attribute changes rapidly so subscriptions would not be useful.  Not available for subscription.
     */
    declare changesOmitted?: boolean;

    /**
     * An attribute contributes to a scene.
     */
    declare scene?: boolean;

    /**
     * An attribute generates data useful for interval or change reporting.
     */
    declare reportable?: boolean;

    /**
     * A cluster only appears once on a node for a given device type.
     */
    declare singleton?: boolean;

    /**
     * An attribute or event broadcasts a limited number of occurrences for performance reasons.
     */
    declare quieter?: boolean;

    /**
     * A command's input or output may be larger than than an IPv6 MTU of 1280 bytes.
     */
    declare largeMessage?: boolean;

    /**
     * A cluster provides verbose diagnostics and will be omitted from wildcard expansion.
     */
    declare diagnostics?: boolean;

    /**
     * Writes to an attribute are legal only in the context of a transaction.
     */
    declare atomic?: boolean;

    /**
     * A set of properties disallowed for a device type.
     */
    declare disallowed?: Quality.AllProperties;

    /**
     * Initialize from a Quality.All definition or a string conforming to the
     * "other quality" DSL defined in the Matter specification.
     */
    constructor(definition: Quality.Definition) {
        super(definition);

        if (typeof definition === "string") {
            this.parse(this, definition);
        } else if (Array.isArray(definition)) {
            definition.map(f => this.parse(this, f));
        } else {
            Object.assign(this, definition);
        }

        this.freeze();
    }

    private parse(quality: Quality, definition: string) {
        const text = definition.toUpperCase();
        if (text === "DERIVED") {
            return;
        }

        let disallow = false;
        for (const char of text) {
            if (char === " " || char === "\t") {
                continue;
            }

            if (char === "!") {
                disallow = true;
                continue;
            }

            const field = Quality.Flag[char as Quality.FlagName];
            if (field) {
                if (this.disallowed?.[field]) {
                    continue;
                }
                if (disallow) {
                    delete this[field];
                    if (!this.disallowed) {
                        this.disallowed = {};
                    }
                    this.disallowed[field] = true;
                    disallow = false;
                } else {
                    this[field] = true;
                }
            } else {
                quality.error("UNKNOWN_QUALITY_FLAG", `Unknown flag "${char}"`);
            }
        }
    }

    /**
     * Display quality using standard Matter syntax.
     */
    override toString() {
        const flags = [] as Quality.FlagName[];

        for (const f of Quality.FlagNames) {
            const field = Quality.Flag[f];
            if (this[field] && !this.disallowed?.[field]) {
                flags.push(f);
            }
        }

        return flags.join(" ");
    }
}

export namespace Quality {
    /**
     * Various ways to define quality.
     */
    export type Definition = Ast | `${Flag}`[] | string | undefined;

    /**
     * All qualities designated as "other qualities" in the Matter specification.
     */
    export enum Field {
        nullable = "X",
        nonvolatile = "N",
        fixed = "F",
        scene = "S",
        reportable = "P",
        changesOmitted = "C",
        singleton = "I",
        quieter = "Q",
        largeMessage = "L",
        diagnostics = "K",
        atomic = "T",
    }

    /**
     * Quality flags and the logical field they map to.
     */
    export enum Flag {
        X = "nullable",
        N = "nonvolatile",
        F = "fixed",
        S = "scene",
        P = "reportable",
        C = "changesOmitted",
        I = "singleton",
        Q = "quieter",
        L = "largeMessage",
        K = "diagnostics",
        T = "atomic",
    }

    /**
     * Valid "other quality" flags.
     */
    export type FlagName = `${Field}`;

    /**
     * Runtime version of QualityFlag.
     */
    export const FlagNames: FlagName[] = ["X", "N", "F", "S", "P", "C", "I", "Q", "L", "K", "T"];

    /**
     * Quality values that apply to data fields.
     */
    export type DataField = {
        /**
         * Designates a data field as nullable?
         *
         * Scope: data field
         */
        nullable?: boolean;
    };

    /**
     * Quality values that apply to attribute data.
     */
    export type AttributeData = DataField & {
        /**
         * Designates attribute value persistant across restarts?
         */
        nonvolatile?: boolean;

        /**
         * Designates a value as unchanging short of software replacement.
         */
        fixed?: boolean;

        /**
         * Designates a fast-changing value for which delta changes are
         * unavailable.
         */
        changesOmitted?: boolean;

        /**
         * Designates data with fluctuating product rate or where some deltas are meaningless or otherwise undesirable
         * to report.
         */
        quieter?: boolean;

        /**
         * Designates attribute as mutable only via atomic write.
         */
        atomic?: boolean;
    };

    /**
     * Quality values that apply to attributes.
     */
    export type Attribute = AttributeData & {
        /**
         * Designates an attribute as part of a scene.
         */
        scene?: boolean;

        /**
         * Designates best-effort reporting as available for an attribute.
         */
        reportable?: boolean;
    };

    export type Command = {
        /**
         * Designates commands with payloads that potentially exceed a single IPv6 packet (1280 bytes, the minimum IPv6
         * MTU).
         */
        largeMessage?: boolean;
    };

    export type Cluster = {
        /**
         * Designates a cluster as a singleton on the node for the device type.
         */
        singleton?: boolean;

        /**
         * Designates a cluster as a diagnostics cluster.  Diagnostics clusters may be omitted from attribute expansion.
         */
        diagnostics?: boolean;
    };

    /**
     * Quality properties that apply to device types.
     */
    export type AllProperties = Attribute & Command & Cluster;

    /**
     * Quality values that apply to device types.
     */
    export type DeviceType = AllProperties & {
        /**
         * Designates qualities that are disallowed for the device type.
         */
        disallowed?: AllProperties;
    };

    /**
     * Values for all qualities designated as "other qualities" in the Matter
     * specification.
     */
    export type Ast = DeviceType;
}
