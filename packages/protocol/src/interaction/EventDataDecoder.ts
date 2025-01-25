/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Logger, UnexpectedDataError } from "#general";
import {
    ClusterId,
    EndpointNumber,
    EventId,
    EventNumber,
    EventPriority,
    getClusterById,
    getClusterEventById,
    NodeId,
    TlvAny,
    TlvEventData,
    TlvEventReport,
    TlvStream,
    TypeFromSchema,
} from "#types";

const logger = Logger.get("EventDataDecoder");

export type DecodedEventData<T> = {
    eventNumber: EventNumber;
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
                    `Decode unknown event ${Diagnostic.hex(clusterId)}/${Diagnostic.hex(eventId)} via the AnySchema.`,
                );

                const eventName = `Unknown (${Diagnostic.hex(eventId)})`;

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
