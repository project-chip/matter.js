[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / EnableActionWithDurationRequest

# Interface: EnableActionWithDurationRequest

Input to the Actions enableActionWithDuration command

## See

MatterSpecification.v11.Core § 9.14.6.10

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnableActionWithDurationRequest`](../README.md#tlvenableactionwithdurationrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:543](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L543)

***

### duration

> **duration**: `number`

This field shall indicate the requested duration in seconds.

#### See

MatterSpecification.v11.Core § 9.14.6.10.1

#### Inherited from

`TypeFromSchema.duration`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:551](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L551)

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:544](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L544)
