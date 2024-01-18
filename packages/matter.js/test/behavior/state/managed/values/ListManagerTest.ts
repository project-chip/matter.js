/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../../../../src/datatype/FabricIndex.js";
import { TestStruct, listOf, structOf } from "./value-utils.js";

describe("ListManager", () => {
    it("basic get/set, no transaction", () => {
        const struct = TestStruct({ list: listOf("string") });
        struct.fields.list = [];

        const list = struct.reference().list as string[];

        list[0] = "hi";
        list[1] = "there";
        list[0] = "HI";

        struct.expect({ list: ["HI", "there"] });

        expect(list[0]).equals("HI");
        expect(list[1]).equals("there");
        expect(list.length).equals(2);
    });

    it("basic array functions, no transaction", () => {
        const struct = TestStruct({ list: listOf("string") });
        struct.fields.list = [];

        const list = struct.reference().list as string[];

        list[0] = "hi";
        list.push("there");
        list.splice(0, 1, "HI");
        list.unshift("hey");

        struct.expect({ list: ["hey", "HI", "there"] });

        expect(list[0]).equals("hey");
        expect(list[1]).equals("HI");
        expect(list[2]).equals("there");

        expect(list.length).equals(3);

        expect(list.pop()).equals("there");
        expect(list.shift()).equals("hey");
        expect(list.length).equals(1);
    });

    it("fabric-scoped get/set, no transaction", () => {
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

        const ref1 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(1),
        }).list as { value: number }[];

        const ref2 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(2),
        }).list as { value: number }[];

        ref1[0] = { value: 1 };
        ref2[0] = { value: 2 };
        ref1[1] = { value: 3 };
        ref2[1] = { value: 4 };

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
        ref2[1] = { value: 6 };

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

    it("fabric-scoped basic array methods, no transaction", () => {
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

        const ref1 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(1),
        }).list as { value: number }[];

        const ref2 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(2),
        }).list as { value: number }[];

        ref1[0] = { value: 1 };
        ref2[0] = { value: 2 };
        ref1[1] = { value: 3 };
        ref2[1] = { value: 4 };

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 3 },
                { fabricIndex: 2, value: 4 },
            ],
        });

        ref1.push({ value: 5 });
        ref2.push({ value: 6 });

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
        ref2.splice(1, 1);

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 2 },
                { fabricIndex: 1, value: 5 },
                { fabricIndex: 2, value: 6 },
            ],
        });

        ref1.pop();
        ref2.shift();

        struct.expect({
            list: [
                { fabricIndex: 1, value: 1 },
                { fabricIndex: 2, value: 6 },
            ],
        });
    });
});
