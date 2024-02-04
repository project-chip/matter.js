/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "../../../common/MatterError.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
import { Behavior } from "../../Behavior.js";
import type { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * NetworkingBehavior is the component of Matter.js that handles online connectivity for a Matter Node.
 *
 * NetworkingBehavior does not have an associated Matter cluster.  It is exclusive to Matter.js.
 */
export class NetworkBehavior extends Behavior {
    static override readonly id = "network";

    static override readonly early = true;

    declare internal: NetworkBehavior.Internal;
    declare state: NetworkBehavior.State;

    override async initialize() {
        this.internal.runtime = this.createRuntime();
        await this.internal.runtime.construction;
        this.state.operationalPort = this.internal.runtime.operationalPort;
        (this.part.lifecycle as NodeLifecycle).online?.emit(this.context);
    }

    async [Symbol.asyncDispose]() {
        (this.part.lifecycle as NodeLifecycle).offline?.emit(this.context);
        await this.internal.runtime?.[Symbol.asyncDispose]();
    }

    protected createRuntime(): NetworkRuntime {
        throw new NoProviderError(`Network runtime is not implemented for ${this}`);
    }
}

export namespace NetworkBehavior {
    export class Internal {
        runtime?: NetworkRuntime;

        online?: (port: number) => void;
        shutdown?: () => void;
    }

    export class State {
        port = 5540;
        operationalPort = 5540;
    }
}
