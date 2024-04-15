[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OccupancySensorDevice](../modules/endpoint_definitions_device_OccupancySensorDevice.md) / OccupancySensorDevice

# Interface: OccupancySensorDevice

[endpoint/definitions/device/OccupancySensorDevice](../modules/endpoint_definitions_device_OccupancySensorDevice.md).OccupancySensorDevice

An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting the occupancy
state in a designated area.

**`See`**

MatterSpecification.v11.Device § 7.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`OccupancySensorDeviceDefinition`](../modules/endpoint_definitions_device_OccupancySensorDevice.md#occupancysensordevicedefinition)\>

  ↳ **`OccupancySensorDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#behaviors)
- [defaults](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#devicetype)
- [name](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#name)
- [requirements](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#set)
- [with](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }\>

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

• **name**: ``"OccupancySensor"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`OccupancySensorRequirements`](../modules/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``263`` = 0x107; `name`: ``"OccupancySensor"`` = "OccupancySensor"; `requirements`: typeof [`OccupancySensorRequirements`](../modules/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md) = OccupancySensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``263`` = 0x107; `name`: ``"OccupancySensor"`` = "OccupancySensor"; `requirements`: typeof [`OccupancySensorRequirements`](../modules/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md) = OccupancySensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``263`` = 0x107; `name`: ``"OccupancySensor"`` = "OccupancySensor"; `requirements`: typeof [`OccupancySensorRequirements`](../modules/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md) = OccupancySensorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``263`` = 0x107; `name`: ``"OccupancySensor"`` = "OccupancySensor"; `requirements`: typeof [`OccupancySensorRequirements`](../modules/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md) = OccupancySensorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
