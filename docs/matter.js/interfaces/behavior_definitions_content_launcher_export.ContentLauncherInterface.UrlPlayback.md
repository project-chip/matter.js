[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/content-launcher/export](../modules/behavior_definitions_content_launcher_export.md) / [ContentLauncherInterface](../modules/behavior_definitions_content_launcher_export.ContentLauncherInterface.md) / UrlPlayback

# Interface: UrlPlayback

[behavior/definitions/content-launcher/export](../modules/behavior_definitions_content_launcher_export.md).[ContentLauncherInterface](../modules/behavior_definitions_content_launcher_export.ContentLauncherInterface.md).UrlPlayback

## Table of contents

### Methods

- [launchUrl](behavior_definitions_content_launcher_export.ContentLauncherInterface.UrlPlayback.md#launchurl)

## Methods

### launchUrl

▸ **launchUrl**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `providerName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L53)
