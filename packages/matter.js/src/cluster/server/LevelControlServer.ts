/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { LevelControlCluster } from "../definitions/LevelControlCluster.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

// TODO: Create temporary options based on mask and override. How to expose to user of the library?

export const LevelControlClusterHandler: () => ClusterServerHandlers<typeof LevelControlCluster> = () => ({
    moveToLevel: async ({ request: { level }, attributes: { currentLevel } }) => {
        currentLevel.setLocal(level);
    },

    // TODO: How much this capability should be in the library vs. in the caller of the library? Doing the
    // move/step/stop (withOnOff) in the library would be making assumptions about the capabilities of the
    // underlying hardware. But how to expose these paramters to the caller of the library? Callback with
    // temporary options?
    move: async () => {
        throw new NotImplementedError("Not implemented");
    },

    step: async () => {
        throw new NotImplementedError("Not implemented");
    },

    stop: async () => {
        throw new NotImplementedError("Not implemented");
    },

    moveToLevelWithOnOff: async function ({ request: { level }, attributes: { currentLevel } }) {
        /* TODO: Need to be able to access or check existance of optional attributes
        if ( level <= minLevel.get() && associated onOff device on){
           // turn associated onOff device off
        } else if associated onOff device off {
           // turn associated onOff device on
        }
        */

        currentLevel.setLocal(level);
    },

    moveWithOnOff: async () => {
        throw new NotImplementedError("Not implemented");
    },

    stepWithOnOff: async () => {
        throw new NotImplementedError("Not implemented");
    },

    stopWithOnOff: async () => {
        throw new NotImplementedError("Not implemented");
    },
});
