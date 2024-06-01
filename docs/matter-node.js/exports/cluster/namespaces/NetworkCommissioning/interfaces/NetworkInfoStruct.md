[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / NetworkInfoStruct

# Interface: NetworkInfoStruct

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

## See

MatterSpecification.v11.Core § 11.8.5.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNetworkInfoStruct`](../README.md#tlvnetworkinfostruct)\>

## Properties

### connected

> **connected**: `boolean`

This field shall indicate the connected status of the associated network, where "connected" means currently
linked to the network technology (e.g. Associated for a Wi-Fi network, media connected for an Ethernet
network).

#### See

MatterSpecification.v11.Core § 11.8.5.4.2

#### Inherited from

`TypeFromSchema.connected`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:789

***

### networkId

> **networkId**: `Uint8Array`

Every network is uniquely identified (for purposes of commissioning) by a NetworkID mapping to the following
technology-specific properties:

  • SSID for Wi-Fi

  • Extended PAN ID for Thread

  • Network interface instance name at operating system (or equivalent unique name) for Ethernet.

The semantics of the NetworkID field therefore varies between network types accordingly. It contains SSID
for Wi-Fi networks, Extended PAN ID (XPAN ID) for Thread networks and netif name for Ethernet networks.

NOTE

SSID in Wi-Fi is a collection of 1-32 bytes, the text encoding of which is not specified. Implementations
must be careful to support reporting byte strings without requiring a particular encoding for transfer. Only
the commissioner should try to potentially decode the bytes. The most common encoding is UTF-8, however this
is just a convention. Some configurations may use Latin-1 or other character sets. A commissioner may decode
using UTF-8, replacing encoding errors with "?" at the application level while retaining the underlying
representation.

XPAN ID is a big-endian 64-bit unsigned number, represented on the first 8 octets of the octet string.

#### See

MatterSpecification.v11.Core § 11.8.5.4.1

#### Inherited from

`TypeFromSchema.networkId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:781
