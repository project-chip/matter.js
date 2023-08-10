/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement, MatterModel, ModelVariantTraversal, VariantDetail } from "../../../src/model/index.js";

describe("ModelVariantTraversal", () => {
    it("associates attributes by ID", () => {
        const result = traverseClusters(
            [{ tag: "attribute", name: "attr", id: 1 }],
            [{ tag: "attribute", name: "asdf", id: 1 }],
        );

        expect(result.length).toBe(1);
        expect(result[0].name).toBe("attr");
    });

    it("associates commands by ID", () => {
        const result = traverseClusters(
            [
                { tag: "command", name: "command1", id: 1, direction: "request" },
                { tag: "command", name: "command1response", id: 1, direction: "response" },
            ],
            [
                { tag: "command", name: "command2response", id: 1, direction: "response" },
                { tag: "command", name: "command2", id: 1, direction: "request" },
            ],
        );
        expect(result.length).toBe(2);
        expect(result[0].name).toBe("command1");
        expect(result[1].name).toBe("command1response");
    });

    it("doesn't associate request and response commands", () => {
        const result = traverseClusters(
            [{ tag: "command", name: "command1", id: 1, direction: "request" }],
            [{ tag: "command", name: "command1response", id: 1, direction: "response" }],
        );
        expect(result.length).toBe(2);
        expect(result[0].name).toBe("command1");
        expect(result[1].name).toBe("command1response");
    });

    it("prefers shorter names", () => {
        const result = traverseClusters(
            [{ tag: "attribute", name: "ReallyLongName", id: 1 }],
            [{ tag: "attribute", name: "ShortName", id: 1 }],
        );
        expect(result.length).toBe(1);
        expect(result[0].name).toBe("ShortName");
    });

    it("prefers more capitalization", () => {
        const result = traverseClusters(
            [{ tag: "attribute", name: "myattribute", id: 1 }],
            [{ tag: "attribute", name: "MyAttribute", id: 1 }],
        );
        expect(result.length).toBe(1);
        expect(result[0].name).toBe("MyAttribute");
    });

    it("associates datatypes based on reference", () => {
        const result = traverseClusters(
            [
                { tag: "attribute", name: "attr", id: 1, type: "datatype1" },
                { tag: "datatype", name: "datatype1" },
            ],
            [
                { tag: "attribute", name: "attr", id: 1, type: "datatype2" },
                { tag: "datatype", name: "datatype2" },
            ],
        );
        expect(result.length).toBe(2);
        expect(result[1].name).toBe("datatype1");
    });
});

function traverseClusters(children1: AnyElement[], children2: AnyElement[]) {
    const traversalResult = Array<VariantDetail>();

    const traversal = new (class extends ModelVariantTraversal {
        visit(variants: VariantDetail, recurse: () => void) {
            if (variants.name != "matter 2" && variants.name != "cluster1") {
                traversalResult.push(variants);
            }
            recurse();
        }
    })(["variant1", "variant2", "variant3"]);

    const inputVariants = {
        variant2: new MatterModel({
            name: "matter 2",
            children: [{ tag: "cluster", name: "cluster1", id: 1, children: children1 as any }],
        }),

        variant3: new MatterModel({
            name: "matter 3",
            children: [{ tag: "cluster", name: "cluster1", id: 1, children: children2 as any }],
        }),
    };

    traversal.traverse(inputVariants);

    return traversalResult;
}
