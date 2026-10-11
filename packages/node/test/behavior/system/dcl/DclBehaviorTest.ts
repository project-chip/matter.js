/**
 * @license
 * Copyright 2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DclBehavior } from "#behavior/system/dcl/DclBehavior.js";
import { Diagnostic, Environment, LogDestination, Logger, LogLevel, MockFetch } from "@matter/general";
import { MockServerNode } from "@matter/node/testing";
import { DclVendorInfoService } from "@matter/protocol";
import { MockEndpoint } from "../../../endpoint/mock-endpoint.js";

describe("DclBehavior", () => {
    describe("State defaults", () => {
        it("has correct default production URL", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                expect(agent.dcl.state.productionUrl).to.equal("https://on.dcl.csa-iot.org");
            });
        });

        it("has correct default test URL", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                expect(agent.dcl.state.testUrl).to.equal("https://on.test-net.dcl.csa-iot.org");
            });
        });

        it("fetchTestCertificates defaults to false", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                expect(agent.dcl.state.fetchTestCertificates).to.be.false;
            });
        });

        it("fetchGithubCertificates defaults to true", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                expect(agent.dcl.state.fetchGithubCertificates).to.be.true;
            });
        });
    });

    describe("config getters", () => {
        it("productionConfig returns DclConfig with production URL", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                const config = agent.dcl.productionConfig;
                expect(config.url).to.equal("https://on.dcl.csa-iot.org");
            });
        });

        it("testConfig returns DclConfig with test URL", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                const config = agent.dcl.testConfig;
                expect(config.url).to.equal("https://on.test-net.dcl.csa-iot.org");
            });
        });

        it("configForProduction(true) returns production config", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                const config = agent.dcl.configForProduction(true);
                expect(config.url).to.equal("https://on.dcl.csa-iot.org");
            });
        });

        it("configForProduction(false) returns test config", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                const config = agent.dcl.configForProduction(false);
                expect(config.url).to.equal("https://on.test-net.dcl.csa-iot.org");
            });
        });
    });

    describe("custom state via set()", () => {
        it("overrides productionUrl", async () => {
            const CustomDcl = DclBehavior.set({ productionUrl: "https://custom.dcl" });
            await using endpoint = await MockEndpoint.createWith(CustomDcl);
            await endpoint.act(agent => {
                expect(agent.dcl.state.productionUrl).to.equal("https://custom.dcl");
                expect(agent.dcl.productionConfig.url).to.equal("https://custom.dcl");
            });
        });

        it("overrides testUrl", async () => {
            const CustomDcl = DclBehavior.set({ testUrl: "https://custom-test.dcl" });
            await using endpoint = await MockEndpoint.createWith(CustomDcl);
            await endpoint.act(agent => {
                expect(agent.dcl.state.testUrl).to.equal("https://custom-test.dcl");
                expect(agent.dcl.testConfig.url).to.equal("https://custom-test.dcl");
            });
        });

        it("overrides fetchTestCertificates", async () => {
            const CustomDcl = DclBehavior.set({ fetchTestCertificates: true });
            await using endpoint = await MockEndpoint.createWith(CustomDcl);
            await endpoint.act(agent => {
                expect(agent.dcl.state.fetchTestCertificates).to.be.true;
            });
        });

        it("overrides fetchGithubCertificates", async () => {
            const CustomDcl = DclBehavior.set({ fetchGithubCertificates: false });
            await using endpoint = await MockEndpoint.createWith(CustomDcl);
            await endpoint.act(agent => {
                expect(agent.dcl.state.fetchGithubCertificates).to.be.false;
            });
        });
    });

    describe("vendorInfoService getter", () => {
        it("passes custom productionUrl to vendorInfoService config", async () => {
            const customUrl = "https://custom.dcl.example.com";
            const CustomDcl = DclBehavior.set({ productionUrl: customUrl });
            await using endpoint = await MockEndpoint.createWith(CustomDcl);
            await endpoint.act(agent => {
                expect(agent.dcl.productionConfig.url).to.equal(customUrl);
            });
        });
    });

    describe("offline", () => {
        it("defaults to false", async () => {
            await using endpoint = await MockEndpoint.createWith(DclBehavior);
            await endpoint.act(agent => {
                expect(agent.dcl.state.offline).to.be.false;
            });
        });

        it("keeps every DCL service off the network", async () => {
            const fetchMock = new MockFetch();
            fetchMock.install();
            try {
                await using endpoint = await MockEndpoint.createWith(DclBehavior.set({ offline: true }));
                await endpoint.act(async agent => {
                    const { certificateService, vendorInfoService, otaUpdateService } = agent.dcl;
                    expect([
                        certificateService.offline,
                        vendorInfoService.offline,
                        otaUpdateService.offline,
                    ]).deep.equal([true, true, true]);
                    await certificateService.construction;
                    await vendorInfoService.construction;
                    await otaUpdateService.construction;

                    expect(
                        await certificateService.getOrFetchCertificate("785CE705B86B8F4E6FC793AA60CB43EA696882D5"),
                    ).equal(undefined);
                    expect(await vendorInfoService.productInfoFor(0xfff1, 0x8000)).equal(undefined);
                    expect(
                        await otaUpdateService.checkForUpdate({
                            vendorId: 0xfff1,
                            productId: 0x8000,
                            currentSoftwareVersion: 1,
                        }),
                    ).equal(undefined);
                });
                expect(fetchMock.getCallLog()).deep.equal([]);
            } finally {
                fetchMock.uninstall();
            }
        });

        it("is read from the environment", async () => {
            const environment = new Environment("test");
            environment.vars.addUnixEnvStyle({ MATTER_DCL_OFFLINE: "true" });
            await using node = await MockServerNode.create(MockServerNode.RootEndpoint.with(DclBehavior), {
                environment,
            });
            expect(node.stateOf(DclBehavior).offline).equal(true);
        });

        it("reads boolean environment variables as booleans", async () => {
            const environment = new Environment("test");
            environment.vars.addUnixEnvStyle({
                MATTER_DCL_OFFLINE: "false",
                MATTER_DCL_FETCHTESTCERTIFICATES: "false",
                MATTER_DCL_ACCEPTTESTCERTIFICATES: "false",
                MATTER_DCL_FETCHGITHUBCERTIFICATES: "false",
            });
            await using node = await MockServerNode.create(MockServerNode.RootEndpoint.with(DclBehavior), {
                environment,
            });
            const { offline, fetchTestCertificates, acceptTestCertificates, fetchGithubCertificates } =
                node.stateOf(DclBehavior);
            expect({ offline, fetchTestCertificates, acceptTestCertificates, fetchGithubCertificates }).deep.equal({
                offline: false,
                fetchTestCertificates: false,
                acceptTestCertificates: false,
                fetchGithubCertificates: false,
            });
        });

        it("is read from config", async () => {
            const environment = new Environment("test");
            environment.vars.addConfigStyle({ dcl: { offline: true } });
            await using node = await MockServerNode.create(MockServerNode.RootEndpoint.with(DclBehavior), {
                environment,
            });
            expect(node.stateOf(DclBehavior).offline).equal(true);
        });

        /**
         * Pre-create a vendor service with `serviceOffline`, then have a node with `nodeOffline` adopt it; returns the
         * warnings `DclBehavior` logged.
         */
        async function warningsForExistingService(serviceOffline: boolean, nodeOffline: boolean) {
            const fetchMock = new MockFetch();
            fetchMock.addResponse("/dcl/vendorinfo/vendors", { vendorInfo: [], pagination: {} });
            fetchMock.install();
            const warnings = new Array<string>();
            Logger.destinations.capture = LogDestination({
                add(message: Diagnostic.Message) {
                    if (message.facility === "DclBehavior" && message.level === LogLevel.WARN) {
                        warnings.push(String(message.values[0]));
                    }
                },
            });
            try {
                const environment = new Environment("test");
                await using node = await MockServerNode.create(
                    MockServerNode.RootEndpoint.with(DclBehavior.set({ offline: nodeOffline })),
                    { environment },
                );
                const existing = new DclVendorInfoService(node.env, { updateInterval: null, offline: serviceOffline });
                await node.act(agent => {
                    expect(agent.get(DclBehavior).vendorInfoService).equal(existing);
                });
                return warnings;
            } finally {
                delete Logger.destinations.capture;
                fetchMock.uninstall();
            }
        }

        it("warns when an offline node gets an existing online service", async () => {
            expect(await warningsForExistingService(false, true)).deep.equal([
                "DclVendorInfoService already exists and is online, so dcl.offline of this node has no effect on it",
            ]);
        });

        it("does not warn when an existing service matches", async () => {
            expect(await warningsForExistingService(true, true)).deep.equal([]);
        });

        it("does not warn when an online node gets an existing offline service", async () => {
            expect(await warningsForExistingService(true, false)).deep.equal([]);
        });
    });
});
