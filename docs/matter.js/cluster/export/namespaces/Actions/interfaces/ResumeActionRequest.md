[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / ResumeActionRequest

# Interface: ResumeActionRequest

Input to the Actions resumeAction command

## See

MatterSpecification.v11.Core § 9.14.6.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvResumeActionRequest`](../README.md#tlvresumeactionrequest)\>

## Properties

### actionId

> **actionId**: `number`

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:509](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L509)

***

### invokeId?

> `optional` **invokeId**: `number`

#### Inherited from

`TypeFromSchema.invokeId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:510](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L510)
