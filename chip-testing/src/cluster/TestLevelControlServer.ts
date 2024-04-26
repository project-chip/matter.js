/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { LevelControlServer, MoveToLevelRequest } from "@project-chip/matter.js/behavior/definitions/level-control";
import { Logger } from "@project-chip/matter.js/log";

const logger = Logger.get("TestLevelControlServer");

export class TestLevelControlServer extends LevelControlServer {
    override initialize() {
        logger.info("TestLevelControlServer initialized");
        return super.initialize();
    }

    override moveToLevel(request: MoveToLevelRequest) {
        logger.info(`TestLevelControlServer move level to ${Logger.toJSON(request)}`);
        return super.moveToLevel(request);
    }

    override moveToLevelLogic(level: number, transitionTime: number | null, withOnOff: boolean) {
        logger.info(`TestLevelControlServer move level to ${level} LOGIC`);
        return super.moveToLevelLogic(level, transitionTime, withOnOff);
    }
}
