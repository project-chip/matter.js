[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / ScanNetworksRequest

# Interface: ScanNetworksRequest

Input to the NetworkCommissioning scanNetworks command

## See

MatterSpecification.v11.Core § 11.8.7.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvScanNetworksRequest`](../README.md#tlvscannetworksrequest)\>

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `number` \| `bigint`

The Breadcrumb field, if present, shall be used to atomically set the Breadcrumb attribute in the General
Commissioning cluster on success of the associated command. If the command fails, the Breadcrumb attribute
in the General Commissioning cluster shall be left unchanged.

#### See

MatterSpecification.v11.Core § 11.8.7.1.2

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:34

***

### ssid?

> `optional` **ssid**: `null` \| `Uint8Array`

This field, if present, shall contain the SSID for a directed scan of that particular Wi-Fi SSID. Otherwise,
if the field is absent, or it is null, this shall indicate scanning of all BSSID in range. This field shall
be ignored for ScanNetworks invocations on non-Wi-Fi server instances.

#### See

MatterSpecification.v11.Core § 11.8.7.1.1

#### Inherited from

`TypeFromSchema.ssid`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:26
