/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type Chai from "chai";
import "chai-as-promised";
import type { MockLogger } from "./mocks/logging.js";
import type { MockTime } from "./mocks/time.js";

declare global {
    // Expose Chai globally
    const expect: typeof Chai.expect;

    // Expose API for controlling time
    let MockTime: MockTime;

    // Expose API for controlling logging
    let MockLogger: MockLogger;

    /**
     * If present, the following hooks are engaged by matter.js packages to
     * enable mocking.  We use globals rather than imports so we can hook the
     * modules regardless of whether they're loaded as CommonJS or ESM.
     */
    let MatterHooks:
        | undefined
        | {
              /**
               * Configure time.
               */
              timeSetup?: (Time: any) => void;

              /**
               * Configure logging.
               */
              loggerSetup?: (Logger: any) => void;

              /**
               * Configure crypto.
               */
              cryptoSetup?: (Crypto: any) => void;

              /**
               * Receive intercepted log messages.  The logging mocks
               */
              loggerSink?: (level: number, message: string) => void;
          };
}
