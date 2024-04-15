[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ContentLauncher

# Namespace: ContentLauncher

[exports/cluster](exports_cluster.md).ContentLauncher

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ContentLauncher.Feature.md)
- [MetricType](../enums/exports_cluster.ContentLauncher.MetricType.md)
- [Parameter](../enums/exports_cluster.ContentLauncher.Parameter.md)
- [Status](../enums/exports_cluster.ContentLauncher.Status.md)

### Interfaces

- [AdditionalInfoStruct](../interfaces/exports_cluster.ContentLauncher.AdditionalInfoStruct.md)
- [BrandingInformationStruct](../interfaces/exports_cluster.ContentLauncher.BrandingInformationStruct.md)
- [Cluster](../interfaces/exports_cluster.ContentLauncher.Cluster.md)
- [Complete](../interfaces/exports_cluster.ContentLauncher.Complete.md)
- [ContentSearchStruct](../interfaces/exports_cluster.ContentLauncher.ContentSearchStruct.md)
- [DimensionStruct](../interfaces/exports_cluster.ContentLauncher.DimensionStruct.md)
- [LaunchContentRequest](../interfaces/exports_cluster.ContentLauncher.LaunchContentRequest.md)
- [LaunchUrlRequest](../interfaces/exports_cluster.ContentLauncher.LaunchUrlRequest.md)
- [LauncherResponse](../interfaces/exports_cluster.ContentLauncher.LauncherResponse.md)
- [ParameterStruct](../interfaces/exports_cluster.ContentLauncher.ParameterStruct.md)
- [StyleInformationStruct](../interfaces/exports_cluster.ContentLauncher.StyleInformationStruct.md)

### Variables

- [Base](exports_cluster.ContentLauncher.md#base)
- [Cluster](exports_cluster.ContentLauncher.md#cluster)
- [ClusterInstance](exports_cluster.ContentLauncher.md#clusterinstance)
- [Complete](exports_cluster.ContentLauncher.md#complete)
- [CompleteInstance](exports_cluster.ContentLauncher.md#completeinstance)
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

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ContentLauncher clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] | This metadata controls which ContentLauncherCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.contentSearch` | [`BitFlag`](exports_schema.md#bitflag) | ContentSearch Device supports content search (non-app specific) |
| `features.urlPlayback` | [`BitFlag`](exports_schema.md#bitflag) | UrlPlayback Device supports basic URL-based file playback |
| `id` | ``1290`` | - |
| `name` | ``"ContentLauncher"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1511

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ContentLauncher.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2461

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2463

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ContentLauncher.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1982

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.ContentLauncher.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2915

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2917

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`string`[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `launchContent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `contentSearch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `launchUrl`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `contentSearch`: [`BitFlag`](exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.ContentLauncher.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:2467

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `launchContent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.launchContent` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1400

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1488

___

### SupportedStreamingProtocols

• `Const` **SupportedStreamingProtocols**: `Object`

The value of the ContentLauncher supportedStreamingProtocols attribute

**`See`**

MatterSpecification.v11.Cluster § 6.7.3.2.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dash` | [`BitFlag`](exports_schema.md#bitflag) | Device supports Dynamic Adaptive Streaming over HTTP (DASH) |
| `hls` | [`BitFlag`](exports_schema.md#bitflag) | Device supports HTTP Live Streaming (HLS) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:18

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:859

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:154

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:930

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:57

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ContentLauncher launchContent command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:984

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ContentLauncher launchUrl command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:438

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:761

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:885

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:93

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `acceptHeader`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.acceptHeader` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`string`[], `any`\> |
| `attributes.supportedStreamingProtocols` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `commands` | \{ `launchUrl`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.launchUrl` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1056
