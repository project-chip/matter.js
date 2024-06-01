[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/HeatingCoolingUnitDevice](../../README.md) / HeatingCoolingUnitRequirements

# Namespace: HeatingCoolingUnitRequirements

## Variables

### FanControlServer

> `const` **FanControlServer**: *typeof* [`FanControlServer`](../../../../../../behavior/definitions/fan-control/export/classes/FanControlServer.md) = `BaseFanControlServer`

The FanControl cluster is optional per the Matter specification

We provide this alias to the default implementation [FanControlServer](README.md#fancontrolserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L75)

***

### GroupsServer

> `const` **GroupsServer**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](README.md#groupsserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L47)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L40)

***

### LevelControlServer

> `const` **LevelControlServer**: *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is optional per the Matter specification

We provide this alias to the default implementation [LevelControlServer](README.md#levelcontrolserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L68)

***

### OnOffServer

> `const` **OnOffServer**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](README.md#onoffserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L54)

***

### ScenesServer

> `const` **ScenesServer**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesServer](README.md#scenesserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L61)

***

### ThermostatBehavior

> `const` **ThermostatBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ThermostatInterface`](../../../../../../behavior/definitions/thermostat/export/README.md#thermostatinterface)\>, [`ThermostatInterface`](../../../../../../behavior/definitions/thermostat/export/README.md#thermostatinterface)\> = `BaseThermostatBehavior`

The Thermostat cluster is required by the Matter specification

We provide this alias to the default implementation [ThermostatBehavior](README.md#thermostatbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L82)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Thermostat

> **Thermostat**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`ThermostatInterface`](../../../../../../behavior/definitions/thermostat/export/README.md#thermostatinterface)\>, [`ThermostatInterface`](../../../../../../behavior/definitions/thermostat/export/README.md#thermostatinterface)\> = `ThermostatBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L95)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Groups

> **Groups**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `GroupsServer`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.OnOff

> **OnOff**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `OnOffServer`

##### optional

> **optional**: `object`

##### optional.FanControl

> **FanControl**: *typeof* [`FanControlServer`](../../../../../../behavior/definitions/fan-control/export/classes/FanControlServer.md) = `FanControlServer`

##### optional.LevelControl

> **LevelControl**: *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md) = `LevelControlServer`

##### optional.Scenes

> **Scenes**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `ScenesServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HeatingCoolingUnitDevice.ts#L87)
