/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ExchangeProvider,
    InteractionClientMessenger,
    MessageExchange,
    MessageType,
    ReadRequest,
    SubscribeRequest,
} from "#protocol";
import {
    EndpointNumber,
    StatusCode,
    TlvDataReport,
    TlvReadRequest,
    TlvStatusResponse,
    TlvSubscribeRequest,
    TlvSubscribeResponse,
} from "#types";
import { Specification } from "@matter/model";
import assert from "node:assert";
import { createDummyMessageExchange } from "./InteractionTestUtils.js";

function handleReadRequest(exchange: MessageExchange, messageType: number, payload: Uint8Array) {
    assert.deepEqual(payload.length < exchange.maxPayloadSize, true);
    assert.deepEqual(messageType, MessageType.ReadRequest);
    return {
        response: {
            payload: TlvDataReport.encode({
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                suppressResponse: true,
            }),
            messageType: MessageType.ReportData,
        },
        request: TlvReadRequest.decode(payload),
    };
}

function handleSubscribeRequest(
    exchange: MessageExchange,
    messageType: number,
    payload: Uint8Array,
): {
    response?: { payload: Uint8Array; messageType: number };
    request?: SubscribeRequest;
    subscriptionFinalized?: boolean;
} {
    assert.deepEqual(payload.length < exchange.maxPayloadSize, true);
    if (messageType === MessageType.SubscribeRequest) {
        return {
            response: {
                payload: TlvDataReport.encode({
                    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                    suppressResponse: false,
                    subscriptionId: 1,
                }),
                messageType: MessageType.ReportData,
            },
            request: TlvSubscribeRequest.decode(payload),
        };
    } else if (messageType === MessageType.StatusResponse) {
        const status = TlvStatusResponse.decode(payload).status;
        assert.strictEqual(status, StatusCode.Success);
        return {
            response: {
                payload: TlvSubscribeResponse.encode({
                    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                    subscriptionId: 1,
                    maxInterval: 10,
                }),
                messageType: MessageType.SubscribeResponse,
            },
            subscriptionFinalized: true,
        };
    }
    return {};
}

describe("InteractionClientMessenger", () => {
    it("reads attributes", async () => {
        let request: ReadRequest | undefined = undefined;

        const exchange = await createDummyMessageExchange(false, false, (messageType, payload) => {
            const { response, request: result } = handleReadRequest(exchange, messageType, payload);
            if (result !== undefined) {
                request = result;
            }
            return response;
        });
        const messenger = new InteractionClientMessenger(exchange, {} as ExchangeProvider);

        const requestData = {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            isFabricFiltered: true,
            attributeRequests: [{}],
        } as ReadRequest;

        await messenger.sendReadRequest(requestData);

        assert.deepEqual(request, requestData);
    });

    it("reads attributes with too many dataVersionFilters", async () => {
        let request: ReadRequest | undefined = undefined;

        const exchange = await createDummyMessageExchange(false, false, (messageType, payload) => {
            const { response, request: result } = handleReadRequest(exchange, messageType, payload);
            if (result !== undefined) {
                request = result;
            }
            return response;
        });
        const messenger = new InteractionClientMessenger(exchange, {} as ExchangeProvider);

        const dataVersionFilters = [];
        for (let i = 0; i < 70; i++) {
            dataVersionFilters.push({
                path: { endpointId: EndpointNumber(i), clusterId: 0 },
                dataVersion: 2 ** 32 - (i + 1) * 1024,
            });
        }
        const requestData = {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            isFabricFiltered: true,
            attributeRequests: [{}],
            dataVersionFilters,
        } as ReadRequest;

        await messenger.sendReadRequest(requestData);

        assert.ok(request);
        assert.deepEqual((request as SubscribeRequest).dataVersionFilters?.length, 68);
        requestData.dataVersionFilters!.length = 68;
        assert.deepEqual(request, requestData);
    });

    it("subscribes attributes", async () => {
        let request: SubscribeRequest | undefined = undefined;
        let subscriptionFinalized = false;

        const exchange = await createDummyMessageExchange(false, false, (messageType, payload) => {
            const {
                response,
                request: result,
                subscriptionFinalized: isFinalized,
            } = handleSubscribeRequest(exchange, messageType, payload);
            assert.ok(response);
            if (result !== undefined && isFinalized === undefined) {
                assert.deepEqual(subscriptionFinalized, false);
                request = result;
            } else if (isFinalized !== undefined && result === undefined) {
                assert.deepEqual(subscriptionFinalized, false);
                subscriptionFinalized = isFinalized;
            } else {
                assert.fail("Invalid response");
            }
            return response;
        });
        const messenger = new InteractionClientMessenger(exchange, {} as ExchangeProvider);

        const requestData = {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            isFabricFiltered: true,
            keepSubscriptions: true,
            minIntervalFloorSeconds: 0,
            maxIntervalCeilingSeconds: 1,
            attributeRequests: [{}],
        } as SubscribeRequest;

        await messenger.sendSubscribeRequest(requestData);

        assert.deepEqual(request, requestData);
        assert.deepEqual(subscriptionFinalized, true);
    });

    it("subscribes attributes with too many dataVersionFilters", async () => {
        let request: SubscribeRequest | undefined = undefined;
        let subscriptionFinalized = false;

        const exchange = await createDummyMessageExchange(false, false, (messageType, payload) => {
            const {
                response,
                request: result,
                subscriptionFinalized: isFinalized,
            } = handleSubscribeRequest(exchange, messageType, payload);
            assert.ok(response);
            if (result !== undefined && isFinalized === undefined) {
                assert.deepEqual(subscriptionFinalized, false);
                request = result;
            } else if (isFinalized !== undefined && result === undefined) {
                assert.deepEqual(subscriptionFinalized, false);
                subscriptionFinalized = isFinalized;
            } else {
                assert.fail("Invalid response");
            }
            return response;
        });
        const messenger = new InteractionClientMessenger(exchange, {} as ExchangeProvider);

        const dataVersionFilters = [];
        for (let i = 0; i < 70; i++) {
            dataVersionFilters.push({
                path: { endpointId: EndpointNumber(i), clusterId: 0 },
                dataVersion: 2 ** 32 - (i + 1) * 1024,
            });
        }
        const requestData = {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            isFabricFiltered: true,
            keepSubscriptions: true,
            minIntervalFloorSeconds: 0,
            maxIntervalCeilingSeconds: 1,
            attributeRequests: [{}],
            dataVersionFilters,
        } as SubscribeRequest;

        await messenger.sendSubscribeRequest(requestData);

        assert.ok(request);
        assert.deepEqual((request as SubscribeRequest).dataVersionFilters?.length, 67);
        requestData.dataVersionFilters!.length = 67;
        assert.deepEqual(request, requestData);
        assert.deepEqual(subscriptionFinalized, true);
    });
});
