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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.ContentLauncher.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `urlPlayback`: ``true``  } ? typeof [`UrlPlaybackComponent`](cluster_export.ContentLauncher.md#urlplaybackcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } ? typeof [`ContentSearchComponent`](cluster_export.ContentLauncher.md#contentsearchcomponent) : {} & `SF` extends { `contentSearch`: ``true``  } \| { `urlPlayback`: ``true``  } ? typeof [`ContentSearchOrUrlPlaybackComponent`](cluster_export.ContentLauncher.md#contentsearchorurlplaybackcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:576](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L576)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all ContentLauncher clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:464](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L464)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ContentLauncher.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:555](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L555)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptHeader`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`string`[], `any`\>\> ; `supportedStreamingProtocols`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `dash`: [`BitFlag`](schema_export.md#bitflag-1) ; `hls`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `contentSearch`: [`BitFlag`](schema_export.md#bitflag-1) ; `urlPlayback`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `launchContent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>\> ; `launchUrl`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>\>  }, {}\>

This cluster supports all ContentLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:592](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L592)

___

### ContentSearchComponent

• `Const` **ContentSearchComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `launchContent`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ContentLauncherCluster supports these elements if it supports feature ContentSearch.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:527](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L527)

___

### ContentSearchOrUrlPlaybackComponent

• `Const` **ContentSearchOrUrlPlaybackComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:542](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L542)

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

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L33)

___

### TlvAdditionalInfoStruct

• `Const` **TlvAdditionalInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

This object defines additional name=value pairs that can be used for identifying content.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:351](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L351)

___

### TlvBrandingInformationStruct

• `Const` **TlvBrandingInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\>  }\>

This object defines Branding Information which can be provided by the client in order to customize the skin of
the Video Player during playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L142)

___

### TlvContentSearchStruct

• `Const` **TlvContentSearchStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:400](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L400)

___

### TlvDimensionStruct

• `Const` **TlvDimensionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This object defines dimension which can be used for defining Size of background images.

TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
because we don’t have any other usecases which require this datatype.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:76](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L76)

___

### TlvLaunchContentRequest

• `Const` **TlvLaunchContentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `autoPlay`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `search`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `parameterList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\>  }\>\>  }\>

Input to the ContentLauncher launchContent command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:416](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L416)

___

### TlvLaunchUrlRequest

• `Const` **TlvLaunchUrlRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

Input to the ContentLauncher launchUrl command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L194)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:246](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L246)

___

### TlvParameterStruct

• `Const` **TlvParameterStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `externalIdList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[]\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Parameter`](../enums/cluster_export.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

This object defines inputs to a search for content for display or playback.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:372](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L372)

___

### TlvStyleInformationStruct

• `Const` **TlvStyleInformationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

This object defines style information which can be used by content providers to change the Media Player’s style
related properties.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L105)

___

### UrlPlaybackComponent

• `Const` **UrlPlaybackComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `acceptHeader`: [`Attribute`](cluster_export.md#attribute)<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `dash`: [`BitFlag`](schema_export.md#bitflag-1) ; `hls`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, { `launchUrl`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `brandingInformation`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `background`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `logo`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `progressBar`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `providerName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `splash`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\> ; `waterMark`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `color`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `imageUrl`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `size`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `height`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `metric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MetricType`](../enums/cluster_export.ContentLauncher.MetricType.md)\> ; `width`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>\>  }\>\> ; `contentUrl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `displayString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:489](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L489)
