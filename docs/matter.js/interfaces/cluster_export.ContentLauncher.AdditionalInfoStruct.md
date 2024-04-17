[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / AdditionalInfoStruct

# Interface: AdditionalInfoStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).AdditionalInfoStruct

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAdditionalInfoStruct`](../modules/cluster_export.ContentLauncher.md#tlvadditionalinfostruct)\>

  ↳ **`AdditionalInfoStruct`**

## Table of contents

### Properties

- [name](cluster_export.ContentLauncher.AdditionalInfoStruct.md#name)
- [value](cluster_export.ContentLauncher.AdditionalInfoStruct.md#value)

## Properties

### name

• **name**: `string`

This shall indicate the name of external id, ex. "musicbrainz".

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5.1

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:393](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L393)

___

### value

• **value**: `string`

This shall indicate the value for external id, ex. "ST0000000666661".

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5.2

#### Inherited from

TypeFromSchema.value

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:400](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L400)
