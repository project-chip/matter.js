[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/fault-injection/export

# Module: behavior/definitions/fault-injection/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_fault_injection_export._internal_.md)

### Namespaces

- [FaultInjectionBehavior](behavior_definitions_fault_injection_export.FaultInjectionBehavior.md)
- [FaultInjectionInterface](behavior_definitions_fault_injection_export.FaultInjectionInterface.md)

### Classes

- [FaultInjectionServer](../classes/behavior_definitions_fault_injection_export.FaultInjectionServer.md)

### Interfaces

- [FaultInjectionBehavior](../interfaces/behavior_definitions_fault_injection_export.FaultInjectionBehavior-1.md)

### Type Aliases

- [FailAtFaultRequest](behavior_definitions_fault_injection_export.md#failatfaultrequest)
- [FailRandomlyAtFaultRequest](behavior_definitions_fault_injection_export.md#failrandomlyatfaultrequest)
- [FaultInjectionInterface](behavior_definitions_fault_injection_export.md#faultinjectioninterface)

### Variables

- [FaultInjectionBehavior](behavior_definitions_fault_injection_export.md#faultinjectionbehavior)

## Type Aliases

### FailAtFaultRequest

Ƭ **FailAtFaultRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvFailAtFaultRequest`](cluster_export.FaultInjection.md#tlvfailatfaultrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L13)

___

### FailRandomlyAtFaultRequest

Ƭ **FailRandomlyAtFaultRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvFailRandomlyAtFaultRequest`](cluster_export.FaultInjection.md#tlvfailrandomlyatfaultrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L14)

___

### FaultInjectionInterface

Ƭ **FaultInjectionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_fault_injection_export.FaultInjectionInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L16)

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L23)

## Variables

### FaultInjectionBehavior

• `Const` **FaultInjectionBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FaultInjection.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`FaultInjectionInterface`](behavior_definitions_fault_injection_export.md#faultinjectioninterface)\>, [`FaultInjectionInterface`](behavior_definitions_fault_injection_export.md#faultinjectioninterface)\>

FaultInjectionBehavior is the base class for objects that support interaction with [FaultInjection.Cluster](cluster_export.FaultInjection.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts#L23)
