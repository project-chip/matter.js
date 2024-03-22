/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LevelControlBehavior } from "./LevelControlBehavior.js";
import { MoveToLevelRequest } from "./LevelControlInterface.js";

/**
 * This is the default server implementation of {@link LevelControlBehavior}.
 */
export class LevelControlServer extends LevelControlBehavior {
    override async moveToLevel(request: MoveToLevelRequest) {
        this.state.currentLevel = request.level;
    }
}
