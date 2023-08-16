/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, AttributeError, AttributeJsType } from "../../cluster/Cluster.js";
import { getClusterAttributeById, getClusterById } from "../../cluster/ClusterHelper.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Logger } from "../../log/Logger.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { ArraySchema } from "../../tlv/TlvArray.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { toHexString } from "../../util/Number.js";
import { TlvAttributeData, TlvAttributeReport } from "./InteractionProtocol.js";

const logger = Logger.get("AttributeDataDecoder");

export interface DecodedAttributeReportValue<T> {
    path: {
        nodeId?: NodeId;
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attributeId: AttributeId;
        attributeName: string;
    };
    version: number;
    value: T;
}

export interface DecodedAttributeValue<T> {
    path: {
        nodeId?: NodeId;
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attributeId: AttributeId;
        attributeName: string;
    };
    version?: number;
    value: T;
}

export function normalizeAndDecodeReadAttributeReport(
    data: TypeFromSchema<typeof TlvAttributeReport>[],
): DecodedAttributeReportValue<any>[] {
    // TODO Decide how to handle the attribute report status field, right now we ignore it
    const dataValues = data.flatMap(({ attributeData }) => (attributeData !== undefined ? attributeData : []));

    return normalizeAndDecodeAttributeData(dataValues) as DecodedAttributeReportValue<any>[]; // dataVersion existing in incoming data, so must also in outgoing data
}

export function normalizeAttributeData(
    data: TypeFromSchema<typeof TlvAttributeData>[],
    acceptWildcardPaths = false,
): TypeFromSchema<typeof TlvAttributeData>[][] {
    // Fill in missing path elements when tag compression is used
    let lastPath:
        | { nodeId?: NodeId; endpointId: EndpointNumber; clusterId: ClusterId; attributeId: AttributeId }
        | undefined;
    data.forEach(value => {
        if (value === undefined) return;
        const { path } = value;
        if (path.enableTagCompression) {
            if (lastPath === undefined) throw new UnexpectedDataError("Tag compression enabled, but no previous path");
            if (path.nodeId === undefined && lastPath.nodeId !== undefined) path.nodeId = lastPath.nodeId;
            if (path.endpointId === undefined) path.endpointId = lastPath.endpointId;
            if (path.clusterId === undefined) path.clusterId = lastPath.clusterId;
            if (path.attributeId === undefined) path.attributeId = lastPath.attributeId;
        } else if (path.endpointId !== undefined && path.clusterId !== undefined && path.attributeId !== undefined) {
            lastPath = {
                nodeId: path.nodeId,
                endpointId: path.endpointId,
                clusterId: path.clusterId,
                attributeId: path.attributeId,
            };
        } else if (!acceptWildcardPaths) {
            throw new UnexpectedDataError("Tag compression disabled, but path is incomplete: " + Logger.toJSON(path));
        }
    });

    // Put all returned values into a map to group by path
    const responseList = new Map<string, TypeFromSchema<typeof TlvAttributeData>[]>(); // TODO CHECK
    data.forEach(value => {
        if (!value) return;
        const {
            path: { nodeId, endpointId, clusterId, attributeId },
        } = value;
        const mapId = `${nodeId}-${endpointId}-${clusterId}-${attributeId}`;
        const list = responseList.get(mapId) || [];
        list.push(value);
        responseList.set(mapId, list);
    });

    return Array.from(responseList.values());
}

export function normalizeAndDecodeAttributeData(
    data: TypeFromSchema<typeof TlvAttributeData>[],
): DecodedAttributeValue<any>[] {
    const responseList = normalizeAttributeData(data);
    const result = new Array<DecodedAttributeValue<any>>();
    responseList.forEach(values => {
        const {
            path: { nodeId, endpointId, clusterId, attributeId },
            dataVersion,
        } = values[0];

        if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
            throw new UnexpectedDataError(`Invalid attribute path ${endpointId}/${clusterId}/${attributeId}`);
        }
        try {
            const cluster = getClusterById(clusterId);
            const attributeDetail = getClusterAttributeById(cluster, attributeId);
            if (attributeDetail === undefined) {
                logger.debug(
                    `Decode unknown attribute ${toHexString(clusterId)}/${toHexString(attributeId)} via the AnySchema.`,
                );

                const attributeName = `Unknown (${toHexString(attributeId)})`;
                const value = decodeUnknownAttributeValue(values);
                result.push({
                    path: { nodeId, endpointId, clusterId, attributeId, attributeName },
                    version: dataVersion,
                    value,
                });

                return;
            }
            const { attribute, name } = attributeDetail;
            const value = decodeValueForAttribute(attribute, values);
            result.push({
                path: { nodeId, endpointId, clusterId, attributeId, attributeName: name },
                version: dataVersion,
                value,
            });
        } catch (error: any) {
            logger.error(
                `Error decoding attribute ${endpointId}/${toHexString(clusterId)}/${toHexString(attributeId)}: ${
                    error.message
                }`,
            );
        }
    });
    return result;
}

export function decodeValueForAttribute<A extends Attribute<any, any>>(
    attribute: A,
    values: TypeFromSchema<typeof TlvAttributeData>[],
): AttributeJsType<A> | undefined {
    const { schema, optional, default: conformanceValue } = attribute;

    // No values, so use default value if available
    if (!values.length) {
        if (optional) return undefined;
        if (conformanceValue === undefined) throw new AttributeError(`Attribute not found.`);
        return conformanceValue;
    }

    return decodeAttributeValueWithSchema(schema, values);
}

export function decodeAttributeValueWithSchema<T>(
    schema: TlvSchema<T>,
    values: TypeFromSchema<typeof TlvAttributeData>[],
    defaultValue?: T,
): T | undefined {
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
        throw new UnexpectedDataError(`Attribute is not an list but multiple values were returned.`);
    }
    return schema.decodeFromChunkedArray(
        values.map(({ data, path: { listIndex } }) => ({ listIndex, element: data })),
    ) as T;
}

export function decodeUnknownAttributeValue(values: TypeFromSchema<typeof TlvAttributeData>[]): any {
    const schema = TlvAny;
    // No values, so use default value if available
    if (!values.length) {
        return undefined;
    }

    // The value was returned as one Tlv value, so decode it normally
    if (values.length === 1 && values[0].path.listIndex === undefined) {
        const tlvEncoded = schema.decodeTlv(values[0].data);
        return schema.decodeAnyTlvStream(tlvEncoded);
    } else {
        // Chunked any data
        const tlvEncoded = new ArraySchema(schema).decodeFromChunkedArray(
            values.map(({ data, path: { listIndex } }) => ({ listIndex, element: data })),
        );
        return tlvEncoded.map(element => schema.decodeAnyTlvStream(element));
    }
}

export function structureReadAttributeDataToClusterObject(data: DecodedAttributeReportValue<any>[]) {
    const structure: { [key: number]: { [key: number]: { [key: string]: any } } } = {};
    for (const {
        path: { endpointId, clusterId, attributeName },
        value,
    } of data) {
        if (structure[endpointId] === undefined) {
            structure[endpointId] = {};
        }
        if (structure[endpointId][clusterId] === undefined) {
            structure[endpointId][clusterId] = {};
        }
        structure[endpointId][clusterId][attributeName] = value;
    }
    return structure;
}
