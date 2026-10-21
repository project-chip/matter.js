/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "@matter/general";

/** One `AttributeStatusIB` of a `WriteResponseMessage` chip-tool decoded into its log. */
export interface LoggedAttributeStatus {
    endpoint: number;
    cluster: number;
    attribute: number;
    status: number;
    clusterStatus?: number;
}

const MESSAGE_START = "WriteResponseMessage =";
const MESSAGE_END = "}";
const ENTRY_START = "AttributeStatusIB =";

/** The unindented header of any decoded block, such as `ReportDataMessage =`. */
const BLOCK_START = /^\S.* =$/;

const FIELDS = {
    endpoint: /^Endpoint = 0x([0-9a-f]+),$/i,
    cluster: /^Cluster = 0x([0-9a-f]+),$/i,
    // `ChipLogFormatMEI` renders the id as two 16-bit halves
    attribute: /^Attribute = 0x([0-9a-f]{4})_([0-9a-f]{4}),$/i,
    // A build without `CHIP_CONFIG_IM_STATUS_CODE_VERBOSE_FORMAT` prints the code without its name
    status: /^status = 0x([0-9a-f]+)(?: \([^)]*\))?,$/i,
    clusterStatus: /^cluster-status = 0x([0-9a-f]+),$/i,
};

type PartialStatus = Partial<LoggedAttributeStatus> & { lines: string[] };

type OpenEntry = PartialStatus & { closing: string };

type StatusField = keyof LoggedAttributeStatus;

/** The status field `field` sets, with its value, or `undefined` for a line that sets none. */
function parsedField(field: string): [StatusField, number] | undefined {
    let match;
    if ((match = FIELDS.endpoint.exec(field))) {
        return ["endpoint", Number.parseInt(match[1], 16)];
    }
    if ((match = FIELDS.cluster.exec(field))) {
        return ["cluster", Number.parseInt(match[1], 16)];
    }
    if ((match = FIELDS.attribute.exec(field))) {
        return ["attribute", Number.parseInt(match[1] + match[2], 16)];
    }
    if ((match = FIELDS.status.exec(field))) {
        return ["status", Number.parseInt(match[1], 16)];
    }
    if ((match = FIELDS.clusterStatus.exec(field))) {
        return ["clusterStatus", Number.parseInt(match[1], 16)];
    }
    return undefined;
}

function incomplete(what: string, lines: string[]) {
    return new UnexpectedDataError(
        `chip-tool's decoded WriteResponseMessage is incomplete: ${what}: ${JSON.stringify(lines)}`,
    );
}

function completed(entry: PartialStatus): LoggedAttributeStatus {
    const { endpoint, cluster, attribute, status, clusterStatus } = entry;
    if (endpoint === undefined || cluster === undefined || attribute === undefined || status === undefined) {
        throw new UnexpectedDataError(
            "chip-tool decoded an AttributeStatusIB without a concrete path and a status: " +
                JSON.stringify(entry.lines),
        );
    }
    return clusterStatus === undefined
        ? { endpoint, cluster, attribute, status }
        : { endpoint, cluster, attribute, status, clusterStatus };
}

/**
 * The attribute statuses of every `WriteResponseMessage` in `lines`, in the order the device sent them, or `undefined`
 * where `lines` hold no such message.
 *
 * `lines` are one chip-tool command's log lines, without chip's log prefix: the `logs` of an interactive-server reply.
 * chip's `WriteClient` decodes each `WriteResponseMessage` it receives into those lines
 * (`WriteResponseMessage::Parser::PrettyPrint`, one line per field, nested by tabs) in every build with
 * `CHIP_CONFIG_IM_PRETTY_PRINT` and detail logging, which a debug build on Linux or macOS has with the default logging
 * arguments (`chip_logging`, `chip_detail_logging`). Unlike chip-tool's JSON results, which carry only the paths a
 * write failed on, the decoded message names every path with its status.
 *
 * An entry opens at its `AttributeStatusIB =` header and closes at the brace with the header's indentation.
 *
 * Throws {@link UnexpectedDataError} for a message that ends before its closing line or contains the start of another
 * block before its closing line; for an entry that does not close before the next one or the message ends, that carries
 * a field twice, or that lacks a concrete path or a status; and for a path or status field outside any entry. Each
 * means a line is missing, and the statuses would then be incomplete.
 */
export function loggedWriteResponseStatuses(lines: readonly string[]): LoggedAttributeStatus[] | undefined {
    const statuses = new Array<LoggedAttributeStatus>();
    let found = false;
    let inMessage = false;
    let entry: OpenEntry | undefined;

    for (const line of lines) {
        if (!inMessage) {
            if (line === MESSAGE_START) {
                inMessage = true;
                found = true;
            }
            continue;
        }

        // Every line inside the message is indented, so only the message's own closing brace is not
        if (line === MESSAGE_END) {
            if (entry !== undefined) {
                throw incomplete(`the message closes inside an ${ENTRY_START} entry`, entry.lines);
            }
            inMessage = false;
            continue;
        }
        if (BLOCK_START.test(line)) {
            throw new UnexpectedDataError(
                `chip-tool's log starts "${line}" inside a ${MESSAGE_START} block, so the block is incomplete`,
            );
        }

        const field = line.trim();
        if (field === ENTRY_START) {
            if (entry !== undefined) {
                throw incomplete(`an ${ENTRY_START} entry starts before the previous one closed`, entry.lines);
            }
            // The entry's own closing brace has the indentation of its header
            entry = { lines: [field], closing: `${line.slice(0, line.indexOf(ENTRY_START))}},` };
            continue;
        }

        const parsed = parsedField(field);
        if (entry === undefined) {
            if (parsed !== undefined) {
                throw incomplete(`"${field}" stands outside any ${ENTRY_START} entry`, [field]);
            }
            continue;
        }
        entry.lines.push(field);

        if (line === entry.closing) {
            statuses.push(completed(entry));
            entry = undefined;
            continue;
        }
        if (parsed !== undefined) {
            const [key, value] = parsed;
            if (entry[key] !== undefined) {
                throw incomplete(`an ${ENTRY_START} entry carries ${key} twice`, entry.lines);
            }
            entry[key] = value;
        }
    }

    if (inMessage) {
        throw new UnexpectedDataError(
            `chip-tool's log ends inside a ${MESSAGE_START} block, so its statuses are incomplete`,
        );
    }

    return found ? statuses : undefined;
}
