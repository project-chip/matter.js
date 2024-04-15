[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/BridgedNodeEndpoint](../modules/endpoint_definitions_system_BridgedNodeEndpoint.md) / BridgedNodeEndpoint

# Interface: BridgedNodeEndpoint

[endpoint/definitions/system/BridgedNodeEndpoint](../modules/endpoint_definitions_system_BridgedNodeEndpoint.md).BridgedNodeEndpoint

This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a "read me first" endpoint that
describes itself and any other endpoints that make up the Bridged Node. A Bridged Node endpoint represents a device
on a foreign network, but is not the root endpoint of the bridge itself.

**`See`**

MatterSpecification.v11.Device § 2.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`BridgedNodeEndpointDefinition`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.md#bridgednodeendpointdefinition)\>

  ↳ **`BridgedNodeEndpoint`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#behaviors)
- [defaults](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#defaults)
- [deviceClass](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#deviceclass)
- [deviceRevision](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#devicerevision)
- [deviceType](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#devicetype)
- [name](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#name)
- [requirements](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#requirements)

### Methods

- [set](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#set)
- [with](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }\>

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

• **name**: ``"BridgedNode"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`BridgedNodeRequirements`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``19`` = 0x13; `name`: ``"BridgedNode"`` = "BridgedNode"; `requirements`: typeof [`BridgedNodeRequirements`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md) = BridgedNodeRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``19`` = 0x13; `name`: ``"BridgedNode"`` = "BridgedNode"; `requirements`: typeof [`BridgedNodeRequirements`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md) = BridgedNodeRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``19`` = 0x13; `name`: ``"BridgedNode"`` = "BridgedNode"; `requirements`: typeof [`BridgedNodeRequirements`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md) = BridgedNodeRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``19`` = 0x13; `name`: ``"BridgedNode"`` = "BridgedNode"; `requirements`: typeof [`BridgedNodeRequirements`](../modules/endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md) = BridgedNodeRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `bridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
