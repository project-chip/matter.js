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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AdministratorCommissioning = Cluster(
    {
        name: "AdministratorCommissioning", id: 0x3c, classification: "node", pics: "CADMIN",

        details: "This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines " +
            "Attributes, Commands and Responses needed for this purpose." +
            "\n" +
            "There are two methods of commissioning, Basic Commissioning which may be supported and is described " +
            "in Section 5.6.2, “Basic Commissioning Method (BCM)” and Enhanced Commissioning which shall be " +
            "supported and is described in Section 5.6.3, “Enhanced Commissioning Method (ECM)”." +
            "\n" +
            "For the management of Operational Credentials and Trusted Root Certificates, the Node Operational " +
            "Credentials cluster is used." +
            "\n" +
            "If the Administrator Commissioning Cluster server instance is present on an endpoint with the Root " +
            "Node device type in the Descriptor cluster DeviceTypeList, then:" +
            "\n" +
            "  • The Commissioning Window shall be opened or closed on the node that the Root Node endpoint is " +
            "    on." +
            "\n" +
            "  • The attributes shall indicate the state of the node that the Root Node endpoint is on." +
            "\n" +
            "If the Administrator Commissioning Cluster server instance is present on an endpoint with the " +
            "Bridged Node device type in the Descriptor cluster DeviceTypeList, then:" +
            "\n" +
            "  • The Commissioning Window shall be opened or closed on the node represented by the Bridged Node." +
            "\n" +
            "  • The attributes shall indicate the state of the node that is represented by the Bridged Node.",

        xref: { document: "core", section: "11.19" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.19.4" } },
        Field({ name: "BC", constraint: "0", description: "Basic", details: "Node supports Basic Commissioning Method." })
    ),

    Attribute({
        name: "WindowStatus", id: 0x0, type: "CommissioningWindowStatusEnum", access: "R V",
        conformance: "M",

        details: "Indicates whether a new Commissioning window has been opened by an Administrator, using either the " +
            "OpenCommissioningWindow command or the OpenBasicCommissioningWindow command." +
            "\n" +
            "This attribute shall revert to WindowNotOpen upon expiry of a commissioning window." +
            "\n" +
            "NOTE" +
            "\n" +
            "An initial commissioning window is not opened using either the OpenCommissioningWindow command or " +
            "the OpenBasicCommissioningWindow command, and therefore this attribute shall be set to WindowNotOpen " +
            "on initial commissioning.",

        xref: { document: "core", section: "11.19.7.1" }
    }),

    Attribute({
        name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", access: "R V", conformance: "M",
        quality: "X",

        details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
            "FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may " +
            "be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster." +
            "\n" +
            "If, during an open commissioning window, the fabric for the Administrator that opened the window is " +
            "removed, then this attribute shall be set to null." +
            "\n" +
            "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

        xref: { document: "core", section: "11.19.7.2" }
    }),

    Attribute({
        name: "AdminVendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M", quality: "X",

        details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
            "Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This field " +
            "shall match the VendorID field of the Fabrics attribute list entry associated with the Administrator " +
            "having opened the window, at the time of window opening. If the fabric for the Administrator that " +
            "opened the window is removed from the node while the commissioning window is still open, this " +
            "attribute shall NOT be updated." +
            "\n" +
            "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

        xref: { document: "core", section: "11.19.7.3" }
    }),

    Command(
        {
            name: "OpenCommissioningWindow", id: 0x0, access: "A T", conformance: "M", direction: "request",
            response: "status",

            details: "This command is used by a current Administrator to instruct a Node to go into commissioning mode. " +
                "The Enhanced Commissioning Method specifies a window of time during which an already commissioned " +
                "Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration " +
                "of the OpenCommissioningWindow command." +
                "\n" +
                "When the OpenCommissioningWindow command expires or commissioning completes, the Node shall remove " +
                "the Passcode by deleting the PAKE passcode verifier as well as stop publishing the DNS-SD record " +
                "corresponding to this command as described in Section 4.3.1, “Commissionable" +
                "\n" +
                "Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a " +
                "CommissioningComplete command, see Section 5.5, “Commissioning Flows”." +
                "\n" +
                "The parameters for OpenCommissioningWindow command are as follows:" +
                "\n" +
                "A current Administrator may invoke this command to put a node in commissioning mode for the next " +
                "Administrator. On completion, the command shall return a cluster specific status code from the " +
                "Section 11.19.6, “Status Codes” below reflecting success or reasons for failure of the operation. " +
                "The new Administrator shall discover the Node on the IP network using DNS-based Service Discovery " +
                "(DNS-SD) for commissioning." +
                "\n" +
                "If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments " +
                "arise, this command shall fail with a cluster specific status code of PAKEParameterError." +
                "\n" +
                "If a commissioning window is already currently open, this command shall fail with a cluster specific " +
                "status code of Busy." +
                "\n" +
                "If the fail-safe timer is currently armed, this command shall fail with a cluster specific status " +
                "code of Busy, since it is likely that concurrent commissioning operations from multiple separate " +
                "Commissioners are about to take place." +
                "\n" +
                "In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.",

            xref: { document: "core", section: "11.19.8.1" }
        },

        Field({
            name: "CommissioningTimeout", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
            details: "This field shall specify the time in seconds during which commissioning session establishment is " +
                "allowed by the Node. This timeout value shall follow guidance as specified in the initial " +
                "Announcement Duration. The CommissioningTimeout applies only to cessation of any announcements and " +
                "to accepting of new commissioning sessions; it does not apply to abortion of connections, i.e., a " +
                "commissioning session SHOULD NOT abort prematurely upon expiration of this timeout.",
            xref: { document: "core", section: "11.19.8.1.1" }
        }),

        Field({
            name: "PakePasscodeVerifier", id: 0x1, type: "octstr", conformance: "M", constraint: "97",

            details: "This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, " +
                "“Password-Authenticated Key Exchange (PAKE)”) computed by the existing Administrator to be used for " +
                "this commissioning. The field is concatenation of two values (w0 || L) shall be " +
                "(CRYPTO_GROUP_SIZE_BYTES + CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in " +
                "Crypto_PAKEValues_Responder. It shall be derived from an ephemeral passcode (See PAKE). It shall be " +
                "deleted by the Node at the end of commissioning or expiration of the OpenCommissioningWindow " +
                "command, and shall be deleted by the existing Administrator after sending it to the Node(s).",

            xref: { document: "core", section: "11.19.8.1.2" }
        }),

        Field({
            name: "Discriminator", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 4095",
            details: "This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see " +
                "Commissioning Discriminator) for discovery by the new Administrator. The new Administrator can find " +
                "and filter DNS-SD records by long discriminator to locate and initiate commissioning with the " +
                "appropriate Node.",
            xref: { document: "core", section: "11.19.8.1.3" }
        }),

        Field({
            name: "Iterations", id: 0x3, type: "uint32", conformance: "M", constraint: "1000 to 100000",
            details: "This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE " +
                "passcode verifier to be used for this commissioning, which shall be sent by the Node to the new " +
                "Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The permitted " +
                "range of values shall match the range specified in Section 3.9, “Password-Based Key Derivation " +
                "Function (PBKDF)”, within the definition of the Crypto_PBKDFParameterSet.",
            xref: { document: "core", section: "11.19.8.1.4" }
        }),

        Field({
            name: "Salt", id: 0x4, type: "octstr", conformance: "M", constraint: "16 to 32",

            details: "This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode " +
                "verifier to be used for this commissioning, which shall be sent by the Node to the new " +
                "Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The " +
                "constraints on the value shall match those specified in Section 3.9, “Password-Based Key Derivation " +
                "Function (PBKDF)”, within the definition of the Crypto_PBKDFParameterSet." +
                "\n" +
                "When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as " +
                "described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in " +
                "CommissioningTimeout. When the command is received by a ICD, it shall enter into active mode. The " +
                "ICD shall remain in Active Mode as long as one of these conditions is met:" +
                "\n" +
                "  • A commissioning window is open." +
                "\n" +
                "  • There is an armed fail-safe timer.",

            xref: { document: "core", section: "11.19.8.1.5" }
        })
    ),

    Command(
        {
            name: "OpenBasicCommissioningWindow", id: 0x1, access: "A T", conformance: "BC",
            direction: "request", response: "status",

            details: "This command may be used by a current Administrator to instruct a Node to go into commissioning " +
                "mode, if the node supports the Basic Commissioning Method. The Basic Commissioning Method specifies " +
                "a window of time during which an already commissioned Node accepts PASE sessions. The current " +
                "Administrator shall specify a timeout value for the duration of the OpenBasicCommissioningWindow " +
                "command." +
                "\n" +
                "If a commissioning window is already currently open, this command shall fail with a cluster specific " +
                "status code of Busy." +
                "\n" +
                "If the fail-safe timer is currently armed, this command shall fail with a cluster specific status " +
                "code of Busy, since it is likely that concurrent commissioning operations from multiple separate " +
                "Commissioners are about to take place." +
                "\n" +
                "In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID." +
                "\n" +
                "The commissioning into a new Fabric completes when the Node successfully receives a " +
                "CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The new Administrator shall " +
                "discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.",

            xref: { document: "core", section: "11.19.8.2" }
        },

        Field({
            name: "CommissioningTimeout", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",

            details: "This field shall specify the time in seconds during which commissioning session establishment is " +
                "allowed by the Node. This timeout shall follow guidance as specified in the initial Announcement " +
                "Duration." +
                "\n" +
                "When a Node receives the OpenBasicCommissioningWindow command, it shall begin advertising on DNS-SD " +
                "as described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in " +
                "CommissioningTimeout. When the command is received by a ICD, it shall enter into active mode. The " +
                "ICD shall remain in Active Mode as long as one of these conditions is met:" +
                "\n" +
                "  • A commissioning window is open." +
                "\n" +
                "  • There is an armed fail-safe timer.",

            xref: { document: "core", section: "11.19.8.2.1" }
        })
    ),

    Command({
        name: "RevokeCommissioning", id: 0x2, access: "A T", conformance: "M", direction: "request",
        response: "status",

        details: "This command is used by a current Administrator to instruct a Node to revoke any active " +
            "OpenCommissioningWindow or OpenBasicCommissioningWindow command. This is an idempotent command and " +
            "the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop " +
            "publishing the DNS-SD record associated with the OpenCommissioningWindow or " +
            "OpenBasicCommissioningWindow command, see Section 4.3.1, “Commissionable Node Discovery”." +
            "\n" +
            "If no commissioning window was open at time of receipt, this command shall fail with a cluster " +
            "specific status code of WindowNotOpen." +
            "\n" +
            "If the commissioning window was open and the fail-safe was armed when this command is received, the " +
            "device shall immediately expire the fail-safe and perform the cleanup steps outlined" +
            "\n" +
            "in Section 11.10.7.2.2, “Behavior on expiry of Fail-Safe timer”.",

        xref: { document: "core", section: "11.19.8.3" }
    }),

    Datatype(
        { name: "CommissioningWindowStatusEnum", type: "enum8", xref: { document: "core", section: "11.19.5.1" } },
        Field({ name: "WindowNotOpen", id: 0x0, conformance: "M", description: "Commissioning window not open" }),
        Field({
            name: "EnhancedWindowOpen", id: 0x1, conformance: "M",
            description: "An Enhanced Commissioning Method window is open"
        }),
        Field({
            name: "BasicWindowOpen", id: 0x2, conformance: "BC",
            description: "A Basic Commissioning Method window is open"
        })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8", xref: { document: "core", section: "11.19.6.1" } },
        Field({
            name: "Busy", id: 0x2, conformance: "M",
            description: "Could not be completed because another commissioning is in progress"
        }),
        Field({
            name: "PakeParameterError", id: 0x3, conformance: "M",
            description: "Provided PAKE parameters were incorrectly formatted or otherwise invalid"
        }),
        Field({ name: "WindowNotOpen", id: 0x4, conformance: "M", description: "No commissioning window was currently open" })
    )
);

MatterDefinition.children.push(AdministratorCommissioning);
