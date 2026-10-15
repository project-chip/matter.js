/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserLabelServer } from "#behaviors/user-label";
import { OnOffLightDevice } from "#devices/on-off-light";
import { ServerNode } from "#node/ServerNode.js";
import { MAX_UDP_MESSAGE_SIZE, MockNetwork, Network } from "@matter/general";
import { MockSite } from "@matter/node/testing";
import { Read, ReadResult, Write } from "@matter/protocol";
import { EndpointNumber, Status } from "@matter/types";
import { UserLabel } from "@matter/types/clusters/user-label";

/** Each label encodes to about 40 bytes, so 50 labels need more than one UDP message. */
function labels(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        label: `label${String(i).padStart(11, "0")}`,
        value: `value${String(i).padStart(11, "0")}`,
    }));
}

type Labels = ReturnType<typeof labels>;

async function writeLabels(value: Labels, options: Write.Options = {}, version?: (current: number) => number) {
    await using site = new MockSite();
    const { controller, device } = await site.addCommissionedPair({
        device: {
            type: ServerNode.RootEndpoint,
            device: OnOffLightDevice.with(UserLabelServer),
        },
    });

    // A real network or peer drops what does not fit one UDP datagram; the simulator does not
    const oversized = new Array<number>();
    const network = device.env.get(Network);
    if (!(network instanceof MockNetwork)) {
        expect.fail("device network is not simulated");
    }
    network.simulator.router.intercept((packet, route) => {
        if (packet.kind === "udp" && packet.payload.byteLength > MAX_UDP_MESSAGE_SIZE) {
            oversized.push(packet.payload.byteLength);
            return;
        }
        route(packet);
    });

    const peer1 = controller.peers.get("peer1")!;
    const attribute = { endpoint: EndpointNumber(1), cluster: UserLabel, attributes: "labelList" as const };

    let dataVersion: number | undefined;
    if (version !== undefined) {
        const reports = new Array<ReadResult.Report>();
        await MockTime.resolve(
            (async () => {
                for await (const chunk of peer1.interaction.read(Read(Read.Attribute(attribute)))) {
                    for await (const report of chunk) {
                        reports.push(report);
                    }
                }
            })(),
        );
        const report = reports.find(report => report.kind === "attr-value");
        expect(report?.kind).equals("attr-value");
        if (report?.kind === "attr-value") {
            dataVersion = version(report.version);
        }
    }

    const result = await MockTime.resolve(
        peer1.interaction.write(Write(options, Write.Attribute({ ...attribute, value, version: dataVersion }))),
    );

    expect(oversized).deep.equals([]);
    return {
        statuses: result.map(({ status }) => status),
        labelList: device.parts.get(1)!.stateOf(UserLabelServer).labelList,
    };
}

function expectWritten({ statuses, labelList }: Awaited<ReturnType<typeof writeLabels>>, value: Labels) {
    expect(statuses.length).greaterThan(0);
    expect(statuses.filter(status => status !== Status.Success)).deep.equals([]);
    expect(labelList).deep.equals(value);
}

describe("ClientChunkedWrite", () => {
    before(() => {
        MockTime.init();
    });

    it("writes a list larger than one message as an empty REPLACE and ADDs across chunks", async () => {
        expectWritten(await writeLabels(labels(50)), labels(50));
    });

    it("writes a whole list larger than one message as an empty REPLACE and ADDs across chunks", async () => {
        expectWritten(await writeLabels(labels(50), { chunkLists: false }), labels(50));
    });

    it("writes a list with a matching data version that fits one message", async () => {
        expectWritten(await writeLabels(labels(3), {}, current => current), labels(3));
    });

    it("writes a list with a matching data version across chunks", async () => {
        expectWritten(await writeLabels(labels(50), {}, current => current), labels(50));
    });

    it("rejects every entry of a list write with a stale data version", async () => {
        const { statuses, labelList } = await writeLabels(labels(3), {}, current => current - 1);

        expect(statuses).deep.equals(new Array(4).fill(Status.DataVersionMismatch));
        expect(labelList).deep.equals([]);
    });
});
