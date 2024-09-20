/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LevelControl } from "#clusters";
import { NamedHandler, NotImplementedError } from "#general";
import { WrapCommandHandler } from "../../device/Device.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

export const LevelControlDefaultClusterHandler: () => ClusterServerHandlers<typeof LevelControl.Complete> = () => ({
    moveToLevel: async ({ request: { level }, attributes: { currentLevel } }) => {
        currentLevel.setLocal(level);
    },

    // TODO: How much this capability should be in the library vs. in the caller of the library? Doing the
    // move/step/stop (withOnOff) in the library would be making assumptions about the capabilities of the
    // underlying hardware. But how to expose these parameters to the caller of the library? Callback with
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
        /* TODO: Need to be able to access or check existence of optional attributes
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

export const createDefaultLevelControlClusterServer = (
    commandHandler: NamedHandler<any>,
    attributeInitialValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
) =>
    ClusterServer(
        LevelControl.Cluster,
        attributeInitialValues ?? {
            currentLevel: 0,
            onLevel: 0,
            options: {
                executeIfOff: false,
                coupleColorTempToLevel: false,
            },
        },
        WrapCommandHandler(LevelControlDefaultClusterHandler(), commandHandler),
    );
