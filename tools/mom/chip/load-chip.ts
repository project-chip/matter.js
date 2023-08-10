/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Logger } from "#matter.js/log/Logger.js";
import {
    AnyElement,
    ClusterElement,
    DatatypeElement,
    Globals,
    Metatype,
    ValueElement,
} from "#matter.js/model/index.js";
import { readFileWithCache } from "#util/file.js";
import { Directory, Repo } from "#util/github.js";
import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { homedir } from "os";
import { resolve } from "path";
import { translateChip } from "./translate-chip.js";

const AUTH_FILE = resolve(homedir(), ".gh-auth");

const logger = Logger.get("load-chip");

const auth = await loadAuth();
const repo = new Repo("project-chip", "connectedhomeip", "v1.1-branch", readFileWithCache, auth);

const parser = new new JSDOM("").window.DOMParser();

export async function loadChip(): Promise<ClusterElement[]> {
    const elements = Array<AnyElement>();

    logger.info("load chip");
    return await Logger.nestAsync(async () => {
        const dm = await repo.cd("src/app/zap-templates/zcl/data-model");
        await loadDirectory("chip", await dm.cd("chip"), elements);

        const draft = await dm.cd("draft");
        await loadDirectory("draft", draft, elements);
        await loadDirectory("draft types", await draft.cd("types"), elements);

        return installDatatypes(elements);
    });
}

// CHIP tool has a single global datatype namespace.  This doesn't match Matter
// semantics but there are few enough duplicate type names in Matter that it
// works.  This routine installs datatypes into proper cluster scope
function installDatatypes(elements: AnyElement[]) {
    const globals = {} as { [name: string]: AnyElement };
    Object.values(Globals).forEach(g => (globals[g.name] = g));

    const datatypes = {} as { [name: string]: DatatypeElement };
    elements.forEach(e => {
        if (e.tag === DatatypeElement.Tag) {
            datatypes[e.name] = e;
        }
    });

    // Attempt to find a datatype based on an element name.  We first search
    // using the direct name, then using the name as a suffix because CHIP
    // uses a variety of naming conventions
    function findType(name: string) {
        let result = datatypes[name];

        if (!result) {
            for (const key in datatypes) {
                if (key.endsWith(name)) {
                    result = datatypes[key];
                    break;
                }
            }
        }

        return result;
    }

    // CHIP tool sometimes defines enums and bitmaps without values, instead
    // defining them somewhere else.  If we can find them, copy them over
    function installChildren(type: string, element: AnyElement) {
        if (!globals[type] || element.children?.length) {
            return;
        }
        let source: AnyElement | undefined;
        switch ((globals[type] as DatatypeElement).metatype) {
            case Metatype.enum:
                if (element.name === "Status") {
                    // We map this to "status" in finalizeModel()
                    break;
                }
                source = findType(element.name);
                break;

            case Metatype.bitmap:
                source = findType(element.name);
                if (!source) {
                    source = findType(`${element.name}Mask`);
                }
                break;
        }
        if (source) {
            element.children = source.children;
        }
    }

    // Perform actual datatype installation.  Recurses into clusters looking
    // for references.  When a datatype is added, recurses into the datatype
    // as well
    function install(into: ClusterElement, referencer: AnyElement, alreadyInstalled: Set<string>) {
        referencer.children?.forEach(c => {
            const type = (c as ValueElement).type;

            if (type) {
                installChildren(type, c);

                if (type && !globals[type] && !alreadyInstalled.has(type)) {
                    alreadyInstalled.add(type);

                    const datatype = datatypes[type];
                    if (datatype) {
                        if (!into.children) {
                            into.children = [];
                        }
                        into.children.push(datatype);
                        install(into, datatype, alreadyInstalled);
                    }
                }
            }

            install(into, c, alreadyInstalled);
        });
    }

    const clusters = elements.filter(e => e.tag === ClusterElement.Tag) as ClusterElement[];
    clusters.forEach(c => install(c, c, new Set<string>()));

    return clusters;
}

async function loadDirectory(from: string, path: Directory, elements: AnyElement[]) {
    logger.info(`index ${from}`);

    for (const filename of await path.ls()) {
        if (!filename.endsWith(".xml")) continue;
        if (filename === "test-cluster.xml") continue;

        logger.info(`file ${filename}`);
        await Logger.nestAsync(async () => {
            logger.debug("load");
            const xml = await path.get(filename);
            logger.debug("parse");
            const document = parser.parseFromString(xml, "text/xml");
            elements.push(...translateChip(document.documentElement));
        });
    }
}

// Load github authentication
async function loadAuth() {
    try {
        return readFileSync(AUTH_FILE, { encoding: "utf-8" });
    } catch (e) {
        logger.warn(
            `Stick a read-only github auth token into ${AUTH_FILE} or you will hit rate limit and need to run incrementally over several hours`,
        );
    }
}
