/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Logger } from "@matter/main";
import { LevelControlServer } from "@matter/main/behaviors/level-control";
import { LevelControl } from "@matter/main/clusters/level-control";

const logger = Logger.get("TestLevelControlServer");

export class TestLevelControlServer extends LevelControlServer {
    override initialize() {
        logger.info("TestLevelControlServer initialized");
        return super.initialize();
    }

    override moveToLevel(request: LevelControl.MoveToLevelRequest) {
        logger.info(`TestLevelControlServer move level to ${Logger.toJSON(request)}`);
        return super.moveToLevel(request);
    }

    override moveToLevelLogic(level: number, transitionTime: number | null, withOnOff: boolean) {
        logger.info(`TestLevelControlServer move level to ${level} LOGIC`);
        return super.moveToLevelLogic(level, transitionTime, withOnOff);
    }
}
