[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](exports_device.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [DimmableBaseDevice](../classes/exports_device._internal_.DimmableBaseDevice.md)

### Type Aliases

- [DimmableDeviceCommands](exports_device._internal_.md#dimmabledevicecommands)
- [OnOffBaseDeviceCommands](exports_device._internal_.md#onoffbasedevicecommands)

### Variables

- [DimmableBaseDevice\_base](exports_device._internal_.md#dimmablebasedevice_base)
- [OnOffBaseDevice\_base](exports_device._internal_.md#onoffbasedevice_base)

## Type Aliases

### DimmableDeviceCommands

Ƭ **DimmableDeviceCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `move` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"move"``] |
| `moveToLevel` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"moveToLevel"``] |
| `moveToLevelWithOnOff` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"moveToLevelWithOnOff"``] |
| `moveWithOnOff` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"moveWithOnOff"``] |
| `step` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"step"``] |
| `stepWithOnOff` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"stepWithOnOff"``] |
| `stop` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"stop"``] |
| `stopWithOnOff` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.LevelControl.md#complete)\>[``"stopWithOnOff"``] |

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:8

___

### OnOffBaseDeviceCommands

Ƭ **OnOffBaseDeviceCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identify` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Cluster`](exports_cluster.Identify.md#cluster)\>[``"identify"``] |
| `offWithEffect` | [`MakeMandatory`](util_export.md#makemandatory)\<[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`Complete`](exports_cluster.OnOff.md#complete)\>[``"offWithEffect"``]\> |

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:16

## Variables

### DimmableBaseDevice\_base

• `Const` **DimmableBaseDevice\_base**: (`definition`: [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), `attributeInitialValues?`: \{ `[key: ClusterId]`: [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)\<`any`\>;  }, `options?`: [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md), `isLighting?`: `boolean`) => [`OnOffBaseDevice`](../classes/exports_device.OnOffBaseDevice.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_1`]) => `void`  }

#### Type declaration

• (`definition`, `attributeInitialValues?`, `options?`, `isLighting?`): [`OnOffBaseDevice`](../classes/exports_device.OnOffBaseDevice.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_1`]) => `void`  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md) |
| `attributeInitialValues?` | `Object` |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |
| `isLighting?` | `boolean` |

##### Returns

[`OnOffBaseDevice`](../classes/exports_device.OnOffBaseDevice.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`DimmableDeviceCommands`](exports_device._internal_.md#dimmabledevicecommands)[`K_1`]) => `void`  }

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:18

___

### OnOffBaseDevice\_base

• `Const` **OnOffBaseDevice\_base**: (`definition`: [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), `options?`: [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md)) => [`Device`](../classes/exports_device.Device.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_1`]) => `void`  }

#### Type declaration

• (`definition`, `options?`): [`Device`](../classes/exports_device.Device.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_1`]) => `void`  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md) |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

##### Returns

[`Device`](../classes/exports_device.Device.md) & \{ `_executeHandler`: \<K_2\>(`action`: `K_2`, ...`args`: `Parameters`\<[`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_2`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K_1\>(`action`: `K_1`, `handler`: [`OnOffBaseDeviceCommands`](exports_device._internal_.md#onoffbasedevicecommands)[`K_1`]) => `void`  }

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:30
