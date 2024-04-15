[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/PumpDevice](../modules/endpoint_definitions_device_PumpDevice.md) / PumpDevice

# Interface: PumpDevice

[endpoint/definitions/device/PumpDevice](../modules/endpoint_definitions_device_PumpDevice.md).PumpDevice

A Pump device is a pump that may have variable speed. It may have optional built-in sensors and a regulation
mechanism. It is typically used for pumping fluids like water.

PumpDevice requires PumpConfigurationAndControl cluster but PumpConfigurationAndControl is not added by default
because you must select the features your device supports. You can add manually using PumpDevice.with().

**`See`**

MatterSpecification.v11.Device § 5.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`PumpDeviceDefinition`](../modules/endpoint_definitions_device_PumpDevice.md#pumpdevicedefinition)\>

  ↳ **`PumpDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_PumpDevice.PumpDevice.md#behaviors)
- [defaults](endpoint_definitions_device_PumpDevice.PumpDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_PumpDevice.PumpDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_PumpDevice.PumpDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_PumpDevice.PumpDevice.md#devicetype)
- [name](endpoint_definitions_device_PumpDevice.PumpDevice.md#name)
- [requirements](endpoint_definitions_device_PumpDevice.PumpDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_PumpDevice.PumpDevice.md#set)
- [with](endpoint_definitions_device_PumpDevice.PumpDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

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

• **name**: ``"Pump"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`PumpRequirements`](../modules/endpoint_definitions_device_PumpDevice.PumpRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``771`` = 0x303; `name`: ``"Pump"`` = "Pump"; `requirements`: typeof [`PumpRequirements`](../modules/endpoint_definitions_device_PumpDevice.PumpRequirements.md) = PumpRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``771`` = 0x303; `name`: ``"Pump"`` = "Pump"; `requirements`: typeof [`PumpRequirements`](../modules/endpoint_definitions_device_PumpDevice.PumpRequirements.md) = PumpRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``771`` = 0x303; `name`: ``"Pump"`` = "Pump"; `requirements`: typeof [`PumpRequirements`](../modules/endpoint_definitions_device_PumpDevice.PumpRequirements.md) = PumpRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``771`` = 0x303; `name`: ``"Pump"`` = "Pump"; `requirements`: typeof [`PumpRequirements`](../modules/endpoint_definitions_device_PumpDevice.PumpRequirements.md) = PumpRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
