/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterRevision } from "@project-chip/matter.js/elements/ClusterRevision";
import { FeatureMap } from "@project-chip/matter.js/elements/FeatureMap";
import { Diagnostic, Logger } from "@project-chip/matter.js/log";
import {
    AttributeElement,
    ClusterElement,
    CommandElement,
    DatatypeElement,
    EventElement,
    FieldElement,
} from "@project-chip/matter.js/model";
import { camelize } from "../../util/string.js";
import { addDocumentation } from "./add-documentation.js";
import {
    ConformanceCode,
    Identifier,
    Integer,
    LowerIdentifier,
    NoSpace,
    Str,
    UpperIdentifier,
} from "./html-translators.js";
import { ClusterReference } from "./spec-types.js";
import { translateDatatype, translateFields, translateValueChildren } from "./translate-datatype.js";
import { Alias, Children, Optional, translateRecordsToMatter, translateTable } from "./translate-table.js";

const logger = Logger.get("translate-cluster");

// Translate from DOM -> MOM
export function* translateCluster(definition: ClusterReference) {
    const children = Array<ClusterElement.Child>();

    const metadata = translateMetadata(definition, children);
    if (!metadata) {
        return;
    }

    translateInvokable(definition, children);
    translateDatatypes(definition, children);

    for (const [id, name] of metadata.ids.entries()) {
        const idStr = id === undefined ? "(no ID)" : `0x${id.toString(16)}`;
        logger.debug(`${idStr} ${name}`, Diagnostic.dict({ rev: metadata.revision, cls: metadata.classification }));
        const cluster = ClusterElement({
            id: id,
            name: name,
            classification: metadata.classification,
            children: children,
            type: metadata.derivesFrom,
            xref: definition.xref,
        });

        addDocumentation(cluster, definition);

        yield cluster;
    }
}

// Load misc. values related to cluster definition
function translateMetadata(definition: ClusterReference, children: Array<ClusterElement.Child>) {
    const ids = translateIds();
    if (!ids) {
        logger.warn(`no IDs for ${definition.name}, skipping`);
        return;
    }

    const { classification, derivesFrom } = translateClassification();
    const revision = translateRevision();
    translateFeatures();

    return {
        ids,
        classification,
        revision,
        derivesFrom,
    };

    function translateIds() {
        const ids = translateTable("id", definition.ids, {
            // Core spec uses "identifier", cluster spec uses "id".
            // Because why would you to conform to a standard when you're
            // defining a standard?  Normalize to "id"
            //
            // Note that ID is optional because base clusters may have no ID
            id: Alias(Str, "identifier"),
            name: Identifier,
        });

        // Some tables list the primary ID twice; only accept the secondary
        // instance in core spec; only accept the primary in cluster spec
        const uniqueIds = new Map<number | undefined, string>();
        for (const record of ids) {
            const idStr = record.id.trim().toLowerCase();
            let id;
            if (idStr === "n/a") {
                // Base cluster
                id = undefined;
            } else {
                id = Number.parseInt(idStr);
                if (Number.isNaN(id)) {
                    logger.error(`Skipping cluster with non-numeric ID ${idStr}`);
                    continue;
                }
            }

            if (id === 0x8) {
                // Level control table is just kind of fubar
                uniqueIds.set(id, "LevelControl");
            } else {
                uniqueIds.set(id, camelize(record.name || definition.name, true));
            }
        }

        if (!uniqueIds.size) {
            return false;
        }

        return uniqueIds;
    }

    function translateClassification() {
        const classifications = translateTable("classfication", definition.classifications, {
            hierarchy: Optional(Str),
            role: Optional(LowerIdentifier),
            scope: Optional(Alias(LowerIdentifier, "context")),
        });

        let classification: ClusterElement.Classification;
        if (classifications[0]?.role === "utility") {
            if (classifications[0]?.scope === "node") {
                classification = ClusterElement.Classification.NodeUtility;
            } else {
                classification = ClusterElement.Classification.EndpointUtility;
            }
        } else {
            classification = ClusterElement.Classification.Application;
        }

        let derivesFrom = classifications[0]?.hierarchy;
        if (derivesFrom) {
            derivesFrom = derivesFrom.replace(/^derive[sd] from /i, "");
            derivesFrom = camelize(derivesFrom, true);
            if (derivesFrom === "Base") {
                derivesFrom = undefined;
            }
        }

        return { classification, derivesFrom };
    }

    function translateRevision() {
        const revisions = translateTable("revision", definition.revisions, {
            revision: Alias(Integer, "rev"),
        });

        let revision = revisions[revisions.length - 1]?.revision;
        if (revision === undefined) {
            logger.warn(`no revisions for ${definition.name}, assuming "1"`);
            revision = 1;
        }

        children.push({
            tag: ClusterRevision.tag,
            id: ClusterRevision.id,
            name: ClusterRevision.name,
            type: "ClusterRevision",
            default: revision,
        });

        return revision;
    }

    function translateFeatures() {
        const records = translateTable("feature", definition.features, {
            constraint: Alias(Integer, "bit", "id"),
            conformance: Optional(ConformanceCode),
            details: Optional(Alias(Str, "description", "summary")),

            // Must define after details which uses description column
            description: Optional(Alias(Identifier, "feature", "name")),

            // Must define after description which uses name column
            name: Alias(UpperIdentifier, "code", "feature"),

            // We let Model handle translation to the proper type
            default: Optional(Alias(NoSpace, "def")),
        });

        const values = translateRecordsToMatter("feature", records, FieldElement);
        values &&
            children.push({
                tag: FeatureMap.tag,
                id: FeatureMap.id,
                name: FeatureMap.name,
                type: "FeatureMap",
                children: values,
                xref: definition.features?.xref,
            });
    }
}

// Load attributes, events, commands and status codes
function translateInvokable(definition: ClusterReference, children: Array<ClusterElement.Child>) {
    translateAttributes();
    translateEvents();
    translateCommands();
    translateStatusCodes();

    function translateAttributes() {
        const attributeSets = [definition.attributes];
        if (definition.attributeSets) {
            attributeSets.push(...definition.attributeSets);
        }
        for (const attributeSet of attributeSets) {
            const attributes = translateFields(AttributeElement, attributeSet);

            if (attributes) {
                children.push(...attributes);
            }
        }
    }

    function translateCommands() {
        const records = translateTable("command", definition.commands, {
            id: Integer,
            name: Identifier,
            direction: Optional(Str),
            response: Optional(Identifier),
            access: Optional(Str),
            conformance: Optional(ConformanceCode),
            children: Children(translateValueChildren),
        });

        const commands = translateRecordsToMatter("command", records, r => {
            let direction: CommandElement.Direction | undefined;

            if (r.direction?.match(/client.*⇐.*server/i)) {
                direction = CommandElement.Direction.Response;
            } else if (r.direction?.match(/client.*server/i)) {
                direction = CommandElement.Direction.Request;
            } else if (r.direction?.match(/server.*client/i)) {
                direction = CommandElement.Direction.Response;
            }

            let response: string | undefined;
            switch (r.response) {
                case "Y":
                    response = "status";
                    break;

                case "N":
                case "":
                case undefined:
                    break;

                default:
                    response = r.response;
                    break;
            }

            return CommandElement({ ...r, response, direction });
        });
        commands && children.push(...commands);
    }

    function translateEvents() {
        const records = translateTable("event", definition.events, {
            id: Integer,
            name: Identifier,
            priority: Optional(LowerIdentifier),
            access: Optional(Str),
            conformance: Optional(ConformanceCode),
            children: Children(translateValueChildren),
        });

        const events = translateRecordsToMatter("event", records, r => {
            let priority: EventElement.Priority;
            switch (r.priority?.toLowerCase()) {
                case "debug":
                    priority = EventElement.Priority.Debug;
                    break;

                case "info":
                    priority = EventElement.Priority.Info;
                    break;

                case "critical":
                    priority = EventElement.Priority.Critical;
                    break;

                case undefined:
                    logger.warn("no priority defined, assuming CRITICAL");
                    priority = EventElement.Priority.Critical;
                    break;

                default:
                    logger.warn(`unrecognized priority "${r.priority}", assuming CRITICAL`);
                    priority = EventElement.Priority.Critical;
            }
            return EventElement({ ...r, priority });
        });
        events && children.push(...events);
    }

    function translateStatusCodes() {
        const records = translateTable("statusCodes", definition.statusCodes, {
            id: Alias(Integer, "statuscode"),
            name: Alias(Identifier, "value"),
            details: Alias(Str, "summary"),
        });
        const statusCodes = translateRecordsToMatter("statusCodes", records, FieldElement);
        statusCodes && children.push(DatatypeElement({ name: "StatusCode", type: "status", children: statusCodes }));
    }
}

// Load datatypes
function translateDatatypes(definition: ClusterReference, children: Array<ClusterElement.Child>) {
    if (!definition.datatypes) {
        return;
    }

    for (const datatype of definition.datatypes) {
        Logger.nest(() => {
            const child = translateDatatype(datatype);
            if (child) {
                children.push(child);
            }
        });
    }
}
