[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / AdditionalInfoStruct

# Interface: AdditionalInfoStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).AdditionalInfoStruct

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAdditionalInfoStruct`](../modules/exports_cluster.ContentLauncher.md#tlvadditionalinfostruct)\>

  ↳ **`AdditionalInfoStruct`**

## Table of contents

### Properties

- [name](exports_cluster.ContentLauncher.AdditionalInfoStruct.md#name)
- [value](exports_cluster.ContentLauncher.AdditionalInfoStruct.md#value)

## Properties

### name

• **name**: `string`

This shall indicate the name of external id, ex. "musicbrainz".

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5.1

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:865

___

### value

• **value**: `string`

This shall indicate the value for external id, ex. "ST0000000666661".

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5.2

#### Inherited from

TypeFromSchema.value

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:871
