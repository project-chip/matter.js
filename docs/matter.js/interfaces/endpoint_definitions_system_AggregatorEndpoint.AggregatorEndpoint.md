[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/AggregatorEndpoint](../modules/endpoint_definitions_system_AggregatorEndpoint.md) / AggregatorEndpoint

# Interface: AggregatorEndpoint

[endpoint/definitions/system/AggregatorEndpoint](../modules/endpoint_definitions_system_AggregatorEndpoint.md).AggregatorEndpoint

This device type aggregates endpoints as a collection. Clusters on the endpoint indicating this device type provide
functionality for the collection of descendent endpoints present in the PartsList of the endpoint’s descriptor, for
example the Actions cluster.

The purpose of this device type is to aggregate functionality for a collection of endpoints. The definition of the
collection or functionality is not defined here.

When using this device type as a collection of bridged nodes, please see the "Bridge" section in the System Model
specification.

**`See`**

MatterSpecification.v11.Device § 2.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`AggregatorEndpointDefinition`](../modules/endpoint_definitions_system_AggregatorEndpoint.md#aggregatorendpointdefinition)\>

  ↳ **`AggregatorEndpoint`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#behaviors)
- [defaults](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#defaults)
- [deviceClass](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#deviceclass)
- [deviceRevision](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#devicerevision)
- [deviceType](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#devicetype)
- [name](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#name)
- [requirements](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#requirements)

### Methods

- [set](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#set)
- [with](endpoint_definitions_system_AggregatorEndpoint.AggregatorEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }\>

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

• **name**: ``"Aggregator"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`AggregatorRequirements`](../modules/endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } ; `deviceClass`: [`Dynamic`](../enums/device_export.DeviceClasses.md#dynamic) = DeviceClasses.Dynamic; `deviceRevision`: ``1`` = 1; `deviceType`: ``14`` = 0xe; `name`: ``"Aggregator"`` = "Aggregator"; `requirements`: typeof [`AggregatorRequirements`](../modules/endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md) = AggregatorRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } ; `deviceClass`: [`Dynamic`](../enums/device_export.DeviceClasses.md#dynamic) = DeviceClasses.Dynamic; `deviceRevision`: ``1`` = 1; `deviceType`: ``14`` = 0xe; `name`: ``"Aggregator"`` = "Aggregator"; `requirements`: typeof [`AggregatorRequirements`](../modules/endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md) = AggregatorRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } ; `deviceClass`: [`Dynamic`](../enums/device_export.DeviceClasses.md#dynamic) = DeviceClasses.Dynamic; `deviceRevision`: ``1`` = 1; `deviceType`: ``14`` = 0xe; `name`: ``"Aggregator"`` = "Aggregator"; `requirements`: typeof [`AggregatorRequirements`](../modules/endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md) = AggregatorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } ; `deviceClass`: [`Dynamic`](../enums/device_export.DeviceClasses.md#dynamic) = DeviceClasses.Dynamic; `deviceRevision`: ``1`` = 1; `deviceType`: ``14`` = 0xe; `name`: ``"Aggregator"`` = "Aggregator"; `requirements`: typeof [`AggregatorRequirements`](../modules/endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md) = AggregatorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
