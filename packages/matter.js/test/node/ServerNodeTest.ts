/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

    it("commissions twice", async () => {
        const { node } = await commission();

        let lastCommissionedFabricCount;
        node.events.operationalCredentials.commissionedFabrics$Change.on(commissionedFabrics => {
            lastCommissionedFabricCount = commissionedFabrics;
        });

        let lastCommissionedFabricIndex;
        node.events.commissioning.fabricsChanged.on(fabricIndex => {
            lastCommissionedFabricIndex = fabricIndex;
        });

        let lastFabricsCount;
        node.events.operationalCredentials.fabrics$Change.on(fabrics => {
            lastFabricsCount = fabrics.length;
        });

        await commission(node, 1);

        expect(node.state.operationalCredentials.nocs.length).equals(2);
        expect(Object.keys(node.state.commissioning.fabrics).length).equals(2);

        expect(lastCommissionedFabricCount).equals(2);
        expect(lastCommissionedFabricIndex).equals(2);
        expect(lastFabricsCount).equals(2);

        node.cancel();

        if (node.lifecycle.isOnline) {
            await MockTime.resolve(node.lifecycle.offline);
        }

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

async function almostCommission(node?: MockServerNode, number = 0) {
    if (!node) {
        node = await MockServerNode.createOnline();
    }

    const params = Fixtures.fabrics[number];

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
        agent.operationalCredentials.attestationRequest({ attestationNonce: params.attestationNonce });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.csrRequest({ csrNonce: params.csrNonce });
    });

    await node.online(context, async agent => {
        agent.operationalCredentials.addTrustedRootCertificate({ rootCaCertificate: params.caCert });
    });

    await node.online(context, async agent => {
        await agent.operationalCredentials.addNoc({
            nocValue: params.nocValue,
            icacValue: params.icacValue,
            ipkValue: params.ipkValue,
            caseAdminSubject: NodeId(number * 100),
            adminVendorId: VendorId(65521),
        });
    });

    return { node, context };
}

async function commission(existingNode?: MockServerNode, number = 0) {
    const { node } = await almostCommission(existingNode, number);

    // Do not reuse session from initial commissioning because we must now move from CASE to PASE
    const fabric = node.env.get(FabricManager).getFabrics()[number];
    const context = {
        session: await node.createSession({
            fabric,
            peerNodeId: NodeId(number + 1),
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

    export const fabrics = [
        {
            attestationNonce: u("2cfd6a1c253a03e0f5a9135d841bb443cee50be270ab122ee24b6b0775f53cc6"),

            csrNonce: u("92c333f220a57c8178863176aeebf1a3ef4d8d45f2d4bd1cb5d1b63a29b8eb3e"),

            caCert: u(
                "1530010101240201370324140118260480228127260580254d3a370624140118240701240801300941048786311b1347352b08216bc91ecd9e03b1b791ad57f42587b8d62478b853a27414dd7816bbd657b241b3bcc2759998187d10e7e7668fce709bb6611318c19939370a3501290118240260300414898211523c4f998d57c940be9bd24360f503d356300514898211523c4f998d57c940be9bd24360f503d35618300b400d1c064fc9269b4309259f4cbed23f7f10059e29c9a5c728c73b492e8e495af264a4b5338fb2eaefdb3012eeb965eb9eb67f36562a3859c190574929f73eac6a18",
            ),

            nocValue: u(
                "1530010101240201370324130218260480228127260580254d3a3706241501241101182407012408013009410458b5d8a547375bae6f7e36f6969f6b8322f47386ec57efd7d2b93ec9d559c624e7526c4cfc9590fce7f6b796c66f5cff4cb43cc6dd0d86f78e9b349ca55137c9370a350128011824020136030402040118300414b02b87728e8fe0d7becfe48e60e59962c91531c730051494d101c4667b1123bffe5ccbc3a88dba7a9bc94018300b40fbf900de9b3e2771363af8902eff38edc7b129d54c111087e0221d58ca4afbc74bfa379248a4a2a85ae21baeb33b3cc1dae2e98aa2dbf663081ede54a05bade318",
            ),

            icacValue: u(
                "1530010101240201370324140118260480228127260580254d3a370624130218240701240801300941045789231805399ce966e541c5d4f554f8c079ad6e9b45d4a3a69d848a4b495c2d10e94270a21bb87bd6241d2d0c05fe481455f1b3a1f51dc8d09e16567946032f370a350129011824026030041494d101c4667b1123bffe5ccbc3a88dba7a9bc940300514898211523c4f998d57c940be9bd24360f503d35618300b40ea5633574251e3a556b6e2adb06eee429a1eb9f7d884415dddaed609637adbe9ee0ee818d92d95acf60bdd548967d9976a18d4081f63964ce7312dff09aec8ec18",
            ),

            ipkValue: u("74656d706f726172792069706b203031"),
        },
        {
            attestationNonce: u("35655d2c73a9fd8067443f7394da7b3030bc239a5d6d8de0bc727c1be339c0bf"),

            csrNonce: u("92c333f220a57c8178863176aeebf1a3ef4d8d45f2d4bd1cb5d1b63a29b8eb3e"),

            caCert: u(
                "1530010101240201370324140118260480228127260580254d3a37062414011824070124080130094104b9ab722d204c75eaadd8bdf9e45cc50829d50250cdd2b324513ae7209c82e4d5a423ddbcc9e7375214fe7f06ef3c8a75a99315fcbd9eb03934d9a2c8f4e12c35370a3501290118240260300414e11fb699346554a6e43055e4a790bda9b1f0a558300514e11fb699346554a6e43055e4a790bda9b1f0a55818300b40020c2c400f8b8ddb047cecdaf996668496383a62e7597d1984f7335b7fda0448109fa4b5c9dc9ad0d79ee9e1fe60ccbab081932c4b1aa212e5476d65810ccacf18",
            ),

            nocValue: u(
                "1530010101240201370324130218260480228127260580254d3a37062415012411021824070124080130094104350707d035029b082073b387a7aaed4b307a8cd0091cd963832e03e73925b7f973453a69733aad397dd11550ffe0f4dfe8e0f11479172cd8def08e5a89717cd9370a350128011824020136030402040118300414f93ba80eac51bb6001c5eb1a9bcb7695c37ea59530051435efb6ef11a6ba2623301212798224a21cd2832118300b40b7a069f6cc83f0bede4c0eacb33a4d58a4f9ec3fb1423114f36566e6c06d2884d6f3d1f06b957f56b4ccc52e7a440880709b629a7ea983c6779d691045be553818",
            ),

            icacValue: u(
                "1530010101240201370324140118260480228127260580254d3a37062413021824070124080130094104a5add92a13816f79eece14c3dee05d7a85738d2b746b8d7992744465133adbf56a3d5f0dcc69c9512bb7c93654d52b790f0d28958064d58c4ec8d941d9f989ba370a350129011824026030041435efb6ef11a6ba2623301212798224a21cd28321300514e11fb699346554a6e43055e4a790bda9b1f0a55818300b4074a61f76df08caa2486dfdd8f8a8bad9dd5f2af120c8d2d6ce86d6ca2156feb38e9c1e0f78dded84c1181e03c9b8c860584a2267e2b9cc29b7ff69553fd35aff18",
            ),

            ipkValue: u("74656d706f726172792069706b203031"),
        },
    ];

    export namespace Fabric2 {}
}
