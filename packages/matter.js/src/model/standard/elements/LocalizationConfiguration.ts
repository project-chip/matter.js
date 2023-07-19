/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "LocalizationConfiguration", id: 0x2b, classification: "node",
    description: "Localization Configuration",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing common languages, units of measurements, and numerical formatting standards. As " +
        "such, Nodes that visually or audibly convey information need a mechanism by which they can be " +
        "configured to use a user’s preferred language, units, etc." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and " +
        "configuring localization information that a Node shall utilize when conveying values to a user.",

    xref: { document: "core", section: "11.3" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "ActiveLocale", id: 0x0, type: "string", access: "RW VM", conformance: "M",
            constraint: "max 35", quality: "N",

            details: "The ActiveLocale attribute shall represent the locale that the Node is currently configured to use " +
                "when conveying information. The ActiveLocale attribute shall be a Language Tag as defined by BCP47 " +
                "[https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute shall have a default value " +
                "assigned by the Vendor and shall be a value contained within the SupportedLocales attribute list." +
                "\n" +
                "An attempt to write a value to ActiveLocale that is not present in SupportedLocales shall result in " +
                "a CONSTRAINT_ERROR error.",

            xref: { document: "core", section: "11.3.4.1" }
        },

        {
            tag: "attribute", name: "SupportedLocales", id: 0x1, type: "list", access: "R V", conformance: "M",
            constraint: "max 32[max 35]", quality: "F",
            details: "The SupportedLocales attribute shall represent a list of locale strings that are valid values for " +
                "the ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items " +
                "within the list SHOULD NOT express any meaning.",
            xref: { document: "core", section: "11.3.4.2" },
            children: [{ tag: "datatype", name: "entry", type: "string" }]
        }
    ]
});
