/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../../../src/endpoint/Part.js";
import { PartLifecycle } from "../../../src/endpoint/part/PartLifecycle.js";
import { MockEndpoint } from "../../behavior/mock-behavior.js";
import { MockPart } from "../mock-part.js";

async function createParent() {
    const part = new MockPart(MockEndpoint, { number: 1 });
    await part.construction;
    return part.agent;
}

async function createParentAndChild() {
    const part = new MockPart(MockEndpoint, { number: 2, owner: undefined });
    await part.construction;
    return part;
}

async function createChild() {
    const part = new MockPart(MockEndpoint, { number: 3, owner: undefined });
    await part.construction;
    return part;
}

describe("Parts", () => {
    it("adopts parts", async () => {
        const parent = await createParent();
        const child = await createChild();

        const parts = parent.part.parts;
        await parts.add(child);

        expect(parts.size).equals(1);
        expect(child.owner).equals(parent.part);
    });

    it("disowns destroyed parts", async () => {
        const parent = await createParent();
        const child = await createChild();

        const parts = parent.part.parts;
        await parts.add(child);

        expect(parts.size).equals(1);

        await child.destroy();

        expect(parts.size).equals(0);
    });

    it("bubbles initialization", async () => {
        const parent = await createParent();
        const child = await createParentAndChild();
        const grandchild = await createChild();

        await parent.part.parts.add(child);

        const bubbled = Array<PartLifecycle.Change>();
        parent.part.lifecycle.changed.on((type, part) => {
            expect(part).equals(grandchild);
            bubbled.push(type);
        });

        await child.parts.add(grandchild);

        expect(bubbled).deep.equals([PartLifecycle.Change.Installed, PartLifecycle.Change.Ready]);
    });

    it("bubbles destruction", async () => {
        const parent = await createParent();
        const child = await createParentAndChild();
        const grandchild = await createChild();

        await parent.part.parts.add(child);
        await child.parts.add(grandchild);

        let bubbled: Part | undefined;
        parent.part.lifecycle.changed.on((type, part) => {
            expect(type).equals(PartLifecycle.Change.Destroyed);
            bubbled = part;
        });

        await grandchild.destroy();

        expect(bubbled).equals(grandchild);
    });
});
