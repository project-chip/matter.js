[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/TemperatureSensorDevice](../modules/endpoint_definitions_device_TemperatureSensorDevice.md) / TemperatureSensorDevice

# Interface: TemperatureSensorDevice

[endpoint/definitions/device/TemperatureSensorDevice](../modules/endpoint_definitions_device_TemperatureSensorDevice.md).TemperatureSensorDevice

A Temperature Sensor device reports measurements of temperature.

**`See`**

MatterSpecification.v11.Device § 7.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`TemperatureSensorDeviceDefinition`](../modules/endpoint_definitions_device_TemperatureSensorDevice.md#temperaturesensordevicedefinition)\>

  ↳ **`TemperatureSensorDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#behaviors)
- [defaults](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#devicetype)
- [name](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#name)
- [requirements](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#set)
- [with](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

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

• **name**: ``"TemperatureSensor"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`TemperatureSensorRequirements`](../modules/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``770`` = 0x302; `name`: ``"TemperatureSensor"`` = "TemperatureSensor"; `requirements`: typeof [`TemperatureSensorRequirements`](../modules/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md) = TemperatureSensorRequirements }\>, \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``770`` = 0x302; `name`: ``"TemperatureSensor"`` = "TemperatureSensor"; `requirements`: typeof [`TemperatureSensorRequirements`](../modules/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md) = TemperatureSensorRequirements }\>, \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``770`` = 0x302; `name`: ``"TemperatureSensor"`` = "TemperatureSensor"; `requirements`: typeof [`TemperatureSensorRequirements`](../modules/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md) = TemperatureSensorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``770`` = 0x302; `name`: ``"TemperatureSensor"`` = "TemperatureSensor"; `requirements`: typeof [`TemperatureSensorRequirements`](../modules/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md) = TemperatureSensorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
