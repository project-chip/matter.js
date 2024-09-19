import { ServerNode } from "@matter.js/main";

const node = await ServerNode.create();

await node.run();
