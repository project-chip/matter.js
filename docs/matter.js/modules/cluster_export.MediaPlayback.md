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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.MediaPlayback.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `advancedSeek`: ``true``  } ? typeof [`AdvancedSeekComponent`](cluster_export.MediaPlayback.md#advancedseekcomponent) : {} & `SF` extends { `variableSpeed`: ``true``  } ? typeof [`VariableSpeedComponent`](cluster_export.MediaPlayback.md#variablespeedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:506](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L506)

## Variables

### AdvancedSeekComponent

• `Const` **AdvancedSeekComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `duration`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> ; `playbackSpeed`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `sampledPosition`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `any`\> ; `seekRangeEnd`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> ; `seekRangeStart`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> ; `startTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  }, { `seek`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:320](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L320)

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentState`: [`Attribute`](cluster_export.md#attribute)<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  }, { `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all MediaPlayback clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:221](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L221)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentState`: [`Attribute`](cluster_export.md#attribute)<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.MediaPlayback.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Media Playback

This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a
TV, Set-top Box, or Smart Speaker.

MediaPlaybackCluster supports optional features that you can enable with the MediaPlaybackCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:486](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L486)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentState`: [`Attribute`](cluster_export.md#attribute)<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\> ; `duration`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `playbackSpeed`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `sampledPosition`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `any`\>\> ; `seekRangeEnd`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>\> ; `seekRangeStart`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>\> ; `startTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `fastForward`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>\> ; `next`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>\> ; `seek`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>\> ; `skipBackward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }, {}\>

This cluster supports all MediaPlayback features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:520](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L520)

___

### TlvPlaybackPositionStruct

• `Const` **TlvPlaybackPositionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

This structure defines a playback position within a media stream being played.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:155](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L155)

___

### TlvPlaybackResponse

• `Const` **TlvPlaybackResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>

This command shall be generated in response to various Playback Commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.12

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L96)

___

### TlvSeekRequest

• `Const` **TlvSeekRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the MediaPlayback seek command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.11

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L182)

___

### TlvSkipBackwardRequest

• `Const` **TlvSkipBackwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipBackward command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.10

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L136)

___

### TlvSkipForwardRequest

• `Const` **TlvSkipForwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipForward command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.9

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L117)

___

### VariableSpeedComponent

• `Const` **VariableSpeedComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `fastForward`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:435](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L435)
