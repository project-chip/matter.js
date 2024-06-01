[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [FaultInjection](../README.md) / FailAtFaultRequest

# Interface: FailAtFaultRequest

Input to the FaultInjection failAtFault command

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvFailAtFaultRequest`](../README.md#tlvfailatfaultrequest)\>

## Properties

### id

> **id**: `number`

#### Inherited from

`TypeFromSchema.id`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:24

***

### numCallsToFail

> **numCallsToFail**: `number`

#### Inherited from

`TypeFromSchema.numCallsToFail`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:26

***

### numCallsToSkip

> **numCallsToSkip**: `number`

#### Inherited from

`TypeFromSchema.numCallsToSkip`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:25

***

### takeMutex

> **takeMutex**: `boolean`

#### Inherited from

`TypeFromSchema.takeMutex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:27

***

### type

> **type**: [`FaultType`](../enumerations/FaultType.md)

#### Inherited from

`TypeFromSchema.type`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:23
