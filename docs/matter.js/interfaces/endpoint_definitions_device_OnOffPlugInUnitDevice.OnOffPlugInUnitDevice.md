[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OnOffPlugInUnitDevice](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.md) / OnOffPlugInUnitDevice

# Interface: OnOffPlugInUnitDevice

[endpoint/definitions/device/OnOffPlugInUnitDevice](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.md).OnOffPlugInUnitDevice

An On/Off Plug-in Unit is a device that is capable of being switched on or off by means of a bound controller device
such as an On/Off Light Switch or a Dimmer Switch. The On/Off Plug-in Unit is typically used to control a
conventional non-communicating light by switching its mains connection. Other appliances can be controlled this way
as well.

**`See`**

MatterSpecification.v11.Device § 5.1

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`OnOffPlugInUnitDeviceDefinition`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.md#onoffpluginunitdevicedefinition)\>

  ↳ **`OnOffPlugInUnitDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#behaviors)
- [defaults](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#devicetype)
- [name](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#name)
- [requirements](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#set)
- [with](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }\>

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

• **name**: ``"OnOffPlugInUnit"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`OnOffPlugInUnitRequirements`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``266`` = 0x10a; `name`: ``"OnOffPlugInUnit"`` = "OnOffPlugInUnit"; `requirements`: typeof [`OnOffPlugInUnitRequirements`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md) = OnOffPlugInUnitRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``266`` = 0x10a; `name`: ``"OnOffPlugInUnit"`` = "OnOffPlugInUnit"; `requirements`: typeof [`OnOffPlugInUnitRequirements`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md) = OnOffPlugInUnitRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``266`` = 0x10a; `name`: ``"OnOffPlugInUnit"`` = "OnOffPlugInUnit"; `requirements`: typeof [`OnOffPlugInUnitRequirements`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md) = OnOffPlugInUnitRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``266`` = 0x10a; `name`: ``"OnOffPlugInUnit"`` = "OnOffPlugInUnit"; `requirements`: typeof [`OnOffPlugInUnitRequirements`](../modules/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md) = OnOffPlugInUnitRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md)  } & \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
