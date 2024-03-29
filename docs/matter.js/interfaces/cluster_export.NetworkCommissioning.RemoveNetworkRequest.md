[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / RemoveNetworkRequest

# Interface: RemoveNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).RemoveNetworkRequest

Input to the NetworkCommissioning removeNetwork command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRemoveNetworkRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvremovenetworkrequest)\>

  ↳ **`RemoveNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.RemoveNetworkRequest.md#breadcrumb)
- [networkId](cluster_export.NetworkCommissioning.RemoveNetworkRequest.md#networkid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:350](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L350)

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:349](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L349)
