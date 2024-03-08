/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../common/MatterError.js";
import { RootEndpoint as BaseRootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { Identity } from "../util/Type.js";
import { Node } from "./Node.js";

/**
 * A client-side Matter {@link Node}.
 */
export class ClientNode<T extends ClientNode.RootEndpoint> extends Node<T> {
    constructor(type?: T, options?: Node.Options<T>);

    constructor(config: Node.Options<T>);

    constructor(definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        super(Node.nodeConfigFor(ClientNode.RootEndpoint as T, definition, options));

        throw new NotImplementedError("Client node API is not implemented yet, please use CommissioningController");
    }
}

export namespace ClientNode {
    export const RootEndpoint = BaseRootEndpoint
        .with
        // TODO
        ();
    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
