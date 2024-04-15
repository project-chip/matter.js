[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [FaultInjection](../modules/cluster_export.FaultInjection.md) / FailAtFaultRequest

# Interface: FailAtFaultRequest

[cluster/export](../modules/cluster_export.md).[FaultInjection](../modules/cluster_export.FaultInjection.md).FailAtFaultRequest

Input to the FaultInjection failAtFault command

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvFailAtFaultRequest`](../modules/cluster_export.FaultInjection.md#tlvfailatfaultrequest)\>

  ↳ **`FailAtFaultRequest`**

## Table of contents

### Properties

- [id](cluster_export.FaultInjection.FailAtFaultRequest.md#id)
- [numCallsToFail](cluster_export.FaultInjection.FailAtFaultRequest.md#numcallstofail)
- [numCallsToSkip](cluster_export.FaultInjection.FailAtFaultRequest.md#numcallstoskip)
- [takeMutex](cluster_export.FaultInjection.FailAtFaultRequest.md#takemutex)
- [type](cluster_export.FaultInjection.FailAtFaultRequest.md#type)

## Properties

### id

• **id**: `number`

#### Inherited from

TypeFromSchema.id

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L32)

___

### numCallsToFail

• **numCallsToFail**: `number`

#### Inherited from

TypeFromSchema.numCallsToFail

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L34)

___

### numCallsToSkip

• **numCallsToSkip**: `number`

#### Inherited from

TypeFromSchema.numCallsToSkip

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L33)

___

### takeMutex

• **takeMutex**: `boolean`

#### Inherited from

TypeFromSchema.takeMutex

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L35)

___

### type

• **type**: [`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L31)
