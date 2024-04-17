[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ConnectNetworkRequest

# Interface: ConnectNetworkRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ConnectNetworkRequest

Input to the NetworkCommissioning connectNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.9

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvConnectNetworkRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvconnectnetworkrequest)\>

  ↳ **`ConnectNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.ConnectNetworkRequest.md#breadcrumb)
- [networkId](exports_cluster.NetworkCommissioning.ConnectNetworkRequest.md#networkid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:468

___

### networkId

• **networkId**: `Uint8Array`

#### Inherited from

TypeFromSchema.networkId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:467
