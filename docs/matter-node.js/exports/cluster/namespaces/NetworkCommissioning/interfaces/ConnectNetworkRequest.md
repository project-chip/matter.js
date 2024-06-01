[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / ConnectNetworkRequest

# Interface: ConnectNetworkRequest

Input to the NetworkCommissioning connectNetwork command

## See

MatterSpecification.v11.Core § 11.8.7.9

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvConnectNetworkRequest`](../README.md#tlvconnectnetworkrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.9.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:480

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:474
