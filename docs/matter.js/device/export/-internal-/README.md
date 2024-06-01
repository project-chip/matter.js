[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Classes

- [DimmableBaseDevice](classes/DimmableBaseDevice.md)

## Type Aliases

### DimmableDeviceCommands

> **DimmableDeviceCommands**: `object`

#### Type declaration

##### move

> **move**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"move"`\]

##### moveToLevel

> **moveToLevel**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"moveToLevel"`\]

##### moveToLevelWithOnOff

> **moveToLevelWithOnOff**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"moveToLevelWithOnOff"`\]

##### moveWithOnOff

> **moveWithOnOff**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"moveWithOnOff"`\]

##### step

> **step**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"step"`\]

##### stepWithOnOff

> **stepWithOnOff**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"stepWithOnOff"`\]

##### stop

> **stop**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"stop"`\]

##### stopWithOnOff

> **stopWithOnOff**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/LevelControl/README.md#complete)\>\[`"stopWithOnOff"`\]

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L15)

***

### OnOffBaseDeviceCommands

> **OnOffBaseDeviceCommands**: `object`

#### Type declaration

##### identify

> **identify**: [`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Cluster`](../../../cluster/export/namespaces/Identify/README.md#cluster)\>\[`"identify"`\]

##### offWithEffect

> **offWithEffect**: [`MakeMandatory`](../../../util/export/README.md#makemandatoryt)\<[`ClusterServerHandlers`](../../../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`Complete`](../../../cluster/export/namespaces/OnOff/README.md#complete)\>\[`"offWithEffect"`\]\>

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L22)
