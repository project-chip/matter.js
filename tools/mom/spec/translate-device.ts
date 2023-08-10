/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#matter.js/log/Logger.js";
import { DatatypeElement, DeviceTypeElement, RequirementElement } from "#matter.js/model/index.js";
import { camelize } from "../../util/string.js";
import { Identifier, Integer, LowerIdentifier, Str } from "./html-translators.js";
import { DeviceReference } from "./spec-types.js";
import { Alias, Constant, Optional, translateRecordsToMatter, translateTable } from "./translate-table.js";

const logger = Logger.get("translate-devices");

export function* translateDevice(deviceRef: DeviceReference) {
    const device = createDevice(deviceRef);
    if (!device) {
        return;
    }

    addConditions(device, deviceRef);
    addClusters(device, deviceRef);

    yield device;
}

function createDevice(deviceRef: DeviceReference) {
    if (deviceRef.name === "Base") {
        return DeviceTypeElement({
            name: "Base",
            classification: DeviceTypeElement.Classification.Base,
        });
    }

    const metadata = translateTable("deviceType", deviceRef.classification, {
        id: Integer,
        name: Alias(Identifier, "devicename"),
        superset: Optional(Identifier),
        class: LowerIdentifier,
        scope: LowerIdentifier,
    })[0];

    if (!metadata) {
        logger.error(`No metadata for device ${deviceRef.name}`);
        return;
    }

    let classification;
    if (metadata.class === "simple") {
        classification = DeviceTypeElement.Classification.Simple;
    } else if (metadata.class === "dynamicutility") {
        classification = DeviceTypeElement.Classification.Dynamic;
    } else if (metadata.class === "node") {
        classification = DeviceTypeElement.Classification.Node;
    } else if (metadata.class === "utility") {
        classification = DeviceTypeElement.Classification.Utility;
    }

    if (!classification) {
        logger.error(`No classification for device ${deviceRef.name}`);
        return;
    }

    const revisions = translateTable("deviceType", deviceRef.revisions, {
        revision: Alias(Integer, "rev"),
    });
    let revision = revisions[revisions.length - 1]?.revision;
    if (revision === undefined) {
        logger.error(`No revision for device ${deviceRef.name}, assuming 1`);
        revision = 1;
    }

    const definition = {
        id: metadata.id,
        name: metadata.name,
        category: deviceRef.category,
        classification,
    };
    const device = DeviceTypeElement(definition);

    if (metadata.superset) {
        device.type = metadata.superset;
    }

    device.children = [
        RequirementElement({
            id: 0x1d,
            name: "Descriptor",
            element: RequirementElement.ElementType.ServerCluster,
            children: [
                DatatypeElement({
                    name: "DeviceTypeStruct",
                    type: "struct",
                    children: [
                        DatatypeElement({ name: "DeviceType", type: "devtype-id", default: definition.id }),
                        DatatypeElement({ name: "Revision", type: "uint16", default: revision }),
                    ],
                }),
            ],
        }),
    ];

    logger.debug("metadata", Logger.dict({ ...definition, revision, type: metadata.superset }));

    return device;
}

function addConditions(device: DeviceTypeElement, deviceRef: DeviceReference) {
    if (!deviceRef.conditionSets) {
        return;
    }

    const conditions = Array<DatatypeElement>();
    deviceRef.conditionSets.forEach(conditionRef => {
        const definitions = translateTable("condition", conditionRef, {
            tag: Constant("datatype" as const),
            name: Alias(
                Identifier,

                // Spec writers have outdone themselves w/ lack of consistency here
                "condition",
                "feature",
                "tag",
                "certificationprogram",
                "protocoltag",
                "interfacetag",
                "capabilitytag",
                "classtag",
            ),
            description: Optional(Str),
        });

        if (definitions) {
            conditions.push(...definitions);
        }
    });

    const translated = translateRecordsToMatter("conditions", conditions, DatatypeElement);

    if (translated?.length) {
        if (!device.children) {
            device.children = [];
        }
        device.children.push(
            DatatypeElement({
                name: "conditions",
                type: "enum8",
                children: conditions,
            }),
        );
    }
}

function addClusters(device: DeviceTypeElement, deviceRef: DeviceReference) {
    const clusterRecords = translateTable("clusters", deviceRef.clusters, {
        id: Optional(Alias(Integer, "identifier")),
        name: Alias(Identifier, "clustername", "cluster"),
        element: Alias((el: HTMLElement) => {
            const cs = LowerIdentifier(el);
            switch (cs) {
                case "client":
                    return RequirementElement.ElementType.ClientCluster;

                case "server":
                    return RequirementElement.ElementType.ServerCluster;

                default:
                    logger.error(`Invalid client/server value ${cs} (assuming server)`);
                    return RequirementElement.ElementType.ServerCluster;
            }
        }, "clientserver"),
        quality: Optional(Str),
        conformance: Optional(Str),
    });

    const clusters = translateRecordsToMatter("clusters", clusterRecords, RequirementElement);
    if (!clusters?.length) {
        return;
    }

    if (!device.children) {
        device.children = [];
    }
    device.children.push(...clusters);

    const clusterIndex = new Map<string, RequirementElement[]>();
    for (const cluster of clusters) {
        if (clusterIndex.has(cluster.name)) {
            clusterIndex.get(cluster.name)?.push(cluster);
        } else {
            clusterIndex.set(cluster.name.toLowerCase(), [cluster]);
        }
    }

    const elementRecords = translateTable("elements", deviceRef.elements, {
        id: Optional(Integer),
        cluster: LowerIdentifier,
        element: Identifier,
        name: Identifier,
        constraint: Optional(Str),
        access: Optional(Str),
        conformance: Optional(Str),
    });

    for (const record of elementRecords) {
        const clusters = clusterIndex.get(record.cluster);
        if (!clusters) {
            logger.error(`No cluster ${record.cluster} for ${record.element} requirement ${record.name}`);
            continue;
        }

        for (const cluster of clusters) {
            if (!cluster.children) {
                cluster.children = [];
            }
            cluster.children.push(
                RequirementElement({
                    element: camelize(record.element, false) as RequirementElement.ElementType,
                    name: record.name,
                    constraint: record.constraint,
                    access: record.access,
                    conformance: record.conformance,
                }),
            );
        }
    }
}
