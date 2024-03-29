[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [FaultInjection](../modules/exports_cluster.FaultInjection.md) / FailAtFaultRequest

# Interface: FailAtFaultRequest

[exports/cluster](../modules/exports_cluster.md).[FaultInjection](../modules/exports_cluster.FaultInjection.md).FailAtFaultRequest

Input to the FaultInjection failAtFault command

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvFailAtFaultRequest`](../modules/exports_cluster.FaultInjection.md#tlvfailatfaultrequest)\>

  ↳ **`FailAtFaultRequest`**

## Table of contents

### Properties

- [id](exports_cluster.FaultInjection.FailAtFaultRequest.md#id)
- [numCallsToFail](exports_cluster.FaultInjection.FailAtFaultRequest.md#numcallstofail)
- [numCallsToSkip](exports_cluster.FaultInjection.FailAtFaultRequest.md#numcallstoskip)
- [takeMutex](exports_cluster.FaultInjection.FailAtFaultRequest.md#takemutex)
- [type](exports_cluster.FaultInjection.FailAtFaultRequest.md#type)

## Properties

### id

• **id**: `number`

#### Inherited from

TypeFromSchema.id

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:24

___

### numCallsToFail

• **numCallsToFail**: `number`

#### Inherited from

TypeFromSchema.numCallsToFail

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:26

___

### numCallsToSkip

• **numCallsToSkip**: `number`

#### Inherited from

TypeFromSchema.numCallsToSkip

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:25

___

### takeMutex

• **takeMutex**: `boolean`

#### Inherited from

TypeFromSchema.takeMutex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:27

___

### type

• **type**: [`FaultType`](../enums/exports_cluster.FaultInjection.FaultType.md)

#### Inherited from

TypeFromSchema.type

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:23
