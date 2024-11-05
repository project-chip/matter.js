/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "#model";

export {
    attributePathToId,
    canAttributePayloadBeChunked,
    chunkAttributePayload,
    clusterPathToId,
    commandPathToId,
    compressAttributeDataReportTags,
    decodeAttributeValueWithSchema,
    decodeListAttributeValueWithSchema,
    decodeUnknownAttributeValue,
    decodeUnknownEventValue,
    encodeAttributePayload,
    encodeEventPayload,
    EventHandler,
    eventPathToId,
    expandPathsInAttributeData,
    genericElementPathToId,
    IncomingInteractionClientMessenger,
    InteractionClient,
    InteractionClientMessenger,
    InteractionEndpointStructure,
    InteractionServer,
    MessageType,
    normalizeAndDecodeAttributeData,
    normalizeAndDecodeEventData,
    normalizeAndDecodeReadAttributeReport,
    normalizeAndDecodeReadEventReport,
    normalizeAttributeData,
    normalizeEventData,
    sortAttributeDataByPath,
    structureReadAttributeDataToClusterObject,
    ServerSubscription as SubscriptionHandler,
    ServerSubscriptionConfig as SubscriptionOptions,
    validateReadAttributesPath,
    validateReadEventPath,
    type AttributePath,
    type AttributeReportPayload,
    type AttributeWithPath,
    type CommandPath,
    type CommandWithPath,
    type DataReport,
    type DataReportPayload,
    type DecodedAttributeReportValue,
    type DecodedAttributeValue,
    type DecodedEventData,
    type DecodedEventReportValue,
    type EventDataPayload,
    type EventPath,
    type EventReportPayload,
    type EventWithPath,
    type InteractionRecipient,
    type InteractionServerMessenger,
    type InvokeRequest,
    type InvokeResponse,
    type ReadRequest,
    type SubscribeRequest,
    type TimedRequest,
    type WriteRequest,
    type WriteResponse,
} from "#protocol";
export { DEFAULT_MAX_PATHS_PER_INVOKE, INTERACTION_PROTOCOL_ID, StatusResponseError } from "#types";
export * from "@matter/types/protocol";

export const INTERACTION_MODEL_REVISION = Specification.INTERACTION_MODEL_REVISION;
