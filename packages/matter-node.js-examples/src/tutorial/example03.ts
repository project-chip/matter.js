import "@project-chip/matter-node.js";
import { OnOffLightDevice, OnOffLightRequirements } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { ServerNode } from "@project-chip/matter.js/node";

class MyOnOffServer extends OnOffLightRequirements.OnOffServer {
    override on() {
        console.log("Turning on");
    }

    override off() {
        console.log("Turning off");
    }
}

const node = await ServerNode.create();

await node.add(OnOffLightDevice.with(MyOnOffServer));

await node.run();
