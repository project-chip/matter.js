/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createPromise, Lifecycle } from "@matter/general";
import { NodeId } from "@matter/types";
import { LegacyControllerSite } from "./util/LegacyControllerSite.js";

describe("CommissioningController commissioned peers", () => {
    before(() => {
        MockTime.init();
    });

    for (const hasRemainingPeer of [false, true]) {
        it(`enumerates during deletion ${hasRemainingPeer ? "with another peer" : "of the last peer"}`, async () => {
            await using site = new LegacyControllerSite();
            const controller = await site.addController();
            const nodeId = NodeId(1);
            const peer = await controller.node.peers.forAddress(controller.fabric.addressOf(nodeId));
            const remaining = hasRemainingPeer ? [NodeId(2)] : [];
            for (const remainingId of remaining) {
                await controller.node.peers.forAddress(controller.fabric.addressOf(remainingId));
            }

            expect(controller.getCommissionedNodes()).deep.equals([nodeId, ...remaining]);
            expect(controller.getCommissionedNodesDetails().map(details => details.nodeId)).deep.equals([
                nodeId,
                ...remaining,
            ]);
            expect(controller.isCommissioned()).true;

            const reset = createPromise<void>();
            const resume = createPromise<void>();
            const erase = peer.erase.bind(peer);
            Object.assign(peer, {
                async erase() {
                    await erase();
                    reset.resolver();
                    await resume.promise;
                },
            });

            const deletion = peer.delete();
            try {
                await MockTime.resolve(reset.promise, { macrotasks: true });
                expect(peer.construction.status).equals(Lifecycle.Status.Inactive);
                expect([...controller.node.peers]).includes(peer);

                expect(controller.getCommissionedNodes()).deep.equals(remaining);
                expect(controller.getCommissionedNodesDetails().map(details => details.nodeId)).deep.equals(remaining);
                expect(controller.isCommissioned()).equals(hasRemainingPeer);
            } finally {
                resume.resolver();
                await MockTime.resolve(deletion, { macrotasks: true });
            }
        });
    }
});
