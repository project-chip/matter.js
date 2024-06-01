[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [endpoint/definitions/device/DimmablePlugInUnitDevice](../README.md) / DimmablePlugInUnitDevice

# Interface: DimmablePlugInUnitDevice

A Dimmable Plug-In Unit is a device that is capable of being switched on or off and have its level adjusted by means
of a bound controller device such as a Dimmer Switch or a Color Dimmer Switch. The Dimmable Plug-in Unit is
typically used to control a conventional non-communicating light through its mains connection using phase cutting.

## See

MatterSpecification.v11.Device § 5.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`DimmablePlugInUnitDeviceDefinition`](../README.md#dimmablepluginunitdevicedefinition)\>

## Properties

### behaviors

> **behaviors**: `object` & `object` & `object` & `object` & `object`

#### Type declaration

##### identify

> **identify**: [`Type`](../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/Identify/interfaces/Cluster.md), `object`\>, *typeof* [`IdentifyServer`](../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md), [`IdentifyInterface`](../../../../../behavior/definitions/identify/export/README.md#identifyinterface)\>

#### Type declaration

##### groups

> **groups**: *typeof* [`GroupsServer`](../../../../../behavior/definitions/groups/export/classes/GroupsServer.md)

#### Type declaration

##### scenes

> **scenes**: [`Type`](../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/Scenes/interfaces/Cluster.md), `object`\>, *typeof* [`ScenesServer`](../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md), [`ScenesInterface`](../../../../../behavior/definitions/scenes/export/README.md#scenesinterface)\>

#### Type declaration

##### onOff

> **onOff**: [`Type`](../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/OnOff/interfaces/Cluster.md), readonly [[`LevelControlForLighting`](../../../../../cluster/export/namespaces/OnOff/enumerations/Feature.md#levelcontrolforlighting)]\>, readonly [`"LevelControlForLighting"`]\>, *typeof* [`OnOffServer`](../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md), [`OnOffInterface`](../../../../../behavior/definitions/on-off/export/README.md#onoffinterface)\>

#### Type declaration

##### levelControl

> **levelControl**: [`Type`](../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, `object`\>, [`Type`](../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff)]\>, readonly [`"OnOff"`, `"Lighting"`]\>, *typeof* [`LevelControlServer`](../../../../../behavior/definitions/level-control/export/classes/LevelControlServer.md), [`LevelControlInterface`](../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../../../../../behavior/definitions/level-control/export/README.md#levelcontrolinterface)\>

#### Inherited from

`Identity.behaviors`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

***

### defaults

> **defaults**: [`StateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`object` & `object` & `object` & `object` & `object`\>

Access default state values.

#### Inherited from

`Identity.defaults`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L89)

***

### deviceClass

> **deviceClass**: [`DeviceClasses`](../../../../../device/export/enumerations/DeviceClasses.md)

#### Inherited from

`Identity.deviceClass`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L51)

***

### deviceRevision

> **deviceRevision**: `number`

#### Inherited from

`Identity.deviceRevision`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L50)

***

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../../datatype/export/README.md#devicetypeid)

#### Inherited from

`Identity.deviceType`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L49)

***

### name

> **name**: `"DimmablePlugInUnit"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

***

### requirements

> **requirements**: *typeof* [`DimmablePlugInUnitRequirements`](../namespaces/DimmablePlugInUnitRequirements/README.md)

#### Inherited from

`Identity.requirements`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set()

> **set**(`defaults`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object` & `object` & `object` & `object` & `object`\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#inputstateofsb)\<`object` & `object` & `object` & `object` & `object`\> |

#### Returns

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object` & `object` & `object` & `object` & `object`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

***

### with()

> **with**\<`BL`\>(...`behaviors`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object`, `BL`\>\>

Define an endpoint like this one with additional and/or replacement server behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `BL` *extends* [`List`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#list) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`behaviors` | `BL` |

#### Returns

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object`, `BL`\>\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
