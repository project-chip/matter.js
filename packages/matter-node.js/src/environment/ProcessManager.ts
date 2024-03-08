/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Destructable } from "@project-chip/matter.js/common";
import { Environment, RuntimeService, VariableService } from "@project-chip/matter.js/environment";
import { Logger } from "@project-chip/matter.js/log";
import type { NodeJsEnvironment } from "./NodeJsEnvironment.js";

const logger = Logger.get("ProcessManager");

/**
 * ProcessManager watches Node.js signals SIGINT and SIGUSR2 to interrupt the Matter.js runtime and trigger Matter.js
 * diagnostics respectively.  It sets the process exit code to 0 if the runtime completes without error and to 1 if the
 * runtime crashes.
 *
 * If enabled, SIGINT will perform a soft interrupt of the runtime once.  ProcessManager will not process subsequent
 * interrupts so they will result in forced exit if no other handler exists.
 *
 * {@link NodeJsEnvironment} installs a ProcessManager into the default Matter.js {@link Environment}.
 *
 * You can modify behavior by:
 *
 *   - Passing an {@link Environment} other than {@link Environment.default} to your components
 *
 *   - Disabling signal and exit code support with {@link VariableService} variables "runtime.signals" and
 *     "runtime.exitcode" respectively
 *
 *   - Destroying ProcessManager in the default environment using {@link ProcessManager.close}
 *
 *   - Subclassing ProcessManager, overriding specific functionality, and installing with {@link Environment.set}
 */
export class ProcessManager implements Destructable {
    protected runtime: RuntimeService;

    constructor(protected env: Environment) {
        this.runtime = env.get(RuntimeService);

        this.runtime.started.on(this.startListener);
        this.runtime.stopped.on(this.stopListener);
        this.runtime.crashed.on(this.crashListener);
    }

    close() {
        this.runtime.started.off(this.startListener);
        this.runtime.stopped.off(this.stopListener);
        this.runtime.crashed.off(this.crashListener);
        this.#ignoreSignals();
    }

    [Symbol.dispose]() {
        this.close();
    }

    protected get hasSignalSupport() {
        return this.env.vars.get("runtime.signals", true);
    }

    protected get hasExitCodeSupport() {
        return this.env.vars.get("runtime.exitcode", true);
    }

    protected startListener = () => {
        if (this.hasSignalSupport) {
            process.on("SIGINT", this.interruptHandler);
            process.on("SIGTERM", this.interruptHandler);
            process.on("SIGUSR2", this.diagnosticHandler);
            process.on("exit", this.exitHandler);
        }
    };

    protected stopListener = () => {
        this.#ignoreSignals();

        if (this.hasExitCodeSupport && process.exitCode === undefined) {
            process.exitCode = 0;
        }
    };

    protected crashListener = () => {
        if (this.hasExitCodeSupport) {
            process.exitCode = 1;
        }
    };

    protected interruptHandler = () => {
        this.runtime.cancel();
    };

    protected exitHandler = () => {
        if (process.exitCode === 13) {
            logger.error("Internal error: Premature process exit because ongoing work has stalled");
        }
    };

    protected diagnosticHandler = () => {
        if (this.hasSignalSupport) {
            process.on("SIGUSR2", this.env.diagnose);
        }
        this.env.diagnose();
    };

    #ignoreSignals() {
        process.off("SIGINT", this.interruptHandler);
        process.off("SIGTERM", this.interruptHandler);
        process.off("SIGUSR2", this.diagnosticHandler);
        process.off("exit", this.exitHandler);
    }
}
