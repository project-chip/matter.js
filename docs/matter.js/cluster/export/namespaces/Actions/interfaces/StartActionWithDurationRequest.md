[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / StartActionWithDurationRequest

# Interface: StartActionWithDurationRequest

Input to the Actions startActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStartActionWithDurationRequest`](../README.md#tlvstartactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:427](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L427)

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.4.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:435](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L435)

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:428](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L428)
