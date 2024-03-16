/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FailsafeContext } from "../../../common/FailsafeContext.js";
import { Lifecycle } from "../../../common/Lifecycle.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { Fabric } from "../../../fabric/Fabric.js";
import { Node } from "../../../node/Node.js";
import { Immutable } from "../../../util/Type.js";
import { NetworkCommissioningBehavior } from "../network-commissioning/NetworkCommissioningBehavior.js";

/**
 * {@link FailsafeContext} for {@link Node} API.
 */
export class ServerNodeFailsafeContext extends FailsafeContext {
    #node: Node;
    #storedState?: {
        networks: Map<Endpoint, Immutable<NetworkCommissioningBehavior.State["networks"]>>;
        /*

        When Fabrics are no longer managed centrally in FabricManager we need this. Maybe we change to this later,
        but now it is just here for reference because these changes are realized by events that are triggered by Fabric
        object changes. See also other commented out sections in this class.

        nocs: OperationalCredentialsBehavior.State["nocs"];
        fabrics: OperationalCredentialsBehavior.State["fabrics"];
        trustedRootCertificates: OperationalCredentialsBehavior.State["trustedRootCertificates"];

         */
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

    /**
     * Persist endpoint credentials and network configurations for restoration if commissioning does not complete.
     *
     * The Matter 1.2 specification makes it pretty clear that Matter supports configuration of multiple network
     * interfaces (e.g. @see {@link MatterCoreSpecificationV1_1} § 11.8.8 and § 2.3.2).
     * {@link NetworkCommissioningCluster} of the primary interface is on the root endpoint.  However it's not clear
     * where {@link NetworkCommissioningCluster} instances for secondary interfaces reside.  To be on the safe side
     * we just assume any endpoint may support {@link NetworkCommissioningCluster}.
     *
     * TODO - it's recommended to reset all state if commissioning bails; currently we perform mandatory restore
     */
    override async storeEndpointState() {
        // const opcreds = this.#node.state.operationalCredentials;
        this.#storedState = {
            networks: new Map(),
            /*
            nocs: opcreds.nocs.map(noc => ({ ...noc })),
            fabrics: opcreds.fabrics.map(fabric => ({ ...fabric })),
            trustedRootCertificates: [...opcreds.trustedRootCertificates],
             */
        };

        if (!this.#node.behaviors.has(NetworkCommissioningBehavior)) {
            return;
        }

        this.#node.visit(endpoint => {
            if (endpoint.behaviors.has(NetworkCommissioningBehavior)) {
                this.#storedState?.networks.set(endpoint, endpoint.stateOf(NetworkCommissioningBehavior).networks);
            }
        });
    }

    override async restoreNetworkState() {
        await this.#node.act(async agent => {
            const context = agent.context;

            await this.#node.visit(async endpoint => {
                const networks = this.#storedState?.networks.get(endpoint);
                if (networks) {
                    context.agentFor(endpoint).get(NetworkCommissioningBehavior).state.networks = [...networks];
                }
            });
        });
    }

    override async revokeFabric(fabric: Fabric) {
        await fabric.remove();

        // await this.#restoreOperationalCredentials();
    }

    override async restoreBreadcrumb() {
        await this.#node.act(agent => {
            agent.generalCommissioning.state.breadcrumb = 0;
        });
    }

    /*
    override async restoreFabric() {
        await super.restoreFabric();
        await this.#restoreOperationalCredentials();
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
    */
}
