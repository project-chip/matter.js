import { ServerNode } from "@matter.js/main";
import { OnOffLightDevice } from "@matter.js/main/devices/on-off-light";

const node = await ServerNode.create();

await node.add(OnOffLightDevice);

await node.run();
