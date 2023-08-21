/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateManager } from "../certificate/CertificateManager.js";
import { RootCertificateManager } from "../certificate/RootCertificateManager.js";
import { ClusterClient } from "../cluster/client/ClusterClient.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { BasicInformation } from "../cluster/definitions/BasicInformationCluster.js";
import { Descriptor } from "../cluster/definitions/DescriptorCluster.js";
import { GeneralCommissioning } from "../cluster/definitions/GeneralCommissioningCluster.js";
import { NetworkCommissioning } from "../cluster/definitions/NetworkCommissioningCluster.js";
import { OperationalCredentials } from "../cluster/definitions/OperationalCredentialsCluster.js";
import { TimeSyncCluster } from "../cluster/definitions/TimeSyncCluster.js";
import { TlvCertSigningRequest } from "../cluster/server/OperationalCredentialsServer.js";
import { MatterError, UnexpectedDataError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { FabricId } from "../datatype/FabricId.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { Time } from "../time/Time.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { ByteArray } from "../util/ByteArray.js";
import { InteractionClient } from "./interaction/InteractionClient.js";

const logger = Logger.get("ControllerCommissioner");

/**
 * User specific options for the Commissioning process
 */
export type CommissioningOptions = {
    regulatoryLocation: GeneralCommissioning.RegulatoryLocationType;
    regulatoryCountryCode: string;
    wifiNetwork?: {
        wifiSsid: string;
        wifiCredentials: string;
    };
    threadNetwork?: {
        networkName: string;
        operationalDataset: string;
    };
    adminVendorId?: number;
};

/**
 * Types representation of a general commissioning response
 */
type CommissioningSuccessFailureResponse = {
    errorCode: number;
    debugText?: string;
};

/**
 * Result code of a single commissioning step
 */
enum CommissioningStepResultCode {
    Success,
    Failure,
    Skipped,
}

/**
 * Result of a single commissioning step
 * Breadcrump value is stored for each step for transparency
 */
type CommissioningStepResult = {
    code: CommissioningStepResultCode;
    breadcrumb: number;
};

/**
 * Definition of one commissioning step
 * All steps are for execution sorted by stepNumber and subStepNumber
 */
type CommissioningStep = {
    /** Step Number according to the specs */
    stepNumber: number;

    /** Order of actions within a step */
    subStepNumber: number;

    /** Name of the action or step */
    name: string;

    /** Logic function to execute */
    stepLogic: () => Promise<CommissioningStepResult>;
};

/** Data that are collected initially or through the commissioning process and can be used also by other steps. */
type CollectedCommissioningData = {
    basicCommissioningInfo?: TypeFromSchema<typeof GeneralCommissioning.TlvBasicCommissioningInfo>;
    productName?: string;
    networkFeatures?: {
        endpointId: number;
        value: TypeFromPartialBitSchema<typeof NetworkCommissioning.Cluster.features>;
    }[];
    networkStatus?: { endpointId: number; value: TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfoStruct>[] }[];
    rootPartsList?: EndpointNumber[];
    rootServerList?: ClusterId[];
    vendorId?: VendorId;
    productId?: number;
    supportsConcurrentConnection?: boolean;
};

/** Error that throws when Commissioning fails and process can not be continued. */
export class CommissioningError extends MatterError {}

/** Error that throws when Commissioning fails but process can be continued. */
class RecoverableCommissioningError extends CommissioningError {}

const DEFAULT_FAILSAFE_TIME_MS = 60000;

// TODO Do not hard code them!
const FABRIC_ID = FabricId(1); // TODO Random?
const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);

/**
 * Class to abstract the Device commission flow in a step wise way as defined in Specs. The specs are not 100%
 */
export class ControllerCommissioner {
    private readonly commissioningSteps = new Array<CommissioningStep>();
    private readonly commissioningStepResults = new Map<string, CommissioningStepResult>();
    private readonly clusterClients = new Map<ClusterId, ClusterClientObj<any, Attributes, Commands, Events>>();
    private commissioningStartedTime: number | undefined;
    private commissioningExpiryTime: number | undefined;
    private lastFailSafeTime: number | undefined;
    private lastBreadcrumb = 1;
    private collectedCommissioningData: CollectedCommissioningData = {};
    private failSafeTimeMs = DEFAULT_FAILSAFE_TIME_MS;

    constructor(
        private interactionClient: InteractionClient,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
        private readonly commissioningOptions: CommissioningOptions,
        private readonly reconnectWithDeviceCallback: (peerNodeId: NodeId) => Promise<InteractionClient>,
    ) {
        logger.debug(`Commissioning options: ${Logger.toJSON(commissioningOptions)}`);
        this.initializeCommissioningSteps();
    }

    /**
     * Helper method to create ClusterClients. If not feature specific and for the Root Endpoint they are also reused.
     */
    private getClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(
        cluster: Cluster<F, SF, A, C, E>,
        endpointId = EndpointNumber(0),
        isFeatureSpecific = false,
    ): ClusterClientObj<F, A, C, E> {
        if (!isFeatureSpecific && endpointId === 0) {
            const clusterClient = this.clusterClients.get(cluster.id);
            if (clusterClient !== undefined) {
                logger.debug(
                    `Returning existing cluster client for cluster ${cluster.name} (endpoint ${endpointId}, isFeatureSpecific ${isFeatureSpecific})`,
                );
                return clusterClient as ClusterClientObj<F, A, C, E>;
            }
        }
        logger.debug(
            `Creating new cluster client for cluster ${cluster.name} (endpoint ${endpointId}, isFeatureSpecific ${isFeatureSpecific})`,
        );
        const client = ClusterClient(cluster, endpointId, this.interactionClient);
        this.clusterClients.set(cluster.id, client);
        return client;
    }

    /**
     * Initialize commissioning steps and add them in the default order
     */
    private initializeCommissioningSteps() {
        this.commissioningSteps.push({
            stepNumber: 0,
            subStepNumber: 1,
            name: "GetInitialData",
            stepLogic: () => this.getInitialData(),
        });

        this.commissioningSteps.push({
            stepNumber: 3,
            subStepNumber: 1,
            name: "GeneralCommissioning.ArmFailsafe",
            stepLogic: () => this.armFailsafe(),
        });

        this.commissioningSteps.push({
            stepNumber: 5,
            subStepNumber: 1,
            name: "GeneralCommissioning.ConfigureRegulatoryInformation",
            stepLogic: () => this.configureRegulatoryInformation(),
        });

        this.commissioningSteps.push({
            stepNumber: 5,
            subStepNumber: 2,
            name: "TimeSync.SynchronizeTime",
            stepLogic: () => this.synchronizeTime(),
        });

        this.commissioningSteps.push({
            stepNumber: 6,
            subStepNumber: 1,
            name: "OperationalCredentials.DeviceAttestation",
            stepLogic: () => this.deviceAttestation(),
        });

        this.commissioningSteps.push({
            stepNumber: 7,
            subStepNumber: 1,
            name: "OperationalCredentials.Certificates",
            stepLogic: () => this.certificates(),
        });

        this.commissioningSteps.push({
            stepNumber: 10,
            subStepNumber: 1,
            name: "AccessControl",
            stepLogic: () => this.configureAccessControlLists(),
        });

        this.commissioningSteps.push({
            stepNumber: 11,
            subStepNumber: 1,
            name: "NetworkCommissioning.Validate",
            stepLogic: () => this.validateNetwork(),
        });
        if (this.commissioningOptions.wifiNetwork !== undefined) {
            this.commissioningSteps.push({
                stepNumber: 11,
                subStepNumber: 2,
                name: "NetworkCommissioning.Wifi",
                stepLogic: () => this.configureNetworkWifi(),
            });
        }
        if (this.commissioningOptions.threadNetwork !== undefined) {
            this.commissioningSteps.push({
                stepNumber: 11,
                subStepNumber: 3,
                name: "NetworkCommissioning.Thread",
                stepLogic: () => this.configureNetworkThread(),
            });
        }

        this.commissioningSteps.push({
            stepNumber: 12,
            subStepNumber: 1,
            name: "Reconnect",
            stepLogic: () => this.reconnectWithDevice(),
        });

        this.commissioningSteps.push({
            stepNumber: 15,
            subStepNumber: 1,
            name: "GeneralCommissioning.Complete",
            stepLogic: () => this.completeCommissioning(),
        });
    }

    /**
     * Execute the commissioning process in the defined order. The steps are sorted before execution based on the step
     * number and sub step number.
     * If >50% of the failsafe time has passed, the failsafe timer is re-armed (50% of 60s default are 30s and each
     * action is allowed to take 30s at minimum based on specs)
     */
    async executeCommissioning() {
        this.sortSteps();

        for (const step of this.commissioningSteps) {
            logger.info(`Executing commissioning step ${step.stepNumber}.${step.subStepNumber}: ${step.name}`);
            try {
                const result = await step.stepLogic();
                this.setCommissioningStepResult(step, result);
                if (this.lastFailSafeTime !== undefined) {
                    const timeSinceLastArmFailsafe = Time.nowMs() - this.lastFailSafeTime;
                    if (this.commissioningExpiryTime !== undefined && Time.nowMs() > this.commissioningExpiryTime) {
                        logger.error(
                            `Commissioning step ${step.stepNumber}.${step.subStepNumber}: ${step.name} succeeded, but commissioning took too long in general!`,
                        );
                        throw new CommissioningError(`Commissioning took too long!`);
                    }
                    /**
                     * Commissioner SHALL re-arm the Fail-safe timer on the Commissionee to the desired commissioning
                     * timeout within 60 seconds of the completion of PASE session establishment, using the ArmFailSafe
                     * command (see Section 11.9.6.2, “ArmFailSafe Command”)
                     */
                    if (timeSinceLastArmFailsafe > this.failSafeTimeMs / 2) {
                        logger.info(
                            `After Commissioning step ${step.stepNumber}.${step.subStepNumber}: ${
                                step.name
                            } succeeded, ${Math.floor(
                                timeSinceLastArmFailsafe / 1000,
                            )}s elapsed since last arm failsafe, re-arming failsafe`,
                        );
                        await this.armFailsafe();
                    }
                }
            } catch (error) {
                if (error instanceof RecoverableCommissioningError) {
                    logger.error(
                        `Commissioning step ${step.stepNumber}.${step.subStepNumber}: ${step.name} failed with recoverable error: ${error.message} ... Continuing with process`,
                    );
                } else if (error instanceof CommissioningError) {
                    logger.error(
                        `Commissioning step ${step.stepNumber}.${step.subStepNumber}: ${step.name} failed with error: ${error.message} ... Aborting commissioning`,
                    );
                    throw error;
                } else {
                    throw error;
                }
            }
        }
    }

    private sortSteps() {
        this.commissioningSteps.sort((a, b) => {
            if (a.stepNumber !== b.stepNumber) return a.stepNumber - b.stepNumber;
            return a.subStepNumber - b.subStepNumber;
        });
    }

    private setCommissioningStepResult(step: CommissioningStep, result: CommissioningStepResult) {
        this.commissioningStepResults.set(`${step.stepNumber}-${step.subStepNumber}`, result);
    }

    getCommissioningStepResult(stepNumber: number, subStepNumber: number) {
        return this.commissioningStepResults.get(`${stepNumber}-${subStepNumber}`);
    }

    /** Helper method to check for errorCode/debugTest responses and throw error on failure */
    private ensureGeneralCommissioningSuccess(
        context: string,
        { errorCode, debugText }: CommissioningSuccessFailureResponse,
    ) {
        logger.debug(`Commissioning step ${context} returned ${errorCode}, ${debugText}`);

        if (errorCode === GeneralCommissioning.CommissioningError.Ok) return;
        throw new CommissioningError(`Commission error for "${context}": ${errorCode}, ${debugText}`);
    }

    /**
     * Initial Step to receive some common data used by other steps
     */
    private async getInitialData() {
        const descriptorClient = this.getClusterClient(Descriptor.Cluster);
        this.collectedCommissioningData.rootPartsList = await descriptorClient.getPartsListAttribute();
        this.collectedCommissioningData.rootServerList = await descriptorClient.getServerListAttribute();

        const networkData = await this.interactionClient.getMultipleAttributes({
            attributes: [
                {
                    clusterId: NetworkCommissioning.Cluster.id,
                    attributeId: NetworkCommissioning.Cluster.attributes.featureMap.id,
                },
                {
                    clusterId: NetworkCommissioning.Cluster.id,
                    attributeId: NetworkCommissioning.Cluster.attributes.networks.id,
                },
            ],
        });
        const networkFeatures = new Array<{
            endpointId: number;
            value: TypeFromPartialBitSchema<typeof NetworkCommissioning.Cluster.features>;
        }>();
        const networkStatus = new Array<{
            endpointId: number;
            value: TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfoStruct>[];
        }>();
        for (const {
            path: { endpointId, attributeId },
            value,
        } of networkData) {
            if (attributeId === NetworkCommissioning.Cluster.attributes.featureMap.id) {
                networkFeatures.push({ endpointId, value });
            } else if (attributeId === NetworkCommissioning.Cluster.attributes.networks.id) {
                networkStatus.push({ endpointId, value });
            }
        }
        this.collectedCommissioningData.networkFeatures = networkFeatures;
        this.collectedCommissioningData.networkStatus = networkStatus;

        const basicInfoClient = this.getClusterClient(BasicInformation.Cluster);
        this.collectedCommissioningData.vendorId = await basicInfoClient.getVendorIdAttribute();
        this.collectedCommissioningData.productId = await basicInfoClient.getProductIdAttribute();
        this.collectedCommissioningData.productName = await basicInfoClient.getProductNameAttribute();

        const generalCommissioningClient = this.getClusterClient(GeneralCommissioning.Cluster);
        this.collectedCommissioningData.supportsConcurrentConnection =
            await generalCommissioningClient.getSupportsConcurrentConnectionAttribute();

        /*
            Apple is additionally requesting:
            * MA-rootdevice(0x0)/GeneralCommissioning(0x30)/breadcrumb(0x0)

            Google is additionally requesting:
            * MA-rootdevice(0x0)/OperationalCredentials(0x3e)/supportedFabrics(0x2)
            * MA-rootdevice(0x0)/OperationalCredentials(0x3e)/commissionedFabrics(0x3)
            * MA-rootdevice(0x0)/OperationalCredentials(0x3e)/fabrics(0x1), isFabricFiltered=false
         */

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 3
     * Upon completion of PASE session establishment, the Commissionee SHALL autonomously arm the Fail-safe timer for a
     * timeout of 60 seconds. This is to guard against the Commissioner aborting the Commissioning process without
     * arming the fail-safe, which may leave the device unable to accept additional connections.
     * A Commissioner MAY obtain device information including guidance on the fail-safe value from the Commissionee by
     * reading BasicCommissioningInfo attribute (see Section 11.9.5.2, “BasicCommissioningInfo Attribute”) prior to
     * invoking the ArmFailSafe command.
     */
    private async armFailsafe() {
        const client = this.getClusterClient(GeneralCommissioning.Cluster);
        if (this.collectedCommissioningData.basicCommissioningInfo === undefined) {
            const basicCommissioningInfo = await client.getBasicCommissioningInfoAttribute();
            this.collectedCommissioningData.basicCommissioningInfo = basicCommissioningInfo;
            this.failSafeTimeMs = basicCommissioningInfo.failSafeExpiryLengthSeconds * 1000;
            this.commissioningStartedTime = Time.nowMs();
            this.commissioningExpiryTime =
                this.commissioningStartedTime + basicCommissioningInfo.maxCumulativeFailsafeSeconds * 1000;
        }
        this.ensureGeneralCommissioningSuccess(
            "armFailSafe",
            await client.armFailSafe({
                breadcrumb: this.lastBreadcrumb,
                expiryLengthSeconds: this.collectedCommissioningData.basicCommissioningInfo.failSafeExpiryLengthSeconds,
            }),
        );
        this.lastFailSafeTime = Time.nowMs();
        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 5 - 1
     * Commissioner SHALL configure regulatory information in the Commissionee if it has at least one instance of
     * Network Commissioning cluster on any endpoint with either the WI (i.e. Wi-Fi) or TH (i.e. Thread) feature flags
     * set in its FeatureMap.
     * The regulatory information is configured using SetRegulatoryConfig (see Section 11.9.6.4,
     * “SetRegulatoryConfig Command”).
     */
    private async configureRegulatoryInformation() {
        if (this.collectedCommissioningData.networkFeatures === undefined) {
            throw new CommissioningError("No network features collected");
        }
        // Read the infos for all Network Commissioning clusters
        const hasRadioNetwork = !!this.collectedCommissioningData.networkFeatures.find(
            ({ value: { wiFiNetworkInterface, threadNetworkInterface } }) =>
                wiFiNetworkInterface || threadNetworkInterface,
        );

        if (hasRadioNetwork) {
            const client = this.getClusterClient(GeneralCommissioning.Cluster);
            let locationCapability = await client.getLocationCapabilityAttribute();
            if (locationCapability === GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor) {
                locationCapability = this.commissioningOptions.regulatoryLocation;
            } else {
                logger.debug(
                    `Device does not support a configurable regulatory location type. Location is set to "${
                        locationCapability === GeneralCommissioning.RegulatoryLocationType.Indoor ? "Indoor" : "Outdoor"
                    }"`,
                );
            }
            let countryCode = this.commissioningOptions.regulatoryCountryCode;
            const regulatoryResult = await client.setRegulatoryConfig({
                breadcrumb: this.lastBreadcrumb++,
                newRegulatoryConfig: locationCapability,
                countryCode,
            });
            if (
                regulatoryResult.errorCode === GeneralCommissioning.CommissioningError.ValueOutsideRange &&
                countryCode !== "XX"
            ) {
                logger.debug(
                    `Device does not support a configurable country code. Use "XX" instead of "${countryCode}"`,
                );
                countryCode = "XX";
                this.ensureGeneralCommissioningSuccess(
                    "setRegulatoryConfig",
                    await client.setRegulatoryConfig({
                        breadcrumb: this.lastBreadcrumb,
                        newRegulatoryConfig: locationCapability,
                        countryCode,
                    }),
                );
            } else {
                this.ensureGeneralCommissioningSuccess("setRegulatoryConfig", regulatoryResult);
            }
            return {
                code: CommissioningStepResultCode.Success,
                breadcrumb: this.lastBreadcrumb,
            };
        }
        return {
            code: CommissioningStepResultCode.Skipped,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 5 - 2
     * Commissioner SHOULD configure UTC time, timezone, and DST offset, if the Commissionee supports the time cluster.
     * The order of configuration of this information is not critical. The UTC time is configured using SetUtcTime
     * command (see Section 11.16.9.1, “SetUtcTime Command”) while timezone and DST offset are set through TimeZone
     * (see Section 11.16.8.6, “TimeZone Attribute”) and DstOffset attribute (see Section 11.16.8.7,
     * “DSTOffset Attribute”), respectively.
     */
    private async synchronizeTime() {
        if (
            this.collectedCommissioningData.rootServerList !== undefined &&
            this.collectedCommissioningData.rootServerList.find(clusterId => clusterId === TimeSyncCluster.id)
        ) {
            logger.debug("TimeSync cluster is supported");
            // TODO: implement
        }
        return {
            code: CommissioningStepResultCode.Skipped,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 6
     * Commissioner SHALL establish the authenticity of the Commissionee as a certified Matter device (see Section
     * 6.2.3, “Device Attestation Procedure”).
     */
    private async deviceAttestation() {
        const operationalCredentialsClusterClient = this.getClusterClient(OperationalCredentials.Cluster);
        const { certificate: deviceAttestation } = await operationalCredentialsClusterClient.certificateChainRequest({
            certificateType: OperationalCredentials.CertificateChainType.DacCertificate,
        });
        // TODO: extract device public key from deviceAttestation
        const { certificate: productAttestation } = await operationalCredentialsClusterClient.certificateChainRequest({
            certificateType: OperationalCredentials.CertificateChainType.PaiCertificate,
        });
        // TODO: validate deviceAttestation and productAttestation
        const { attestationElements, attestationSignature } =
            await operationalCredentialsClusterClient.attestationRequest({
                attestationNonce: Crypto.getRandomData(32),
            });
        // TODO: validate attestationSignature using device public key
        if (
            deviceAttestation.length === 0 ||
            productAttestation.length === 0 ||
            attestationElements.length === 0 ||
            attestationSignature.length === 0
        ) {
            // TODO: validate the data really
            throw new CommissioningError("Device Attestation data missing from device");
        }
        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };

        // TODO consider Distributed Compliance Ledger Info about Commissioning Flow
    }

    /**
     * Step 7-9
     * 7: Following the Device Attestation Procedure yielding a decision to proceed with commissioning, the Commissioner
     * SHALL request operational CSR from Commissionee using the CSRRequest command (see Section 11.17.6.5,
     * “CSRRequest Command”). The CSRRequest command will cause the generation of a new operational key pair at the
     * Commissionee.
     * 8: Commissioner SHALL generate or otherwise obtain an Operational Certificate containing Operational ID after
     * receiving the CSRResponse command from the Commissionee (see Section 11.17.6.5, “CSRRequest Command”), using
     * implementation-specific means.
     * 9: Commissioner SHALL install operational credentials (see Figure 38, “Node Operational Credentials flow”) on
     * the Commissionee using the AddTrustedRootCertificate and AddNOC commands.
     */
    private async certificates() {
        const operationalCredentialsClusterClient = this.getClusterClient(OperationalCredentials.Cluster);
        const { nocsrElements, attestationSignature: csrSignature } =
            await operationalCredentialsClusterClient.csrRequest({ csrNonce: Crypto.getRandomData(32) });
        if (nocsrElements.length === 0 || csrSignature.length === 0) {
            // TODO: validate the data really
            throw new UnexpectedDataError("Invalid response from device");
        }
        // TODO: validate csrSignature using device public key
        const { certSigningRequest } = TlvCertSigningRequest.decode(nocsrElements);
        const operationalPublicKey = CertificateManager.getPublicKeyFromCsr(certSigningRequest);

        await operationalCredentialsClusterClient.addTrustedRootCertificate({
            rootCaCertificate: this.certificateManager.getRootCert(),
        });
        const peerNodeId = this.fabric.rootNodeId;
        const peerOperationalCert = this.certificateManager.generateNoc(operationalPublicKey, FABRIC_ID, peerNodeId);
        await operationalCredentialsClusterClient.addNoc({
            nocValue: peerOperationalCert,
            icacValue: new ByteArray(0),
            ipkValue: this.fabric.identityProtectionKey,
            adminVendorId: VendorId(this.commissioningOptions.adminVendorId ?? DEFAULT_ADMIN_VENDOR_ID),
            caseAdminSubject: peerNodeId,
        });

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 10
     * Commissioner MAY configure the Access Control List (see Access Control Cluster) on the Commissionee in any way
     * it sees fit, if the singular entry added by the AddNOC command in the previous step granting Administer
     * privilege over CASE authentication type for the Node ID provided with the command is not sufficient to express
     * its desired access control policies.
     */
    private async configureAccessControlLists() {
        // Standard entry is sufficient in our case

        return {
            code: CommissioningStepResultCode.Skipped,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 11-12
     * 11: If the Commissionee both supports it and requires it, the Commissioner SHALL configure the operational network
     * at the Commissionee using commands such as AddOrUpdateWiFiNetwork (see Section 11.8.7.3, “AddOrUpdateWiFiNetwork
     * Command”) and AddOrUpdateThreadNetwork (see Section 11.8.7.4, “AddOrUpdateThreadNetwork Command”).
     * A Commissionee requires network commissioning if it is not already on the desired operational network.
     * A Commissionee supports network commissioning if it has any NetworkCommissioning cluster instances.
     * A Commissioner MAY learn about the networks visible to the Commissionee using ScanNetworks command
     * (see Section 11.8.7.1, “ScanNetworks Command”).
     * 12: The Commissioner SHALL trigger the Commissionee to connect to the operational network using ConnectNetwork
     * command (see Section 11.8.7.9, “ConnectNetwork Command”) unless the Commissionee is already on the desired operational network.
     */
    private async validateNetwork() {
        if (
            this.collectedCommissioningData.networkFeatures === undefined ||
            this.collectedCommissioningData.networkStatus === undefined
        ) {
            throw new CommissioningError("Could not get network details from the device ... Stop commissioning!");
        }
        if (
            this.commissioningOptions.wifiNetwork === undefined &&
            this.commissioningOptions.threadNetwork === undefined
        ) {
            const anyEthernetInterface = !!this.collectedCommissioningData.networkFeatures.find(
                ({ value: { ethernetNetworkInterface } }) => ethernetNetworkInterface === true,
            );
            const anyInterfaceConnected = this.collectedCommissioningData.networkStatus.find(
                ({ value }) => !!value.find(({ connected }) => connected === true),
            );
            if (!anyEthernetInterface && !anyInterfaceConnected) {
                throw new CommissioningError(
                    "No network credentials are configured for commissioning and no Ethernet interface is available on the device and no interface already connected.",
                );
            }
        }

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    private async configureNetworkWifi() {
        if (this.commissioningOptions.wifiNetwork === undefined) {
            logger.debug("WiFi network is not configured");
            return {
                code: CommissioningStepResultCode.Skipped,
                breadcrumb: this.lastBreadcrumb,
            };
        }
        if (
            this.collectedCommissioningData.networkFeatures !== undefined &&
            this.collectedCommissioningData.networkStatus !== undefined
        ) {
            const rootNetworkFeatures = this.collectedCommissioningData.networkFeatures.find(
                ({ endpointId }) => endpointId === 0,
            )?.value;
            const rootNetworkStatus = this.collectedCommissioningData.networkStatus.find(
                ({ endpointId }) => endpointId === 0,
            )?.value;

            logger.debug(
                `Root Networks found: ${Logger.toJSON(rootNetworkFeatures)} - ${Logger.toJSON(rootNetworkStatus)}`,
            );

            if (rootNetworkFeatures?.wiFiNetworkInterface !== true) {
                logger.debug("Commissionee does not support any WiFi network interface");
                return {
                    code: CommissioningStepResultCode.Skipped,
                    breadcrumb: this.lastBreadcrumb,
                };
            }
            if (
                rootNetworkStatus !== undefined &&
                rootNetworkStatus.length > 0 &&
                rootNetworkStatus[0].connected !== false
            ) {
                logger.debug("Commissionee is already connected to the WiFi network");
                return {
                    code: CommissioningStepResultCode.Skipped,
                    breadcrumb: this.lastBreadcrumb,
                };
            }
        }

        logger.debug("Configuring WiFi network ...");
        const networkCommissioningClusterClient = this.getClusterClient(
            NetworkCommissioning.Cluster.with("WiFiNetworkInterface"),
            EndpointNumber(0),
            true,
        );
        const ssid = ByteArray.fromString(this.commissioningOptions.wifiNetwork.wifiSsid);
        const credentials = ByteArray.fromString(this.commissioningOptions.wifiNetwork.wifiCredentials);

        const { networkingStatus, wiFiScanResults, debugText } = await networkCommissioningClusterClient.scanNetworks({
            ssid,
            breadcrumb: this.lastBreadcrumb++,
        });
        if (networkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(`Commissionee failed to scan for WiFi networks: ${debugText}`);
        }
        if (wiFiScanResults === undefined || wiFiScanResults.length === 0) {
            throw new CommissioningError(
                `Commissionee did not return any WiFi networks for the requested SSID ${this.commissioningOptions.wifiNetwork.wifiSsid}`,
            );
        }

        const {
            networkingStatus: addNetworkingStatus,
            debugText: addDebugText,
            networkIndex,
        } = await networkCommissioningClusterClient.addOrUpdateWiFiNetwork({
            ssid,
            credentials,
            breadcrumb: this.lastBreadcrumb++,
        });
        if (addNetworkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(`Commissionee failed to add WiFi network: ${addDebugText}`);
        }
        if (networkIndex === undefined) {
            throw new CommissioningError(`Commissionee did not return network index`);
        }
        logger.debug(
            `Commissionee added WiFi network ${this.commissioningOptions.wifiNetwork.wifiSsid} with network index ${networkIndex}`,
        );

        const updatedNetworks = await networkCommissioningClusterClient.getNetworksAttribute();
        if (updatedNetworks[networkIndex] === undefined) {
            throw new CommissioningError(`Commissionee did not return network with index ${networkIndex}`);
        }
        const { networkId, connected } = updatedNetworks[networkIndex];
        if (connected === true) {
            logger.debug(
                `Commissionee is already connected to WiFi network ${
                    this.commissioningOptions.wifiNetwork.wifiSsid
                } (networkId ${networkId.toHex()})`,
            );
            return {
                code: CommissioningStepResultCode.Success,
                breadcrumb: this.lastBreadcrumb,
            };
        }

        const connectResult = await networkCommissioningClusterClient.connectNetwork({
            networkId: networkId,
            breadcrumb: this.lastBreadcrumb++,
        });

        if (connectResult.networkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(`Commissionee failed to connect to WiFi network: ${connectResult.debugText}`);
        }
        logger.debug(
            `Commissionee successfully connected to WiFi network ${
                this.commissioningOptions.wifiNetwork.wifiSsid
            } (networkId ${networkId.toHex()})`,
        );

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    private async configureNetworkThread() {
        if (this.commissioningOptions.threadNetwork === undefined) {
            logger.debug("Thread network is not configured");
            return {
                code: CommissioningStepResultCode.Skipped,
                breadcrumb: this.lastBreadcrumb,
            };
        }
        if (
            this.collectedCommissioningData.networkFeatures !== undefined &&
            this.collectedCommissioningData.networkStatus !== undefined
        ) {
            const rootNetworkFeatures = this.collectedCommissioningData.networkFeatures.find(
                ({ endpointId }) => endpointId === 0,
            )?.value;
            const rootNetworkStatus = this.collectedCommissioningData.networkStatus.find(
                ({ endpointId }) => endpointId === 0,
            )?.value;

            logger.debug(
                `Root Networks found: ${Logger.toJSON(rootNetworkFeatures)} - ${Logger.toJSON(rootNetworkStatus)}`,
            );

            if (rootNetworkFeatures?.threadNetworkInterface !== true) {
                logger.debug("Commissionee does not support any Thread network interface");
                return {
                    code: CommissioningStepResultCode.Skipped,
                    breadcrumb: this.lastBreadcrumb,
                };
            }
            if (
                rootNetworkStatus !== undefined &&
                rootNetworkStatus.length > 0 &&
                rootNetworkStatus[0].connected !== false
            ) {
                logger.debug("Commissionee is already connected to the Thread network");
                return {
                    code: CommissioningStepResultCode.Skipped,
                    breadcrumb: this.lastBreadcrumb,
                };
            }
        }

        logger.debug("Configuring Thread network ...");
        const networkCommissioningClusterClient = this.getClusterClient(
            NetworkCommissioning.Cluster.with("ThreadNetworkInterface"),
            EndpointNumber(0),
            true,
        );

        const { networkingStatus, threadScanResults, debugText } = await networkCommissioningClusterClient.scanNetworks(
            { breadcrumb: this.lastBreadcrumb++ },
        );
        if (networkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(`Commissionee failed to scan for Thread networks: ${debugText}`);
        }
        if (threadScanResults === undefined || threadScanResults.length === 0) {
            throw new CommissioningError(
                `Commissionee did not return any Thread networks for the requested Network ${this.commissioningOptions.threadNetwork.networkName}`,
            );
        }
        const wantedNetworkFound = threadScanResults.find(
            ({ networkName }) => networkName === this.commissioningOptions.threadNetwork?.networkName,
        );
        if (wantedNetworkFound === undefined) {
            throw new CommissioningError(
                `Commissionee did not return the requested Network ${
                    this.commissioningOptions.threadNetwork.networkName
                }: ${Logger.toJSON(threadScanResults)}`,
            );
        }
        logger.debug(
            `Commissionee found wanted Thread network ${
                this.commissioningOptions.threadNetwork.networkName
            }: ${Logger.toJSON(wantedNetworkFound)}`,
        );

        const {
            networkingStatus: addNetworkingStatus,
            debugText: addDebugText,
            networkIndex,
        } = await networkCommissioningClusterClient.addOrUpdateThreadNetwork({
            operationalDataset: ByteArray.fromHex(this.commissioningOptions.threadNetwork.operationalDataset),
            breadcrumb: this.lastBreadcrumb++,
        });
        if (addNetworkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(`Commissionee failed to add Thread network: ${addDebugText}`);
        }
        if (networkIndex === undefined) {
            throw new CommissioningError(`Commissionee did not return network index`);
        }
        logger.debug(
            `Commissionee added Thread network ${this.commissioningOptions.threadNetwork.networkName} with network index ${networkIndex}`,
        );

        const updatedNetworks = await networkCommissioningClusterClient.getNetworksAttribute();
        if (updatedNetworks[networkIndex] === undefined) {
            throw new CommissioningError(`Commissionee did not return network with index ${networkIndex}`);
        }
        const { networkId, connected } = updatedNetworks[networkIndex];
        if (connected === true) {
            logger.debug(
                `Commissionee is already connected to Thread network ${
                    this.commissioningOptions.threadNetwork.networkName
                } (networkId ${networkId.toHex()})`,
            );
            return {
                code: CommissioningStepResultCode.Success,
                breadcrumb: this.lastBreadcrumb,
            };
        }

        const connectResult = await networkCommissioningClusterClient.connectNetwork({
            networkId: networkId,
            breadcrumb: this.lastBreadcrumb++,
        });

        if (connectResult.networkingStatus !== NetworkCommissioning.NetworkCommissioningStatus.Success) {
            throw new CommissioningError(
                `Commissionee failed to connect to Thread network: ${connectResult.debugText}`,
            );
        }
        logger.debug(
            `Commissionee successfully connected to Thread network ${
                this.commissioningOptions.threadNetwork.networkName
            } (networkId ${networkId.toHex()})`,
        );

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 13-14
     * 13: Finalization of the Commissioning process begins. An Administrator configured in the ACL of the Commissionee
     * by the Commissioner SHALL use Operational Discovery to discover the Commissionee. This Administrator MAY be
     * the Commissioner itself, or another Node to which the Commissioner has delegated the task.
     * 14: The Administrator SHALL open a CASE (see Section 4.13.2, “Certificate Authenticated Session Establishment
     * (CASE)”) session with the Commissionee over the operational network.
     *
     */
    private async reconnectWithDevice() {
        logger.debug("Reconnecting with device ...");
        this.interactionClient = await this.reconnectWithDeviceCallback(this.fabric.rootNodeId);
        logger.debug("Successfully reconnected with device ...");

        this.clusterClients.clear();
        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }

    /**
     * Step 15
     * The Administrator having established a CASE session with the Commissionee over the operational network in the
     * previous steps SHALL invoke the CommissioningComplete command (see Section 11.9.6.6,
     * “CommissioningComplete Command”). A success response after invocation of the CommissioningComplete command ends
     * the commissioning process.
     */
    private async completeCommissioning() {
        const generalCommissioningClusterClient = this.getClusterClient(GeneralCommissioning.Cluster);
        this.ensureGeneralCommissioningSuccess(
            "commissioningComplete",
            await generalCommissioningClusterClient.commissioningComplete(),
        );

        return {
            code: CommissioningStepResultCode.Success,
            breadcrumb: this.lastBreadcrumb,
        };
    }
}
