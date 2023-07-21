/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import { Time, TimeFake } from "@project-chip/matter.js/time";

Time.get = () => new TimeFake(0);

import * as assert from "assert";
import { ClusterServer } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import {
    ClusterServerObjForCluster, BasicInformationCluster, GeneralCommissioningCluster,
    GeneralCommissioningClusterHandler, RegulatoryLocationType, CommissioningError
} from "@project-chip/matter.js/cluster";
import { SessionType, Message } from "@project-chip/matter.js/codec";
import { callCommandOnClusterServer, createTestSessionWithFabric } from "./ClusterServerTestingUtil";
import { Endpoint, DeviceTypes } from "@project-chip/matter.js/device";
import { VendorId } from "@project-chip/matter.js/datatype";

/* eslint-disable @typescript-eslint/no-non-null-assertion */

describe("GeneralCommissioning Server test", () => {
    let generalCommissioningServer: ClusterServerObjForCluster<typeof GeneralCommissioningCluster> | undefined;
    let basicInformationServer: ClusterServerObjForCluster<typeof BasicInformationCluster> | undefined;
    let testSession: SecureSession<any> | undefined
    let endpoint: Endpoint | undefined;

    // TODO make that nicer and maybe  move to a "testing support library"
    async function initializeTestEnv(location: string, regulatoryConfig: RegulatoryLocationType, locationCapability: RegulatoryLocationType, allowCountryCodeChange: boolean, countryCodeWhitelist?: string[]) {
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
                supportsConcurrentConnections: true,
            }, GeneralCommissioningClusterHandler({ allowCountryCodeChange, countryCodeWhitelist }));
        basicInformationServer = ClusterServer(BasicInformationCluster, {
            dataModelRevision: 1,
            vendorId: new VendorId(1),
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
                subscriptionsPerFabric: 3
            },
            serialNumber: `0000000000`
        }, {}, {
            startUp: true
        });

        testSession = await createTestSessionWithFabric();

        endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: 1 });
        endpoint.addClusterServer(basicInformationServer);
        endpoint.addClusterServer(generalCommissioningServer);
    }

    describe("setRegulatoryConfig: Allow changing commissionable info and country", () => {
        beforeAll(async () => {
            await initializeTestEnv("US", RegulatoryLocationType.IndoorOutdoor, RegulatoryLocationType.IndoorOutdoor, true);
        });

        it("setRegulatoryConfig success", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "DE" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: CommissioningError.Ok }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });

        it("setRegulatoryConfig success #2", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(3), newRegulatoryConfig: RegulatoryLocationType.Outdoor, countryCode: "CA" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: CommissioningError.Ok }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Outdoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(3));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "CA");
        });

        it("setRegulatoryConfig success #3 without changing country", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(4), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "XX" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: CommissioningError.Ok }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(4));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "CA");
        });
    });

    describe("setRegulatoryConfig: Allow changing regulatory location info but not country", () => {
        beforeAll(async () => {
            await initializeTestEnv("DE", RegulatoryLocationType.IndoorOutdoor, RegulatoryLocationType.IndoorOutdoor, false);
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "US" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "Country code change not allowed: US", errorCode: CommissioningError.ValueOutsideRange }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.IndoorOutdoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });

        it("setRegulatoryConfig success without changing country", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Outdoor, countryCode: "DE" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: 0 }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Outdoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });
    });

    describe("setRegulatoryConfig: Allow changing nothing", () => {
        beforeAll(async () => {
            await initializeTestEnv("XX", RegulatoryLocationType.Indoor, RegulatoryLocationType.Indoor, false);
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Outdoor, countryCode: "DE" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "Country code change not allowed: DE", errorCode: CommissioningError.ValueOutsideRange }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig regulatory location error", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Outdoor, countryCode: "XX" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "Invalid regulatory location: Outdoor", errorCode: CommissioningError.ValueOutsideRange }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig success without changing anything", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "XX" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: CommissioningError.Ok }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });
    });

    describe("setRegulatoryConfig: Allow changing country on whitelist", () => {
        beforeAll(async () => {
            await initializeTestEnv("XX", RegulatoryLocationType.Indoor, RegulatoryLocationType.Indoor, true, ["DE", "CA"]);
        });

        it("setRegulatoryConfig country error", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "US" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "Country code change not allowed: US", errorCode: CommissioningError.ValueOutsideRange }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(0));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "XX");
        });

        it("setRegulatoryConfig success", async () => {
            const result = await callCommandOnClusterServer(generalCommissioningServer!, "setRegulatoryConfig", { breadcrumb: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.Indoor, countryCode: "DE" }, endpoint!, testSession, { packetHeader: { sessionType: SessionType.Unicast } } as Message);

            assert.deepEqual(result, { code: 0, response: { debugText: "", errorCode: CommissioningError.Ok }, responseId: 3 });
            assert.deepEqual(generalCommissioningServer!.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);
            assert.deepEqual(generalCommissioningServer!.getBreadcrumbAttribute(), BigInt(2));
            assert.deepEqual(basicInformationServer!.getLocationAttribute(), "DE");
        });
    });
});
