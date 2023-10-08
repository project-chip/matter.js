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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.ContentLauncher.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `urlPlayback`: ``true``  } ? typeof [`UrlPlaybackComponent`](exports_cluster.ContentLauncher.md#urlplaybackcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } ? typeof [`ContentSearchComponent`](exports_cluster.ContentLauncher.md#contentsearchcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } \| { `urlPlayback`: ``true``  } ? typeof [`ContentSearchOrUrlPlaybackComponent`](exports_cluster.ContentLauncher.md#contentsearchorurlplaybackcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1539

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `features`: { `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>

These elements and properties are present in all ContentLauncher clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1003

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: { `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ContentLauncher"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `features`: { `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ContentLauncher.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1469

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptHeader`: [`Attribute`](exports_cluster.md#attribute)<`string`[], `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: { `launchContent`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `launchUrl`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: { `contentSearch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1290`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>

This cluster supports all ContentLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1556

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `launchContent`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1369

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{}\>

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1457

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

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:16

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:815

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:134

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:872

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:55

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ContentLauncher launchContent command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:919

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ContentLauncher launchUrl command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:410

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:726

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:834

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:81

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `acceptHeader`: [`Attribute`](exports_cluster.md#attribute)<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: { `launchUrl`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1025
