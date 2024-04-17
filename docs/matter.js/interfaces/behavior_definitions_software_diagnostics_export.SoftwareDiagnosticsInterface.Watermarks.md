[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/software-diagnostics/export](../modules/behavior_definitions_software_diagnostics_export.md) / [SoftwareDiagnosticsInterface](../modules/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsInterface.md) / Watermarks

# Interface: Watermarks

[behavior/definitions/software-diagnostics/export](../modules/behavior_definitions_software_diagnostics_export.md).[SoftwareDiagnosticsInterface](../modules/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsInterface.md).Watermarks

## Table of contents

### Methods

- [resetWatermarks](behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsInterface.Watermarks.md#resetwatermarks)

## Methods

### resetWatermarks

▸ **resetWatermarks**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

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

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.12.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts#L32)
