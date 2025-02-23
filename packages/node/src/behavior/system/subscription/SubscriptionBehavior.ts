/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { deepCopy, Diagnostic, isIpNetworkChannel, Logger, MatterError, ServerAddressIp } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { TransactionalInteractionServer } from "#node/index.js";
import {
    ChannelManager,
    NoChannelError,
    NodeDiscoveryType,
    PeerAddress,
    PeerAddressSet,
    PeerSet,
    PeerSubscription,
    ServerSubscription,
    SessionManager,
    Subscription,
} from "#protocol";
import { StatusCode, StatusResponseError } from "#types";
import { Behavior } from "../../Behavior.js";
const logger = Logger.get("SubscriptionBehavior");

/** Timeout in seconds to wait for responses or discovery of the peer node when trying to re-establish a subscription. */
const REESTABLISH_SUBSCRIPTIONS_TIMEOUT_S = 2;

/**
 * Subscriptions Persistence handling.
 *
 * This behavior collects and stores active subscriptions to allow re-activating them on restart in order to try to speed
 * up the controller reconnection process. This can mean  a bit more memory usage on start of the device. To disable this
 * feature set `persistenceEnabled` as state of the `subscription` behavior to `false`.
 */
export class SubscriptionBehavior extends Behavior {
    static override readonly id = "subscription";

    declare state: SubscriptionBehavior.State;
    declare internal: SubscriptionBehavior.Internal;

    override initialize() {
        if (this.state.subscriptions !== undefined && this.state.persistenceEnabled !== false) {
            this.internal.formerSubscriptions = deepCopy(this.state.subscriptions);
        }
        this.state.subscriptions = [];
    }

    static override schema = new DatatypeModel(
        {
            name: "SubscriptionState",
            type: "struct",
        },
        FieldElement({
            name: "subscriptions",
            type: "list",
            quality: "N",
            children: [
                FieldElement({
                    name: "entry",
                    type: "struct",
                    children: [
                        FieldElement({ name: "subscriptionId", type: "uint32" }),
                        FieldElement({
                            name: "peerAddress",
                            type: "struct",
                            children: [
                                FieldElement({ name: "fabricIndex", type: "fabric-id" }),
                                FieldElement({ name: "nodeId", type: "node-id" }),
                            ],
                        }),
                        FieldElement({
                            name: "attributeRequests",
                            type: "list",
                            children: [
                                FieldElement({
                                    name: "entry",
                                    type: "struct",
                                    children: [
                                        FieldElement({ name: "enableTagCompression", type: "bool", conformance: "O" }),
                                        FieldElement({ name: "nodeId", type: "node-id", conformance: "O" }),
                                        FieldElement({ name: "endpointId", type: "endpoint-no", conformance: "O" }),
                                        FieldElement({ name: "clusterId", type: "cluster-id", conformance: "O" }),
                                        FieldElement({ name: "attributeId", type: "attrib-id", conformance: "O" }),
                                        FieldElement({ name: "listIndex", type: "uint16", conformance: "O" }),
                                        FieldElement({
                                            name: "wildcardPathFlags",
                                            type: "WildcardPathFlagsBitmap",
                                            conformance: "O",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        FieldElement({
                            name: "eventRequests",
                            type: "list",
                            children: [
                                FieldElement({
                                    name: "entry",
                                    type: "struct",
                                    children: [
                                        FieldElement({ name: "nodeId", type: "node-id", quality: "O" }),
                                        FieldElement({ name: "endpointId", type: "endpoint-no", quality: "O" }),
                                        FieldElement({ name: "clusterId", type: "cluster-id", quality: "O" }),
                                        FieldElement({ name: "eventId", type: "event-id", quality: "O" }),
                                        FieldElement({ name: "isUrgent", type: "bool", quality: "O" }),
                                    ],
                                }),
                            ],
                        }),
                        FieldElement({ name: "isFabricFiltered", type: "bool" }),
                        FieldElement({ name: "maxIntervalCeilingSeconds", type: "uint16" }),
                        FieldElement({ name: "minIntervalFloorSeconds", type: "uint16" }),
                        FieldElement({ name: "maxInterval", type: "uint16" }),
                        FieldElement({ name: "sendInterval", type: "uint16" }),
                        FieldElement({
                            name: "operationalAddress",
                            type: "struct",
                            conformance: "O",
                            children: [
                                FieldElement({ name: "type", type: "string" }),
                                FieldElement({ name: "ip", type: "string" }),
                                FieldElement({ name: "port", type: "uint16" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    );

    addSubscription(subscription: Subscription) {
        if (this.state.persistenceEnabled === false || !(subscription instanceof ServerSubscription)) return;

        const {
            criteria: { attributeRequests, eventRequests, isFabricFiltered },
            session,
            maxInterval,
            sendInterval,
            id,
            maxIntervalCeilingSeconds,
            minIntervalFloorSeconds,
        } = subscription;
        const { peerAddress } = session;
        const { fabricIndex, nodeId } = peerAddress;

        // TODO Remove when we store peer addresses also for operational nodes
        let operationalAddress: ServerAddressIp | undefined;
        try {
            const channel = this.env.get(ChannelManager).getChannel(peerAddress, session).channel;
            operationalAddress = isIpNetworkChannel(channel) ? channel.networkAddress : undefined;
        } catch (error) {
            // Can happen in edge cases, so better catch it and proceed without operational address
            NoChannelError.accept(error);
        }
        const peerSubscription: PeerSubscription = {
            subscriptionId: id,
            peerAddress: { fabricIndex, nodeId },
            maxIntervalCeilingSeconds,
            minIntervalFloorSeconds,
            attributeRequests,
            eventRequests,
            isFabricFiltered,
            maxInterval,
            sendInterval,
            operationalAddress,
        };
        this.reactTo(subscription.cancelled, this.#subscriptionCancelled);

        const existingIndex = this.state.subscriptions.findIndex(({ subscriptionId }) => id === subscriptionId);
        if (existingIndex !== -1) {
            // Should normally never happen
            this.state.subscriptions[existingIndex] = peerSubscription;
            return;
        }
        this.state.subscriptions.push(peerSubscription);
    }

    #subscriptionCancelled(subscription: Subscription) {
        if (subscription.isCanceledByPeer) {
            if (this.state.persistenceEnabled === false) return;
            const { id } = subscription;
            const subscriptionIndex = this.state.subscriptions.findIndex(({ subscriptionId }) => id === subscriptionId);
            if (subscriptionIndex !== -1) {
                this.state.subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }

    async reestablishFormerSubscriptions(interactionServer: TransactionalInteractionServer) {
        if (this.state.persistenceEnabled === false) return;

        // get and clear former subscriptions
        const { formerSubscriptions } = this.internal;

        if (!formerSubscriptions.length) {
            return;
        } else {
            this.internal.formerSubscriptions = [];
            await this.context.transaction.commit();
        }
        const peers = this.env.get(PeerSet);
        const sessions = this.env.get(SessionManager);

        const peerStopList = new PeerAddressSet();

        // Block subscription resumption when this peer already has a subscription establishment in progress via normal interaction
        const blockHandler = (peerAddress: PeerAddress) => void peerStopList.add(peerAddress);
        interactionServer.subscriptionEstablishmentStarted.on(blockHandler);

        const successfullReEstablishments = Array<number>();
        for (const subscription of formerSubscriptions) {
            const { peerAddress, operationalAddress, subscriptionId } = subscription;
            if (peerStopList.has(peerAddress)) {
                logger.debug(
                    "Skip re-establishing former subscription to",
                    Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                );
                continue;
            }
            logger.debug(
                `Try to re-establish former subscription ${subscriptionId} to`,
                Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
            );
            if (sessions.getSessionForNode(peerAddress) !== undefined) {
                logger.debug(
                    "We already have and existing session for peer",
                    Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                );
            } else {
                try {
                    await peers.ensureConnection(peerAddress, {
                        discoveryOptions: {
                            discoveryType: NodeDiscoveryType.TimedDiscovery,
                            timeoutSeconds: REESTABLISH_SUBSCRIPTIONS_TIMEOUT_S,
                        },
                        allowUnknownPeer: true,
                        operationalAddress,
                    });
                } catch (error) {
                    peerStopList.add(peerAddress);
                    logger.debug(
                        "Failed to connect to",
                        Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                        error instanceof MatterError ? error.message : error,
                    );
                    continue;
                }
            }
            try {
                if (peerStopList.has(peerAddress)) {
                    // To prevent concurrency issues, check again if there is a stop reason for this fabric
                    logger.debug(
                        `Skip re-establishing former subscription ${subscriptionId} to`,
                        Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                    );
                    continue;
                }
                const session = sessions.getSessionForNode(peerAddress);
                if (session === undefined) {
                    peerStopList.add(peerAddress);
                    logger.debug(
                        "Could not connect to peer",
                        Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                    );
                    continue;
                }
                await interactionServer.establishFormerSubscription(subscription, session);
            } catch (error) {
                logger.debug(
                    `Failed to re-establish former subscription ${subscriptionId} to`,
                    Diagnostic.dict({ fabricIndex: peerAddress.fabricIndex, fabricId: peerAddress.nodeId }),
                    StatusResponseError.is(error)
                        ? error.code === StatusCode.InvalidSubscription
                            ? "Subscription no langer valid for peer"
                            : error.message
                        : error,
                );
                continue;
            }
            successfullReEstablishments.push(subscriptionId);
        }
        interactionServer.subscriptionEstablishmentStarted.off(blockHandler);

        logger.info(
            `Re-established ${successfullReEstablishments.length} ${successfullReEstablishments.length ? `(${successfullReEstablishments.join(",")})` : ""} of ${formerSubscriptions.length} former subscriptions successfully`,
        );
    }
}

export namespace SubscriptionBehavior {
    export class State {
        /** Set to false if persistence of subscriptions should be disabled */
        persistenceEnabled = true;

        /**
         * List of subscriptions. This list is collected automatically.
         * The state value should not be initialized by the developer.
         */
        subscriptions!: PeerSubscription[];
    }

    export class Internal {
        /**
         * Subscriptions that were established on the former device run. On initialization this will be initialized
         * with the persisted subscriptions and then used to re-establish the subscriptions.
         */
        formerSubscriptions = Array<PeerSubscription>();
    }
}
