[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](device_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [DimmableBaseDevice](../classes/device_export._internal_.DimmableBaseDevice.md)

### Type Aliases

- [DimmableDeviceCommands](device_export._internal_.md#dimmabledevicecommands)
- [OnOffBaseDeviceCommands](device_export._internal_.md#onoffbasedevicecommands)

## Type Aliases

### DimmableDeviceCommands

Ƭ **DimmableDeviceCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `move` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"move"``] |
| `moveToLevel` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"moveToLevel"``] |
| `moveToLevelWithOnOff` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"moveToLevelWithOnOff"``] |
| `moveWithOnOff` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"moveWithOnOff"``] |
| `step` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"step"``] |
| `stepWithOnOff` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"stepWithOnOff"``] |
| `stop` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"stop"``] |
| `stopWithOnOff` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.LevelControl.md#complete)\>[``"stopWithOnOff"``] |

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L15)

___

### OnOffBaseDeviceCommands

Ƭ **OnOffBaseDeviceCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identify` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Cluster`](cluster_export.Identify.md#cluster)\>[``"identify"``] |
| `offWithEffect` | [`MakeMandatory`](util_export.md#makemandatory)\<[`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`Complete`](cluster_export.OnOff.md#complete)\>[``"offWithEffect"``]\> |

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L22)
