[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / AddOrUpdateThreadNetworkRequest

# Interface: AddOrUpdateThreadNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).AddOrUpdateThreadNetworkRequest

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddOrUpdateThreadNetworkRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)\>

  ↳ **`AddOrUpdateThreadNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md#breadcrumb)
- [operationalDataset](cluster_export.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md#operationaldataset)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:648](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L648)

___

### operationalDataset

• **operationalDataset**: `Uint8Array`

The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, and
Extended PAN ID.

The encoding for the OperationalDataset field is defined in the Thread specification. The client shall pass
the OperationalDataset as an opaque octet string.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.8.7.4.1

#### Inherited from

TypeFromSchema.operationalDataset

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:646](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L646)
