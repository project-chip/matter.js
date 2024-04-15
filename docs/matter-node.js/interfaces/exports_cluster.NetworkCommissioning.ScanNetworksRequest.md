[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ScanNetworksRequest

# Interface: ScanNetworksRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ScanNetworksRequest

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvScanNetworksRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvscannetworksrequest)\>

  ↳ **`ScanNetworksRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.ScanNetworksRequest.md#breadcrumb)
- [ssid](exports_cluster.NetworkCommissioning.ScanNetworksRequest.md#ssid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

The Breadcrumb field, if present, shall be used to atomically set the Breadcrumb attribute in the General
Commissioning cluster on success of the associated command. If the command fails, the Breadcrumb attribute
in the General Commissioning cluster shall be left unchanged.

**`See`**

MatterSpecification.v11.Core § 11.8.7.1.2

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:34

___

### ssid

• `Optional` **ssid**: ``null`` \| `Uint8Array`

This field, if present, shall contain the SSID for a directed scan of that particular Wi-Fi SSID. Otherwise,
if the field is absent, or it is null, this shall indicate scanning of all BSSID in range. This field shall
be ignored for ScanNetworks invocations on non-Wi-Fi server instances.

**`See`**

MatterSpecification.v11.Core § 11.8.7.1.1

#### Inherited from

TypeFromSchema.ssid

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:26
