/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningServer } from "../../../src/behavior/definitions/network-commissioning/NetworkCommissioningServer.js";
import { NetworkServer } from "../../../src/behavior/system/network/NetworkServer.js";
import { AccessControl } from "../../../src/cluster/definitions/AccessControlCluster.js";
import { NetworkCommissioning } from "../../../src/cluster/definitions/NetworkCommissioningCluster.js";
import { Message, SessionType } from "../../../src/codec/MessageCodec.js";
import { AttributeId } from "../../../src/datatype/AttributeId.js";
import { ClusterId } from "../../../src/datatype/ClusterId.js";
import { EndpointNumber } from "../../../src/datatype/EndpointNumber.js";
import { FabricIndex } from "../../../src/datatype/FabricIndex.js";
import { NodeId } from "../../../src/datatype/NodeId.js";
import { TlvSubjectId } from "../../../src/datatype/SubjectId.js";
import { VendorId } from "../../../src/datatype/VendorId.js";
import { OnOffLightDevice } from "../../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { Fabric, FabricBuilder } from "../../../src/fabric/Fabric.js";
import { Globals } from "../../../src/model/index.js";
import { TlvReadRequest, TlvWriteRequest } from "../../../src/protocol/interaction/InteractionProtocol.js";
import { INTERACTION_MODEL_REVISION } from "../../../src/protocol/interaction/InteractionServer.js";
import { TlvArray } from "../../../src/tlv/TlvArray.js";
import { TlvNullable } from "../../../src/tlv/TlvNullable.js";
import { TlvEnum } from "../../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../../src/tlv/TlvSchema.js";
import { ByteArray } from "../../../src/util/ByteArray.js";
import { MockServerNode } from "../../node/mock-server-node.js";

const ROOT_CERT = ByteArray.fromHex(
    "153001010024020137032414001826048012542826058015203b37062414001824070124080130094104d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d370a3501290118240260300414e766069362d7e35b79687161644d222bdde93a68300514e766069362d7e35b79687161644d222bdde93a6818300b404e8fb06526f0332b3e928166864a6d29cade53fb5b8918a6d134d0994bf1ae6dce6762dcba99e80e96249d2f1ccedb336b26990f935dba5a0b9e5b4c9e5d1d8f1818181824ff0118",
);

const NEW_OP_CERT = ByteArray.fromHex(
    "153001010124020137032414001826048012542826058015203b370624150124110918240701240801300941049ac1dc9995e6897f2bf1420a6efdba30781ac3dcdb7bb15e993050ff0ce92c52727b029c30f11f163b177d3bfa37f015db156994801f0e0f9b64c72bf8a15153370a35012801182402013603040204011830041402cce0d7bfa29e98e454be38e27bfe6c0f162302300514e766069362d7e35b79687161644d222bdde93a6818300b4050e8183c290f438a57516faea006282d6d2b5178d5d15dfcc3ec8a9232db942894ff2d2ce941d3b42dd8a2cd51eea4f3f50b66757959368868c3a0a1b5fe665f18",
);

const IPK_KEY = ByteArray.fromHex("74656d706f726172792069706b203031");

function createFabric(index = 1) {
    const builder = new FabricBuilder();
    builder.setRootVendorId(VendorId(0));
    builder.setRootNodeId(NodeId(1));
    builder.setRootCert(ROOT_CERT);
    builder.setOperationalCert(NEW_OP_CERT);
    builder.setIdentityProtectionKey(IPK_KEY);
    return builder.build(FabricIndex(index));
}

class WifiCommissioningServer extends NetworkCommissioningServer.with("WiFiNetworkInterface") {
    override initialize() {
        this.state.maxNetworks = 4;
        this.state.scanMaxTimeSeconds = 20;
        this.state.connectMaxTimeSeconds = 40;
    }
}

async function performWrite(
    node: MockServerNode,
    fabric: Fabric,
    request: TypeFromSchema<typeof TlvWriteRequest>["writeRequests"][number],
) {
    const exchange = await node.createExchange({ fabric });

    const interactionServer = node.behaviors.internalsOf(NetworkServer).runtime.interactionServer;

    await interactionServer.handleWriteRequest(
        exchange,
        {
            suppressResponse: true,
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            timedRequest: false,
            writeRequests: [request],
        },
        {
            packetHeader: { sessionType: SessionType.Unicast },
        } as Message,
    );
}

async function performRead(
    node: MockServerNode,
    fabric: Fabric,
    isFabricFiltered: boolean,
    request: Exclude<TypeFromSchema<typeof TlvReadRequest>["attributeRequests"], undefined>[number],
) {
    const exchange = await node.createExchange({ fabric });

    const interactionServer = node.behaviors.internalsOf(NetworkServer).runtime.interactionServer;

    const result = await interactionServer.handleReadRequest(
        exchange,
        {
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            attributeRequests: [request],
            isFabricFiltered: isFabricFiltered,
        },
        {
            packetHeader: { sessionType: SessionType.Unicast },
        } as Message,
    );

    return result.attributeReportsPayload?.[0]?.attributeData?.payload;
}

// This is AccessControl.AccessControlEntryStruct but not sure how to remove fabric index from payload so just
// redefining for now
const AcesWithoutFabric = TlvObject({
    privilege: TlvField(1, TlvEnum<AccessControl.AccessControlEntryPrivilege>()),
    authMode: TlvField(2, TlvEnum<AccessControl.AccessControlEntryAuthMode>()),
    subjects: TlvField(3, TlvNullable(TlvArray(TlvSubjectId))),
    targets: TlvField(4, TlvNullable(TlvArray(AccessControl.TlvAccessControlTargetStruct))),
});

async function writeAcl(node: MockServerNode, fabric: Fabric, acl: TypeFromSchema<typeof AcesWithoutFabric>) {
    await performWrite(node, fabric, {
        path: {
            endpointId: EndpointNumber(0),
            clusterId: ClusterId(AccessControl.Cluster.id),
            attributeId: AttributeId(AccessControl.Cluster.attributes.acl.id),
        },
        data: TlvArray(AcesWithoutFabric).encodeTlv([acl]),
    });
}

async function readAcls(node: MockServerNode, fabric: Fabric, isFabricFiltered: boolean) {
    return await performRead(node, fabric, isFabricFiltered, {
        endpointId: EndpointNumber(0),
        clusterId: AccessControl.Cluster.id,
        attributeId: AttributeId(AccessControl.Cluster.attributes.acl.id),
    });
}

async function readCommandList(node: MockServerNode, cluster: number, endpoint = 1) {
    return await performRead(node, await createFabric(1), false, {
        endpointId: EndpointNumber(endpoint),
        clusterId: ClusterId(cluster),
        attributeId: AttributeId(Globals.AcceptedCommandList.id),
    });
}

describe("ClusterServerBacking", () => {
    it("properly filters reads and writes", async () => {
        const node = await MockServerNode.createOnline();

        const fabric1 = await createFabric(1);
        const fabric2 = await createFabric(2);

        await writeAcl(node, fabric1, {
            privilege: AccessControl.AccessControlEntryPrivilege.Administer,
            authMode: 1,
            subjects: null,
            targets: null,
        });

        await writeAcl(node, fabric2, {
            privilege: AccessControl.AccessControlEntryPrivilege.Administer,
            authMode: 1,
            subjects: null,
            targets: null,
        });

        expect(node.state.accessControl.acl).deep.equals([
            { privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 1 },
            { privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 2 },
        ]);

        const fabric1Acls = await readAcls(node, fabric1, true);

        expect(fabric1Acls).deep.equals([{ privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 1 }]);

        const fabric2Acls = await readAcls(node, fabric2, true);
        expect(fabric2Acls).deep.equals([{ privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 2 }]);

        const allAcls = await readAcls(node, fabric1, false);

        expect(allAcls).deep.equals([
            { privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 1 },
            { privilege: 5, authMode: 1, subjects: null, targets: null, fabricIndex: 2 },
        ]);

        await node.close();
    });

    describe("AcceptedCommandList", () => {
        it("indicates support only for implemented methods", async () => {
            class MyServer extends WifiCommissioningServer {
                override scanNetworks(): NetworkCommissioning.ScanNetworksResponse {
                    return {
                        networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    };
                }
            }

            const MyDevice = OnOffLightDevice.with(MyServer);

            const node = await MockServerNode.createOnline({ device: MyDevice });

            const commands = await readCommandList(node, NetworkCommissioning.Cluster.id, 1);

            expect(commands).deep.equals([
                NetworkCommissioning.WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.commands.scanNetworks
                    .requestId,
            ]);
        });
    });
});
