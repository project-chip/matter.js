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
    CommandElement as Command
} from "../../elements/index.js";

export const BridgedDeviceBasicInformation = Cluster(
    {
        name: "BridgedDeviceBasicInformation", id: 0x39, type: "BasicInformation",
        classification: "endpoint", pics: "BRBINFO",

        details: "This cluster is a derived cluster of the Basic Information cluster and serves two purposes towards a " +
            "Node communicating with a Bridge:" +
            "\n" +
            "  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged, " +
            "    and" +
            "\n" +
            "  • Provide a centralized collection of attributes that the Node may collect to aid in conveying " +
            "    information regarding the Bridged Device to a user, such as the vendor name, the model name, or " +
            "    user-assigned name." +
            "\n" +
            "This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When the " +
            "functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall only " +
            "be exposed on the Endpoint which is at the top of the hierarchy for the functionality of that " +
            "Bridged Device." +
            "\n" +
            "This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an " +
            "endpoint with an Aggregator device type." +
            "\n" +
            "This cluster has been derived from the Basic Information Cluster, and provides generic information " +
            "about the Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant " +
            "for a Bridged Device (e.g. ProductID since it is not a Matter device). For other attributes, the " +
            "information which is listed as Mandatory for the Basic Information Cluster, may not be available " +
            "when the Bridged Device does not provide it to the Bridge, and the Bridge has no other means to " +
            "determine it. For such cases where the information for a particular attribute is not available, the " +
            "Bridge SHOULD NOT include the attribute in the cluster for this Bridged Device. See below for " +
            "Conformance details.",

        xref: { document: "core", section: "9.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "9.13.4" } },
        Field({
            name: "BIS", conformance: "O", constraint: "20", description: "BridgedIcdSupport",
            details: "Support bridged ICDs."
        })
    ),

    Attribute({ name: "DataModelRevision", id: 0x0, conformance: "X", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "VendorName", id: 0x1, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "VendorId", id: 0x2, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ProductName", id: 0x3, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ProductId", id: 0x4, conformance: "desc", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "NodeLabel", id: 0x5, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "Location", id: 0x6, conformance: "X", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "HardwareVersion", id: 0x7, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "HardwareVersionString", id: 0x8, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "SoftwareVersion", id: 0x9, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "SoftwareVersionString", id: 0xa, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ManufacturingDate", id: 0xb, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "PartNumber", id: 0xc, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ProductUrl", id: 0xd, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ProductLabel", id: 0xe, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "SerialNumber", id: 0xf, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "LocalConfigDisabled", id: 0x10, conformance: "X", xref: { document: "core", section: "9.13.5" } }),

    Attribute({
        name: "Reachable", id: 0x11, conformance: "M",

        details: "This attribute shall be used to indicate whether the bridged device is reachable by the bridge, so a " +
            "Matter Node which wants to communicate with a bridged device can get an indication that this might " +
            "fail (when the attribute is False). Determination of reachability might not be perfect (e.g. " +
            "depending on technology employed), so the Matter Node SHOULD be aware of the risk of false positives " +
            "and negatives on reachability determination. For example, a bridged device may be marked as " +
            "unreachable while it could actually be reached, and vice-versa. Also, detection (and indication) " +
            "that a bridged device is not longer reachable may be delayed due to the technique employed (e.g. " +
            "detecting that a number of expected messages from the bridged device did not arrive). Also see event " +
            "ReachableChanged below.",

        xref: { document: "core", section: "9.13.5.1" }
    }),

    Attribute({
        name: "UniqueId", id: 0x12, conformance: "M",

        details: "This attribute shall, for a Bridged Device, be updated when the Bridge is factory reset. If the " +
            "bridged device does not provide some unique id (e.g. in the case of bridging from non-Matter " +
            "devices, or in case of bridging Matter devices from an earlier revision which were not required to " +
            "provide a UniqueID attribute), the bridge shall generate a unique id on behalf of the bridged " +
            "device." +
            "\n" +
            "NOTE The UniqueID attribute was optional in cluster revisions prior to revision 4.",

        xref: { document: "core", section: "9.13.5.2" }
    }),

    Attribute({ name: "CapabilityMinima", id: 0x13, conformance: "X", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "ProductAppearance", id: 0x14, conformance: "O", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "SpecificationVersion", id: 0x15, conformance: "X", xref: { document: "core", section: "9.13.5" } }),
    Attribute({ name: "MaxPathsPerInvoke", id: 0x16, conformance: "X", xref: { document: "core", section: "9.13.5" } }),
    Event({ name: "StartUp", id: 0x0, conformance: "O", priority: "critical", xref: { document: "core", section: "9.13.7" } }),
    Event({
        name: "ShutDown", id: 0x1, conformance: "O", priority: "critical",
        xref: { document: "core", section: "9.13.7" }
    }),

    Event(
        {
            name: "Leave", id: 0x2, conformance: "O", priority: "critical",

            details: "The Leave event SHOULD be generated by the bridge when it detects that the associated device has " +
                "left the non-Matter network." +
                "\n" +
                "NOTE" +
                "\n" +
                "The FabricIndex field has the X conformance, indicating it shall NOT be present. This event, in the " +
                "context of Bridged Device Basic Information cluster, has no usable fields, but the original Basic " +
                "Information cluster’s field definition is kept for completeness.",

            xref: { document: "core", section: "9.13.7.1" }
        },

        Field({ name: "FabricIndex", id: 0x0, conformance: "X" })
    ),

    Event({
        name: "ReachableChanged", id: 0x3, conformance: "M", priority: "critical",
        details: "This event shall be generated when there is a change in the Reachable attribute. Its purpose is to " +
            "provide an indication towards interested parties that the reachability of a bridged device has " +
            "changed over its native connectivity technology, so they may take appropriate action." +
            "\n" +
            "After (re)start of a bridge this event may be generated.",
        xref: { document: "core", section: "9.13.7.2" }
    }),

    Event(
        {
            name: "ActiveChanged", id: 0x80, access: "V", conformance: "BIS", priority: "info",
            details: "This event (when supported) shall be generated the next time a bridged device becomes active after a " +
                "KeepActive command is received." +
                "\n" +
                "See KeepActive for more details.",
            xref: { document: "core", section: "9.13.7.3" }
        },

        Field({
            name: "PromisedActiveDuration", id: 0x0, type: "uint32", conformance: "M", constraint: "desc",

            details: "This field shall indicate the minimum duration, in milliseconds, that the bridged device will remain " +
                "active after receiving the initial request from the KeepActive processing steps." +
                "\n" +
                "If the bridged device is a Matter Intermittently Connected Device, PromisedActiveDuration shall be " +
                "set to the PromisedActiveDuration value returned in the StayActiveResponse command." +
                "\n" +
                "If the bridged device is not a Matter Intermittently Connected Device, the implementation of this is " +
                "best-effort since it may interact with non-native protocol.",

            xref: { document: "core", section: "9.13.7.3.1" }
        })
    ),

    Command(
        {
            name: "KeepActive", id: 0x80, access: "O", conformance: "BIS", direction: "request",
            response: "status",

            details: "Upon receipt, the server shall attempt to keep the bridged device active for the duration specified " +
                "by the command, when the device is next active." +
                "\n" +
                "The implementation of this is best-effort since it may interact with non-native protocols. However, " +
                "several specific protocol requirements are:" +
                "\n" +
                "  • If the bridged device is a Matter Intermittently Connected Device, then the server shall send a " +
                "    StayActiveRequest command with the StayActiveDuration field set to value of the " +
                "    StayActiveDuration field in the received command to the bridged device when the bridged device " +
                "    next sends a checks-in message or subscription report. See Intermittently Connected Devices " +
                "    Behavior for details on ICD state management." +
                "\n" +
                "When the bridge detects that the bridged device goes into an active state, an ActiveChanged event " +
                "shall be generated." +
                "\n" +
                "In order to avoid unnecessary power consumption in the bridged device:" +
                "\n" +
                "  • The server shall enter a \"pending active\" state for the associated device when the KeepActive " +
                "    command is received. The server \"pending active\" state shall expire after the amount of time " +
                "    defined by the TimeoutMs field, in milliseconds, if no subsequent KeepActive command is " +
                "    received. When a KeepActive command is received, the \"pending active\" state is set, the " +
                "    StayActiveDuration is updated to the greater of the new value and the previously stored value, " +
                "    and the TimeoutMs is updated to the greater of the new value and the remaining time until the " +
                "    prior \"pending active\" state expires." +
                "\n" +
                "  • The server shall only keep the bridged device active once for a request. (The server shall only " +
                "    consider the operation performed if an associated ActiveChanged event was generated.)",

            xref: { document: "core", section: "9.13.6.1" }
        },

        Field({
            name: "StayActiveDuration", id: 0x0, type: "uint32", conformance: "M",

            details: "This field shall indicate the duration, in milliseconds, that the device is requested to remain " +
                "active, once the device becomes active again." +
                "\n" +
                "The value of this field may be longer than the value supported by the bridged device and would, " +
                "typically, be used by the client to request the server of the bridged device to stay active and " +
                "responsive for this period to allow a sequence of message exchanges during that period." +
                "\n" +
                "The client may slightly overestimate the duration it wants the bridged device to be active for, in " +
                "order to account for network delays.",

            xref: { document: "core", section: "9.13.6.1.1" }
        }),

        Field({
            name: "TimeoutMs", id: 0x1, type: "uint32", conformance: "M", constraint: "30000 to 3600000",

            details: "This field shall indicate the period, in milliseconds, that the server will wait before the \"pending " +
                "active\" state expires. See the KeepActive Command description for details." +
                "\n" +
                "NOTE" +
                "\n" +
                "TimeoutMs is a timeout for the request, NOT the time the device will be awake for. The server will " +
                "wait for up to TimeoutMs for the device. If after TimeoutMs the ICD" +
                "\n" +
                "device does NOT check-in, the server will not perform any actions.",

            xref: { document: "core", section: "9.13.6.1.2" }
        })
    )
);

MatterDefinition.children.push(BridgedDeviceBasicInformation);
