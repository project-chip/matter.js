[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / BrandingInformationStruct

# Interface: BrandingInformationStruct

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).BrandingInformationStruct

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvBrandingInformationStruct`](../modules/exports_cluster.ContentLauncher.md#tlvbrandinginformationstruct)\>

  ↳ **`BrandingInformationStruct`**

## Table of contents

### Properties

- [background](exports_cluster.ContentLauncher.BrandingInformationStruct.md#background)
- [logo](exports_cluster.ContentLauncher.BrandingInformationStruct.md#logo)
- [progressBar](exports_cluster.ContentLauncher.BrandingInformationStruct.md#progressbar)
- [providerName](exports_cluster.ContentLauncher.BrandingInformationStruct.md#providername)
- [splash](exports_cluster.ContentLauncher.BrandingInformationStruct.md#splash)
- [waterMark](exports_cluster.ContentLauncher.BrandingInformationStruct.md#watermark)

## Properties

### background

• `Optional` **background**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate background of the Video Player while content launch request is being processed by it.
This background information may also be used by the Video Player when it is in idle state.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.2

#### Inherited from

TypeFromSchema.background

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:167

___

### logo

• `Optional` **logo**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
Player is in the idle state and Splash field is not available.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.3

#### Inherited from

TypeFromSchema.logo

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:220

___

### progressBar

• `Optional` **progressBar**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the style of progress bar for media playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.4

#### Inherited from

TypeFromSchema.progressBar

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:272

___

### providerName

• **providerName**: `string`

This shall indicate name of of the provider for the given content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.1

#### Inherited from

TypeFromSchema.providerName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:160

___

### splash

• `Optional` **splash**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
populated, the Video Player shall default to logo or the provider name.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.5

#### Inherited from

TypeFromSchema.splash

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:325

___

### waterMark

• `Optional` **waterMark**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate watermark shown when the media is playing.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6.6

#### Inherited from

TypeFromSchema.waterMark

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:377
