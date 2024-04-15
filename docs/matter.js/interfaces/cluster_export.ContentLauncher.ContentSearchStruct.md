[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / ContentSearchStruct

# Interface: ContentSearchStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).ContentSearchStruct

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvContentSearchStruct`](../modules/cluster_export.ContentLauncher.md#tlvcontentsearchstruct)\>

  ↳ **`ContentSearchStruct`**

## Table of contents

### Properties

- [parameterList](cluster_export.ContentLauncher.ContentSearchStruct.md#parameterlist)

## Properties

### parameterList

• **parameterList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[]

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Inherited from

TypeFromSchema.parameterList

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:458](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L458)
