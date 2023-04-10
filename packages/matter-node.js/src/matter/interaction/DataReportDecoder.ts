/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ArraySchema, Attribute, AttributeJsType, getClusterAttributeById, getClusterById, TlvType, TypeFromSchema,
    TlvAttributeReport, TlvAttributeReportValue
} from "@project-chip/matter.js";
import { NodeId } from "../common/NodeId";
import { Logger } from "../../log/Logger";

const logger = Logger.get("DataReportDecoder");

export interface DecodedAttributeReportValue {
    path: {
        nodeId?: NodeId,
        endpointId: number,
        clusterId: number,
        attributeId: number,
        attributeName: string
    },
    version: number,
    value: any,
}

export function normalizeReadAttributeReport(data: TypeFromSchema<typeof TlvAttributeReport>[]): DecodedAttributeReportValue[] {
    // Fill in missing path elements when tag compression is used
    let lastPath: { nodeId?: NodeId, endpointId: number, clusterId: number, attributeId: number } | undefined;
    data.forEach(({ value }) => {
        if (value === undefined) return;
        const { path } = value;
        if (path.enableTagCompression) {
            if (lastPath === undefined) throw new Error('Tag compression enabled, but no previous path');
            if (path.nodeId === undefined && lastPath.nodeId !== undefined) path.nodeId = lastPath.nodeId;
            if (path.endpointId === undefined) path.endpointId = lastPath.endpointId;
            if (path.clusterId === undefined) path.clusterId = lastPath.clusterId;
            if (path.attributeId === undefined) path.attributeId = lastPath.attributeId;
        } else if (path.endpointId !== undefined && path.clusterId !== undefined && path.attributeId !== undefined) {
            lastPath = { nodeId: path.nodeId, endpointId: path.endpointId, clusterId: path.clusterId, attributeId: path.attributeId };
        } else {
            throw new Error('Tag compression disabled, but path is incomplete: ' + Logger.toJSON(path));
        }
    });

    // Put all returned values into a map to group by path
    const responseList = new Map<string, TypeFromSchema<typeof TlvAttributeReportValue>[]>();
    data.forEach(({ value: reportValue }) => {
        if (!reportValue) return;
        const { path: { nodeId, endpointId, clusterId, attributeId } } = reportValue;
        const mapId = `${nodeId}-${endpointId}-${clusterId}-${attributeId}`;
        const list = responseList.get(mapId) || [];
        list.push(reportValue);
        responseList.set(mapId, list);
    });

    const result: DecodedAttributeReportValue[] = [];
    responseList.forEach(values => {
        const { path: { nodeId, endpointId, clusterId, attributeId }, version } = values[0];

        if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
            throw new Error(`Invalid attribute path ${endpointId}/${clusterId}/${attributeId}`);
        }
        try {
            const cluster = getClusterById(clusterId);
            if (cluster === undefined) {
                logger.debug(`Unknown cluster ${clusterId} - ignore`);
                return;
            }
            const attributeDetail = getClusterAttributeById(cluster, attributeId);
            if (attributeDetail === undefined) {
                logger.debug(`Unknown attribute ${clusterId}/${attributeId} - ignore`);
                return;
            }
            const { attribute, name } = attributeDetail;
            const value = decodeValueForAttribute(attribute, values);
            result.push({ path: { nodeId, endpointId, clusterId, attributeId, attributeName: name }, version, value });
        } catch (error: any) {
            logger.error(`Error decoding attribute ${endpointId}/${clusterId}/${attributeId}: ${error.message}`);
        }
    });
    return result;
}

export function decodeValueForAttribute<A extends Attribute<any>>(attribute: A, values: TypeFromSchema<typeof TlvAttributeReportValue>[]): AttributeJsType<A> | undefined {
    const { schema, optional, default: conformanceValue } = attribute;

    // No values, so use default value if available
    if (!values.length) {
        if (optional) return undefined;
        if (conformanceValue === undefined) throw new Error(`Attribute not found`);
        return conformanceValue;
    }

    // The value was returned as one Tlv value, so decode it normally
    if (values.length === 1 && values[0].path.listIndex === undefined) {
        return schema.decodeTlv(values[0].value);
    }

    // Return contained multiple tlv values as an array
    if (!(schema instanceof ArraySchema)) {
        throw new Error(`Attribute is not an list but multiple values were returned`);
    }
    return decodeChunkedArray(schema, values) as AttributeJsType<A>;
}

export function decodeChunkedArray<T>(schema: ArraySchema<T>, values: TypeFromSchema<typeof TlvAttributeReportValue>[]): T[] {
    if (!values.length) throw new Error('No values');
    if (values[0].path.listIndex !== undefined) {
        throw new Error(`List index ${values[0].path.listIndex} on first array element not supported`);
    }
    let result: T[] = [];
    values.forEach(({ value, path: { listIndex } }) => {
        if (listIndex === undefined) {
            result = schema.decodeTlv(value);
        } else if (listIndex === null) {
            const element = schema.elementSchema.decodeTlv(value);
            result.push(element);
        } else if (value[0].typeLength.type === TlvType.Null) {
            delete result[listIndex];
        } else {
            result[listIndex] = schema.elementSchema.decodeTlv(value);
        }
    });
    schema.validate(result);
    return result;
}
