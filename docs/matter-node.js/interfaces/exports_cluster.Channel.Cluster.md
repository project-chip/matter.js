[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).Cluster

Channel

This cluster provides an interface for controlling the current Channel on a device or endpoint.

ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 6.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Channel.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.Channel.Cluster.md#attributes)
- [base](exports_cluster.Channel.Cluster.md#base)
- [commands](exports_cluster.Channel.Cluster.md#commands)
- [events](exports_cluster.Channel.Cluster.md#events)
- [extensions](exports_cluster.Channel.Cluster.md#extensions)
- [features](exports_cluster.Channel.Cluster.md#features)
- [id](exports_cluster.Channel.Cluster.md#id)
- [name](exports_cluster.Channel.Cluster.md#name)
- [revision](exports_cluster.Channel.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Channel.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Channel.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.Channel.Cluster.md#alter)
- [enable](exports_cluster.Channel.Cluster.md#enable)
- [set](exports_cluster.Channel.Cluster.md#set)
- [with](exports_cluster.Channel.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `changeChannelByNumber` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Change the channel to the channel with the given Number in the ChannelList attribute. **`See`** MatterSpecification.v11.Cluster § 6.6.4.3 |
| `skipChannel` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command provides channel up and channel down functionality, but allows channel index jumps of size Count. When the value of the increase or decrease is larger than the number of channels remaining in the given direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the current channel is at index 0 and count value of -1 is given, then the current channel should change to the last channel. **`See`** MatterSpecification.v11.Cluster § 6.6.4.4 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: [`FieldType`](exports_tlv.FieldType.md)\<[`Mso`](../enums/exports_cluster.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `operatorName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `postalCode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.Channel.Status.md)\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.Channel.Status.md)\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelList` | [`BitFlag`](../modules/exports_schema.md#bitflag) | ChannelList Provides list of available channels. |
| `lineupInfo` | [`BitFlag`](../modules/exports_schema.md#bitflag) | LineupInfo Provides lineup info, which is a reference to an external source of lineup information. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1284``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Channel"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentChannel`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `callSign`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, `any`\>  } ; `commands`: \{ `changeChannelByNumber`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `majorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minorNumber`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `count`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `channelList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `affiliateCallSign`: ... ; `callSign`: ... ; `majorNumber`: ... ; `minorNumber`: ... ; `name`: ...  }\>[], `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `lineup`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `lineupInfoType`: ... ; `lineupName`: ... ; `operatorName`: ... ; `postalCode`: ...  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `channelList`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `changeChannel`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `match`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `lineupInfo`: ``true``  }  }] ; `features`: \{ `channelList`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lineupInfo`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
