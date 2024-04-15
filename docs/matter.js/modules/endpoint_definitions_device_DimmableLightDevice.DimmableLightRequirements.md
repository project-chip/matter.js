[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/DimmableLightDevice](endpoint_definitions_device_DimmableLightDevice.md) / DimmableLightRequirements

# Namespace: DimmableLightRequirements

[endpoint/definitions/device/DimmableLightDevice](endpoint_definitions_device_DimmableLightDevice.md).DimmableLightRequirements

## Table of contents

### Variables

- [GroupsServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#identifyserver)
- [LevelControlServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#levelcontrolserver)
- [OccupancySensingBehavior](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#occupancysensingbehavior)
- [OnOffServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#onoffserver)
- [ScenesServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#scenesserver)
- [client](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#client)
- [server](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#server)

## Variables

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L45)

___

### IdentifyServer

• `Const` **IdentifyServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>

The Identify cluster is required by the Matter specification

This version of [IdentifyServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#identifyserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L38)

___

### LevelControlServer

• `Const` **LevelControlServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>

The LevelControl cluster is required by the Matter specification

This version of [LevelControlServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#levelcontrolserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L73)

___

### OccupancySensingBehavior

• `Const` **OccupancySensingBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias to the default implementation [OccupancySensingBehavior](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#occupancysensingbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L88)

___

### OnOffServer

• `Const` **OnOffServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>

The OnOff cluster is required by the Matter specification

This version of [OnOffServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#onoffserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L66)

___

### ScenesServer

• `Const` **ScenesServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>

The Scenes cluster is required by the Matter specification

This version of [ScenesServer](endpoint_definitions_device_DimmableLightDevice.DimmableLightRequirements.md#scenesserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L52)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `OccupancySensing`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = OccupancySensingBehavior } |
| `optional.OccupancySensing` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L106)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = IdentifyServer; `LevelControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = LevelControlServer; `OnOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = OnOffServer; `Scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = ScenesServer } |
| `mandatory.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `mandatory.Identify` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> |
| `mandatory.LevelControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> |
| `mandatory.OnOff` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> |
| `mandatory.Scenes` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/DimmableLightDevice.ts#L93)
