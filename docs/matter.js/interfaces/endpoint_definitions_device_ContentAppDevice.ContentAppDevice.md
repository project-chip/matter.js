[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ContentAppDevice](../modules/endpoint_definitions_device_ContentAppDevice.md) / ContentAppDevice

# Interface: ContentAppDevice

[endpoint/definitions/device/ContentAppDevice](../modules/endpoint_definitions_device_ContentAppDevice.md).ContentAppDevice

This defines conformance to the Content App device type.

A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App
Platform is able to launch Content Apps and represent these apps as separate endpoints.

**`See`**

MatterSpecification.v11.Device § 10.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ContentAppDeviceDefinition`](../modules/endpoint_definitions_device_ContentAppDevice.md#contentappdevicedefinition)\>

  ↳ **`ContentAppDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#behaviors)
- [defaults](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#devicetype)
- [name](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#name)
- [requirements](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#set)
- [with](endpoint_definitions_device_ContentAppDevice.ContentAppDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }\>

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

• **name**: ``"ContentApp"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`ContentAppRequirements`](../modules/endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``36`` = 0x24; `name`: ``"ContentApp"`` = "ContentApp"; `requirements`: typeof [`ContentAppRequirements`](../modules/endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md) = ContentAppRequirements }\>, \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``36`` = 0x24; `name`: ``"ContentApp"`` = "ContentApp"; `requirements`: typeof [`ContentAppRequirements`](../modules/endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md) = ContentAppRequirements }\>, \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``36`` = 0x24; `name`: ``"ContentApp"`` = "ContentApp"; `requirements`: typeof [`ContentAppRequirements`](../modules/endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md) = ContentAppRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``36`` = 0x24; `name`: ``"ContentApp"`` = "ContentApp"; `requirements`: typeof [`ContentAppRequirements`](../modules/endpoint_definitions_device_ContentAppDevice.ContentAppRequirements.md) = ContentAppRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `applicationLauncher`: typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)  } & \{ `applicationBasic`: typeof [`ApplicationBasicServer`](../classes/behavior_definitions_application_basic_export.ApplicationBasicServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
