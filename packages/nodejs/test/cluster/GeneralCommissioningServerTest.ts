/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, SecureSession, SessionType } from "#protocol";
import { EndpointNumber, VendorId } from "#types";
import {
    BasicInformationCluster,
    ClusterServer,
    ClusterServerObj,
    GeneralCommissioning,
    GeneralCommissioningCluster,
    GeneralCommissioningClusterHandler,
} from "@project-chip/matter.js/cluster";
import { DeviceTypes, Endpoint } from "@project-chip/matter.js/device";
import * as assert from "node:assert";
import { callCommandOnClusterServer, createTestSessionWithFabric } from "./ClusterServerTestingUtil.js";

describe("GeneralCommissioning Server test", () => {
    let generalCommissioningServer: ClusterServerObj<GeneralCommissioningCluster> | undefined;
    let basicInformationServer: ClusterServerObj<BasicInformationCluster> | undefined;
    let testSession: SecureSession | undefined;
    let endpoint: Endpoint | undefined;

    // TODO make that nicer and maybe  move to a "testing support library"
    async function initializeTestEnv(
        location: string,
        regulatoryConfig: GeneralCommissioning.RegulatoryLocationType,
        locationCapability: GeneralCommissioning.RegulatoryLocationType,
        allowCountryCodeChange: boolean,
        countryCodeWhitelist?: string[],
    ) {
        generalCommissioningServer = ClusterServer(
            GeneralCommissioningCluster,
            {
                breadcrumb: BigInt(0),
                basicCommissioningInfo: {
                    failSafeExpiryLengthSeconds: 100,
                    maxCumulativeFailsafeSeconds: 200,
                },
                regulatoryConfig,
                locationCapability,
                supportsConcurrentConnection: true,
            },
            GeneralCommissioningClusterHandler({ allowCountryCodeChange, countryCodeWhitelist }),
        );
        basicInformationServer = ClusterServer(
            BasicInformationCluster,
            {
                dataModelRevision: 1,
                vendorId: VendorId(1),
                vendorName: "test",
                productId: 1,
                productName: "test",
                nodeLabel: "",
                hardwareVersion: 0,
                hardwareVersionString: "0",
                location,
                localConfigDisabled: false,
                softwareVersion: 1,
                softwareVersionString: "v1",
                capabilityMinima: {
                    caseSessionsPerFabric: 3,
                    subscriptionsPerFabric: 3,
                },
                serialNumber: `0000000000`,
                specificationVersion: 0x01030000,
                maxPathsPerInvoke: 100,
            },
            {},
            {
                startUp: true,
            },
        );

        testSession = await createTestSessionWithFabric();

        endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
        endpoint.addClusterServer(basicInformationServer);
        endpoint.addClusterServer(generalCommissioningServer);
    }

    describe("setRegulatoryConfig: Allow changing commissionable info and country", () => {
        before(async () => {
            await initializeTestEnv(
                "US",
                GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                true,
            );
        });

        it("setRegulatoryConfig success", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "DE",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: { debugText: "", errorCode: GeneralCommissioning.CommissioningError.Ok },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });

        it("setRegulatoryConfig success #2", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(3),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Outdoor,
                    countryCode: "CA",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: { debugText: "", errorCode: GeneralCommissioning.CommissioningError.Ok },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Outdoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(3));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "CA");
        });

        it("setRegulatoryConfig success #3 without changing country", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(4),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "XX",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: { debugText: "", errorCode: GeneralCommissioning.CommissioningError.Ok },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(4));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "CA");
        });
    });

    describe("setRegulatoryConfig: Allow changing regulatory location info but not country", () => {
        before(async () => {
            await initializeTestEnv(
                "DE",
                GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                false,
            );
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "US",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: {
                    debugText: "Country code change not allowed: US",
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });

        it("setRegulatoryConfig success without changing country", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Outdoor,
                    countryCode: "DE",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: 0 }, responseId: 3 });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Outdoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });
    });

    describe("setRegulatoryConfig: Allow changing nothing", () => {
        before(async () => {
            await initializeTestEnv(
                "XX",
                GeneralCommissioning.RegulatoryLocationType.Indoor,
                GeneralCommissioning.RegulatoryLocationType.Indoor,
                false,
            );
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Outdoor,
                    countryCode: "DE",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: {
                    debugText: "Country code change not allowed: DE",
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig regulatory location error", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Outdoor,
                    countryCode: "XX",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: {
                    debugText: "Invalid regulatory location: Outdoor",
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig success without changing anything", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "XX",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: { debugText: "", errorCode: GeneralCommissioning.CommissioningError.Ok },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });
    });

    describe("setRegulatoryConfig: Allow changing country on whitelist", () => {
        before(async () => {
            await initializeTestEnv(
                "XX",
                GeneralCommissioning.RegulatoryLocationType.Indoor,
                GeneralCommissioning.RegulatoryLocationType.Indoor,
                true,
                ["DE", "CA"],
            );
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "US",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: {
                    debugText: "Country code change not allowed: US",
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig success", async () => {
            const result = await callCommandOnClusterServer(
                generalCommissioningServer!,
                "setRegulatoryConfig",
                {
                    breadcrumb: BigInt(2),
                    newRegulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    countryCode: "DE",
                },
                endpoint!,
                testSession,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, {
                code: 0,
                response: { debugText: "", errorCode: GeneralCommissioning.CommissioningError.Ok },
                responseId: 3,
            });
            assert.deepEqual(
                generalCommissioningServer!.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });
    });
});
