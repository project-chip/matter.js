/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StructuralChangeType } from "../../../../src/behavior/definitions/lifecycle/StructuralChangeType.js";
import { Part } from "../../../../src/endpoint/Part.js";
import { MockPart } from "../../../endpoint/part-mocks.js";
import { MockEndpoint, MockParentEndpoint } from "../../behavior-mocks.js";

function createParent() {
    return new MockPart(MockParentEndpoint, { number: 1 }).agent;
}

function createParentAndChild() {
    return new MockPart(MockParentEndpoint, { number: 2, owner: undefined }).agent;
}

function createChild() {
    return new MockPart(MockEndpoint, { number: 3, owner: undefined }).agent;
}

describe("PartsBehavior", () => {
    it("adopts parts", () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.parts;
        parts.add(child);

        expect(parts.size).equals(1);
        expect(parts.state.children.size).equals(1);

        expect(child.part.owner).equals(parent.part);
    });

    it("disowns destroyed parts", async () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.parts;
        parts.add(child);

        expect(parts.size).equals(1);

        await child.part.destroy();

        expect(parts.size).equals(0);
        expect(parts.state.children.size).equals(0);
    });

    it("bubbles add", () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.parts.add(child);

        let bubbled: Part | undefined;
        parent.lifecycle.events.structure$Change.on((type, part) => {
            expect(type).equals(StructuralChangeType.PartAdded);
            bubbled = part;
        });

        child.parts.add(grandchild);

        expect(bubbled).equals(grandchild.part);
    });

    it("bubbles delete", async () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.parts.add(child);
        child.parts.add(grandchild);

        let bubbled: Part | undefined;
        parent.lifecycle.events.structure$Change.on((type, part) => {
            expect(type).equals(StructuralChangeType.PartDeleted);
            (bubbled = part)
        });

        await grandchild.part.destroy();

        expect(bubbled).equals(grandchild.part);
    });
});
