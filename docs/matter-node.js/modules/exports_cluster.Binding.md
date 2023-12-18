[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Binding

# Namespace: Binding

[exports/cluster](exports_cluster.md).Binding

## Table of contents

### Variables

- [Cluster](exports_cluster.Binding.md#cluster)
- [TlvTargetStruct](exports_cluster.Binding.md#tlvtargetstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.md#writablefabricscopedattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>

Binding

NOTE

This scope of this document is the Binding cluster as part of the Cluster Library. The Binding cluster is meant
to replace the support from the Zigbee Device Object (ZDO) for supporting the binding table.

A binding represents a persistent relationship between an endpoint and one or more other local or remote
endpoints. A binding does not require that the relationship exists. It is up to the node application to set up
the relationship.

A binding is used to inform a client endpoint of one or more targets for a potential interaction. For example: a
light switch that controls one or more light bulbs, needs to be told the nodes and endpoints of the bulbs, or
told a group in which the bulbs are members. For example: A client that needs to subscribe to an occupancy
sensor, needs to know the node and endpoint of the sensor.

In such cases, a binding is used to direct a local endpoint to a target. The existence of the Binding cluster on
the client endpoint, allows the creation of one or more binding entries (bindings) in the Binding cluster.

Each binding indicates another endpoint or cluster on another endpoint. Multiple bindings are allowed, depending
on the interaction.

A binding is either a unicast binding, where the target is a single endpoint on a single node, or a groupcast
binding, where the target is a group, which may indicate multiple endpoints on multiple nodes. The binding may
also target a single cluster on the target endpoint(s).

When a client cluster requires a target for an interaction, the Binding cluster shall exist on the same endpoint.

Once a binding entry is created on the Binding cluster, the client endpoint may initiate interactions to the
binding target.

**`See`**

MatterCoreSpecificationV1_1 § 9.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:78

___

### TlvTargetStruct

• `Const` **TlvTargetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 9.6.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:13
