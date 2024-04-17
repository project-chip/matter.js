[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ReorderNetworkRequest

# Interface: ReorderNetworkRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ReorderNetworkRequest

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvReorderNetworkRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvreordernetworkrequest)\>

  ↳ **`ReorderNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.ReorderNetworkRequest.md#breadcrumb)
- [networkId](exports_cluster.NetworkCommissioning.ReorderNetworkRequest.md#networkid)
- [networkIndex](exports_cluster.NetworkCommissioning.ReorderNetworkRequest.md#networkindex)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:582

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:580

___

### networkIndex

• **networkIndex**: `number`

#### Inherited from

TypeFromSchema.networkIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:581
