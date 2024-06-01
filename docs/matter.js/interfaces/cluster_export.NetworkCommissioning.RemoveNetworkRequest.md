[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / RemoveNetworkRequest

# Interface: RemoveNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).RemoveNetworkRequest

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

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

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.7.2

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:362](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L362)

___

### networkId

• **networkId**: `Uint8Array`

This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID

for Thread.

**`See`**

MatterSpecification.v11.Core § 11.8.7.7.1

#### Inherited from

TypeFromSchema.networkId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:355](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L355)
