[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/wi-fi-network-diagnostics/export](../../../README.md) / [WiFiNetworkDiagnosticsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### bssid

> **bssid**: `null` \| `Uint8Array`

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

#### See

MatterSpecification.v11.Core § 11.14.6.1

#### Inherited from

`StateType.bssid`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L363)

***

### channelNumber

> **channelNumber**: `null` \| `number`

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

#### See

MatterSpecification.v11.Core § 11.14.6.4

#### Inherited from

`StateType.channelNumber`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L386)

***

### currentMaxRate?

> `optional` **currentMaxRate**: `null` \| `number` \| `bigint`

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

#### See

MatterSpecification.v11.Core § 11.14.6.12

#### Inherited from

`StateType.currentMaxRate`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:405](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L405)

***

### rssi

> **rssi**: `null` \| `number`

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

#### See

MatterSpecification.v11.Core § 11.14.6.5

#### Inherited from

`StateType.rssi`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:393](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L393)

***

### securityType

> **securityType**: `null` \| [`SecurityType`](../../../../../../../cluster/export/namespaces/WiFiNetworkDiagnostics/enumerations/SecurityType.md)

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

#### See

MatterSpecification.v11.Core § 11.14.6.2

#### Inherited from

`StateType.securityType`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L370)

***

### wiFiVersion

> **wiFiVersion**: `null` \| [`WiFiVersion`](../../../../../../../cluster/export/namespaces/WiFiNetworkDiagnostics/enumerations/WiFiVersion.md)

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

#### See

MatterSpecification.v11.Core § 11.14.6.3

#### Inherited from

`StateType.wiFiVersion`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:378](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L378)
