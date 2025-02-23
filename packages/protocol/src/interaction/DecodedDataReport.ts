/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReport } from "#types";
import { DecodedAttributeReportValue, normalizeAndDecodeReadAttributeReport } from "./AttributeDataDecoder.js";
import { DecodedEventReportValue, normalizeAndDecodeReadEventReport } from "./EventDataDecoder.js";

export interface DecodedDataReport extends DataReport {
    isNormalized: true;
    attributeReports: DecodedAttributeReportValue<any>[];
    eventReports: DecodedEventReportValue<any>[];
}

export function DecodedDataReport(report: DataReport): DecodedDataReport {
    if ((report as DecodedDataReport).isNormalized) {
        return report as DecodedDataReport;
    }

    return {
        ...report,
        isNormalized: true,
        attributeReports:
            report.attributeReports === undefined ? [] : normalizeAndDecodeReadAttributeReport(report.attributeReports),
        eventReports: report.eventReports === undefined ? [] : normalizeAndDecodeReadEventReport(report.eventReports),
    };
}
