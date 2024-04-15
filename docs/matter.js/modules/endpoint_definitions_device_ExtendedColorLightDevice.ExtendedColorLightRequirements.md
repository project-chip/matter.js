[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ExtendedColorLightDevice](endpoint_definitions_device_ExtendedColorLightDevice.md) / ExtendedColorLightRequirements

# Namespace: ExtendedColorLightRequirements

[endpoint/definitions/device/ExtendedColorLightDevice](endpoint_definitions_device_ExtendedColorLightDevice.md).ExtendedColorLightRequirements

## Table of contents

### Variables

- [ColorControlServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#colorcontrolserver)
- [GroupsServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#identifyserver)
- [LevelControlServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#levelcontrolserver)
- [OnOffServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#onoffserver)
- [ScenesServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#scenesserver)
- [server](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#server)

## Variables

### ColorControlServer

• `Const` **ColorControlServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, \{ `attributes`: \{ `remainingTime`: \{ `optional`: ``false`` = false }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, typeof [`ColorControlServer`](../classes/behavior_definitions_color_control_export.ColorControlServer.md), [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>

The ColorControl cluster is required by the Matter specification

This version of [ColorControlServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#colorcontrolserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L90)

___

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L47)

___

### IdentifyServer

• `Const` **IdentifyServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>

The Identify cluster is required by the Matter specification

This version of [IdentifyServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#identifyserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L40)

___

### LevelControlServer

• `Const` **LevelControlServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>

The LevelControl cluster is required by the Matter specification

This version of [LevelControlServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#levelcontrolserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L75)

___

### OnOffServer

• `Const` **OnOffServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>

The OnOff cluster is required by the Matter specification

This version of [OnOffServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#onoffserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L68)

___

### ScenesServer

• `Const` **ScenesServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>

The Scenes cluster is required by the Matter specification

This version of [ScenesServer](endpoint_definitions_device_ExtendedColorLightDevice.ExtendedColorLightRequirements.md#scenesserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L54)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `ColorControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, \{ `attributes`: \{ `remainingTime`: \{ `optional`: ``false`` = false }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, typeof [`ColorControlServer`](../classes/behavior_definitions_color_control_export.ColorControlServer.md), [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\> = ColorControlServer; `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = IdentifyServer; `LevelControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = LevelControlServer; `OnOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = OnOffServer; `Scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = ScenesServer } |
| `mandatory.ColorControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, \{ `attributes`: \{ `remainingTime`: \{ `optional`: ``false`` = false }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [``"Xy"``, ``"ColorTemperature"``]\>, typeof [`ColorControlServer`](../classes/behavior_definitions_color_control_export.ColorControlServer.md), [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\> |
| `mandatory.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `mandatory.Identify` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> |
| `mandatory.LevelControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> |
| `mandatory.OnOff` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> |
| `mandatory.Scenes` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ExtendedColorLightDevice.ts#L97)
