[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/PowerSourceEndpoint](../modules/endpoint_definitions_system_PowerSourceEndpoint.md) / PowerSourceEndpoint

# Interface: PowerSourceEndpoint

[endpoint/definitions/system/PowerSourceEndpoint](../modules/endpoint_definitions_system_PowerSourceEndpoint.md).PowerSourceEndpoint

**`See`**

MatterSpecification.v11.Device § 2.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`PowerSourceEndpointDefinition`](../modules/endpoint_definitions_system_PowerSourceEndpoint.md#powersourceendpointdefinition)\>

  ↳ **`PowerSourceEndpoint`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#behaviors)
- [defaults](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#defaults)
- [deviceClass](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#deviceclass)
- [deviceRevision](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#devicerevision)
- [deviceType](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#devicetype)
- [name](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#name)
- [requirements](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#requirements)

### Methods

- [set](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#set)
- [with](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `powerSource` | typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) |

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }\>

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

• **name**: ``"PowerSource"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`PowerSourceRequirements`](../modules/endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``17`` = 0x11; `name`: ``"PowerSource"`` = "PowerSource"; `requirements`: typeof [`PowerSourceRequirements`](../modules/endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md) = PowerSourceRequirements }\>, \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``17`` = 0x11; `name`: ``"PowerSource"`` = "PowerSource"; `requirements`: typeof [`PowerSourceRequirements`](../modules/endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md) = PowerSourceRequirements }\>, \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``17`` = 0x11; `name`: ``"PowerSource"`` = "PowerSource"; `requirements`: typeof [`PowerSourceRequirements`](../modules/endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md) = PowerSourceRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``17`` = 0x11; `name`: ``"PowerSource"`` = "PowerSource"; `requirements`: typeof [`PowerSourceRequirements`](../modules/endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md) = PowerSourceRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `powerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
