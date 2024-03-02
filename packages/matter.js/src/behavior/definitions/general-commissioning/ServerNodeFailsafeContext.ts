/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FailsafeContext } from "../../../common/FailsafeContext.js";
import { Lifecycle } from "../../../common/Lifecycle.js";
import { Fabric } from "../../../fabric/Fabric.js";
import { Node } from "../../../node/Node.js";
import { NetworkCommissioningBehavior } from "../network-commissioning/NetworkCommissioningBehavior.js";
import { OperationalCredentialsBehavior } from "../operational-credentials/OperationalCredentialsBehavior.js";

/**
 * {@link FailsafeContext} for {@link Node} API.
 */
export class ServerNodeFailsafeContext extends FailsafeContext {
    #node: Node;
    #operationalCredentialsRestored = false;
    #storedState?: {
        networks?: NetworkCommissioningBehavior.State["networks"];
        nocs: OperationalCredentialsBehavior.State["nocs"];
        fabrics: OperationalCredentialsBehavior.State["fabrics"];
        trustedRootCertificates: OperationalCredentialsBehavior.State["trustedRootCertificates"];
    };

    constructor(node: Node, options: FailsafeContext.Options) {
        super(options);
        this.#node = node;
        this.#node.env.set(FailsafeContext, this);
        this.construction.change.on(status => {
            if (status === Lifecycle.Status.Destroyed) {
                this.#node.env.delete(FailsafeContext, this);
            }
        });
    }

    override async storeEndpointState() {
        const opcreds = this.#node.state.operationalCredentials;
        this.#storedState = {
            nocs: opcreds.nocs.map(noc => ({ ...noc })),
            fabrics: opcreds.fabrics.map(fabric => ({ ...fabric })),
            trustedRootCertificates: [...opcreds.trustedRootCertificates],
        }

        if (!this.#node.behaviors.has(NetworkCommissioningBehavior)) {
            return;
        }

        this.#storedState.networks = this.#node.stateOf(NetworkCommissioningBehavior).networks;
    }

    override async restoreFabric() {
        await this.#restoreOperationalCredentials();
    }

    override async restoreNetworkState() {
        const networks = this.#storedState?.networks;
        if (networks) {
            await this.#node.act(agent => {
                const networkCommissioning = agent.get(NetworkCommissioningBehavior);
                networkCommissioning.state.networks = networks;
            });
        }
    }

    override async revokeFabric(fabric: Fabric) {
        await this.#node.act(agent => {
            agent.basicInformation.events.leave?.emit({ fabricIndex: fabric.fabricIndex }, agent.context);
        });

        await fabric.remove();

        await this.#restoreOperationalCredentials();
    }

    override async restoreBreadcrumb() {
        await this.#node.act(agent => {
            agent.generalCommissioning.state.breadcrumb = 0;
        });
    }

    async #restoreOperationalCredentials() {
        if (this.#operationalCredentialsRestored) {
            return;
        }

        const state = this.#storedState;
        if (state) {
            await this.#node.act(agent => {
                const opcreds = agent.operationalCredentials.state;
                opcreds.nocs = state.nocs;
                opcreds.fabrics = state.fabrics;
                opcreds.commissionedFabrics = opcreds.fabrics.length;
                opcreds.trustedRootCertificates = state.trustedRootCertificates;
            });
        }

        this.#operationalCredentialsRestored = true;
    }
}
