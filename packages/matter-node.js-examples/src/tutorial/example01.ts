import "@project-chip/matter-node.js";
import { ServerNode } from "@project-chip/matter.js/node";

const node = await ServerNode.create();

await node.run();
