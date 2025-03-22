/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type Chai from "chai";
import "chai-as-promised";
import type { Boot } from "./mocks/boot.js";
import type { DiagnosticMessageLike, MockLogger } from "./mocks/logging.js";
import type { MockTime } from "./mocks/time.js";
import type { TestDescriptor } from "./test-descriptor.js";

declare global {
    // Expose Chai globally
    const expect: typeof Chai.expect;

    // Expose API for controlling time
    let MockTime: MockTime;

    // Expose API for controlling logging
    let MockLogger: MockLogger;

    /**
     * If present, the following hooks are engaged by matter.js packages to enable mocking.  We use globals rather than
     * imports so we can hook the modules regardless of whether they're loaded as CommonJS or ESM.
     */
    let MatterHooks:
        | undefined
        | {
              /**
               * Set boot manager.
               */
              bootSetup(boot: Boot): void;

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
               * Receive intercepted log messages.
               */
              loggerSink?: (text: string, message: DiagnosticMessageLike) => void;

              /**
               * Extract error details.
               */
              messageAndStackFor?: (
                  error: unknown,
                  parentStack?: string[],
              ) => { message: string; stack?: string; stackLines?: string[] };
          };

    namespace Mocha {
        interface Suite {
            readonly descriptor: TestDescriptor;
        }

        interface Test {
            descriptor: TestDescriptor;
        }
    }
}
