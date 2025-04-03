/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { MaybePromise } from "#general";
import { FabricIndex, NodeId } from "#types";
import { TestStruct, aclEndpoint, listOf, structOf } from "./value-utils.js";

export type ValueList = { value: number }[];

export interface TwoLists {
    cx1: ActionContext;
    cx2: ActionContext;
    list1: ValueList;
    list2: ValueList;
}

export async function testFabricScoped(actor: (struct: TestStruct, lists: TwoLists) => MaybePromise) {
    const struct = TestStruct(
        {
            list: listOf(
                structOf({
                    fabricIndex: "fabric-idx",
                    value: "uint8",
                }),
                { access: "F" },
            ),
        },
        {
            list: [],
        },
    );

    const cx1 = {
        fabricFiltered: true,
        fabric: FabricIndex(1),
        subject: NodeId(1),
        node: aclEndpoint([1, 3]),
    };

    const cx2 = {
        fabricFiltered: true,
        fabric: FabricIndex(2),
        subject: NodeId(2),
        node: aclEndpoint([1, 3]),
    };

    return struct.online2(cx1, cx2, async ({ cx1, cx2, ref1, ref2 }) => {
        const list1 = ref1.list as ValueList;
        const list2 = ref2.list as ValueList;

        list1[0] = { value: 1 };
        await cx1.transaction.commit();
        list2[0] = { value: 2 };
        await cx2.transaction.commit();
        list1[1] = { value: 3 };
        await cx1.transaction.commit();
        list2[1] = { value: 4 };
        await cx2.transaction.commit();

        await actor(struct, { cx1, cx2, list1, list2 });
    });
}

describe("ListManager", () => {
    it("basic get/set", async () => {
        const struct = TestStruct({ list: listOf("string") }, { list: [] });

        await struct.online({ subject: NodeId(1), fabric: FabricIndex(1), node: aclEndpoint([1, 3]) }, async ref => {
            const list = ref.list as string[];

            list[0] = "hi";
            list[1] = "there";
            list[0] = "HI";

            expect(list[0]).equals("HI");
            expect(list[1]).equals("there");
            expect(list.length).equals(2);
        });

        struct.expect({ list: ["HI", "there"] });
    });

    it("basic array functions", async () => {
        const struct = TestStruct({ list: listOf("string") }, { list: [] });

        await struct.online(
            { subject: NodeId(1), fabric: FabricIndex(1), node: aclEndpoint([1, 3]) },
            async (ref, cx) => {
                const list = ref.list as string[];

                list[0] = "hi";
                list.push("there");
                list.splice(0, 1, "HI");
                list.unshift("hey");

                expect(list[0]).equals("hey");
                expect(list[1]).equals("HI");
                expect(list[2]).equals("there");

                await cx.transaction.commit();
                struct.expect({ list: ["hey", "HI", "there"] });

                expect(list.length).equals(3);

                expect(list.pop()).equals("there");
                expect(list.shift()).equals("hey");
                expect(list.length).equals(1);
            },
        );

        struct.expect({ list: ["HI"] });
    });

    it("basic array iteration", async () => {
        const struct = TestStruct({ list: listOf("string") }, { list: [] });

        await struct.online({ subject: NodeId(1), fabric: FabricIndex(1), node: aclEndpoint([1, 3]) }, async ref => {
            const list = ref.list as string[];

            (list[0] = "hi"), (list[1] = "there");
            list[2] = "aaaaand goodbye";

            const list2 = Array<string>();

            for (const value of list) {
                list2.push(value);
            }

            expect(list2).deep.equals(["hi", "there", "aaaaand goodbye"]);
        });
    });

    it("fabric-scoped get/set", async () => {
        await testFabricScoped(async (struct, { cx1, cx2, list1, list2 }) => {
            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 2 },
                    { fabricIndex: 1, value: 3 },
                    { fabricIndex: 2, value: 4 },
                ],
            });

            expect(list1[0]).deep.equals({ fabricIndex: 1, value: 1 });
            expect(list2[0]).deep.equals({ fabricIndex: 2, value: 2 });
            expect(list1[1]).deep.equals({ fabricIndex: 1, value: 3 });
            expect(list2[1]).deep.equals({ fabricIndex: 2, value: 4 });

            list1[0] = { value: 5 };
            await cx1.transaction.commit();
            list2[1] = { value: 6 };
            await cx2.transaction.commit();

            expect(list1[0]).deep.equals({ fabricIndex: 1, value: 5 });
            expect(list2[1]).deep.equals({ fabricIndex: 2, value: 6 });

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 5 },
                    { fabricIndex: 2, value: 2 },
                    { fabricIndex: 1, value: 3 },
                    { fabricIndex: 2, value: 6 },
                ],
            });

            list1[1].value = 7;
            await cx1.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 5 },
                    { fabricIndex: 2, value: 2 },
                    { fabricIndex: 1, value: 7 },
                    { fabricIndex: 2, value: 6 },
                ],
            });

            expect(list1.length).equals(2);
            expect(list2.length).equals(2);
        });
    });

    it("fabric-scoped basic array methods", async () => {
        await testFabricScoped(async (struct, { cx1, cx2, list1, list2 }) => {
            list1.push({ value: 5 });
            await cx1.transaction.commit();
            list2.push({ value: 6 });
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 2 },
                    { fabricIndex: 1, value: 3 },
                    { fabricIndex: 2, value: 4 },
                    { fabricIndex: 1, value: 5 },
                    { fabricIndex: 2, value: 6 },
                ],
            });

            list1.splice(1, 1); // removes element value 3
            await cx1.transaction.commit();
            list2.splice(1, 1); // removes element value 4
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 2 },
                    { fabricIndex: 1, value: 5 },
                    { fabricIndex: 2, value: 6 },
                ],
            });

            list1.pop(); // removes element value 5
            await cx1.transaction.commit();
            list2.shift(); // removes element value 2
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 6 },
                ],
            });

            list1.unshift({ value: 7 });
            await cx1.transaction.commit();
            list2.push({ value: 8 });
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 7 },
                    { fabricIndex: 2, value: 6 },
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 8 },
                ],
            });

            /* TODO these two cases are buggy!! In fact when values are swapped around it seems that the value is set
                but the "managed reference" is the same so as soon as the first value is set on the entry of the secoond
                (even after reading that before) it breaks
            list1.reverse();
            await cx1.transaction.commit();
            list2.reverse();
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 8 },
                    { fabricIndex: 1, value: 7 }, // Test fails: value 1
                    { fabricIndex: 2, value: 6 }, // test fails: value 8
                ],
            });

            list1.sort((a, b) => a.value - b.value);
            await cx1.transaction.commit();
            list2.sort((a, b) => a.value - b.value);
            await cx2.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 1, value: 1 },
                    { fabricIndex: 2, value: 6 },
                    { fabricIndex: 1, value: 7 }, // test fails value 1
                    { fabricIndex: 2, value: 8 },
                ],
            });*/

            list1.length = 0;
            await cx1.transaction.commit();

            struct.expect({
                list: [
                    { fabricIndex: 2, value: 6 },
                    { fabricIndex: 2, value: 8 },
                ],
            });

            list2.length = 0;
            await cx2.transaction.commit();

            struct.expect({
                list: [],
            });
        });
    });

    it("fabric scoped array iteration", async () => {
        await testFabricScoped(async (_struct, { cx1, cx2, list1, list2 }) => {
            list1.push({ value: 5 });
            await cx1.transaction.commit();
            list2.push({ value: 6 });
            await cx2.transaction.commit();

            list1.push({ value: 7 });
            await cx1.transaction.commit();
            list2.push({ value: 8 });
            await cx2.transaction.commit();

            const list1b = [] as typeof list1;
            for (const value of list1) {
                list1b.push(value);
            }

            expect(list1b).deep.equals([
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 1, value: 3 },
                { fabricIndex: 1, value: 5 },
                { fabricIndex: 1, value: 7 },
            ]);
        });
    });
});
