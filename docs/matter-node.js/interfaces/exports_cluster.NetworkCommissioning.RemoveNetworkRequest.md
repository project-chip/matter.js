[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / RemoveNetworkRequest

# Interface: RemoveNetworkRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).RemoveNetworkRequest

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvRemoveNetworkRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvremovenetworkrequest)\>

  ↳ **`RemoveNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.RemoveNetworkRequest.md#breadcrumb)
- [networkId](exports_cluster.NetworkCommissioning.RemoveNetworkRequest.md#networkid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:378

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:377
