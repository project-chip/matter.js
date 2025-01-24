/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const JointFabricAdministratorDt = DeviceType(
    {
        name: "JointFabricAdministrator", id: 0x130, category: "Utility", classification: "utility",

        details: "A Joint Fabric Administrator device provides capabilities to manage the Joint Fabric Datastore and " +
            "issue an ICAC signed by the Joint Fabric Anchor Root CA." +
            "\n" +
            "A client wanting to access the capabilities of the Joint Fabric Administrator may use the Joint " +
            "Commissioning Method to be commissioned onto the Joint Fabric. Once commissioned, a client may " +
            "access the capabilities of the Joint Fabric Administrator.",

        xref: { document: "device", section: "2.9" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 304, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "JointFabricDatastore", id: 0x752, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "2.9.4" }
    }),
    Requirement({
        name: "JointFabricPki", id: 0x753, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "2.9.4" }
    })
);

MatterDefinition.children.push(JointFabricAdministratorDt);
