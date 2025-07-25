import { StorageError } from "#storage/Storage.js";
import { StorageBackendMemory } from "#storage/StorageBackendMemory.js";
import { BlobStorageContext } from "#storage/StorageContext.js";

const CONTEXT = ["test"];
const KEY = "blobkey";

describe("BlobStorageContext", () => {
    let storage: StorageBackendMemory;
    let blobContext: BlobStorageContext;

    beforeEach(async () => {
        storage = await StorageBackendMemory.create();
        blobContext = new BlobStorageContext(storage, CONTEXT);
    });

    it("should write and read a blob", async () => {
        const data = new Uint8Array([1, 2, 3, 4]);
        const stream = new ReadableStream<Uint8Array>({
            start(controller) {
                controller.enqueue(data);
                controller.close();
            },
        });

        await blobContext.writeBlob(KEY, stream);

        const readStream = await blobContext.readBlob(KEY);
        const reader = readStream.getReader();
        const chunks: Uint8Array[] = [];
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            chunks.push(value);
        }
        expect(chunks[0]).deep.equal(data);
    });

    it("should return correct blob size", async () => {
        const data = new Uint8Array([5, 6, 7]);
        await storage.set(CONTEXT, KEY, data);

        const size = blobContext.blobSize(KEY);
        expect(size).equal(BigInt(3));
    });

    it("should return empty stream for missing key", async () => {
        const readStream = await blobContext.readBlob("missingkey");
        const reader = readStream.getReader();
        const { done } = await reader.read();
        expect(done).equal(true);
    });

    it("should throw error for non-Uint8Array value in blobSize", async () => {
        await storage.set(CONTEXT, "notblob", "stringvalue");
        expect(() => blobContext.blobSize("notblob")).throws(StorageError);
    });

    it("should accept BlobStorageContext.Options", async () => {
        const data = new Uint8Array([10, 20, 30, 40]);
        await storage.set(CONTEXT, KEY, data);

        // Options are currently not used in StorageBackendMemory, but should not throw
        const options: BlobStorageContext.Options = { highWaterMark: 1024 };
        const readStream = await blobContext.readBlob(KEY, options);
        const reader = readStream.getReader();
        const { value, done } = await reader.read();
        expect(done).equal(false);
        expect(value).deep.equal(data);
    });
});
