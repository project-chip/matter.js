/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorBehavior } from "../../src/behavior/definitions/descriptor/DescriptorBehavior.js";
import { PumpConfigurationAndControlServer } from "../../src/behavior/definitions/pump-configuration-and-control/PumpConfigurationAndControlServer.js";
import { GeneralCommissioning } from "../../src/cluster/definitions/GeneralCommissioningCluster.js";
import { PumpConfigurationAndControl } from "../../src/cluster/definitions/PumpConfigurationAndControlCluster.js";
import { DnsCodec, DnsMessage, DnsRecordType } from "../../src/codec/DnsCodec.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { Endpoint } from "../../src/endpoint/Endpoint.js";
import { OnOffLightDevice } from "../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { PumpDevice } from "../../src/endpoint/definitions/device/PumpDevice.js";
import { AggregatorEndpoint } from "../../src/endpoint/definitions/system/AggregatorEndpoint.js";
import { FabricManager } from "../../src/fabric/FabricManager.js";
import { UdpChannelFake } from "../../src/net/fake/UdpChannelFake.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { MockServerNode } from "./mock-server-node.js";

describe("ServerNode", () => {
    it("starts and stops and emits correct lifecycle changes", async () => {
        const node = new MockServerNode();

        const changes = new Array<[string, string?]>();

        node.lifecycle.changed.on((type, endpoint) => {
            changes.push([type, endpoint.toString()]);
        });

        node.lifecycle.online.on(() => {
            node.env.runtime.cancel();
        });

        for (const event of ["online", "offline", "ready", "treeReady"] as const) {
            node.lifecycle[event].on(() => {
                changes.push([event]);
            });
        }

        await node.add(OnOffLightDevice);

        await MockTime.resolve(node.run());

        expect(changes).deep.equals([
            ["ready", "node0"],
            ["ready"],
            ["installed", "node0.?"],
            ["idAssigned", "node0.part0"],
            ["numberAssigned", "node0.part0"],
            ["treeReady", "node0.part0"],
            ["treeReady", "node0"],
            ["treeReady"],
            ["ready", "node0.part0"],
            ["online"],
            ["offline"],
            ["destroyed", "node0.part0"],
            ["destroyed", "node0"],
        ]);
    });

    it("announces and expires correctly", async () => {
        const scannerChannel = await UdpChannelFake.create(MockServerNode.createNetwork(2), {
            listeningPort: 5353,
            listeningAddress: "ff02::fb",
            type: "udp6",
        });

        const advertisementReceived = new Promise<ByteArray>(resolve =>
            scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolve(data)),
        );

        const node = await MockServerNode.createOnline({
            config: {
                type: ServerNode.RootEndpoint,
                network: { port: 0 },
                commissioning: { discriminator: 2002 },
                basicInformation: { vendorId: 65501 },
            },
        });

        const operationalPort = node.state.network.operationalPort;
        expect(operationalPort).greaterThan(0);
        expect(operationalPort).not.equal(5540);

        const advertisement = DnsCodec.decode(await advertisementReceived);

        expect(advertisement?.answers[0]?.ttl).equals(120);

        function answer(name: string) {
            for (const answer of (advertisement as DnsMessage).answers) {
                if (answer.value.startsWith(name)) {
                    return answer.value.split(".")[0].substring(name.length);
                }
            }
        }

        function additional(recordType: DnsRecordType) {
            for (const additional of (advertisement as DnsMessage).additionalRecords) {
                if (additional.recordType === recordType) {
                    return additional.value;
                }
            }
        }

        expect(answer("_L")).equals("2002");
        expect(answer("_S")).equals(`${2002 % 0xf}`);
        expect(answer("_V")).equals("65501");
        expect(answer("_T")).equals("256");
        expect(answer("_CM")).equals("");

        expect(additional(DnsRecordType.AAAA)).equals("1111:2222:3333:4444:5555:6666:7777:8801");
        expect(additional(DnsRecordType.A)).equals("10.10.10.1");
        expect(additional(DnsRecordType.SRV)?.port).equals(operationalPort);

        const expirationReceived = new Promise<ByteArray>(resolve =>
            scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolve(data)),
        );

        await node.close();

        const expiration = DnsCodec.decode(await expirationReceived);
        expect(expiration?.answers[0]?.ttl).equals(0);
    });

    it("commissions", async () => {
        const { node } = await commission();

        node.cancel();

        if (node.lifecycle.isOnline) {
            await MockTime.resolve(node.lifecycle.offline);
        }

        await node.close();
    });

    it("times out commissioning", async () => {
        const { node } = await almostCommission();

        const opcreds = node.state.operationalCredentials;

        expect(opcreds.commissionedFabrics).equals(1);

        await MockTime.advance(Fixtures.failsafeLengthS * 1000 + 1);

        if (opcreds.commissionedFabrics > 0) {
            await node.events.operationalCredentials.commissionedFabrics$Change;
        }

        expect(opcreds.commissionedFabrics).equals(0);

        await node.close();
    });

    it("decommissions and recommissions", async () => {
        const { node, context } = await commission();

        const fabricIndex = await node.online(
            context,
            async agent => agent.operationalCredentials.state.currentFabricIndex,
        );

        await node.online(context, async agent => {
            await agent.operationalCredentials.removeFabric({ fabricIndex });
        });

        // Node should decommission...
        if (node.lifecycle.isCommissioned) {
            await node.lifecycle.decommissioned;
        }

        // ...then go offline...
        if (node.lifecycle.isOnline) {
            await MockTime.resolve(node.lifecycle.offline);
        }

        // ...then go back online
        await MockTime.resolve(node.lifecycle.online);

        await commission(node);

        await node.close();
    });

    it("properly deploys aggregator", async () => {
        const aggregator = new Endpoint(AggregatorEndpoint);

        const light = new Endpoint(OnOffLightDevice, { owner: aggregator });

        // Hrm always fun to configure pumps
        const pump = new Endpoint(
            PumpDevice.with(
                PumpConfigurationAndControlServer.with("ConstantPressure").set({
                    effectiveControlMode: PumpConfigurationAndControl.ControlMode.ConstantPressure,
                    effectiveOperationMode: PumpConfigurationAndControl.OperationMode.Normal,
                }),
            ),
            { owner: aggregator },
        );

        const node = await MockServerNode.createOnline({ device: aggregator });

        await commission(node);

        expect(node.stateOf(DescriptorBehavior).partsList).deep.equals([aggregator.number, light.number, pump.number]);
        expect(aggregator.stateOf(DescriptorBehavior).partsList).deep.equals([light.number, pump.number]);

        expect(light.stateOf(DescriptorBehavior).serverList).deep.equals([3, 4, 5, 6, 29]);
        expect(pump.stateOf(DescriptorBehavior).serverList).deep.equals([6, 3, 512, 29]);

        await node.close();
    });
});

async function almostCommission(node?: MockServerNode) {
    if (!node) {
        node = await MockServerNode.createOnline();
    }

    const session = await node.createSession();

    const context = { session, command: true };

    await node.online(context, async agent => {
        await agent.generalCommissioning.armFailSafe({ expiryLengthSeconds: Fixtures.failsafeLengthS, breadcrumb: 4 });
    });

    await node.online(context, async agent => {
        await agent.generalCommissioning.setRegulatoryConfig({
            newRegulatoryConfig: 2,
            countryCode: "XX",
            breadcrumb: 5,
        });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.certificateChainRequest({ certificateType: 2 });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.certificateChainRequest({ certificateType: 1 });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.attestationRequest({ attestationNonce: Fixtures.attestationNonce });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.csrRequest({ csrNonce: Fixtures.csrNonce });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.addTrustedRootCertificate({ rootCaCertificate: Fixtures.caCert });
    });

    await node.online(context, async agent => {
        await agent.operationalCredentials.addNoc({
            nocValue: Fixtures.nocValue,
            icacValue: Fixtures.icacValue,
            ipkValue: Fixtures.ipkValue,
            caseAdminSubject: NodeId(112233),
            adminVendorId: VendorId(65521),
        });
    });

    return { node, context };
}

async function commission(existingNode?: MockServerNode) {
    const { node } = await almostCommission(existingNode);

    // Do not reuse session from initial commissioning because we must now move from CASE to PASE
    const fabric = node.env.get(FabricManager).getFabrics()[0];
    const context = {
        session: await node.createSession({
            fabric,
            peerNodeId: NodeId(1),
        }),
        command: true,
    };

    await node.online(context, async agent => {
        // Use MockTime.resolve to wait for broadcaster cleanup
        const result = await MockTime.resolve(agent.generalCommissioning.commissioningComplete());
        expect(result).deep.equals({ errorCode: GeneralCommissioning.CommissioningError.Ok, debugText: "" });
    });

    if (!node.lifecycle.isCommissioned) {
        await node.lifecycle.commissioned;
    }

    return { node, context };
}

namespace Fixtures {
    function u(hex: string) {
        return ByteArray.fromHex(hex);
    }

    export const failsafeLengthS = 60;

    export const attestationNonce = u("2cfd6a1c253a03e0f5a9135d841bb443cee50be270ab122ee24b6b0775f53cc6");

    export const csrNonce = u("92c333f220a57c8178863176aeebf1a3ef4d8d45f2d4bd1cb5d1b63a29b8eb3e");

    export const caCert = u(
        "1530010101240201370324140118260480228127260580254d3a370624140118240701240801300941048786311b1347352b08216bc91ecd9e03b1b791ad57f42587b8d62478b853a27414dd7816bbd657b241b3bcc2759998187d10e7e7668fce709bb6611318c19939370a3501290118240260300414898211523c4f998d57c940be9bd24360f503d356300514898211523c4f998d57c940be9bd24360f503d35618300b400d1c064fc9269b4309259f4cbed23f7f10059e29c9a5c728c73b492e8e495af264a4b5338fb2eaefdb3012eeb965eb9eb67f36562a3859c190574929f73eac6a18",
    );

    export const nocValue = u(
        "1530010101240201370324130218260480228127260580254d3a3706241501241101182407012408013009410458b5d8a547375bae6f7e36f6969f6b8322f47386ec57efd7d2b93ec9d559c624e7526c4cfc9590fce7f6b796c66f5cff4cb43cc6dd0d86f78e9b349ca55137c9370a350128011824020136030402040118300414b02b87728e8fe0d7becfe48e60e59962c91531c730051494d101c4667b1123bffe5ccbc3a88dba7a9bc94018300b40fbf900de9b3e2771363af8902eff38edc7b129d54c111087e0221d58ca4afbc74bfa379248a4a2a85ae21baeb33b3cc1dae2e98aa2dbf663081ede54a05bade318",
    );

    export const icacValue = u(
        "1530010101240201370324140118260480228127260580254d3a370624130218240701240801300941045789231805399ce966e541c5d4f554f8c079ad6e9b45d4a3a69d848a4b495c2d10e94270a21bb87bd6241d2d0c05fe481455f1b3a1f51dc8d09e16567946032f370a350129011824026030041494d101c4667b1123bffe5ccbc3a88dba7a9bc940300514898211523c4f998d57c940be9bd24360f503d35618300b40ea5633574251e3a556b6e2adb06eee429a1eb9f7d884415dddaed609637adbe9ee0ee818d92d95acf60bdd548967d9976a18d4081f63964ce7312dff09aec8ec18",
    );

    export const ipkValue = u("74656d706f726172792069706b203031");
}
