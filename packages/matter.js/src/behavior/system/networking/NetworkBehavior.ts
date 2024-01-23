/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, NoProviderError } from "../../../common/MatterError.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { CancellablePromise } from "../../../util/Promises.js";
import { Behavior } from "../../Behavior.js";
import { ActionContext } from "../../context/ActionContext.js";
import type { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * NetworkingBehavior is the component of Matter.js that handles online connectivity for a Matter Node.
 * 
 * NetworkingBehavior does not have an associated Matter cluster.  It is exclusive to Matter.js.
 */
export class NetworkBehavior extends Behavior {
    static override readonly id = "network";

    declare internal: NetworkBehavior.Internal;
    declare state: NetworkBehavior.State;
    declare events: NetworkBehavior.Events;

    override initialize() {
        this.state.operationalPort = this.state.port;
        this.state.online = false;
    }

    /**
     * Activate networking functionality.
     */
    start() {
        if (this.internal.runtime) {
            throw new ImplementationError(`${this} is already started`);
        }
        const runtime = this.internal.runtime = this.createRuntime();

        this.part.lifecycle.act(() =>
            CancellablePromise.for(
                runtime.run(),
                () => this.cancel(),
            )
        );
    }

    /**
     * Terminate networking functionality.
     */
    async cancel() {
        this.internal.runtime?.cancel();
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
        online = false;
        port = 5540;
        operationalPort = 5540;
    }

    export class Events extends EventEmitter {
        online$Change = Observable<[value: boolean, oldValue: boolean, context: ActionContext]>();
    }
}
