import { ServerNode } from "@matter.js/main";
import { OnOffLightDevice } from "@matter.js/main/devices/on-off-light";

const node = await ServerNode.create();

const light = await node.add(OnOffLightDevice);

light.events.onOff.onOff$Changed.on(newValue => {
    console.log(`Light is ${newValue ? "on" : "off"}`);
});

await node.run();
