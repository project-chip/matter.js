/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FailsafeContext } from "../../../common/FailsafeContext.js";
import { Fabric } from "../../../fabric/Fabric.js";
import { NetworkCommissioningBehavior } from "../network-commissioning/NetworkCommissioningBehavior.js";
import { Node } from "../../../node/Node.js";
import { OperationalCredentialsBehavior } from "../operational-credentials/OperationalCredentialsBehavior.js";

/**
 * {@link FailsafeContext} for {@link Node} API.
 */
export class PartFailsafeContext extends FailsafeContext {
    #node: Node;
    #operationalCredentialsRestored = false;
    #storedState?: {
        networks?: NetworkCommissioningBehavior.State["networks"];
        nocs: OperationalCredentialsBehavior.State["nocs"];
        fabrics: OperationalCredentialsBehavior.State["fabrics"];
        trustedRootCertificates: OperationalCredentialsBehavior.State["trustedRootCertificates"];
    }

    constructor(node: Node, options: FailsafeContext.Options) {
        super(options);
        this.#node = node;
    }

    override async storeEndpointState() {
        this.#node.offline(agent => {
            this.#storedState = {
                nocs: agent.operationalCredentials.state.nocs.map(noc => ({ ...noc })),
                fabrics: agent.operationalCredentials.state.fabrics.map(fabric => ({ ...fabric })),
                trustedRootCertificates: [ ...agent.operationalCredentials.state.trustedRootCertificates ],
            }

            if (!agent.has(NetworkCommissioningBehavior)) {
                return;
            }

            const network = agent.get(NetworkCommissioningBehavior);
            this.#storedState.networks = network.state.networks;
        });
    }

    override async restoreFabric() {
        await this.#restoreOperationalCredentials();
    }

    override async restoreNetworkState() {
        const networks = this.#storedState?.networks;
        if (networks) {
            await this.#node.offline(agent => {
                const networkCommissioning = agent.get(NetworkCommissioningBehavior);
                networkCommissioning.state.networks = networks;
            })
        }
    }

    override async revokeFabric(fabric: Fabric) {
        await this.#node.offline(agent => {
            agent.basicInformation.events.leave?.emit({ fabricIndex: fabric.fabricIndex }, agent.context);
        })

        await fabric.remove();

        this.#restoreOperationalCredentials();
    }

    override async restoreBreadcrumb() {
        this.#node.state.generalCommissioning.breadcrumb = 0;
    }

    async #restoreOperationalCredentials() {
        if (this.#operationalCredentialsRestored) {
            return;
        }

        const state = this.#storedState;
        if (state) {
            await this.#node.offline(agent => {
                const opcreds = agent.operationalCredentials.state;
                opcreds.nocs = state.nocs;
                opcreds.fabrics = state.fabrics;
                opcreds.commissionedFabrics = opcreds.fabrics.length;
                opcreds.trustedRootCertificates = opcreds.trustedRootCertificates;
            })
        }

        this.#operationalCredentialsRestored = true;
    }
}
