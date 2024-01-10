/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../../../src/endpoint/Part.js";
import { PartLifecycle } from "../../../src/endpoint/part/PartLifecycle.js";
import { MockPart } from "../mock-part.js";
import { MockEndpoint } from "../../behavior/mock-behavior.js";

function createParent() {
    return new MockPart(MockEndpoint, { number: 1 }).agent;
}

function createParentAndChild() {
    return new MockPart(MockEndpoint, { number: 2, owner: undefined });
}

function createChild() {
    return new MockPart(MockEndpoint, { number: 3, owner: undefined });
}

describe("Parts", () => {
    it("adopts parts", () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.part.parts;
        parts.add(child);

        expect(parts.size).equals(1);
        expect(child.owner).equals(parent.part);
    });

    it("disowns destroyed parts", async () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.part.parts;
        parts.add(child);

        expect(parts.size).equals(1);

        await child.destroy();

        expect(parts.size).equals(0);
    });

    it("bubbles initialization", () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.part.parts.add(child);

        let bubbled = Array<PartLifecycle.Change>();
        parent.part.lifecycle.changed.on((type, part) => {
            expect(part).equals(grandchild);
            bubbled.push(type);
        });

        child.parts.add(grandchild);

        expect(bubbled).deep.equals([
            PartLifecycle.Change.Installed,
            PartLifecycle.Change.Ready
        ]);
    });

    it("bubbles destruction", async () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.part.parts.add(child);
        child.parts.add(grandchild);

        let bubbled: Part | undefined;
        parent.part.lifecycle.changed.on((type, part) => {
            expect(type).equals(PartLifecycle.Change.Destroyed);
            (bubbled = part)
        });

        await grandchild.destroy();

        expect(bubbled).equals(grandchild);
    });
});
