[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [endpoint/definitions/device/OnOffSensorDevice](../README.md) / OnOffSensorDevice

# Interface: OnOffSensorDevice

An On/Off Sensor is a measurement and sensing device that, when bound to a lighting device such as a Dimmable Light,
is capable of being used to switch the device on or off.

## See

MatterSpecification.v11.Device § 7.8

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`OnOffSensorDeviceDefinition`](../README.md#onoffsensordevicedefinition)\>

## Properties

### behaviors

> **behaviors**: `object`

#### identify

> **identify**: *typeof* [`IdentifyServer`](../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md)

#### Inherited from

`Identity.behaviors`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

***

### defaults

> **defaults**: [`StateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`object`\>

Access default state values.

#### Type declaration

##### identify

> **identify**: *typeof* [`IdentifyServer`](../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md)

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

> **name**: `"OnOffSensor"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

***

### requirements

> **requirements**: *typeof* [`OnOffSensorRequirements`](../namespaces/OnOffSensorRequirements/README.md)

#### Inherited from

`Identity.requirements`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set()

> **set**(`defaults`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object`\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#inputstateofsb)\<`object`\> |

#### Returns

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

***

### with()

> **with**\<`BL`\>(...`behaviors`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object`, `BL`\>\>

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

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object`, `BL`\>\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
