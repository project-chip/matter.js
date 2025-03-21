/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@matter/general";
import { NodeId, Observable, ServerAddressIp } from "@matter/main";
import { GeneralCommissioning } from "@matter/main/clusters";
import { InteractionClient, MessageChannel } from "@matter/main/protocol";
import { ManualPairingCodeCodec, QrPairingCodeCodec, VendorId } from "@matter/main/types";
import {
    CertificateAuthority,
    CertificateManager,
    NodeDiscoveryType,
    SupportedTransportsSchema,
    TlvCertSigningRequest,
} from "@matter/protocol";
import {
    Attribute,
    Command,
    getClusterById,
    TlvAny,
    TlvBoolean,
    TlvByteString,
    TlvInt32,
    TlvNoResponse,
    TlvNullable,
    TlvObject,
    TlvString,
    TlvUInt64,
    TlvVoid,
} from "@matter/types";
import { CommissioningController, NodeCommissioningOptions } from "@project-chip/matter.js";
import { CustomCommissioningFlow } from "../CustomCommissioningFlow.js";
import {
    CommandHandler,
    DelayRequest,
    DiscoveryRequest,
    DiscoveryResponse,
    InitialPairingRequest,
    InvokeByIdRequest,
    InvokeRequest,
    IssueNocChainRequest,
    IssueNocChainResponse,
    ReadAttributeRequest,
    ReadAttributeResponse,
    ReadEventRequest,
    ReadEventResponse,
    RootCertificateResponse,
    SubscribeAttributeRequest,
    SubscribeAttributeResponse,
    SubscribeEventRequest,
    SubscribeEventResponse,
    WriteAttributeByIdRequest,
    WriteAttributeRequest,
} from "./CommandHandler.js";

const logger = Logger.get("LegacyControllerCommandHandler");

export class LegacyControllerCommandHandler extends CommandHandler {
    #identity: string;
    #controllerInstance: CommissioningController;
    #started = false;
    #paseChannel?: MessageChannel;

    constructor(identity: string, controllerInstance: CommissioningController) {
        super();
        this.#identity = identity;
        this.#controllerInstance = controllerInstance;
    }

    get started() {
        return this.#started;
    }

    async start() {
        if (this.#started) return;
        this.#started = true;

        try {
            await this.#controllerInstance.start();
            logger.info(`-----> Controller ${this.#identity} started`);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            logger.error(error);
            throw error;
        }
    }

    close() {
        return this.#controllerInstance.close();
    }

    disconnectNode(nodeId: NodeId) {
        return this.#controllerInstance.disconnectNode(nodeId, true);
    }

    async handleReadAttribute(data: ReadAttributeRequest): Promise<ReadAttributeResponse> {
        const { nodeId, endpointId, clusterId, attributeId, fabricFiltered = true } = data;
        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();

        const { attributeData, attributeStatus } = await client.getMultipleAttributesAndStatus({
            attributes: [
                {
                    endpointId,
                    clusterId,
                    attributeId,
                },
            ],
            isFabricFiltered: fabricFiltered,
        });

        return {
            values: attributeData.map(
                ({ path: { endpointId, clusterId, attributeId }, value, version: dataVersion }) => ({
                    attributeId,
                    clusterId,
                    dataVersion,
                    endpointId,
                    value,
                }),
            ),
            status: attributeStatus?.map(({ path: { endpointId, clusterId, attributeId }, status, clusterStatus }) => ({
                attributeId,
                clusterId,
                endpointId,
                status,
                clusterStatus,
            })),
        };
    }

    async handleReadEvent(data: ReadEventRequest): Promise<ReadEventResponse> {
        const { nodeId, endpointId, clusterId, eventId, eventMin } = data;
        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();
        const { eventData, eventStatus } = await client.getMultipleEventsAndStatus({
            events: [
                {
                    endpointId,
                    clusterId,
                    eventId,
                },
            ],
            eventFilters: eventMin ? [{ eventMin }] : undefined,
        });

        return {
            values: eventData.flatMap(({ path: { endpointId, clusterId, eventId }, events }) =>
                events.map(({ eventNumber, data }) => ({
                    eventId,
                    clusterId,
                    endpointId,
                    eventNumber,
                    value: data,
                })),
            ),
            status: eventStatus?.map(({ path: { endpointId, clusterId, eventId }, status, clusterStatus }) => ({
                clusterId,
                endpointId,
                eventId,
                status,
                clusterStatus,
            })),
        };
    }

    async handleSubscribeAttribute(data: SubscribeAttributeRequest): Promise<SubscribeAttributeResponse> {
        const { nodeId, endpointId, clusterId, attributeId, minInterval, maxInterval, changeListener } = data;
        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();
        const updated = Observable<[void]>();
        let ignoreData = true; // We ignore data coming in during initial seeding
        const { attributeReports = [] } = await client.subscribeMultipleAttributesAndEvents({
            attributes: [
                {
                    endpointId,
                    clusterId,
                    attributeId,
                },
            ],
            minIntervalFloorSeconds: minInterval,
            maxIntervalCeilingSeconds: maxInterval,
            attributeListener: data => {
                if (ignoreData) return;
                changeListener({
                    attributeId: data.path.attributeId,
                    clusterId: data.path.clusterId,
                    endpointId: data.path.endpointId,
                    dataVersion: data.version,
                    value: data.value,
                });
            },
            updateReceived: () => {
                updated.emit();
            },
            keepSubscriptions: false,
        });
        ignoreData = false;

        return {
            values: attributeReports.map(
                ({ path: { endpointId, clusterId, attributeId }, value, version: dataVersion }) => ({
                    attributeId,
                    clusterId,
                    endpointId,
                    dataVersion,
                    value,
                }),
            ),
            updated,
        };
    }

    async handleSubscribeEvent(data: SubscribeEventRequest): Promise<SubscribeEventResponse> {
        const { nodeId, endpointId, clusterId, eventId, minInterval, maxInterval, changeListener } = data;
        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();
        const updated = Observable<[void]>();
        let ignoreData = true; // We ignore data coming in during initial seeding
        const { eventReports = [] } = await client.subscribeMultipleAttributesAndEvents({
            events: [
                {
                    endpointId,
                    clusterId,
                    eventId,
                },
            ],
            minIntervalFloorSeconds: minInterval,
            maxIntervalCeilingSeconds: maxInterval,
            eventListener: data => {
                if (ignoreData) return;
                data.events.forEach(event =>
                    changeListener({
                        eventId: data.path.eventId,
                        clusterId: data.path.clusterId,
                        endpointId: data.path.endpointId,
                        eventNumber: event.eventNumber,
                        value: event.data,
                    }),
                );
            },
            updateReceived: () => {
                updated.emit();
            },
            keepSubscriptions: false,
        });
        ignoreData = false;

        return {
            values: eventReports.flatMap(({ path: { endpointId, clusterId, eventId }, events }) =>
                events.map(({ eventNumber, data }) => ({
                    eventId,
                    clusterId,
                    endpointId,
                    eventNumber,
                    value: data,
                })),
            ),
            updated,
        };
    }

    async handleWriteAttribute(data: WriteAttributeRequest): Promise<void> {
        const { nodeId, endpointId, clusterId, attributeName, value } = data;

        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();
        const cluster = getClusterById(clusterId);

        logger.info("Writing attribute", attributeName, "with value", value);
        await client.setAttribute({
            attributeData: {
                endpointId,
                clusterId,
                attribute: cluster.attributes[attributeName],
                value,
            },
        });
    }

    async handleInvoke(data: InvokeRequest): Promise<any> {
        const { nodeId, endpointId, clusterId, commandId, data: commandData, timedInteractionTimeoutMs } = data;
        let client: InteractionClient;
        if (this.#paseChannel) {
            logger.info("Force reuse of PASE connection", this.#paseChannel.name);
            client = await this.#controllerInstance.createInteractionClient(
                this.#paseChannel,
                NodeDiscoveryType.FullDiscovery,
                {
                    forcedConnection: true,
                },
            );
        } else {
            const node = await this.#controllerInstance.getNode(nodeId, true);
            client = node.isConnected
                ? await (await this.#controllerInstance.getNode(nodeId, true)).getInteractionClient()
                : await this.#controllerInstance.createInteractionClient(nodeId, NodeDiscoveryType.FullDiscovery, {
                      forcedConnection: true,
                  });
        }
        const cluster = getClusterById(clusterId);
        const clusterCommand = Object.values(cluster.commands).find(
            command => (command as any).requestId === commandId,
        ) as Command<any, any, any> | undefined;
        if (!cluster) {
            throw new Error("Cluster not found");
        }
        if (!clusterCommand) {
            throw new Error("Command for Cluster not found");
        }
        return await client.invoke<Command<any, any, any>>({
            endpointId,
            clusterId,
            command: clusterCommand,
            request: commandData,
            timedRequestTimeoutMs: timedInteractionTimeoutMs,
            skipValidation: true,
        });
    }

    /** InvokeById minimalistic handler because only used for error testing */
    async handleInvokeById(data: InvokeByIdRequest): Promise<void> {
        const { nodeId, endpointId, clusterId, commandId, data: commandData, timedInteractionTimeoutMs } = data;
        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();
        await client.invoke<Command<any, any, any>>({
            endpointId,
            clusterId: clusterId,
            command: Command(commandId, TlvAny, 0x00, TlvNoResponse, {
                timed: timedInteractionTimeoutMs !== undefined,
            }),
            request: commandData === undefined ? TlvVoid.encodeTlv() : TlvObject({}).encodeTlv(commandData as any),
            asTimedRequest: timedInteractionTimeoutMs !== undefined,
            timedRequestTimeoutMs: timedInteractionTimeoutMs,
            skipValidation: true,
        });
    }

    async handleWriteAttributeById(data: WriteAttributeByIdRequest): Promise<void> {
        const { nodeId, endpointId, clusterId, attributeId, value } = data;

        const client = await (await this.#controllerInstance.getNode(nodeId)).getInteractionClient();

        logger.info("Writing attribute", attributeId, "with value", value);

        let tlvValue: any;

        if (value === null) {
            tlvValue = TlvNullable(TlvBoolean).encodeTlv(value); // Boolean is just a placeholder here
        } else if (value instanceof Uint8Array) {
            tlvValue = TlvByteString.encodeTlv(value);
        } else {
            switch (typeof value) {
                case "boolean":
                    tlvValue = TlvBoolean.encodeTlv(value);
                    break;
                case "number":
                    tlvValue = TlvInt32.encodeTlv(value);
                    break;
                case "bigint":
                    tlvValue = TlvUInt64.encodeTlv(value);
                    break;
                case "string":
                    tlvValue = TlvString.encodeTlv(value);
                    break;
                default:
                    throw new Error("Unsupported value type for Any encoding");
                    break;
            }
        }

        await client.setAttribute({
            attributeData: {
                endpointId,
                clusterId,
                attribute: Attribute(attributeId, TlvAny),
                value: tlvValue,
            },
        });
    }

    #determineCommissionOptions(data: InitialPairingRequest): NodeCommissioningOptions {
        let passcode: number | undefined = undefined;
        let shortDiscriminator: number | undefined = undefined;
        let longDiscriminator: number | undefined = undefined;
        let productId: number | undefined = undefined;
        let vendorId: VendorId | undefined = undefined;
        let knownAddress: ServerAddressIp | undefined = undefined;

        if ("manualCode" in data && data.manualCode.length > 0) {
            const pairingCodeCodec = ManualPairingCodeCodec.decode(data.manualCode);
            shortDiscriminator = pairingCodeCodec.shortDiscriminator;
            longDiscriminator = undefined;
            passcode = pairingCodeCodec.passcode;
        } else if ("qrCode" in data && data.qrCode.length > 0) {
            const pairingCodeCodec = QrPairingCodeCodec.decode(data.qrCode);
            // TODO handle the case where multiple devices are included
            longDiscriminator = pairingCodeCodec[0].discriminator;
            shortDiscriminator = undefined;
            passcode = pairingCodeCodec[0].passcode;
        } else if ("passcode" in data) {
            passcode = data.passcode;
            vendorId = VendorId(data.vendorId);
            productId = data.productId;
        } else {
            throw new Error("No pairing code provided");
        }

        if (data.knownAddress !== undefined) {
            const { ip, port } = data.knownAddress;
            knownAddress = {
                type: "udp",
                ip,
                port,
            };
        }

        if (passcode == undefined) {
            throw new Error("No passcode provided");
        }

        return {
            commissioning: {
                nodeId: data.nodeId,
                regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                regulatoryCountryCode: "XX",
            },
            discovery: {
                knownAddress,
                identifierData:
                    longDiscriminator !== undefined
                        ? { longDiscriminator }
                        : shortDiscriminator !== undefined
                          ? { shortDiscriminator }
                          : vendorId !== undefined
                            ? { vendorId, productId }
                            : {},
            },
            passcode,
        };
    }

    async handlePaseConnection(data: InitialPairingRequest): Promise<void> {
        await this.disconnectNode(data.nodeId);
        this.#paseChannel = await this.#controllerInstance.connectPaseChannel(this.#determineCommissionOptions(data));
    }

    async handleInitialPairing(data: InitialPairingRequest): Promise<void> {
        await this.#controllerInstance.commissionNode(this.#determineCommissionOptions(data), {
            connectNodeAfterCommissioning: false,
            commissioningFlowImpl: CustomCommissioningFlow,
        });
    }

    getCommissionerNodeId() {
        return this.#controllerInstance.nodeId;
    }

    getCommissionerRootCertificate(): RootCertificateResponse {
        const {
            caConfig: { rootCertBytes },
        } = this.#controllerInstance.paseCommissionerConfig;
        return {
            RCAC: rootCertBytes,
        };
    }

    async commissionerIssueNocChain(data: IssueNocChainRequest): Promise<IssueNocChainResponse> {
        const { nodeId, elements } = data;
        const {
            caConfig,
            fabricData: { fabricId, identityProtectionKey },
        } = this.#controllerInstance.paseCommissionerConfig;
        const { rootCertBytes } = caConfig;
        const ca = await CertificateAuthority.create(caConfig);

        const { certSigningRequest } = TlvCertSigningRequest.decode(elements);
        const operationalPublicKey = CertificateManager.getPublicKeyFromCsr(certSigningRequest);

        return {
            IPK: identityProtectionKey,
            NOC: ca.generateNoc(operationalPublicKey, fabricId, nodeId),
            RCAC: rootCertBytes,
        };
    }

    async handleDelay({ nodeId, expireExistingSession = true }: DelayRequest): Promise<void> {
        if (nodeId === undefined) {
            throw new Error("No nodeId provided");
        }
        if (expireExistingSession) {
            try {
                await this.#controllerInstance.disconnectNode(nodeId, true);
            } catch {
                // ignore
            }
        }
        await this.#controllerInstance.createInteractionClient(nodeId, NodeDiscoveryType.FullDiscovery, {
            forcedConnection: expireExistingSession,
        });
    }

    /** Discover commissionable devices */
    async handleDiscovery({ findBy }: DiscoveryRequest): Promise<DiscoveryResponse> {
        const result = await this.#controllerInstance.discoverCommissionableDevices(
            findBy,
            { onIpNetwork: true },
            undefined,
            3, // Just check for 1 sec
        );
        logger.info("Discovered result", result);
        // Chip is not removing old discoveries when being stopped, so we still have old and new devices in the result
        // but the expectation is that it was reset and only new devices are in the result
        const latestDiscovery = result[result.length - 1];
        if (latestDiscovery === undefined) {
            return [];
        }
        return [latestDiscovery].map(({ DT, DN, CM, D, RI, PH, PI, T, VP, deviceIdentifier, addresses }) => {
            const { tcpClient: supportsTcpClient, tcpServer: supportsTcpServer } = SupportedTransportsSchema.decode(
                T ?? 0,
            );
            const vendorId = VP === undefined ? -1 : VP.includes("+") ? parseInt(VP.split("+")[0]) : parseInt(VP);
            const productId = VP === undefined ? -1 : VP.includes("+") ? parseInt(VP.split("+")[1]) : -1;
            const port = addresses.length ? (addresses[0] as ServerAddressIp).port : 0;
            const numIPs = addresses.length;
            return {
                value: {
                    commissioningMode: CM,
                    deviceName: DN ?? "",
                    deviceType: DT ?? 0,
                    hostName: "000000000000", // Right now we do not return real hostname, only used internally
                    instanceName: deviceIdentifier,
                    longDiscriminator: D,
                    numIPs,
                    pairingHint: PH ?? -1,
                    pairingInstruction: PI ?? "",
                    port,
                    productId,
                    rotatingId: RI ?? "",
                    rotatingIdLen: RI?.length ?? 0,
                    shortDiscriminator: (D >> 8) & 0x0f,
                    vendorId,
                    supportsTcpServer,
                    supportsTcpClient,
                },
            };
        });
    }
}
