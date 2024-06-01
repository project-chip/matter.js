/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { IdentifyServer } from "@project-chip/matter.js/behavior/definitions/identify";
import { Identify } from "@project-chip/matter.js/cluster";
import { Logger } from "@project-chip/matter.js/log";

const logger = Logger.get("TestIdentifyServer");

export class TestIdentifyServer extends IdentifyServer {
    override triggerEffect(triggerEffectRequest: Identify.TriggerEffectRequest): void {
        const { effectIdentifier, effectVariant } = triggerEffectRequest;
        logger.info(`Triggering effect ${effectIdentifier} with variant ${effectVariant}`);
    }
}
