import { AttributeElement } from "../../elements/AttributeElement.js";
import { Matter } from "../Matter.js";

export const AcceptedCommandList = AttributeElement({
    id: 1237,
    name: "AcceptedCommandList",
    type: "uint8",
});

Matter.children.push(AcceptedCommandList);
