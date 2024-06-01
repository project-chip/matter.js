[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/ethernet-network-diagnostics/export](../../../README.md) / [EthernetNetworkDiagnosticsInterface](../README.md) / PacketCountsOrErrorCounts

# Interface: PacketCountsOrErrorCounts

## Methods

### resetCounts()

> **resetCounts**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Reception of this command shall reset the following attributes to 0:

  • PacketRxCount

  • PacketTxCount

  • TxErrCount

  • CollisionCount

  • OverrunCount

This command has no associated data.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.15.7.1

#### Source

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts#L30)
