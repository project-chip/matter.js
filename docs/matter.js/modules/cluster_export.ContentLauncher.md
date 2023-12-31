[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ContentLauncher

# Namespace: ContentLauncher

[cluster/export](cluster_export.md).ContentLauncher

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ContentLauncher.Feature.md)
- [MetricType](../enums/cluster_export.ContentLauncher.MetricType.md)
- [Parameter](../enums/cluster_export.ContentLauncher.Parameter.md)
- [Status](../enums/cluster_export.ContentLauncher.Status.md)

### Type Aliases

- [Extension](cluster_export.ContentLauncher.md#extension)

### Variables

- [Base](cluster_export.ContentLauncher.md#base)
- [Cluster](cluster_export.ContentLauncher.md#cluster)
- [Complete](cluster_export.ContentLauncher.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.ContentLauncher.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `urlPlayback`: ``true``  } ? typeof [`UrlPlaybackComponent`](cluster_export.ContentLauncher.md#urlplaybackcomponent) : {} & `SF` extends \{ `contentSearch`: ``true``  } ? typeof [`ContentSearchComponent`](cluster_export.ContentLauncher.md#contentsearchcomponent) : {} & `SF` extends \{ `contentSearch`: ``true``  } \| \{ `urlPlayback`: ``true``  } ? typeof [`ContentSearchOrUrlPlaybackComponent`](cluster_export.ContentLauncher.md#contentsearchorurlplaybackcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:578](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L578)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all ContentLauncher clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:456](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L456)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<{}, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``1290`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"ContentLauncher"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ContentLauncher.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:547](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L547)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.md#attribute)\<`string`[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag-1) ; `hls`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `launchContent`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `contentSearch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `launchUrl`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `urlPlayback`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1290`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"ContentLauncher"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all ContentLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:594](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L594)

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `launchContent`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  }\>

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:519](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L519)

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<{}\>

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:534](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L534)

___

### SupportedStreamingProtocols

• `Const` **SupportedStreamingProtocols**: `Object`

The value of the ContentLauncher supportedStreamingProtocols attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.3.2.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dash` | [`BitFlag`](schema_export.md#bitflag-1) | Device supports Dynamic Adaptive Streaming over HTTP (DASH) |
| `hls` | [`BitFlag`](schema_export.md#bitflag-1) | Device supports HTTP Live Streaming (HLS) |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:25](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L25)

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:343](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L343)

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:134](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L134)

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:392](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L392)

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:68](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L68)

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\>  }\>\>  }\>

Input to the ContentLauncher launchContent command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:408](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L408)

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

Input to the ContentLauncher launchUrl command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:186](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L186)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:238](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L238)

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:364](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L364)

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:97](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L97)

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.md#attribute)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `dash`: [`BitFlag`](schema_export.md#bitflag-1) ; `hls`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  }\>

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:481](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L481)
