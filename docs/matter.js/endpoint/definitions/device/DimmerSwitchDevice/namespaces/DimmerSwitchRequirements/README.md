[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/DimmerSwitchDevice](../../README.md) / DimmerSwitchRequirements

# Namespace: DimmerSwitchRequirements

## Variables

### GroupsBehavior

> `const` **GroupsBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](README.md#groupsbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L63)

***

### IdentifyBehavior

> `const` **IdentifyBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `BaseIdentifyBehavior`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyBehavior](README.md#identifybehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L42)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L35)

***

### LevelControlBehavior

> `const` **LevelControlBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\> = `BaseLevelControlBehavior`

The LevelControl cluster is required by the Matter specification

We provide this alias to the default implementation [LevelControlBehavior](README.md#levelcontrolbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L56)

***

### OnOffBehavior

> `const` **OnOffBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>, [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\> = `BaseOnOffBehavior`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffBehavior](README.md#onoffbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L49)

***

### ScenesBehavior

> `const` **ScenesBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `BaseScenesBehavior`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesBehavior](README.md#scenesbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L70)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `IdentifyBehavior`

##### mandatory.LevelControl

> **LevelControl**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\> = `LevelControlBehavior`

##### mandatory.OnOff

> **OnOff**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>, [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\> = `OnOffBehavior`

##### optional

> **optional**: `object`

##### optional.Groups

> **Groups**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `GroupsBehavior`

##### optional.Scenes

> **Scenes**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `ScenesBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L80)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmerSwitchDevice.ts#L75)
