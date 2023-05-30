/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";
import { LevelControlCluster } from "../LevelControlCluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServer.js";


// TODO: Create temporary options based on mask and override. How to expose to user of the library?

export const LevelControlClusterHandler: () => ClusterServerHandlers<typeof LevelControlCluster> = () => ({
    moveToLevel: async ({ request: { level }, attributes: { currentLevel } }) => {
        currentLevel.set(level);
    },

    // TODO: How much this capability should be in the library vs. in the caller of the library? Doing the
    // move/step/stop (withOnOff) in the library would be making assumptions about the capabilities of the
    // underlying hardware. But how to expose these paramters to the caller of the library? Callback with
    // temporary options?
    // move: async () => {
    //     throw new Error("Not implemented")
    // },


    move: async ({ request: { moveMode, rate }, attributes: { currentLevel: levelAttr } }) => {
        const cl = levelAttr.get() ?? 0;
        rate = rate ?? 0;

        if (moveMode === 0) {
            // Up mode
            const newLevel = Math.min(cl + rate, 255);
            levelAttr.set(newLevel);
        } else if (moveMode === 1) {
            // Down mode
            const newLevel = Math.max(cl - rate, 0);
            levelAttr.set(newLevel);
        }
    },

    step: async ({ request: { stepMode, stepSize }, attributes: { currentLevel: levelAttr } }) => {
        const cl = levelAttr.get() ?? 0;
        let newLevel;

        if (stepMode === 0) {
            // Up step mode
            newLevel = Math.min(cl + stepSize, 255);
        } else if (stepMode === 1) {
            // Down step mode
            newLevel = Math.max(cl - stepSize, 0);
        } else {
            // Stop step mode
            return;
        }

        levelAttr.set(newLevel);
        // You can handle the transition time here if required
    },

    stop: async () => {
        throw new Error("Not implemented")
    },

    moveToLevelWithOnOff: async function({ request: { level }, attributes: { currentLevel } }) {

        /* TODO: Need to be able to access or check existance of optional attributes
        if ( level <= minLevel.get() && associated onOff device on){
           // turn associated onOff device off
        } else if associated onOff device off {
           // turn associated onOff device on
        }
        */

        currentLevel.set(level);
    },

    moveWithOnOff: async () => {
        throw new Error("Not implemented")
    },

    stepWithOnOff: async () => {
        throw new Error("Not implemented")
    },

    stopWithOnOff: async () => {
        throw new Error("Not implemented")
    },
});


export const createDefaultLevelControlClusterServer = (
    attributeInitialValues?: AttributeInitialValues<typeof LevelControlCluster.attributes>
) =>
    ClusterServer(LevelControlCluster, attributeInitialValues ?? {
        currentLevel: 0,
        remainingTime: 0,
        onLevel: 0,
        onTransitionTime: 0,
        offTransitionTime: 0,
        defaultMoveRate: 0,
        startUpCurrentLevel: 0,
        options: { executeIfOff: false, coupleColorTempToLevel: false },
        maxLevel: 0,
        minLevel: 0,
        onOffTransitionTime: 0
    }, LevelControlClusterHandler());