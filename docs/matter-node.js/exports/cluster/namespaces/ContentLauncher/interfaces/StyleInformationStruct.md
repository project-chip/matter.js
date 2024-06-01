[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / StyleInformationStruct

# Interface: StyleInformationStruct

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

## See

MatterSpecification.v11.Cluster § 6.7.5.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStyleInformationStruct`](../README.md#tlvstyleinformationstruct)\>

## Properties

### color?

> `optional` **color**: `string`

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

#### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

#### Inherited from

`TypeFromSchema.color`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:112

***

### imageUrl?

> `optional` **imageUrl**: `string`

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

#### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

#### Inherited from

`TypeFromSchema.imageUrl`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:100

***

### size?

> `optional` **size**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

#### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Type declaration

##### height

> **height**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<`number`\>

This indicates the height using the metric defined in Metric

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.2

##### metric

> **metric**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<[`MetricType`](../enumerations/MetricType.md)\>

This shall indicate metric used for defining Height/Width.

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.3

##### width

> **width**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<`number`\>

This indicates the width using the metric defined in Metric

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Inherited from

`TypeFromSchema.size`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:119
