/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../../../../../src/behavior/context/ActionContext.js";
import { Val } from "../../../../../src/behavior/state/Val.js";
import { FabricIndex } from "../../../../../src/datatype/FabricIndex.js";
import { NodeId } from "../../../../../src/datatype/NodeId.js";
import { FieldElement } from "../../../../../src/model/index.js";
import { MaybePromise } from "../../../../../src/util/Promises.js";
import { TestStruct } from "./value-utils.js";

export type Nested = {
    substruct: {
        foo: string
    }
}

function testNested(actor: (vars: { struct: TestStruct, cx: ActionContext, ref: Nested }) => MaybePromise): MaybePromise {
    const struct = TestStruct(
        {
            substruct: {
                type: "struct",

                children: [
                    FieldElement({ name: "foo", type: "string" })
                ],
            }
        },
        {
            substruct: {
                foo: "bar",
            },
        }
    );

    return struct.online({ fabric: FabricIndex(1), subject: NodeId(1) }, (ref, cx) => {
        return actor({ struct, cx, ref: ref as Nested });
    });
}

describe("StructManager", () => {
    it("applies nested defaults", () => {
        testNested(({ ref }) => {
            expect(typeof ref.substruct).equals("object");
            expect(ref.substruct.foo).equals("bar");
        })
    });

    it("accepts nested changes", async () => {
        await testNested(async ({cx, struct, ref}) => {
            ref.substruct.foo = "rab";

            expect(ref.substruct.foo).equals("rab");
    
            await cx.transaction.commit();
    
            const substruct = struct.fields.substruct as Val.Struct;
            expect(typeof substruct).equals("object");
            expect(substruct.foo).equals("rab"); 
        });
    });

    it("notifies on nested change", async () => {
        await testNested(async ({cx, struct, ref}) => {
            ref.substruct.foo = "rab";

            expect(struct.notifies.length).equals(0);

            await cx.transaction.commit();

            expect(struct.notifies).deep.equal([
                { index: "substruct", oldValue: { foo: "bar" }, newValue: { foo: "rab" } }
            ]);
        });
    });
});
