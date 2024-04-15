[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md) / DisconnectionEvent

# Interface: DisconnectionEvent

[cluster/export](../modules/cluster_export.md).[WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md).DisconnectionEvent

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterSpecification.v11.Core § 11.14.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDisconnectionEvent`](../modules/cluster_export.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)\>

  ↳ **`DisconnectionEvent`**

## Table of contents

### Properties

- [reasonCode](cluster_export.WiFiNetworkDiagnostics.DisconnectionEvent.md#reasoncode)

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

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L111)
