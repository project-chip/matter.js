/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventPriority } from "../../cluster/Cluster.js";
import { getClusterById, getClusterEventById } from "../../cluster/ClusterHelper.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Logger } from "../../log/Logger.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { TlvStream, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { toHexString } from "../../util/Number.js";
import { TlvEventData, TlvEventReport } from "./InteractionProtocol.js";

const logger = Logger.get("EventDataDecoder");

export type DecodedEventData<T> = {
    eventNumber: number | bigint;
    priority: EventPriority;
    epochTimestamp?: number | bigint;
    systemTimestamp?: number | bigint;
    deltaEpochTimestamp?: number | bigint;
    deltaSystemTimestamp?: number | bigint;
    data?: T;
};

export type DecodedEventReportValue<T> = {
    path: {
        nodeId?: NodeId;
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        eventId: EventId;
        eventName: string;
    };
    events: DecodedEventData<T>[];
};

export function normalizeAndDecodeReadEventReport(
    data: TypeFromSchema<typeof TlvEventReport>[],
): DecodedEventReportValue<any>[] {
    // TODO Decide how to handle the attribute report status field, right now we ignore it
    const dataValues = data.flatMap(({ eventData }) => (eventData !== undefined ? eventData : []));

    return normalizeAndDecodeEventData(dataValues);
}

export function normalizeEventData(
    data: TypeFromSchema<typeof TlvEventData>[],
): TypeFromSchema<typeof TlvEventData>[][] {
    // Put all returned values into a map to group by path
    const responseList = new Map<string, TypeFromSchema<typeof TlvEventData>[]>(); // TODO CHECK
    data.forEach(value => {
        if (!value) return;
        const {
            path: { nodeId, endpointId, clusterId, eventId },
        } = value;
        const mapId = `${nodeId}-${endpointId}-${clusterId}-${eventId}`;
        const list = responseList.get(mapId) || [];
        list.push(value);
        responseList.set(mapId, list);
    });

    return Array.from(responseList.values());
}

export function normalizeAndDecodeEventData(
    data: TypeFromSchema<typeof TlvEventData>[],
): DecodedEventReportValue<any>[] {
    const responseList = normalizeEventData(data);
    const result = new Array<DecodedEventReportValue<any>>();
    responseList.forEach(values => {
        const {
            path: { nodeId, endpointId, clusterId, eventId },
        } = values[0];

        if (endpointId === undefined || clusterId === undefined || eventId === undefined) {
            throw new UnexpectedDataError(`Invalid event path ${endpointId}/${clusterId}/${eventId}`);
        }
        try {
            const cluster = getClusterById(clusterId);
            const eventDetail = getClusterEventById(cluster, eventId);
            if (eventDetail === undefined) {
                logger.debug(
                    `Decode unknown event ${toHexString(clusterId)}/${toHexString(eventId)} via the AnySchema.`,
                );

                const eventName = `Unknown (${toHexString(eventId)})`;

                const events = values.map(eventData => ({
                    ...eventData,
                    data: eventData.data === undefined ? undefined : decodeUnknownEventValue(eventData.data),
                    path: undefined,
                }));
                result.push({ path: { nodeId, endpointId, clusterId, eventId, eventName }, events });

                return;
            }
            const {
                event: { schema },
                name,
            } = eventDetail;
            const events = values.map(eventData => ({
                ...eventData,
                data: eventData.data === undefined ? undefined : schema.decodeTlv(eventData.data),
                path: undefined,
            }));
            result.push({ path: { nodeId, endpointId, clusterId, eventId, eventName: name }, events });
        } catch (error: any) {
            logger.error(`Error decoding event ${endpointId}/${clusterId}/${eventId}: ${error.message}`);
        }
    });
    return result;
}

export function decodeUnknownEventValue(data: TlvStream): any {
    const schema = TlvAny;

    if (data.length === 0) {
        return undefined;
    }

    const tlvEncoded = schema.decodeTlv(data);
    return schema.decodeAnyTlvStream(tlvEncoded);
}
