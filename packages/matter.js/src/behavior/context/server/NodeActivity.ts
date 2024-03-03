/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../../../log/Diagnostic.js";
import { Observable } from "../../../util/Observable.js";

/**
 * Tracks activity associated with a node.
 */
export class NodeActivity {
    #actors = new Map<{}, NodeActivity.Actor>();
    #active = new Observable<[]>();
    #inactive = new Observable<[]>();

    get isActive() {
        return this.#actors.size !== 0;
    }

    get active() {
        return this.#active;
    }

    get inactive() {
        return this.#inactive;
    }

    get actors() {
        return [...this.#actors.values()];
    }

    add(host: {}) {
        const elapsed = Diagnostic.elapsed();
        this.#actors.set(host, {
            get name() {
                return Diagnostic.via(host.toString());
            },
            get elapsed() {
                return elapsed;
            },
        });

        if (this.#actors.size === 1) {
            this.#active.emit();
        }
    }

    delete(host: {}) {
        this.#actors.delete(host);
        if (this.#actors.size === 0) {
            this.#inactive.emit();
        }
    }
}

export namespace NodeActivity {
    export interface Actor {
        readonly name: string;
        readonly elapsed: Diagnostic.Elapsed;
    }
}
