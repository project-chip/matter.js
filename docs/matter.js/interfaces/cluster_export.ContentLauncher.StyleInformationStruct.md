[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / StyleInformationStruct

# Interface: StyleInformationStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).StyleInformationStruct

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStyleInformationStruct`](../modules/cluster_export.ContentLauncher.md#tlvstyleinformationstruct)\>

  ↳ **`StyleInformationStruct`**

## Table of contents

### Properties

- [color](cluster_export.ContentLauncher.StyleInformationStruct.md#color)
- [imageUrl](cluster_export.ContentLauncher.StyleInformationStruct.md#imageurl)
- [size](cluster_export.ContentLauncher.StyleInformationStruct.md#size)

## Properties

### color

• `Optional` **color**: `string`

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7.2

#### Inherited from

TypeFromSchema.color

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L129)

___

### imageUrl

• `Optional` **imageUrl**: `string`

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7.1

#### Inherited from

TypeFromSchema.imageUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L116)

___

### size

• `Optional` **size**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

TypeFromSchema.size

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L137)
