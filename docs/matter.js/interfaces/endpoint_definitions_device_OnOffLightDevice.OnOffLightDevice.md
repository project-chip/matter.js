[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OnOffLightDevice](../modules/endpoint_definitions_device_OnOffLightDevice.md) / OnOffLightDevice

# Interface: OnOffLightDevice

[endpoint/definitions/device/OnOffLightDevice](../modules/endpoint_definitions_device_OnOffLightDevice.md).OnOffLightDevice

The On/Off Light is a lighting device that is capable of being switched on or off by means of a bound controller
device such as an On/Off Light Switch or a Dimmer Switch. In addition, an on/off light is also capable of being
switched by means of a bound occupancy sensor.

**`See`**

MatterSpecification.v11.Device § 4.1

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`OnOffLightDeviceDefinition`](../modules/endpoint_definitions_device_OnOffLightDevice.md#onofflightdevicedefinition)\>

  ↳ **`OnOffLightDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#behaviors)
- [defaults](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#devicetype)
- [name](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#name)
- [requirements](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#set)
- [with](endpoint_definitions_device_OnOffLightDevice.OnOffLightDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }\>

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

• **name**: ``"OnOffLight"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`OnOffLightRequirements`](../modules/endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``256`` = 0x100; `name`: ``"OnOffLight"`` = "OnOffLight"; `requirements`: typeof [`OnOffLightRequirements`](../modules/endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md) = OnOffLightRequirements }\>, \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``256`` = 0x100; `name`: ``"OnOffLight"`` = "OnOffLight"; `requirements`: typeof [`OnOffLightRequirements`](../modules/endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md) = OnOffLightRequirements }\>, \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``256`` = 0x100; `name`: ``"OnOffLight"`` = "OnOffLight"; `requirements`: typeof [`OnOffLightRequirements`](../modules/endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md) = OnOffLightRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``256`` = 0x100; `name`: ``"OnOffLight"`` = "OnOffLight"; `requirements`: typeof [`OnOffLightRequirements`](../modules/endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md) = OnOffLightRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `identify`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](../modules/behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](../modules/behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
