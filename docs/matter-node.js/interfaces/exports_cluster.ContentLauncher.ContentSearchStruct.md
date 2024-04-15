[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / ContentSearchStruct

# Interface: ContentSearchStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).ContentSearchStruct

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvContentSearchStruct`](../modules/exports_cluster.ContentLauncher.md#tlvcontentsearchstruct)\>

  ↳ **`ContentSearchStruct`**

## Table of contents

### Properties

- [parameterList](exports_cluster.ContentLauncher.ContentSearchStruct.md#parameterlist)

## Properties

### parameterList

• **parameterList**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`Parameter`](../enums/exports_cluster.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[]

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Inherited from

TypeFromSchema.parameterList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:938
