import { ServerNode } from "@matter.js/main";
import { OnOffLightDevice, OnOffLightRequirements } from "@matter.js/main/devices/on-off-light";

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
