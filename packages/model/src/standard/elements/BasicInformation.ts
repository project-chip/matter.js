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
    EventElement as Event,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const BasicInformation = Cluster(
    {
        name: "BasicInformation", id: 0x28, classification: "node", pics: "BINFO",
        details: "This cluster provides attributes and events for determining basic information about Nodes, which " +
            "supports both Commissioning and operational determination of Node characteristics, such as Vendor " +
            "ID, Product ID and serial number, which apply to the whole Node.",
        xref: { document: "core", section: "11.1" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute({
        name: "DataModelRevision", id: 0x0, type: "uint16", access: "R V", conformance: "M",
        constraint: "desc", quality: "F",
        details: "This attribute shall be set to the revision number of the Data Model against which the Node is " +
            "certified. The value of this attribute shall be one of the valid values listed in Section 7.1.1, " +
            "“Revision History”.",
        xref: { document: "core", section: "11.1.5.1" }
    }),

    Attribute({
        name: "VendorName", id: 0x1, type: "string", access: "R V", conformance: "M", constraint: "max 32",
        quality: "F",
        details: "This attribute shall specify a human readable (displayable) name of the vendor for the Node.",
        xref: { document: "core", section: "11.1.5.2" }
    }),

    Attribute({
        name: "VendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M", quality: "F",
        details: "This attribute shall specify the Vendor ID.",
        xref: { document: "core", section: "11.1.5.3" }
    }),

    Attribute({
        name: "ProductName", id: 0x3, type: "string", access: "R V", conformance: "M", constraint: "max 32",
        quality: "F",
        details: "This attribute shall specify a human readable (displayable) name of the model for the Node such as " +
            "the model number (or other identifier) assigned by the vendor.",
        xref: { document: "core", section: "11.1.5.4" }
    }),

    Attribute({
        name: "ProductId", id: 0x4, type: "uint16", access: "R V", conformance: "M", quality: "F",
        details: "This attribute shall specify the Product ID assigned by the vendor that is unique to the specific " +
            "product of the Node.",
        xref: { document: "core", section: "11.1.5.5" }
    }),

    Attribute({
        name: "NodeLabel", id: 0x5, type: "string", access: "RW VM", conformance: "M", constraint: "max 32",
        default: "", quality: "N",
        details: "Indicates a user defined name for the Node. This attribute SHOULD be set during initial " +
            "commissioning and may be updated by further reconfigurations.",
        xref: { document: "core", section: "11.1.5.6" }
    }),

    Attribute({
        name: "Location", id: 0x6, type: "string", access: "RW VA", conformance: "M", constraint: "2",
        default: "XX", quality: "N",

        details: "This attribute shall be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or " +
            "special area of geographic interest in which the Node is located at the time of the attribute being " +
            "set. This attribute shall be set during initial commissioning (unless already set) and may be " +
            "updated by further reconfigurations. This attribute may affect some regulatory aspects of the Node’s " +
            "operation, such as radio transmission power levels in given spectrum allocation bands if " +
            "technologies where this is applicable are used. The Location’s region code shall be interpreted in a " +
            "case-insensitive manner. If the Node cannot understand the location code with which it was " +
            "configured, or the location code has not yet been configured, it shall configure itself in a region- " +
            "agnostic manner as determined by the vendor, avoiding region-specific assumptions as much as is " +
            "practical. The special value XX shall indicate that region-agnostic mode is used.",

        xref: { document: "core", section: "11.1.5.7" }
    }),

    Attribute({
        name: "HardwareVersion", id: 0x7, type: "uint16", access: "R V", conformance: "M", default: 0,
        quality: "F",
        details: "This attribute shall specify the version number of the hardware of the Node. The meaning of its " +
            "value, and the versioning scheme, are vendor defined.",
        xref: { document: "core", section: "11.1.5.8" }
    }),

    Attribute({
        name: "HardwareVersionString", id: 0x8, type: "string", access: "R V", conformance: "M",
        constraint: "1 to 64", quality: "F",
        details: "This attribute shall specify the version number of the hardware of the Node. The meaning of its " +
            "value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be " +
            "used to provide a more user-friendly value than that represented by the HardwareVersion attribute.",
        xref: { document: "core", section: "11.1.5.9" }
    }),

    Attribute({
        name: "SoftwareVersion", id: 0x9, type: "uint32", access: "R V", conformance: "M",
        constraint: "desc", default: 0, quality: "F",

        details: "This attribute shall contain the current version number for the software running on this Node." +
            "\n" +
            "The version number can be compared using a total ordering to determine if a version is logically " +
            "newer than another one. A larger value of SoftwareVersion is newer than a lower value, from the " +
            "perspective of software updates (see Section 11.20.3.3, “Availability of Software Images”). Nodes " +
            "may query this field to determine the currently running version of software on another given Node.",

        xref: { document: "core", section: "11.1.5.10" }
    }),

    Attribute({
        name: "SoftwareVersionString", id: 0xa, type: "string", access: "R V", conformance: "M",
        constraint: "1 to 64", quality: "F",

        details: "This attribute shall contain a current human-readable representation for the software running on the " +
            "Node. This version information may be conveyed to users. The maximum length of the " +
            "SoftwareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple " +
            "7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the value " +
            "to a variety of cultures." +
            "\n" +
            "Examples of version strings include \"1.0\", \"1.2.3456\", \"1.2-2\", \"1.0b123\", \"1.2_3\".",

        xref: { document: "core", section: "11.1.5.11" }
    }),

    Attribute({
        name: "ManufacturingDate", id: 0xb, type: "string", access: "R V", conformance: "O",
        constraint: "8 to 16", quality: "F",
        details: "This attribute shall specify the date that the Node was manufactured. The first 8 characters shall " +
            "specify the date of manufacture of the Node in international date notation according to ISO 8601, " +
            "i.e., YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or " +
            "other related information at the option of the vendor. The format of this information is vendor " +
            "defined.",
        xref: { document: "core", section: "11.1.5.12" }
    }),

    Attribute({
        name: "PartNumber", id: 0xc, type: "string", access: "R V", conformance: "O", constraint: "max 32",
        quality: "F",

        details: "This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node " +
            "whose meaning and numbering scheme is vendor defined." +
            "\n" +
            "Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be " +
            "different packaging (with different PartNumbers) for different regions; also different colors of a " +
            "product might share the ProductID but may have a different PartNumber.",

        xref: { document: "core", section: "11.1.5.13" }
    }),

    Attribute({
        name: "ProductUrl", id: 0xd, type: "string", access: "R V", conformance: "O", constraint: "max 256",
        quality: "F",
        details: "This attribute shall specify a link to a product specific web page. The specified URL SHOULD resolve " +
            "to a maintained web page available for the lifetime of the product. The syntax of this attribute " +
            "shall follow the syntax as specified in RFC 1738 and shall use the https scheme. The maximum length " +
            "of this attribute is 256 ASCII characters.",
        xref: { document: "core", section: "11.1.5.14" }
    }),

    Attribute({
        name: "ProductLabel", id: 0xe, type: "string", access: "R V", conformance: "O",
        constraint: "max 64", quality: "F",
        details: "This attribute shall specify a vendor specific human readable (displayable) product label. The " +
            "ProductLabel attribute may be used to provide a more user-friendly value than that represented by " +
            "the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as " +
            "defined within the VendorName attribute.",
        xref: { document: "core", section: "11.1.5.15" }
    }),

    Attribute({
        name: "SerialNumber", id: 0xf, type: "string", access: "R V", conformance: "O",
        constraint: "max 32", quality: "F",
        details: "This attribute shall specify a human readable (displayable) serial number.",
        xref: { document: "core", section: "11.1.5.16" }
    }),

    Attribute({
        name: "LocalConfigDisabled", id: 0x10, type: "bool", access: "RW VM", conformance: "O",
        default: false, quality: "N",
        details: "This attribute shall allow a local Node configuration to be disabled. When this attribute is set to " +
            "True the Node shall disable the ability to configure the Node through an on-Node user interface. The " +
            "value of the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect " +
            "the user’s ability to trigger a factory reset on the Node.",
        xref: { document: "core", section: "11.1.5.17" }
    }),

    Attribute({
        name: "Reachable", id: 0x11, type: "bool", access: "R V", conformance: "O", default: true,
        details: "This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is " +
            "implicitly True (and its use is optional)." +
            "\n" +
            "Its main use case is in the derived Bridged Device Basic Information cluster where it is used to " +
            "indicate whether the bridged device is reachable by the bridge over the non-native network.",
        xref: { document: "core", section: "11.1.5.18" }
    }),

    Attribute({
        name: "UniqueId", id: 0x12, type: "string", access: "R V", conformance: "M", constraint: "max 32",
        quality: "F",

        details: "Indicates a unique identifier for the device, which is constructed in a manufacturer specific " +
            "manner." +
            "\n" +
            "It may be constructed using a permanent device identifier (such as device MAC address) as basis. In " +
            "order to prevent tracking," +
            "\n" +
            "  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier" +
            "\n" +
            "  • it shall be updated when the device is factory reset" +
            "\n" +
            "  • it shall NOT be identical to the SerialNumber attribute" +
            "\n" +
            "  • it shall NOT be printed on the product or delivered with the product" +
            "\n" +
            "The value does not need to be human readable, since it is intended for machine to machine (M2M) " +
            "communication." +
            "\n" +
            "NOTE" +
            "\n" +
            "NOTE" +
            "\n" +
            "The conformance of the UniqueID attribute was optional in cluster revisions prior to revision 4." +
            "\n" +
            "This UniqueID attribute shall NOT be the same as the Persistent Unique ID which is used in the " +
            "Rotating Device Identifier mechanism.",

        xref: { document: "core", section: "11.1.5.19" }
    }),

    Attribute({
        name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct", access: "R V", conformance: "M",
        quality: "F",

        details: "This attribute shall provide the minimum guaranteed value for some system-wide resource capabilities " +
            "that are not otherwise cluster-specific and do not appear elsewhere. This attribute may be used by " +
            "clients to optimize communication with Nodes by allowing them to use more than the strict minimum " +
            "values required by this specification, wherever available." +
            "\n" +
            "The values supported by the server in reality may be larger than the values provided in this " +
            "attribute, such as if a server is not resource-constrained at all. However, clients SHOULD only rely " +
            "on the amounts provided in this attribute." +
            "\n" +
            "Note that since the fixed values within this attribute may change over time, both increasing and " +
            "decreasing, as software versions change for a given Node, clients SHOULD take care not to assume" +
            "\n" +
            "forever unchanging values and SHOULD NOT cache this value permanently at Commissioning time.",

        xref: { document: "core", section: "11.1.5.20" }
    }),

    Attribute({
        name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct", access: "R V",
        conformance: "O", quality: "F",
        details: "This attribute shall provide information about the appearance of the product, which could be useful " +
            "to a user trying to locate or identify the node.",
        xref: { document: "core", section: "11.1.5.21" }
    }),

    Attribute({
        name: "SpecificationVersion", id: 0x15, type: "uint32", access: "R V", conformance: "M",
        constraint: "desc", default: 0, quality: "F",

        details: "This attribute shall contain the current version number for the specification version this Node was " +
            "certified against. The version number can be compared using a total ordering to determine if a " +
            "version is logically newer than another one. A larger value of SpecificationVersion is newer than a " +
            "lower value." +
            "\n" +
            "Nodes may query this field to determine the currently supported version of the specification on " +
            "another given Node." +
            "\n" +
            "The format of this number is segmented as its four component bytes. Bit positions for the fields are " +
            "as follows:" +
            "\n" +
            "For example, a SpecificationVersion value of 0x0102AA00 is composed of 4 version components, " +
            "representing a version 1.2.170.0." +
            "\n" +
            "In the example above:" +
            "\n" +
            "  • Major version is the uppermost byte (0x01)." +
            "\n" +
            "  • Minor version is the following byte (0x02)." +
            "\n" +
            "  • Patch version is 170/0xAA." +
            "\n" +
            "  • Reserved1 value is 0." +
            "\n" +
            "The initial revision (1.0) of this specification (1.0) was 0x01000000. Matter Spring 2024 release " +
            "(1.3) was 0x01030000." +
            "\n" +
            "If the SpecificationVersion is absent or zero, such as in Basic Information cluster revisions prior " +
            "to Revision 3, the specification version cannot be properly inferred unless other heuristics are " +
            "employed." +
            "\n" +
            "Comparison of SpecificationVersion shall always include the total value over 32 bits, without " +
            "masking reserved parts.",

        xref: { document: "core", section: "11.1.5.22" }
    }),

    Attribute({
        name: "MaxPathsPerInvoke", id: 0x16, type: "uint16", access: "R V", conformance: "M",
        constraint: "min 1", default: 1, quality: "F",

        details: "Indicates the maximum number of elements in a single InvokeRequests list (see Section 8.8.2, “Invoke " +
            "Request Action”) that the Node is able to process. Note that since this attribute may change over " +
            "time, both increasing and decreasing, as software versions change for a given Node, clients SHOULD " +
            "take care not to assume forever unchanging values and SHOULD NOT cache this value permanently at " +
            "Commissioning time." +
            "\n" +
            "If the MaxPathsPerInvoke attribute is absent or zero, such as in Basic Information cluster revisions " +
            "prior to Revision 3, clients shall assume a value of 1.",

        xref: { document: "core", section: "11.1.5.23" }
    }),

    Event(
        {
            name: "StartUp", id: 0x0, access: "V", conformance: "M", priority: "critical",
            details: "The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or " +
                "reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it " +
                "completes a boot or reboot process.",
            xref: { document: "core", section: "11.1.6.1" }
        },

        Field({
            name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall be set to the same value as the one available in the SoftwareVersion attribute.",
            xref: { document: "core", section: "11.1.6.1.1" }
        })
    ),

    Event({
        name: "ShutDown", id: 0x1, access: "V", conformance: "O", priority: "critical",
        details: "The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a " +
            "best-effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event " +
            "recorded by the Node. This event SHOULD be delivered urgently to current subscribers on a best- " +
            "effort basis. Any subsequent incoming interactions to the Node may be dropped until the completion " +
            "of a future boot or reboot process.",
        xref: { document: "core", section: "11.1.6.2" }
    }),

    Event(
        {
            name: "Leave", id: 0x2, access: "V", conformance: "O", priority: "info",

            details: "The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as " +
                "when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some " +
                "other manufacturer specific action to disable or reset the operational data in the Node. When a " +
                "Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer " +
                "usable, and subsequent interactions targeting that fabric will most likely fail." +
                "\n" +
                "Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the " +
                "fabric by removing related bindings, access control list entries and other data referencing the " +
                "leaving Node.",

            xref: { document: "core", section: "11.1.6.3" }
        },

        Field({
            name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M", constraint: "1 to 254",
            details: "This field shall contain the local Fabric Index of the fabric which the node is about to leave.",
            xref: { document: "core", section: "11.1.6.3.1" }
        })
    ),

    Event(
        {
            name: "ReachableChanged", id: 0x3, access: "V", conformance: "desc", priority: "info",
            details: "This event shall be supported if and only if the Reachable attribute is supported." +
                "\n" +
                "This event (when supported) shall be generated when there is a change in the Reachable attribute." +
                "\n" +
                "Its main use case is in the derived Bridged Device Basic Information cluster.",
            xref: { document: "core", section: "11.1.6.4" }
        },

        Field({
            name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M",
            details: "This field shall indicate the value of the Reachable attribute after it was changed.",
            xref: { document: "core", section: "11.1.6.4.1" }
        })
    ),

    Datatype(
        {
            name: "ProductFinishEnum", type: "enum8",
            details: "The data type of ProductFinishEnum is derived from enum8.",
            xref: { document: "core", section: "11.1.4.1" }
        },
        Field({ name: "Other", id: 0x0, conformance: "M", description: "Product has some other finish not listed below." }),
        Field({ name: "Matte", id: 0x1, conformance: "M", description: "Product has a matte finish." }),
        Field({ name: "Satin", id: 0x2, conformance: "M", description: "Product has a satin finish." }),
        Field({ name: "Polished", id: 0x3, conformance: "M", description: "Product has a polished or shiny finish." }),
        Field({ name: "Rugged", id: 0x4, conformance: "M", description: "Product has a rugged finish." }),
        Field({ name: "Fabric", id: 0x5, conformance: "M", description: "Product has a fabric finish." })
    ),

    Datatype(
        {
            name: "ColorEnum", type: "enum8",
            details: "The data type of ColorEnum is derived from enum8.",
            xref: { document: "core", section: "11.1.4.2" }
        },
        Field({ name: "Black", id: 0x0, conformance: "M", description: "Approximately RGB #000000." }),
        Field({ name: "Navy", id: 0x1, conformance: "M", description: "Approximately RGB #000080." }),
        Field({ name: "Green", id: 0x2, conformance: "M", description: "Approximately RGB #008000." }),
        Field({ name: "Teal", id: 0x3, conformance: "M", description: "Approximately RGB #008080." }),
        Field({ name: "Maroon", id: 0x4, conformance: "M", description: "Approximately RGB #800080." }),
        Field({ name: "Purple", id: 0x5, conformance: "M", description: "Approximately RGB #800080." }),
        Field({ name: "Olive", id: 0x6, conformance: "M", description: "Approximately RGB #808000." }),
        Field({ name: "Gray", id: 0x7, conformance: "M", description: "Approximately RGB #808080." }),
        Field({ name: "Blue", id: 0x8, conformance: "M", description: "Approximately RGB #0000FF." }),
        Field({ name: "Lime", id: 0x9, conformance: "M", description: "Approximately RGB #00FF00." }),
        Field({ name: "Aqua", id: 0xa, conformance: "M", description: "Approximately RGB #00FFFF." }),
        Field({ name: "Red", id: 0xb, conformance: "M", description: "Approximately RGB #FF0000." }),
        Field({ name: "Fuchsia", id: 0xc, conformance: "M", description: "Approximately RGB #FF00FF." }),
        Field({ name: "Yellow", id: 0xd, conformance: "M", description: "Approximately RGB #FFFF00." }),
        Field({ name: "White", id: 0xe, conformance: "M", description: "Approximately RGB #FFFFFF." }),
        Field({ name: "Nickel", id: 0xf, conformance: "M", description: "Typical hardware \"Nickel\" color." }),
        Field({ name: "Chrome", id: 0x10, conformance: "M", description: "Typical hardware \"Chrome\" color." }),
        Field({ name: "Brass", id: 0x11, conformance: "M", description: "Typical hardware \"Brass\" color." }),
        Field({ name: "Copper", id: 0x12, conformance: "M", description: "Typical hardware \"Copper\" color." }),
        Field({ name: "Silver", id: 0x13, conformance: "M", description: "Typical hardware \"Silver\" color." }),
        Field({ name: "Gold", id: 0x14, conformance: "M", description: "Typical hardware \"Gold\" color." })
    ),

    Datatype(
        {
            name: "ProductAppearanceStruct", type: "struct",
            details: "This structure provides a description of the product’s appearance.",
            xref: { document: "core", section: "11.1.4.3" }
        },
        Field({
            name: "Finish", id: 0x0, type: "ProductFinishEnum", conformance: "M",
            details: "This field shall indicate the visible finish of the product.",
            xref: { document: "core", section: "11.1.4.3.1" }
        }),

        Field({
            name: "PrimaryColor", id: 0x1, type: "ColorEnum", conformance: "M", quality: "X",
            details: "This field indicates the representative color of the visible parts of the product. If the product " +
                "has no representative color, the field shall be null.",
            xref: { document: "core", section: "11.1.4.3.2" }
        })
    ),

    Datatype(
        {
            name: "CapabilityMinimaStruct", type: "struct",
            details: "This structure provides constant values related to overall global capabilities of this Node, that " +
                "are not cluster-specific.",
            xref: { document: "core", section: "11.1.4.4" }
        },

        Field({
            name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", conformance: "M", constraint: "min 3",
            default: 3,
            details: "This field shall indicate the actual minimum number of concurrent CASE sessions that are supported " +
                "per fabric." +
                "\n" +
                "This value shall NOT be smaller than the required minimum indicated in Section 4.14.2.8, “Minimal " +
                "Number of CASE Sessions”.",
            xref: { document: "core", section: "11.1.4.4.1" }
        }),

        Field({
            name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", conformance: "M", constraint: "min 3",
            default: 3,
            details: "This field shall indicate the actual minimum number of concurrent subscriptions supported per " +
                "fabric." +
                "\n" +
                "This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe " +
                "Transaction”.",
            xref: { document: "core", section: "11.1.4.4.2" }
        })
    )
);

MatterDefinition.children.push(BasicInformation);
