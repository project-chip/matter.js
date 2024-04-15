[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md) / DisconnectionEvent

# Interface: DisconnectionEvent

[exports/cluster](../modules/exports_cluster.md).[WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md).DisconnectionEvent

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterSpecification.v11.Core § 11.14.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDisconnectionEvent`](../modules/exports_cluster.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)\>

  ↳ **`DisconnectionEvent`**

## Table of contents

### Properties

- [reasonCode](exports_cluster.WiFiNetworkDiagnostics.DisconnectionEvent.md#reasoncode)

## Properties

### reasonCode

• **reasonCode**: `number`

This field shall contain the Reason Code field value for the Disassociation or Deauthentication event that
caused the disconnection and the value shall align with Table 9-49 "Reason codes" of IEEE 802.11-2020.

**`See`**

MatterSpecification.v11.Core § 11.14.8.1.1

#### Inherited from

TypeFromSchema.reasonCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:83
