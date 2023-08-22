[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ContentLauncher

# Namespace: ContentLauncher

[exports/cluster](exports_cluster.md).ContentLauncher

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ContentLauncher.Feature.md)
- [MetricType](../enums/exports_cluster.ContentLauncher.MetricType.md)
- [Parameter](../enums/exports_cluster.ContentLauncher.Parameter.md)
- [Status](../enums/exports_cluster.ContentLauncher.Status.md)

### Type Aliases

- [Extension](exports_cluster.ContentLauncher.md#extension)

### Variables

- [Base](exports_cluster.ContentLauncher.md#base)
- [Cluster](exports_cluster.ContentLauncher.md#cluster)
- [Complete](exports_cluster.ContentLauncher.md#complete)
- [ContentSearchComponent](exports_cluster.ContentLauncher.md#contentsearchcomponent)
- [ContentSearchOrUrlPlaybackComponent](exports_cluster.ContentLauncher.md#contentsearchorurlplaybackcomponent)
- [SupportedStreamingProtocols](exports_cluster.ContentLauncher.md#supportedstreamingprotocols)
- [TlvAdditionalInfoStruct](exports_cluster.ContentLauncher.md#tlvadditionalinfostruct)
- [TlvBrandingInformationStruct](exports_cluster.ContentLauncher.md#tlvbrandinginformationstruct)
- [TlvContentSearchStruct](exports_cluster.ContentLauncher.md#tlvcontentsearchstruct)
- [TlvDimensionStruct](exports_cluster.ContentLauncher.md#tlvdimensionstruct)
- [TlvLaunchContentRequest](exports_cluster.ContentLauncher.md#tlvlaunchcontentrequest)
- [TlvLaunchUrlRequest](exports_cluster.ContentLauncher.md#tlvlaunchurlrequest)
- [TlvLauncherResponse](exports_cluster.ContentLauncher.md#tlvlauncherresponse)
- [TlvParameterStruct](exports_cluster.ContentLauncher.md#tlvparameterstruct)
- [TlvStyleInformationStruct](exports_cluster.ContentLauncher.md#tlvstyleinformationstruct)
- [UrlPlaybackComponent](exports_cluster.ContentLauncher.md#urlplaybackcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.ContentLauncher.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `urlPlayback`: ``true``  } ? typeof [`UrlPlaybackComponent`](exports_cluster.ContentLauncher.md#urlplaybackcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } ? typeof [`ContentSearchComponent`](exports_cluster.ContentLauncher.md#contentsearchcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } \| { `urlPlayback`: ``true``  } ? typeof [`ContentSearchOrUrlPlaybackComponent`](exports_cluster.ContentLauncher.md#contentsearchorurlplaybackcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1511

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all ContentLauncher clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1002

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ContentLauncher.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1458

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `launchContent`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `launchUrl`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }, {}\>

This cluster supports all ContentLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1528

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `launchContent`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1360

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1446

___

### SupportedStreamingProtocols

• `Const` **SupportedStreamingProtocols**: `Object`

The value of the ContentLauncher supportedStreamingProtocols attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.3.2.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dash` | [`BitFlag`](exports_schema.md#bitflag-1) | Device supports Dynamic Adaptive Streaming over HTTP (DASH) |
| `hls` | [`BitFlag`](exports_schema.md#bitflag-1) | Device supports HTTP Live Streaming (HLS) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:15

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:814

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:133

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:871

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:54

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ContentLauncher launchContent command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:918

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ContentLauncher launchUrl command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:409

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:725

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:833

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:80

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `acceptHeader`: [`Attribute`](exports_cluster.md#attribute)<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `dash`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hls`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, { `launchUrl`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:1019
