import { FanControlServer } from "#behaviors/fan-control";
import { FanControl } from "#clusters/fan-control";
import { OnOffPlugInUnitDevice } from "#devices/on-off-plug-in-unit";
import { MockServerNode } from "../../node/mock-server-node.js";

describe("FanControlServer", () => {
    it("accepts local mode tags", async () => {
        const node = await MockServerNode.create();
        const DeviceType = OnOffPlugInUnitDevice.with(FanControlServer);
        await node.add(DeviceType, {
            fanControl: {
                fanMode: FanControl.FanMode.On, // Allows also to set the deprecated value?
                fanModeSequence: FanControl.FanModeSequence.OffLowMedHigh,
                percentSetting: 50,
                percentCurrent: 50,
            },
        });
        await node.start();
        await node.close();
    });
});
