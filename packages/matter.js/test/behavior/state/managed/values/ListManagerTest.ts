/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnlineContext } from "../../../../../src/behavior/server/context/OnlineContext.js";
import { FabricIndex } from "../../../../../src/datatype/FabricIndex.js";
import { NodeId } from "../../../../../src/datatype/NodeId.js";
import { TestStruct, listOf, structOf } from "./value-utils.js";

export async function setupFabricScoped() {
    const struct = TestStruct({
        list: listOf(
            structOf({
                fabricIndex: "fabric-idx",
                value: "uint8",
            }),
            { access: "F" },
        ),
    });
    struct.fields.list = [];

    const context1 = OnlineContext({
        fabricFiltered: true,
        fabric: FabricIndex(1),
        subject: NodeId(1),
    });
    const ref1 = struct.reference(context1).list as { value: number }[];

    const context2 = OnlineContext({
        fabricFiltered: true,
        fabric: FabricIndex(2),
        subject: NodeId(2),
    });
    const ref2 = struct.reference(context2).list as { value: number }[];

    ref1[0] = { value: 1 };
    await context1.transaction.commit();
    ref2[0] = { value: 2 };
    await context2.transaction.commit();
    ref1[1] = { value: 3 };
    await context1.transaction.commit();
    ref2[1] = { value: 4 };
    await context2.transaction.commit();

    return { struct, context1, context2, ref1, ref2 };
}

describe("ListManager", () => {
    it("basic get/set", async () => {
        const struct = TestStruct({ list: listOf("string") });
        struct.fields.list = [];

        const list = struct.reference().list as string[];

        list[0] = "hi";
        list[1] = "there";
        list[0] = "HI";

        expect(list[0]).equals("HI");
        expect(list[1]).equals("there");
        expect(list.length).equals(2);

        await struct.commit();

        struct.expect({ list: ["HI", "there"] });
    });

    it("basic array functions", async () => {
        const struct = TestStruct({ list: listOf("string") });
        struct.fields.list = [];

        const list = struct.reference().list as string[];

        list[0] = "hi";
        list.push("there");
        list.splice(0, 1, "HI");
        list.unshift("hey");

        expect(list[0]).equals("hey");
        expect(list[1]).equals("HI");
        expect(list[2]).equals("there");

        await struct.commit();
        struct.expect({ list: ["hey", "HI", "there"] });

        expect(list.length).equals(3);

        expect(list.pop()).equals("there");
        expect(list.shift()).equals("hey");
        expect(list.length).equals(1);

        await struct.commit();
        struct.expect({ list: [ "HI" ]});
    });

    it("fabric-scoped get/set", async () => {
        const { struct, context1, context2, ref1, ref2 } = await setupFabricScoped();

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 3 },
                { fabricIndex: 2, value: 4 },
            ],
        });

        expect(ref1[0]).deep.equals({ fabricIndex: 1, value: 1 });
        expect(ref2[0]).deep.equals({ fabricIndex: 2, value: 2 });
        expect(ref1[1]).deep.equals({ fabricIndex: 1, value: 3 });
        expect(ref2[1]).deep.equals({ fabricIndex: 2, value: 4 });

        ref1[0] = { value: 5 };
        await context1.transaction.commit();
        ref2[1] = { value: 6 };
        await context2.transaction.commit();

        expect(ref1[0]).deep.equals({ fabricIndex: 1, value: 5 });
        expect(ref2[1]).deep.equals({ fabricIndex: 2, value: 6 });

        struct.expect({
            list: [
                { fabricIndex: 1, value: 5 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 3 },
                { fabricIndex: 2, value: 6 },
            ],
        });

        ref1[1].value = 7;
        await context1.transaction.commit();

        struct.expect({
            list: [
                { fabricIndex: 1, value: 5 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 7 },
                { fabricIndex: 2, value: 6 },
            ],
        });

        expect(ref1.length).equals(2);
        expect(ref2.length).equals(2);
    });

    it("fabric-scoped basic array methods", async () => {
        const { struct, context1, context2, ref1, ref2 } = await setupFabricScoped();

        ref1.push({ value: 5 });
        await context1.transaction.commit();
        ref2.push({ value: 6 });
        await context2.transaction.commit();

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

        ref1.splice(1, 1);
        await context1.transaction.commit();
        ref2.splice(1, 1);
        await context2.transaction.commit();

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 5 },
                { fabricIndex: 2, value: 6 },
            ],
        });

        ref1.pop();
        await context1.transaction.commit();
        ref2.shift();
        await context2.transaction.commit();

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 6 },
            ],
        });
    });
});
