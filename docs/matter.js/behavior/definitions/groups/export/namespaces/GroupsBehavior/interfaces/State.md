[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/groups/export](../../../README.md) / [GroupsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### nameSupport

> **nameSupport**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute provides legacy, read-only access to whether the Group Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

#### See

MatterSpecification.v11.Cluster § 1.3.6.1

#### Type declaration

##### nameSupport

> **nameSupport**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

The ability to store a name for a group.

#### Inherited from

`StateType.nameSupport`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L269)
