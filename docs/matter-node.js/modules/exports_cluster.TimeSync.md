[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TimeSync

# Namespace: TimeSync

[exports/cluster](exports_cluster.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.TimeSync.Feature.md)
- [Granularity](../enums/exports_cluster.TimeSync.Granularity.md)
- [StatusCode](../enums/exports_cluster.TimeSync.StatusCode.md)
- [TimeSource](../enums/exports_cluster.TimeSync.TimeSource.md)

### Type Aliases

- [Extension](exports_cluster.TimeSync.md#extension)

### Variables

- [Base](exports_cluster.TimeSync.md#base)
- [Cluster](exports_cluster.TimeSync.md#cluster)
- [Complete](exports_cluster.TimeSync.md#complete)
- [NtpClientComponent](exports_cluster.TimeSync.md#ntpclientcomponent)
- [NtpServerComponent](exports_cluster.TimeSync.md#ntpservercomponent)
- [TimeZoneComponent](exports_cluster.TimeSync.md#timezonecomponent)
- [TlvDSTOffsetStruct](exports_cluster.TimeSync.md#tlvdstoffsetstruct)
- [TlvSetUtcTimeRequest](exports_cluster.TimeSync.md#tlvsetutctimerequest)
- [TlvTimeZoneStatusEvent](exports_cluster.TimeSync.md#tlvtimezonestatusevent)
- [TlvTimeZoneStruct](exports_cluster.TimeSync.md#tlvtimezonestruct)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.TimeSync.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `ntpClient`: ``true``  } ? typeof [`NtpClientComponent`](exports_cluster.TimeSync.md#ntpclientcomponent) : {} & `SF` extends \{ `timeZone`: ``true``  } ? typeof [`TimeZoneComponent`](exports_cluster.TimeSync.md#timezonecomponent) : {} & `SF` extends \{ `ntpServer`: ``true``  } ? typeof [`NtpServerComponent`](exports_cluster.TimeSync.md#ntpservercomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:817

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>

These elements and properties are present in all TimeSync clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:233

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeSync"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``56`` ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.TimeSync.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Time Synchronization

Accurate time is required for a number of reasons, including scheduling, display and validating security
materials.

This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time Cluster
provides attributes for reading a Node’s current time. It also allows Administrators to

set current time, time zone and daylight savings time (DST) settings.

NOTE Support for Time Synchronization is provisional.

TimeSyncCluster supports optional features that you can enable with the TimeSyncCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:541

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `ntpClient`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `granularity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `ntpServer`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `trustedTimeNodeId`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `setUtcTime`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `timeZone`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``56`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"TimeSync"`` ; `revision`: ``1``  }\>

This cluster supports all TimeSync features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:832

___

### NtpClientComponent

• `Const` **NtpClientComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `defaultNtp`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`string` \| ``null``, `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:342

___

### NtpServerComponent

• `Const` **NtpServerComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `ntpServerPort`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:510

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `dstOffset`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `localTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `timeZone`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `dstStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `dstTableEmpty`: [`Event`](../interfaces/exports_cluster.Event.md)\<`void`, `any`\> ; `timeZoneStatus`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:359

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:180

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the TimeSync setUtcTime command

**`See`**

MatterCoreSpecificationV1_1 § 11.16.9.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:121

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the TimeSync timeZoneStatus event

**`See`**

MatterCoreSpecificationV1_1 § 11.16.10.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:201

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:152
