import * as assert from "assert";
import { CommandServer, UnsupportedCommandError } from "../../../src/cluster/index.js";
import { TlvString } from "../../../src/tlv/index.js";
import { MatterDevice } from "../../../src/MatterDevice.js";
import { Session } from "../../../src/session/index.js";
import { Message } from "../../../src/codec/index.js";
import { Endpoint } from "../../../src/device/index.js";
import { Time, TimeFake } from "../../../src/time/index.js";
import { StatusCode } from "../../../src/protocol/interaction/index.js";

describe("CommandServer", () => {
    async function testInvoke(handler: (request: string) => Promise<any>) {
        const cs = new CommandServer(4, 5, "test", TlvString, TlvString,
            async (request, _message, _session, _endpoint) => await handler(request));
        const result = await cs.invoke(
            {} as unknown as Session<MatterDevice>,
            TlvString.encodeTlv("hello"),
            {} as Message,
            {} as Endpoint
        );
        assert.equal(result.responseId, 5);
        return result;
    }

    beforeAll(() => Time.get = () => new TimeFake(0));

    describe("invoke", () => {
        it("succeeds", async () => {
            const result = await testInvoke(async (request) => `${request} world`);
            assert.equal(result.code, StatusCode.Success);
            assert.equal(TlvString.decodeTlv(result.response), "hello world");
        })

        it("fails gracefully", async () => {
            const result = await testInvoke(async () => { throw new UnsupportedCommandError() });
            assert.equal(result.code, StatusCode.UnsupportedCommand);
            assert.deepEqual(result.response, []);
        })

        it("fails ungracefully", async () => {
            await assert.rejects(
                () => testInvoke(async () => { throw Error("oops") }),
                Error,
                "oops");
        })
    })
})