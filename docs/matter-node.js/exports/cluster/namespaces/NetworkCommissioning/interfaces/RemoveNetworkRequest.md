[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / RemoveNetworkRequest

# Interface: RemoveNetworkRequest

Input to the NetworkCommissioning removeNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRemoveNetworkRequest`](../README.md#tlvremovenetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.7.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:390

***

### networkId

> **networkId**: `Uint8Array`

This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID

for Thread.

#### See

MatterSpecification.v11.Core § 11.8.7.7.1

#### Inherited from

`TypeFromSchema.networkId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:384
