/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Subject } from "#action/index.js";
import { Message } from "#codec/index.js";
import { Fabric } from "#fabric/index.js";
import { MatterFlowError } from "#general";
import { Session } from "./Session.js";

export abstract class SecureSession extends Session {
    readonly isSecure = true;
    abstract fabric: Fabric | undefined;
    abstract subjectFor(message?: Message): Subject;
}

export namespace SecureSession {
    export function assert(session?: Session, errorText?: string): asserts session is SecureSession {
        if (!session?.isSecure) {
            throw new MatterFlowError(errorText ?? "Insecure session in secure context");
        }
    }
}
