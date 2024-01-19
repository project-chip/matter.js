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
    return new MockPart(MockEndpoint, { number: 1 });
}

function createParentAndChild() {
    return new MockPart(MockEndpoint, { number: 2, owner: undefined });
}

function createChild() {
    return new MockPart(MockEndpoint, { number: 3, owner: undefined });
}

describe("Parts", () => {
    it("adopts parts", async () => {
        const parent = createParent();
        await parent.construction;
        const child = createChild();

        const parts = parent.parts;
        parts.add(child);
        await child.construction;

        expect(parts.size).equals(1);
        expect(child.owner).equals(parent);
    });

    it("disowns destroyed parts", async () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.parts;
        parts.add(child);
        await child.construction;

        expect(parts.size).equals(1);

        await child.destroy();

        expect(parts.size).equals(0);
    });

    it("bubbles initialization", async () => {
        const parent = createParent();
        await parent.construction;

        const child = createParentAndChild();
        const grandchild = createChild();

        parent.parts.add(child);
        await child.construction;

        let bubbled = Array<PartLifecycle.Change>();
        parent.lifecycle.changed.on((type, part) => {
            expect(part).equals(grandchild);
            bubbled.push(type);
        });

        child.parts.add(grandchild);
        await grandchild.construction;

        expect(bubbled).deep.equals([
            PartLifecycle.Change.Installed,
            PartLifecycle.Change.Ready
        ]);
    });

    it("bubbles destruction", async () => {
        const parent = createParent();
        await parent.construction;

        const child = createParentAndChild();
        const grandchild = createChild();

        parent.parts.add(child);
        await child.construction;

        child.parts.add(grandchild);
        await grandchild.construction;

        let bubbled: Part | undefined;
        parent.lifecycle.changed.on((type, part) => {
            expect(type).equals(PartLifecycle.Change.Destroyed);
            (bubbled = part)
        });

        await grandchild.destroy();

        expect(bubbled).equals(grandchild);
    });
});
