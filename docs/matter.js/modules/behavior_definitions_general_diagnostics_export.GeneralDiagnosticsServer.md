[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-diagnostics/export](behavior_definitions_general_diagnostics_export.md) / GeneralDiagnosticsServer

# Namespace: GeneralDiagnosticsServer

[behavior/definitions/general-diagnostics/export](behavior_definitions_general_diagnostics_export.md).GeneralDiagnosticsServer

## Table of contents

### Classes

- [Internal](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md)
- [State](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.State.md)

### Variables

- [ExtensionInterface](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md#extensioninterface)

## Variables

### ExtensionInterface

• `Const` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clearHardwareFault` | (`faultType`: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)) => `void` |
| `clearNetworkFault` | (`faultType`: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)) => `void` |
| `clearRadioFault` | (`faultType`: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)) => `void` |
| `registerHardwareFault` | (`current`: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `previous`: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]) => `void` |
| `registerNetworkFault` | (`current`: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `previous`: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]) => `void` |
| `registerRadioFault` | (`current`: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `previous`: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]) => `void` |

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:330](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L330)
