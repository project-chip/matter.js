[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/fixed-label/export](../modules/behavior_definitions_fixed_label_export.md) / [FixedLabelBehavior](../modules/behavior_definitions_fixed_label_export.FixedLabelBehavior.md) / State

# Interface: State

[behavior/definitions/fixed-label/export](../modules/behavior_definitions_fixed_label_export.md).[FixedLabelBehavior](../modules/behavior_definitions_fixed_label_export.FixedLabelBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_fixed_label_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [labelList](behavior_definitions_fixed_label_export.FixedLabelBehavior.State.md#labellist)

## Properties

### labelList

• **labelList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]

**`See`**

MatterSpecification.v11.Core § 9.8.4

#### Inherited from

StateType.labelList

#### Defined in

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:29](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L29)
