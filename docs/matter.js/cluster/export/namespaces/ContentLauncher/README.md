[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ContentLauncher

# Namespace: ContentLauncher

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [MetricType](enumerations/MetricType.md)
- [Parameter](enumerations/Parameter.md)
- [Status](enumerations/Status.md)

### Interfaces

- [AdditionalInfoStruct](interfaces/AdditionalInfoStruct.md)
- [BrandingInformationStruct](interfaces/BrandingInformationStruct.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [ContentSearchStruct](interfaces/ContentSearchStruct.md)
- [DimensionStruct](interfaces/DimensionStruct.md)
- [LaunchContentRequest](interfaces/LaunchContentRequest.md)
- [LaunchUrlRequest](interfaces/LaunchUrlRequest.md)
- [LauncherResponse](interfaces/LauncherResponse.md)
- [ParameterStruct](interfaces/ParameterStruct.md)
- [StyleInformationStruct](interfaces/StyleInformationStruct.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all ContentLauncher clusters.

#### Type declaration

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which ContentLauncherCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.contentSearch

> `readonly` **contentSearch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: `1290` = `0x50a`

##### name

> `readonly` **name**: `"ContentLauncher"` = `"ContentLauncher"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:586](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L586)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:635](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L635)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which ContentLauncherCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.contentSearch

> `readonly` **contentSearch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: `1290` = `0x50a`

##### name

> `readonly` **name**: `"ContentLauncher"` = `"ContentLauncher"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:622](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L622)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:676](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L676)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptHeader

> `readonly` **acceptHeader**: [`Attribute`](../../interfaces/Attribute.md)\<`string`[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.supportedStreamingProtocols

> `readonly` **supportedStreamingProtocols**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.launchContent

> `readonly` **launchContent**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.launchUrl

> `readonly` **launchUrl**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.contentSearch

> `readonly` **contentSearch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1290`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"ContentLauncher"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:644](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L644)

***

### ContentSearchComponent

> `const` **ContentSearchComponent**: `object`

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.launchContent

> `readonly` **launchContent**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall launch the specified content with optional search criteria. This command
returns a Launch Response.

###### See

MatterSpecification.v11.Cluster § 6.7.4.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:545](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L545)

***

### ContentSearchOrUrlPlaybackComponent

> `const` **ContentSearchOrUrlPlaybackComponent**: `object`

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:560](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L560)

***

### SupportedStreamingProtocols

> `const` **SupportedStreamingProtocols**: `object`

The value of the ContentLauncher supportedStreamingProtocols attribute

#### See

MatterSpecification.v11.Cluster § 6.7.3.2.1

#### Type declaration

##### dash

> **dash**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Device supports Dynamic Adaptive Streaming over HTTP (DASH)

##### hls

> **hls**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Device supports HTTP Live Streaming (HLS)

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L27)

***

### TlvAdditionalInfoStruct

> `const` **TlvAdditionalInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines additional name=value pairs that can be used for identifying content.

#### See

MatterSpecification.v11.Cluster § 6.7.5.5

#### Type declaration

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the name of external id, ex. "musicbrainz".

###### See

MatterSpecification.v11.Cluster § 6.7.5.5.1

##### value

> **value**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the value for external id, ex. "ST0000000666661".

###### See

MatterSpecification.v11.Cluster § 6.7.5.5.2

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:387](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L387)

***

### TlvBrandingInformationStruct

> `const` **TlvBrandingInformationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6

#### Type declaration

##### background

> **background**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate background of the Video Player while content launch request is being processed by it.
This background information may also be used by the Video Player when it is in idle state.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.2

##### logo

> **logo**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
Player is in the idle state and Splash field is not available.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.3

##### progressBar

> **progressBar**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the style of progress bar for media playback.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.4

##### providerName

> **providerName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate name of of the provider for the given content.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.1

##### splash

> **splash**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
populated, the Video Player shall default to logo or the provider name.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.5

##### waterMark

> **waterMark**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate watermark shown when the media is playing.

###### See

MatterSpecification.v11.Cluster § 6.7.5.6.6

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L154)

***

### TlvContentSearchStruct

> `const` **TlvContentSearchStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines inputs to a search for content for display or playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.2

#### Type declaration

##### parameterList

> **parameterList**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

###### See

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L450)

***

### TlvDimensionStruct

> `const` **TlvDimensionStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

#### See

MatterSpecification.v11.Cluster § 6.7.5.8

#### Type declaration

##### height

> **height**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This indicates the height using the metric defined in Metric

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.2

##### metric

> **metric**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MetricType`](enumerations/MetricType.md)\>

This shall indicate metric used for defining Height/Width.

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.3

##### width

> **width**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This indicates the width using the metric defined in Metric

###### See

MatterSpecification.v11.Cluster § 6.7.5.8.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L70)

***

### TlvLaunchContentRequest

> `const` **TlvLaunchContentRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ContentLauncher launchContent command

#### See

MatterSpecification.v11.Cluster § 6.7.4.1

#### Type declaration

##### autoPlay

> **autoPlay**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

This shall indicate whether to automatically start playing content, where: * TRUE means best match should
start playing automatically. * FALSE means matches should be displayed on screen for user selection.

###### See

MatterSpecification.v11.Cluster § 6.7.4.1.2

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.7.4.1.3

##### search

> **search**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the content to launch.

###### See

MatterSpecification.v11.Cluster § 6.7.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:473](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L473)

***

### TlvLaunchUrlRequest

> `const` **TlvLaunchUrlRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ContentLauncher launchUrl command

#### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Type declaration

##### brandingInformation

> **brandingInformation**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This field, if present, shall indicate the branding information that may be displayed when playing back the
given content.

###### See

MatterSpecification.v11.Cluster § 6.7.4.2.3

##### contentUrl

> **contentUrl**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the URL of content to launch.

###### See

MatterSpecification.v11.Cluster § 6.7.4.2.1

##### displayString

> **displayString**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This field, if present, shall provide a string that may be used to describe the content being accessed at
the given URL.

###### See

MatterSpecification.v11.Cluster § 6.7.4.2.2

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L214)

***

### TlvLauncherResponse

> `const` **TlvLauncherResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

#### See

MatterSpecification.v11.Cluster § 6.7.4.3

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.7.4.3.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the status of the command which resulted in this response.

###### See

MatterSpecification.v11.Cluster § 6.7.4.3.1

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L273)

***

### TlvParameterStruct

> `const` **TlvParameterStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines inputs to a search for content for display or playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3

#### Type declaration

##### externalIdList

> **externalIdList**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

This shall indicate the list of additional external content identifiers.

###### See

MatterSpecification.v11.Cluster § 6.7.5.3.3

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Parameter`](enumerations/Parameter.md)\>

This shall indicate the entity type.

###### See

MatterSpecification.v11.Cluster § 6.7.5.3.1

##### value

> **value**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.

###### See

MatterSpecification.v11.Cluster § 6.7.5.3.2

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:415](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L415)

***

### TlvStyleInformationStruct

> `const` **TlvStyleInformationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

#### See

MatterSpecification.v11.Cluster § 6.7.5.7

#### Type declaration

##### color

> **color**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:

  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent

  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.2

##### imageUrl

> **imageUrl**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.1

##### size

> **size**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This shall indicate the size of the image used for Styling different Video Player sections like Logo,
Watermark etc.

###### See

MatterSpecification.v11.Cluster § 6.7.5.7.3

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L109)

***

### UrlPlaybackComponent

> `const` **UrlPlaybackComponent**: `object`

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptHeader

> `readonly` **acceptHeader**: [`Attribute`](../../interfaces/Attribute.md)\<`string`[], `any`\>

This list provides list of content types supported by the Video Player or Content App in the form of
entries in the HTTP "Accept" request header.

###### See

MatterSpecification.v11.Cluster § 6.7.3.1

##### attributes.supportedStreamingProtocols

> `readonly` **supportedStreamingProtocols**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.7.3.2.1

##### commands

> `readonly` **commands**: `object`

##### commands.launchUrl

> `readonly` **launchUrl**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

###### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:507](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L507)
