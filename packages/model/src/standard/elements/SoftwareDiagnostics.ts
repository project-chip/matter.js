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
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const SoftwareDiagnostics = Cluster(
    {
        name: "SoftwareDiagnostics", id: 0x34, classification: "node", pics: "DGSW", quality: "K",
        details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that " +
            "may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
            "Software Diagnostics Cluster attempts to centralize all metrics that are relevant to the software " +
            "that may be running on a Node.",
        xref: { document: "core", section: "11.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.13.4" } },
        Field({
            name: "WTRMRK", constraint: "0", description: "Watermarks",
            details: "Node makes available the metrics for high watermark related to memory consumption."
        })
    ),

    Attribute(
        {
            name: "ThreadMetrics", id: 0x0, type: "list", access: "R V", conformance: "O", constraint: "max 64",
            details: "The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on " +
                "the Node shall be represented by a single entry within the ThreadMetrics attribute.",
            xref: { document: "core", section: "11.13.6.1" }
        },

        Field({ name: "entry", type: "ThreadMetricsStruct" })
    ),

    Attribute({
        name: "CurrentHeapFree", id: 0x1, type: "uint64", access: "R V", conformance: "O",
        details: "The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are " +
            "free for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.",
        xref: { document: "core", section: "11.13.6.2" }
    }),

    Attribute({
        name: "CurrentHeapUsed", id: 0x2, type: "uint64", access: "R V", conformance: "O",
        details: "The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is " +
            "being used.",
        xref: { document: "core", section: "11.13.6.3" }
    }),

    Attribute({
        name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", access: "R V", conformance: "WTRMRK",
        details: "The CurrentHeapHighWatermark attribute shall indicate the maximum amount of heap memory, in bytes, " +
            "that has been used by the Node. This value shall only be reset upon a Node reboot or upon receiving " +
            "of the ResetWatermarks command.",
        xref: { document: "core", section: "11.13.6.4" }
    }),

    Event(
        {
            name: "SoftwareFault", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "The SoftwareFault Event shall be generated when a software fault takes place on the Node.",
            xref: { document: "core", section: "11.13.8.1" }
        },

        Field({
            name: "Id", id: 0x0, type: "uint64", conformance: "M", default: 0,
            details: "The ID field shall be set to the ID of the software thread in which the last software fault " +
                "occurred.",
            xref: { document: "core", section: "11.13.8.1.1" }
        }),

        Field({
            name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
            details: "The Name field shall be set to a manufacturer-specified name or prefix of the software thread in " +
                "which the last software fault occurred.",
            xref: { document: "core", section: "11.13.8.1.2" }
        }),

        Field({
            name: "FaultRecording", id: 0x2, type: "octstr", conformance: "O", constraint: "max 1024",
            details: "The FaultRecording field shall be a manufacturer-specified payload intended to convey information to " +
                "assist in further diagnosing or debugging a software fault. The FaultRecording field may be used to " +
                "convey information such as, but not limited to, thread backtraces or register contents.",
            xref: { document: "core", section: "11.13.8.1.3" }
        })
    ),

    Command({
        name: "ResetWatermarks", id: 0x0, access: "M", conformance: "WTRMRK", direction: "request",
        response: "status",

        details: "Receipt of this command shall reset the following values which track high and lower watermarks:" +
            "\n" +
            "  • The StackFreeMinimum field of the ThreadMetrics attribute" +
            "\n" +
            "  • The CurrentHeapHighWatermark attribute This command has no payload." +
            "\n" +
            "Effect on Receipt" +
            "\n" +
            "On receipt of this command, the Node shall make the following modifications to attributes it " +
            "supports:" +
            "\n" +
            "If implemented, the server shall set the value of the CurrentHeapHighWatermark attribute to the " +
            "value of the CurrentHeapUsed attribute." +
            "\n" +
            "If implemented, the server shall set the value of the StackFreeMinimum field for every thread to the " +
            "value of the corresponding thread’s StackFreeCurrent field.",

        xref: { document: "core", section: "11.13.7.1" }
    }),

    Datatype(
        { name: "ThreadMetricsStruct", type: "struct", xref: { document: "core", section: "11.13.5.1" } },

        Field({
            name: "Id", id: 0x0, type: "uint64", conformance: "M",
            details: "The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of " +
                "the thread. Efforts SHOULD be made to avoid reusing ID values when possible.",
            xref: { document: "core", section: "11.13.5.1.1" }
        }),

        Field({
            name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
            details: "The Name field shall be set to a vendor defined name or prefix of the software thread that is static " +
                "for the duration of the thread.",
            xref: { document: "core", section: "11.13.5.1.2" }
        }),

        Field({
            name: "StackFreeCurrent", id: 0x2, type: "uint32", conformance: "O",
            details: "The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not " +
                "being utilized on the respective thread.",
            xref: { document: "core", section: "11.13.5.1.3" }
        }),

        Field({
            name: "StackFreeMinimum", id: 0x3, type: "uint32", conformance: "O",
            details: "The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has " +
                "been available at any point between the current time and this attribute being reset or initialized " +
                "on the respective thread. This value shall only be reset upon a Node reboot or upon receiving of the " +
                "ResetWatermarks command.",
            xref: { document: "core", section: "11.13.5.1.4" }
        }),

        Field({
            name: "StackSize", id: 0x4, type: "uint32", conformance: "O",
            details: "The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated for " +
                "use by the respective thread.",
            xref: { document: "core", section: "11.13.5.1.5" }
        })
    )
);

MatterDefinition.children.push(SoftwareDiagnostics);
