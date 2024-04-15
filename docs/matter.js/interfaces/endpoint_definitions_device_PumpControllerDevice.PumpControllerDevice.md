[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/PumpControllerDevice](../modules/endpoint_definitions_device_PumpControllerDevice.md) / PumpControllerDevice

# Interface: PumpControllerDevice

[endpoint/definitions/device/PumpControllerDevice](../modules/endpoint_definitions_device_PumpControllerDevice.md).PumpControllerDevice

A Pump Controller device is capable of configuring and controlling a Pump device.

**`See`**

MatterSpecification.v11.Device § 6.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`PumpControllerDeviceDefinition`](../modules/endpoint_definitions_device_PumpControllerDevice.md#pumpcontrollerdevicedefinition)\>

  ↳ **`PumpControllerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#devicetype)
- [name](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#name)
- [requirements](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#set)
- [with](endpoint_definitions_device_PumpControllerDevice.PumpControllerDevice.md#with)

## Properties

### behaviors

• **behaviors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identify` | typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md) |

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

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

• **name**: ``"PumpController"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`PumpControllerRequirements`](../modules/endpoint_definitions_device_PumpControllerDevice.PumpControllerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``772`` = 0x304; `name`: ``"PumpController"`` = "PumpController"; `requirements`: typeof [`PumpControllerRequirements`](../modules/endpoint_definitions_device_PumpControllerDevice.PumpControllerRequirements.md) = PumpControllerRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``772`` = 0x304; `name`: ``"PumpController"`` = "PumpController"; `requirements`: typeof [`PumpControllerRequirements`](../modules/endpoint_definitions_device_PumpControllerDevice.PumpControllerRequirements.md) = PumpControllerRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``772`` = 0x304; `name`: ``"PumpController"`` = "PumpController"; `requirements`: typeof [`PumpControllerRequirements`](../modules/endpoint_definitions_device_PumpControllerDevice.PumpControllerRequirements.md) = PumpControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``772`` = 0x304; `name`: ``"PumpController"`` = "PumpController"; `requirements`: typeof [`PumpControllerRequirements`](../modules/endpoint_definitions_device_PumpControllerDevice.PumpControllerRequirements.md) = PumpControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
