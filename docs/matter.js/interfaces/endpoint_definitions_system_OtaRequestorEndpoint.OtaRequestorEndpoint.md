[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/OtaRequestorEndpoint](../modules/endpoint_definitions_system_OtaRequestorEndpoint.md) / OtaRequestorEndpoint

# Interface: OtaRequestorEndpoint

[endpoint/definitions/system/OtaRequestorEndpoint](../modules/endpoint_definitions_system_OtaRequestorEndpoint.md).OtaRequestorEndpoint

An OTA Requestor is a device that is capable of receiving an OTA software update.

**`See`**

MatterSpecification.v11.Device § 2.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`OtaRequestorEndpointDefinition`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.md#otarequestorendpointdefinition)\>

  ↳ **`OtaRequestorEndpoint`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#behaviors)
- [defaults](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#defaults)
- [deviceClass](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#deviceclass)
- [deviceRevision](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#devicerevision)
- [deviceType](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#devicetype)
- [name](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#name)
- [requirements](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#requirements)

### Methods

- [set](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#set)
- [with](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `otaSoftwareUpdateRequestor` | typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md) |

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }\>

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

• **name**: ``"OtaRequestor"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`OtaRequestorRequirements`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``18`` = 0x12; `name`: ``"OtaRequestor"`` = "OtaRequestor"; `requirements`: typeof [`OtaRequestorRequirements`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md) = OtaRequestorRequirements }\>, \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``18`` = 0x12; `name`: ``"OtaRequestor"`` = "OtaRequestor"; `requirements`: typeof [`OtaRequestorRequirements`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md) = OtaRequestorRequirements }\>, \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``18`` = 0x12; `name`: ``"OtaRequestor"`` = "OtaRequestor"; `requirements`: typeof [`OtaRequestorRequirements`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md) = OtaRequestorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``18`` = 0x12; `name`: ``"OtaRequestor"`` = "OtaRequestor"; `requirements`: typeof [`OtaRequestorRequirements`](../modules/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md) = OtaRequestorRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
