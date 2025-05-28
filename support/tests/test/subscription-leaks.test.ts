/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "@matter/main";
import { ServerNode } from "@matter/node";
import { TemperatureSensorDevice } from "@matter/node/devices/temperature-sensor";
import { HeapDumpSet } from "@matter/testing";

/**
 * We will need further filtering for heap analysis to function as a proper test.  Currently this just dumps leak report
 * to logs and should pass.
 */
describe("subscriptions", () => {
    it("do not leak", async () => {
        await using node = new ServerNode();
        const sensor = await node.add(TemperatureSensorDevice);
        await controller.commission(node);
        await controller.subscribe();

        const dumps = new HeapDumpSet("subscriptions");

        for (let i = 0; i < 2; i++) {
            await sensor.set({
                temperatureMeasurement: {
                    measuredValue: i,
                },
            });
            await Time.sleep("subscription delay", 1_000);
        }

        await dumps.create("baseline");

        for (let i = 0; i < 5; i++) {
            await sensor.set({
                temperatureMeasurement: {
                    measuredValue: i,
                },
            });
            await Time.sleep("subscription delay", 1_000);
        }

        await dumps.create("target");

        for (let i = 0; i < 2; i++) {
            await sensor.set({
                temperatureMeasurement: {
                    measuredValue: i,
                },
            });
            await Time.sleep("subscription delay", 1_000);
        }

        await dumps.create("final");

        await dumps.findLeaks();
    }).timeout(30_000_000 /* TODO - divide by 1000 ;) */);
});
