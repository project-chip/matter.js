[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/groups/export](../modules/behavior_definitions_groups_export.md) / [GroupsBehavior](../modules/behavior_definitions_groups_export.GroupsBehavior.md) / State

# Interface: State

[behavior/definitions/groups/export](../modules/behavior_definitions_groups_export.md).[GroupsBehavior](../modules/behavior_definitions_groups_export.GroupsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_groups_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [nameSupport](behavior_definitions_groups_export.GroupsBehavior.State.md#namesupport)

## Properties

### nameSupport

• **nameSupport**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This attribute provides legacy, read-only access to whether the Group Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

**`See`**

MatterSpecification.v11.Cluster § 1.3.6.1

#### Inherited from

StateType.nameSupport

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:269](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L269)
