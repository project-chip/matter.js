[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MediaPlayback

# Namespace: MediaPlayback

[exports/cluster](exports_cluster.md).MediaPlayback

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.MediaPlayback.Feature.md)
- [PlaybackState](../enums/exports_cluster.MediaPlayback.PlaybackState.md)
- [Status](../enums/exports_cluster.MediaPlayback.Status.md)

### Type Aliases

- [Extension](exports_cluster.MediaPlayback.md#extension)

### Variables

- [AdvancedSeekComponent](exports_cluster.MediaPlayback.md#advancedseekcomponent)
- [Base](exports_cluster.MediaPlayback.md#base)
- [Cluster](exports_cluster.MediaPlayback.md#cluster)
- [Complete](exports_cluster.MediaPlayback.md#complete)
- [TlvPlaybackPositionStruct](exports_cluster.MediaPlayback.md#tlvplaybackpositionstruct)
- [TlvPlaybackResponse](exports_cluster.MediaPlayback.md#tlvplaybackresponse)
- [TlvSeekRequest](exports_cluster.MediaPlayback.md#tlvseekrequest)
- [TlvSkipBackwardRequest](exports_cluster.MediaPlayback.md#tlvskipbackwardrequest)
- [TlvSkipForwardRequest](exports_cluster.MediaPlayback.md#tlvskipforwardrequest)
- [VariableSpeedComponent](exports_cluster.MediaPlayback.md#variablespeedcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.MediaPlayback.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `advancedSeek`: ``true``  } ? typeof [`AdvancedSeekComponent`](exports_cluster.MediaPlayback.md#advancedseekcomponent) : {} & `SF` extends { `variableSpeed`: ``true``  } ? typeof [`VariableSpeedComponent`](exports_cluster.MediaPlayback.md#variablespeedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:861

## Variables

### AdvancedSeekComponent

• `Const` **AdvancedSeekComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `duration`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\> ; `playbackSpeed`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `sampledPosition`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\> ; `seekRangeEnd`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\> ; `seekRangeStart`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\> ; `startTime`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\>  }, { `seek`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:392

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentState`: [`Attribute`](exports_cluster.md#attribute)<[`PlaybackState`](../enums/exports_cluster.MediaPlayback.PlaybackState.md), `any`\>  }, { `next`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `skipBackward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all MediaPlayback clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:184

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `next`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `skipBackward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.MediaPlayback.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Media Playback

This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a
TV, Set-top Box, or Smart Speaker.

MediaPlaybackCluster supports optional features that you can enable with the MediaPlaybackCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:614

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag-1) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `fastForward`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `next`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `rewind`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `seek`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `skipBackward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

This cluster supports all MediaPlayback features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:874

___

### TlvPlaybackPositionStruct

• `Const` **TlvPlaybackPositionStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure defines a playback position within a media stream being played.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:123

___

### TlvPlaybackResponse

• `Const` **TlvPlaybackResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to various Playback Commands.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.4.12

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:68

___

### TlvSeekRequest

• `Const` **TlvSeekRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the MediaPlayback seek command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.4.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:148

___

### TlvSkipBackwardRequest

• `Const` **TlvSkipBackwardRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the MediaPlayback skipBackward command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.4.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:105

___

### TlvSkipForwardRequest

• `Const` **TlvSkipForwardRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the MediaPlayback skipForward command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.4.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:87

___

### VariableSpeedComponent

• `Const` **VariableSpeedComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `fastForward`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `rewind`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:541
