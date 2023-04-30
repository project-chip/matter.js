/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffCluster } from "../OnOffCluster.js";
import { ClusterServerHandlers } from "./ClusterServer.js";
import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";

/*
TODO: Global Cluster fields needs to be added also here because, as discussed, based on the implementation.
* Cluster Revision: 4 (If I get it right from the Specs - Application Cluster Specs 1.5.1)
* FeatureMap:
  * Bit 0 set to 0 for now because not supported
* AttributeList:
  * onOff
* AcceptedCommandList:
  * Supported always: Off, On, Toggle
* GeneratedCommandList: empty
* EventList: empty
* FabricIndex: empty
 */

export const OnOffClusterHandler: () => ClusterServerHandlers<typeof OnOffCluster> = () => ({
    on: async ({ attributes: { onOff } }) => {
        onOff.set(true);
    },
    off: async ({ attributes: { onOff } }) => {
        onOff.set(false);
    },
    toggle: async ({ attributes: { onOff } }) => {
        if (onOff.get()) {
            onOff.set(false);
        } else {
            onOff.set(true);
        }
    },
});

export const createDefaultOnOffClusterServer = () => new ClusterServer(
    OnOffCluster,
    {
        lightingLevelControl: false,
    },
    {
        onOff: false,
    },
    OnOffClusterHandler()
);
