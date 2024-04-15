[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / AddOrUpdateThreadNetworkRequest

# Interface: AddOrUpdateThreadNetworkRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).AddOrUpdateThreadNetworkRequest

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAddOrUpdateThreadNetworkRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)\>

  ↳ **`AddOrUpdateThreadNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md#breadcrumb)
- [operationalDataset](exports_cluster.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md#operationaldataset)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:665

___

### operationalDataset

• **operationalDataset**: `Uint8Array`

The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, and
Extended PAN ID.

The encoding for the OperationalDataset field is defined in the Thread specification. The client shall pass
the OperationalDataset as an opaque octet string.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.4.1

#### Inherited from

TypeFromSchema.operationalDataset

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:664
