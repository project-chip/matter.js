[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MediaPlayback

# Namespace: MediaPlayback

[cluster/export](cluster_export.md).MediaPlayback

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.MediaPlayback.Feature.md)
- [PlaybackState](../enums/cluster_export.MediaPlayback.PlaybackState.md)
- [Status](../enums/cluster_export.MediaPlayback.Status.md)

### Type Aliases

- [Extension](cluster_export.MediaPlayback.md#extension)

### Variables

- [AdvancedSeekComponent](cluster_export.MediaPlayback.md#advancedseekcomponent)
- [Base](cluster_export.MediaPlayback.md#base)
- [Cluster](cluster_export.MediaPlayback.md#cluster)
- [Complete](cluster_export.MediaPlayback.md#complete)
- [TlvPlaybackPositionStruct](cluster_export.MediaPlayback.md#tlvplaybackpositionstruct)
- [TlvPlaybackResponse](cluster_export.MediaPlayback.md#tlvplaybackresponse)
- [TlvSeekRequest](cluster_export.MediaPlayback.md#tlvseekrequest)
- [TlvSkipBackwardRequest](cluster_export.MediaPlayback.md#tlvskipbackwardrequest)
- [TlvSkipForwardRequest](cluster_export.MediaPlayback.md#tlvskipforwardrequest)
- [VariableSpeedComponent](cluster_export.MediaPlayback.md#variablespeedcomponent)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.MediaPlayback.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `advancedSeek`: ``true``  } ? typeof [`AdvancedSeekComponent`](cluster_export.MediaPlayback.md#advancedseekcomponent) : {} & `SF` extends \{ `variableSpeed`: ``true``  } ? typeof [`VariableSpeedComponent`](cluster_export.MediaPlayback.md#variablespeedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:501](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L501)

## Variables

### AdvancedSeekComponent

• `Const` **AdvancedSeekComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `duration`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> ; `playbackSpeed`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> ; `seekRangeEnd`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> ; `seekRangeStart`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> ; `startTime`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `seek`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  }\>

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:312](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L312)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentState`: [`Attribute`](cluster_export.md#attribute)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  } ; `commands`: \{ `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1286`` = 0x506; `name`: ``"MediaPlayback"`` = "MediaPlayback"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all MediaPlayback clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:213](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L213)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentState`: [`Attribute`](cluster_export.md#attribute)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: \{ `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `events`: {} ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``1286`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"MediaPlayback"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentState`: [`Attribute`](cluster_export.md#attribute)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  } ; `commands`: \{ `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1286`` = 0x506; `name`: ``"MediaPlayback"`` = "MediaPlayback"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.MediaPlayback.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Media Playback

This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a
TV, Set-top Box, or Smart Speaker.

MediaPlaybackCluster supports optional features that you can enable with the MediaPlaybackCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:478](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L478)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `currentState`: [`Attribute`](cluster_export.md#attribute)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\> ; `duration`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `playbackSpeed`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `sampledPosition`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seekRangeEnd`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seekRangeStart`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startTime`: [`Attribute`](cluster_export.md#attribute)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `fastForward`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seek`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1286`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"MediaPlayback"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all MediaPlayback features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:515](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L515)

___

### TlvPlaybackPositionStruct

• `Const` **TlvPlaybackPositionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

This structure defines a playback position within a media stream being played.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:147](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L147)

___

### TlvPlaybackResponse

• `Const` **TlvPlaybackResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>

This command shall be generated in response to various Playback Commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.12

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:88](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L88)

___

### TlvSeekRequest

• `Const` **TlvSeekRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback seek command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.11

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:174](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L174)

___

### TlvSkipBackwardRequest

• `Const` **TlvSkipBackwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipBackward command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.10

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:128](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L128)

___

### TlvSkipForwardRequest

• `Const` **TlvSkipForwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipForward command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.9

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:109](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L109)

___

### VariableSpeedComponent

• `Const` **VariableSpeedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `fastForward`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](cluster_export.md#command)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  }\>

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:427](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L427)
