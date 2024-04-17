[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Channel

# Namespace: Channel

[cluster/export](cluster_export.md).Channel

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Channel.Feature.md)
- [LineupInfoType](../enums/cluster_export.Channel.LineupInfoType.md)
- [Status](../enums/cluster_export.Channel.Status.md)

### Interfaces

- [ChangeChannelByNumberRequest](../interfaces/cluster_export.Channel.ChangeChannelByNumberRequest.md)
- [ChangeChannelRequest](../interfaces/cluster_export.Channel.ChangeChannelRequest.md)
- [ChangeChannelResponse](../interfaces/cluster_export.Channel.ChangeChannelResponse.md)
- [ChannelInfoStruct](../interfaces/cluster_export.Channel.ChannelInfoStruct.md)
- [Cluster](../interfaces/cluster_export.Channel.Cluster.md)
- [Complete](../interfaces/cluster_export.Channel.Complete.md)
- [LineupInfoStruct](../interfaces/cluster_export.Channel.LineupInfoStruct.md)
- [SkipChannelRequest](../interfaces/cluster_export.Channel.SkipChannelRequest.md)

### Variables

- [Base](cluster_export.Channel.md#base)
- [ChannelListComponent](cluster_export.Channel.md#channellistcomponent)
- [ChannelListOrLineupInfoComponent](cluster_export.Channel.md#channellistorlineupinfocomponent)
- [Cluster](cluster_export.Channel.md#cluster)
- [ClusterInstance](cluster_export.Channel.md#clusterinstance)
- [Complete](cluster_export.Channel.md#complete)
- [CompleteInstance](cluster_export.Channel.md#completeinstance)
- [LineupInfoComponent](cluster_export.Channel.md#lineupinfocomponent)
- [TlvChangeChannelByNumberRequest](cluster_export.Channel.md#tlvchangechannelbynumberrequest)
- [TlvChangeChannelRequest](cluster_export.Channel.md#tlvchangechannelrequest)
- [TlvChangeChannelResponse](cluster_export.Channel.md#tlvchangechannelresponse)
- [TlvChannelInfoStruct](cluster_export.Channel.md#tlvchannelinfostruct)
- [TlvLineupInfoStruct](cluster_export.Channel.md#tlvlineupinfostruct)
- [TlvSkipChannelRequest](cluster_export.Channel.md#tlvskipchannelrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Channel clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentChannel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } | - |
| `attributes.currentChannel` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> | This optional field contains the current channel. When supported but a channel is not currently tuned to (if a content application is in foreground), the value of the field shall be null. **`See`** MatterSpecification.v11.Cluster § 6.6.3.3 |
| `commands` | \{ `changeChannelByNumber`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } | - |
| `commands.changeChannelByNumber` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Change the channel to the channel with the given Number in the ChannelList attribute. **`See`** MatterSpecification.v11.Cluster § 6.6.4.3 |
| `commands.skipChannel` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command provides channel up and channel down functionality, but allows channel index jumps of size Count. When the value of the increase or decrease is larger than the number of channels remaining in the given direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the current channel is at index 0 and count value of -1 is given, then the current channel should change to the last channel. **`See`** MatterSpecification.v11.Cluster § 6.6.4.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\>  }  } = ChannelListComponent; `flags`: \{ `channelList`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  }  } = LineupInfoComponent; `flags`: \{ `lineupInfo`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }  } = ChannelListOrLineupInfoComponent; `flags`: \{ `channelList`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }  } = ChannelListOrLineupInfoComponent; `flags`: \{ `lineupInfo`: ``true`` = true }  }] | This metadata controls which ChannelCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `channelList`: [`BitFlag`](schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.channelList` | [`BitFlag`](schema_export.md#bitflag) | ChannelList Provides list of available channels. |
| `features.lineupInfo` | [`BitFlag`](schema_export.md#bitflag) | LineupInfo Provides lineup info, which is a reference to an external source of lineup information. |
| `id` | ``1284`` | - |
| `name` | ``"Channel"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:317](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L317)

___

### ChannelListComponent

• `Const` **ChannelListComponent**: `Object`

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `channelList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\>  } |
| `attributes.channelList` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L247)

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: `Object`

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  } |
| `commands.changeChannel` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:275](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L275)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Channel.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L395)

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:397](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L397)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>[], `any`\>  }  } = ChannelListComponent; `flags`: \{ `channelList`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = LineupInfoComponent; `flags`: \{ `lineupInfo`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }  } = ChannelListOrLineupInfoComponent; `flags`: \{ `channelList`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }  } = ChannelListOrLineupInfoComponent; `flags`: \{ `lineupInfo`: ``true`` = true }  }] ; `features`: \{ `channelList`: [`BitFlag`](schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1284`` = 0x504; `name`: ``"Channel"`` = "Channel"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Channel.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:384](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L384)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.Channel.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:434](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L434)

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:436](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L436)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `channelList`: [`BitFlag`](schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `changeChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `channelList`: `boolean` = true }, \{ `lineupInfo`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `channelList`: [`BitFlag`](schema_export.md#bitflag) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1284``, ``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.Channel.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:404](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L404)

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: `Object`

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `lineup`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } |
| `attributes.lineup` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L261)

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Channel changeChannelByNumber command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L199)

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the Channel changeChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L130)

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L171)

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L30)

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L98)

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Channel skipChannel command

**`See`**

MatterSpecification.v11.Cluster § 6.6.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L227)
