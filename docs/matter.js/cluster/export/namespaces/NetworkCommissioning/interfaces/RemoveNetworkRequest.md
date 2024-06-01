[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / RemoveNetworkRequest

# Interface: RemoveNetworkRequest

Input to the NetworkCommissioning removeNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.7

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRemoveNetworkRequest`](../README.md#tlvremovenetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.7.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L362)

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:355](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L355)
