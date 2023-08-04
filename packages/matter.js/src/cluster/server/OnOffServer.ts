/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffCluster } from "../definitions/OnOffCluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServer.js";
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
});

export const createDefaultOnOffClusterServer = (attributeInitialValues?: AttributeInitialValues<typeof OnOffCluster.attributes>) => ClusterServer(
    OnOffCluster,
    attributeInitialValues ?? {
        onOff: false,
    },
    OnOffClusterHandler()
);
