/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "AdministratorCommissioning", id: 0x3c, classification: "node",
    description: "Administrator Commissioning",
    details: "This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines " +
        "Attributes, Commands and Responses needed for this purpose." +
        "\n" +
        "For the management of Operational Credentials and Trusted Root Certificates, the Node Operational " +
        "Credentials cluster is used.",
    xref: { document: "core", section: "11.18" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.18.4" },
            children: [{
                tag: "datatype", name: "BC", constraint: "0", description: "Basic",
                details: "Node supports Basic Commissioning Method."
            }]
        },

        {
            tag: "attribute", name: "WindowStatus", id: 0x0, type: "CommissioningWindowStatusEnum",
            access: "R V", conformance: "M",

            details: "This attribute shall indicate whether a new Commissioning window has been opened by an " +
                "Administrator, using either the OCW command or the OBCW command." +
                "\n" +
                "This attribute shall revert to WindowNotOpen upon expiry of a commissioning window." +
                "\n" +
                "Note that an initial commissioning window is not opened using either the OCW command or the OBCW " +
                "command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.",

            xref: { document: "core", section: "11.18.7.1" }
        },

        {
            tag: "attribute", name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", access: "R V",
            conformance: "M", quality: "X",

            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                "FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This " +
                "may be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster." +
                "\n" +
                "If, during an open commissioning window, the fabric for the Administrator that opened the window is " +
                "removed, then this attribute shall be set to null." +
                "\n" +
                "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

            xref: { document: "core", section: "11.18.7.2" }
        },

        {
            tag: "attribute", name: "AdminVendorId", id: 0x2, type: "vendor-id", access: "R V",
            conformance: "M", quality: "X",

            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                "Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This " +
                "field shall match the VendorID field of the Fabrics attribute list entry associated with the " +
                "Administrator having opened the window, at the time of window opening. If the fabric for the " +
                "Administrator that opened the window is removed from the node while the commissioning window is " +
                "still open, this attribute shall NOT be updated." +
                "\n" +
                "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

            xref: { document: "core", section: "11.18.7.3" }
        },

        {
            tag: "command", name: "OpenCommissioningWindow", id: 0x0, access: "A T", conformance: "M",
            direction: "request", response: "status",

            details: "This command is used by a current Administrator to instruct a Node to go into commissioning mode. " +
                "The Enhanced Commissioning Method specifies a window of time during which an already commissioned " +
                "Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration " +
                "of OCW." +
                "\n" +
                "When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the " +
                "PAKE passcode verifier as well as stop publishing the DNS-SD record corresponding to this command " +
                "as described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric " +
                "completes when the Node successfully receives a CommissioningComplete command, see Section 5.5, " +
                "“Commissioning Flows”." +
                "\n" +
                "The parameters for OpenCommissioningWindow command are as follows:" +
                "\n" +
                "A current Administrator may invoke this command to put a node in commissioning mode for the next " +
                "Administrator. On completion, the command shall return a cluster specific status code from the " +
                "enumeration below reflecting success or reasons for failure of the operation. The new Administrator " +
                "shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for " +
                "commissioning." +
                "\n" +
                "If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments " +
                "arise, this command shall fail with a cluster specific status code of PAKEParameterError." +
                "\n" +
                "If a commissioning window is already currently open, this command shall fail with a cluster " +
                "specific status code of Busy." +
                "\n" +
                "If the fail-safe timer is currently armed, this command shall fail with a cluster specific status " +
                "code of Busy, since it is likely that concurrent commissioning operations from multiple separate " +
                "Commissioners are about to take place." +
                "\n" +
                "In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.",

            xref: { document: "core", section: "11.18.8.1" },

            children: [
                {
                    tag: "datatype", name: "CommissioningTimeout", id: 0x0, type: "uint16", conformance: "M",
                    constraint: "desc",

                    details: "This field shall specify the time in seconds during which commissioning session establishment is " +
                        "allowed by the Node. This is known as Open Commissioning Window (OCW). This timeout value shall " +
                        "follow guidance as specified in Announcement Duration. The CommissioningTimeout applies only to " +
                        "cessation of any announcements and to accepting of new commissioning sessions; it does not apply to " +
                        "abortion of connections, i.e., a commissioning session SHOULD NOT abort prematurely upon expiration " +
                        "of this timeout.",

                    xref: { document: "core", section: "11.18.8.1.1" }
                },

                {
                    tag: "datatype", name: "PakePasscodeVerifier", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "97",

                    details: "This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, " +
                        "“Password-Authenticated Key Exchange (PAKE)”) computed by the existing Administrator to be used for " +
                        "this commissioning. The field is concatenation of two values (w0 || L) shall be " +
                        "(CRYPTO_GROUP_SIZE_BYTES + CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in " +
                        "Crypto_PAKEValues_Responder. It shall be derived from an ephemeral passcode (See PAKE). It shall be " +
                        "deleted by the Node at the end of commissioning or expiration of OCW, and shall be deleted by the " +
                        "existing Administrator after sending it to the Node(s).",

                    xref: { document: "core", section: "11.18.8.1.2" }
                },

                {
                    tag: "datatype", name: "Discriminator", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 4095",
                    details: "This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see " +
                        "Commissioning Discriminator) for discovery by the new Administrator. The new Administrator can find " +
                        "and filter DNS-SD records by long discriminator to locate and initiate commissioning with the " +
                        "appropriate Node.",
                    xref: { document: "core", section: "11.18.8.1.3" }
                },

                {
                    tag: "datatype", name: "Iterations", id: 0x3, type: "uint32", conformance: "M",
                    constraint: "1000 to 100000",
                    details: "This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE " +
                        "passcode verifier to be used for this commissioning, which shall be sent by the Node to the new " +
                        "Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The " +
                        "permitted range of values shall match the range specified in Section 3.9, “Password-Based Key " +
                        "Derivation Function (PBKDF)”, within the definition of the Crypto_PBKDFParameterSet.",
                    xref: { document: "core", section: "11.18.8.1.4" }
                },

                {
                    tag: "datatype", name: "Salt", id: 0x4, type: "octstr", conformance: "M", constraint: "16 to 32",

                    details: "This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode " +
                        "verifier to be used for this commissioning, which shall be sent by the Node to the new" +
                        "\n" +
                        "Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The " +
                        "constraints on the value shall match those specified in Section 3.9, “Password-Based Key Derivation " +
                        "Function (PBKDF)”, within the definition of the Crypto_PBKDFParameterSet." +
                        "\n" +
                        "When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as " +
                        "described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in " +
                        "Section 11.18.8.1.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall " +
                        "enter into active mode and set its fast-polling interval to SLEEPY_ACTIVE_INTERVAL for at least the " +
                        "entire duration of the CommissioningTimeout.",

                    xref: { document: "core", section: "11.18.8.1.5" }
                }
            ]
        },

        {
            tag: "command", name: "OpenBasicCommissioningWindow", id: 0x1, access: "A T", conformance: "BC",
            direction: "request", response: "status",

            details: "This command may be used by a current Administrator to instruct a Node to go into commissioning " +
                "mode, if the node supports the Basic Commissioning Method. The Basic Commissioning Method specifies " +
                "a window of time during which an already commissioned Node accepts PASE sessions. The current " +
                "Administrator shall specify a timeout value for the duration of OBCW." +
                "\n" +
                "If a commissioning window is already currently open, this command shall fail with a cluster " +
                "specific status code of Busy." +
                "\n" +
                "If the fail-safe timer is currently armed, this command shall fail with a cluster specific status " +
                "code of Busy, since it is likely that concurrent commissioning operations from multiple separate " +
                "Commissioners are about to take place." +
                "\n" +
                "In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID." +
                "\n" +
                "The commissioning into a new Fabric completes when the Node successfully receives a " +
                "CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The new Administrator shall " +
                "discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning." +
                "\n" +
                "This field shall specify the time in seconds during which commissioning session establishment is " +
                "allowed by the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall " +
                "follow guidance as specified in Announcement Duration." +
                "\n" +
                "When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on " +
                "DNS-SD as described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as " +
                "described in Section 11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a " +
                "SED, it shall enter into active mode and set its fast-polling interval to SLEEPY_AC" +
                "\n" +
                "TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.",

            xref: { document: "core", section: "11.18.8.2" },
            children: [{
                tag: "datatype", name: "CommissioningTimeout", id: 0x0, type: "uint16", conformance: "M",
                constraint: "desc"
            }]
        },

        {
            tag: "command", name: "RevokeCommissioning", id: 0x2, access: "A T", conformance: "M",
            direction: "request", response: "status",

            details: "This command is used by a current Administrator to instruct a Node to revoke any active Open " +
                "Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and " +
                "the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop " +
                "publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic " +
                "Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”." +
                "\n" +
                "If no commissioning window was open at time of receipt, this command shall fail with a cluster " +
                "specific status code of WindowNotOpen.",

            xref: { document: "core", section: "11.18.8.3" }
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",

            children: [
                {
                    tag: "datatype", name: "Busy", id: 0x2,
                    details: "Could not be completed because another commissioning is in progress",
                    xref: { document: "core", section: "11.18.6" }
                },
                {
                    tag: "datatype", name: "PakeParameterError", id: 0x3,
                    details: "Provided PAKE parameters were incorrectly formatted or otherwise invalid",
                    xref: { document: "core", section: "11.18.6" }
                },
                {
                    tag: "datatype", name: "WindowNotOpen", id: 0x4,
                    details: "No commissioning window was currently open",
                    xref: { document: "core", section: "11.18.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "CommissioningWindowStatusEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.18.5.1" },

            children: [
                {
                    tag: "datatype", name: "WindowNotOpen", id: 0x0, conformance: "M",
                    description: "Commissioning window not open"
                },
                {
                    tag: "datatype", name: "EnhancedWindowOpen", id: 0x1, conformance: "M",
                    description: "An Enhanced Commissioning Method window is open"
                },
                {
                    tag: "datatype", name: "BasicWindowOpen", id: 0x2, conformance: "BC",
                    description: "A Basic Commissioning Method window is open"
                }
            ]
        }
    ]
});
