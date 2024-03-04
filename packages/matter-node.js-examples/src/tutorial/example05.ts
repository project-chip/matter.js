import "@project-chip/matter-node.js";
import { OnOffLightDevice } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { ServerNode } from "@project-chip/matter.js/node";

const node = await ServerNode.create();

const light = await node.add(OnOffLightDevice);

await node.bringOnline();

await light.act(async agent => {
    await agent.onOff.toggle();
    console.log("On/off state after first toggle", agent.onOff.state);

    await agent.onOff.toggle();
    console.log("On/off state after second toggle", agent.onOff.state);
});

await node.close();
