/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { HtmlReference } from "../spec-types.js";

export enum ScanDirective {
    // Ignore section in stream
    IGNORE = 1,

    // Treat as one-level higher than actual in stream
    POP = 2,

    // Collect section as a "namespace" entry
    NAMESPACE = 3,
}

const IGNORE = () => ScanDirective.IGNORE;
const POP = () => ScanDirective.POP;
const NAMESPACE = () => ScanDirective.NAMESPACE;

type HtmlRepairs = Record<string, (ref: HtmlReference) => ScanDirective | void>;

export const ClusterHtmlRepairs: Record<string, HtmlRepairs> = {
    "General Commissioning": {
        // In 1.1 spec, command table is not here...
        "11.9.6"(subref) {
            if (subref.name === "Commands" && !subref.tables) {
                return ScanDirective.IGNORE;
            }
        },

        // ...but here
        "11.9.6.1"(subref) {
            if (subref.name === "Common fields in General Commissioning cluster responses" && subref.tables) {
                subref.name = "Commands";
                subref.detailSection = "11.9.6";
            }
        },
    },

    Thermostat: {
        "4.3.9.6": IGNORE,
        "4.3.9.7": IGNORE,

        // In 1.1 spec thermostat features is errantly nested under cluster identifiers
        "4.3.3.1": POP,
    },

    "Content Launcher": {
        // In 1.1. spec, SupportedStreamingProtocols bitmap is not here...
        "6.7.3.2": IGNORE,

        // ...but here
        "6.7.3.2.1"(subref) {
            subref.name = "SupportedStreamingProtocols Attribute";
        },
    },

    "Door Lock": {
        // These two are nested one level too deep in 1.3 spec
        "5.2.6.25.1": POP,
        "5.2.6.25.2": POP,
    },

    "Operational State": {
        // 1.2 and 1.3 use this terminology to define a subset of the values for ErrorStateEnum.  We turn into an
        // independent enum
        "ErrorStateEnum GeneralErrors Range"(subref) {
            subref.name = "GeneralErrorStateEnum Type";
            return ScanDirective.POP;
        },
    },

    "Mode Base": {
        // This is buried too deeply to fix elegantly (in a field in a datatype of the mode base cluster).  So just
        // designate as processing as a namespace
        "Mode Base Status CommonCodes Range": NAMESPACE,

        // This at a reasonable level but is a one-off.  So easiest to handle here
        "Mode Namespace": NAMESPACE,
    },
};

// Modify incoming stream to workaround specific spec issues
export function repairIncomingHtml(subref: HtmlReference, clusterRef: HtmlReference) {
    const repairs = ClusterHtmlRepairs[clusterRef.name];
    if (!repairs) {
        return;
    }

    const repair = repairs[subref.xref.section] ?? repairs[subref.name];
    if (repair) {
        return repair(subref);
    }
}
