/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cancellable, Lifecycle, Startable } from "../../../common/Lifecycle.js";
import { NoProviderError } from "../../../common/MatterError.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
import { Behavior } from "../../Behavior.js";
import type { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * NetworkingBehavior is the component of Matter.js that handles online connectivity for a Matter Node.
 *
 * NetworkingBehavior does not have an associated Matter cluster.  It is exclusive to Matter.js.
 */
export class NetworkBehavior extends Behavior implements Startable, Cancellable {
    static override readonly id = "network";

    static override readonly early = true;

    declare internal: NetworkBehavior.Internal;
    declare state: NetworkBehavior.State;

    start() {
        if (this.internal.runtime) {
            return;
        }

        const runtime = (this.internal.runtime = this.createRuntime());
        const part = this.part;
        runtime.construction.then(
            () => {
                part.act(agent => {
                    if (runtime.construction.status === Lifecycle.Status.Active) {
                        agent.get(NetworkBehavior).enterOnlineMode(runtime);
                    }
                });
            },

            error => {
                part.construction.crashed(error);
            },
        );
    }

    cancel() {
        const promise = this.#cancel();
        if (promise) {
            this.part.env.runtime.addWorker(promise);
        }
    }

    #cancel() {
        if (this.internal.runtime) {
            const promise = this.internal.runtime[Symbol.asyncDispose]();
            (this.part.lifecycle as NodeLifecycle).offline?.emit(this.context);
            this.internal.runtime = undefined;
            return promise;
        }
    }

    async destroy() {
        await this.#cancel();
        await this.internal.runtime?.[Symbol.asyncDispose]();
    }

    async [Symbol.asyncDispose]() {
        return this.destroy();
    }

    protected enterOnlineMode(runtime: NetworkRuntime) {
        this.state.operationalPort = runtime.operationalPort;
        (this.part.lifecycle as NodeLifecycle).online?.emit(this.context);
    }

    protected createRuntime(): NetworkRuntime {
        throw new NoProviderError(`Network runtime is not implemented for ${this}`);
    }
}

export namespace NetworkBehavior {
    export class Internal {
        runtime?: NetworkRuntime;
    }

    export class State {
        port = 5540;
        operationalPort = 5540;
    }
}
