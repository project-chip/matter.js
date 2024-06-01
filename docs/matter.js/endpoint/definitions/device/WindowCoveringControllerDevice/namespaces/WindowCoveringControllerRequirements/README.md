[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/WindowCoveringControllerDevice](../../README.md) / WindowCoveringControllerRequirements

# Namespace: WindowCoveringControllerRequirements

## Variables

### GroupsBehavior

> `const` **GroupsBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](README.md#groupsbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L54)

***

### IdentifyBehavior

> `const` **IdentifyBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `BaseIdentifyBehavior`

The Identify cluster is optional per the Matter specification

We provide this alias to the default implementation [IdentifyBehavior](README.md#identifybehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L47)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is optional per the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L33)

***

### ScenesBehavior

> `const` **ScenesBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `BaseScenesBehavior`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesBehavior](README.md#scenesbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L61)

***

### WindowCoveringBehavior

> `const` **WindowCoveringBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../../../../../../behavior/definitions/window-covering/export/README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../../../../../../behavior/definitions/window-covering/export/README.md#windowcoveringinterface)\> = `BaseWindowCoveringBehavior`

The WindowCovering cluster is required by the Matter specification

We provide this alias to the default implementation [WindowCoveringBehavior](README.md#windowcoveringbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L40)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.WindowCovering

> **WindowCovering**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../../../../../../behavior/definitions/window-covering/export/README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../../../../../../behavior/definitions/window-covering/export/README.md#windowcoveringinterface)\> = `WindowCoveringBehavior`

##### optional

> **optional**: `object`

##### optional.Groups

> **Groups**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `GroupsBehavior`

##### optional.Identify

> **Identify**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `IdentifyBehavior`

##### optional.Scenes

> **Scenes**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `ScenesBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L71)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/WindowCoveringControllerDevice.ts#L66)
