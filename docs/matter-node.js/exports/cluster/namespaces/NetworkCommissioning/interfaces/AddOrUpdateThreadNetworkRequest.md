[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / AddOrUpdateThreadNetworkRequest

# Interface: AddOrUpdateThreadNetworkRequest

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAddOrUpdateThreadNetworkRequest`](../README.md#tlvaddorupdatethreadnetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.4.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:740

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:734
