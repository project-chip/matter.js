[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/on-off/export](behavior_definitions_on_off_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [OnOffBehaviorType](behavior_definitions_on_off_export._internal_.md#onoffbehaviortype)
- [StateType](behavior_definitions_on_off_export._internal_.md#statetype)

### Variables

- [Base](behavior_definitions_on_off_export._internal_.md#base)

## Type Aliases

### OnOffBehaviorType

Ƭ **OnOffBehaviorType**: `InstanceType`\<typeof [`OnOffBehavior`](behavior_definitions_on_off_export.md#onoffbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L23)

___

### StateType

Ƭ **StateType**: `InstanceType`\<typeof `OnOffBehavior.State`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L25)

## Variables

### Base

• `Const` **Base**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L12)
