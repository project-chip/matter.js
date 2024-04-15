[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ControlBridgeDevice](../modules/endpoint_definitions_device_ControlBridgeDevice.md) / ControlBridgeDevice

# Interface: ControlBridgeDevice

[endpoint/definitions/device/ControlBridgeDevice](../modules/endpoint_definitions_device_ControlBridgeDevice.md).ControlBridgeDevice

A Control Bridge is a controller device that, when bound to a lighting device such as an Extended Color Light, is
capable of being used to switch the device on or off, adjust the intensity of the light being emitted and adjust the
color of the light being emitted. In addition, a Control Bridge device is capable of being used for setting scenes.

**`See`**

MatterSpecification.v11.Device § 6.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ControlBridgeDeviceDefinition`](../modules/endpoint_definitions_device_ControlBridgeDevice.md#controlbridgedevicedefinition)\>

  ↳ **`ControlBridgeDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#behaviors)
- [defaults](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#devicetype)
- [name](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#name)
- [requirements](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#set)
- [with](endpoint_definitions_device_ControlBridgeDevice.ControlBridgeDevice.md#with)

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

• **name**: ``"ControlBridge"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`ControlBridgeRequirements`](../modules/endpoint_definitions_device_ControlBridgeDevice.ControlBridgeRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``2112`` = 0x840; `name`: ``"ControlBridge"`` = "ControlBridge"; `requirements`: typeof [`ControlBridgeRequirements`](../modules/endpoint_definitions_device_ControlBridgeDevice.ControlBridgeRequirements.md) = ControlBridgeRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``2112`` = 0x840; `name`: ``"ControlBridge"`` = "ControlBridge"; `requirements`: typeof [`ControlBridgeRequirements`](../modules/endpoint_definitions_device_ControlBridgeDevice.ControlBridgeRequirements.md) = ControlBridgeRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``2112`` = 0x840; `name`: ``"ControlBridge"`` = "ControlBridge"; `requirements`: typeof [`ControlBridgeRequirements`](../modules/endpoint_definitions_device_ControlBridgeDevice.ControlBridgeRequirements.md) = ControlBridgeRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``2112`` = 0x840; `name`: ``"ControlBridge"`` = "ControlBridge"; `requirements`: typeof [`ControlBridgeRequirements`](../modules/endpoint_definitions_device_ControlBridgeDevice.ControlBridgeRequirements.md) = ControlBridgeRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
