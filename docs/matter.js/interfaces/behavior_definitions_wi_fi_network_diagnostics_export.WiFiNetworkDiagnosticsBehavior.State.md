[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/wi-fi-network-diagnostics/export](../modules/behavior_definitions_wi_fi_network_diagnostics_export.md) / [WiFiNetworkDiagnosticsBehavior](../modules/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.md) / State

# Interface: State

[behavior/definitions/wi-fi-network-diagnostics/export](../modules/behavior_definitions_wi_fi_network_diagnostics_export.md).[WiFiNetworkDiagnosticsBehavior](../modules/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_wi_fi_network_diagnostics_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [bssid](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#bssid)
- [channelNumber](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#channelnumber)
- [currentMaxRate](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#currentmaxrate)
- [rssi](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#rssi)
- [securityType](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#securitytype)
- [wiFiVersion](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.State.md#wifiversion)

## Properties

### bssid

• **bssid**: ``null`` \| `Uint8Array`

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

**`See`**

MatterSpecification.v11.Core § 11.14.6.1

#### Inherited from

StateType.bssid

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L363)

___

### channelNumber

• **channelNumber**: ``null`` \| `number`

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

**`See`**

MatterSpecification.v11.Core § 11.14.6.4

#### Inherited from

StateType.channelNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L386)

___

### currentMaxRate

• `Optional` **currentMaxRate**: ``null`` \| `number` \| `bigint`

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

**`See`**

MatterSpecification.v11.Core § 11.14.6.12

#### Inherited from

StateType.currentMaxRate

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:405](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L405)

___

### rssi

• **rssi**: ``null`` \| `number`

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

**`See`**

MatterSpecification.v11.Core § 11.14.6.5

#### Inherited from

StateType.rssi

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:393](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L393)

___

### securityType

• **securityType**: ``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md)

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

**`See`**

MatterSpecification.v11.Core § 11.14.6.2

#### Inherited from

StateType.securityType

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L370)

___

### wiFiVersion

• **wiFiVersion**: ``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md)

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

**`See`**

MatterSpecification.v11.Core § 11.14.6.3

#### Inherited from

StateType.wiFiVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:378](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L378)
