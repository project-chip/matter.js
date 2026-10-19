/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClientInteraction } from "#action/client/ClientInteraction.js";
import { ClientRead } from "#action/client/ClientRead.js";
import { ClientInvoke } from "#action/request/Invoke.js";
import { DecodedInvokeResult } from "#action/response/InvokeResult.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { CertificateAuthority } from "#certificate/CertificateAuthority.js";
import { ControllerCommissioningFlow } from "#peer/ControllerCommissioningFlow.js";
import { SessionClosedError } from "#protocol/errors.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { DedicatedChannelExchangeProvider } from "#protocol/ExchangeProvider.js";
import { NodeSession } from "#session/NodeSession.js";
import { SessionManager } from "#session/SessionManager.js";
import {
    ChannelType,
    Crypto,
    Entropy,
    Environment,
    isObject,
    MemoryStorageDriver,
    NoResponseTimeoutError,
    Seconds,
    StorageManager,
    UnexpectedDataError,
} from "@matter/general";
import { CommandId, EndpointNumber, NodeId, TlvOfModel } from "@matter/types";
import { GeneralCommissioning } from "@matter/types/clusters/general-commissioning";
import { NetworkCommissioning } from "@matter/types/clusters/network-commissioning";
import { TlvAny } from "@matter/types/tlv";
import { createTestFabric } from "../interaction/interaction-utils.js";

class NetworkCommissioningFlow extends ControllerCommissioningFlow {
    constructor(...args: ConstructorParameters<typeof ControllerCommissioningFlow>) {
        super(...args);
        const steps = this.commissioningSteps.filter(
            step =>
                step.stepNumber === 7 || (step.stepNumber === 16 && step.subStepNumber === 3) || step.stepNumber === 18,
        );
        this.commissioningSteps.splice(0, this.commissioningSteps.length, ...steps);
    }

    useSlowStep() {
        this.collectedCommissioningData.supportsConcurrentConnection = false;
        this.commissioningSteps.splice(1, this.commissioningSteps.length - 1, {
            stepNumber: 8,
            subStepNumber: 1,
            name: "Slow commissioning step",
            stepLogic: async () => {
                await MockTime.advance(Seconds(40));
                return this.getCommissioningStepResult(7, 1)!;
            },
        });
    }
}

describe("ControllerCommissioningFlow", () => {
    before(() => {
        MockTime.init();
    });

    for (const { dropCommand, closeSession } of [
        { dropCommand: "addOrUpdateThreadNetwork", closeSession: true },
        { dropCommand: "connectNetwork", closeSession: true },
        { dropCommand: "addOrUpdateThreadNetwork", closeSession: false },
        { dropCommand: "connectNetwork", closeSession: false },
        { dropCommand: undefined, closeSession: false },
    ] as const) {
        const name =
            dropCommand === undefined
                ? "re-arms a usable non-concurrent session after a slow step"
                : `reaches CASE after ${dropCommand} times out with the session ${closeSession ? "closed" : "open"}`;
        it(name, async () => {
            const fabric = createTestFabric();
            const environment = new Environment("commissioning-test");
            environment.set(Crypto, fabric.crypto);
            environment.set(Entropy, fabric.crypto);
            const storage = new StorageManager(new MemoryStorageDriver());
            await storage.initialize();
            environment.set(StorageManager, storage);
            const exchanges = environment.get(ExchangeManager);
            await using session = await NodeSession.create({
                crypto: fabric.crypto,
                id: 1,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 1,
                sharedSecret: new Uint8Array(16),
                salt: new Uint8Array(16),
                isInitiator: true,
                isResumption: false,
                suppressPeerLoss: true,
                channel: {
                    name: "test-ble",
                    type: ChannelType.BLE,
                    maxPayloadSize: 1024,
                    isReliable: true,
                    supportsLargeMessages: false,
                    send: async () => {},
                    close: async () => {},
                },
            });
            const interaction = new ClientInteraction({
                environment,
                exchangeProvider: new DedicatedChannelExchangeProvider(exchanges, session),
                address: fabric.addressOf(NodeId(1)),
            });
            let closedSessionInvocations = 0;
            let postDropInvocations = 0;
            let networkUnresponsive = false;
            let channelDropReported = false;
            const failsafeDurations = new Array<number>();
            const transitions = new Array<boolean>();
            const networkId = new Uint8Array(8);
            Object.assign(interaction, {
                maximumPeerResponseTime: (processingTime = Seconds(30)) => processingTime,
                async *read(request: ClientRead): ReadResult {
                    for (const path of request.attributeRequests ?? []) {
                        const { endpointId, clusterId, attributeId } = path;
                        if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                            throw new UnexpectedDataError("Expected a concrete attribute path");
                        }
                        let value: unknown;
                        if (clusterId === GeneralCommissioning.id) {
                            value = { failSafeExpiryLengthSeconds: 60, maxCumulativeFailsafeSeconds: 60 };
                        } else if (attributeId === NetworkCommissioning.attributes.networks.id) {
                            value = [{ networkId, connected: false }];
                        } else {
                            value = 60;
                        }
                        yield [
                            {
                                kind: "attr-value",
                                path: { endpointId, clusterId, attributeId },
                                value,
                                version: 0,
                                tlv: TlvAny,
                            },
                        ];
                    }
                },
                async *invoke(request: ClientInvoke): DecodedInvokeResult {
                    if (session.isClosed) {
                        closedSessionInvocations++;
                        throw new SessionClosedError("Commissioning session ended");
                    }
                    if (channelDropReported) {
                        postDropInvocations++;
                        await MockTime.advance(Seconds(30));
                        throw new NoResponseTimeoutError("No response to post-drop commissioning invoke");
                    }
                    if (networkUnresponsive) {
                        throw new NoResponseTimeoutError("Commissioning channel is unresponsive");
                    }
                    const { commandPath, commandFields } = request.invokeRequests[0];
                    if (commandPath.clusterId === GeneralCommissioning.id) {
                        const fields = TlvOfModel(GeneralCommissioning.commands.armFailSafe)!.decodeTlv(commandFields!);
                        if (!isObject(fields) || typeof fields.expiryLengthSeconds !== "number") {
                            throw new UnexpectedDataError("Expected an armFailSafe expiry length");
                        }
                        failsafeDurations.push(fields.expiryLengthSeconds);
                        yield [
                            {
                                kind: "cmd-response",
                                path: {
                                    endpointId: EndpointNumber(0),
                                    clusterId: GeneralCommissioning.id,
                                    commandId: CommandId(
                                        GeneralCommissioning.commands.armFailSafe.schema.responseModel!.id!,
                                    ),
                                },
                                data: { errorCode: GeneralCommissioning.CommissioningError.Ok },
                            },
                        ];
                        return;
                    }
                    if (
                        dropCommand !== undefined &&
                        commandPath.commandId === NetworkCommissioning.commands[dropCommand].id
                    ) {
                        networkUnresponsive = true;
                        if (closeSession) {
                            await session.initiateClose();
                        }
                        await MockTime.advance(Seconds(40));
                        channelDropReported = true;
                        throw new NoResponseTimeoutError("Commissioning channel dropped while joining Thread");
                    }
                    yield [
                        {
                            kind: "cmd-response",
                            path: {
                                endpointId: EndpointNumber(0),
                                clusterId: NetworkCommissioning.id,
                                commandId: CommandId(
                                    NetworkCommissioning.commands.addOrUpdateThreadNetwork.schema.responseModel!.id!,
                                ),
                            },
                            data: {
                                networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                                networkIndex: 0,
                            },
                        },
                    ];
                },
            });
            const ca = await CertificateAuthority.create(fabric.crypto);
            await using flow = new NetworkCommissioningFlow(
                interaction,
                ca,
                fabric,
                {
                    regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    regulatoryCountryCode: "XX",
                    attestation: { challengeKey: new Uint8Array(16) },
                    threadNetwork: { operationalDataset: "01021234" },
                },
                async (_address, concurrent) => {
                    transitions.push(concurrent);
                    return undefined;
                },
            );
            if (dropCommand === undefined) {
                flow.useSlowStep();
            }
            try {
                await flow.executeCommissioning();
                expect(session.isClosed).equals(closeSession);
                expect(closedSessionInvocations).equals(0);
                expect(postDropInvocations).equals(0);
                expect(transitions).deep.equals(dropCommand === undefined ? [] : [false]);
                expect(failsafeDurations).deep.equals(
                    dropCommand === undefined
                        ? [60, 60]
                        : dropCommand === "connectNetwork"
                          ? [60, 60, 60, 60]
                          : [60, 60, 60],
                );
            } finally {
                await interaction.close();
                await exchanges.close();
                await environment.get(SessionManager).close();
                await storage.close();
            }
        });
    }
});
