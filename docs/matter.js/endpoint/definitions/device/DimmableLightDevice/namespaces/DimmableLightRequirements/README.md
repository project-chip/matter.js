[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/DimmableLightDevice](../../README.md) / DimmableLightRequirements

# Namespace: DimmableLightRequirements

## Variables

### GroupsServer

> `const` **GroupsServer**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](README.md#groupsserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L45)

***

### IdentifyServer

> `const` **IdentifyServer**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), `object`\>, *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>

The Identify cluster is required by the Matter specification

This version of [IdentifyServer](README.md#identifyserver) is specialized per the specification.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L38)

***

### LevelControlServer

> `const` **LevelControlServer**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, `object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>

The LevelControl cluster is required by the Matter specification

This version of [LevelControlServer](README.md#levelcontrolserver) is specialized per the specification.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L73)

***

### OccupancySensingBehavior

> `const` **OccupancySensingBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OccupancySensing/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias to the default implementation [OccupancySensingBehavior](README.md#occupancysensingbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L88)

***

### OnOffServer

> `const` **OnOffServer**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), readonly [[`LevelControlForLighting`](../../../../../../cluster/export/namespaces/OnOff/enumerations/Feature.md#levelcontrolforlighting)]\>, readonly [`"LevelControlForLighting"`]\>, *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>

The OnOff cluster is required by the Matter specification

This version of [OnOffServer](README.md#onoffserver) is specialized per the specification.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L66)

***

### ScenesServer

> `const` **ScenesServer**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), `object`\>, *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>

The Scenes cluster is required by the Matter specification

This version of [ScenesServer](README.md#scenesserver) is specialized per the specification.

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L52)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.OccupancySensing

> **OccupancySensing**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OccupancySensing/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `OccupancySensingBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L106)

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

> **Identify**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), `object`\>, *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md), [`IdentifyInterface`](../../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\> = `IdentifyServer`

##### mandatory.LevelControl

> **LevelControl**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, `object`\>, [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, *typeof* [`LevelControlServer`](../../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md), [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\> = `LevelControlServer`

##### mandatory.OnOff

> **OnOff**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), readonly [[`LevelControlForLighting`](../../../../../../cluster/export/namespaces/OnOff/enumerations/Feature.md#levelcontrolforlighting)]\>, readonly [`"LevelControlForLighting"`]\>, *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md), [`OnOffInterface`](../../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\> = `OnOffServer`

##### mandatory.Scenes

> **Scenes**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), `object`\>, *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md), [`ScenesInterface`](../../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\> = `ScenesServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L93)
