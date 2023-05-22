import { CodeModel, ClusterModel, DeviceModel } from "../../src/device/CodeModel.js";

// Should update these periodically
const MINIMUM_EXPECTED_CLUSTERS = 18;
const MINIMUM_EXPECTED_DEVICES = 41;

type CollectionTest<M> = {
    name: "clusters" | "devices",
    minSize: number,
    Model: new (...args: any[]) => M,
    instanceName: string
};

function testCollection<M>({ name, minSize, Model, instanceName }: CollectionTest<M>) {
    const collection = CodeModel[name];
    describe(name, () => {
        it("finds all", () => {
            expect(collection.length).toBeGreaterThanOrEqual(minSize);
        })

        it("iterates", () => {
            let count = 0;
            CodeModel[name].forEach((c) => {
                expect(c instanceof Model);
                count++;
            });
            expect(count).toBeGreaterThanOrEqual(minSize);
        })

        it("maps", () => {
            let count = 0;
            CodeModel[name].map((c) => {
                expect(c).toBeInstanceOf(Model);
                count++;
            });
            expect(count).toBeGreaterThanOrEqual(minSize);
        })

        it(`contains ${instanceName}`, () => {
            
        })
    })
}

describe("CodeModel", () => {
    testCollection("clusters", MINIMUM_EXPECTED_CLUSTERS, ClusterModel);
    testCollection("devices", MINIMUM_EXPECTED_DEVICES, DeviceModel);
})
