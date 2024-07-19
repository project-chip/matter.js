[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/OnOffPlugInUnitDevice

# Module: endpoint/definitions/device/OnOffPlugInUnitDevice

## Table of contents

### Namespaces

- [OnOffPlugInUnitRequirements](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md)

### Interfaces

- [OnOffPlugInUnitDevice](../interfaces/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md)

### Variables

- [OnOffPlugInUnitDevice](endpoint_definitions_device_OnOffPlugInUnitDevice.md#onoffpluginunitdevice)
- [OnOffPlugInUnitDeviceDefinition](endpoint_definitions_device_OnOffPlugInUnitDevice.md#onoffpluginunitdevicedefinition)

## Variables

### OnOffPlugInUnitDevice

• **OnOffPlugInUnitDevice**: [`OnOffPlugInUnitDevice`](../interfaces/endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:28](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L28)

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:104](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L104)

___

### OnOffPlugInUnitDeviceDefinition

• `Const` **OnOffPlugInUnitDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``266`` = 0x10a; `name`: ``"OnOffPlugInUnit"`` = "OnOffPlugInUnit"; `requirements`: typeof [`OnOffPlugInUnitRequirements`](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md) = OnOffPlugInUnitRequirements }\>, \{ `identify`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), \{ `commands`: \{ `triggerEffect`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md), [`IdentifyInterface`](behavior_definitions_identify_export.md#identifyinterface)\>  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `scenes`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.Scenes.Cluster.md), \{ `commands`: \{ `copyScene`: \{ `optional`: ``false`` = false } ; `enhancedAddScene`: \{ `optional`: ``false`` = false } ; `enhancedViewScene`: \{ `optional`: ``false`` = false }  }  }\>, typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md), [`ScenesInterface`](behavior_definitions_scenes_export.md#scenesinterface)\>  } & \{ `onOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, readonly [``"LevelControlForLighting"``]\>, typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:90](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L90)
