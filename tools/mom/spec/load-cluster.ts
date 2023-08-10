/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#matter.js/log/Logger.js";
import { Specification } from "#matter.js/model/index.js";
import { camelize } from "#util/string.js";
import { NavigateViaToc, scanSection } from "./scan-section.js";
import { ClusterReference, HtmlReference } from "./spec-types.js";

const logger = Logger.get("load-cluster");

type SubsectionCollector = {
    subsection: string;
    collector: (ref: HtmlReference) => void;
};

function isCluster(ref: HtmlReference, document: Specification, name: string) {
    return ref.xref.document === document && ref.name === name;
}

function isSection(ref: HtmlReference, ...sections: string[]) {
    return !!sections.find(section => ref.xref.section === section);
}

// Modify incoming stream to workaround specific spec issues
function applyPatches(subref: HtmlReference, clusterRef: HtmlReference) {
    if (isCluster(clusterRef, Specification.Core, "General Commissioning")) {
        if (isSection(subref, "11.9.6") && subref.name === "Commands" && !subref.table) {
            // In 1.1 spec, command table is not here...
            subref.ignore = true;
        } else if (
            isSection(subref, "11.9.6.1") &&
            subref.name === "Common fields in General Commissioning cluster responses" &&
            subref.table
        ) {
            // ...but here
            subref.name = "Commands";
            subref.detailSection = "11.9.6";
        }
    } else if (isCluster(clusterRef, Specification.Cluster, "Thermostat") && isSection(subref, "4.3.9.6", "4.3.9.7")) {
        subref.ignore = true;
    } else if (isCluster(clusterRef, Specification.Cluster, "Content Launcher")) {
        if (isSection(subref, "6.7.3.2")) {
            // In 1.1. spec, SupportedStreamingProtocols bitmap is not here...
            subref.ignore = true;
        } else if (isSection(subref, "6.7.3.2.1")) {
            // ...but here
            subref.name = "SupportedStreamingProtocols Attribute";
        }
    }
}

// Collect the bits that define a cluster.  Here we are just building a tree
// of HTML nodes.  Conversion to Matter elements happens in translate-cluster
export function loadCluster(clusterRef: HtmlReference) {
    // The definition we are building
    const definition: ClusterReference = { ...clusterRef };

    // A stack of functions that ingest subsections
    const collectors = Array<SubsectionCollector>();

    for (const subref of scanSection(clusterRef, NavigateViaToc)) {
        applyPatches(subref, clusterRef);
        if (subref.ignore) {
            continue;
        }

        while (collectors.length && !subref.xref.section.startsWith(collectors[collectors.length - 1].subsection)) {
            collectors.pop();
        }

        if (subref.xref.section === clusterRef.xref.section) {
            definition.prose = subref.prose;
        }

        const name = camelize(subref.name).toLowerCase();
        switch (name) {
            case "clusterid":
            case "clusteridentifiers":
                defineElement("ids", subref);
                break;

            case "features":
                defineElement("features", subref);
                break;

            case "revisionhistory":
                defineElement("revisions", subref);
                break;

            case "classification":
                defineElement("classifications", subref);
                break;

            case "attributes":
                defineElement("attributes", subref);
                break;

            case "commands":
                defineElement("commands", subref);
                break;

            case "events":
                defineElement("events", subref);
                break;

            case "statuscodes":
                defineElement("statusCodes", subref);
                break;

            case "datatypes":
                // Datatypes are different than everybody else.  The types
                // themselves are defined in subsections
                collectors.push({
                    subsection: subref.xref.section,
                    collector: datatypeRef => {
                        if (!definition.datatypes) {
                            definition.datatypes = [];
                        }
                        logger.debug(`datatype ${datatypeRef.name} § ${datatypeRef.xref.section}`);
                        definition.datatypes.push(datatypeRef);
                        if (datatypeRef.table) {
                            // Probably a struct, enum or bitmap.  These are
                            // sometimes followed with sections that detail
                            // individual items
                            collectDetails(datatypeRef);
                        }
                    },
                });
                break;

            default:
                // "Attribute Set" is suffixed to sections containing a subset
                // of attributes
                if (name.endsWith("attributeset")) {
                    if (!definition.attributeSets) {
                        definition.attributeSets = [];
                    }
                    logger.debug(`attribute set ${subref.name} § ${subref.xref.section}`);
                    definition.attributeSets.push(subref);
                    if (subref.table) {
                        collectDetails(subref);
                    }
                    break;
                }

                // If we don't recognize the section name explicitly, pass to
                // collectors so long as we're still in the relevant section
                if (collectors.length) {
                    collectors[collectors.length - 1].collector(subref);
                }
                break;
        }
    }

    function collectDetails(ref: HtmlReference) {
        collectors.push({
            subsection: ref.detailSection ?? ref.xref.section,
            collector: (subref: HtmlReference) => {
                if (!ref.details) {
                    ref.details = [];
                }
                ref.details.push(subref);

                // Attempt to collect sub-details if the new section is more
                // specific than the current section
                if (subref.xref.section > ref.xref.section) {
                    collectDetails(subref);
                }
            },
        });
    }

    function defineElement(
        name:
            | "ids"
            | "features"
            | "attributes"
            | "commands"
            | "events"
            | "revisions"
            | "classifications"
            | "statusCodes",
        ref: HtmlReference,
    ) {
        if (!ref.table) {
            // Sometimes there's a section with no table to indicate no
            // elements
            if (ref.prose?.[0]?.textContent?.match(/(?:this cluster has no|no cluster specific)/i)) {
                return;
            }
            logger.warn("no defining table in definition of", name, "for", ref.name, `(${ref.path})`);
            return;
        }

        // Sometimes there's an empty table to indicate no elements
        if (!ref.table.rows.length) {
            return;
        }

        if (definition[name]?.table) {
            logger.warn("ignoring tertiary definition of", name, "for", ref.name);
            return;
        }

        logger.debug(`${name} § ${ref.xref.section}`);

        collectDetails((definition[name] = ref));
    }

    return definition;
}
