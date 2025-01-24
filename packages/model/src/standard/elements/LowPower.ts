/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    CommandElement as Command
} from "../../elements/index.js";

export const LowPower = Cluster(
    {
        name: "LowPower", id: 0x508, classification: "application", pics: "LOWPOWER",

        details: "This cluster provides an interface for managing low power mode on a device." +
            "\n" +
            "This cluster would be supported on an endpoint that represents a physical device with a low power " +
            "mode. This cluster provides a sleep() command to allow clients to manually put the device into low " +
            "power mode. There is no command here to wake up a sleeping device because that operation often " +
            "involves other protocols such as Wake On LAN. Most devices automatically enter low power mode based " +
            "upon inactivity." +
            "\n" +
            "The cluster server for Low Power is implemented by a device that supports a low power mode, such as " +
            "a TV, Set-top box, or Smart Speaker." +
            "\n" +
            "NOTE" +
            "\n" +
            "We have considered a “DisableLowPowerMode” command but have not added it due to suspected issues " +
            "with energy consumption regulations. This can be added in the future.",

        xref: { document: "cluster", section: "1.11" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Command({
        name: "Sleep", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
        details: "This command shall put the device into low power mode.",
        xref: { document: "cluster", section: "1.11.4.1" }
    })
);

MatterDefinition.children.push(LowPower);
