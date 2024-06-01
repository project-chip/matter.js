[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ContentLauncher

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

> `readonly` **contentSearch**: [`BitFlag`](../../../schema/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../schema/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: `1290`

##### name

> `readonly` **name**: `"ContentLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1511

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2461

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

> `readonly` **contentSearch**: [`BitFlag`](../../../schema/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../schema/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: `1290`

##### name

> `readonly` **name**: `"ContentLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1982

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2915

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

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.supportedStreamingProtocols

> `readonly` **supportedStreamingProtocols**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.launchContent

> `readonly` **launchContent**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.launchUrl

> `readonly` **launchUrl**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.contentSearch

> `readonly` **contentSearch**: [`BitFlag`](../../../schema/README.md#bitflag)

ContentSearch

Device supports content search (non-app specific)

##### features.urlPlayback

> `readonly` **urlPlayback**: [`BitFlag`](../../../schema/README.md#bitflag)

UrlPlayback

Device supports basic URL-based file playback

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"ContentLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2467

***

### ContentSearchComponent

> `const` **ContentSearchComponent**: `object`

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.launchContent

> `readonly` **launchContent**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall launch the specified content with optional search criteria. This command
returns a Launch Response.

###### See

MatterSpecification.v11.Cluster § 6.7.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1400

***

### ContentSearchOrUrlPlaybackComponent

> `const` **ContentSearchOrUrlPlaybackComponent**: `object`

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1488

***

### SupportedStreamingProtocols

> `const` **SupportedStreamingProtocols**: `object`

The value of the ContentLauncher supportedStreamingProtocols attribute

#### See

MatterSpecification.v11.Cluster § 6.7.3.2.1

#### Type declaration

##### dash

> **dash**: [`BitFlag`](../../../schema/README.md#bitflag)

Device supports Dynamic Adaptive Streaming over HTTP (DASH)

##### hls

> **hls**: [`BitFlag`](../../../schema/README.md#bitflag)

Device supports HTTP Live Streaming (HLS)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:18

***

### TlvAdditionalInfoStruct

> `const` **TlvAdditionalInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines additional name=value pairs that can be used for identifying content.

#### See

MatterSpecification.v11.Cluster § 6.7.5.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:859

***

### TlvBrandingInformationStruct

> `const` **TlvBrandingInformationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:154

***

### TlvContentSearchStruct

> `const` **TlvContentSearchStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines inputs to a search for content for display or playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:930

***

### TlvDimensionStruct

> `const` **TlvDimensionStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

#### See

MatterSpecification.v11.Cluster § 6.7.5.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:57

***

### TlvLaunchContentRequest

> `const` **TlvLaunchContentRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ContentLauncher launchContent command

#### See

MatterSpecification.v11.Cluster § 6.7.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:984

***

### TlvLaunchUrlRequest

> `const` **TlvLaunchUrlRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ContentLauncher launchUrl command

#### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:438

***

### TlvLauncherResponse

> `const` **TlvLauncherResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

#### See

MatterSpecification.v11.Cluster § 6.7.4.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:761

***

### TlvParameterStruct

> `const` **TlvParameterStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines inputs to a search for content for display or playback.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:885

***

### TlvStyleInformationStruct

> `const` **TlvStyleInformationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

#### See

MatterSpecification.v11.Cluster § 6.7.5.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:93

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

> `readonly` **supportedStreamingProtocols**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

###### See

MatterSpecification.v11.Cluster § 6.7.3.2.1

##### commands

> `readonly` **commands**: `object`

##### commands.launchUrl

> `readonly` **launchUrl**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

###### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1056
