/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationBehavior } from "#behaviors/basic-information";
import { GeneralCommissioning } from "#clusters/general-commissioning";
import { Bytes, Crypto, Key, PrivateKey } from "#general";
import { CommissioningServer } from "#index.js";
import {
    ChannelManager,
    Fabric,
    FabricManager,
    InteractionServer,
    InteractionServerMessenger,
    Message,
    SessionType,
} from "#protocol";
import {
    NodeId,
    TlvInvokeRequest,
    TlvInvokeResponseData,
    TlvInvokeResponseForSend,
    TlvReadRequest,
    TlvSubscribeRequest,
    TlvWriteRequest,
    TypeFromSchema,
    VendorId,
} from "#types";
import { Specification } from "@matter/model";
import { MockServerNode } from "./mock-server-node.js";

let activeCommissioning: undefined | ReturnType<typeof CommissioningHelper>;

Crypto.get().createKeyPair = () => {
    const DEFAULT_SEC1_KEY = Bytes.fromHex(
        "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
    );

    const sec1Key =
        activeCommissioning?.fabricNumber !== undefined
            ? Fixtures.fabrics[activeCommissioning.fabricNumber]?.sec1Key
            : DEFAULT_SEC1_KEY;

    return Key({ sec1: sec1Key }) as PrivateKey;
};

export async function testFactoryReset(mode: "online" | "offline-after-commission" | "offline") {
    let node: MockServerNode;
    if (mode !== "offline") {
        ({ node } = await CommissioningHelper().commission());
    } else {
        node = await MockServerNode.createOnline({ online: false });
    }

    if (mode === "offline-after-commission") {
        await node.cancel();
    }

    // We want to confirm unique ID is reset but the ID is not random in testing.  So set to something known we can
    // compare after reset
    const oldUniqueId = "asdf";
    await node.set({ basicInformation: { uniqueId: oldUniqueId } });

    await MockTime.resolve(node.erase());

    // Confirm previous online state is resumed
    expect(node.lifecycle.isOnline).equals(mode === "online");

    // Confirm basic state information is present
    expect(node.stateOf(BasicInformationBehavior).vendorName).equals("Matter.js Test Vendor");

    // Confirm unique ID did not persist
    expect(node.state.basicInformation.uniqueId).not.equals(oldUniqueId);

    // Confirm pairing codes are available
    const pairingCodes = node.stateOf(CommissioningServer).pairingCodes;
    expect(typeof pairingCodes).equals("object");
    expect(typeof pairingCodes.manualPairingCode).equals("string");

    await node.close();
}

export function CommissioningHelper() {
    return {
        fabricNumber: undefined as number | undefined,

        async almostCommission(node?: MockServerNode, number = 0) {
            activeCommissioning = this;

            try {
                if (!node) {
                    node = await MockServerNode.createOnline();
                }

                const params = Fixtures.fabrics[number];
                this.fabricNumber = number;

                const exchange = await node.createExchange();

                const context = { exchange, command: true };

                await node.online(context, async agent => {
                    await agent.generalCommissioning.armFailSafe({
                        expiryLengthSeconds: Fixtures.failsafeLengthS,
                        breadcrumb: 4,
                    });
                });

                await node.online(context, async agent => {
                    await agent.generalCommissioning.setRegulatoryConfig({
                        newRegulatoryConfig: 2,
                        countryCode: "XX",
                        breadcrumb: 5,
                    });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.certificateChainRequest({ certificateType: 2 });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.certificateChainRequest({ certificateType: 1 });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.attestationRequest({
                        attestationNonce: params.attestationNonce,
                    });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.csrRequest({ csrNonce: params.csrNonce });
                });

                await node.online(context, async agent => {
                    agent.operationalCredentials.addTrustedRootCertificate({ rootCaCertificate: params.caCert });
                });

                await node.online(context, async agent => {
                    const result = await agent.operationalCredentials.addNoc({
                        nocValue: params.nocValue,
                        icacValue: params.icacValue,
                        ipkValue: params.ipkValue,
                        caseAdminSubject: NodeId((number + 1) * 100),
                        adminVendorId: VendorId(65521),
                    });
                    expect(result.statusCode).deep.equals(0);
                });

                return { node, context };
            } finally {
                activeCommissioning = undefined;
            }
        },

        async commission(existingNode?: MockServerNode, number = 0) {
            try {
                activeCommissioning = this;

                const { node } = await this.almostCommission(existingNode, number);

                // Do not reuse session from initial commissioning because we must now move from CASE to PASE
                const fabric = node.env.get(FabricManager).fabrics[number];
                const contextOptions = {
                    exchange: await node.createExchange({
                        fabric,
                        peerNodeId: NodeId(number + 1),
                    }),
                    command: true,
                };

                await node.online(contextOptions, async agent => {
                    // Use MockTime.resolve to wait for broadcaster cleanup
                    const result = await MockTime.resolve(agent.generalCommissioning.commissioningComplete());
                    expect(result).deep.equals({
                        errorCode: GeneralCommissioning.CommissioningError.Ok,
                        debugText: "",
                    });
                });

                if (!node.lifecycle.isCommissioned) {
                    await node.lifecycle.commissioned;
                }

                return { node, contextOptions };
            } finally {
                activeCommissioning = undefined;
            }
        },
    };
}

export namespace interaction {
    const BarelyMockedMessenger = {
        sendStatus: _code => {},
        sendDataReport: async (_report, _forFabricFilteredRead) => {},
        send: async (_type, _message) => {},
        close: async () => {},
    } as InteractionServerMessenger;

    const BarelyMockedMessage = {
        packetHeader: { sessionType: SessionType.Unicast },
    } as Message;

    export async function connect(node: MockServerNode, fabric: Fabric) {
        const exchange = await node.createExchange({ fabric });

        const interactionServer = node.env.get(InteractionServer);

        return { exchange, interactionServer };
    }

    export async function write(
        node: MockServerNode,
        fabric: Fabric,
        request: TypeFromSchema<typeof TlvWriteRequest>["writeRequests"][number],
    ) {
        const { exchange, interactionServer } = await connect(node, fabric);

        await interactionServer.handleWriteRequest(
            exchange,
            {
                suppressResponse: true,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                timedRequest: false,
                writeRequests: [request],
            },
            {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message,
        );
    }

    export async function read(
        node: MockServerNode,
        fabric: Fabric,
        isFabricFiltered: boolean,
        request: Exclude<TypeFromSchema<typeof TlvReadRequest>["attributeRequests"], undefined>[number],
    ) {
        const { exchange, interactionServer } = await connect(node, fabric);

        const result = await interactionServer.handleReadRequest(
            exchange,
            {
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                attributeRequests: [request],
                isFabricFiltered: isFabricFiltered,
            },
            {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message,
        );

        const data = result.payload?.next();
        return typeof data?.value === "object" && "attributeData" in data.value
            ? data.value.attributeData?.payload
            : undefined;
    }

    export async function invoke(
        node: MockServerNode,
        fabric: Fabric,
        request: TypeFromSchema<typeof TlvInvokeRequest>["invokeRequests"][number],
        responder: (value: TypeFromSchema<typeof TlvInvokeResponseData>) => void,
    ) {
        const { exchange, interactionServer } = await connect(node, fabric);

        await interactionServer.handleInvokeRequest(
            exchange,
            {
                invokeRequests: [request],
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                suppressResponse: false,
                timedRequest: false,
            },
            {
                ...BarelyMockedMessenger,
                send: async (_type, message) => {
                    const response = TlvInvokeResponseForSend.decode(message).invokeResponses[0];
                    responder(TlvInvokeResponseData.decodeTlv(response));
                },
            } as InteractionServerMessenger,
            BarelyMockedMessage,
        );
    }

    export async function subscribe(
        node: MockServerNode,
        fabric: Fabric,
        request: TypeFromSchema<typeof TlvSubscribeRequest>,
    ) {
        const { exchange, interactionServer } = await connect(node, fabric);

        const channels = node.env.get(ChannelManager);
        channels.getChannel = () => exchange.channel;

        await interactionServer.handleSubscribeRequest(exchange, request, BarelyMockedMessenger, BarelyMockedMessage);
    }
}

export namespace Fixtures {
    function u(hex: string) {
        return Bytes.fromHex(hex);
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
                "1530010101240201370324130218260480228127260580254d3a370624150124110118240701240801300941043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba370a350128011824020136030402040118300414b02b87728e8fe0d7becfe48e60e59962c91531c730051494d101c4667b1123bffe5ccbc3a88dba7a9bc94018300b40fbf900de9b3e2771363af8902eff38edc7b129d54c111087e0221d58ca4afbc74bfa379248a4a2a85ae21baeb33b3cc1dae2e98aa2dbf663081ede54a05bade318",
            ),

            icacValue: u(
                "1530010101240201370324140118260480228127260580254d3a370624130218240701240801300941045789231805399ce966e541c5d4f554f8c079ad6e9b45d4a3a69d848a4b495c2d10e94270a21bb87bd6241d2d0c05fe481455f1b3a1f51dc8d09e16567946032f370a350129011824026030041494d101c4667b1123bffe5ccbc3a88dba7a9bc940300514898211523c4f998d57c940be9bd24360f503d35618300b40ea5633574251e3a556b6e2adb06eee429a1eb9f7d884415dddaed609637adbe9ee0ee818d92d95acf60bdd548967d9976a18d4081f63964ce7312dff09aec8ec18",
            ),

            ipkValue: u("74656d706f726172792069706b203031"),

            sec1Key: u(
                "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
            ),
        },
        {
            attestationNonce: u("35655d2c73a9fd8067443f7394da7b3030bc239a5d6d8de0bc727c1be339c0bf"),

            csrNonce: u("92c333f220a57c8178863176aeebf1a3ef4d8d45f2d4bd1cb5d1b63a29b8eb3e"),

            caCert: u(
                "1530010101240201370324140118260480228127260580254d3a37062414011824070124080130094104b9ab722d204c75eaadd8bdf9e45cc50829d50250cdd2b324513ae7209c82e4d5a423ddbcc9e7375214fe7f06ef3c8a75a99315fcbd9eb03934d9a2c8f4e12c35370a3501290118240260300414e11fb699346554a6e43055e4a790bda9b1f0a558300514e11fb699346554a6e43055e4a790bda9b1f0a55818300b40020c2c400f8b8ddb047cecdaf996668496383a62e7597d1984f7335b7fda0448109fa4b5c9dc9ad0d79ee9e1fe60ccbab081932c4b1aa212e5476d65810ccacf18",
            ),

            nocValue: u(
                "1530010101240201370324130218260480228127260580254d3a3706241501241102182407012408013009410490495e266f4291ffae925d58654ecf67527b052256af369cd81e20ee23d68e6f2e769ba7358eb4459c5df393799a57fe996f1cd4e8bc9ff977e3279f62adf182370a350128011824020136030402040118300414f93ba80eac51bb6001c5eb1a9bcb7695c37ea59530051435efb6ef11a6ba2623301212798224a21cd2832118300b40b7a069f6cc83f0bede4c0eacb33a4d58a4f9ec3fb1423114f36566e6c06d2884d6f3d1f06b957f56b4ccc52e7a440880709b629a7ea983c6779d691045be553818",
            ),

            icacValue: u(
                "1530010101240201370324140118260480228127260580254d3a37062413021824070124080130094104a5add92a13816f79eece14c3dee05d7a85738d2b746b8d7992744465133adbf56a3d5f0dcc69c9512bb7c93654d52b790f0d28958064d58c4ec8d941d9f989ba370a350129011824026030041435efb6ef11a6ba2623301212798224a21cd28321300514e11fb699346554a6e43055e4a790bda9b1f0a55818300b4074a61f76df08caa2486dfdd8f8a8bad9dd5f2af120c8d2d6ce86d6ca2156feb38e9c1e0f78dded84c1181e03c9b8c860584a2267e2b9cc29b7ff69553fd35aff18",
            ),

            ipkValue: u("74656d706f726172792069706b203031"),

            sec1Key: u(
                "30770201010420fef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
            ),
        },
    ];

    export namespace Fabric2 {}
}
