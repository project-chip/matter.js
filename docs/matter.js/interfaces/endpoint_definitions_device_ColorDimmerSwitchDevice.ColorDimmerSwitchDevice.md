[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ColorDimmerSwitchDevice](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.md) / ColorDimmerSwitchDevice

# Interface: ColorDimmerSwitchDevice

[endpoint/definitions/device/ColorDimmerSwitchDevice](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.md).ColorDimmerSwitchDevice

A Color Dimmer Switch is a controller device that, when bound to a lighting device such as an Extended Color Light,
is capable of being used to adjust the color of the light being emitted.

**`See`**

MatterSpecification.v11.Device § 6.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ColorDimmerSwitchDeviceDefinition`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.md#colordimmerswitchdevicedefinition)\>

  ↳ **`ColorDimmerSwitchDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#behaviors)
- [defaults](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#devicetype)
- [name](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#name)
- [requirements](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#set)
- [with](endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchDevice.md#with)

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

• **name**: ``"ColorDimmerSwitch"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`ColorDimmerSwitchRequirements`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``261`` = 0x105; `name`: ``"ColorDimmerSwitch"`` = "ColorDimmerSwitch"; `requirements`: typeof [`ColorDimmerSwitchRequirements`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchRequirements.md) = ColorDimmerSwitchRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``261`` = 0x105; `name`: ``"ColorDimmerSwitch"`` = "ColorDimmerSwitch"; `requirements`: typeof [`ColorDimmerSwitchRequirements`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchRequirements.md) = ColorDimmerSwitchRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``261`` = 0x105; `name`: ``"ColorDimmerSwitch"`` = "ColorDimmerSwitch"; `requirements`: typeof [`ColorDimmerSwitchRequirements`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchRequirements.md) = ColorDimmerSwitchRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``261`` = 0x105; `name`: ``"ColorDimmerSwitch"`` = "ColorDimmerSwitch"; `requirements`: typeof [`ColorDimmerSwitchRequirements`](../modules/endpoint_definitions_device_ColorDimmerSwitchDevice.ColorDimmerSwitchRequirements.md) = ColorDimmerSwitchRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
