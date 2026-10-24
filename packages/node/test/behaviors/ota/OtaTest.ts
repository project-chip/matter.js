/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkClient } from "#behavior/system/network/NetworkClient.js";
import { OtaUpdateStatus, SoftwareUpdateManager } from "#behavior/system/software-update/SoftwareUpdateManager.js";
import { SubscriptionsServer } from "#behavior/system/subscriptions/SubscriptionsServer.js";
import { BasicInformationClient, BasicInformationServer } from "#behaviors/basic-information";
import {
    OtaSoftwareUpdateConsentState,
    OtaSoftwareUpdateProviderServer,
} from "#behaviors/ota-software-update-provider";
import {
    OtaSoftwareUpdateRequestorClient,
    OtaSoftwareUpdateRequestorServer,
} from "#behaviors/ota-software-update-requestor";
import type { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { OtaProviderEndpoint } from "#endpoints/ota-provider";
import { ServerNode } from "#node/ServerNode.js";
import {
    Bytes,
    createPromise,
    Duration,
    Hours,
    ImplementationError,
    InternalError,
    MaybePromise,
    Millis,
    Minutes,
    MockFetch,
    Observable,
    Seconds,
    StandardCrypto,
    Time,
    Timestamp,
} from "@matter/general";
import { MockSite, subscribedPeer } from "@matter/node/testing";
import {
    BdxProtocol,
    BdxSession,
    ClientSubscriptions,
    FabricAuthority,
    OtaStorageMode,
    OtaUpdateSource,
    PeerAddress,
    PersistedFileDesignator,
    RebootResubscribeArmer,
    SecureSession,
    SessionManager,
    SustainedSubscription,
} from "@matter/protocol";
import { FabricIndex, NodeId, VendorId } from "@matter/types";
import { OtaSoftwareUpdateProvider } from "@matter/types/clusters/ota-software-update-provider";
import { OtaSoftwareUpdateRequestor } from "@matter/types/clusters/ota-software-update-requestor";
import {
    addTestOtaImage,
    createTestOtaImage,
    generateTestPayload,
    initOtaSite,
    InstrumentedOtaProviderServer,
    InstrumentedOtaRequestorServer,
    restartDeviceFromStorage,
    storeOtaImage,
    streamFromBytes,
    TestOtaImageResult,
} from "./ota-utils.js";

type UpdatePhase = SoftwareUpdateManager.Internal["updateQueue"][number]["phase"];

describe("Ota", () => {
    let fetchMock: MockFetch;

    before(() => {
        MockTime.init();
    });

    beforeEach(() => {
        // Mock DCL network requests to return 404 so tests don't hit real DCL servers
        // This ensures the test uses locally stored OTA images only
        fetchMock = new MockFetch();

        // Mock both production and test DCL software version endpoints with 404 responses
        // Production DCL: on.dcl.csa-iot.org
        fetchMock.addResponse(
            /on\.dcl\.csa-iot\.org\/dcl\/model\/versions\//,
            { code: 404, message: "Not found", details: [] },
            { status: 404 },
        );
        // Test DCL: on.test-net.dcl.csa-iot.org
        fetchMock.addResponse(
            /on\.test-net\.dcl\.csa-iot\.org\/dcl\/model\/versions\//,
            { code: 404, message: "Not found", details: [] },
            { status: 404 },
        );

        fetchMock.install();
    });

    afterEach(() => {
        fetchMock.uninstall();
    });

    it("Successfully processes a software update", async () => {
        // *** COMMISSIONING ***

        // Shared variable to hold expected OTA image for verification
        const data = { expectedOtaImage: Bytes.fromHex("") };

        const { applyUpdatePromise, announceOtaProviderPromise, TestOtaRequestorServer } =
            InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        const {
            queryImagePromise,
            applyUpdateRequestPromise,
            checkUpdateAvailablePromise,
            notifyUpdateAppliedPromise,
            TestOtaProviderServer,
        } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false, // not relevant
        });

        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const fabric = await otaProvider.act(agent => agent.env.get(FabricAuthority).fabrics[0]);

        expect(device.state.commissioning.commissioned).equals(true);
        expect(controller.peers.size).equals(1);

        // Wait until defaults got announced
        await MockTime.resolve(otaRequestor.eventsOf(OtaSoftwareUpdateRequestorServer).defaultOtaProviders$Changed);

        // Verify that the Provider was correctly identified and written to the device
        expect(otaRequestor.stateOf(OtaSoftwareUpdateRequestorServer).defaultOtaProviders).deep.equals([
            {
                endpoint: otaProvider.number,
                fabricIndex: fabric.fabricIndex,
                providerNodeId: fabric.rootNodeId,
            },
        ]);

        // *** GENERATE AND STORE OTA IMAGE ***

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);

        // Store expected OTA image for verification in applyUpdate
        data.expectedOtaImage = Bytes.of(otaImage.image);

        // *** TRIGGER OTA UPDATE ***

        // Get the client view of the device (peer)
        const peer1 = controller.peers.get("peer1")!;
        expect(peer1).not.undefined;

        // Get the peer address for force update
        const peerAddress = peer1.state.commissioning.peerAddress;
        expect(peerAddress).not.undefined;

        const updateStateEvents = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
        peer1.endpoints
            .for(otaRequestor.number)
            .eventsOf(OtaSoftwareUpdateRequestorClient)
            .stateTransition.on((event: OtaSoftwareUpdateRequestor.StateTransitionEvent) => {
                updateStateEvents.push(event);
            });

        // Force the OTA update via SoftwareUpdateManager
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress!, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        await MockTime.resolve(announceOtaProviderPromise);

        await MockTime.resolve(queryImagePromise);

        await MockTime.resolve(checkUpdateAvailablePromise);

        await MockTime.resolve(applyUpdateRequestPromise);

        // This should resolve when update is applied and data match
        await MockTime.resolve(applyUpdatePromise);

        // Shutdown node because our test node does not restart automatically and simulate update applied.  The harness
        // reports Applying→Idle before this restart, so a subscription the device re-establishes would report it twice
        await device.setStateOf(SubscriptionsServer, { persistenceEnabled: false });
        await MockTime.resolve(device.stop());
        await device.setStateOf(BasicInformationServer, { softwareVersion: 1 });

        await MockTime.resolve(device.start());

        await MockTime.resolve(notifyUpdateAppliedPromise);

        expect(updateStateEvents).deep.equals([
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Idle,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Querying,
                reason: OtaSoftwareUpdateRequestor.ChangeReason.Success,
                targetSoftwareVersion: null,
            },
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Querying,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Downloading,
                reason: OtaSoftwareUpdateRequestor.ChangeReason.Success,
                targetSoftwareVersion: 1,
            },
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Downloading,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Applying,
                reason: OtaSoftwareUpdateRequestor.ChangeReason.Success,
                targetSoftwareVersion: 1,
            },
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Applying,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Idle,
                reason: 1,
                targetSoftwareVersion: null,
            },
        ]);

        await site[Symbol.asyncDispose]();
    }).timeout(10_000); // locally needs 1s, but CI might be slower

    /**
     * Drives one update to the apply and returns what the restart tests need.  The requestor's in-memory state is
     * discarded by the restart that follows, so what it does next rests on storage alone.
     */
    async function applyUpdateThenRestart(restartVersion: (target: number, previous: number) => number) {
        // An application's applyUpdate typically restarts the node before returning, so storage is read from inside it
        let persisted = new Array<string>();
        const data = {
            expectedOtaImage: Bytes.fromHex(""),
            duringApply: () => {
                persisted = Object.keys(
                    site.storageFor(device)["root.parts.ota-requestor.otaSoftwareUpdateRequestor"] ?? {},
                );
            },
        };
        const { applyUpdatePromise, TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            data,
        );
        const provider = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider, otaRequestor, deviceEnvironment } = await initOtaSite(
            provider.TestOtaProviderServer,
            TestOtaRequestorServer,
        );

        // The requestor finishes the apply before the test restarts it, as a node that restarts afterwards would
        const { resolver: appliedResolver, promise: appliedPromise } = createPromise<void>();
        otaRequestor.eventsOf(TestOtaRequestorServer).stateTransition.on(({ previousState, newState }) => {
            if (
                previousState === OtaSoftwareUpdateRequestor.UpdateState.Applying &&
                newState === OtaSoftwareUpdateRequestor.UpdateState.Idle
            ) {
                appliedResolver();
            }
        });

        // The tests take ownership of the site and the restarted node only once this returns
        let restarted: ServerNode | undefined;
        try {
            const previousVersion = device.state.basicInformation.softwareVersion;
            const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
            data.expectedOtaImage = Bytes.of(otaImage.image);

            const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;
            const outcomes = new Array<"done" | "failed">();
            await otaProvider.act(agent => {
                const { events } = agent.get(SoftwareUpdateManager);
                events.updateDone.on(() => void outcomes.push("done"));
                events.updateFailed.on(() => void outcomes.push("failed"));
            });
            await otaProvider.act(agent =>
                agent
                    .get(SoftwareUpdateManager)
                    .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
            );
            await MockTime.resolve(applyUpdatePromise);
            await MockTime.resolve(appliedPromise);

            restarted = await restartDeviceFromStorage(
                device,
                deviceEnvironment,
                TestOtaRequestorServer,
                restartVersion(targetSoftwareVersion, previousVersion),
            );

            const requestor = restarted.parts.require("ota-requestor");
            const transitions = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
            requestor.eventsOf(TestOtaRequestorServer).stateTransition.on(event => void transitions.push(event));
            const versionsApplied = new Array<OtaSoftwareUpdateRequestor.VersionAppliedEvent>();
            requestor.eventsOf(TestOtaRequestorServer).versionApplied.on(event => void versionsApplied.push(event));

            return {
                site,
                provider,
                restarted,
                requestor,
                TestOtaRequestorServer,
                targetSoftwareVersion,
                transitions,
                versionsApplied,
                persisted,
                outcomes,
            };
        } catch (error) {
            if (restarted !== undefined) {
                await MockTime.resolve(restarted.close());
            }
            await site.close();
            throw error;
        }
    }

    it("reports the update applied once restarted from storage into the new version", async () => {
        const {
            site,
            provider,
            restarted,
            requestor,
            TestOtaRequestorServer,
            targetSoftwareVersion,
            transitions,
            versionsApplied,
            persisted,
            outcomes,
        } = await applyUpdateThenRestart(target => target);
        await using _localSite = site;

        try {
            // What the restart relies on has to have reached storage, not only the old node's memory
            expect(persisted).contains("updateInProgressDetails");

            await MockTime.resolve(restarted.start());
            await MockTime.resolve(provider.notifyUpdateAppliedPromise);

            const issued = provider.queryImageResponses.find(response => response.updateToken !== undefined);
            expect(issued).not.undefined;
            expect(provider.notifyUpdateAppliedRequests).length(1);
            const [notification] = provider.notifyUpdateAppliedRequests;
            expect(notification.softwareVersion).equals(targetSoftwareVersion);
            expect(Bytes.areEqual(notification.updateToken, issued!.updateToken!)).equals(true);

            expect(
                transitions.map(({ previousState, newState, reason }) => [previousState, newState, reason]),
            ).deep.equals([
                [
                    OtaSoftwareUpdateRequestor.UpdateState.Applying,
                    OtaSoftwareUpdateRequestor.UpdateState.Idle,
                    OtaSoftwareUpdateRequestor.ChangeReason.Success,
                ],
            ]);
            expect(versionsApplied.map(({ softwareVersion }) => softwareVersion)).deep.equals([targetSoftwareVersion]);
            expect(requestor.stateOf(TestOtaRequestorServer).updateInProgressDetails).equals(null);

            // Past the restart deadline the controller has resubscribed to the new version; it stays a success
            await MockTime.advance(Minutes(5));
            await MockTime.macrotasks;
            expect(outcomes).deep.equals(["done"]);
        } finally {
            await MockTime.resolve(restarted.close());
        }
    }).timeout(10_000);

    it("reports a failed update once restarted from storage into the previous version", async () => {
        const { site, provider, restarted, requestor, TestOtaRequestorServer, transitions, versionsApplied } =
            await applyUpdateThenRestart((_target, previous) => previous);
        await using _localSite = site;

        try {
            await MockTime.resolve(restarted.start());
            await MockTime.macrotasks;

            expect(provider.notifyUpdateAppliedRequests).length(0);
            expect(versionsApplied).length(0);
            expect(
                transitions.map(({ previousState, newState, reason }) => [previousState, newState, reason]),
            ).deep.equals([
                [
                    OtaSoftwareUpdateRequestor.UpdateState.Applying,
                    OtaSoftwareUpdateRequestor.UpdateState.Idle,
                    OtaSoftwareUpdateRequestor.ChangeReason.Failure,
                ],
            ]);
            expect(requestor.stateOf(TestOtaRequestorServer).updateInProgressDetails).equals(null);
        } finally {
            await MockTime.resolve(restarted.close());
        }
    }).timeout(10_000);

    it("returns to idle, forgets the update and asks the provider again on the next announcement when applying it fails", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { applyUpdatePromise, TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            data,
        );

        let storedDuringApply: unknown;
        class FailingOtaRequestorServer extends TestOtaRequestorServer {
            override async applyUpdate(newSoftwareVersion: number, fileDesignator: PersistedFileDesignator) {
                await super.applyUpdate(newSoftwareVersion, fileDesignator);
                storedDuringApply =
                    site.storageFor(device)["root.parts.ota-requestor.otaSoftwareUpdateRequestor"]
                        ?.updateInProgressDetails;
                await fileDesignator.delete();
                throw new ImplementationError("Simulated apply failure");
            }
        }

        const provider = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            provider.TestOtaProviderServer,
            FailingOtaRequestorServer,
        );
        await using _localSite = site;

        const transitions = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
        const { resolver: idleResolver, promise: idlePromise } = createPromise<void>();
        const { resolver: nextResolver, promise: nextPromise } = createPromise<void>();
        otaRequestor.eventsOf(FailingOtaRequestorServer).stateTransition.on(event => {
            transitions.push(event);
            if (event.newState === OtaSoftwareUpdateRequestor.UpdateState.Idle) {
                idleResolver();
            } else if (transitions.at(-2)?.reason === OtaSoftwareUpdateRequestor.ChangeReason.Failure) {
                nextResolver();
            }
        });

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await MockTime.resolve(applyUpdatePromise);
        await MockTime.resolve(idlePromise);

        expect(
            transitions.slice(-1).map(({ previousState, newState, reason }) => [previousState, newState, reason]),
        ).deep.equals([
            [
                OtaSoftwareUpdateRequestor.UpdateState.Applying,
                OtaSoftwareUpdateRequestor.UpdateState.Idle,
                OtaSoftwareUpdateRequestor.ChangeReason.Failure,
            ],
        ]);
        expect(otaRequestor.stateOf(FailingOtaRequestorServer).updateInProgressDetails).equals(null);
        expect(storedDuringApply).not.equals(undefined);
        expect(storedDuringApply).not.equals(null);
        const stored = site.storageFor(device)["root.parts.ota-requestor.otaSoftwareUpdateRequestor"];
        expect(stored?.updateInProgressDetails ?? null).equals(null);

        // With the file gone the next attempt asks the provider rather than applying from disk
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await MockTime.resolve(nextPromise);
        expect(transitions.at(-1)?.newState).equals(OtaSoftwareUpdateRequestor.UpdateState.Querying);
    }).timeout(10_000);

    it("does not query while an update is being applied", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { applyUpdatePromise, TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            data,
        );
        const { resolver: releaseApply, promise: applyReleased } = createPromise<void>();

        // Consumes the file and then takes its time, as flashing an image does
        class SlowOtaRequestorServer extends TestOtaRequestorServer {
            override async applyUpdate(newSoftwareVersion: number, fileDesignator: PersistedFileDesignator) {
                await super.applyUpdate(newSoftwareVersion, fileDesignator);
                await fileDesignator.delete();
                await applyReleased;
            }
        }

        const provider = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            provider.TestOtaProviderServer,
            SlowOtaRequestorServer,
        );
        await using _localSite = site;

        const transitions = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
        const { resolver: idleResolver, promise: idlePromise } = createPromise<void>();
        otaRequestor.eventsOf(SlowOtaRequestorServer).stateTransition.on(event => {
            transitions.push(event);
            if (event.newState === OtaSoftwareUpdateRequestor.UpdateState.Idle) {
                idleResolver();
            }
        });

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await MockTime.resolve(applyUpdatePromise);

        // An announcement schedules a query with an explicit delay, whatever the requestor is doing
        const [{ location }] = otaRequestor.stateOf(SlowOtaRequestorServer).activeOtaProviders;
        const requestorEndpoint = [...controller.peers.get("peer1")!.endpoints].find(endpoint =>
            endpoint.behaviors.has(OtaSoftwareUpdateRequestorClient),
        );
        await MockTime.resolve(
            requestorEndpoint!.commandsOf(OtaSoftwareUpdateRequestorClient).announceOtaProvider({
                providerNodeId: location.providerNodeId,
                vendorId: VendorId(vendorId),
                announcementReason: OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                endpoint: location.endpoint,
            }),
        );
        await MockTime.advance(Seconds(700));
        await MockTime.macrotasks;

        expect(otaRequestor.stateOf(SlowOtaRequestorServer).updateState).equals(
            OtaSoftwareUpdateRequestor.UpdateState.Applying,
        );
        expect(
            transitions.filter(
                ({ previousState }) => previousState === OtaSoftwareUpdateRequestor.UpdateState.Applying,
            ),
        ).length(0);

        releaseApply();
        await MockTime.resolve(idlePromise);
    }).timeout(10_000);

    it("handles an announcement only after a running query, so no second query overlaps it", async () => {
        const { promise: queried, resolver: queryArrived } = createPromise<void>();
        const { promise: answer, resolver: releaseAnswer } = createPromise<void>();
        let queries = 0;

        class SlowOtaProviderServer extends OtaSoftwareUpdateProviderServer {
            override async queryImage(): Promise<OtaSoftwareUpdateProvider.QueryImageResponse> {
                queries++;
                queryArrived();
                await answer;
                return { status: OtaSoftwareUpdateProvider.Status.NotAvailable };
            }
        }

        const { site, controller, otaRequestor } = await initOtaSite(
            SlowOtaProviderServer,
            OtaSoftwareUpdateRequestorServer,
        );
        await using _localSite = site;
        await MockTime.resolve(queried);

        const [{ location }] = otaRequestor.stateOf(OtaSoftwareUpdateRequestorServer).activeOtaProviders;
        const requestorEndpoint = [...controller.peers.get("peer1")!.endpoints].find(endpoint =>
            endpoint.behaviors.has(OtaSoftwareUpdateRequestorClient),
        );
        let announced = false;
        const announcement = requestorEndpoint!
            .commandsOf(OtaSoftwareUpdateRequestorClient)
            .announceOtaProvider({
                providerNodeId: location.providerNodeId,
                vendorId: VendorId(0xfff1),
                announcementReason: OtaSoftwareUpdateRequestor.AnnouncementReason.UrgentUpdateAvailable,
                endpoint: location.endpoint,
            })
            .then(() => (announced = true));

        await MockTime.advance(Seconds(700));
        await MockTime.macrotasks;
        expect(announced).false;
        expect(queries).equals(1);

        releaseAnswer();
        await MockTime.resolve(announcement);
        await MockTime.advance(Seconds(700));
        await MockTime.macrotasks;
        expect(queries).equals(2);
    });

    describe("with a provider that answers Busy", () => {
        /** A provider answering every query Busy, recording the virtual time of each answer. */
        function BusyOtaProviderServer() {
            const answeredAt = new Array<number>();

            class TestOtaProviderServer extends OtaSoftwareUpdateProviderServer {
                override async queryImage(): Promise<OtaSoftwareUpdateProvider.QueryImageResponse> {
                    answeredAt.push(MockTime.nowUs);
                    return { status: OtaSoftwareUpdateProvider.Status.Busy, delayedActionTime: 60 };
                }
            }

            return { TestOtaProviderServer, answeredAt };
        }

        /**
         * The requestor's state transitions, which a test can wait on by the number of transitions into a state.  Waits
         * on the requestor's own events, so they do not depend on how far mock network delivery lags virtual time.
         */
        function stateTransitionsOf(otaRequestor: Endpoint) {
            const transitions = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
            const waiters = new Array<{
                state: OtaSoftwareUpdateRequestor.UpdateState;
                count: number;
                resolver: () => void;
            }>();

            const reached = (state: OtaSoftwareUpdateRequestor.UpdateState, count: number) =>
                transitions.filter(({ newState }) => newState === state).length >= count;

            otaRequestor.eventsOf(OtaSoftwareUpdateRequestorServer).stateTransition.on(event => {
                transitions.push(event);
                for (const waiter of [...waiters]) {
                    if (reached(waiter.state, waiter.count)) {
                        waiters.splice(waiters.indexOf(waiter), 1);
                        waiter.resolver();
                    }
                }
            });

            return {
                transitions,
                into(state: OtaSoftwareUpdateRequestor.UpdateState, count = 1) {
                    const { promise, resolver } = createPromise<void>();
                    if (reached(state, count)) {
                        resolver();
                    } else {
                        waiters.push({ state, count, resolver });
                    }
                    return promise;
                },
            };
        }

        it("waits in DelayedOnQuery while the retry is armed, and queries again when it is due", async () => {
            const busy = BusyOtaProviderServer();
            const { site, otaRequestor } = await initOtaSite(
                busy.TestOtaProviderServer,
                OtaSoftwareUpdateRequestorServer,
            );
            await using _localSite = site;
            const states = stateTransitionsOf(otaRequestor);

            await MockTime.resolve(states.into(OtaSoftwareUpdateRequestor.UpdateState.DelayedOnQuery));
            await MockTime.resolve(states.into(OtaSoftwareUpdateRequestor.UpdateState.DelayedOnQuery, 2));

            const { Querying, DelayedOnQuery } = OtaSoftwareUpdateRequestor.UpdateState;
            expect(states.transitions.map(({ newState }) => newState)).deep.equals([
                Querying,
                DelayedOnQuery,
                Querying,
                DelayedOnQuery,
            ]);

            expect(busy.answeredAt.length).equals(2);

            // The provider asked for 60 s, and the requestor's minimum query interval of 120 s is longer
            const [first, second] = busy.answeredAt;
            expect(second - first).within(Seconds(120), Seconds(130));
        });

        it("gives up on the provider after three Busy retries", async () => {
            const busy = BusyOtaProviderServer();
            const { site, otaRequestor } = await initOtaSite(
                busy.TestOtaProviderServer,
                OtaSoftwareUpdateRequestorServer,
            );
            await using _localSite = site;
            const states = stateTransitionsOf(otaRequestor);

            await MockTime.resolve(states.into(OtaSoftwareUpdateRequestor.UpdateState.Idle));
            expect(busy.answeredAt.length).equals(4);

            const transitions = states.transitions.length;
            await MockTime.advance(Minutes(10));
            await MockTime.macrotasks;
            expect(states.transitions.length).equals(transitions);
            expect(busy.answeredAt.length).equals(4);
        });

        it("returns to Idle when updates are disabled while it waits", async () => {
            const busy = BusyOtaProviderServer();
            const { site, otaRequestor } = await initOtaSite(
                busy.TestOtaProviderServer,
                OtaSoftwareUpdateRequestorServer,
            );
            await using _localSite = site;
            const states = stateTransitionsOf(otaRequestor);
            await MockTime.resolve(states.into(OtaSoftwareUpdateRequestor.UpdateState.DelayedOnQuery));

            await MockTime.resolve(
                otaRequestor.setStateOf(OtaSoftwareUpdateRequestorServer, { updatePossible: false }),
            );

            expect(otaRequestor.stateOf(OtaSoftwareUpdateRequestorServer).updateState).equals(
                OtaSoftwareUpdateRequestor.UpdateState.Idle,
            );
            const transitions = states.transitions.length;
            await MockTime.advance(Minutes(10));
            await MockTime.macrotasks;
            expect(states.transitions.length).equals(transitions);
            expect(busy.answeredAt.length).equals(1);
        });
    });

    it("OTA reboot: closes older sessions and does not re-subscribe a device that feeds its subscription", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };

        const { applyUpdatePromise, announceOtaProviderPromise, TestOtaRequestorServer } =
            InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        const {
            queryImagePromise,
            applyUpdateRequestPromise,
            checkUpdateAvailablePromise,
            notifyUpdateAppliedPromise,
            TestOtaProviderServer,
        } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Spy on the collaborators the armer drives. No restore is needed: each initOtaSite test gets its
        // own Environment, so these patches die with the site (same rationale as the BDX test below).
        const shutdownCalls = new Array<{ address: PeerAddress; asOf?: Timestamp }>();
        const closeForPeerCalls = new Array<PeerAddress>();
        // A device-pushed (non-initiator) session for this peer is the reboot return the armer keys on; capturing
        // its createdAt lets us prove the armer's Mechanism A fired (it passes session.createdAt), distinct from the
        // Peers.#onStartUp reboot path that also calls handlePeerShutdown.
        const rebootSessionCreatedAts = new Array<Timestamp>();
        await otaProvider.act(agent => {
            const sessionManager = agent.env.get(SessionManager);
            const subscriptions = agent.env.get(ClientSubscriptions);
            const originalShutdown = sessionManager.handlePeerShutdown.bind(sessionManager);
            sessionManager.handlePeerShutdown = (address, asOf) => {
                shutdownCalls.push({ address, asOf });
                return originalShutdown(address, asOf);
            };
            const originalCloseForPeer = subscriptions.closeForPeer.bind(subscriptions);
            subscriptions.closeForPeer = address => {
                closeForPeerCalls.push(address);
                return originalCloseForPeer(address);
            };
            sessionManager.sessions.added.on(session => {
                if (!session.isInitiator && PeerAddress.is(session.peerAddress, peerAddress)) {
                    rebootSessionCreatedAts.push(session.createdAt);
                }
            });
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await MockTime.resolve(announceOtaProviderPromise);
        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(checkUpdateAvailablePromise);
        await MockTime.resolve(applyUpdateRequestPromise);

        // The armer specifically must have been armed for this peer at Applying — this disambiguates
        // the shutdownCalls assertion below from the general Peers.#onStartUp reboot path, which also
        // calls handlePeerShutdown independently of OTA.
        const armerDefinedAfterApplying = await otaProvider.act(
            agent => agent.get(SoftwareUpdateManager).internal.rebootResubscribeArmer !== undefined,
        );
        expect(armerDefinedAfterApplying).equals(true);

        await MockTime.resolve(applyUpdatePromise);

        // Simulate reboot with the new version.  The device re-establishes its persisted subscription over the session
        // it opens, so it keeps feeding the subscription.  The sibling Mechanism B test proves the grace window reaches
        // closeForPeer in this harness, so the keep asserted below is a decision and not an absence of one.
        await MockTime.resolve(device.stop());
        await device.setStateOf(BasicInformationServer, { softwareVersion: targetSoftwareVersion });
        await MockTime.resolve(device.start());
        await MockTime.resolve(notifyUpdateAppliedPromise);

        // Let the grace window elapse.
        await MockTime.advance(Seconds(30));
        await MockTime.macrotasks;

        // Mechanism A ran for the returning peer with the reboot session's createdAt (the armer's asOf), not merely
        // the general Peers.#onStartUp shutdown.
        expect(rebootSessionCreatedAts.length).greaterThan(0);
        expect(
            shutdownCalls.some(
                c =>
                    PeerAddress.is(c.address, peerAddress) &&
                    c.asOf !== undefined &&
                    rebootSessionCreatedAts.includes(c.asOf),
            ),
        ).equals(true);

        // …and because the subscription was fed, the armer chose KEEP: no force re-subscribe.
        expect(closeForPeerCalls.some(a => PeerAddress.is(a, peerAddress))).equals(false);

        // The armer watches the ClientSubscriptions of one run; the next run must not reuse it
        await MockTime.resolve(controller.stop());
        expect(otaProvider.behaviors.internalsOf(SoftwareUpdateManager).rebootResubscribeArmer).undefined;

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    it("OTA reboot: force re-subscribes (Mechanism B) when the subscription is not fed within the grace window", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };

        const { applyUpdatePromise, announceOtaProviderPromise, TestOtaRequestorServer } =
            InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        const {
            queryImagePromise,
            applyUpdateRequestPromise,
            checkUpdateAvailablePromise,
            notifyUpdateAppliedPromise,
            TestOtaProviderServer,
        } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Complement of the sibling "does not re-subscribe" test: spy on the real closeForPeer and let the
        // rebooted device stay silent, which is what a device that does not persist subscriptions does. No
        // restore is needed: each initOtaSite test gets its own Environment, so this patch dies with the site.
        const closeForPeerCalls = new Array<PeerAddress>();
        await otaProvider.act(agent => {
            const subscriptions = agent.env.get(ClientSubscriptions);
            const originalCloseForPeer = subscriptions.closeForPeer.bind(subscriptions);
            subscriptions.closeForPeer = address => {
                closeForPeerCalls.push(address);
                return originalCloseForPeer(address);
            };
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await MockTime.resolve(announceOtaProviderPromise);
        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(checkUpdateAvailablePromise);
        await MockTime.resolve(applyUpdateRequestPromise);

        const armerDefinedAfterApplying = await otaProvider.act(
            agent => agent.get(SoftwareUpdateManager).internal.rebootResubscribeArmer !== undefined,
        );
        expect(armerDefinedAfterApplying).equals(true);

        await MockTime.resolve(applyUpdatePromise);

        // Simulate reboot with the new version of a device that does not persist subscriptions
        await device.setStateOf(SubscriptionsServer, { persistenceEnabled: false });
        await MockTime.resolve(device.stop());
        await device.setStateOf(BasicInformationServer, { softwareVersion: targetSoftwareVersion });
        await MockTime.resolve(device.start());
        await MockTime.resolve(notifyUpdateAppliedPromise);

        // Nothing must fire before the grace elapses — this rules out a regression that force-re-subscribes
        // on session-added rather than after the grace window.
        expect(closeForPeerCalls.some(a => PeerAddress.is(a, peerAddress))).equals(false);

        // Let the grace window elapse without the device reporting.
        await MockTime.advance(Seconds(31));
        await MockTime.macrotasks;

        expect(closeForPeerCalls.some(a => PeerAddress.is(a, peerAddress))).equals(true);

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    it("a real inbound subscription report announces the session it arrived over", async () => {
        // Exercises the actual report notification in ClientSubscriptionHandler with no patch of it — the
        // RebootResubscribeArmer's grace-window decision depends entirely on this real path staying correct.
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        // subscribedPeer waits for the sustained subscription to be genuinely active; without that wait, a
        // state change made immediately after commissioning can race the initial bootstrap read and land via
        // that read's response rather than a real subscription report.
        const peer1 = await subscribedPeer(controller, "peer1");
        // #peers is keyed by the interned PeerAddress instance (reference equality); state.commissioning.peerAddress
        // is not itself interned, so it must be normalized before use as a lookup key here — same as production
        // callers (e.g. SoftwareUpdateManager.forceUpdate) do via PeerAddress(peerAddress).
        const peerAddress = PeerAddress(peer1.state.commissioning.peerAddress!);

        const { subscriptions, sessions } = await otaProvider.act(agent => ({
            subscriptions: agent.env.get(ClientSubscriptions),
            sessions: agent.env.get(SessionManager),
        }));

        const reports = new Array<{ peer: PeerAddress; session: SecureSession }>();
        subscriptions.reportStarted.on(session => {
            reports.push({ peer: session.peerAddress, session });
        });

        // Only device-pushed reports flow through ClientSubscriptionHandler; the initial priming report comes back
        // inline in the subscribe exchange and never touches that path. So we drive TWO successive device-pushed
        // reports and assert both are announced — a notification raised from the wrong place would fail even
        // though a single report leaves the list merely non-empty.
        const firstReport = new Promise<void>(resolve => {
            peer1.eventsOf(BasicInformationClient).softwareVersion$Changed.once(() => resolve());
        });
        await device.setStateOf(BasicInformationServer, { softwareVersion: 99 });
        await MockTime.resolve(firstReport);
        expect(reports.length).equals(1);

        await MockTime.advance(Seconds(5));

        const secondReport = new Promise<void>(resolve => {
            peer1.eventsOf(BasicInformationClient).softwareVersion$Changed.once(() => resolve());
        });
        await device.setStateOf(BasicInformationServer, { softwareVersion: 100 });
        await MockTime.resolve(secondReport);
        expect(reports.length).equals(2);

        // The session is what the armer keys its decision on, so each report must name the peer's own live session
        // rather than any session that happens to exist.
        const live = sessions.sessions.filter(session => PeerAddress.is(session.peerAddress, peerAddress));
        expect(live.length).equals(1);
        expect(reports.every(report => PeerAddress.is(report.peer, peerAddress) && report.session === live[0])).equals(
            true,
        );

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    it("OTA reboot: the failed-apply detection path does not disarm the peer", async () => {
        // The armer refreshes the subscription only when the returning device opens a device-initiated session; in
        // this harness that session appears via notifyUpdateApplied, which a FAILED apply never sends (the device
        // instead schedules a much-later retry query). So the observable proof here is the invariant the fix relies
        // on: the failed-apply detection path must NOT disarm the peer, so a retry-query session arriving within the
        // return-timeout window still finds the armer live and re-subscribes fast instead of falling back to the full
        // liveness timeout. (A return slower than that window is recovered by the armer's own return-timeout backstop
        // — a separate path exercised in RebootResubscribeArmerTest.) The sibling Mechanism-B test covers the
        // closeForPeer behaviour once such a session exists.
        const data = { expectedOtaImage: Bytes.fromHex("") };

        const { applyUpdatePromise, announceOtaProviderPromise, TestOtaRequestorServer } =
            InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        const { queryImagePromise, applyUpdateRequestPromise, checkUpdateAvailablePromise, TestOtaProviderServer } =
            InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const updateFailedEvents = new Array<PeerAddress>();
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).events.updateFailed.on(peer => {
                updateFailedEvents.push(peer);
            });
        });

        // Drive the update through to Applying, which arms the armer for this peer.
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await MockTime.resolve(announceOtaProviderPromise);
        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(checkUpdateAvailablePromise);
        await MockTime.resolve(applyUpdateRequestPromise);

        // Armed at Applying. Spy on disarm so we can assert the failed-apply path leaves the arming in place. No
        // restore is needed: each initOtaSite test gets its own Environment, so the patch dies with the site.
        const disarmCalls = new Array<PeerAddress>();
        await otaProvider.act(agent => {
            const armer = agent.get(SoftwareUpdateManager).internal.rebootResubscribeArmer;
            expect(armer).not.undefined;
            const originalDisarm = armer!.disarm.bind(armer);
            armer!.disarm = address => {
                disarmCalls.push(address);
                return originalDisarm(address);
            };
        });

        await MockTime.resolve(applyUpdatePromise);

        // Simulate a FAILED apply: the device reboots reporting the OLD (unchanged) softwareVersion. startUp fires
        // with the old version while the entry is still in Applying → apply-failure detection.
        const subscription = peer1.behaviors.internalsOf(NetworkClient).activeSubscription!;
        expect(subscription).not.undefined;
        SustainedSubscription.assert(subscription);

        await MockTime.resolve(device.stop());
        await MockTime.resolve(subscription.inactive);

        // While the device is down, the return-timeout backstop (#onReturnTimeout) elapses and recovers the peer
        // (disarm + re-subscribe) — a separate path from the failed-apply detection this test guards, and one that
        // cannot be confused with it because detection only runs once the device is back up. Wait for it here, then
        // discard its disarm so the assertion below sees only disarm calls that could originate from the detection
        // code. (This backstop is covered directly in RebootResubscribeArmerTest.)
        while (!disarmCalls.some(a => PeerAddress.is(a, peerAddress))) {
            await MockTime.advance(Seconds(10));
        }
        disarmCalls.length = 0;

        // Keep the original softwareVersion (do NOT set it to targetSoftwareVersion).
        await MockTime.resolve(device.start());
        await MockTime.resolve(subscription.active);
        await MockTime.macrotasks;

        // Failure detection still fires…
        expect(updateFailedEvents.some(a => PeerAddress.is(a, peerAddress))).equals(true);
        // …and — the invariant this test guards — the failed-apply path did NOT disarm the peer. Re-adding a
        // disarm() to that branch would make this fail.
        expect(disarmCalls.some(a => PeerAddress.is(a, peerAddress))).equals(false);

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    it("Cancel a software update before download by removing consent", async () => {
        // *** COMMISSIONING ***

        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
        });

        const { queryImagePromise, TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false, // not relevant
        });

        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        // *** GENERATE AND STORE OTA IMAGE ***

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);

        // *** TRIGGER OTA UPDATE ***

        // Get the client view of the device (peer)
        const peer1 = controller.peers.get("peer1")!;
        expect(peer1).not.undefined;

        // Get the peer address for force update
        const peerAddress = peer1.state.commissioning.peerAddress;
        expect(peerAddress).not.undefined;

        const { promise: idlePromise, resolver: idleResolver } = createPromise<void>();
        const updateStateEvents = new Array<OtaSoftwareUpdateRequestor.StateTransitionEvent>();
        peer1.endpoints
            .for(otaRequestor.number)
            .eventsOf(OtaSoftwareUpdateRequestorClient)
            .stateTransition.on((event: OtaSoftwareUpdateRequestor.StateTransitionEvent) => {
                updateStateEvents.push(event);
                if (event.newState === OtaSoftwareUpdateRequestor.UpdateState.Idle) {
                    idleResolver();
                }
            });

        // Force the OTA update via SoftwareUpdateManager
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress!, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        await otaProvider.act(agent => {
            return agent.get(SoftwareUpdateManager).removeConsent(
                PeerAddress({
                    nodeId: peerAddress!.nodeId,
                    fabricIndex: FabricIndex(peerAddress!.fabricIndex),
                }),
            );
        });

        await MockTime.resolve(queryImagePromise);

        await MockTime.resolve(idlePromise);

        expect(updateStateEvents).deep.equals([
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Idle,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Querying,
                reason: OtaSoftwareUpdateRequestor.ChangeReason.Success,
                targetSoftwareVersion: null,
            },
            {
                previousState: OtaSoftwareUpdateRequestor.UpdateState.Querying,
                newState: OtaSoftwareUpdateRequestor.UpdateState.Idle,
                reason: OtaSoftwareUpdateRequestor.ChangeReason.Success,
                targetSoftwareVersion: null,
            },
        ]);
    }).timeout(10_000); // locally needs 1s, but CI might be slower
    /** A commissioned pair with an OTA image staged, for tests that only exercise transfer-option resolution. */
    async function otaSiteWithImage() {
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            { expectedOtaImage: Bytes.fromHex("") },
        );
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;

        const optionsFor = () =>
            otaProvider.act(agent => agent.get(SoftwareUpdateManager).bdxTransferOptionsFor(peerAddress));
        const consentTo = (target: Partial<SoftwareUpdateManager.UpdateTarget>) =>
            otaProvider.act(agent =>
                agent.get(SoftwareUpdateManager).addUpdateConsent(peerAddress, {
                    vendorId: VendorId(vendorId),
                    productId,
                    targetSoftwareVersion,
                    ...target,
                }),
            );

        return { site, otaProvider, peerAddress, optionsFor, consentTo };
    }

    it("resolves transfer options from the consent, then from state", async () => {
        const { site, otaProvider, optionsFor, consentTo } = await otaSiteWithImage();
        await using _localSite = site;

        // Nothing configured: the peer and its medium decide
        expect(await optionsFor()).deep.equals({ maxBlockSize: undefined, additionalMrpDelay: undefined });

        await otaProvider.act(agent => {
            const { state } = agent.get(SoftwareUpdateManager);
            state.maxBdxBlockSize = 512;
            state.bdxAdditionalMrpDelay = Seconds(2);
        });
        expect(await optionsFor()).deep.equals({ maxBlockSize: 512, additionalMrpDelay: Seconds(2) });

        // Consent-level overrides outrank the general defaults
        await consentTo({ maxBdxBlockSize: 256, bdxAdditionalMrpDelay: Millis(500) });
        expect(await optionsFor()).deep.equals({ maxBlockSize: 256, additionalMrpDelay: Millis(500) });
    });

    it("lets a later consent change and clear the options of a queued update", async () => {
        const { site, optionsFor, consentTo } = await otaSiteWithImage();
        await using _localSite = site;

        await consentTo({ maxBdxBlockSize: 256, bdxAdditionalMrpDelay: Millis(500) });
        expect(await optionsFor()).deep.equals({ maxBlockSize: 256, additionalMrpDelay: Millis(500) });

        await consentTo({ maxBdxBlockSize: 128 });
        expect(await optionsFor()).deep.equals({ maxBlockSize: 128, additionalMrpDelay: undefined });

        await consentTo({});
        expect(await optionsFor()).deep.equals({ maxBlockSize: undefined, additionalMrpDelay: undefined });
    });

    it("rejects invalid transfer options before touching any state", async () => {
        const { site, otaProvider, peerAddress, consentTo } = await otaSiteWithImage();
        await using _localSite = site;

        for (const maxBdxBlockSize of [0, -1, 1.5, Number.NaN]) {
            await expect(consentTo({ maxBdxBlockSize })).to.be.rejectedWith(ImplementationError);
        }
        for (const bdxAdditionalMrpDelay of [Millis(-1), Millis(Number.NaN)]) {
            await expect(consentTo({ bdxAdditionalMrpDelay })).to.be.rejectedWith(ImplementationError);
        }

        // forceUpdate tears down BDX registration and queue state on its way, so it must reject first too
        await expect(
            otaProvider.act(agent =>
                agent.get(SoftwareUpdateManager).forceUpdate(peerAddress, {
                    vendorId: VendorId(0),
                    productId: 0,
                    targetSoftwareVersion: 1,
                    maxBdxBlockSize: 0,
                }),
            ),
        ).to.be.rejectedWith(ImplementationError);

        expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates)).length(0);
    });

    it("Queue processes a single update via addUpdateConsent", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };

        const { applyUpdatePromise, announceOtaProviderPromise, TestOtaRequestorServer } =
            InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        const {
            queryImagePromise,
            applyUpdateRequestPromise,
            checkUpdateAvailablePromise,
            notifyUpdateAppliedPromise,
            TestOtaProviderServer,
        } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });

        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        // Wait until defaults got announced
        await MockTime.resolve(otaRequestor.eventsOf(OtaSoftwareUpdateRequestorServer).defaultOtaProviders$Changed);

        // Add OTA image
        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        // Get peer info
        const peer1 = controller.peers.get("peer1")!;
        expect(peer1).not.undefined;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Use addUpdateConsent (queued path, not forceUpdate)
        const added = await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });
        expect(added).equals(true);

        // Verify queue shows 1 entry
        const queue1 = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue1).length(1);
        expect(queue1[0].targetSoftwareVersion).equals(targetSoftwareVersion);

        await MockTime.resolve(announceOtaProviderPromise);

        // Messages may still be in flight; ensure they find a home before continuing
        await MockTime.macrotasks;

        // After announcement, verify queue shows in-progress
        const queue2 = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);

        expect(queue2).length(1);
        expect(queue2[0].status).equals("in-progress");

        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(checkUpdateAvailablePromise);
        await MockTime.resolve(applyUpdateRequestPromise);
        await MockTime.resolve(applyUpdatePromise);

        // Simulate device restart with new version
        await MockTime.resolve(device.stop());
        await device.setStateOf(BasicInformationServer, { softwareVersion: targetSoftwareVersion });
        await MockTime.resolve(device.start());

        await MockTime.resolve(notifyUpdateAppliedPromise);

        // Queue should be empty after completion
        const queue3 = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue3).length(0);

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    it("Does not report updates for nodes without OTA requestor", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });

        const site = new MockSite();
        const { controller, device } = await site.addCommissionedPair({
            controller: {
                type: ServerNode.RootEndpoint,
                parts: [{ id: "ota-provider", type: OtaProviderEndpoint.with(TestOtaProviderServer) }],
            },
        });
        await using _localSite = site;

        const otaProvider = controller.parts.get("ota-provider")!;
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            su.state.allowTestOtaImages = true;
        });

        const { otaImage } = await addTestOtaImage(device, controller);
        let checkForUpdateCalls = 0;
        let downloadUpdateCalls = 0;

        const updatesAvailable = await otaProvider.act(async agent => {
            const su = agent.get(SoftwareUpdateManager);
            const otaService = su.internal.otaService;

            const originalCheckForUpdate = otaService.checkForUpdate.bind(otaService);
            const originalDownloadUpdate = otaService.downloadUpdate.bind(otaService);

            otaService.checkForUpdate = async () => {
                checkForUpdateCalls++;
                // Simulate DCL returning an available update.
                return {
                    ...otaImage.updateInfo,
                    source: "dcl-test",
                };
            };
            otaService.downloadUpdate = async () => {
                downloadUpdateCalls++;
                return { text: "mocked-ota-file" } as any;
            };

            try {
                return await su.queryUpdates({ includeStoredUpdates: false });
            } finally {
                otaService.checkForUpdate = originalCheckForUpdate;
                otaService.downloadUpdate = originalDownloadUpdate;
            }
        });
        expect(updatesAvailable).deep.equals([]);
        expect(checkForUpdateCalls).equals(0);
        expect(downloadUpdateCalls).equals(0);
    }).timeout(10_000);

    it("Cancelled status resets queue entry for retry", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Add a consent and queue an entry
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Manually set the entry to in-progress with Downloading status
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const entry = su.internal.updateQueue[0];
            entry.phase = { state: "progress", status: OtaUpdateStatus.Downloading, since: Time.nowMs };
        });

        const updateFailedEvents: PeerAddress[] = [];
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).events.updateFailed.on(peer => {
                updateFailedEvents.push(peer);
            });
        });

        // Simulate BDX transport cancellation via Cancelled status
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Cancelled);
        });

        // Queue entry should still exist (reset, not removed), and the reset entry is announced again at once
        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue).length(1);
        expect(queue[0].status).equals("in-progress");
        expect(queue[0].lastProgressStatus).undefined;

        // updateFailed must NOT have been emitted (that's only for intentional cancel via #cancelUpdate)
        expect(updateFailedEvents).length(0);
    }).timeout(10_000);

    it("Done status clears the consent for the completed version", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).hasConsent(peerAddress))).equals(true);

        await otaProvider.act(agent => {
            agent
                .get(SoftwareUpdateManager)
                .onOtaStatusChange(peerAddress, OtaUpdateStatus.Done, targetSoftwareVersion);
        });

        expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).hasConsent(peerAddress))).equals(false);
        expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates)).length(0);
    }).timeout(10_000);

    it("refuses an apply it holds no consent for, naming the wait in seconds", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        let peerAddress: PeerAddress | undefined;
        let targetVersion: number | undefined;
        const { queryImagePromise, applyUpdateRequestPromise, applyUpdateResponses, TestOtaProviderServer } =
            InstrumentedOtaProviderServer(
                { requestUserConsentForUpdate: false, notifyUpdateApplied: false },
                {
                    // The provider refuses an update it holds no consent for, and the flow that reaches
                    // its apply is the flow that granted one, so the consent goes away here
                    beforeApplyUpdateRequest: agent =>
                        agent.get(SoftwareUpdateManager).removeConsent(peerAddress!, targetVersion!),
                },
            );

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);
        targetVersion = targetSoftwareVersion;

        const peer1 = controller.peers.get("peer1")!;
        peerAddress = peer1.state.commissioning.peerAddress!;

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress!, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(applyUpdateRequestPromise);
        await MockTime.macrotasks;

        expect(applyUpdateResponses).length(1);
        expect(applyUpdateResponses[0].action).equals(OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue);

        // DelayedActionTime is seconds on the wire (Matter Core 11.20.6.10), so two minutes is 120; a
        // Duration written straight into the field would say 120000, which a requestor clamps to 24 hours
        expect(applyUpdateResponses[0].delayedActionTime).equals(120);

        await site[Symbol.asyncDispose]();
    }).timeout(10_000);

    /** Drives one update to its apply, with the apply request rewritten as a non-compliant requestor sends it. */
    async function applyRewritten(
        rewrite: (
            request: OtaSoftwareUpdateProvider.ApplyUpdateRequest,
        ) => OtaSoftwareUpdateProvider.ApplyUpdateRequest,
        {
            consent = "kept",
        }: {
            consent?: "kept" | "withdrawn" | "moved-to-next-version" | "update-failed" | "update-failed-long-ago";
        } = {},
    ) {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false }, data);

        let peerAddress: PeerAddress | undefined;
        let target: SoftwareUpdateManager.UpdateTarget | undefined;
        const { queryImagePromise, applyUpdateRequestPromise, applyUpdateResponses, TestOtaProviderServer } =
            InstrumentedOtaProviderServer(
                { requestUserConsentForUpdate: false, notifyUpdateApplied: false },
                {
                    beforeApplyUpdateRequest: async agent => {
                        const manager = agent.get(SoftwareUpdateManager);
                        switch (consent) {
                            case "withdrawn":
                                await manager.removeConsent(peerAddress!, target!.targetSoftwareVersion);
                                break;
                            case "update-failed":
                                manager.internal.updateStopped.emit(peerAddress!);
                                break;
                            case "update-failed-long-ago": {
                                // As left by a stop whose token was last active longer ago than a token lives
                                const { internal } = agent.get(OtaSoftwareUpdateProviderServer);
                                for (const [key, { versionToApply }] of internal.inProgressDetails) {
                                    internal.inProgressDetails.delete(key);
                                    if (versionToApply !== undefined) {
                                        internal.stoppedTokenVersions.set(key, {
                                            version: versionToApply,
                                            timestamp: Timestamp(Time.nowMs - Minutes(16)),
                                        });
                                    }
                                }
                                break;
                            }
                            case "moved-to-next-version":
                                await manager.addUpdateConsent(peerAddress!, {
                                    ...target!,
                                    targetSoftwareVersion: target!.targetSoftwareVersion + 1,
                                });
                                break;
                        }
                    },
                    rewriteApplyUpdateRequest: rewrite,
                },
            );

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);
        target = { vendorId: VendorId(vendorId), productId, targetSoftwareVersion };
        peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;

        await otaProvider.act(agent => agent.get(SoftwareUpdateManager).forceUpdate(peerAddress!, target!));

        await MockTime.resolve(queryImagePromise);
        await MockTime.resolve(applyUpdateRequestPromise);
        await MockTime.macrotasks;

        return applyUpdateResponses.map(({ action }) => action);
    }

    it("applies the version of a known update token when the requestor asks for version 0", async () => {
        expect(await applyRewritten(request => ({ ...request, newVersion: 0 }))).deep.equals([
            OtaSoftwareUpdateProvider.ApplyUpdateAction.Proceed,
        ]);
    }).timeout(10_000);

    it("refuses a version other than 0 that differs from its update token", async () => {
        expect(await applyRewritten(request => ({ ...request, newVersion: request.newVersion + 1 }))).deep.equals([
            OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue,
        ]);
    }).timeout(10_000);

    it("refuses a version other than 0 that differs from its update token, even with consent for it", async () => {
        expect(
            await applyRewritten(request => ({ ...request, newVersion: request.newVersion + 1 }), {
                consent: "moved-to-next-version",
            }),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue]);
    }).timeout(10_000);

    it("applies a consented version under an update token it does not know, as after a restart", async () => {
        expect(
            await applyRewritten(request => ({ ...request, updateToken: Bytes.fromHex("0102030405060708") })),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Proceed]);
    }).timeout(10_000);

    it("refuses version 0 for an update token it does not know", async () => {
        expect(
            await applyRewritten(request => ({
                ...request,
                updateToken: Bytes.fromHex("0102030405060708"),
                newVersion: 0,
            })),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue]);
    }).timeout(10_000);

    it("applies the version of a known update token for version 0 after the update failed with its consent kept", async () => {
        expect(
            await applyRewritten(request => ({ ...request, newVersion: 0 }), { consent: "update-failed" }),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Proceed]);
    }).timeout(10_000);

    it("refuses version 0 for an update token whose update failed longer ago than a token lives", async () => {
        expect(
            await applyRewritten(request => ({ ...request, newVersion: 0 }), { consent: "update-failed-long-ago" }),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue]);
    }).timeout(10_000);

    it("refuses a version other than the one its update token named after the update failed", async () => {
        expect(
            await applyRewritten(request => ({ ...request, newVersion: request.newVersion + 1 }), {
                consent: "update-failed",
            }),
        ).deep.equals([OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue]);
    }).timeout(10_000);

    it("refuses version 0 for a known update token once its consent is gone", async () => {
        expect(await applyRewritten(request => ({ ...request, newVersion: 0 }), { consent: "withdrawn" })).deep.equals([
            OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue,
        ]);
    }).timeout(10_000);

    /** Drives one update to its apply with a provider whose `applyDelay` is `delay`. */
    async function applyWithDelay(delay: Duration) {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { announceOtaProviderPromise, TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            data,
        );
        const { queryImagePromise, applyUpdateRequestPromise, checkUpdateAvailablePromise, TestOtaProviderServer } =
            InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const sent = new Array<number>();
        class DelayingProviderServer extends TestOtaProviderServer {
            override initialize() {
                this.state.applyDelay = delay;
                return super.initialize();
            }

            override async applyUpdateRequest(request: OtaSoftwareUpdateProvider.ApplyUpdateRequest) {
                const response = await super.applyUpdateRequest(request);
                sent.push(response.delayedActionTime);
                return response;
            }
        }

        const armed = new Array<Duration | undefined>();
        const originalArm = RebootResubscribeArmer.prototype.arm;
        RebootResubscribeArmer.prototype.arm = function (this: RebootResubscribeArmer, peer, applyDelay) {
            armed.push(applyDelay);
            return originalArm.call(this, peer, applyDelay);
        };
        try {
            const { site, device, controller, otaProvider } = await initOtaSite(
                DelayingProviderServer,
                TestOtaRequestorServer,
            );
            await using _localSite = site;

            const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
            data.expectedOtaImage = Bytes.of(otaImage.image);
            const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;

            await otaProvider.act(agent =>
                agent
                    .get(SoftwareUpdateManager)
                    .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
            );
            await MockTime.resolve(announceOtaProviderPromise);
            await MockTime.resolve(queryImagePromise);
            await MockTime.resolve(checkUpdateAvailablePromise);
            await MockTime.resolve(applyUpdateRequestPromise);
        } finally {
            RebootResubscribeArmer.prototype.arm = originalArm;
        }
        return { sent, armed };
    }

    it("expects the device's return only after the delay it was allowed to apply with", async () => {
        const { sent, armed } = await applyWithDelay(Seconds(180));

        expect(sent).deep.equal([180]);
        expect(armed).deep.equal([Seconds(180)]);
    }).timeout(10_000);

    it("rounds an apply delay up to whole seconds, since it is a minimum wait", async () => {
        const { sent, armed } = await applyWithDelay(Millis(1500));

        expect(sent).deep.equal([2]);
        expect(armed).deep.equal([Seconds(2)]);
    }).timeout(10_000);

    it("sends at most a day of apply delay, which a requestor may treat a longer one as", async () => {
        const { sent, armed } = await applyWithDelay(Hours(48));

        expect(sent).deep.equal([86_400]);
        expect(armed).deep.equal([Seconds(86_400)]);
    }).timeout(10_000);

    it("does not count an update as stalled while the device waits out its apply delay", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });
        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peerAddress = controller.peers.get("peer1")!.state.commissioning.peerAddress!;
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .onOtaStatusChange(peerAddress, OtaUpdateStatus.Applying, targetSoftwareVersion, Minutes(30)),
        );

        const entryOf = async () => (await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates))[0];

        await MockTime.advance(Minutes(40));
        expect((await entryOf()).status).equals("in-progress");

        // Past the delay and the progress timeout, the queue gives up on the attempt, by status or by its reset
        await MockTime.advance(Minutes(10));
        const { status, lastProgressStatus } = await entryOf();
        expect(status === "stalled" || lastProgressStatus !== OtaUpdateStatus.Applying).true;
    }).timeout(10_000);

    it("Apply failure detected when startUp fires after Applying state", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const updateFailedEvents: PeerAddress[] = [];
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).events.updateFailed.on(peer => {
                updateFailedEvents.push(peer);
            });
        });

        // Queue the update (this also registers the startUp observer via #preparePeerForUpdate)
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Directly set the entry to Applying state with a progress time (simulates mid-apply state)
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const entry = su.internal.updateQueue[0];
            entry.phase = { state: "progress", status: OtaUpdateStatus.Applying, since: Time.nowMs };
        });

        // Await teardown and re-prime on the sustained subscription — the startUp handler only runs
        // once the priming report delivers the buffered event.
        const subscription = peer1.behaviors.internalsOf(NetworkClient).activeSubscription!;
        expect(subscription).not.undefined;
        SustainedSubscription.assert(subscription);

        // Simulate device rebooting with the ORIGINAL (old) version — apply failed
        // The startUp event will fire with the old softwareVersion via the registered observer
        await MockTime.resolve(device.stop());
        await MockTime.resolve(subscription.inactive);
        // Keep the original softwareVersion (do NOT set it to targetSoftwareVersion)
        await MockTime.resolve(device.start());
        await MockTime.resolve(subscription.active);

        await MockTime.macrotasks;

        // previousProgressStatus is captured before the clearing block,
        // so the isStartUp + Applying check should detect the failure and emit updateFailed.
        expect(updateFailedEvents).length(1);

        // The failed update keeps its consent, but neither the queue nor a later check announces it again
        const afterCheck = await otaProvider.act(async agent => {
            const manager = agent.get(SoftwareUpdateManager);
            await manager.queryUpdates({ includeStoredUpdates: true });
            return {
                consent: manager.hasConsent(peerAddress, targetSoftwareVersion),
                queued: manager.queuedUpdates.length,
                phase: manager.internal.updateQueue.map(({ phase }) => phase.state),
            };
        });
        expect(afterCheck).deep.equals({ consent: true, queued: 0, phase: ["failed"] });

        // A new consent still starts the update
        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        const requeued = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(requeued.map(({ targetSoftwareVersion }) => targetSoftwareVersion)).deep.equals([targetSoftwareVersion]);
    }).timeout(10_000);

    /**
     * Queues an update the device has been allowed to apply but that it never acts on: it does not query again and
     * does not restart.
     */
    async function applyWithoutRestart(
        options: { applyDelay?: Duration; targetSoftwareVersion?: number; status?: OtaUpdateStatus } = {},
    ) {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });
        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peerAddress = (await subscribedPeer(controller, "peer1")).state.commissioning.peerAddress!;
        const failed = new Array<PeerAddress>();
        await otaProvider.act(agent => {
            const manager = agent.get(SoftwareUpdateManager);
            manager.events.updateFailed.on(peer => {
                failed.push(peer);
            });
            manager.internal.announcements!.announceOtaProvider = async () => {};
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await otaProvider.act(agent => {
            const manager = agent.get(SoftwareUpdateManager);
            if (options.targetSoftwareVersion !== undefined) {
                manager.internal.updateQueue[0].targetSoftwareVersion = options.targetSoftwareVersion;
            }
            manager.onOtaStatusChange(
                peerAddress,
                options.status ?? OtaUpdateStatus.Applying,
                targetSoftwareVersion,
                options.applyDelay,
            );
        });

        // Steps let the mock network deliver reports in between, so the subscription stays up
        const runFor = async (duration: Duration) => {
            for (let elapsed = 0; elapsed < duration; elapsed += Seconds(10)) {
                await MockTime.advance(Seconds(10));
                await MockTime.macrotasks;
            }
        };
        const queued = () => otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);

        const deadline = Time.nowMs + RebootResubscribeArmer.returnTimeout(options.applyDelay);
        const resubscribed = { afterDeadline: 0 };
        controller.peers
            .get("peer1")!
            .eventsOf(NetworkClient)
            .subscriptionStatusChanged.on(isActive => {
                if (isActive && Time.nowMs >= deadline) {
                    resubscribed.afterDeadline++;
                }
            });

        return { site, device, controller, peerAddress, failed, runFor, queued, resubscribed };
    }

    for (const { applyDelay, wait } of [
        { applyDelay: undefined, wait: Minutes(4) },
        { applyDelay: Minutes(2), wait: Minutes(6) },
    ]) {
        it(`fails an applied update when the node resubscribes with its previous version (apply delay ${Duration.format(applyDelay ?? 0)})`, async () => {
            const { site, failed, runFor } = await applyWithoutRestart({ applyDelay });
            await using _localSite = site;

            // The reboot armer forces a resubscription once it stops waiting for the restart
            await runFor(wait);

            expect(failed).length(1);
        }).timeout(10_000);
    }

    it("keeps an applied update when the node resubscribes at or above the target version", async () => {
        const { site, failed, runFor, queued, resubscribed } = await applyWithoutRestart({ targetSoftwareVersion: 0 });
        await using _localSite = site;

        await runFor(Minutes(4));

        expect(resubscribed.afterDeadline).greaterThan(0);
        expect(failed).length(0);
        expect(await queued()).length(1);
    }).timeout(10_000);

    for (const { when, applyDelay, before } of [
        { when: "before its restart deadline", applyDelay: undefined, before: Seconds(0) },
        { when: "during its apply delay", applyDelay: Minutes(30), before: Minutes(4) },
    ]) {
        it(`keeps an applied update while the controller resubscribes ${when}`, async () => {
            const { site, controller, peerAddress, failed, runFor, queued } = await applyWithoutRestart({ applyDelay });
            await using _localSite = site;
            let resubscribed = 0;
            controller.peers
                .get("peer1")!
                .eventsOf(NetworkClient)
                .subscriptionStatusChanged.on(isActive => {
                    if (isActive) {
                        resubscribed++;
                    }
                });

            await runFor(before);
            controller.env.get(ClientSubscriptions).closeForPeer(peerAddress);
            await runFor(Minutes(2));

            expect(resubscribed).greaterThan(0);
            expect(failed).length(0);
            expect(await queued()).length(1);
        }).timeout(10_000);
    }

    it("keeps an applied update when the node goes away as the restart deadline passes", async () => {
        const { site, device, failed, runFor, queued } = await applyWithoutRestart();
        await using _localSite = site;

        // Still subscribed when the reboot armer closes the subscription at the deadline, then unreachable
        await runFor(Seconds(170));
        await MockTime.resolve(device.stop());
        await runFor(Minutes(2));

        expect(failed).length(0);
        expect(await queued()).length(1);
    }).timeout(10_000);

    it("keeps an update that waits for its apply when the controller resubscribes", async () => {
        const { site, controller, peerAddress, failed, runFor, queued, resubscribed } = await applyWithoutRestart({
            status: OtaUpdateStatus.WaitForApply,
        });
        await using _localSite = site;

        await runFor(Minutes(4));
        controller.env.get(ClientSubscriptions).closeForPeer(peerAddress);
        await runFor(Minutes(2));

        expect(resubscribed.afterDeadline).greaterThan(0);
        expect(failed).length(0);
        expect(await queued()).length(1);
    }).timeout(10_000);

    it("skips the announcement while a BDX session for the node is active", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
            queryImage: false, // Should NOT be called — BDX active, announcement should be skipped
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
            announceOtaProvider: false, // Should NOT be called
        });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Each MockSite test has its own Environment, so the patched BdxProtocol is discarded with the site
        await otaProvider.act(agent => {
            const bdxProtocol = agent.get(SoftwareUpdateManager).env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer, scope) => {
                if (PeerAddress.is(peer, peerAddress)) {
                    return { peerAddress } as BdxSession | undefined; // fake active session
                }
                return originalSessionFor(peer, scope);
            };
        });

        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });
        await MockTime.macrotasks;

        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue.map(({ status }) => status)).deep.equals(["queued"]);
    }).timeout(10_000);

    it("A running BDX transfer keeps a long download out of the stalled state", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
            queryImage: false, // announcement is suppressed by the BDX guard, so the device never queries
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
            announceOtaProvider: false,
        });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const bdxSession = { peerAddress, transferredBytes: 0, dataLength: 6_000_000 };
        await otaProvider.act(agent => {
            const bdxProtocol = agent.get(SoftwareUpdateManager).env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer, scope) =>
                PeerAddress.is(peer, peerAddress)
                    ? (bdxSession as unknown as BdxSession)
                    : originalSessionFor(peer, scope);
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        // Simulate the state the download reaches: announced, image transfer running
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
        });

        // Well beyond the 15 minute progress timeout, with blocks arriving all the way
        for (let minutes = 0; minutes < 30; minutes += 5) {
            bdxSession.transferredBytes += 200_000;
            await MockTime.advance(Minutes(5));
        }

        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue).length(1);
        expect(queue[0].status).equals("in-progress");
        expect(queue[0].lastProgressStatus).equals(OtaUpdateStatus.Downloading);
        expect(queue[0].bdxTransferredBytes).equals(1_200_000);
        expect(queue[0].bdxDataLength).equals(6_000_000);

        // Blocks that arrive between two queue checks also count for the reported status
        await otaProvider.act(agent => {
            const { phase } = agent.get(SoftwareUpdateManager).internal.updateQueue[0];
            expect(phase.state).equals("progress");
            if (phase.state === "progress") {
                phase.since = Timestamp(MockTime.nowMs - Minutes(20));
            }
        });
        bdxSession.transferredBytes += 200_000;
        const polledQueue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(polledQueue[0].status).equals("in-progress");
    }).timeout(10_000);

    it("A retried BDX transfer counts as progress although its byte counter restarts", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
            queryImage: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
            announceOtaProvider: false,
        });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const bdxSession = { peerAddress, transferredBytes: 900_000, dataLength: 6_000_000 };
        await otaProvider.act(agent => {
            const bdxProtocol = agent.get(SoftwareUpdateManager).env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer, scope) =>
                PeerAddress.is(peer, peerAddress)
                    ? (bdxSession as unknown as BdxSession)
                    : originalSessionFor(peer, scope);
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
        });

        // The first attempt gets far enough for its counter to be recorded
        await MockTime.advance(Minutes(5));

        // It then fails and the requestor retries on a fresh session, which starts over. No status change reaches the
        // manager in between — the provider stops listening after the first session of a query cycle.
        bdxSession.transferredBytes = 0;
        for (let minutes = 0; minutes < 25; minutes += 5) {
            bdxSession.transferredBytes += 20_000;
            await MockTime.advance(Minutes(5));
        }

        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue).length(1);
        expect(queue[0].status).equals("in-progress");
        expect(queue[0].lastProgressStatus).equals(OtaUpdateStatus.Downloading);
    }).timeout(10_000);

    it("A running BDX transfer keeps its in-progress entry alive, including a session opened for a retry", async () => {
        const data = { expectedOtaImage: Bytes.fromHex("") };
        const { applyUpdatePromise, TestOtaRequestorServer } = InstrumentedOtaRequestorServer(
            { requestUserConsent: false },
            data,
        );
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({ requestUserConsentForUpdate: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { otaImage, vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        data.expectedOtaImage = Bytes.of(otaImage.image);

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const inProgressDetails = await otaProvider.act(
            agent => agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails,
        );

        // Write an aged timestamp from the first block and read it back a few blocks later: the entry carries a
        // fresh timestamp only if the blocks in between refreshed it.
        const agedTimestamp = Timestamp(MockTime.nowMs - Minutes(20));
        let blocks = 0;
        let timestampWhileTransferring: Timestamp | undefined;
        await otaProvider.act(agent => {
            agent
                .get(SoftwareUpdateManager)
                .env.get(BdxProtocol)
                .sessionStarted.on((bdxSession: BdxSession) =>
                    bdxSession.progressInfo.on(() => {
                        const details = [...inProgressDetails.values()][0];
                        if (details === undefined) {
                            return;
                        }
                        blocks++;
                        if (blocks === 1) {
                            details.timestamp = agedTimestamp;
                        } else if (blocks === 3) {
                            timestampWhileTransferring = details.timestamp;
                        }
                    }),
                );
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await MockTime.resolve(applyUpdatePromise);

        expect(blocks).greaterThan(3);
        expect(timestampWhileTransferring).greaterThan(agedTimestamp);

        // A failed attempt is retried on a fresh session within the same query cycle, so the provider must still be
        // listening after the first session of that cycle ended
        const retrySession = {
            peerAddress,
            progressInfo: Observable<[bytesTransferred: number, totalBytesLength: number | undefined]>(),
            progressFinished: Observable<[totalBytesTransferred: number]>(),
            progressCancelled: Observable(),
            closed: Observable(),
        };
        await otaProvider.act(agent => {
            const server = agent.get(OtaSoftwareUpdateProviderServer);
            agent
                .get(SoftwareUpdateManager)
                .env.get(BdxProtocol)
                .sessionStarted.emit(retrySession as unknown as BdxSession, server.updateStorage.scope);
        });

        const retryDetails = [...inProgressDetails.values()][0];
        expect(retryDetails?.lastState).equals(OtaUpdateStatus.Downloading);

        retryDetails!.timestamp = agedTimestamp;
        retrySession.progressInfo.emit(1024, 50_000);
        expect(retryDetails!.timestamp).greaterThan(agedTimestamp);
    }).timeout(10_000);

    // Guards against treating the mere existence of a BDX session as progress; a full revert of the activity check
    // also passes, since the entry then expires on the same tick.
    it("An open BDX session that never transfers a block does not count as progress", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
            queryImage: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
            announceOtaProvider: false,
        });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // A session whose transfer flow is not negotiated yet reports 0 transferred bytes
        const bdxSession = { peerAddress, transferredBytes: 0, dataLength: undefined };
        await otaProvider.act(agent => {
            const bdxProtocol = agent.get(SoftwareUpdateManager).env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer, scope) =>
                PeerAddress.is(peer, peerAddress)
                    ? (bdxSession as unknown as BdxSession)
                    : originalSessionFor(peer, scope);
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
        });

        // Just past the first timeout window — an open session must not have bought the entry another one
        await MockTime.advance(Minutes(22));

        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue).length(1);
        expect(queue[0].status).equals("queued");
        expect(queue[0].lastProgressStatus).equals(OtaUpdateStatus.Unknown);
    }).timeout(10_000);

    // Characterization test: passes against the unmodified baseline as well. It guards the reset path itself, not
    // the BDX activity check.
    it("A BDX transfer that stops moving data is reset for retry", async () => {
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
            queryImage: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({
            requestUserConsent: false,
            announceOtaProvider: false,
        });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        const bdxSession = { peerAddress, transferredBytes: 512_000, dataLength: 6_000_000 };
        await otaProvider.act(agent => {
            const bdxProtocol = agent.get(SoftwareUpdateManager).env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer, scope) =>
                PeerAddress.is(peer, peerAddress)
                    ? (bdxSession as unknown as BdxSession)
                    : originalSessionFor(peer, scope);
        });

        await otaProvider.act(agent =>
            agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion }),
        );

        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
        });

        // The session stays open but no block arrives anymore
        await MockTime.advance(Minutes(30));

        const queue = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).queuedUpdates);
        expect(queue).length(1);
        expect(queue[0].status).equals("queued");
        expect(queue[0].lastProgressStatus).equals(OtaUpdateStatus.Unknown);
    }).timeout(10_000);

    it("queryImage Case A: stale in-progress entry with no BDX session → cleared, fresh queryImage proceeds", async () => {
        // Case A: there is an in-progress entry in inProgressDetails but no active BDX session.
        // When queryImage is called, the stale entry should be cleared and processing proceeds fresh.
        // We verify by checking that the stale "aa" token entry is gone and a fresh entry exists.
        //
        // To avoid initiating a real BDX download (which would complicate teardown), the test
        // provider server intercepts queryImage: it runs super.queryImage() for side effects (Case A
        // logic clears the stale entry and creates a fresh one), then returns NotAvailable to the
        // device. The device sees NotAvailable → goes to Idle immediately, no BDX is started.

        const { promise: queryImagePromise, resolver: queryImageResolver } = createPromise<void>();

        // Custom provider server: runs super.queryImage() for side effects (Case A clears the stale
        // entry), resolves the test promise when done, then returns NotAvailable to suppress BDX.
        class CaseATestProviderServer extends OtaSoftwareUpdateProviderServer {
            override async queryImage(
                request: OtaSoftwareUpdateProvider.QueryImageRequest,
            ): Promise<OtaSoftwareUpdateProvider.QueryImageResponse> {
                // Run super.queryImage to trigger Case A logic (clear stale entry, create fresh entry)
                await super.queryImage(request);
                // Signal test that queryImage processing is complete
                queryImageResolver();
                // Return NotAvailable so the device does not initiate a BDX download
                return { status: OtaSoftwareUpdateProvider.Status.NotAvailable };
            }
        }

        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            CaseATestProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Pre-populate inProgressDetails with a "stale" entry (no active BDX, but recent timestamp so
        // it won't be auto-removed by #removeIfStale before queryImage runs) using a known "aa" token.
        // "Stale" in Case A terms means: entry exists but no matching BDX session.
        await otaProvider.act(agent => {
            const server = agent.get(OtaSoftwareUpdateProviderServer);
            const { fabricIndex, nodeId } = peerAddress;
            const key = `${nodeId}-${fabricIndex}-${"aa".repeat(32)}`;
            server.internal.inProgressDetails.set(key, {
                requestorNodeId: nodeId,
                fabricIndex,
                lastState: OtaUpdateStatus.Downloading,
                timestamp: (MockTime.nowMs + 3_600_000) as Timestamp, // 1h future offset so entry stays fresh when queryImage fires (~30-40 min later in mock time)
            });
        });

        // Verify the stale entry is there
        const entryCountBefore = await otaProvider.act(agent => {
            return agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size;
        });
        expect(entryCountBefore).equals(1);

        // No need to patch BdxProtocol.sessionFor — since there's no active OTA running, the real
        // BdxProtocol.sessionFor will naturally return undefined for this peer, triggering Case A:
        // stale in-progress entry with no active BDX session → cleared and proceed fresh.

        // Set up idlePromise BEFORE forceUpdate: resolves when device returns to Idle.
        // The device will call queryImage, get NotAvailable, and go to Idle immediately.
        // We wait for Idle before site teardown to ensure the updateQueryTimer is started before
        // node.close() stops it.
        const { promise: idlePromise, resolver: idleResolver } = createPromise<void>();
        peer1.endpoints
            .for(otaRequestor.number)
            .eventsOf(OtaSoftwareUpdateRequestorClient)
            .stateTransition.on((event: OtaSoftwareUpdateRequestor.StateTransitionEvent) => {
                if (event.newState === OtaSoftwareUpdateRequestor.UpdateState.Idle) {
                    idleResolver();
                }
            });

        // Trigger the OTA flow via forceUpdate → announcement → device calls queryImage
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Wait for queryImage to complete (provider ran Case A logic, returned NotAvailable)
        await MockTime.resolve(queryImagePromise);

        // The stale "aa" token entry should NOT be there — it was cleared by Case A logic
        const hasStaleEntry = await otaProvider.act(agent => {
            const server = agent.get(OtaSoftwareUpdateProviderServer);
            return [...server.internal.inProgressDetails.keys()].some(k => k.includes("aa".repeat(32)));
        });
        expect(hasStaleEntry).equals(false);

        // A fresh entry with a new (non-"aa") token should exist, confirming queryImage proceeded
        // past the Case A check and created a new inProgressDetails entry.
        const totalEntries = await otaProvider.act(agent => {
            return agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size;
        });
        expect(totalEntries).greaterThan(0);

        // Wait for the device to return to Idle (fast: queryImage returned NotAvailable).
        // This ensures the updateQueryTimer is running before node.close() stops it cleanly.
        await MockTime.resolve(idlePromise);
    }).timeout(10_000);

    it("queryImage Case B: reboot detected (different session, older BDX timestamp) → BDX cancelled, entry cleared, startUp suppressed, UpdateAvailable", async () => {
        // Case B: there is an in-progress entry AND an active BDX session, but the incoming queryImage
        // session is from a different (newer) session — indicating the device has rebooted mid-transfer.
        // Expected behaviour:
        //   - The old BDX session is cancelled (disablePeerForScope called)
        //   - The in-progress entry is removed
        //   - suppressNextStartUp is registered for the peer (pendingStartUpSuppress has the entry)
        //   - queryImage proceeds fresh → returns UpdateAvailable (not Busy)
        //
        // Implementation note: super.queryImage() handles Case B internally. The custom subclass
        // captures the return value to assert UpdateAvailable, then returns NotAvailable to the
        // device so no real BDX download is initiated (keeps teardown simple).

        const { promise: queryImageResultPromise, resolver: queryImageResultResolver } =
            createPromise<OtaSoftwareUpdateProvider.QueryImageResponse>();

        class CaseBTestProviderServer extends OtaSoftwareUpdateProviderServer {
            override async queryImage(
                request: OtaSoftwareUpdateProvider.QueryImageRequest,
            ): Promise<OtaSoftwareUpdateProvider.QueryImageResponse> {
                // Run super.queryImage to trigger Case B logic
                const result = await super.queryImage(request);
                // Signal test with the actual result (should be UpdateAvailable, not Busy)
                queryImageResultResolver(result);
                // Return NotAvailable so the device does not initiate a BDX download
                return { status: OtaSoftwareUpdateProvider.Status.NotAvailable };
            }
        }

        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider, otaRequestor } = await initOtaSite(
            CaseBTestProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Pre-populate inProgressDetails with a "cc" token entry (simulates a prior download that
        // was interrupted by a device reboot).
        await otaProvider.act(agent => {
            const server = agent.get(OtaSoftwareUpdateProviderServer);
            const { fabricIndex, nodeId } = peerAddress;
            const key = `${nodeId}-${fabricIndex}-${"cc".repeat(32)}`;
            server.internal.inProgressDetails.set(key, {
                requestorNodeId: nodeId,
                fabricIndex,
                lastState: OtaUpdateStatus.Downloading,
                timestamp: (MockTime.nowMs + 3_600_000) as Timestamp, // 1h future offset so entry stays fresh when queryImage fires (~30-40 min later in mock time)
            });
        });

        // Verify the in-progress entry is there before queryImage
        const entryCountBefore = await otaProvider.act(agent => {
            return agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size;
        });
        expect(entryCountBefore).equals(1);

        // Patch BdxProtocol.sessionFor to return a fake BDX session that appears to be from an
        // OLDER session. The real queryImage session will have a newer activeTimestamp, and a
        // different sessionId → triggers Case B.
        //
        // BDX_FAKE_SESSION_ID uses a high value (0xDEAD) to avoid colliding with real session IDs
        // assigned by the protocol stack in these tests.
        const BDX_FAKE_SESSION_ID = 0xdead;
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const bdxProtocol = su.env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer: any, scope: any) => {
                if (PeerAddress.is(peer, peerAddress)) {
                    return {
                        peerAddress,
                        session: {
                            id: BDX_FAKE_SESSION_ID,
                            activeTimestamp: 0 as Timestamp, // epoch zero → always older than any live session
                        },
                    } as any;
                }
                return originalSessionFor(peer, scope);
            };
        });

        // Set up idlePromise BEFORE forceUpdate: resolves when device returns to Idle.
        // The device will call queryImage, Case B fires, then we return NotAvailable → Idle immediately.
        const { promise: idlePromise, resolver: idleResolver } = createPromise<void>();
        peer1.endpoints
            .for(otaRequestor.number)
            .eventsOf(OtaSoftwareUpdateRequestorClient)
            .stateTransition.on((event: OtaSoftwareUpdateRequestor.StateTransitionEvent) => {
                if (event.newState === OtaSoftwareUpdateRequestor.UpdateState.Idle) {
                    idleResolver();
                }
            });

        // Trigger the OTA flow via forceUpdate → announcement → device calls queryImage
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .forceUpdate(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Wait for queryImage to complete (provider ran Case B logic, returned NotAvailable to device)
        const queryImageResult = await MockTime.resolve(queryImageResultPromise);

        // Case B should NOT return Busy — it falls through to normal processing → UpdateAvailable
        expect(queryImageResult.status).equals(OtaSoftwareUpdateProvider.Status.UpdateAvailable);

        // The "cc" token entry should have been removed by Case B logic
        const hasCcEntry = await otaProvider.act(agent => {
            return [...agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.keys()].some(k =>
                k.includes("cc".repeat(32)),
            );
        });
        expect(hasCcEntry).equals(false);

        // suppressNextStartUp should have been registered: pendingStartUpSuppress must contain the peer
        const hasSuppressEntry = await otaProvider.act(agent => {
            return agent.get(SoftwareUpdateManager).internal.pendingStartUpSuppress.has(peerAddress);
        });
        expect(hasSuppressEntry).equals(true);

        // Wait for the device to return to Idle (fast: queryImage returned NotAvailable)
        await MockTime.resolve(idlePromise);
    }).timeout(10_000);

    it("queryImage Case C: in-progress with active BDX session → in-progress state preserved when BDX active", async () => {
        // Case C: there is an in-progress entry AND an active BDX session that is newer than any
        // incoming queryImage session. The entry should NOT be cleared (it's a genuine in-progress).
        // We verify state directly since we cannot invoke queryImage without a full protocol session.
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, controller, otaProvider } = await initOtaSite(TestOtaProviderServer, TestOtaRequestorServer);
        await using _localSite = site;

        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Add a fresh in-progress entry (simulating an ongoing download with a known "bb" token)
        await otaProvider.act(agent => {
            const server = agent.get(OtaSoftwareUpdateProviderServer);
            const { fabricIndex, nodeId } = peerAddress;
            const key = `${nodeId}-${fabricIndex}-${"bb".repeat(32)}`;
            server.internal.inProgressDetails.set(key, {
                requestorNodeId: nodeId,
                fabricIndex,
                lastState: OtaUpdateStatus.Downloading,
                timestamp: MockTime.nowMs as Timestamp,
            });
        });

        // Patch BdxProtocol.sessionFor to return an active fake session that is "newer" than any
        // incoming queryImage invocation (Case C: BDX is more recent → Busy)
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const bdxProtocol = su.env.get(BdxProtocol);
            const originalSessionFor = bdxProtocol.sessionFor.bind(bdxProtocol);
            bdxProtocol.sessionFor = (peer: any, scope: any) => {
                if (PeerAddress.is(peer, peerAddress)) {
                    return {
                        peerAddress,
                        session: {
                            id: 42,
                            activeTimestamp: (MockTime.nowUs + 10000) as Timestamp, // newer than any live session → Case C
                        },
                    } as any;
                }
                return originalSessionFor(peer, scope);
            };
        });

        // The in-progress entry should still be present (not cleared, since no queryImage was called)
        const entryCount = await otaProvider.act(agent => {
            return agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size;
        });
        expect(entryCount).equals(1);
        expect(
            await otaProvider.act(agent => {
                return [...agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.values()][0]
                    ?.lastState;
            }),
        ).equals(OtaUpdateStatus.Downloading);

        // The "bb" key entry must still be there (Case C preserves it)
        const hasBbEntry = await otaProvider.act(agent => {
            return [...agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.keys()].some(k =>
                k.includes("bb".repeat(32)),
            );
        });
        expect(hasBbEntry).equals(true);
    }).timeout(10_000);

    it("suppressNextStartUp: suppresses startUp on matching session ID", async () => {
        // When suppressNextStartUp is called with a fake session ID, and SessionManager is patched
        // to return that same fake session ID for the peer, the next startUp event should be suppressed.
        // This simulates the real-world flow where queryImage fires before startUp on the same session.
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Queue an update so #onSoftwareVersionChanged has a queue entry to process
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Set entry to WaitForApply state (so startUp would normally trigger updateFailed if NOT suppressed)
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const entry = su.internal.updateQueue[0];
            entry.phase = { state: "progress", status: OtaUpdateStatus.WaitForApply, since: Time.nowMs };
        });

        const updateFailedEvents: PeerAddress[] = [];
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).events.updateFailed.on(peer => {
                updateFailedEvents.push(peer);
            });
        });

        // Patch SessionManager.maybeSessionFor to return a fake session with id=42 for peerAddress.
        // This patch must be in place BEFORE device.start() so that when startUp fires (during start),
        // the session check in #onSoftwareVersionChanged sees id=42.
        const FAKE_SESSION_ID = 42;
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const sessionManager = su.env.get(SessionManager);
            const originalMaybeSessionFor = sessionManager.maybeSessionFor.bind(sessionManager);
            sessionManager.maybeSessionFor = (addr: any) => {
                if (PeerAddress.is(addr, peerAddress)) {
                    return { id: FAKE_SESSION_ID } as any;
                }
                return originalMaybeSessionFor(addr);
            };
        });

        // Flush any deferred startUp deliveries that addUpdateConsent's announceOtaProvider flow may
        // have queued — they would otherwise consume the suppression entry before the real restart.
        await MockTime.macrotasks;

        // Register the suppression with the fake ID — BEFORE device restarts.
        // The startUp fires during device.start(), and at that point the patched maybeSessionFor
        // returns id=42, which matches the suppressed id=42 → suppress!
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).suppressNextStartUp(peerAddress, FAKE_SESSION_ID);
        });

        // Await teardown and re-prime on the sustained subscription — the startUp handler only runs
        // once the priming report delivers the buffered event.
        const subscription = peer1.behaviors.internalsOf(NetworkClient).activeSubscription!;
        expect(subscription).not.undefined;
        SustainedSubscription.assert(subscription);

        // Restart the device with the same (old) version — this fires startUp
        await MockTime.resolve(device.stop());
        await MockTime.resolve(subscription.inactive);
        await MockTime.resolve(device.start());
        await MockTime.resolve(subscription.active);
        await MockTime.macrotasks;

        // startUp should have been suppressed — no updateFailed event
        expect(updateFailedEvents).length(0);

        // The suppression entry should be consumed (deleted by the startUp handler)
        const hasSuppressedAfter = await otaProvider.act(agent => {
            return agent.get(SoftwareUpdateManager).internal.pendingStartUpSuppress.has(peerAddress);
        });
        expect(hasSuppressedAfter).equals(false);
    }).timeout(10_000);

    it("suppressNextStartUp: different session ID does NOT suppress startUp", async () => {
        // When suppressNextStartUp is called with a WRONG session ID (one that doesn't match what
        // maybeSessionFor returns), the startUp event should NOT be suppressed.
        const { TestOtaProviderServer } = InstrumentedOtaProviderServer({
            requestUserConsentForUpdate: false,
        });
        const { TestOtaRequestorServer } = InstrumentedOtaRequestorServer({ requestUserConsent: false });

        const { site, device, controller, otaProvider } = await initOtaSite(
            TestOtaProviderServer,
            TestOtaRequestorServer,
        );
        await using _localSite = site;

        const { vendorId, productId, targetSoftwareVersion } = await addTestOtaImage(device, controller);
        const peer1 = controller.peers.get("peer1")!;
        const peerAddress = peer1.state.commissioning.peerAddress!;

        // Queue an update
        await otaProvider.act(agent => {
            return agent
                .get(SoftwareUpdateManager)
                .addUpdateConsent(peerAddress, { vendorId: VendorId(vendorId), productId, targetSoftwareVersion });
        });

        // Set to Applying state
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const entry = su.internal.updateQueue[0];
            entry.phase = { state: "progress", status: OtaUpdateStatus.Applying, since: Time.nowMs };
        });

        const updateFailedEvents: PeerAddress[] = [];
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).events.updateFailed.on(peer => {
                updateFailedEvents.push(peer);
            });
        });

        // Patch SessionManager.maybeSessionFor to return a session with id=77
        const REAL_SESSION_ID = 77;
        await otaProvider.act(agent => {
            const su = agent.get(SoftwareUpdateManager);
            const sessionManager = su.env.get(SessionManager);
            const originalMaybeSessionFor = sessionManager.maybeSessionFor.bind(sessionManager);
            sessionManager.maybeSessionFor = (addr: any) => {
                if (PeerAddress.is(addr, peerAddress)) {
                    return { id: REAL_SESSION_ID } as any;
                }
                return originalMaybeSessionFor(addr);
            };
        });

        // Flush any deferred startUp deliveries that addUpdateConsent's announceOtaProvider flow may
        // have queued — they would otherwise consume the suppression entry and emit a spurious
        // updateFailed before the real restart.
        await MockTime.macrotasks;

        // Suppress with a WRONG ID — 999 ≠ 77
        const WRONG_SESSION_ID = 999;
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).suppressNextStartUp(peerAddress, WRONG_SESSION_ID);
        });

        // Await teardown and re-prime on the sustained subscription — the startUp handler only runs
        // once the priming report delivers the buffered event.
        const subscription = peer1.behaviors.internalsOf(NetworkClient).activeSubscription!;
        expect(subscription).not.undefined;
        SustainedSubscription.assert(subscription);

        // Restart the device (same old version = apply failed scenario)
        await MockTime.resolve(device.stop());
        await MockTime.resolve(subscription.inactive);
        await MockTime.resolve(device.start());
        await MockTime.resolve(subscription.active);
        await MockTime.macrotasks;

        // The session IDs don't match (77 ≠ 999) → suppression NOT applied → updateFailed should fire
        expect(updateFailedEvents).length(1);

        // The suppression entry should be consumed (even though it didn't suppress)
        const hasSuppressedAfter = await otaProvider.act(agent => {
            return agent.get(SoftwareUpdateManager).internal.pendingStartUpSuppress.has(peerAddress);
        });
        expect(hasSuppressedAfter).equals(false);
    }).timeout(10_000);

    it("Cleanup purges stored test-mode OTA when allowTestOtaImages is disabled, preserves prod/local", async () => {
        // Device intentionally has no OTA requestor, so it is not an update target: the periodic check offers
        // nothing and #cleanupObsoleteUpdates is exercised in isolation.
        const site = new MockSite();
        const { controller, device } = await site.addCommissionedPair({
            controller: {
                type: ServerNode.RootEndpoint,
                parts: [{ id: "ota-provider", type: OtaProviderEndpoint }],
            },
        });
        await using _localSite = site;

        const otaProvider = controller.parts.get("ota-provider")!;
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).state.allowTestOtaImages = true;
        });

        // Store a test-mode OTA image via the helper (matches device vid/pid, version = peer + 1).
        const { otaImage } = await addTestOtaImage(device, controller);

        // Store prod-mode and local-mode copies of the same image so we can assert they survive cleanup.
        await otaProvider.act(async agent => {
            const svc = agent.get(SoftwareUpdateManager).internal.otaService;
            await svc.store(streamFromBytes(Bytes.of(otaImage.image)), otaImage.updateInfo, true /* prod */);
            await svc.store(streamFromBytes(Bytes.of(otaImage.image)), otaImage.updateInfo, "local");
        });

        const before = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).internal.otaService.find({}));
        expect(before.filter(u => u.mode === "test")).length(1);
        expect(before.filter(u => u.mode === "prod")).length(1);
        expect(before.filter(u => u.mode === "local")).length(1);

        // Disable test OTA usage: the check must purge the stored test-mode file.
        await otaProvider.act(agent => {
            agent.get(SoftwareUpdateManager).state.allowTestOtaImages = false;
        });

        // The periodic timer normally triggers this; invoke it directly so cleanup completes deterministically.
        await otaProvider.act(agent => agent.get(SoftwareUpdateManager).checkForUpdates());

        const after = await otaProvider.act(agent => agent.get(SoftwareUpdateManager).internal.otaService.find({}));
        expect(after.filter(u => u.mode === "test")).length(0);
        expect(after.filter(u => u.mode === "prod")).length(1);
        expect(after.filter(u => u.mode === "local")).length(1);
    }).timeout(15_000);

    describe("with test-net DCL images disabled", () => {
        async function initSiteWithoutTestImages({
            grantUserConsent,
            rewriteApplyUpdateRequest,
            beforeApplyUpdateRequest,
            declineUpdates,
            requireConsent,
            localConfigDisabled,
            delegateConsent,
            grantConsentAfterStop,
        }: {
            grantUserConsent?: boolean;
            rewriteApplyUpdateRequest?: (
                request: OtaSoftwareUpdateProvider.ApplyUpdateRequest,
            ) => OtaSoftwareUpdateProvider.ApplyUpdateRequest;
            beforeApplyUpdateRequest?: (agent: Agent) => MaybePromise<void>;
            /** Overrides `checkUpdateAvailable()` to find nothing. */
            declineUpdates?: boolean;
            /** Overrides `checkUpdateAvailable()` to mark every offer as needing consent. */
            requireConsent?: boolean;
            localConfigDisabled?: boolean;
            /** Sets `delegateConsentToRequestor`. */
            delegateConsent?: boolean;
            /** With `requireConsent`, the consent is granted only after the manager stopped the peer's update. */
            grantConsentAfterStop?: boolean;
        } = {}) {
            const data = { expectedOtaImage: Bytes.fromHex(""), expectedSoftwareVersion: 1, grantUserConsent };
            const requestor = InstrumentedOtaRequestorServer({ requestUserConsent: grantUserConsent ?? false }, data);
            const provider = InstrumentedOtaProviderServer(
                { requestUserConsentForUpdate: false },
                { rewriteApplyUpdateRequest, beforeApplyUpdateRequest },
            );
            class DecliningOtaProviderServer extends provider.TestOtaProviderServer {
                protected override checkUpdateAvailable() {
                    return undefined;
                }
            }
            class ConsentRequiringOtaProviderServer extends provider.TestOtaProviderServer {
                protected override async checkUpdateAvailable(
                    request: OtaSoftwareUpdateProvider.QueryImageRequest,
                    peerAddress: PeerAddress,
                ) {
                    const details = await super.checkUpdateAvailable(request, peerAddress);
                    return details && { ...details, consentRequired: true };
                }
            }
            class LateConsentOtaProviderServer extends ConsentRequiringOtaProviderServer {
                protected override requestUserConsentForUpdate(
                    _request: OtaSoftwareUpdateProvider.QueryImageRequest,
                    _updateDetails: unknown,
                    peerAddress: PeerAddress,
                ) {
                    this.agent.get(SoftwareUpdateManager).internal.updateStopped.emit(peerAddress);
                    return { consentState: OtaSoftwareUpdateConsentState.Granted };
                }
            }
            const ota = await initOtaSite(
                declineUpdates
                    ? DecliningOtaProviderServer
                    : requireConsent
                      ? grantConsentAfterStop
                          ? LateConsentOtaProviderServer
                          : ConsentRequiringOtaProviderServer
                      : provider.TestOtaProviderServer,
                requestor.TestOtaRequestorServer,
                { localConfigDisabled },
            );
            await ota.otaProvider.act(agent => {
                const { state } = agent.get(SoftwareUpdateManager);
                state.allowTestOtaImages = false;
                state.delegateConsentToRequestor = delegateConsent ?? false;
            });
            const peerAddress = ota.controller.peers.get("peer1")!.state.commissioning.peerAddress!;
            const { vendorId, productId, softwareVersion } = ota.device.state.basicInformation;

            /** Stores an image the device can apply from its current version; `seed` tells images of one version apart. */
            async function storeImage(
                targetSoftwareVersion: number,
                mode: OtaStorageMode,
                seed = targetSoftwareVersion,
            ) {
                const otaImage = await createTestOtaImage(new StandardCrypto(), {
                    vendorId,
                    productId,
                    softwareVersion: targetSoftwareVersion,
                    maxApplicableSoftwareVersion: softwareVersion,
                    payload: generateTestPayload(50 * 1024, seed),
                });
                await storeOtaImage(ota.controller, otaImage, mode);
                return otaImage;
            }

            /** Sets the image the device must receive when it applies an update. */
            function expectImage(otaImage: TestOtaImageResult) {
                data.expectedOtaImage = Bytes.of(otaImage.image);
                data.expectedSoftwareVersion = otaImage.updateInfo.softwareVersion;
            }

            /** Lets the device download and apply the image it is offered, and checks what the provider answered. */
            async function expectApplied(otaImage: TestOtaImageResult) {
                expectImage(otaImage);
                await MockTime.resolve(requestor.applyUpdatePromise);
                expect(
                    provider.queryImageResponses.map(({ status, softwareVersion }) => ({ status, softwareVersion })),
                ).deep.equals([
                    {
                        status: OtaSoftwareUpdateProvider.Status.UpdateAvailable,
                        softwareVersion: otaImage.updateInfo.softwareVersion,
                    },
                ]);
            }

            async function queryUpdates() {
                return await ota.otaProvider.act(async agent => {
                    const manager = agent.get(SoftwareUpdateManager);
                    const offered = new Array<{ softwareVersion: number; source?: OtaUpdateSource }>();
                    manager.events.updateAvailable.on((_peer, { softwareVersion, source }) => {
                        offered.push({ softwareVersion, source });
                    });
                    await manager.queryUpdates({ includeStoredUpdates: true });
                    return offered;
                });
            }

            /**
             * Records the requestor endpoints the update queue announces to.  `replace` may answer an attempt (counted
             * from 1) instead of the device; any other attempt reaches the device.
             */
            async function interceptAnnouncements(
                replace: (attempt: number, abort?: AbortSignal) => Promise<void> | undefined = () => undefined,
            ) {
                const attempts = new Array<Endpoint>();
                await ota.otaProvider.act(agent => {
                    const announcements = agent.get(SoftwareUpdateManager).internal.announcements!;
                    const announceOtaProvider = announcements.announceOtaProvider.bind(announcements);
                    announcements.announceOtaProvider = async (endpoint, reason, abort) => {
                        attempts.push(endpoint);
                        return replace(attempts.length, abort) ?? announceOtaProvider(endpoint, reason, abort);
                    };
                });
                return attempts;
            }

            /** What the manager offers the device for a QueryImage with `RequestorCanConsent`, without a consent. */
            function offerToRequestorThatCanConsent() {
                return ota.otaProvider.act(agent =>
                    agent.get(SoftwareUpdateManager).updateExistsFor(peerAddress, {
                        vendorId,
                        productId,
                        softwareVersion,
                        protocolsSupported: [OtaSoftwareUpdateProvider.DownloadProtocol.BdxSynchronous],
                        requestorCanConsent: true,
                    }),
                );
            }

            function queueSnapshot() {
                return ota.otaProvider.act(agent =>
                    agent
                        .get(SoftwareUpdateManager)
                        .queuedUpdates.map(({ targetSoftwareVersion, status, lastProgressStatus }) => ({
                            targetSoftwareVersion,
                            status,
                            lastProgressStatus,
                        })),
                );
            }

            function forceUpdate(targetSoftwareVersion: number) {
                return ota.otaProvider.act(agent =>
                    agent.get(SoftwareUpdateManager).forceUpdate(peerAddress, {
                        vendorId: VendorId(vendorId),
                        productId,
                        targetSoftwareVersion,
                    }),
                );
            }

            return {
                ...ota,
                requestor,
                provider,
                peerAddress,
                storeImage,
                expectImage,
                expectApplied,
                queryUpdates,
                interceptAnnouncements,
                offerToRequestorThatCanConsent,
                queueSnapshot,
                forceUpdate,
            };
        }

        it("offers neither a stored local nor a stored test-net image", async () => {
            const {
                site,
                otaProvider,
                provider,
                storeImage,
                queryUpdates,
                offerToRequestorThatCanConsent,
                forceUpdate,
            } = await initSiteWithoutTestImages({ delegateConsent: true });
            await using _localSite = site;

            await storeImage(1, "local");
            await storeImage(2, "test");

            expect(await queryUpdates()).deep.equals([]);
            expect(await offerToRequestorThatCanConsent()).undefined;

            const { promise: failed, resolver: failedResolver } = createPromise<void>();
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).events.updateFailed.once(() => failedResolver());
            });
            await forceUpdate(1);
            await MockTime.resolve(failed);
            expect(provider.queryImageResponses.map(({ status }) => status)).deep.equals([
                OtaSoftwareUpdateProvider.Status.NotAvailable,
            ]);
        }).timeout(10_000);

        it("offers a stored production image, not a newer stored local image", async () => {
            const { site, storeImage, expectApplied, queryUpdates, forceUpdate } = await initSiteWithoutTestImages();
            await using _localSite = site;

            const prod = await storeImage(1, "prod");
            await storeImage(2, "local");

            expect(await queryUpdates()).deep.equals([{ softwareVersion: 1, source: "dcl-prod" }]);

            await forceUpdate(1);
            await expectApplied(prod);
        }).timeout(10_000);

        it("offers and transfers a stored local image once test images are enabled", async () => {
            const { site, otaProvider, storeImage, expectApplied, queryUpdates, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.allowTestOtaImages = true;
            });

            await storeImage(1, "prod");
            const local = await storeImage(2, "local");

            expect(await queryUpdates()).deep.equals([{ softwareVersion: 2, source: "local" }]);

            await forceUpdate(2);
            await expectApplied(local);
        }).timeout(10_000);

        it("offers a stored local image over an older version on the production DCL once test images are enabled", async () => {
            const { site, device, otaProvider, storeImage, expectApplied, queryUpdates, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.allowTestOtaImages = true;
            });

            const { vendorId, productId } = device.state.basicInformation;
            const versionsPath = `on\\.dcl\\.csa-iot\\.org/dcl/model/versions/${vendorId}/${productId}`;
            fetchMock.addResponse(new RegExp(`${versionsPath}$`), {
                modelVersions: { vid: vendorId, pid: productId, softwareVersions: [1], schemaVersion: 0 },
            });
            fetchMock.addResponse(new RegExp(`${versionsPath}/1$`), {
                modelVersion: {
                    vid: vendorId,
                    pid: productId,
                    softwareVersion: 1,
                    softwareVersionString: "v1.0.0",
                    cdVersionNumber: 1,
                    creator: "cosmos1test",
                    firmwareInformation: "",
                    softwareVersionValid: true,
                    otaUrl: "https://example.com/ota-v1.bin",
                    otaFileSize: "1024",
                    otaChecksum: "checksum123",
                    otaChecksumType: 1,
                    minApplicableSoftwareVersion: 0,
                    maxApplicableSoftwareVersion: 0,
                    releaseNotesUrl: "",
                    specificationVersion: 0,
                    schemaVersion: 0,
                },
            });

            const local = await storeImage(2, "local");

            // Characterization: the update check alone prefers the local image here
            expect(await queryUpdates()).deep.equals([{ softwareVersion: 2, source: "local" }]);
            expect(fetchMock.getCallLog().map(({ url }) => url)).not.include("https://example.com/ota-v1.bin");

            await forceUpdate(2);
            await expectApplied(local);
        }).timeout(10_000);

        it("offers no image at the version the device already runs", async () => {
            const { site, device, otaProvider, peerAddress, storeImage, queryUpdates } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const { softwareVersion, vendorId, productId } = device.state.basicInformation;
            await storeImage(softwareVersion, "prod");

            expect(await queryUpdates()).deep.equals([]);
            const offered = await otaProvider.act(agent =>
                agent.get(SoftwareUpdateManager).updateExistsFor(peerAddress, {
                    vendorId: VendorId(vendorId),
                    productId,
                    softwareVersion,
                    protocolsSupported: [OtaSoftwareUpdateProvider.DownloadProtocol.BdxSynchronous],
                    requestorCanConsent: true,
                }),
            );
            expect(offered).undefined;
        }).timeout(10_000);

        it("offers a stored test-net image over a stored production image of the same version once enabled", async () => {
            const { site, otaProvider, storeImage, expectApplied, queryUpdates, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.allowTestOtaImages = true;
            });

            await storeImage(1, "prod", 0x10);
            const test = await storeImage(1, "test", 0x30);

            expect(await queryUpdates()).deep.equals([{ softwareVersion: 1, source: "dcl-test" }]);

            await forceUpdate(1);
            await expectApplied(test);
        }).timeout(10_000);

        it("offers a stored local image over a stored production image of the same version once test images are enabled", async () => {
            const { site, otaProvider, storeImage, expectApplied, queryUpdates, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.allowTestOtaImages = true;
            });

            await storeImage(1, "prod", 0x10);
            const local = await storeImage(1, "local", 0x20);

            expect(await queryUpdates()).deep.equals([{ softwareVersion: 1, source: "local" }]);

            await forceUpdate(1);
            await expectApplied(local);
        }).timeout(10_000);

        it("answers not available and fails the queued update when the consented version is not stored", async () => {
            const {
                site,
                otaProvider,
                requestor,
                provider,
                peerAddress,
                storeImage,
                interceptAnnouncements,
                forceUpdate,
            } = await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            const otherPeer = PeerAddress({ fabricIndex: peerAddress.fabricIndex, nodeId: NodeId(0xfffe) });
            const announced = await interceptAnnouncements(attempt => (attempt > 1 ? Promise.resolve() : undefined));
            const { promise: failed, resolver: failedResolver } = createPromise<void>();
            await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                manager.events.updateFailed.once(() => failedResolver());
                manager.internal.updateQueue.push({
                    vendorId: VendorId(0xfff1),
                    productId: 0x8000,
                    targetSoftwareVersion: 1,
                    peerAddress: otherPeer,
                    endpoint: agent.endpoint,
                    phase: { state: "queued", resetAt: Time.nowMs },
                });
            });

            await forceUpdate(2);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).internal.pendingStartUpSuppress.set(peerAddress, 1);
            });
            await MockTime.resolve(failed);
            expect(provider.queryImageResponses.map(({ status }) => status)).deep.equals([
                OtaSoftwareUpdateProvider.Status.NotAvailable,
            ]);
            const { queued, suppressed } = await otaProvider.act(agent => {
                const { updateQueue, pendingStartUpSuppress } = agent.get(SoftwareUpdateManager).internal;
                return {
                    queued: updateQueue.map(({ peerAddress, phase }) => [peerAddress.nodeId, phase.state]),
                    suppressed: pendingStartUpSuppress.has(peerAddress),
                };
            });
            expect({ queued, suppressed }).deep.equals({
                queued: [
                    [peerAddress.nodeId, "failed"],
                    [otherPeer.nodeId, "announced"],
                ],
                suppressed: false,
            });
            expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).hasConsent(peerAddress, 2))).true;
            // The next queued node is started once the update failed
            expect(announced.map(endpoint => (endpoint === otaProvider ? "other node" : "device"))).deep.equals([
                "device",
                "other node",
            ]);

            await MockTime.advance(Hours(1));
            expect(requestor.announceOtaProviderRequests).length(1);
        }).timeout(10_000);

        it("keeps an applying update when not available is reported for its device with the old version", async () => {
            const { site, otaProvider, peerAddress, storeImage, expectApplied, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const image = await storeImage(1, "prod");
            await forceUpdate(1);
            await expectApplied(image);

            const { queued, failed } = await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                let failed = false;
                manager.events.updateFailed.once(() => {
                    failed = true;
                });
                manager.dropUndeliverableUpdate(peerAddress, 0);
                return { queued: manager.internal.updateQueue.length, failed };
            });
            expect({ queued, failed }).deep.equals({ queued: 1, failed: false });
        }).timeout(10_000);

        it("fails a queued update on not available only while it waits for the query of a device below its target", async () => {
            const { site, otaProvider, peerAddress } = await initSiteWithoutTestImages();
            await using _localSite = site;

            const announced = { state: "announced", since: Time.nowMs } as const;
            const cases: { phase: () => UpdatePhase; reportedSoftwareVersion: number; failed: boolean }[] = [
                { phase: () => announced, reportedSoftwareVersion: 0, failed: true },
                // The device may query before the announcement returns
                {
                    phase: () => ({ state: "announcing" }),
                    reportedSoftwareVersion: 0,
                    failed: true,
                },
                // The device already runs the target, as after a slow restart into it
                { phase: () => announced, reportedSoftwareVersion: 2, failed: false },
                // Not announced yet, so the query was not an answer to this entry
                { phase: () => ({ state: "queued", resetAt: Time.nowMs }), reportedSoftwareVersion: 0, failed: false },
                {
                    phase: () => ({ state: "progress", status: OtaUpdateStatus.Downloading, since: Time.nowMs }),
                    reportedSoftwareVersion: 0,
                    failed: false,
                },
            ];
            const results = await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                manager.internal.suppressUpdates = true; // Keep the queue from announcing the crafted entries
                return cases.map(({ phase, reportedSoftwareVersion }) => {
                    manager.internal.updateQueue = [
                        {
                            vendorId: VendorId(0xfff1),
                            productId: 0x8000,
                            targetSoftwareVersion: 2,
                            peerAddress,
                            endpoint: agent.endpoint,
                            phase: phase(),
                        },
                    ];
                    manager.dropUndeliverableUpdate(peerAddress, reportedSoftwareVersion);
                    return manager.internal.updateQueue[0].phase.state === "failed";
                });
            });
            expect(results).deep.equals(cases.map(({ failed }) => failed));
        }).timeout(10_000);

        /** Queues an update to `targetSoftwareVersion` that the device is never announced for, and fails it. */
        async function failUpdateTo(
            {
                otaProvider,
                peerAddress,
                interceptAnnouncements,
                forceUpdate,
            }: Awaited<ReturnType<typeof initSiteWithoutTestImages>>,
            targetSoftwareVersion: number,
        ) {
            const announced = await interceptAnnouncements(() => Promise.resolve());
            await forceUpdate(targetSoftwareVersion);
            await MockTime.advance(Seconds(1));
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).dropUndeliverableUpdate(peerAddress, 0);
            });
            return announced;
        }

        it("lets the device apply a failed update when it queries on its own, without announcing it again", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, controller, otaProvider, otaRequestor, peerAddress, storeImage, expectApplied } = ota;
            await using _localSite = site;

            const image = await storeImage(1, "prod");
            const announced = await failUpdateTo(ota, 1);
            await MockTime.advance(Hours(1));
            expect(announced).length(1);

            // As the device's own query after a restart, which the device sends without an announcement
            await MockTime.resolve(
                otaProvider.act(agent =>
                    agent
                        .get(SoftwareUpdateManager)
                        .internal.announcements!.announceOtaProvider(
                            controller.peers.get("peer1")!.endpoints.for(otaRequestor.number),
                            OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                        ),
                ),
            );
            await expectApplied(image);
            expect(
                await otaProvider.act(agent =>
                    agent.get(SoftwareUpdateManager).internal.updateQueue.map(({ peerAddress, phase }) => ({
                        nodeId: peerAddress.nodeId,
                        state: phase.state,
                    })),
                ),
            ).deep.equals([{ nodeId: peerAddress.nodeId, state: "progress" }]);
        }).timeout(10_000);

        it("drops a failed update with its consent 24 hours after it failed", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            const stateOf = () =>
                otaProvider.act(agent => {
                    const manager = agent.get(SoftwareUpdateManager);
                    return { consent: manager.hasConsent(peerAddress, 1), queued: manager.internal.updateQueue.length };
                });

            await MockTime.advance(Hours(23));
            expect(await stateOf()).deep.equals({ consent: true, queued: 1 });
            await MockTime.advance(Hours(2));
            expect(await stateOf()).deep.equals({ consent: false, queued: 0 });
        }).timeout(10_000);

        it("does not announce a failed update again when the update the node revived is reset", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            const announced = await failUpdateTo(ota, 1);
            const phases = await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                const phaseOf = () => manager.internal.updateQueue.map(({ phase }) => phase.state);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying);
                const revived = phaseOf();
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Cancelled);
                return { revived, reset: phaseOf() };
            });
            await MockTime.advance(Hours(1));
            expect(phases).deep.equals({ revived: ["progress"], reset: ["failed"] });
            expect(announced).length(1);
        }).timeout(10_000);

        it("keeps a new consent for a failed update given while the node cannot be updated", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            const { added, queued } = await otaProvider.act(async agent => {
                const manager = agent.get(SoftwareUpdateManager);
                const { announcements } = manager.internal;
                manager.internal.announcements = undefined; // The node is not applicable for updates without it
                const added = await manager.addUpdateConsent(peerAddress, {
                    vendorId: VendorId(0xfff1),
                    productId: 0x8000,
                    targetSoftwareVersion: 1,
                });
                manager.internal.announcements = announcements;
                return { added, queued: manager.internal.updateQueue.length };
            });
            expect({ added, queued }).deep.equals({ added: false, queued: 0 });

            await MockTime.advance(Hours(25));
            expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).hasConsent(peerAddress, 1))).true;
        }).timeout(10_000);

        it("announces a failed update again for a new consent", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            const announced = await failUpdateTo(ota, 1);
            await otaProvider.act(agent =>
                agent.get(SoftwareUpdateManager).addUpdateConsent(peerAddress, {
                    vendorId: VendorId(0xfff1),
                    productId: 0x8000,
                    targetSoftwareVersion: 1,
                }),
            );
            await MockTime.advance(Seconds(1));
            expect(announced).length(2);
        }).timeout(10_000);

        it("announces an update the node revived after a failure again once a new consent is given", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            const announced = await failUpdateTo(ota, 1);
            await otaProvider.act(async agent => {
                const manager = agent.get(SoftwareUpdateManager);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying);
                await manager.addUpdateConsent(peerAddress, {
                    vendorId: VendorId(0xfff1),
                    productId: 0x8000,
                    targetSoftwareVersion: 1,
                });
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Cancelled);
            });
            await MockTime.advance(Seconds(1));
            expect(announced).length(2);
        }).timeout(10_000);

        it("counts the 24 hours of a failed update from its first failure", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            await MockTime.advance(Hours(20));
            await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                // A second failure, as during a retry by the node itself
                manager.internal.updateQueue[0].phase = { state: "announced", since: Time.nowMs };
                manager.dropUndeliverableUpdate(peerAddress, 0);
            });
            await MockTime.advance(Hours(5));
            expect(await otaProvider.act(agent => agent.get(SoftwareUpdateManager).hasConsent(peerAddress, 1))).false;
        }).timeout(10_000);

        it("cancels a failed update without reporting it as failed again", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            const { failedEvents, consent, queued } = await otaProvider.act(async agent => {
                const manager = agent.get(SoftwareUpdateManager);
                let failedEvents = 0;
                manager.events.updateFailed.on(() => {
                    failedEvents++;
                });
                await manager.removeConsent(peerAddress, 1);
                return {
                    failedEvents,
                    consent: manager.hasConsent(peerAddress),
                    queued: manager.internal.updateQueue.length,
                };
            });
            expect({ failedEvents, consent, queued }).deep.equals({ failedEvents: 0, consent: false, queued: 0 });
        }).timeout(10_000);

        it("reports a failed update once, also when the update the node revived fails again or is cancelled", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            const failedEvents = await otaProvider.act(async agent => {
                const manager = agent.get(SoftwareUpdateManager);
                let failedEvents = 0;
                manager.events.updateFailed.on(() => {
                    failedEvents++;
                });
                manager.internal.updateQueue[0].phase = { state: "announced", since: Time.nowMs };
                manager.dropUndeliverableUpdate(peerAddress, 0);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying);
                await manager.removeConsent(peerAddress);
                return failedEvents;
            });
            expect(failedEvents).equals(0);
        }).timeout(10_000);

        it("returns a stalled update the node revived after a failure to failed and drops it after 24 hours", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            const announced = await failUpdateTo(ota, 1);
            await otaProvider.act(agent =>
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading),
            );
            const stateOf = () =>
                otaProvider.act(agent => {
                    const manager = agent.get(SoftwareUpdateManager);
                    return {
                        consent: manager.hasConsent(peerAddress, 1),
                        phase: manager.internal.updateQueue.map(({ phase }) => phase.state),
                    };
                });

            await MockTime.advance(Minutes(25));
            expect(await stateOf()).deep.equals({ consent: true, phase: ["failed"] });
            await MockTime.advance(Hours(24));
            expect(await stateOf()).deep.equals({ consent: false, phase: [] });
            expect(announced).length(1);
        }).timeout(10_000);

        it("keeps a failed update when a new consent for it is refused", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            const announced = await failUpdateTo(ota, 1);
            await expect(
                otaProvider.act(agent =>
                    agent.get(SoftwareUpdateManager).addUpdateConsent(peerAddress, {
                        vendorId: VendorId(0xfff1),
                        productId: 0x8001,
                        targetSoftwareVersion: 1,
                    }),
                ),
            ).to.be.rejectedWith(ImplementationError);
            await MockTime.advance(Hours(1));
            expect(
                await otaProvider.act(agent =>
                    agent.get(SoftwareUpdateManager).internal.updateQueue.map(({ phase }) => phase.state),
                ),
            ).deep.equals(["failed"]);
            expect(announced).length(1);
        }).timeout(10_000);

        it("forgets the update tokens of an update the node revived after a failure when it is cancelled", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
                const { fabricIndex, nodeId } = peerAddress;
                agent
                    .get(OtaSoftwareUpdateProviderServer)
                    .internal.inProgressDetails.set(`${nodeId}-${fabricIndex}-${"bb".repeat(32)}`, {
                        requestorNodeId: nodeId,
                        fabricIndex,
                        lastState: OtaUpdateStatus.Downloading,
                        timestamp: Time.nowMs,
                        applyAllowed: true,
                    });
            });
            await otaProvider.act(agent => agent.get(SoftwareUpdateManager).removeConsent(peerAddress));
            await MockTime.advance(Seconds(1));
            expect(
                await otaProvider.act(
                    agent => agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size,
                ),
            ).equals(0);
        }).timeout(10_000);

        it("forgets the update tokens of an update the node revived after a failure when it fails again", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading);
                const { fabricIndex, nodeId } = peerAddress;
                agent
                    .get(OtaSoftwareUpdateProviderServer)
                    .internal.inProgressDetails.set(`${nodeId}-${fabricIndex}-${"bb".repeat(32)}`, {
                        requestorNodeId: nodeId,
                        fabricIndex,
                        lastState: OtaUpdateStatus.Downloading,
                        timestamp: Time.nowMs,
                        applyAllowed: true,
                    });
                manager.internal.updateQueue[0].phase = { state: "announced", since: Time.nowMs };
                manager.dropUndeliverableUpdate(peerAddress, 0);
            });
            await MockTime.advance(Seconds(1));
            expect(
                await otaProvider.act(
                    agent => agent.get(OtaSoftwareUpdateProviderServer).internal.inProgressDetails.size,
                ),
            ).equals(0);
        }).timeout(10_000);

        it("removes the consent of a cancelled update also when another version is named", async () => {
            const ota = await initSiteWithoutTestImages();
            const { site, otaProvider, peerAddress } = ota;
            await using _localSite = site;

            await failUpdateTo(ota, 1);
            expect(
                await otaProvider.act(async agent => {
                    const manager = agent.get(SoftwareUpdateManager);
                    await manager.removeConsent(peerAddress, 2);
                    return { consent: manager.hasConsent(peerAddress), queued: manager.internal.updateQueue.length };
                }),
            ).deep.equals({ consent: false, queued: 0 });
        }).timeout(10_000);

        it("lets a requestor that obtains consent itself apply the newest image it was offered without a consent", async () => {
            const { site, controller, otaProvider, otaRequestor, requestor, provider, storeImage, expectImage } =
                await initSiteWithoutTestImages({
                    delegateConsent: true,
                    grantUserConsent: true,
                });
            await using _localSite = site;

            await otaRequestor.setStateOf(requestor.TestOtaRequestorServer, { canConsent: true });
            await storeImage(1, "prod");
            const image = await storeImage(2, "prod");
            expectImage(image);
            await MockTime.resolve(
                otaProvider.act(agent =>
                    agent
                        .get(SoftwareUpdateManager)
                        .internal.announcements!.announceOtaProvider(
                            controller.peers.get("peer1")!.endpoints.for(otaRequestor.number),
                            OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                        ),
                ),
            );

            await MockTime.resolve(requestor.requestUserConsentPromise);
            await MockTime.resolve(requestor.applyUpdatePromise);
            expect(
                provider.queryImageResponses.map(({ status, softwareVersion, userConsentNeeded }) => ({
                    status,
                    softwareVersion,
                    userConsentNeeded,
                })),
            ).deep.equals([
                {
                    status: OtaSoftwareUpdateProvider.Status.UpdateAvailable,
                    softwareVersion: image.updateInfo.softwareVersion,
                    userConsentNeeded: true,
                },
            ]);
            expect(provider.applyUpdateResponses.map(({ action }) => action)).deep.equals([
                OtaSoftwareUpdateProvider.ApplyUpdateAction.Proceed,
            ]);
        }).timeout(10_000);

        it("offers a requestor that can consent the newest image when its consented version is not stored", async () => {
            const { site, otaRequestor, requestor, provider, storeImage, expectApplied, forceUpdate } =
                await initSiteWithoutTestImages({
                    delegateConsent: true,
                    grantUserConsent: true,
                });
            await using _localSite = site;

            await otaRequestor.setStateOf(requestor.TestOtaRequestorServer, { canConsent: true });
            const image = await storeImage(1, "prod");

            await forceUpdate(2);
            await expectApplied(image);
            expect(provider.queryImageResponses.map(({ userConsentNeeded }) => userConsentNeeded)).deep.equals([true]);
        }).timeout(10_000);

        it("refuses an apply under an unknown update token although another token holds a delegated consent", async () => {
            const { site, controller, otaProvider, otaRequestor, requestor, provider, storeImage } =
                await initSiteWithoutTestImages({
                    delegateConsent: true,
                    grantUserConsent: true,
                    rewriteApplyUpdateRequest: request => ({
                        ...request,
                        updateToken: Bytes.fromHex("0badc0de0badc0de"),
                    }),
                });
            await using _localSite = site;

            await otaRequestor.setStateOf(requestor.TestOtaRequestorServer, { canConsent: true });
            await storeImage(1, "prod");
            await MockTime.resolve(
                otaProvider.act(agent =>
                    agent
                        .get(SoftwareUpdateManager)
                        .internal.announcements!.announceOtaProvider(
                            controller.peers.get("peer1")!.endpoints.for(otaRequestor.number),
                            OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                        ),
                ),
            );

            await MockTime.resolve(provider.applyUpdateRequestPromise);
            await MockTime.advance(Seconds(1));
            expect(provider.applyUpdateResponses.map(({ action }) => action)[0]).equals(
                OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue,
            );
        }).timeout(10_000);

        it("announces again after an announcement failed unexpectedly", async () => {
            const { site, otaProvider, storeImage, expectApplied, interceptAnnouncements, queueSnapshot, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const image = await storeImage(1, "prod");
            const announced = await interceptAnnouncements(attempt =>
                attempt === 1 ? Promise.reject(new InternalError("Unexpected announcement failure")) : undefined,
            );

            await forceUpdate(1);
            await MockTime.resolve(
                otaProvider.act(agent =>
                    Promise.all(agent.get(SoftwareUpdateManager).internal.runningAnnouncements.values()),
                ),
            );
            // A failed announcement leaves the entry queued for the next queue check
            expect(await queueSnapshot()).deep.equals([
                { targetSoftwareVersion: 1, status: "queued", lastProgressStatus: OtaUpdateStatus.Unknown },
            ]);
            await expectApplied(image);
            expect(announced).length(2);
        }).timeout(10_000);

        it("replaces an announcement that is stuck for longer than the progress timeout", async () => {
            const { site, otaProvider, storeImage, expectApplied, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            // Without a default provider the device does not query on its own, so only an announcement reaches it
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.announceAsDefaultProvider = false;
            });
            const image = await storeImage(1, "prod");
            const announced = await interceptAnnouncements(attempt =>
                attempt === 1 ? new Promise<void>(() => {}) : undefined,
            );

            await forceUpdate(1);
            await expectApplied(image);
            expect(announced).length(2);
        }).timeout(10_000);

        it("does not announce a forced update while updates are suppressed for shutdown", async () => {
            const { site, otaProvider, storeImage, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            const announced = await interceptAnnouncements();
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).internal.suppressUpdates = true;
            });

            await forceUpdate(1);
            await MockTime.advance(Seconds(1));
            expect(announced).length(0);
        }).timeout(10_000);

        it("keeps a status the node reports while its announcement still runs", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, queueSnapshot, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const { promise: announcement, resolver: answerAnnouncement } = createPromise<void>();
            await interceptAnnouncements(() => announcement);
            await forceUpdate(1);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Downloading, 1);
            });

            answerAnnouncement();
            await MockTime.advance(Seconds(1));
            await MockTime.macrotasks;
            expect(await queueSnapshot()).deep.equals([
                { targetSoftwareVersion: 1, status: "in-progress", lastProgressStatus: OtaUpdateStatus.Downloading },
            ]);
        }).timeout(10_000);

        it("announces again right away when an announced update is reset as cancelled", async () => {
            const { site, otaProvider, peerAddress, storeImage, expectApplied, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const image = await storeImage(1, "prod");
            const announced = await interceptAnnouncements(attempt => (attempt === 1 ? Promise.resolve() : undefined));

            await forceUpdate(1);
            await MockTime.advance(Seconds(1));
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Cancelled);
            });
            await MockTime.advance(Seconds(1));
            expect(announced).length(2);

            await expectApplied(image);
        }).timeout(10_000);

        it("offers a requestor that can consent the newest image without a consent only while delegation is on", async () => {
            const { site, otaProvider, storeImage, offerToRequestorThatCanConsent } = await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            expect(await offerToRequestorThatCanConsent()).undefined;

            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.delegateConsentToRequestor = true;
            });
            expect((await offerToRequestorThatCanConsent())?.newSoftwareVersion).equals(1);
        }).timeout(10_000);

        it("asks for consent instead of delegating it when an override requires consent while delegation is off", async () => {
            const { site, otaRequestor, requestor, provider, storeImage, forceUpdate } =
                await initSiteWithoutTestImages({ requireConsent: true, grantUserConsent: true });
            await using _localSite = site;

            await otaRequestor.setStateOf(requestor.TestOtaRequestorServer, { canConsent: true });
            await storeImage(1, "prod");
            // This provider expects no consent request, so its consent hook rejects once it is asked
            const consentRequest = expect(provider.requestUserConsentForUpdatePromise).rejectedWith(
                /Unexpected call to requestUserConsentForUpdate/,
            );
            await forceUpdate(1);
            await MockTime.resolve(consentRequest);
        }).timeout(10_000);

        it("answers not available when the update is stopped while its consent is asked for", async () => {
            const { site, provider, storeImage, forceUpdate } = await initSiteWithoutTestImages({
                requireConsent: true,
                grantConsentAfterStop: true,
            });
            await using _localSite = site;

            await storeImage(1, "prod");
            await forceUpdate(1);
            await MockTime.resolve(provider.queryImageAnsweredPromise);
            expect(provider.queryImageResponses.map(({ status }) => status)).deep.equals([
                OtaSoftwareUpdateProvider.Status.NotAvailable,
            ]);
        }).timeout(10_000);

        it("aborts an announcement whose node already reported a status when the controller goes offline", async () => {
            const { site, controller, otaProvider, peerAddress, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const signals = new Array<AbortSignal | undefined>();
            await interceptAnnouncements((_attempt, abort) => {
                signals.push(abort);
                return new Promise<void>(() => {});
            });
            await forceUpdate(1);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying, 1);
            });

            await MockTime.resolve(controller.stop());
            expect(signals.map(signal => signal?.aborted)).deep.equals([true]);
        }).timeout(10_000);

        it("offers no image for a consent given for another product", async () => {
            const { site, device, otaProvider, peerAddress, storeImage, offerToRequestorThatCanConsent } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).internal.consents.push({
                    peerAddress,
                    vendorId: VendorId(device.state.basicInformation.vendorId),
                    productId: device.state.basicInformation.productId + 1,
                    targetSoftwareVersion: 1,
                });
            });
            expect(await offerToRequestorThatCanConsent()).undefined;
        }).timeout(10_000);

        it("aborts an announcement whose node reported a status when the update is reset for a retry", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const signals = new Array<AbortSignal | undefined>();
            await interceptAnnouncements((_attempt, abort) => {
                signals.push(abort);
                return new Promise<void>(() => {});
            });
            await forceUpdate(1);
            await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying, 1);
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Cancelled, 1);
            });
            await MockTime.advance(Seconds(1));
            expect(signals.map(signal => signal?.aborted)).deep.equals([true, false]);
        }).timeout(10_000);

        it("aborts the announcement of an update that a new forced update replaces", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const signals = new Array<AbortSignal | undefined>();
            await interceptAnnouncements((_attempt, abort) => {
                signals.push(abort);
                return new Promise<void>(() => {});
            });
            await forceUpdate(1);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).onOtaStatusChange(peerAddress, OtaUpdateStatus.Querying, 1);
            });
            await forceUpdate(1);
            await MockTime.advance(Seconds(1));
            expect(signals.map(signal => signal?.aborted)).deep.equals([true, false]);
        }).timeout(10_000);

        it("refuses the apply of a delegated update token once the update is stopped without a consent left", async () => {
            const { site, controller, otaProvider, otaRequestor, requestor, provider, peerAddress, storeImage } =
                await initSiteWithoutTestImages({
                    delegateConsent: true,
                    grantUserConsent: true,
                    beforeApplyUpdateRequest: agent => {
                        agent.get(SoftwareUpdateManager).internal.updateStopped.emit(peerAddress);
                    },
                });
            await using _localSite = site;

            await otaRequestor.setStateOf(requestor.TestOtaRequestorServer, { canConsent: true });
            await storeImage(1, "prod");
            await MockTime.resolve(
                otaProvider.act(agent =>
                    agent
                        .get(SoftwareUpdateManager)
                        .internal.announcements!.announceOtaProvider(
                            controller.peers.get("peer1")!.endpoints.for(otaRequestor.number),
                            OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                        ),
                ),
            );

            await MockTime.resolve(provider.applyUpdateRequestPromise);
            await MockTime.advance(Seconds(1));
            expect(provider.applyUpdateResponses.map(({ action }) => action)[0]).equals(
                OtaSoftwareUpdateProvider.ApplyUpdateAction.Discontinue,
            );
        }).timeout(10_000);

        it("announces retried updates in the order they were reset, so one dead node does not hold back another", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).state.announceAsDefaultProvider = false;
            });
            const announced = await interceptAnnouncements(() =>
                Promise.reject(new InternalError("Node does not answer")),
            );
            await forceUpdate(1);
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).internal.updateQueue.push({
                    vendorId: VendorId(0xfff1),
                    productId: 0x8000,
                    targetSoftwareVersion: 1,
                    peerAddress: PeerAddress({ fabricIndex: peerAddress.fabricIndex, nodeId: NodeId(0xfffe) }),
                    endpoint: agent.endpoint,
                    phase: { state: "queued", resetAt: Timestamp(Time.nowMs - Minutes(1)) },
                });
            });

            await MockTime.advance(Minutes(11));
            expect(
                announced.slice(0, 3).map(endpoint => (endpoint === otaProvider ? "other node" : "device")),
            ).deep.equals(["device", "other node", "device"]);
        }).timeout(10_000);

        it("keeps the queued update when the node reports a version its cached state does not show yet", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, queueSnapshot, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await interceptAnnouncements(() => Promise.resolve());
            await forceUpdate(2);
            await MockTime.advance(Seconds(1));
            await otaProvider.act(agent => {
                agent.get(SoftwareUpdateManager).dropUndeliverableUpdate(peerAddress, 1);
            });
            expect((await queueSnapshot()).map(({ targetSoftwareVersion }) => targetSoftwareVersion)).deep.equals([2]);
        }).timeout(10_000);

        it("does not delegate consent to a node with LocalConfigDisabled", async () => {
            const { site, storeImage, offerToRequestorThatCanConsent } = await initSiteWithoutTestImages({
                delegateConsent: true,
                localConfigDisabled: true,
            });
            await using _localSite = site;

            await storeImage(1, "prod");
            expect(await offerToRequestorThatCanConsent()).undefined;
        }).timeout(10_000);

        it("keeps an update queued when the node completes it with a version below its target", async () => {
            const { site, otaProvider, peerAddress, interceptAnnouncements, queueSnapshot, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await interceptAnnouncements(() => Promise.resolve());
            await forceUpdate(2);
            const done = await otaProvider.act(agent => {
                const manager = agent.get(SoftwareUpdateManager);
                let done = false;
                manager.events.updateDone.once(() => {
                    done = true;
                });
                manager.onOtaStatusChange(peerAddress, OtaUpdateStatus.Done, 1);
                return done;
            });
            expect(done).false;
            expect((await queueSnapshot()).map(({ targetSoftwareVersion }) => targetSoftwareVersion)).deep.equals([2]);
        }).timeout(10_000);

        it("keeps the queued update when an overriding checkUpdateAvailable() finds nothing", async () => {
            const { site, provider, storeImage, queueSnapshot, forceUpdate } = await initSiteWithoutTestImages({
                declineUpdates: true,
            });
            await using _localSite = site;

            await storeImage(1, "prod");
            await forceUpdate(1);
            await MockTime.resolve(provider.queryImagePromise);
            await MockTime.advance(Seconds(1));
            expect(provider.queryImageResponses.map(({ status }) => status)).deep.equals([
                OtaSoftwareUpdateProvider.Status.NotAvailable,
            ]);
            expect((await queueSnapshot()).map(({ targetSoftwareVersion }) => targetSoftwareVersion)).deep.equals([1]);
        }).timeout(10_000);

        it("aborts a running announcement when the controller goes offline", async () => {
            const { site, controller, storeImage, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            const signals = new Array<AbortSignal | undefined>();
            await interceptAnnouncements((_attempt, abort) => {
                signals.push(abort);
                return new Promise<void>(() => {});
            });

            await forceUpdate(1);
            await MockTime.advance(Seconds(1));
            expect(signals.map(signal => signal?.aborted)).deep.equals([false]);

            await MockTime.resolve(controller.stop());
            expect(signals.map(signal => signal?.aborted)).deep.equals([true]);
        }).timeout(10_000);

        it("aborts a running announcement when the OTA provider endpoint is removed", async () => {
            const { site, otaProvider, storeImage, interceptAnnouncements, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            await storeImage(1, "prod");
            const signals = new Array<AbortSignal | undefined>();
            await interceptAnnouncements((_attempt, abort) => {
                signals.push(abort);
                return new Promise<void>(() => {});
            });

            await forceUpdate(1);
            await MockTime.advance(Seconds(1));
            await MockTime.resolve(otaProvider.delete());
            expect(signals.map(signal => signal?.aborted)).deep.equals([true]);
        }).timeout(10_000);

        it("announces a forced update once while another node waits in the queue", async () => {
            const { site, otaProvider, requestor, peerAddress, storeImage, expectApplied, forceUpdate } =
                await initSiteWithoutTestImages();
            await using _localSite = site;

            const image = await storeImage(1, "prod");
            await otaProvider.act(agent => {
                const { updateQueue } = agent.get(SoftwareUpdateManager).internal;
                updateQueue.push({
                    vendorId: VendorId(image.updateInfo.vendorId),
                    productId: image.updateInfo.productId,
                    targetSoftwareVersion: 1,
                    peerAddress: PeerAddress({ fabricIndex: peerAddress.fabricIndex, nodeId: NodeId(0xfffe) }),
                    endpoint: agent.endpoint,
                    phase: { state: "queued", resetAt: Time.nowMs },
                });
            });

            await forceUpdate(1);
            await expectApplied(image);
            expect(requestor.announceOtaProviderRequests).length(1);
        }).timeout(10_000);
    });

    // TODO Add more test cases for edge cases and error cases, also split out setup into helpers
});
