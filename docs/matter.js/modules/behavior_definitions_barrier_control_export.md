[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/barrier-control/export

# Module: behavior/definitions/barrier-control/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_barrier_control_export._internal_.md)

### Namespaces

- [BarrierControlBehavior](behavior_definitions_barrier_control_export.BarrierControlBehavior.md)
- [BarrierControlInterface](behavior_definitions_barrier_control_export.BarrierControlInterface.md)

### Classes

- [BarrierControlServer](../classes/behavior_definitions_barrier_control_export.BarrierControlServer.md)

### Interfaces

- [BarrierControlBehavior](../interfaces/behavior_definitions_barrier_control_export.BarrierControlBehavior-1.md)

### Type Aliases

- [BarrierControlGoToPercentRequest](behavior_definitions_barrier_control_export.md#barriercontrolgotopercentrequest)
- [BarrierControlInterface](behavior_definitions_barrier_control_export.md#barriercontrolinterface)

### Variables

- [BarrierControlBehavior](behavior_definitions_barrier_control_export.md#barriercontrolbehavior)

## Type Aliases

### BarrierControlGoToPercentRequest

Ƭ **BarrierControlGoToPercentRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvBarrierControlGoToPercentRequest`](cluster_export.BarrierControl.md#tlvbarriercontrolgotopercentrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L13)

___

### BarrierControlInterface

Ƭ **BarrierControlInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_barrier_control_export.BarrierControlInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L15)

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlInterface.ts#L22)

## Variables

### BarrierControlBehavior

• `Const` **BarrierControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BarrierControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`BarrierControlInterface`](behavior_definitions_barrier_control_export.md#barriercontrolinterface)\>, [`BarrierControlInterface`](behavior_definitions_barrier_control_export.md#barriercontrolinterface)\>

BarrierControlBehavior is the base class for objects that support interaction with [BarrierControl.Cluster](cluster_export.BarrierControl.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/barrier-control/BarrierControlBehavior.ts#L23)
