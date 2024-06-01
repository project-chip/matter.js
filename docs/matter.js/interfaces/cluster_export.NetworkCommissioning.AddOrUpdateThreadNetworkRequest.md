[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / AddOrUpdateThreadNetworkRequest

# Interface: AddOrUpdateThreadNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).AddOrUpdateThreadNetworkRequest

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

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

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.4.2

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:728](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L728)

___

### operationalDataset

• **operationalDataset**: `Uint8Array`

The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, and
Extended PAN ID.

The encoding for the OperationalDataset field is defined in the Thread specification. The client shall pass
the OperationalDataset as an opaque octet string.

**`See`**

MatterSpecification.v11.Core § 11.8.7.4.1

#### Inherited from

TypeFromSchema.operationalDataset

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:721](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L721)
