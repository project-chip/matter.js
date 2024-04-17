[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [TimeSync](../modules/exports_cluster.TimeSync.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[TimeSync](../modules/exports_cluster.TimeSync.md).Cluster

Time Synchronization

Accurate time is required for a number of reasons, including scheduling, display and validating security
materials.

This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time Cluster
provides attributes for reading a Node’s current time. It also allows Administrators to

set current time, time zone and daylight savings time (DST) settings.

NOTE Support for Time Synchronization is provisional.

TimeSyncCluster supports optional features that you can enable with the TimeSyncCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.16

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.TimeSync.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.TimeSync.Cluster.md#attributes)
- [base](exports_cluster.TimeSync.Cluster.md#base)
- [commands](exports_cluster.TimeSync.Cluster.md#commands)
- [events](exports_cluster.TimeSync.Cluster.md#events)
- [extensions](exports_cluster.TimeSync.Cluster.md#extensions)
- [features](exports_cluster.TimeSync.Cluster.md#features)
- [id](exports_cluster.TimeSync.Cluster.md#id)
- [name](exports_cluster.TimeSync.Cluster.md#name)
- [revision](exports_cluster.TimeSync.Cluster.md#revision)
- [supportedFeatures](exports_cluster.TimeSync.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.TimeSync.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.TimeSync.Cluster.md#alter)
- [enable](exports_cluster.TimeSync.Cluster.md#enable)
- [set](exports_cluster.TimeSync.Cluster.md#set)
- [with](exports_cluster.TimeSync.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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
| `setUtcTime` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> | This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source, it may send a Granularity of NoTimeGranularity. Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if its current Granularity is NoTimeGranularity. If the time is updated, the server shall also update its Granularity attribute as appropriate server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update its last known good UTC time. If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted. **`See`** MatterSpecification.v11.Core § 11.16.9.1 |

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }]

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
| `ntpClient` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NtpClient Server supports an NTP or SNTP client. |
| `ntpServer` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NtpServer Server supports an NTP server role. |
| `timeZone` | [`BitFlag`](../modules/exports_schema.md#bitflag) | TimeZone Server supports time zone. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``56``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"TimeSync"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `granularity`: [`FieldType`](exports_tlv.FieldType.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
