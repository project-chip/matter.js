[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TimeSync

# Namespace: TimeSync

[exports/cluster](exports_cluster.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.TimeSync.Feature.md)
- [Granularity](../enums/exports_cluster.TimeSync.Granularity.md)
- [StatusCode](../enums/exports_cluster.TimeSync.StatusCode.md)
- [TimeSource](../enums/exports_cluster.TimeSync.TimeSource.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.TimeSync.Cluster.md)
- [Complete](../interfaces/exports_cluster.TimeSync.Complete.md)
- [DSTOffsetStruct](../interfaces/exports_cluster.TimeSync.DSTOffsetStruct.md)
- [SetUtcTimeRequest](../interfaces/exports_cluster.TimeSync.SetUtcTimeRequest.md)
- [TimeZoneStatusEvent](../interfaces/exports_cluster.TimeSync.TimeZoneStatusEvent.md)
- [TimeZoneStruct](../interfaces/exports_cluster.TimeSync.TimeZoneStruct.md)

### Variables

- [Base](exports_cluster.TimeSync.md#base)
- [Cluster](exports_cluster.TimeSync.md#cluster)
- [ClusterInstance](exports_cluster.TimeSync.md#clusterinstance)
- [Complete](exports_cluster.TimeSync.md#complete)
- [CompleteInstance](exports_cluster.TimeSync.md#completeinstance)
- [NtpClientComponent](exports_cluster.TimeSync.md#ntpclientcomponent)
- [NtpServerComponent](exports_cluster.TimeSync.md#ntpservercomponent)
- [TimeZoneComponent](exports_cluster.TimeSync.md#timezonecomponent)
- [TlvDSTOffsetStruct](exports_cluster.TimeSync.md#tlvdstoffsetstruct)
- [TlvSetUtcTimeRequest](exports_cluster.TimeSync.md#tlvsetutctimerequest)
- [TlvTimeZoneStatusEvent](exports_cluster.TimeSync.md#tlvtimezonestatusevent)
- [TlvTimeZoneStruct](exports_cluster.TimeSync.md#tlvtimezonestruct)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all TimeSync clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } | - |
| `attributes.granularity` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> | The granularity of the error that the server is willing to guarantee on the time synchronization. It is of type GranularityEnum. **`See`** MatterSpecification.v11.Core § 11.16.8.2 |
| `attributes.timeSource` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> | The server’s time source. This attribute indicates what method the server is using to sync, whether the source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum. If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is NonFabric. **`See`** MatterSpecification.v11.Core § 11.16.8.3 |
| `attributes.trustedTimeNodeId` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> | The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time sync sources and may be used as the primary time source if other time sources are unavailable. See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is available, the commissioner may set this value to null. **`See`** MatterSpecification.v11.Core § 11.16.8.5 |
| `attributes.utcTime` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> | If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us (Epoch Time in Microseconds). If the server has not achieved time synchronization, this shall be null. This attribute may be set when a Section 11.16.9.1, “SetUtcTime Command” is received. **`See`** MatterSpecification.v11.Core § 11.16.8.1 |
| `commands` | \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.setUtcTime` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source, it may send a Granularity of NoTimeGranularity. Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if its current Granularity is NoTimeGranularity. If the time is updated, the server shall also update its Granularity attribute as appropriate server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update its last known good UTC time. If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted. **`See`** MatterSpecification.v11.Core § 11.16.9.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] | This metadata controls which TimeSyncCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.ntpClient` | [`BitFlag`](exports_schema.md#bitflag) | NtpClient Server supports an NTP or SNTP client. |
| `features.ntpServer` | [`BitFlag`](exports_schema.md#bitflag) | NtpServer Server supports an NTP server role. |
| `features.timeZone` | [`BitFlag`](exports_schema.md#bitflag) | TimeZone Server supports time zone. |
| `id` | ``56`` | - |
| `name` | ``"TimeSync"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:448

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.TimeSync.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1064

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1066

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\>  }  } ; `flags`: \{ `ntpClient`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `timeZone`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `ntpServer`: ``true``  }  }] ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.TimeSync.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:749

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.TimeSync.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1285

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1287

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `ntpClient`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `ntpServer`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.TimeSync.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1070

___

### NtpClientComponent

• `Const` **NtpClientComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\>  } |
| `attributes.defaultNtp` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:238

___

### NtpServerComponent

• `Const` **NtpServerComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.ntpServerPort` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:406

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: `Object`

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.dstOffset` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> |
| `attributes.localTime` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `attributes.timeZone` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> |
| `attributes.timeZoneDatabase` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\> |
| `events` | \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.dstStatus` | [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> |
| `events.dstTableEmpty` | [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> |
| `events.timeZoneStatus` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:255

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterSpecification.v11.Core § 11.16.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:49

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the TimeSync setUtcTime command

**`See`**

MatterSpecification.v11.Core § 11.16.9.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:200

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the TimeSync timeZoneStatus event

**`See`**

MatterSpecification.v11.Core § 11.16.10.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:79

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.16.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:16
