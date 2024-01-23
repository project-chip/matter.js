/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Node } from "../Node.js";
import { RootEndpoint as BaseRootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Identity } from "../../util/Type.js";

/**
 * A client-side Matter {@link Node}.
 */
export class ClientNode<T extends ClientNode.RootEndpoint> extends Node<T> {
    // TODO
}

export namespace ClientNode {
    export const RootEndpoint = BaseRootEndpoint.with(
        // TODO
    );
    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
