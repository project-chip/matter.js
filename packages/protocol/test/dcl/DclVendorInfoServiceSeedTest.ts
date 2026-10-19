/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DclVendorInfoService, type VendorInfo } from "#dcl/DclVendorInfoService.js";
import type { SeedSource, VendorEntry } from "#dcl/SeedTypes.js";
import { Environment, MockFetch, MockStorageService, StorageService } from "@matter/general";

function makeAsyncIterable<T>(items: T[]): AsyncIterable<T> {
    return {
        [Symbol.asyncIterator]() {
            let i = 0;
            return {
                next() {
                    return Promise.resolve(
                        i < items.length ? { value: items[i++], done: false } : { value: undefined as any, done: true },
                    );
                },
            };
        },
    };
}

function makeSeedSource<T>(items: T[], expectedCount = items.length): SeedSource<T> {
    return { builtAt: "2026-05-13T02:00:00Z", expectedCount, entries: makeAsyncIterable(items) };
}

const VENDOR_1: VendorEntry = {
    vendorId: 0x1234,
    vendorName: "Acme Corp",
    companyLegalName: "Acme Corporation Ltd.",
    companyPreferredName: "Acme",
    vendorLandingPageURL: "https://acme.example.com",
    creator: "System",
    kind: "production",
};

// DCL response format for vendor 0x1234 (survives update() full-replace)
const DCL_WITH_VENDOR_1 = {
    vendorInfo: [
        {
            vendorID: 0x1234,
            vendorName: "Acme Corp",
            companyLegalName: "Acme Corporation Ltd.",
            companyPreferredName: "Acme",
            vendorLandingPageURL: "https://acme.example.com",
            creator: "System",
            schemaVersion: 0,
        },
    ],
    pagination: {},
};

const DCL_EMPTY = { vendorInfo: [], pagination: {} };

describe("DclVendorInfoService seed", () => {
    let fetchMock: MockFetch;
    let environment: Environment;

    beforeEach(() => {
        fetchMock = new MockFetch();
        environment = new Environment("test");
        new MockStorageService(environment);
    });

    afterEach(async () => {
        fetchMock.uninstall();
    });

    it("applies seed when storage is smaller than expectedCount", async () => {
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_WITH_VENDOR_1);
        fetchMock.install();

        const service = new DclVendorInfoService(environment, {
            seed: { vendors: makeSeedSource([VENDOR_1], 2) },
            updateInterval: null,
        });
        await service.construction;

        const v = service.infoFor(0x1234);
        expect(v).to.not.be.undefined;
        expect(v!.vendorName).to.equal("Acme Corp");
        expect(v!.companyLegalName).to.equal("Acme Corporation Ltd.");
        expect(v!.vendorLandingPageUrl).to.equal("https://acme.example.com"); // camel-case url

        await service.close();
    });

    it("skips seed when storage already holds expectedCount vendors", async () => {
        // Pre-populate storage via first service; only the DCL vendor 0xaaaa is stored
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", {
            vendorInfo: [
                {
                    vendorID: 0xaaaa,
                    vendorName: "Existing Vendor",
                    companyLegalName: "Existing Corp",
                    companyPreferredName: "Existing",
                    vendorLandingPageURL: "https://existing.example.com",
                    creator: "System",
                    schemaVersion: 0,
                },
            ],
            pagination: {},
        });
        fetchMock.install();

        const svc1 = new DclVendorInfoService(environment, { updateInterval: null });
        await svc1.construction;
        await svc1.close();

        // Second service: storage already holds expectedCount vendors → skip seed
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_EMPTY);
        const vendorBbbEntry: VendorEntry = {
            vendorId: 0xbbbb,
            vendorName: "Seed Vendor",
            companyLegalName: "Seed Corp",
            kind: "production",
        };
        const svc2 = new DclVendorInfoService(environment, {
            seed: { vendors: makeSeedSource([vendorBbbEntry], 1) },
            updateInterval: null,
        });
        await svc2.construction;

        // Seed was skipped — vendor 0xbbbb not in storage or DCL
        expect(svc2.infoFor(0xbbbb)).to.be.undefined;

        await svc2.close();
    });

    it("aborts stream on malformed vendor entry", async () => {
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_EMPTY);
        fetchMock.install();

        const malformed = { kind: "production" } as unknown as VendorEntry;
        const seed: SeedSource<VendorEntry> = {
            builtAt: "2026-05-13T02:00:00Z",
            expectedCount: 5,
            entries: makeAsyncIterable([malformed, VENDOR_1]),
        };

        const service = new DclVendorInfoService(environment, {
            seed: { vendors: seed },
            updateInterval: null,
        });
        await service.construction;

        // Stream aborted on first malformed entry — VENDOR_1 (0x1234) was never inserted
        // DCL also returned empty, so 0x1234 not present
        expect(service.infoFor(0x1234)).to.be.undefined;

        await service.close();
    });

    it("no-seed: existing behavior unchanged", async () => {
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_WITH_VENDOR_1);
        fetchMock.install();

        const service = new DclVendorInfoService(environment, { updateInterval: null });
        await service.construction;

        expect(service.infoFor(0x1234)).to.not.be.undefined;

        await service.close();
    });

    it("stores only DCL vendors, not the built-in test vendors", async () => {
        fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_WITH_VENDOR_1);
        fetchMock.install();

        const service = new DclVendorInfoService(environment, { updateInterval: null });
        await service.construction;
        expect(service.infoFor(0xfff1)).not.undefined;
        await service.close();

        const storage = await environment.get(StorageService).open("vendors");
        const stored = await storage.createContext("info").get<VendorInfo[]>("vendors", []);
        await storage.close();
        expect(stored.map(({ vendorId }) => vendorId)).deep.equal([0x1234]);
    });

    describe("offline", () => {
        it("serves seeded vendors without asking the DCL and starts no update timer", async () => {
            fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_EMPTY);
            fetchMock.install();

            const service = new DclVendorInfoService(environment, {
                seed: { vendors: makeSeedSource([VENDOR_1]) },
                offline: true,
            });
            await service.construction;

            expect(service.infoFor(0x1234)?.vendorName).equal("Acme Corp");
            expect(MockTime.timerCountFor("DCL Vendor Info Update")).equal(0);

            await service.update();
            expect(fetchMock.getCallLog()).deep.equal([]);

            await service.close();
        });

        it("serves the test vendors with fresh storage and no seed", async () => {
            fetchMock.install();

            const service = new DclVendorInfoService(environment, { offline: true });
            await service.construction;

            expect([...service.vendors.keys()].sort((a, b) => a - b)).deep.equal([
                4939, 0xfff1, 0xfff2, 0xfff3, 0xfff4,
            ]);
            expect(fetchMock.getCallLog()).deep.equal([]);

            await service.close();
        });

        it("prefers a stored DCL record over the built-in test vendor", async () => {
            fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", {
                vendorInfo: [{ ...DCL_WITH_VENDOR_1.vendorInfo[0], vendorID: 0xfff1, vendorName: "Ledger Name" }],
                pagination: {},
            });
            fetchMock.install();

            const online = new DclVendorInfoService(environment, { updateInterval: null });
            await online.construction;
            await online.close();

            const service = new DclVendorInfoService(environment, { offline: true });
            await service.construction;

            expect(service.infoFor(0xfff1)?.vendorName).equal("Ledger Name");

            await service.close();
        });

        it("serves vendors stored by an earlier run", async () => {
            fetchMock.addResponse("on.dcl.csa-iot.org/dcl/vendorinfo/vendors", DCL_WITH_VENDOR_1);
            fetchMock.install();

            const online = new DclVendorInfoService(environment, { updateInterval: null });
            await online.construction;
            await online.close();
            fetchMock.clearCallLog();

            const service = new DclVendorInfoService(environment, { offline: true });
            await service.construction;

            expect(service.infoFor(0x1234)?.vendorName).equal("Acme Corp");
            expect(fetchMock.getCallLog()).deep.equal([]);

            await service.close();
        });

        it("answers a product lookup as absent without asking the DCL", async () => {
            fetchMock.addResponse("on.dcl.csa-iot.org/dcl/model/models/4660/1", {
                model: { vid: 0x1234, pid: 1 },
            });
            fetchMock.install();

            const service = new DclVendorInfoService(environment, { offline: true });
            await service.construction;

            expect(await service.productInfoFor(0x1234, 1)).equal(undefined);
            expect(fetchMock.getCallLog()).deep.equal([]);

            await service.close();
        });
    });
});
