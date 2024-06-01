[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [endpoint/definitions/device/BasicVideoPlayerDevice](../README.md) / BasicVideoPlayerDevice

# Interface: BasicVideoPlayerDevice

This defines conformance to the Basic Video Player device type.

A Video Player (either Basic or Casting) represents a device that is able to play media to a physical output or to a
display screen which is part of the device.

A Basic Video Player has playback controls (play, pause, etc.) and keypad remote controls (up, down, number input),
but is not able to launch content and is not a content app platform (the Casting Video Player device type is used
for these functions).

For example, a Basic Video Player can be a traditional TV device a physical media playback device such as a DVD
Player, or a device that provides input to another device like a TV or computer monitor.

Please see Video Player Architecture for additional Basic Video Player requirements relating to Video Player device
endpoint composition, commissioning, feature representation in clusters, and UI context.

## See

MatterSpecification.v11.Device § 10.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`BasicVideoPlayerDeviceDefinition`](../README.md#basicvideoplayerdevicedefinition)\>

## Properties

### behaviors

> **behaviors**: `object` & `object` & `object`

#### Type declaration

##### onOff

> **onOff**: *typeof* [`OnOffServer`](../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md)

#### Type declaration

##### mediaPlayback

> **mediaPlayback**: *typeof* [`MediaPlaybackServer`](../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md)

#### Type declaration

##### keypadInput

> **keypadInput**: *typeof* [`KeypadInputServer`](../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md)

#### Inherited from

`Identity.behaviors`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

***

### defaults

> **defaults**: [`StateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`object` & `object` & `object`\>

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

> **name**: `"BasicVideoPlayer"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

***

### requirements

> **requirements**: *typeof* [`BasicVideoPlayerRequirements`](../namespaces/BasicVideoPlayerRequirements/README.md)

#### Inherited from

`Identity.requirements`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set()

> **set**(`defaults`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object` & `object` & `object`\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#inputstateofsb)\<`object` & `object` & `object`\> |

#### Returns

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, `object` & `object` & `object`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

***

### with()

> **with**\<`BL`\>(...`behaviors`): [`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object`, `BL`\>\>

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

[`With`](../../../../../node/export/-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object`, `BL`\>\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
