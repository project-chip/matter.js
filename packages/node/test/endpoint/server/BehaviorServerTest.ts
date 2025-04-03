/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningServer } from "#behaviors/network-commissioning";
import { OnOffServer } from "#behaviors/on-off";
import { AccessControl } from "#clusters/access-control";
import { BasicInformation } from "#clusters/basic-information";
import { NetworkCommissioning } from "#clusters/network-commissioning";
import { OnOff } from "#clusters/on-off";
import { OperationalCredentials } from "#clusters/operational-credentials";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Bytes } from "#general";
import { AcceptedCommandList, FeatureMap, GeneratedCommandList, Specification } from "#model";
import { Fabric, FabricBuilder, FabricManager } from "#protocol";
import {
    AttributeId,
    ClusterId,
    CommandId,
    EndpointNumber,
    FabricIndex,
    NodeId,
    Status,
    TlvArray,
    TlvEnum,
    TlvField,
    TlvInvokeResponseData,
    TlvNullable,
    TlvObject,
    TlvSubjectId,
    TypeFromSchema,
    VendorId,
} from "#types";
import { MockServerNode } from "../../node/mock-server-node.js";
import { interaction } from "../../node/node-helpers.js";

const ROOT_CERT = Bytes.fromHex(
    "153001010024020137032414001826048012542826058015203b37062414001824070124080130094104d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d370a3501290118240260300414e766069362d7e35b79687161644d222bdde93a68300514e766069362d7e35b79687161644d222bdde93a6818300b404e8fb06526f0332b3e928166864a6d29cade53fb5b8918a6d134d0994bf1ae6dce6762dcba99e80e96249d2f1ccedb336b26990f935dba5a0b9e5b4c9e5d1d8f1818181824ff0118",
);

const NEW_OP_CERT = Bytes.fromHex(
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

const IPK_KEY = Bytes.fromHex("74656d706f726172792069706b203031");

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
        this.state.supportedWiFiBands = [NetworkCommissioning.WiFiBand["2G4"]];
    }
}

// This is AccessControl.AccessControlEntryStruct but not sure how to remove fabric index from payload so just
// redefining for now
const AcesWithoutFabric = TlvObject({
    privilege: TlvField(1, TlvEnum<AccessControl.AccessControlEntryPrivilege>()),
    authMode: TlvField(2, TlvEnum<AccessControl.AccessControlEntryAuthMode>()),
    subjects: TlvField(3, TlvNullable(TlvArray(TlvSubjectId))),
    targets: TlvField(4, TlvNullable(TlvArray(AccessControl.TlvAccessControlTarget))),
});

async function writeAcl(node: MockServerNode, fabric: Fabric, acl: TypeFromSchema<typeof AcesWithoutFabric>) {
    await interaction.write(node, fabric, {
        path: {
            endpointId: EndpointNumber(0),
            clusterId: ClusterId(AccessControl.Cluster.id),
            attributeId: AttributeId(AccessControl.Cluster.attributes.acl.id),
        },
        data: TlvArray(AcesWithoutFabric).encodeTlv([acl]),
    });
}

async function readAcls(node: MockServerNode, fabric: Fabric, isFabricFiltered: boolean) {
    return await interaction.read(node, fabric, isFabricFiltered, {
        endpointId: EndpointNumber(0),
        clusterId: AccessControl.Cluster.id,
        attributeId: AttributeId(AccessControl.Cluster.attributes.acl.id),
    });
}

describe("BehaviorServer", () => {
    beforeEach(() => {
        MockTime.reset(676698400000);
    });

    it("properly filters reads and writes", async () => {
        const node = await MockServerNode.createOnline();

        const fabric1 = await createFabric(node, 1);
        const fabric2 = await createFabric(node, 2);

        await writeAcl(node, fabric1, {
            privilege: AccessControl.AccessControlEntryPrivilege.Administer,
            authMode: AccessControl.AccessControlEntryAuthMode.Case,
            subjects: null,
            targets: null,
        });

        await writeAcl(node, fabric2, {
            privilege: AccessControl.AccessControlEntryPrivilege.Administer,
            authMode: AccessControl.AccessControlEntryAuthMode.Case,
            subjects: null,
            targets: null,
        });

        expect(node.state.accessControl.acl).deep.equals([
            { privilege: 5, authMode: 2, subjects: null, targets: null, fabricIndex: 1 },
            { privilege: 5, authMode: 2, subjects: null, targets: null, fabricIndex: 2 },
        ]);

        const fabric1Acls = await readAcls(node, fabric1, true);

        expect(fabric1Acls).deep.equals([{ privilege: 5, authMode: 2, subjects: null, targets: null, fabricIndex: 1 }]);

        const fabric2Acls = await readAcls(node, fabric2, true);
        expect(fabric2Acls).deep.equals([{ privilege: 5, authMode: 2, subjects: null, targets: null, fabricIndex: 2 }]);

        const allAclsReadAsFabric1 = await readAcls(node, fabric1, false);

        expect(allAclsReadAsFabric1).deep.equals([
            { privilege: 5, authMode: 2, subjects: null, targets: null, fabricIndex: 1 },
            { privilege: undefined, authMode: undefined, subjects: undefined, targets: undefined, fabricIndex: 2 },
        ]);

        await node.close();
    });

    it("properly handles subscribe and notify of attributes and events", async () => {
        const node = await MockServerNode.createOnline();

        const fabric1 = await createFabric(node, 1);

        // We ignore the initial data report other than confirming receipt

        // Create a subscription to a couple of attributes and an event
        await interaction.subscribe(node, fabric1, {
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            isFabricFiltered: false,
            attributeRequests: [FABRICS_PATH, COMMISSIONED_FABRICS_PATH],
            eventRequests: [LEAVE_PATH],
            keepSubscriptions: true,
            minIntervalFloorSeconds: 1,
            maxIntervalCeilingSeconds: 2,
        });

        // Should already be resolved
        const exchange = await node.handleExchange();
        await exchange.writeStatus();

        // Handle updated report
        const fabricAdded = interaction.receiveData(node, 2, 0);

        // Create another fabric so we can capture subscription messages
        const fabric2 = await createFabric(node, 2);
        let report = await MockTime.resolve(fabricAdded);

        const fabricsReport = report.attributes[0]?.attributeData;
        expect(fabricsReport?.path).deep.equals(FABRICS_PATH);
        const decodedFabrics =
            fabricsReport?.data &&
            OperationalCredentials.Cluster.attributes.fabrics.schema.decodeTlv(fabricsReport?.data);
        expect(decodedFabrics?.map(({ fabricIndex }) => fabricIndex)).deep.equals([1, 2]);

        const commissionedFabricsReport = report.attributes[1]?.attributeData;
        expect(commissionedFabricsReport?.path).deep.equals(COMMISSIONED_FABRICS_PATH);

        const commissionedFabricCount =
            commissionedFabricsReport?.data &&
            OperationalCredentials.Cluster.attributes.commissionedFabrics.schema.decodeTlv(
                commissionedFabricsReport.data,
            );
        expect(commissionedFabricCount).deep.equals(2);

        // Remove the second fabric so we can capture the leave event notification
        const fabricRemoved = interaction.receiveData(node, 2, 1);

        await MockTime.resolve(fabric2.remove());

        report = await MockTime.resolve(fabricRemoved);

        // Confirm we received leave event for second fabric
        const leaveReport = report.events[0]?.eventData;
        expect(leaveReport?.path).deep.equals(LEAVE_PATH);
        expect(
            leaveReport?.data && BasicInformation.Cluster.events.leave.schema.decodeTlv(leaveReport?.data),
        ).deep.equals({
            fabricIndex: 2,
        });

        await node.close();
    });

    it("indicates support only for implemented commands", async () => {
        class MyServer extends WifiCommissioningServer {
            override scanNetworks(): NetworkCommissioning.ScanNetworksResponse {
                return {
                    networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                };
            }
        }

        const MyDevice = OnOffLightDevice.with(MyServer);

        const node = await MockServerNode.createOnline({ device: MyDevice });

        const fabric = await createFabric(node, 1);

        const commands = await interaction.read(node, fabric, false, {
            endpointId: EndpointNumber(1),
            clusterId: ClusterId(NetworkCommissioning.Cluster.id),
            attributeId: AttributeId(AcceptedCommandList.id),
        });

        expect(commands).deep.equals([
            NetworkCommissioning.WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.commands.scanNetworks.requestId,
        ]);

        const commandResponds = await interaction.read(node, fabric, false, {
            endpointId: EndpointNumber(1),
            clusterId: ClusterId(NetworkCommissioning.Cluster.id),
            attributeId: AttributeId(GeneratedCommandList.id),
        });

        expect(commandResponds).deep.equals([
            NetworkCommissioning.WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.commands.scanNetworks.responseId,
        ]);
    });

    it("publishes correct feature map", async () => {
        const MyServer = OnOffServer.with("Lighting");

        const MyDevice = OnOffLightDevice.with(MyServer);

        const node = await MockServerNode.createOnline({ device: MyDevice });

        const featureMap = await interaction.read(node, await createFabric(node, 1), false, {
            endpointId: EndpointNumber(1),
            clusterId: ClusterId(OnOff.Cluster.id),
            attributeId: AttributeId(FeatureMap.id),
        });

        expect(() => {
            OnOff.Cluster.attributes.featureMap.schema.validate(featureMap);
        }).not.throws();

        expect({ ...featureMap }).deep.equals({
            lighting: true,
            deadFrontBehavior: false,
            offOnly: false,
        });
    });

    it("invokes", async () => {
        let received: undefined | OnOff.OffWithEffectRequest;
        let sent: undefined | TypeFromSchema<typeof TlvInvokeResponseData>;

        class MyServer extends OnOffServer.with("Lighting") {
            override offWithEffect(request: OnOff.OffWithEffectRequest) {
                received = request;
            }
        }

        const MyDevice = OnOffLightDevice.with(MyServer);

        const node = await MockServerNode.createOnline({ device: MyDevice });

        await interaction.invoke(
            node,
            await createFabric(node, 1),
            {
                commandPath: {
                    endpointId: EndpointNumber(1),
                    clusterId: OnOff.Cluster.id,
                    commandId: CommandId(OnOff.LightingComponent.commands.offWithEffect.requestId),
                },

                commandFields: OnOff.TlvOffWithEffectRequest.encodeTlv({
                    effectIdentifier: 0,
                    effectVariant: 1,
                }),
            },
            response => {
                sent = response;
            },
        );

        expect(received).deep.equals({ effectIdentifier: 0, effectVariant: 1 });

        // Nice, three nested fields called "status"
        expect(sent?.status?.status.status).deep.equals(Status.Success);
    });
});
