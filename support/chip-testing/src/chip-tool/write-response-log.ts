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
 * Throws {@link UnexpectedDataError} for a message that ends before its closing line or contains the start of another
 * block before its closing line, and for an entry without a concrete path or a status: each means a line is missing,
 * and the statuses would then be incomplete.
 */
export function loggedWriteResponseStatuses(lines: readonly string[]): LoggedAttributeStatus[] | undefined {
    const statuses = new Array<LoggedAttributeStatus>();
    let found = false;
    let inMessage = false;
    let entry: PartialStatus | undefined;

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
                statuses.push(completed(entry));
                entry = undefined;
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
                statuses.push(completed(entry));
            }
            entry = { lines: [field] };
            continue;
        }
        if (entry === undefined) {
            continue;
        }
        entry.lines.push(field);

        let match;
        if ((match = FIELDS.endpoint.exec(field))) {
            entry.endpoint = Number.parseInt(match[1], 16);
        } else if ((match = FIELDS.cluster.exec(field))) {
            entry.cluster = Number.parseInt(match[1], 16);
        } else if ((match = FIELDS.attribute.exec(field))) {
            entry.attribute = Number.parseInt(match[1] + match[2], 16);
        } else if ((match = FIELDS.status.exec(field))) {
            entry.status = Number.parseInt(match[1], 16);
        } else if ((match = FIELDS.clusterStatus.exec(field))) {
            entry.clusterStatus = Number.parseInt(match[1], 16);
        }
    }

    if (inMessage) {
        throw new UnexpectedDataError(
            `chip-tool's log ends inside a ${MESSAGE_START} block, so its statuses are incomplete`,
        );
    }

    return found ? statuses : undefined;
}
