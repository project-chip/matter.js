[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / StyleInformationStruct

# Interface: StyleInformationStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).StyleInformationStruct

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStyleInformationStruct`](../modules/exports_cluster.ContentLauncher.md#tlvstyleinformationstruct)\>

  ↳ **`StyleInformationStruct`**

## Table of contents

### Properties

- [color](exports_cluster.ContentLauncher.StyleInformationStruct.md#color)
- [imageUrl](exports_cluster.ContentLauncher.StyleInformationStruct.md#imageurl)
- [size](exports_cluster.ContentLauncher.StyleInformationStruct.md#size)

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

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:112

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

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:100

___

### size

• `Optional` **size**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

TypeFromSchema.size

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:119
