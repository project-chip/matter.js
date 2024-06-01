[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / BrandingInformationStruct

# Interface: BrandingInformationStruct

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

## See

MatterSpecification.v11.Cluster § 6.7.5.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvBrandingInformationStruct`](../README.md#tlvbrandinginformationstruct)\>

## Properties

### background?

> `optional` **background**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate background of the Video Player while content launch request is being processed by it.
This background information may also be used by the Video Player when it is in idle state.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.2

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

`TypeFromSchema.background`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:167

***

### logo?

> `optional` **logo**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
Player is in the idle state and Splash field is not available.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.3

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

`TypeFromSchema.logo`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:220

***

### progressBar?

> `optional` **progressBar**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate the style of progress bar for media playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.4

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

`TypeFromSchema.progressBar`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:272

***

### providerName

> **providerName**: `string`

This shall indicate name of of the provider for the given content.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.1

#### Inherited from

`TypeFromSchema.providerName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:160

***

### splash?

> `optional` **splash**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
populated, the Video Player shall default to logo or the provider name.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.5

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

`TypeFromSchema.splash`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:325

***

### waterMark?

> `optional` **waterMark**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

This shall indicate watermark shown when the media is playing.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6.6

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Inherited from

`TypeFromSchema.waterMark`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:377
