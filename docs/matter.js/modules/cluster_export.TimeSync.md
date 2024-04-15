[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TimeSync

# Namespace: TimeSync

[cluster/export](cluster_export.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.TimeSync.Feature.md)
- [Granularity](../enums/cluster_export.TimeSync.Granularity.md)
- [StatusCode](../enums/cluster_export.TimeSync.StatusCode.md)
- [TimeSource](../enums/cluster_export.TimeSync.TimeSource.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.TimeSync.Cluster.md)
- [Complete](../interfaces/cluster_export.TimeSync.Complete.md)
- [DSTOffsetStruct](../interfaces/cluster_export.TimeSync.DSTOffsetStruct.md)
- [SetUtcTimeRequest](../interfaces/cluster_export.TimeSync.SetUtcTimeRequest.md)
- [TimeZoneStatusEvent](../interfaces/cluster_export.TimeSync.TimeZoneStatusEvent.md)
- [TimeZoneStruct](../interfaces/cluster_export.TimeSync.TimeZoneStruct.md)

### Variables

- [Base](cluster_export.TimeSync.md#base)
- [Cluster](cluster_export.TimeSync.md#cluster)
- [ClusterInstance](cluster_export.TimeSync.md#clusterinstance)
- [Complete](cluster_export.TimeSync.md#complete)
- [CompleteInstance](cluster_export.TimeSync.md#completeinstance)
- [NtpClientComponent](cluster_export.TimeSync.md#ntpclientcomponent)
- [NtpServerComponent](cluster_export.TimeSync.md#ntpservercomponent)
- [TimeZoneComponent](cluster_export.TimeSync.md#timezonecomponent)
- [TlvDSTOffsetStruct](cluster_export.TimeSync.md#tlvdstoffsetstruct)
- [TlvSetUtcTimeRequest](cluster_export.TimeSync.md#tlvsetutctimerequest)
- [TlvTimeZoneStatusEvent](cluster_export.TimeSync.md#tlvtimezonestatusevent)
- [TlvTimeZoneStruct](cluster_export.TimeSync.md#tlvtimezonestruct)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all TimeSync clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `granularity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } | - |
| `attributes.granularity` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> | The granularity of the error that the server is willing to guarantee on the time synchronization. It is of type GranularityEnum. **`See`** MatterSpecification.v11.Core § 11.16.8.2 |
| `attributes.timeSource` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> | The server’s time source. This attribute indicates what method the server is using to sync, whether the source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum. If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is NonFabric. **`See`** MatterSpecification.v11.Core § 11.16.8.3 |
| `attributes.trustedTimeNodeId` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> | The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time sync sources and may be used as the primary time source if other time sources are unavailable. See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is available, the commissioner may set this value to null. **`See`** MatterSpecification.v11.Core § 11.16.8.5 |
| `attributes.utcTime` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> | If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us (Epoch Time in Microseconds). If the server has not achieved time synchronization, this shall be null. This attribute may be set when a Section 11.16.9.1, “SetUtcTime Command” is received. **`See`** MatterSpecification.v11.Core § 11.16.8.1 |
| `commands` | \{ `setUtcTime`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } | - |
| `commands.setUtcTime` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> | This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source, it may send a Granularity of NoTimeGranularity. Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if its current Granularity is NoTimeGranularity. If the time is updated, the server shall also update its Granularity attribute as appropriate server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update its last known good UTC time. If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted. **`See`** MatterSpecification.v11.Core § 11.16.9.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>[], `any`\> ; `localTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] | This metadata controls which TimeSyncCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.ntpClient` | [`BitFlag`](schema_export.md#bitflag) | NtpClient Server supports an NTP or SNTP client. |
| `features.ntpServer` | [`BitFlag`](schema_export.md#bitflag) | NtpServer Server supports an NTP server role. |
| `features.timeZone` | [`BitFlag`](schema_export.md#bitflag) | TimeZone Server supports time zone. |
| `id` | ``56`` | - |
| `name` | ``"TimeSync"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:489](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L489)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:620](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L620)

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:622](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L622)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  }  } = NtpClientComponent; `flags`: \{ `ntpClient`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[], `any`\> ; `localTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = TimeZoneComponent; `flags`: \{ `timeZone`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = NtpServerComponent; `flags`: \{ `ntpServer`: ``true`` = true }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.TimeSync.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L601)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.TimeSync.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:670](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L670)

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:672](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L672)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `defaultNtp`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `ntpClient`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `dstOffset`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `granularity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `localTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `ntpServerPort`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `ntpServer`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } = Cluster.commands; `events`: \{ `dstStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `dstTableEmpty`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeZoneStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``56``, ``"ClusterId"``\> = Cluster.id; `name`: ``"TimeSync"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.TimeSync.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:630](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L630)

___

### NtpClientComponent

• `Const` **NtpClientComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `defaultNtp`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\>  } |
| `attributes.defaultNtp` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `string`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L293)

___

### NtpServerComponent

• `Const` **NtpServerComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `ntpServerPort`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.ntpServerPort` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:443](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L443)

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `dstOffset`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `localTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.dstOffset` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> |
| `attributes.localTime` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `attributes.timeZone` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> |
| `attributes.timeZoneDatabase` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\> |
| `events` | \{ `dstStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.dstStatus` | [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> |
| `events.dstTableEmpty` | [`Event`](../interfaces/cluster_export.Event.md)\<`void`, `any`\> |
| `events.timeZoneStatus` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:315](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L315)

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L74)

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the TimeSync setUtcTime command

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L251)

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the TimeSync timeZoneStatus event

**`See`**

MatterSpecification.v11.Core § 11.16.10.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L107)

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

**`See`**

MatterSpecification.v11.Core § 11.16.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L38)
