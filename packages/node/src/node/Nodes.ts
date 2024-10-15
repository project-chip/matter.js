/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { Construction, InternalError } from "#general";
import {
    ControllerCommissioner,
    Fabric,
    FabricAuthority,
    FabricAuthorityConfigurationProvider,
    OperationalPeer,
    PeerAddress,
    PeerCommissioningOptions,
    PeerNodeStore,
    PeerStore,
} from "#protocol";
import { ClientNode } from "./ClientNode.js";
import { type Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";
import { ServerNodeStore } from "./storage/ServerNodeStore.js";

/**
 * Manages the set of known endpoints that share a fabric with a {@link Node}.
 */
export class Nodes extends EndpointContainer<ClientNode> {
    #construction: Construction<Nodes>;
    #controllerFabric?: Fabric;

    get construction() {
        return this.#construction;
    }

    constructor(owner: ServerNode) {
        super(owner);

        this.#configureController();

        this.#construction = Construction(this, async () => {
            const stores = await this.endpoint.env.get(ServerNodeStore).allPeerStores();
            for (const store of stores) {
                this.add(
                    new ClientNode({
                        owner,
                        store,
                    }),
                );
            }
        });
    }

    override get(id: string | PeerAddress) {
        if (typeof id !== "string") {
            id = PeerAddress(id).toString();
        }
        return super.get(id);
    }

    set controllerFabric(fabric: Fabric) {
        this.#controllerFabric = fabric;
    }

    override get endpoint() {
        return super.endpoint as ServerNode;
    }

    async commission(options: Nodes.CommissioningOptions) {
        await this.#construction;

        let commissionerOptions: PeerCommissioningOptions;
        if (options.fabric !== undefined) {
            commissionerOptions = options as PeerCommissioningOptions;
        } else {
            let controllerFabric = this.#controllerFabric;
            if (controllerFabric === undefined) {
                controllerFabric = this.#controllerFabric = await this.endpoint.env
                    .get(FabricAuthority)
                    .defaultFabric();
            }
            commissionerOptions = {
                ...options,
                fabric: controllerFabric,
            };
        }

        const commissioner = this.endpoint.env.get(ControllerCommissioner);

        const address = await commissioner.commission(commissionerOptions);
        const node = this.get(address);
        if (node === undefined) {
            throw new InternalError(`Commissioned node ${PeerAddress(address)} but no ClientNode installed`);
        }

        return node;
    }

    #configureController() {
        const { endpoint: owner } = this;

        if (!owner.env.has(FabricAuthorityConfigurationProvider)) {
            owner.env.set(
                FabricAuthorityConfigurationProvider,
                new (class extends FabricAuthorityConfigurationProvider {
                    get vendorId() {
                        return owner.state.basicInformation.vendorId;
                    }
                })(),
            );
        }

        const nodes = this;

        owner.env.set(
            PeerStore,
            new (class extends PeerStore {
                async loadPeers() {
                    await nodes.construction;
                    return [...nodes].map(node => ({ address: node.address }));
                }

                async updatePeer(peer: OperationalPeer) {
                    await nodes.construction;
                    const node = nodes.get(peer.address);
                    await node?.updateOperationalAddress(peer);
                }

                async deletePeer(address: PeerAddress) {
                    await nodes.construction;
                    const node = nodes.get(address);
                    if (node) {
                        nodes.delete(node);
                    }
                }

                async createNodeStore(): Promise<PeerNodeStore> {
                    throw new InternalError("Node store creation not supported");
                }
            })(),
        );
    }
}

export namespace Nodes {
    export interface CommissioningOptions extends Omit<PeerCommissioningOptions, "fabric"> {
        fabric?: Fabric;
    }
}
