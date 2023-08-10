/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { DeviceTypeElement } from "./DeviceTypeElement.js";

/**
 * Runtime representation of an endpoint.
 */
export type EndpointElement = BaseElement & {
    id: number;
    tag: `${EndpointElement.Tag}`;
    children: DeviceTypeElement[];
};

export function EndpointElement(definition: EndpointElement.Properties) {
    return BaseElement(EndpointElement.Tag, definition) as EndpointElement;
}

export namespace EndpointElement {
    export type Tag = ElementTag.Endpoint;
    export const Tag = ElementTag.Endpoint;
    export type Properties = BaseElement.Properties<DeviceTypeElement>;
}
