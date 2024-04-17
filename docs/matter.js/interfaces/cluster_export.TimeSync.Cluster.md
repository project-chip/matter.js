[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.TimeSync.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.TimeSync.Cluster.md#attributes)
- [base](cluster_export.TimeSync.Cluster.md#base)
- [commands](cluster_export.TimeSync.Cluster.md#commands)
- [events](cluster_export.TimeSync.Cluster.md#events)
- [extensions](cluster_export.TimeSync.Cluster.md#extensions)
- [features](cluster_export.TimeSync.Cluster.md#features)
- [id](cluster_export.TimeSync.Cluster.md#id)
- [name](cluster_export.TimeSync.Cluster.md#name)
- [revision](cluster_export.TimeSync.Cluster.md#revision)
- [supportedFeatures](cluster_export.TimeSync.Cluster.md#supportedfeatures)
- [unknown](cluster_export.TimeSync.Cluster.md#unknown)

### Methods

- [alter](cluster_export.TimeSync.Cluster.md#alter)
- [enable](cluster_export.TimeSync.Cluster.md#enable)
- [set](cluster_export.TimeSync.Cluster.md#set)
- [with](cluster_export.TimeSync.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `setUtcTime` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> | This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source, it may send a Granularity of NoTimeGranularity. Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if its current Granularity is NoTimeGranularity. If the time is updated, the server shall also update its Granularity attribute as appropriate server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update its last known good UTC time. If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted. **`See`** MatterSpecification.v11.Core § 11.16.9.1 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }]

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ntpClient` | [`BitFlag`](../modules/schema_export.md#bitflag) | NtpClient Server supports an NTP or SNTP client. |
| `ntpServer` | [`BitFlag`](../modules/schema_export.md#bitflag) | NtpServer Server supports an NTP server role. |
| `timeZone` | [`BitFlag`](../modules/schema_export.md#bitflag) | TimeZone Server supports time zone. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``56``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"TimeSync"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offset`: ... ; `validStarting`: ... ; `validUntil`: ...  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: ... ; `offset`: ... ; `validAt`: ...  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
