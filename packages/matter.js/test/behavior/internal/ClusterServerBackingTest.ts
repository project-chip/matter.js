/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../src/MatterDevice.js";
import { NetworkCommissioningServer } from "../../../src/behavior/definitions/network-commissioning/NetworkCommissioningServer.js";
import { NetworkServer } from "../../../src/behavior/system/network/NetworkServer.js";
import { AccessControl } from "../../../src/cluster/definitions/AccessControlCluster.js";
import { BasicInformation } from "../../../src/cluster/definitions/BasicInformationCluster.js";
import { NetworkCommissioning } from "../../../src/cluster/definitions/NetworkCommissioningCluster.js";
import { OperationalCredentials } from "../../../src/cluster/definitions/OperationalCredentialsCluster.js";
import { Message, SessionType } from "../../../src/codec/MessageCodec.js";
import { AttributeId } from "../../../src/datatype/AttributeId.js";
import { ClusterId } from "../../../src/datatype/ClusterId.js";
import { EndpointNumber } from "../../../src/datatype/EndpointNumber.js";
import { FabricId } from "../../../src/datatype/FabricId.js";
import { FabricIndex } from "../../../src/datatype/FabricIndex.js";
import { NodeId } from "../../../src/datatype/NodeId.js";
import { TlvSubjectId } from "../../../src/datatype/SubjectId.js";
import { VendorId } from "../../../src/datatype/VendorId.js";
import { OnOffLightDevice } from "../../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { Fabric, FabricBuilder } from "../../../src/fabric/Fabric.js";
import { FabricManager } from "../../../src/fabric/FabricManager.js";
import { Globals } from "../../../src/model/index.js";
import { ExchangeManager } from "../../../src/protocol/ExchangeManager.js";
import { MessageExchange } from "../../../src/protocol/MessageExchange.js";
import { InteractionServerMessenger, MessageType } from "../../../src/protocol/interaction/InteractionMessenger.js";
import {
    TlvDataReport,
    TlvReadRequest,
    TlvStatusResponse,
    TlvSubscribeRequest,
    TlvWriteRequest,
} from "../../../src/protocol/interaction/InteractionProtocol.js";
import { INTERACTION_MODEL_REVISION } from "../../../src/protocol/interaction/InteractionServer.js";
import { StatusCode } from "../../../src/protocol/interaction/StatusCode.js";
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
    "153001010124020137032414001826048012542826058015203b370624150124110918240701240801300941043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba370a35012801182402013603040204011830041402cce0d7bfa29e98e454be38e27bfe6c0f162302300514e766069362d7e35b79687161644d222bdde93a6818300b4050e8183c290f438a57516faea006282d6d2b5178d5d15dfcc3ec8a9232db942894ff2d2ce941d3b42dd8a2cd51eea4f3f50b66757959368868c3a0a1b5fe665f18",
);

const FABRICS_PATH = {
    endpointId: EndpointNumber(0),
    clusterId: OperationalCredentials.Cluster.id,
    attributeId: OperationalCredentials.Cluster.attributes.fabrics.id,
};

const COMMISSIONED_FABRICS_PATH = {
    endpointId: EndpointNumber(0),
    clusterId: OperationalCredentials.Cluster.id,
    attributeId: OperationalCredentials.Cluster.attributes.commissionedFabrics.id,
};

const LEAVE_PATH = {
    endpointId: EndpointNumber(0),
    clusterId: BasicInformation.Cluster.id,
    eventId: BasicInformation.Cluster.events.leave.id,
};

const IPK_KEY = ByteArray.fromHex("74656d706f726172792069706b203031");

async function createFabric(node: MockServerNode, index = 1) {
    const builder = new FabricBuilder();
    builder.setRootVendorId(VendorId(0));
    builder.setRootNodeId(NodeId(1));
    builder.setRootCert(ROOT_CERT);
    builder.setOperationalCert(NEW_OP_CERT);
    builder.setIdentityProtectionKey(IPK_KEY);
    const fabric = await builder.build(FabricIndex(index));
    node.env.get(FabricManager).addFabric(fabric);
    return fabric;
}

class WifiCommissioningServer extends NetworkCommissioningServer.with("WiFiNetworkInterface") {
    override initialize() {
        this.state.maxNetworks = 4;
        this.state.scanMaxTimeSeconds = 20;
        this.state.connectMaxTimeSeconds = 40;
    }
}

async function connect(node: MockServerNode, fabric: Fabric) {
    const exchange = await node.createExchange({ fabric });

    const interactionServer = node.behaviors.internalsOf(NetworkServer).runtime.interactionServer;

    return { exchange, interactionServer };
}

async function performWrite(
    node: MockServerNode,
    fabric: Fabric,
    request: TypeFromSchema<typeof TlvWriteRequest>["writeRequests"][number],
) {
    const { exchange, interactionServer } = await connect(node, fabric);

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
    const { exchange, interactionServer } = await connect(node, fabric);

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

async function performSubscribe(
    node: MockServerNode,
    fabric: Fabric,
    request: TypeFromSchema<typeof TlvSubscribeRequest>,
) {
    const { exchange, interactionServer } = await connect(node, fabric);

    await interactionServer.handleSubscribeRequest(
        exchange,
        request,
        {
            sendStatus: _code => {},
            sendDataReport: async _report => {},
            send: async (_type, _message) => {},
            close: async () => {},
        } as InteractionServerMessenger,
        {
            packetHeader: { sessionType: SessionType.Unicast },
        } as Message,
    );
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
    return await performRead(node, await createFabric(node, 1), false, {
        endpointId: EndpointNumber(endpoint),
        clusterId: ClusterId(cluster),
        attributeId: AttributeId(Globals.AcceptedCommandList.id),
    });
}

describe("ClusterServerBacking", () => {
    beforeEach(() => {
        MockTime.reset(676698400000);
    });

    it("properly filters reads and writes", async () => {
        const node = await MockServerNode.createOnline();

        const fabric1 = await createFabric(node, 1);
        const fabric2 = await createFabric(node, 2);

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

    it("properly handles subscribe and notify of attributes and events", async () => {
        const node = await MockServerNode.createOnline();

        const fabric1 = await createFabric(node, 1);

        // Create a subscription to a couple of attributes and an event
        await performSubscribe(node, fabric1, {
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            isFabricFiltered: false,
            attributeRequests: [FABRICS_PATH, COMMISSIONED_FABRICS_PATH],
            eventRequests: [LEAVE_PATH],
            keepSubscriptions: true,
            minIntervalFloorSeconds: 1,
            maxIntervalCeilingSeconds: 2,
        });

        // State for the mock method we create below -- the last data report and a promise to notify us of its arrival
        let promise: Promise<void>;
        let resolve: () => void;
        let report: TypeFromSchema<typeof TlvDataReport> | undefined;

        // Mock ExchangeManager's "initiateExchange" method
        node.env.get(ExchangeManager).initiateExchange = (fabric, nodeId) => {
            expect(fabric.fabricId).equals(FabricId(1));
            expect(nodeId).equals(NodeId(0));

            return {
                async nextMessage() {
                    return {
                        payloadHeader: {
                            messageType: MessageType.StatusResponse,
                        },
                        payload: TlvStatusResponse.encode({
                            status: StatusCode.Success,
                            interactionModelRevision: INTERACTION_MODEL_REVISION,
                        }),
                    } as Message;
                },
                async send(messageType, payload, _options) {
                    expect(messageType).equals(MessageType.ReportData);
                    report = TlvDataReport.decode(payload, false);
                    if (!report.attributeReports && !report.eventReports) {
                        return;
                    }
                    resolve();
                },
                async close() {},
            } as MessageExchange<MatterDevice>;
        };

        // Create another fabric so we can capture subscription messages
        promise = new Promise(r => (resolve = r));
        const fabric2 = await createFabric(node, 2);
        await MockTime.resolve(promise);

        expect(report?.attributeReports?.length).equals(2);
        expect(report?.eventReports).equals(undefined);

        // Confirm the first report is for Fabrics
        const fabricsReport = report?.attributeReports?.[0]?.attributeData;
        expect(fabricsReport?.path).deep.equals(FABRICS_PATH);
        expect(
            (
                fabricsReport?.data &&
                OperationalCredentials.Cluster.attributes.fabrics.schema.decodeTlv(fabricsReport?.data)
            )?.map(({ fabricIndex }) => fabricIndex),
        ).deep.equals([1, 2]);

        // Confirm the second report is for CommissionedFabrics
        const commissionedFabricsReport = report?.attributeReports?.[1]?.attributeData;
        expect(commissionedFabricsReport?.path).deep.equals(COMMISSIONED_FABRICS_PATH);
        expect(
            commissionedFabricsReport?.data &&
                OperationalCredentials.Cluster.attributes.commissionedFabrics.schema.decodeTlv(
                    commissionedFabricsReport.data,
                ),
        ).deep.equals(2);

        // Remove the second fabric so we can capture the leave event notification
        promise = new Promise(r => (resolve = r));
        await fabric2.remove();
        await MockTime.resolve(promise);

        expect(report?.attributeReports?.length).equals(2);
        expect(report?.eventReports?.length).equals(1);

        // Confirm we received leave event for second fabric
        const leaveReport = report?.eventReports?.[0]?.eventData;
        expect(leaveReport?.path).deep.equals(LEAVE_PATH);
        expect(
            leaveReport?.data && BasicInformation.Cluster.events.leave.schema.decodeTlv(leaveReport?.data),
        ).deep.equals({
            fabricIndex: 2,
        });

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
