/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../../../../src/datatype/FabricIndex.js";
import { TestStruct, listOf, structOf } from "./value-utils.js";

describe("ListManager", () => {
    describe("basic get/set, no transaction", () => {
        const struct = TestStruct({ list: listOf("string") });
        struct.fields.list = [];

        const list = struct.reference().list as string[];

        list[0] = "hi";
        list[1] = "there";
        list[0] = "HI";

        struct.expect({ list: [ "HI", "there" ]});

        expect(list[0]).equals("HI");
        expect(list[1]).equals("there");
    })

    describe("fabric-scoped get/set, no transaction", () => {
        const struct = TestStruct({
            list: listOf(structOf({
                fabricIndex: "fabric-idx",
                value: "uint8"
            }), { access: "F" })
        });
        struct.fields.list = [];

        const ref1 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(1)
        }).list as { value: number }[];

        const ref2 = struct.reference({
            fabricFiltered: true,
            associatedFabric: FabricIndex(2)
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
            ]
        });

        expect(ref1[0]).deep.equals({ fabricIndex: 1, value: 1 });
        expect(ref2[0]).deep.equals({ fabricIndex: 2, value: 2 });
        expect(ref1[1]).deep.equals({ fabricIndex: 1, value: 3 });
        expect(ref2[1]).deep.equals({ fabricIndex: 2, value: 4 });

        ref1[0] = { value: 5 };
        ref2[1] = { value: 6 };

        expect(ref1[0]).deep.equals({ fabricIndex: 1, value: 5 });
        expect(ref2[1]).deep.equals({ fabricIndex: 2, value: 6 });
    })
})
