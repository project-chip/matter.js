[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / ParameterStruct

# Interface: ParameterStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).ParameterStruct

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvParameterStruct`](../modules/exports_cluster.ContentLauncher.md#tlvparameterstruct)\>

  ↳ **`ParameterStruct`**

## Table of contents

### Properties

- [externalIdList](exports_cluster.ContentLauncher.ParameterStruct.md#externalidlist)
- [type](exports_cluster.ContentLauncher.ParameterStruct.md#type)
- [value](exports_cluster.ContentLauncher.ParameterStruct.md#value)

## Properties

### externalIdList

• `Optional` **externalIdList**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[]

This shall indicate the list of additional external content identifiers.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.3

#### Inherited from

TypeFromSchema.externalIdList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:903

___

### type

• **type**: [`Parameter`](../enums/exports_cluster.ContentLauncher.Parameter.md)

This shall indicate the entity type.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.1

#### Inherited from

TypeFromSchema.type

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:891

___

### value

• **value**: `string`

This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3.2

#### Inherited from

TypeFromSchema.value

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:897
