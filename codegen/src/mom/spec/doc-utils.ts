/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Logger } from "@project-chip/matter.js/log";
import { Specification } from "@project-chip/matter.js/model";
import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { Str } from "./html-translators.js";
import { HtmlReference } from "./spec-types.js";

const logger = Logger.get("scan-index");

export const DEFAULT_MATTER_VERSION = "1.1";

// Parse the section ID and name from a heading element
export function parseHeading(e: HTMLElement | null) {
    if (!e) {
        return undefined;
    }

    const heading = Str(e);
    if (!heading) {
        return undefined;
    }

    const parsed = /^([\d.]+)\. (.+)$/.exec(heading);
    if (!parsed) {
        return;
    }

    return {
        section: parsed[1],
        name: parsed[2],
    };
}

export type IndexDetail = {
    ref: HtmlReference;
    version: string;
    hasClusters: boolean;
    hasDevices: boolean;
};

export function loadHtml(path: string) {
    const html = readFileSync(path);
    return new JSDOM(html).window.document;
}

// Read an index file to find the portions of the spec we care about
export function identifyDocument(path: string): IndexDetail {
    const result = {} as IndexDetail;

    const source = loadHtml(path);
    const titleEl = source.querySelector("h1");
    if (!titleEl || !titleEl.textContent) {
        logger.error("cannot find specification title");
        return result;
    }
    const title = titleEl.textContent;

    let spec: Specification;
    let hasClusters = false;
    let hasDevices = false;
    if (title.match(/matter specification/i)) {
        spec = Specification.Core;
        hasClusters = true;
    } else if (title.match(/application/i)) {
        spec = Specification.Cluster;
        hasClusters = true;
    } else if (title.match(/device/i)) {
        spec = Specification.Device;
        hasDevices = true;
    } else if (title.match(/namespaces/i)) {
        spec = Specification.Namespace;
    } else {
        throw new Error(`Matter specification name ${title} unrecognized`);
    }

    const versionEl = titleEl.nextElementSibling;
    if (!versionEl || !versionEl.textContent || !versionEl.textContent.match(/version (?:\d\.)+/i)) {
        logger.error(`version element unrecognized`);
        return result;
    }
    const version = versionEl.textContent.replace(/.*version ([\d.]+).*/i, "$1");

    logger.info("recognized", Diagnostic.dict({ doc: spec, version: version }));

    return {
        ref: {
            name: title,
            path,
            xref: {
                document: spec,
                section: "",
            },
        },
        version,
        hasClusters,
        hasDevices,
    };
}
