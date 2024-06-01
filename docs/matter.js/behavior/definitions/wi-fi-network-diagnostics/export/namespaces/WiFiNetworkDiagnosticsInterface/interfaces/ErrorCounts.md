[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/wi-fi-network-diagnostics/export](../../../README.md) / [WiFiNetworkDiagnosticsInterface](../README.md) / ErrorCounts

# Interface: ErrorCounts

## Methods

### resetCounts()

> **resetCounts**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Reception of this command shall reset the following attributes to 0:

  • BeaconLostCount

  • BeaconRxCount

  • PacketMulticastRxCount

  • PacketMulticastTxCount

  • PacketUnicastRxCount

  • PacketUnicastTxCount

This command has no associated data.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.14.7.1

#### Source

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L32)
