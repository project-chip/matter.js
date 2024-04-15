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

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L269)
