[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/CastingVideoClientDevice](../modules/endpoint_definitions_device_CastingVideoClientDevice.md) / CastingVideoClientDevice

# Interface: CastingVideoClientDevice

[endpoint/definitions/device/CastingVideoClientDevice](../modules/endpoint_definitions_device_CastingVideoClientDevice.md).CastingVideoClientDevice

This defines conformance to the Casting Video Client device type.

A Casting Video Client is a client that can launch content on a Casting Video Player, for example, a Smart Speaker
or a Content Provider phone app.

**`See`**

MatterSpecification.v11.Device § 10.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CastingVideoClientDeviceDefinition`](../modules/endpoint_definitions_device_CastingVideoClientDevice.md#castingvideoclientdevicedefinition)\>

  ↳ **`CastingVideoClientDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#behaviors)
- [defaults](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#devicetype)
- [name](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#name)
- [requirements](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#set)
- [with](endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientDevice.md#with)

## Properties

### behaviors

• **behaviors**: `Object`

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<{}\>

Access default state values.

#### Inherited from

Identity.defaults

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L89)

___

### deviceClass

• **deviceClass**: [`DeviceClasses`](../enums/device_export.DeviceClasses.md)

#### Inherited from

Identity.deviceClass

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L51)

___

### deviceRevision

• **deviceRevision**: `number`

#### Inherited from

Identity.deviceRevision

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L50)

___

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Inherited from

Identity.deviceType

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L49)

___

### name

• **name**: ``"CastingVideoClient"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`CastingVideoClientRequirements`](../modules/endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``41`` = 0x29; `name`: ``"CastingVideoClient"`` = "CastingVideoClient"; `requirements`: typeof [`CastingVideoClientRequirements`](../modules/endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientRequirements.md) = CastingVideoClientRequirements }\>, {}\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<{}\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``41`` = 0x29; `name`: ``"CastingVideoClient"`` = "CastingVideoClient"; `requirements`: typeof [`CastingVideoClientRequirements`](../modules/endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientRequirements.md) = CastingVideoClientRequirements }\>, {}\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``41`` = 0x29; `name`: ``"CastingVideoClient"`` = "CastingVideoClient"; `requirements`: typeof [`CastingVideoClientRequirements`](../modules/endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientRequirements.md) = CastingVideoClientRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

Define an endpoint like this one with additional and/or replacement server behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BL` | extends [`List`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...behaviors` | `BL` |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``41`` = 0x29; `name`: ``"CastingVideoClient"`` = "CastingVideoClient"; `requirements`: typeof [`CastingVideoClientRequirements`](../modules/endpoint_definitions_device_CastingVideoClientDevice.CastingVideoClientRequirements.md) = CastingVideoClientRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
