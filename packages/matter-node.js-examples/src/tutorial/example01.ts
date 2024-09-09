import "@project-chip/matter.js-nodejs";
import { ServerNode } from "@project-chip/matter.js/node";

const node = await ServerNode.create();

await node.run();
