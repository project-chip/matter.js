[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/mode-select/export

# Module: behavior/definitions/mode-select/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_mode_select_export._internal_.md)

### Namespaces

- [ModeSelectBehavior](behavior_definitions_mode_select_export.ModeSelectBehavior.md)
- [ModeSelectInterface](behavior_definitions_mode_select_export.ModeSelectInterface.md)

### Classes

- [ModeSelectServer](../classes/behavior_definitions_mode_select_export.ModeSelectServer.md)

### Interfaces

- [ModeSelectBehavior](../interfaces/behavior_definitions_mode_select_export.ModeSelectBehavior-1.md)

### Type Aliases

- [ChangeToModeRequest](behavior_definitions_mode_select_export.md#changetomoderequest)
- [ModeSelectInterface](behavior_definitions_mode_select_export.md#modeselectinterface)

### Variables

- [ModeSelectBehavior](behavior_definitions_mode_select_export.md#modeselectbehavior)

## Type Aliases

### ChangeToModeRequest

Ƭ **ChangeToModeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvChangeToModeRequest`](cluster_export.ModeSelect.md#tlvchangetomoderequest)\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the
server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

**`See`**

MatterSpecification.v11.Cluster § 1.8.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L21)

___

### ModeSelectInterface

Ƭ **ModeSelectInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_mode_select_export.ModeSelectInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L23)

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L37)

## Variables

### ModeSelectBehavior

• `Const` **ModeSelectBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ModeSelectInterface`](behavior_definitions_mode_select_export.md#modeselectinterface)\>, [`ModeSelectInterface`](behavior_definitions_mode_select_export.md#modeselectinterface)\>

ModeSelectBehavior is the base class for objects that support interaction with [ModeSelect.Cluster](cluster_export.ModeSelect.md#cluster).

This class does not have optional features of ModeSelect.Cluster enabled. You can enable additional features using
ModeSelectBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectBehavior.ts#L26)
