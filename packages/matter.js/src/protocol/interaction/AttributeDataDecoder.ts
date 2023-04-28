/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, AttributeJsType } from "../../cluster/Cluster.js";
import { getClusterAttributeById, getClusterById } from "../../cluster/ClusterHelper.js";
import { NodeId } from "../../datatype/NodeId.js";
import { ArraySchema } from "../../tlv/TlvArray.js";
import { TlvType } from "../../tlv/TlvCodec.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Logger } from "../../log/Logger.js";
import { TlvAttributeData, TlvAttributeReport } from "./InteractionProtocol.js";

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

export interface DecodedAttributeValue {
    path: {
        nodeId?: NodeId,
        endpointId: number,
        clusterId: number,
        attributeId: number,
        attributeName: string
    },
    version?: number,
    value: any,
}

export function normalizeAndDecodeReadAttributeReport(data: TypeFromSchema<typeof TlvAttributeReport>[]): DecodedAttributeReportValue[] {
    // TODO Decide how to handle the attribute report status field, right now we ignore it
    const dataValues = data.flatMap(({ attributeData }) => attributeData !== undefined ? attributeData : []);

    return normalizeAndDecodeAttributeData(dataValues) as DecodedAttributeReportValue[]; // dataVersion existing in incoming data, so must also in outgoing data
}

export function normalizeAttributeData(data: TypeFromSchema<typeof TlvAttributeData>[], acceptWildcardPaths = false): TypeFromSchema<typeof TlvAttributeData>[][] {
    // Fill in missing path elements when tag compression is used
    let lastPath: { nodeId?: NodeId, endpointId: number, clusterId: number, attributeId: number } | undefined;
    data.forEach((value) => {
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
        } else if (!acceptWildcardPaths) {
            throw new Error('Tag compression disabled, but path is incomplete: ' + Logger.toJSON(path));
        }
    });

    // Put all returned values into a map to group by path
    const responseList = new Map<string, TypeFromSchema<typeof TlvAttributeData>[]>(); // TODO CHECK
    data.forEach((value) => {
        if (!value) return;
        const { path: { nodeId, endpointId, clusterId, attributeId } } = value;
        const mapId = `${nodeId}-${endpointId}-${clusterId}-${attributeId}`;
        const list = responseList.get(mapId) || [];
        list.push(value);
        responseList.set(mapId, list);
    });

    return Array.from(responseList.values());
}

export function normalizeAndDecodeAttributeData(data: TypeFromSchema<typeof TlvAttributeData>[]): DecodedAttributeValue[] {

    const responseList = normalizeAttributeData(data);
    const result: DecodedAttributeValue[] = [];
    responseList.forEach(values => {
        const { path: { nodeId, endpointId, clusterId, attributeId }, dataVersion } = values[0];

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
            result.push({ path: { nodeId, endpointId, clusterId, attributeId, attributeName: name }, version: dataVersion, value });
        } catch (error: any) {
            logger.error(`Error decoding attribute ${endpointId}/${clusterId}/${attributeId}: ${error.message}`);
        }
    });
    return result;
}

export function decodeValueForAttribute<A extends Attribute<any>>(attribute: A, values: TypeFromSchema<typeof TlvAttributeData>[]): AttributeJsType<A> | undefined {
    const { schema, optional, default: conformanceValue } = attribute;

    // No values, so use default value if available
    if (!values.length) {
        if (optional) return undefined;
        if (conformanceValue === undefined) throw new Error(`Attribute not found`);
        return conformanceValue;
    }

    return decodeValueForSchema(schema, values);
}

export function decodeValueForSchema<T>(schema: TlvSchema<T>, values: TypeFromSchema<typeof TlvAttributeData>[], defaultValue?: T): T | undefined {
    // No values, so use default value if available
    if (!values.length) {
        return defaultValue;
    }

    // The value was returned as one Tlv value, so decode it normally
    if (values.length === 1 && values[0].path.listIndex === undefined) {
        return schema.decodeTlv(values[0].data);
    }

    // Return contained multiple tlv values as an array
    if (!(schema instanceof ArraySchema)) {
        throw new Error(`Attribute is not an list but multiple values were returned`);
    }
    return decodeChunkedArray(schema, values) as T;
}

export function decodeChunkedArray<T>(schema: ArraySchema<T>, values: TypeFromSchema<typeof TlvAttributeData>[]): T[] {
    if (!values.length) throw new Error('No values');
    if (values[0].path.listIndex !== undefined) {
        throw new Error(`List index ${values[0].path.listIndex} on first array element not supported`);
    }
    let result: T[] = [];
    values.forEach(({ data, path: { listIndex } }) => {
        if (listIndex === undefined) {
            result = schema.decodeTlv(data);
        } else if (listIndex === null) {
            const element = schema.elementSchema.decodeTlv(data);
            result.push(element);
        } else if (data[0].typeLength.type === TlvType.Null) {
            result.splice(listIndex, 1);
        } else {
            result[listIndex] = schema.elementSchema.decodeTlv(data);
        }
    });
    schema.validate(result);
    return result;
}
