[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / \<internal\>

# \<internal\>

## Index

### Classes

- [DimmableBaseDevice](classes/DimmableBaseDevice.md)

## Type Aliases

### DimmableDeviceCommands

> **DimmableDeviceCommands**: `object`

#### Type declaration

##### move

> **move**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"move"`\]

##### moveToLevel

> **moveToLevel**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"moveToLevel"`\]

##### moveToLevelWithOnOff

> **moveToLevelWithOnOff**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"moveToLevelWithOnOff"`\]

##### moveWithOnOff

> **moveWithOnOff**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"moveWithOnOff"`\]

##### step

> **step**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"step"`\]

##### stepWithOnOff

> **stepWithOnOff**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"stepWithOnOff"`\]

##### stop

> **stop**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"stop"`\]

##### stopWithOnOff

> **stopWithOnOff**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/LevelControl/README.md#complete)\>\[`"stopWithOnOff"`\]

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:8

***

### OnOffBaseDeviceCommands

> **OnOffBaseDeviceCommands**: `object`

#### Type declaration

##### identify

> **identify**: [`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Cluster`](../../cluster/namespaces/Identify/README.md#cluster)\>\[`"identify"`\]

##### offWithEffect

> **offWithEffect**: [`MakeMandatory`](../../../util/export/README.md#makemandatoryt)\<[`ClusterServerHandlers`](../../cluster/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../cluster/namespaces/OnOff/README.md#complete)\>\[`"offWithEffect"`\]\>

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:16

## Variables

### DimmableBaseDevice\_base()

> `const` **DimmableBaseDevice\_base**: (`definition`, `attributeInitialValues`?, `options`?, `isLighting`?) => [`OnOffBaseDevice`](../classes/OnOffBaseDevice.md) & `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md) |
| `attributeInitialValues`? | `object` |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) |
| `isLighting`? | `boolean` |

#### Returns

[`OnOffBaseDevice`](../classes/OnOffBaseDevice.md) & `object`

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:18

***

### OnOffBaseDevice\_base()

> `const` **OnOffBaseDevice\_base**: (`definition`, `options`?) => [`Device`](../classes/Device.md) & `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md) |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) |

#### Returns

[`Device`](../classes/Device.md) & `object`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:30
