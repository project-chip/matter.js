[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ContentLauncher

# Namespace: ContentLauncher

[cluster/export](cluster_export.md).ContentLauncher

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ContentLauncher.Feature.md)
- [MetricType](../enums/cluster_export.ContentLauncher.MetricType.md)
- [Parameter](../enums/cluster_export.ContentLauncher.Parameter.md)
- [Status](../enums/cluster_export.ContentLauncher.Status.md)

### Interfaces

- [AdditionalInfoStruct](../interfaces/cluster_export.ContentLauncher.AdditionalInfoStruct.md)
- [BrandingInformationStruct](../interfaces/cluster_export.ContentLauncher.BrandingInformationStruct.md)
- [Cluster](../interfaces/cluster_export.ContentLauncher.Cluster.md)
- [Complete](../interfaces/cluster_export.ContentLauncher.Complete.md)
- [ContentSearchStruct](../interfaces/cluster_export.ContentLauncher.ContentSearchStruct.md)
- [DimensionStruct](../interfaces/cluster_export.ContentLauncher.DimensionStruct.md)
- [LaunchContentRequest](../interfaces/cluster_export.ContentLauncher.LaunchContentRequest.md)
- [LaunchUrlRequest](../interfaces/cluster_export.ContentLauncher.LaunchUrlRequest.md)
- [LauncherResponse](../interfaces/cluster_export.ContentLauncher.LauncherResponse.md)
- [ParameterStruct](../interfaces/cluster_export.ContentLauncher.ParameterStruct.md)
- [StyleInformationStruct](../interfaces/cluster_export.ContentLauncher.StyleInformationStruct.md)

### Variables

- [Base](cluster_export.ContentLauncher.md#base)
- [Cluster](cluster_export.ContentLauncher.md#cluster)
- [ClusterInstance](cluster_export.ContentLauncher.md#clusterinstance)
- [Complete](cluster_export.ContentLauncher.md#complete)
- [CompleteInstance](cluster_export.ContentLauncher.md#completeinstance)
- [ContentSearchComponent](cluster_export.ContentLauncher.md#contentsearchcomponent)
- [ContentSearchOrUrlPlaybackComponent](cluster_export.ContentLauncher.md#contentsearchorurlplaybackcomponent)
- [SupportedStreamingProtocols](cluster_export.ContentLauncher.md#supportedstreamingprotocols)
- [TlvAdditionalInfoStruct](cluster_export.ContentLauncher.md#tlvadditionalinfostruct)
- [TlvBrandingInformationStruct](cluster_export.ContentLauncher.md#tlvbrandinginformationstruct)
- [TlvContentSearchStruct](cluster_export.ContentLauncher.md#tlvcontentsearchstruct)
- [TlvDimensionStruct](cluster_export.ContentLauncher.md#tlvdimensionstruct)
- [TlvLaunchContentRequest](cluster_export.ContentLauncher.md#tlvlaunchcontentrequest)
- [TlvLaunchUrlRequest](cluster_export.ContentLauncher.md#tlvlaunchurlrequest)
- [TlvLauncherResponse](cluster_export.ContentLauncher.md#tlvlauncherresponse)
- [TlvParameterStruct](cluster_export.ContentLauncher.md#tlvparameterstruct)
- [TlvStyleInformationStruct](cluster_export.ContentLauncher.md#tlvstyleinformationstruct)
- [UrlPlaybackComponent](cluster_export.ContentLauncher.md#urlplaybackcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ContentLauncher clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag) ; `hls`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: ... ; `logo`: ... ; `progressBar`: ... ; `providerName`: ... ; `splash`: ... ; `waterMark`: ...  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: ...  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] | This metadata controls which ContentLauncherCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.contentSearch` | [`BitFlag`](schema_export.md#bitflag) | ContentSearch Device supports content search (non-app specific) |
| `features.urlPlayback` | [`BitFlag`](schema_export.md#bitflag) | UrlPlayback Device supports basic URL-based file playback |
| `id` | ``1290`` | - |
| `name` | ``"ContentLauncher"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L586)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ContentLauncher.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:635](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L635)

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:637](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L637)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag) ; `hls`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ContentLauncher.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:622](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L622)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.ContentLauncher.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:676](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L676)

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:678](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L678)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptHeader`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`string`[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag) ; `hls`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `launchContent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `contentSearch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `launchUrl`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1290``, ``"ClusterId"``\> = Cluster.id; `name`: ``"ContentLauncher"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.ContentLauncher.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:644](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L644)

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `launchContent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  } |
| `commands.launchContent` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:545](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L545)

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:560](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L560)

___

### SupportedStreamingProtocols

• `Const` **SupportedStreamingProtocols**: `Object`

The value of the ContentLauncher supportedStreamingProtocols attribute

**`See`**

MatterSpecification.v11.Cluster § 6.7.3.2.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dash` | [`BitFlag`](schema_export.md#bitflag) | Device supports Dynamic Adaptive Streaming over HTTP (DASH) |
| `hls` | [`BitFlag`](schema_export.md#bitflag) | Device supports HTTP Live Streaming (HLS) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L27)

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:387](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L387)

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L154)

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:450](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L450)

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L70)

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>\>  }\>

Input to the ContentLauncher launchContent command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:473](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L473)

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: ... ; `metric`: ... ; `width`: ...  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

Input to the ContentLauncher launchUrl command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L214)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L273)

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:415](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L415)

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L109)

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: `Object`

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `acceptHeader`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag) ; `hls`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.acceptHeader` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`string`[], `any`\> |
| `attributes.supportedStreamingProtocols` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag) ; `hls`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `commands` | \{ `launchUrl`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  } |
| `commands.launchUrl` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: ... ; `imageUrl`: ... ; `size`: ...  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:507](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L507)
