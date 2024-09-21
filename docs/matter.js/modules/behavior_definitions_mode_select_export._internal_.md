[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/mode-select/export](behavior_definitions_mode_select_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [ModeSelectBehaviorType](behavior_definitions_mode_select_export._internal_.md#modeselectbehaviortype)
- [StateType](behavior_definitions_mode_select_export._internal_.md#statetype)

### Variables

- [ModeSelectServerBase](behavior_definitions_mode_select_export._internal_.md#modeselectserverbase)

## Type Aliases

### ModeSelectBehaviorType

Ƭ **ModeSelectBehaviorType**: `InstanceType`\<typeof [`ModeSelectBehavior`](behavior_definitions_mode_select_export.md#modeselectbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L23)

___

### StateType

Ƭ **StateType**: `InstanceType`\<typeof `ModeSelectBehavior.State`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L25)

## Variables

### ModeSelectServerBase

• `Const` **ModeSelectServerBase**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.ModeSelect.Feature.md#onoff)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ModeSelectInterface`](behavior_definitions_mode_select_export.md#modeselectinterface)\>, [`ModeSelectInterface`](behavior_definitions_mode_select_export.md#modeselectinterface)\>, [`ModeSelectInterface`](behavior_definitions_mode_select_export.md#modeselectinterface)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectServer.ts:20](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectServer.ts#L20)
