[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/software-diagnostics/export](../../../README.md) / [SoftwareDiagnosticsInterface](../README.md) / Watermarks

# Interface: Watermarks

## Methods

### resetWatermarks()

> **resetWatermarks**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

Receipt of this command shall reset the following values which track high and lower watermarks:

  • The StackFreeMinimum field of the ThreadMetrics attribute

  • The CurrentHeapHighWatermark attribute This command has no payload.

Effect on Receipt

On receipt of this command, the Node shall make the following modifications to attributes it supports:

If implemented, the server shall set the value of the CurrentHeapHighWatermark attribute to the value of the
CurrentHeapUsed attribute.

If implemented, the server shall set the value of the StackFreeMinimum field for every thread to the value
of the corresponding thread’s StackFreeCurrent field.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.12.7.1

#### Source

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts#L32)
