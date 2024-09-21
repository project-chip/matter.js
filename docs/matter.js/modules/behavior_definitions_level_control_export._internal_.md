[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](behavior_definitions_level_control_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [LevelControlBehaviorType](behavior_definitions_level_control_export._internal_.md#levelcontrolbehaviortype)
- [StateType](behavior_definitions_level_control_export._internal_.md#statetype)

### Variables

- [LevelControlLogicBase](behavior_definitions_level_control_export._internal_.md#levelcontrollogicbase)

## Type Aliases

### LevelControlBehaviorType

Ƭ **LevelControlBehaviorType**: `InstanceType`\<typeof [`LevelControlBehavior`](behavior_definitions_level_control_export.md#levelcontrolbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L23)

___

### StateType

Ƭ **StateType**: `InstanceType`\<typeof `LevelControlBehavior.State`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/level-control/LevelControlBehavior.ts#L25)

## Variables

### LevelControlLogicBase

• `Const` **LevelControlLogicBase**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:32](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L32)
