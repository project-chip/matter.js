[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OnOffLightDevice](endpoint_definitions_device_OnOffLightDevice.md) / OnOffLightRequirements

# Namespace: OnOffLightRequirements

[endpoint/definitions/device/OnOffLightDevice](endpoint_definitions_device_OnOffLightDevice.md).OnOffLightRequirements

## Table of contents

### Variables

- [GroupsServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#identifyserver)
- [LevelControlServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#levelcontrolserver)
- [OccupancySensingBehavior](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#occupancysensingbehavior)
- [OnOffServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#onoffserver)
- [ScenesServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#scenesserver)
- [client](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#client)
- [server](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#server)

## Variables

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L46)

___

### IdentifyServer

• `Const` **IdentifyServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>

The Identify cluster is required by the Matter specification

This version of [IdentifyServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#identifyserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:39](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L39)

___

### LevelControlServer

• `Const` **LevelControlServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>

The LevelControl cluster is optional per the Matter specification

This version of [LevelControlServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#levelcontrolserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L74)

___

### OccupancySensingBehavior

• `Const` **OccupancySensingBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L89)

___

### OnOffServer

• `Const` **OnOffServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>

The OnOff cluster is required by the Matter specification

This version of [OnOffServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#onoffserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L67)

___

### ScenesServer

• `Const` **ScenesServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>

The Scenes cluster is required by the Matter specification

This version of [ScenesServer](endpoint_definitions_device_OnOffLightDevice.OnOffLightRequirements.md#scenesserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:53](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L53)

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

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:102](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L102)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> = IdentifyServer; `OnOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = OnOffServer; `Scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> = ScenesServer } |
| `mandatory.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `mandatory.Identify` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\> |
| `mandatory.OnOff` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> |
| `mandatory.Scenes` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\> |
| `optional` | \{ `LevelControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = LevelControlServer } |
| `optional.LevelControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, \{ `attributes`: \{ `currentLevel`: \{ `max`: ``254`` = 254; `min`: ``1`` = 1 } ; `maxLevel`: \{ `default`: ``254`` = 254; `max`: ``255`` = 255; `min`: ``254`` = 254 } ; `minLevel`: \{ `default`: ``1`` = 1; `max`: ``2`` = 2; `min`: ``1`` = 1 }  }  }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [``"OnOff"``, ``"Lighting"``]\>, typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts:94](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffLightDevice.ts#L94)
