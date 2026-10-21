/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "@matter/general";
import { Status } from "@matter/main/types";
import { expect } from "chai";
import { loggedWriteResponseStatuses } from "../../src/chip-tool/write-response-log.js";
import {
    CHIP_APP_MIXED_STATUSES,
    CHIP_APP_WILDCARD_REFUSED,
    CHIP_APP_WITHOUT_TRACE_DECODE,
    MATTERJS_WILDCARD_SUCCESS,
    MATTERJS_WILDCARD_WITH_CONCRETE_FAILURE,
} from "./chip-tool-write-response-captures.js";

const UNIT_TESTING = 0xfff1fc05;
const IDENTIFY = 0x3;
const LEVEL_CONTROL = 0x8;

/** The lines of the first `WriteResponseMessage` block of `logs`, closing brace included. */
function firstBlock(logs: string[]) {
    const start = logs.indexOf("WriteResponseMessage =");
    return logs.slice(start, logs.indexOf("}", start) + 1);
}

describe("loggedWriteResponseStatuses", () => {
    it("reads every path with its status and cluster status, past the decoded WriteRequest of --trace_decode", () => {
        expect(loggedWriteResponseStatuses(CHIP_APP_MIXED_STATUSES.logs)).deep.equal([
            { endpoint: 1, cluster: UNIT_TESTING, attribute: 0x00, status: Status.Success },
            { endpoint: 1, cluster: UNIT_TESTING, attribute: 0x31, status: Status.InvalidDataType },
            { endpoint: 1, cluster: UNIT_TESTING, attribute: 0x32, status: Status.Failure, clusterStatus: 0x11 },
            { endpoint: 1, cluster: IDENTIFY, attribute: 0xfe, status: Status.UnsupportedAttribute },
        ]);
    });

    it("reads the message chip-tool decodes without --trace_decode", () => {
        expect(loggedWriteResponseStatuses(CHIP_APP_WITHOUT_TRACE_DECODE.logs)).deep.equal([
            { endpoint: 1, cluster: UNIT_TESTING, attribute: 0x32, status: Status.Failure, clusterStatus: 0x11 },
            { endpoint: 1, cluster: IDENTIFY, attribute: 0x00, status: Status.Success },
        ]);
    });

    it("reads every endpoint a wildcard write reached, beside a concrete path the device rejected", () => {
        expect(loggedWriteResponseStatuses(MATTERJS_WILDCARD_SUCCESS.logs)).deep.equal(
            [1, 2, 3, 4].map(endpoint => ({ endpoint, cluster: IDENTIFY, attribute: 0, status: Status.Success })),
        );
        expect(loggedWriteResponseStatuses(MATTERJS_WILDCARD_WITH_CONCRETE_FAILURE.logs)).deep.equal([
            ...[1, 2, 3, 4].map(endpoint => ({ endpoint, cluster: IDENTIFY, attribute: 0, status: Status.Success })),
            { endpoint: 1, cluster: LEVEL_CONTROL, attribute: 0x11, status: Status.ConstraintError },
        ]);
    });

    it("joins the statuses of several messages, in order", () => {
        expect(
            loggedWriteResponseStatuses([
                ...CHIP_APP_WITHOUT_TRACE_DECODE.logs,
                ...MATTERJS_WILDCARD_SUCCESS.logs,
            ])?.map(({ endpoint, cluster, attribute }) => [endpoint, cluster, attribute]),
        ).deep.equal([
            [1, UNIT_TESTING, 0x32],
            [1, IDENTIFY, 0],
            [1, IDENTIFY, 0],
            [2, IDENTIFY, 0],
            [3, IDENTIFY, 0],
            [4, IDENTIFY, 0],
        ]);
    });

    it("answers undefined for a reply without a WriteResponseMessage, and an empty list for one without statuses", () => {
        expect(loggedWriteResponseStatuses(CHIP_APP_WILDCARD_REFUSED.logs)).undefined;
        expect(
            loggedWriteResponseStatuses(["WriteResponseMessage =", "{", "\tInteractionModelRevision = 12", "}"]),
        ).deep.equal([]);
    });

    it("reads a status printed without its name", () => {
        const block = firstBlock(MATTERJS_WILDCARD_SUCCESS.logs).map(line =>
            line.replace("status = 0x00 (SUCCESS),", "status = 0x87,"),
        );
        expect(loggedWriteResponseStatuses(block)?.map(({ status }) => status)).deep.equal([
            Status.ConstraintError,
            Status.ConstraintError,
            Status.ConstraintError,
            Status.ConstraintError,
        ]);
    });

    it("ignores path fields it does not report, such as the node", () => {
        const block = firstBlock(CHIP_APP_WITHOUT_TRACE_DECODE.logs).flatMap(line =>
            line === "\t\t\t\tEndpoint = 0x1," ? ["\t\t\t\tNode = 0x0000000000000001,", line] : [line],
        );
        expect(loggedWriteResponseStatuses(block)).deep.equal(
            loggedWriteResponseStatuses(CHIP_APP_WITHOUT_TRACE_DECODE.logs),
        );
    });

    it("rejects a message the log ends inside", () => {
        const block = firstBlock(MATTERJS_WILDCARD_SUCCESS.logs);
        expect(() => loggedWriteResponseStatuses(block.slice(0, -1))).throws(UnexpectedDataError, /ends inside/);
    });

    it("rejects a message another decoded block starts inside, rather than taking that block's statuses", () => {
        const block = firstBlock(MATTERJS_WILDCARD_SUCCESS.logs);
        const report = [
            "ReportDataMessage =",
            "{",
            "\tAttributeReportIBs =",
            "\t[",
            ...block.slice(4, 19),
            "\t],",
            "}",
        ];
        expect(() => loggedWriteResponseStatuses([...block.slice(0, -1), ...report])).throws(
            UnexpectedDataError,
            /starts "ReportDataMessage =" inside/,
        );
    });

    it("rejects an entry without a status or without a concrete path", () => {
        const block = firstBlock(MATTERJS_WILDCARD_SUCCESS.logs);
        for (const dropped of [
            "\t\t\t\tstatus = 0x00 (SUCCESS),",
            "\t\t\t\tEndpoint = 0x2,",
            "\t\t\t\tCluster = 0x3,",
        ]) {
            const index = block.indexOf(dropped);
            expect(index, dropped).not.equal(-1);
            const lines = [...block.slice(0, index), ...block.slice(index + 1)];
            expect(() => loggedWriteResponseStatuses(lines), dropped).throws(UnexpectedDataError, /AttributeStatusIB/);
        }
        const attribute = block.indexOf("\t\t\t\tAttribute = 0x0000_0000,");
        expect(() => loggedWriteResponseStatuses([...block.slice(0, attribute), ...block.slice(attribute + 1)])).throws(
            UnexpectedDataError,
        );
    });
});
