import "@project-chip/matter-node.js";
import { OnOffLightDevice } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { ServerNode } from "@project-chip/matter.js/node";

const node = await ServerNode.create();

await node.add(OnOffLightDevice);

await node.run();
