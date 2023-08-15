/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { WrapCommandHandler } from "../../device/Device.js";
import { NamedHandler } from "../../util/NamedHandler.js";
import { OnOff, OnOffCluster } from "../definitions/OnOffCluster.js";
import { ClusterServer } from "./ClusterServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServerTypes.js";

export const OnOffClusterDefaultHandler: () => ClusterServerHandlers<typeof OnOff.Complete> = () => ({
    on: async ({ attributes: { onOff } }) => {
        onOff.setLocal(true);
    },
    off: async ({ attributes: { onOff } }) => {
        onOff.setLocal(false);
    },
    toggle: async ({ attributes: { onOff } }) => {
        if (onOff.getLocal()) {
            onOff.setLocal(false);
        } else {
            onOff.setLocal(true);
        }
    },
    offWithEffect: async () => {
        throw new NotImplementedError("Not implemented");
    },
    onWithRecallGlobalScene: async () => {
        throw new NotImplementedError("Not implemented");
    },
    onWithTimedOff: async () => {
        throw new NotImplementedError("Not implemented");
    },
});

export const createDefaultOnOffClusterServer = (
    commandHandler?: NamedHandler<any>,
    attributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
) =>
    ClusterServer(
        OnOffCluster,
        attributeInitialValues ?? {
            onOff: false,
        },
        WrapCommandHandler(OnOffClusterDefaultHandler(), commandHandler),
    );
