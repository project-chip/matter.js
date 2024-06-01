[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/thread-network-diagnostics/export](../../../README.md) / [ThreadNetworkDiagnosticsInterface](../README.md) / ErrorCounts

# Interface: ErrorCounts

## Methods

### resetCounts()

> **resetCounts**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Reception of this command shall reset the following attributes to 0:

  • OverrunCount

This command has no associated data. Upon completion, this command shall send a status code set to a value
of SUCCESS back to the initiator.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.13.7.1

#### Source

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts#L23)
