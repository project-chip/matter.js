/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControlServer } from "#behaviors/access-control";
import { GeneralCommissioningClient } from "#behaviors/general-commissioning";
import { GroupKeyManagementServer } from "#behaviors/group-key-management";
import { GroupcastClient, GroupcastServer } from "#behaviors/groupcast";
import { OperationalCredentialsClient } from "#behaviors/operational-credentials";
import { OnOffLightDevice } from "#devices/on-off-light";
import { ClientNode } from "#node/ClientNode.js";
import { ServerNode } from "#node/ServerNode.js";
import { Bytes, Crypto, MockNetwork, Network } from "@matter/general";
import { FAILSAFE_LENGTH_S, MockServerNode, MockSite } from "@matter/node/testing";
import {
    Certificate,
    FabricAuthority,
    FabricManager,
    IANA_GROUPCAST_MULTICAST_ADDRESS,
    TestFabric,
    TlvCertSigningRequest,
} from "@matter/protocol";
import {
    EndpointNumber,
    FabricId,
    FabricIndex,
    GroupId,
    NodeId,
    Status,
    StatusResponseError,
    SubjectId,
    VendorId,
} from "@matter/types";
import { Groupcast } from "@matter/types/clusters/groupcast";
import { OperationalCredentials } from "@matter/types/clusters/operational-credentials";

describe("OperationalCredentialsServer", () => {
    before(() => {
        MockTime.init();
    });

    async function statusOf(call: (peer: ClientNode) => Promise<unknown>) {
        await using site = new MockSite();
        const { controller } = await site.addCommissionedPair();
        const peer = controller.peers.get("peer1")!;
        const error = await call(peer).then(
            () => undefined,
            (error: unknown) => error,
        );
        return error instanceof StatusResponseError ? error.code : error;
    }

    function addNocWith(adminVendorId: VendorId) {
        return statusOf(peer =>
            peer.commandsOf(OperationalCredentialsClient).addNoc({
                nocValue: Bytes.of(new Uint8Array(10)),
                ipkValue: Bytes.of(new Uint8Array(16)),
                caseAdminSubject: NodeId(1n),
                adminVendorId,
            }),
        );
    }

    describe("addNoc", () => {
        it("refuses the Matter Standard vendor ID as admin vendor ID", async () => {
            expect(await addNocWith(VendorId(0))).equals(Status.InvalidCommand);
        });

        it("refuses a reserved vendor ID as admin vendor ID", async () => {
            expect(await addNocWith(VendorId(0xfff5, false))).equals(Status.InvalidCommand);
        });

        it("checks the fail-safe after a valid admin vendor ID", async () => {
            expect(await addNocWith(VendorId(0xfff1))).equals(Status.FailsafeRequired);
        });
    });

    describe("addNoc certificate checks", () => {
        async function addNocStatus({
            nocNodeId,
            caseAdminSubject,
        }: {
            nocNodeId: NodeId;
            caseAdminSubject: SubjectId;
        }) {
            const authority = await TestFabric.Authority({ index: 1 });
            const fabric = await authority.createFabric({
                adminFabricLabel: "test",
                adminVendorId: VendorId(0xfff1),
                adminFabricIndex: FabricIndex(1),
                adminFabricId: FabricId(1),
            });
            await using node = await MockServerNode.createOnline();
            const context = { exchange: await node.createExchange(), command: true };
            const crypto = node.env.get(Crypto);

            await node.online(context, agent =>
                agent.generalCommissioning.armFailSafe({ expiryLengthSeconds: FAILSAFE_LENGTH_S, breadcrumb: 1 }),
            );
            const { nocsrElements } = await node.online(context, agent =>
                agent.operationalCredentials.csrRequest({ csrNonce: crypto.randomBytes(32) }),
            );
            await node.online(context, agent =>
                agent.operationalCredentials.addTrustedRootCertificate({ rootCaCertificate: authority.ca.rootCert }),
            );

            const { certSigningRequest } = TlvCertSigningRequest.decode(nocsrElements);
            const publicKey = await Certificate.getPublicKeyFromCsr(crypto, certSigningRequest);
            const noc = await authority.ca.generateNoc(publicKey, fabric.fabricId, nocNodeId);

            const { statusCode } = await node.online(context, agent =>
                agent.operationalCredentials.addNoc({
                    nocValue: noc,
                    icacValue: fabric.intermediateCACert,
                    ipkValue: fabric.identityProtectionKey,
                    caseAdminSubject,
                    adminVendorId: VendorId(0xfff1),
                }),
            );
            return statusCode;
        }

        it("answers InvalidNodeOpId for a NOC whose node ID is outside the operational range", async () => {
            const status = await addNocStatus({
                nocNodeId: NodeId(0xffff_ffff_0000_0001n),
                caseAdminSubject: NodeId(100),
            });

            expect(status).equals(OperationalCredentials.NodeOperationalCertStatus.InvalidNodeOpId);
        });

        it("answers InvalidAdminSubject for a CAT admin subject with version 0", async () => {
            const status = await addNocStatus({
                nocNodeId: NodeId(1),
                caseAdminSubject: NodeId(0xffff_fffd_0001_0000n),
            });

            expect(status).equals(OperationalCredentials.NodeOperationalCertStatus.InvalidAdminSubject);
        });

        it("adds the fabric for a valid NOC and admin subject", async () => {
            const status = await addNocStatus({ nocNodeId: NodeId(1), caseAdminSubject: NodeId(100) });

            expect(status).equals(OperationalCredentials.NodeOperationalCertStatus.Ok);
        });
    });

    describe("setVidVerificationStatement", () => {
        it("refuses the Matter Standard vendor ID", async () => {
            const status = await statusOf(peer =>
                peer.commandsOf(OperationalCredentialsClient).setVidVerificationStatement({ vendorId: VendorId(0) }),
            );

            expect(status).equals(Status.ConstraintError);
        });
    });

    describe("UpdateNOC", () => {
        const GroupcastDeviceRoot = MockServerNode.RootEndpoint.with(
            GroupcastServer.with("Listener", "Sender"),
            GroupKeyManagementServer,
            AccessControlServer.with("Extension", "Auxiliary"),
        );

        /** Runs UpdateNOC from the controller with a NOC for `fabricId`, by default the fabric's own. */
        async function updateNoc(controller: ServerNode, device: ServerNode, fabricId?: FabricId) {
            const peer = controller.peers.get("peer1")!;
            // Mock crypto would derive the operational key pair the fabric already holds
            const crypto = device.env.get(Crypto);
            if (!("entropic" in crypto)) {
                expect.fail("The device does not use mock crypto");
            }
            crypto.entropic = true;

            await peer
                .commandsOf(GeneralCommissioningClient)
                .armFailSafe({ expiryLengthSeconds: FAILSAFE_LENGTH_S, breadcrumb: 1 });
            const commands = peer.commandsOf(OperationalCredentialsClient);
            const { nocsrElements } = await commands.csrRequest({
                csrNonce: crypto.randomBytes(32),
                isForUpdateNoc: true,
            });
            const fabric = device.env.get(FabricManager).fabrics[0];
            const { certSigningRequest } = TlvCertSigningRequest.decode(nocsrElements);
            const publicKey = await Certificate.getPublicKeyFromCsr(crypto, certSigningRequest);
            const noc = await controller.env
                .get(FabricAuthority)
                .ca.generateNoc(publicKey, fabricId ?? fabric.fabricId, fabric.nodeId);

            return await commands.updateNoc({ nocValue: noc, icacValue: fabric.intermediateCACert });
        }

        it("carries group keys, group map and multicast policy to the new fabric", async () => {
            await using site = new MockSite();
            const { controller, device } = await site.addCommissionedPair({
                device: { type: GroupcastDeviceRoot, device: OnOffLightDevice },
            });
            const group = GroupId(0x0001);
            await controller.peers
                .get("peer1")!
                .commandsOf(GroupcastClient)
                .joinGroup({
                    groupId: group,
                    endpoints: [EndpointNumber(1)],
                    keySetId: 1,
                    key: new Uint8Array(16),
                    mcastAddrPolicy: Groupcast.MulticastAddrPolicy.IanaAddr,
                });
            await MockTime.yield3();

            const fabrics = device.env.get(FabricManager);
            const previous = fabrics.fabrics[0];
            const network = device.env.get(Network);
            if (!(network instanceof MockNetwork)) {
                expect.fail("The device does not run on a MockNetwork");
            }
            expect(network.isMemberOf(IANA_GROUPCAST_MULTICAST_ADDRESS)).true;
            const membershipChanges = new Array<string>();
            const addMembership = network.addMembership.bind(network);
            const dropMembership = network.dropMembership.bind(network);
            network.addMembership = (...ips: string[]) => {
                membershipChanges.push(`join ${ips.join()}`);
                addMembership(...ips);
            };
            network.dropMembership = (...ips: string[]) => {
                membershipChanges.push(`leave ${ips.join()}`);
                dropMembership(...ips);
            };
            const atReplacement = new Array<unknown>();
            fabrics.events.replaced.on(fabric => {
                atReplacement.push({
                    keySetId: fabric.groups.groupKeyIdMap.get(group),
                    hasKeySet: fabric.groups.keySets.forId(1) !== undefined,
                    endpoints: fabric.groups.endpoints.get(group),
                    address: fabric.groups.multicastAddressFor(group),
                });
            });

            const { statusCode } = await updateNoc(controller, device);

            expect(statusCode).equals(OperationalCredentials.NodeOperationalCertStatus.Ok);
            expect(fabrics.fabrics[0]).not.equals(previous);
            expect(atReplacement).deep.equals([
                {
                    keySetId: 1,
                    hasKeySet: true,
                    endpoints: [EndpointNumber(1)],
                    address: IANA_GROUPCAST_MULTICAST_ADDRESS,
                },
            ]);
            for (let i = 0; i < 20; i++) {
                await MockTime.yield3();
            }
            expect(membershipChanges).deep.equals([]);
        });

        it("rejects a NOC for another fabric ID with InvalidNOC", async () => {
            await using site = new MockSite();
            const { controller, device } = await site.addCommissionedPair();
            const fabric = device.env.get(FabricManager).fabrics[0];

            const { statusCode } = await updateNoc(controller, device, FabricId(fabric.fabricId + 1n));

            expect(statusCode).equals(OperationalCredentials.NodeOperationalCertStatus.InvalidNoc);
            expect(device.env.get(FabricManager).fabrics[0]).equals(fabric);
        });
    });
});
