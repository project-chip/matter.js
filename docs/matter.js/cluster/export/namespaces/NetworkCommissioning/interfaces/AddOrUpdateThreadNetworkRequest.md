[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / AddOrUpdateThreadNetworkRequest

# Interface: AddOrUpdateThreadNetworkRequest

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddOrUpdateThreadNetworkRequest`](../README.md#tlvaddorupdatethreadnetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.4.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:728](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L728)

***

### operationalDataset

> **operationalDataset**: `Uint8Array`

The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, and
Extended PAN ID.

The encoding for the OperationalDataset field is defined in the Thread specification. The client shall pass
the OperationalDataset as an opaque octet string.

#### See

MatterSpecification.v11.Core § 11.8.7.4.1

#### Inherited from

`TypeFromSchema.operationalDataset`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:721](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L721)
