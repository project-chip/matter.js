[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/on-off/export

# Module: behavior/definitions/on-off/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_on_off_export._internal_.md)

### Namespaces

- [OnOffBehavior](behavior_definitions_on_off_export.OnOffBehavior.md)
- [OnOffInterface](behavior_definitions_on_off_export.OnOffInterface.md)
- [OnOffServer](behavior_definitions_on_off_export.OnOffServer.md)

### Classes

- [OnOffServer](../classes/behavior_definitions_on_off_export.OnOffServer-1.md)

### Interfaces

- [OnOffBehavior](../interfaces/behavior_definitions_on_off_export.OnOffBehavior-1.md)

### Type Aliases

- [OffWithEffectRequest](behavior_definitions_on_off_export.md#offwitheffectrequest)
- [OnOffInterface](behavior_definitions_on_off_export.md#onoffinterface)
- [OnWithTimedOffRequest](behavior_definitions_on_off_export.md#onwithtimedoffrequest)

### Variables

- [OnOffBehavior](behavior_definitions_on_off_export.md#onoffbehavior)

## Type Aliases

### OffWithEffectRequest

Ƭ **OffWithEffectRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvOffWithEffectRequest`](cluster_export.OnOff.md#tlvoffwitheffectrequest)\>

The OffWithEffect command allows devices to be turned off using enhanced ways of fading.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L18)

___

### OnOffInterface

Ƭ **OnOffInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_on_off_export.OnOffInterface.Base.md)  }, \{ `flags`: \{ `levelControlForLighting`: ``true``  } ; `methods`: [`LevelControlForLighting`](../interfaces/behavior_definitions_on_off_export.OnOffInterface.LevelControlForLighting.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L31)

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L86)

___

### OnWithTimedOffRequest

Ƭ **OnWithTimedOffRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvOnWithTimedOffRequest`](cluster_export.OnOff.md#tlvonwithtimedoffrequest)\>

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off duration so
that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received during this time, are
prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device is turned on.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L29)

## Variables

### OnOffBehavior

• `Const` **OnOffBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>

OnOffBehavior is the base class for objects that support interaction with [OnOff.Cluster](cluster_export.OnOff.md#cluster).

This class does not have optional features of OnOff.Cluster enabled. You can enable additional features using
OnOffBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffBehavior.ts#L26)
