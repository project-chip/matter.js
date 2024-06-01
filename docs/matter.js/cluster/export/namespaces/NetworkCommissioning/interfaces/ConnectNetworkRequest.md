[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / ConnectNetworkRequest

# Interface: ConnectNetworkRequest

Input to the NetworkCommissioning connectNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.9

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvConnectNetworkRequest`](../README.md#tlvconnectnetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.9.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:457](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L457)

***

### networkId

> **networkId**: `Uint8Array`

This field shall contain the NetworkID for the entry used to configure the connection: the SSID for Wi-Fi
and XPAN ID for Thread.

#### See

MatterSpecification.v11.Core § 11.8.7.9.1

#### Inherited from

`TypeFromSchema.networkId`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L450)
