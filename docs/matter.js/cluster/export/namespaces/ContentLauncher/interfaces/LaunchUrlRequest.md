[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / LaunchUrlRequest

# Interface: LaunchUrlRequest

Input to the ContentLauncher launchUrl command

## See

MatterSpecification.v11.Cluster § 6.7.4.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLaunchUrlRequest`](../README.md#tlvlaunchurlrequest)\>

## Properties

### brandingInformation?

> `optional` **brandingInformation**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This field, if present, shall indicate the branding information that may be displayed when playing back the
given content.

#### See

MatterSpecification.v11.Cluster § 6.7.4.2.3

#### Type declaration

##### background

> **background**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate background of the Video Player while content launch request is being processed by it.
This background information may also be used by the Video Player when it is in idle state.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.2

##### logo

> **logo**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
Player is in the idle state and Splash field is not available.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.3

##### progressBar

> **progressBar**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the style of progress bar for media playback.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.4

##### providerName

> **providerName**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate name of of the provider for the given content.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.1

##### splash

> **splash**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
populated, the Video Player shall default to logo or the provider name.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.5

##### waterMark

> **waterMark**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate watermark shown when the media is playing.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.6

#### Inherited from

`TypeFromSchema.brandingInformation`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L236)

***

### contentUrl

> **contentUrl**: `string`

This shall indicate the URL of content to launch.

#### See

MatterSpecification.v11.Cluster § 6.7.4.2.1

#### Inherited from

`TypeFromSchema.contentUrl`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L220)

***

### displayString?

> `optional` **displayString**: `string`

This field, if present, shall provide a string that may be used to describe the content being accessed at
the given URL.

#### See

MatterSpecification.v11.Cluster § 6.7.4.2.2

#### Inherited from

`TypeFromSchema.displayString`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L228)
