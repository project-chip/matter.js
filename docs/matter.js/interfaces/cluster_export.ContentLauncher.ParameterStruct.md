[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / ParameterStruct

# Interface: ParameterStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).ParameterStruct

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvParameterStruct`](../modules/cluster_export.ContentLauncher.md#tlvparameterstruct)\>

  ↳ **`ParameterStruct`**

## Table of contents

### Properties

- [externalIdList](cluster_export.ContentLauncher.ParameterStruct.md#externalidlist)
- [type](cluster_export.ContentLauncher.ParameterStruct.md#type)
- [value](cluster_export.ContentLauncher.ParameterStruct.md#value)

## Properties

### externalIdList

• `Optional` **externalIdList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]

This shall indicate the list of additional external content identifiers.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.3

#### Inherited from

TypeFromSchema.externalIdList

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:435](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L435)

___

### type

• **type**: [`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)

This shall indicate the entity type.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.1

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L421)

___

### value

• **value**: `string`

This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.2

#### Inherited from

TypeFromSchema.value

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:428](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L428)
