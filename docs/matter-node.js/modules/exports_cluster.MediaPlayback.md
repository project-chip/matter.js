[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MediaPlayback

# Namespace: MediaPlayback

[exports/cluster](exports_cluster.md).MediaPlayback

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.MediaPlayback.Feature.md)
- [PlaybackState](../enums/exports_cluster.MediaPlayback.PlaybackState.md)
- [Status](../enums/exports_cluster.MediaPlayback.Status.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.MediaPlayback.Cluster.md)
- [Complete](../interfaces/exports_cluster.MediaPlayback.Complete.md)
- [PlaybackPositionStruct](../interfaces/exports_cluster.MediaPlayback.PlaybackPositionStruct.md)
- [PlaybackResponse](../interfaces/exports_cluster.MediaPlayback.PlaybackResponse.md)
- [SeekRequest](../interfaces/exports_cluster.MediaPlayback.SeekRequest.md)
- [SkipBackwardRequest](../interfaces/exports_cluster.MediaPlayback.SkipBackwardRequest.md)
- [SkipForwardRequest](../interfaces/exports_cluster.MediaPlayback.SkipForwardRequest.md)

### Variables

- [AdvancedSeekComponent](exports_cluster.MediaPlayback.md#advancedseekcomponent)
- [Base](exports_cluster.MediaPlayback.md#base)
- [Cluster](exports_cluster.MediaPlayback.md#cluster)
- [ClusterInstance](exports_cluster.MediaPlayback.md#clusterinstance)
- [Complete](exports_cluster.MediaPlayback.md#complete)
- [CompleteInstance](exports_cluster.MediaPlayback.md#completeinstance)
- [TlvPlaybackPositionStruct](exports_cluster.MediaPlayback.md#tlvplaybackpositionstruct)
- [TlvPlaybackResponse](exports_cluster.MediaPlayback.md#tlvplaybackresponse)
- [TlvSeekRequest](exports_cluster.MediaPlayback.md#tlvseekrequest)
- [TlvSkipBackwardRequest](exports_cluster.MediaPlayback.md#tlvskipbackwardrequest)
- [TlvSkipForwardRequest](exports_cluster.MediaPlayback.md#tlvskipforwardrequest)
- [VariableSpeedComponent](exports_cluster.MediaPlayback.md#variablespeedcomponent)

## Variables

### AdvancedSeekComponent

• `Const` **AdvancedSeekComponent**: `Object`

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `duration`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `startTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } |
| `attributes.duration` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `attributes.playbackSpeed` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.sampledPosition` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> |
| `attributes.seekRangeEnd` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `attributes.seekRangeStart` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `attributes.startTime` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `commands` | \{ `seek`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.seek` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:202

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all MediaPlayback clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PlaybackState`](../enums/exports_cluster.MediaPlayback.PlaybackState.md), `any`\>  } | - |
| `attributes.currentState` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PlaybackState`](../enums/exports_cluster.MediaPlayback.PlaybackState.md), `any`\> | This shall indicate the current playback state of media. During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING. **`See`** MatterSpecification.v11.Cluster § 6.10.3.1 |
| `commands` | \{ `next`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `skipBackward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `commands.next` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context- specific. This will often Go forward to the next media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.6 |
| `commands.pause` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall pause playback of the media. **`See`** MatterSpecification.v11.Cluster § 6.10.4.2 |
| `commands.play` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play shall return media to normal playback speed. **`See`** MatterSpecification.v11.Cluster § 6.10.4.1 |
| `commands.previous` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is context-specific. This will often Go back to the previous media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.5 |
| `commands.skipBackward` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall Skip backward in the media by the given number of milliseconds. **`See`** MatterSpecification.v11.Cluster § 6.10.4.10 |
| `commands.skipForward` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall Skip forward in the media by the given number of milliseconds. **`See`** MatterSpecification.v11.Cluster § 6.10.4.9 |
| `commands.startOver` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall Start Over with the current media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.4 |
| `commands.stop` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may navigate the user back to the location from where the media was originally launched. **`See`** MatterSpecification.v11.Cluster § 6.10.4.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `duration`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `startTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `seek`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `advancedSeek`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `fastForward`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `rewind`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `variableSpeed`: ``true``  }  }] | This metadata controls which MediaPlaybackCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.advancedSeek` | [`BitFlag`](exports_schema.md#bitflag) | AdvancedSeek Enables clients to implement more advanced media seeking behavior in their user interface, such as for example a "seek bar". Adds support for Attributes and Commands related to advanced seek support |
| `features.variableSpeed` | [`BitFlag`](exports_schema.md#bitflag) | VariableSpeed Support for commands to support variable speed playback on media that supports it. |
| `id` | ``1286`` | - |
| `name` | ``"MediaPlayback"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:441

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.MediaPlayback.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1331

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1333

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PlaybackState`](../enums/exports_cluster.MediaPlayback.PlaybackState.md), `any`\>  } ; `commands`: \{ `next`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `skipBackward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `duration`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `startTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `seek`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `advancedSeek`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `fastForward`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `rewind`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `variableSpeed`: ``true``  }  }] ; `features`: \{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1286`` ; `name`: ``"MediaPlayback"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.MediaPlayback.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:882

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.MediaPlayback.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1737

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1739

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PlaybackState`](../enums/exports_cluster.MediaPlayback.PlaybackState.md), `any`\> ; `duration`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `playbackSpeed`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `sampledPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `seekRangeEnd`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `seekRangeStart`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `fastForward`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `next`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `pause`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `play`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `previous`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `rewind`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `seek`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `skipBackward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `advancedSeek`: [`BitFlag`](exports_schema.md#bitflag) ; `variableSpeed`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"MediaPlayback"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.MediaPlayback.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1337

___

### TlvPlaybackPositionStruct

• `Const` **TlvPlaybackPositionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure defines a playback position within a media stream being played.

**`See`**

MatterSpecification.v11.Cluster § 6.10.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:18

___

### TlvPlaybackResponse

• `Const` **TlvPlaybackResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to various Playback Commands.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:107

___

### TlvSeekRequest

• `Const` **TlvSeekRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaPlayback seek command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:50

___

### TlvSkipBackwardRequest

• `Const` **TlvSkipBackwardRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaPlayback skipBackward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:179

___

### TlvSkipForwardRequest

• `Const` **TlvSkipForwardRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the MediaPlayback skipForward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:154

___

### VariableSpeedComponent

• `Const` **VariableSpeedComponent**: `Object`

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `fastForward`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `rewind`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.fastForward` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.rewind` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:354
