[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / LaunchUrlRequest

# Interface: LaunchUrlRequest

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).LaunchUrlRequest

Input to the ContentLauncher launchUrl command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLaunchUrlRequest`](../modules/exports_cluster.ContentLauncher.md#tlvlaunchurlrequest)\>

  ↳ **`LaunchUrlRequest`**

## Table of contents

### Properties

- [brandingInformation](exports_cluster.ContentLauncher.LaunchUrlRequest.md#brandinginformation)
- [contentUrl](exports_cluster.ContentLauncher.LaunchUrlRequest.md#contenturl)
- [displayString](exports_cluster.ContentLauncher.LaunchUrlRequest.md#displaystring)

## Properties

### brandingInformation

• `Optional` **brandingInformation**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `height`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](exports_tlv.FieldType.md)\<[`MetricType`](../enums/exports_cluster.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>

This field, if present, shall indicate the branding information that may be displayed when playing back the
given content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2.3

#### Inherited from

TypeFromSchema.brandingInformation

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:458

___

### contentUrl

• **contentUrl**: `string`

This shall indicate the URL of content to launch.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2.1

#### Inherited from

TypeFromSchema.contentUrl

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:444

___

### displayString

• `Optional` **displayString**: `string`

This field, if present, shall provide a string that may be used to describe the content being accessed at
the given URL.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2.2

#### Inherited from

TypeFromSchema.displayString

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:451
