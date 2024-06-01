[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../../README.md) / GeneralDiagnosticsServer

# Namespace: GeneralDiagnosticsServer

## Index

### Classes

- [Internal](classes/Internal.md)
- [State](classes/State.md)

## Variables

### ExtensionInterface

> `const` **ExtensionInterface**: `object`

#### Type declaration

##### clearHardwareFault()

> **clearHardwareFault**: (`faultType`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `faultType` | [`HardwareFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md) |

###### Returns

`void`

##### clearNetworkFault()

> **clearNetworkFault**: (`faultType`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `faultType` | [`NetworkFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md) |

###### Returns

`void`

##### clearRadioFault()

> **clearRadioFault**: (`faultType`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `faultType` | [`RadioFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md) |

###### Returns

`void`

##### registerHardwareFault()

> **registerHardwareFault**: (`current`, `previous`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`HardwareFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[] |
| `previous` | [`HardwareFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[] |

###### Returns

`void`

##### registerNetworkFault()

> **registerNetworkFault**: (`current`, `previous`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`NetworkFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[] |
| `previous` | [`NetworkFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[] |

###### Returns

`void`

##### registerRadioFault()

> **registerRadioFault**: (`current`, `previous`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`RadioFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[] |
| `previous` | [`RadioFault`](../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[] |

###### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L330)
