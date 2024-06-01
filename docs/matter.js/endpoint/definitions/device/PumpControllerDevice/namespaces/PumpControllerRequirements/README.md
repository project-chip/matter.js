[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/PumpControllerDevice](../../README.md) / PumpControllerRequirements

# Namespace: PumpControllerRequirements

## Variables

### BindingBehavior

> `const` **BindingBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Binding/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseBindingBehavior`

The Binding cluster is required by the Matter specification

We provide this alias to the default implementation [BindingBehavior](README.md#bindingbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L54)

***

### FlowMeasurementBehavior

> `const` **FlowMeasurementBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/FlowMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseFlowMeasurementBehavior`

The FlowMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [FlowMeasurementBehavior](README.md#flowmeasurementbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L117)

***

### GroupsBehavior

> `const` **GroupsBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](README.md#groupsbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L82)

***

### IdentifyBehavior

> `const` **IdentifyBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `BaseIdentifyBehavior`

The Identify cluster is optional per the Matter specification

We provide this alias to the default implementation [IdentifyBehavior](README.md#identifybehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L75)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L47)

***

### LevelControlBehavior

> `const` **LevelControlBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\> = `BaseLevelControlBehavior`

The LevelControl cluster is optional per the Matter specification

We provide this alias to the default implementation [LevelControlBehavior](README.md#levelcontrolbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L96)

***

### OnOffBehavior

> `const` **OnOffBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>, [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\> = `BaseOnOffBehavior`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffBehavior](README.md#onoffbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L61)

***

### PressureMeasurementBehavior

> `const` **PressureMeasurementBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/PressureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BasePressureMeasurementBehavior`

The PressureMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [PressureMeasurementBehavior](README.md#pressuremeasurementbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L110)

***

### PumpConfigurationAndControlBehavior

> `const` **PumpConfigurationAndControlBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BasePumpConfigurationAndControlBehavior`

The PumpConfigurationAndControl cluster is required by the Matter specification

We provide this alias to the default implementation [PumpConfigurationAndControlBehavior](README.md#pumpconfigurationandcontrolbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L68)

***

### ScenesBehavior

> `const` **ScenesBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `BaseScenesBehavior`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesBehavior](README.md#scenesbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L89)

***

### TemperatureMeasurementBehavior

> `const` **TemperatureMeasurementBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TemperatureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseTemperatureMeasurementBehavior`

The TemperatureMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [TemperatureMeasurementBehavior](README.md#temperaturemeasurementbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L103)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Binding

> **Binding**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Binding/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BindingBehavior`

##### mandatory.OnOff

> **OnOff**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>, [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\> = `OnOffBehavior`

##### mandatory.PumpConfigurationAndControl

> **PumpConfigurationAndControl**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `PumpConfigurationAndControlBehavior`

##### optional

> **optional**: `object`

##### optional.FlowMeasurement

> **FlowMeasurement**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/FlowMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `FlowMeasurementBehavior`

##### optional.Groups

> **Groups**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Groups/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\>, [`GroupsInterface`](../../../../../../behavior/definitions/groups/export/README.md#groupsinterface)\> = `GroupsBehavior`

##### optional.Identify

> **Identify**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>, [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `IdentifyBehavior`

##### optional.LevelControl

> **LevelControl**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\> = `LevelControlBehavior`

##### optional.PressureMeasurement

> **PressureMeasurement**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/PressureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `PressureMeasurementBehavior`

##### optional.Scenes

> **Scenes**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>, [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `ScenesBehavior`

##### optional.TemperatureMeasurement

> **TemperatureMeasurement**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TemperatureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `TemperatureMeasurementBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L127)

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

[packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PumpControllerDevice.ts#L122)
