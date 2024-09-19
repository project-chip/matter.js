/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataVersion } from "#types";
import { AttributePath } from "../paths/AttributePath.js";
import { BasePayload } from "./BasePayload.js";

export namespace AttributePayload {
    /**
     * Designates an operation to apply to a single entry of a list.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.2.5
     */
    export enum ListChange {
        replace = "replace",
        add = "add",
        delete = "delete",
        modify = "modify",
    }

    export type WildcardWrite = AttributePath.Write & {
        data: any;
        change?: ListChange;
    };

    export type ConcreteWrite = AttributePath.Concrete & {
        data: any;
        change?: ListChange;
        version?: DataVersion;
    };

    /**
     * Write data.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.2.5
     */
    export type Write = WildcardWrite | ConcreteWrite;

    /**
     * Write response.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.7.3.1
     */
    export type Response = BasePayload.Status<AttributePath.Concrete>;

    /**
     * Read result.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.2.6
     */
    export type Report = BasePayload.DataOrStatus<
        AttributePath.Concrete,
        {
            change?: ListChange;
            version: DataVersion;
        }
    >;
}
