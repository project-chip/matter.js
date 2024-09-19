import { ServerNode } from "@matter.js/main";
import { OnOffLightDevice } from "@matter.js/main/devices/on-off-light";

const node = await ServerNode.create();

const light = await node.add(OnOffLightDevice);

await node.start();

await light.act(async agent => {
    await agent.onOff.toggle();
    console.log("On/off state after first toggle", agent.onOff.state);

    await agent.onOff.toggle();
    console.log("On/off state after second toggle", agent.onOff.state);
});

await node.close();
