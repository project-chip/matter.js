/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const priority = Datatype({
    name: "priority", type: "enum8", description: "Priority", isSeed: true,
    details: "This is an enumeration of priority used to tag events and possibly other data. The data type does " +
        "not define any particular ordering among the values. Specific uses of the data type may assign " +
        "semantics to the values that imply an ordering relationship.",
    xref: { document: "core", section: "7.18.2.17" },

    children: [
        Field({ name: "InformationForEngineeringDebuggingTroubleshooting", id: 0x0 }),
        Field({
            name: "InformationThatEitherDrivesCustomerFacingFeaturesOrProvidesInsightsIntoDeviceFunctionsThatAreUsedToDriveAnalyticsUseCases",
            id: 0x1
        }),
        Field({
            name: "InformationOrNotificationThatImpactsSafetyAcriticalFunctionOrOngoingReliableOperationOfTheNodeOrApplicationSupportedOnAnEndpoint",
            id: 0x2
        })
    ]
});

Matter.children.push(priority);
