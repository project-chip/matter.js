[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ConnectNetworkRequest

# Interface: ConnectNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ConnectNetworkRequest

Input to the NetworkCommissioning connectNetwork command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvConnectNetworkRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvconnectnetworkrequest)\>

  ↳ **`ConnectNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.ConnectNetworkRequest.md#breadcrumb)
- [networkId](cluster_export.NetworkCommissioning.ConnectNetworkRequest.md#networkid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:443](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L443)

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:442](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L442)
