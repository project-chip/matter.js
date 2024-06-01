[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/content-launcher/export](../../../README.md) / [ContentLauncherInterface](../README.md) / UrlPlayback

# Interface: UrlPlayback

## Methods

### launchUrl()

> **launchUrl**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L53)
