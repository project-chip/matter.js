[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ReorderNetworkRequest

# Interface: ReorderNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ReorderNetworkRequest

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvReorderNetworkRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvreordernetworkrequest)\>

  ↳ **`ReorderNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#breadcrumb)
- [networkId](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#networkid)
- [networkIndex](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#networkindex)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:559](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L559)

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:557](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L557)

___

### networkIndex

• **networkIndex**: `number`

#### Inherited from

TypeFromSchema.networkIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:558](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L558)
