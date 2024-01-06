/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../endpoint/Agent.js";
import { Part } from "../endpoint/Part.js";
import { RootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { PartOwner } from "../endpoint/part/PartOwner.js";

/**
 * A "node" is a top-level resource that is addressable directly on a network.
 *
 * NodeInterface offers interaction with a node.
 */
export interface Node extends PartOwner {
    /**
     * Clean up node resources.
     */
    [Symbol.asyncDispose](): Promise<void>;

    /**
     * Access the root endpoint.
     */
    readonly root: Agent.Instance<RootEndpoint["behaviors"]>;

    /**
     * Access the root endpoint as a {@link Part}.
     * 
     * This is a lower-level API than the {@link Agent} API available with
     * {@link root}.
     */
    readonly rootPart: Part;

    // The batch interface that follows would be an efficiency win but most
    // features are marked as provisional as of Matter 1.2 implying they are
    // not well supported, so deprioritizing implementation.

    /**
     * Batch invocation.  This optimization allows you to invoke multiple
     * requests in one network payload.
     */
    //invoke(action: InvokeRequestAction): Promise<InvokeResponseAction>;

    /**
     * Batch read.  This optimization allows you to read data for multiple
     * attributes and/or events with a single network request.
     */
    //read(action: ReadRequestAction): Promise<ReportDataAction>;

    /**
     * Batch write.  This optimization allows you to change multiple attributes
     * with a single network request.
     */
    //write(action: WriteRequestAction): Promise<WriteResponseAction>;

    /**
     * Batch subscribe.  This optimization allows you to subscribe to multiple
     * events with a single network request.
     */
    //subscribe(action: SubscribeRequestAction): Promise<SubscribeResponseAction>;
}
