[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Channel

# Namespace: Channel

[exports/cluster](exports_cluster.md).Channel

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Channel.Feature.md)
- [LineupInfoType](../enums/exports_cluster.Channel.LineupInfoType.md)
- [Status](../enums/exports_cluster.Channel.Status.md)

### Interfaces

- [ChangeChannelByNumberRequest](../interfaces/exports_cluster.Channel.ChangeChannelByNumberRequest.md)
- [ChangeChannelRequest](../interfaces/exports_cluster.Channel.ChangeChannelRequest.md)
- [ChangeChannelResponse](../interfaces/exports_cluster.Channel.ChangeChannelResponse.md)
- [ChannelInfoStruct](../interfaces/exports_cluster.Channel.ChannelInfoStruct.md)
- [Cluster](../interfaces/exports_cluster.Channel.Cluster.md)
- [Complete](../interfaces/exports_cluster.Channel.Complete.md)
- [LineupInfoStruct](../interfaces/exports_cluster.Channel.LineupInfoStruct.md)
- [SkipChannelRequest](../interfaces/exports_cluster.Channel.SkipChannelRequest.md)

### Variables

- [Base](exports_cluster.Channel.md#base)
- [ChannelListComponent](exports_cluster.Channel.md#channellistcomponent)
- [ChannelListOrLineupInfoComponent](exports_cluster.Channel.md#channellistorlineupinfocomponent)
- [Cluster](exports_cluster.Channel.md#cluster)
- [ClusterInstance](exports_cluster.Channel.md#clusterinstance)
- [Complete](exports_cluster.Channel.md#complete)
- [CompleteInstance](exports_cluster.Channel.md#completeinstance)
- [LineupInfoComponent](exports_cluster.Channel.md#lineupinfocomponent)
- [TlvChangeChannelByNumberRequest](exports_cluster.Channel.md#tlvchangechannelbynumberrequest)
- [TlvChangeChannelRequest](exports_cluster.Channel.md#tlvchangechannelrequest)
- [TlvChangeChannelResponse](exports_cluster.Channel.md#tlvchangechannelresponse)
- [TlvChannelInfoStruct](exports_cluster.Channel.md#tlvchannelinfostruct)
- [TlvLineupInfoStruct](exports_cluster.Channel.md#tlvlineupinfostruct)
- [TlvSkipChannelRequest](exports_cluster.Channel.md#tlvskipchannelrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Channel clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentChannel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } | - |
| `attributes.currentChannel` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> | This optional field contains the current channel. When supported but a channel is not currently tuned to (if a content application is in foreground), the value of the field shall be null. **`See`** MatterSpecification.v11.Cluster § 6.6.3.3 |
| `commands` | \{ `changeChannelByNumber`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.changeChannelByNumber` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | Change the channel to the channel with the given Number in the ChannelList attribute. **`See`** MatterSpecification.v11.Cluster § 6.6.4.3 |
| `commands.skipChannel` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command provides channel up and channel down functionality, but allows channel index jumps of size Count. When the value of the increase or decrease is larger than the number of channels remaining in the given direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the current channel is at index 0 and count value of -1 is given, then the current channel should change to the last channel. **`See`** MatterSpecification.v11.Cluster § 6.6.4.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] | This metadata controls which ChannelCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `channelList`: [`BitFlag`](exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.channelList` | [`BitFlag`](exports_schema.md#bitflag) | ChannelList Provides list of available channels. |
| `features.lineupInfo` | [`BitFlag`](exports_schema.md#bitflag) | LineupInfo Provides lineup info, which is a reference to an external source of lineup information. |
| `id` | ``1284`` | - |
| `name` | ``"Channel"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:356

___

### ChannelListComponent

• `Const` **ChannelListComponent**: `Object`

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `channelList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } |
| `attributes.channelList` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:220

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: `Object`

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.changeChannel` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:297

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Channel.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:908

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:910

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.Channel.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:629

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.Channel.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:1153

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:1155

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `channelList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `channelList`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `lineup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `changeChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `channelList`: `boolean`  }, \{ `lineupInfo`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `changeChannelByNumber`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.Channel.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:914

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: `Object`

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `lineup`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } |
| `attributes.lineup` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:269

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel changeChannelByNumber command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:175

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel changeChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:112

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:149

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:21

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:83

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel skipChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:201
