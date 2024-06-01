[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [FaultInjection](../README.md) / FailRandomlyAtFaultRequest

# Interface: FailRandomlyAtFaultRequest

Input to the FaultInjection failRandomlyAtFault command

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvFailRandomlyAtFaultRequest`](../README.md#tlvfailrandomlyatfaultrequest)\>

## Properties

### id

> **id**: `number`

#### Inherited from

`TypeFromSchema.id`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L48)

***

### percentage

> **percentage**: `number`

#### Inherited from

`TypeFromSchema.percentage`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L49)

***

### type

> **type**: [`FaultType`](../enumerations/FaultType.md)

#### Inherited from

`TypeFromSchema.type`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L47)
