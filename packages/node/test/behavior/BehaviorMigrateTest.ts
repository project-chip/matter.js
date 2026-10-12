/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ServerBehaviorBacking } from "#behavior/internal/ServerBehaviorBacking.js";
import { Datasource } from "#behavior/state/managed/Datasource.js";
import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { CommissioningServer } from "#behavior/system/commissioning/CommissioningServer.js";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { field, nonvolatile, uint32 } from "@matter/model";
import { MockSite } from "@matter/node/testing";
import { Val } from "@matter/protocol";

class CounterBehavior extends Behavior {
    static override readonly id = "counter";
    declare state: CounterBehavior.State;

    static override migrate(values: Val.Struct) {
        super.migrate(values);
        if (values.count !== undefined) {
            values.total ??= values.count;
            delete values.count;
        }
    }
}

namespace CounterBehavior {
    export class State {
        @field(uint32, nonvolatile)
        total = 0;

        @field(uint32, nonvolatile)
        other = 0;
    }
}

class ExtendedCounterBehavior extends CounterBehavior {
    static override migrate(values: Val.Struct) {
        super.migrate(values);
        if (values.legacyOther !== undefined) {
            values.other = values.legacyOther;
            delete values.legacyOther;
        }
    }
}

describe("Behavior.migrate", () => {
    const id = "migrating";

    async function restartWithStored(stored: Val.Struct) {
        const site = new MockSite();
        const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
        const original = await node.add(new Endpoint(OnOffLightDevice.with(ExtendedCounterBehavior), { id: "ep" }));
        await original.setStateOf(ExtendedCounterBehavior, { total: 1 });
        await node.close();

        const storage = site.storageFor(id);
        const key = Object.keys(storage).find(key => key.endsWith(".ep.counter"));
        expect(key).not.undefined;
        storage[key!] = { ...stored };

        const restarted = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
        const endpoint = await restarted.add(
            new Endpoint(OnOffLightDevice.with(ExtendedCounterBehavior), { id: "ep" }),
        );
        return { site, endpoint, stored: () => site.storageFor(id)[key!] };
    }

    it("applies the migrations of a behavior and its base to the stored values", async () => {
        const { site, endpoint } = await restartWithStored({ count: 5, legacyOther: 7 });
        await using _site = site;

        expect(endpoint.stateOf(ExtendedCounterBehavior)).deep.include({ total: 5, other: 7 });
    });

    it("persists the migrated values with the next write of the behavior", async () => {
        const { site, endpoint, stored } = await restartWithStored({ count: 5, legacyOther: 7 });
        await using _site = site;
        endpoint.stateOf(ExtendedCounterBehavior);
        expect(stored()).deep.include({ count: 5 });

        await endpoint.setStateOf(ExtendedCounterBehavior, { other: 8 });

        expect(stored()).not.has.property("count");
        expect(stored()).not.has.property("legacyOther");
        expect(stored()).deep.include({ total: 5, other: 8 });
    });

    it("keeps a value already stored under the new key", async () => {
        const { site, endpoint, stored } = await restartWithStored({ count: 5, total: 9 });
        await using _site = site;

        expect(endpoint.stateOf(ExtendedCounterBehavior).total).equals(9);
        await endpoint.setStateOf(ExtendedCounterBehavior, { other: 8 });
        expect(stored()).not.has.property("count");
        expect(stored()).deep.include({ total: 9 });
    });

    describe("on a backing", () => {
        async function backingWith(store: Datasource.Store) {
            const site = new MockSite();
            const node = await site.addNode(undefined, { device: undefined, commissioning: { enabled: false } });
            const endpoint = await node.add(new Endpoint(OnOffLightDevice.with(ExtendedCounterBehavior)));
            const backing = new ServerBehaviorBacking(endpoint, ExtendedCounterBehavior, store);
            backing.initializeDataSource();
            return { site, backing };
        }

        it("hands the changes to a store that persists them", async () => {
            const values = { count: 5, other: 3 };
            const patches = new Array<Val.Struct>();
            const { site } = await backingWith({
                initialValues: values,
                set: async () => {},
                migrated: patch => patches.push(patch),
            });
            await using _site = site;

            expect(values).deep.equals({ total: 5, other: 3 });
            expect(patches).deep.equals([{ count: undefined, total: 5 }]);
        });

        it("does not run for a store that cannot persist the changes", async () => {
            const values = { count: 5 };
            const { site } = await backingWith({ initialValues: values, set: async () => {} });
            await using _site = site;

            expect(values).deep.equals({ count: 5 });
        });
    });

    // Characterization
    it("is not inherited by a behavior that only shares the id", () => {
        expect(CommissioningClient.migrate).not.equals(Behavior.migrate);
        expect(CommissioningServer.migrate).equals(Behavior.migrate);
    });
});
