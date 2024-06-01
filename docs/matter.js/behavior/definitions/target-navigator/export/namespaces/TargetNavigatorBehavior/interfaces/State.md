[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/target-navigator/export](../../../README.md) / [TargetNavigatorBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentTarget?

> `optional` **currentTarget**: `null` \| `number`

The CurrentTarget attribute shall represent the Identifier for the target which is currently in
foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
target is in the foreground.

When not null, the CurrentTarget shall be an Identifier value contained within one of the
TargetInfoStruct objects in the TargetList attribute list.

#### See

MatterSpecification.v11.Cluster § 6.11.3.2

#### Inherited from

`StateType.currentTarget`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L154)

***

### targetList

> **targetList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The TargetList attribute shall represent a list of targets that can be navigated to within the
experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
contain any entries with the same Identifier in the TargetInfoStruct object.

#### See

MatterSpecification.v11.Cluster § 6.11.3.1

#### Inherited from

`StateType.targetList`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L142)
