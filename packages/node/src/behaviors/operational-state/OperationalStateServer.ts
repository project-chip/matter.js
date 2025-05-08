/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { OperationalState } from "#clusters/operational-state";
import { MaybePromise } from "#general";
import { OperationalStateBehavior } from "./OperationalStateBehavior.js";

/**
 * This is the default server implementation of {@link OperationalStateBehavior}.
 */
export class OperationalStateServer extends OperationalStateBehavior {
    override initialize(): MaybePromise {
        this.reactTo(this.events.operationalError$Changed, this.#handleOperationalError);
    }

    #handleOperationalError(operationalError: OperationalState.ErrorStateStruct) {
        if (operationalError.errorStateId === OperationalState.ErrorState.NoError) {
            return;
        }

        if (this.state.operationalState !== OperationalState.OperationalStateEnum.Error) {
            this.state.operationalState = OperationalState.OperationalStateEnum.Error;
        }

        this.events.operationalError.emit({ errorState: operationalError }, this.context);
    }
}
