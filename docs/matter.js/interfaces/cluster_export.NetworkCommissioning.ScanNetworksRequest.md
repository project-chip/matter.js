[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ScanNetworksRequest

# Interface: ScanNetworksRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ScanNetworksRequest

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvScanNetworksRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvscannetworksrequest)\>

  ↳ **`ScanNetworksRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.ScanNetworksRequest.md#breadcrumb)
- [ssid](cluster_export.NetworkCommissioning.ScanNetworksRequest.md#ssid)

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L45)

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L36)
