[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/target-navigator/export

# Module: behavior/definitions/target-navigator/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_target_navigator_export._internal_.md)

### Namespaces

- [TargetNavigatorBehavior](behavior_definitions_target_navigator_export.TargetNavigatorBehavior.md)
- [TargetNavigatorInterface](behavior_definitions_target_navigator_export.TargetNavigatorInterface.md)

### Classes

- [TargetNavigatorServer](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md)

### Interfaces

- [TargetNavigatorBehavior](../interfaces/behavior_definitions_target_navigator_export.TargetNavigatorBehavior-1.md)

### Type Aliases

- [NavigateTargetRequest](behavior_definitions_target_navigator_export.md#navigatetargetrequest)
- [NavigateTargetResponse](behavior_definitions_target_navigator_export.md#navigatetargetresponse)
- [TargetNavigatorInterface](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)

### Variables

- [TargetNavigatorBehavior](behavior_definitions_target_navigator_export.md#targetnavigatorbehavior)

## Type Aliases

### NavigateTargetRequest

Ƭ **NavigateTargetRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNavigateTargetRequest`](cluster_export.TargetNavigator.md#tlvnavigatetargetrequest)\>

Upon receipt, this shall navigation the UX to the target identified.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L18)

___

### NavigateTargetResponse

Ƭ **NavigateTargetResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNavigateTargetResponse`](cluster_export.TargetNavigator.md#tlvnavigatetargetresponse)\>

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L25)

___

### TargetNavigatorInterface

Ƭ **TargetNavigatorInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_target_navigator_export.TargetNavigatorInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L27)

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L38)

## Variables

### TargetNavigatorBehavior

• `Const` **TargetNavigatorBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\>, [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\>

TargetNavigatorBehavior is the base class for objects that support interaction with [TargetNavigator.Cluster](cluster_export.TargetNavigator.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorBehavior.ts#L23)
