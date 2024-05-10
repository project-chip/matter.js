import { AttributeElement } from "../../elements/AttributeElement.js";
import { Matter } from "../Matter.js";

export const FabricIndex = AttributeElement({
    id: 1234,
    name: "FabricIndex",
    type: "fabric-idx",
});

Matter.children.push(FabricIndex);
