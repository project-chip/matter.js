[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/user-label/export](../../../README.md) / [UserLabelBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### labelList

> **labelList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

An implementation shall support at least 4 list entries per node for all User Label cluster instances on
the node.

#### See

MatterSpecification.v11.Core § 9.9.4.1

#### Inherited from

`StateType.labelList`

#### Source

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L32)
