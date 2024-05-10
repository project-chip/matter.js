import { AttributeElement } from "../../elements/AttributeElement.js";
import { Matter } from "../Matter.js";

export const FeatureMap = AttributeElement({
    id: 65532,
    name: "FeatureMap",
    type: "map32",
});

Matter.children.push(FeatureMap);