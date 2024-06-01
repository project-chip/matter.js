[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [FaultInjection](../README.md) / FailAtFaultRequest

# Interface: FailAtFaultRequest

Input to the FaultInjection failAtFault command

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvFailAtFaultRequest`](../README.md#tlvfailatfaultrequest)\>

## Properties

### id

> **id**: `number`

#### Inherited from

`TypeFromSchema.id`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L32)

***

### numCallsToFail

> **numCallsToFail**: `number`

#### Inherited from

`TypeFromSchema.numCallsToFail`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L34)

***

### numCallsToSkip

> **numCallsToSkip**: `number`

#### Inherited from

`TypeFromSchema.numCallsToSkip`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L33)

***

### takeMutex

> **takeMutex**: `boolean`

#### Inherited from

`TypeFromSchema.takeMutex`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L35)

***

### type

> **type**: [`FaultType`](../enumerations/FaultType.md)

#### Inherited from

`TypeFromSchema.type`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L31)
