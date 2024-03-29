[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / BrandingInformationStruct

# Interface: BrandingInformationStruct

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).BrandingInformationStruct

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvBrandingInformationStruct`](../modules/cluster_export.ContentLauncher.md#tlvbrandinginformationstruct)\>

  ↳ **`BrandingInformationStruct`**

## Table of contents

### Properties

- [background](cluster_export.ContentLauncher.BrandingInformationStruct.md#background)
- [logo](cluster_export.ContentLauncher.BrandingInformationStruct.md#logo)
- [progressBar](cluster_export.ContentLauncher.BrandingInformationStruct.md#progressbar)
- [providerName](cluster_export.ContentLauncher.BrandingInformationStruct.md#providername)
- [splash](cluster_export.ContentLauncher.BrandingInformationStruct.md#splash)
- [waterMark](cluster_export.ContentLauncher.BrandingInformationStruct.md#watermark)

## Properties

### background

• `Optional` **background**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate background of the Video Player while content launch request is being processed by it.
This background information may also be used by the Video Player when it is in idle state.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.2

#### Inherited from

TypeFromSchema.background

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:169](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L169)

___

### logo

• `Optional` **logo**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
Player is in the idle state and Splash field is not available.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.3

#### Inherited from

TypeFromSchema.logo

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:177](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L177)

___

### progressBar

• `Optional` **progressBar**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the style of progress bar for media playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.4

#### Inherited from

TypeFromSchema.progressBar

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:184](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L184)

___

### providerName

• **providerName**: `string`

This shall indicate name of of the provider for the given content.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.1

#### Inherited from

TypeFromSchema.providerName

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:161](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L161)

___

### splash

• `Optional` **splash**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
populated, the Video Player shall default to logo or the provider name.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.5

#### Inherited from

TypeFromSchema.splash

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:192](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L192)

___

### waterMark

• `Optional` **waterMark**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This shall indicate watermark shown when the media is playing.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6.6

#### Inherited from

TypeFromSchema.waterMark

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:199](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L199)
