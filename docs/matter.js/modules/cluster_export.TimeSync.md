[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TimeSync

# Namespace: TimeSync

[cluster/export](cluster_export.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.TimeSync.Feature.md)
- [Granularity](../enums/cluster_export.TimeSync.Granularity.md)
- [TimeSource](../enums/cluster_export.TimeSync.TimeSource.md)

### Type Aliases

- [Extension](cluster_export.TimeSync.md#extension)

### Variables

- [Base](cluster_export.TimeSync.md#base)
- [Cluster](cluster_export.TimeSync.md#cluster)
- [Complete](cluster_export.TimeSync.md#complete)
- [NtpClientComponent](cluster_export.TimeSync.md#ntpclientcomponent)
- [NtpServerComponent](cluster_export.TimeSync.md#ntpservercomponent)
- [TimeZoneComponent](cluster_export.TimeSync.md#timezonecomponent)
- [TlvDSTOffsetStruct](cluster_export.TimeSync.md#tlvdstoffsetstruct)
- [TlvSetUtcTimeRequest](cluster_export.TimeSync.md#tlvsetutctimerequest)
- [TlvTimeZoneStatusEvent](cluster_export.TimeSync.md#tlvtimezonestatusevent)
- [TlvTimeZoneStruct](cluster_export.TimeSync.md#tlvtimezonestruct)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.TimeSync.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `ntpClient`: ``true``  } ? typeof [`NtpClientComponent`](cluster_export.TimeSync.md#ntpclientcomponent) : {} & `SF` extends { `timeZone`: ``true``  } ? typeof [`TimeZoneComponent`](cluster_export.TimeSync.md#timezonecomponent) : {} & `SF` extends { `ntpServer`: ``true``  } ? typeof [`NtpServerComponent`](cluster_export.TimeSync.md#ntpservercomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:597](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L597)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  }, { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all TimeSync clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:291](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L291)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.TimeSync.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Time Synchronization

Accurate time is required for a number of reasons, including scheduling, display and validating security
materials.

This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time Cluster
provides attributes for reading a Node’s current time. It also allows Administrators to

set current time, time zone and daylight savings time (DST) settings.

NOTE Support for Time Synchronization is provisional.

TimeSyncCluster supports optional features that you can enable with the TimeSyncCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:576](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L576)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `defaultNtp`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `string`, `any`\>\> ; `dstOffset`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\>\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `localTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>\> ; `ntpServerPort`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `timeZone`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\>\> ; `timeZoneDatabase`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`boolean`, `any`\>\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  }, { `dstStatus`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<`void`, `any`\>\> ; `dstTableEmpty`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<`void`, `any`\>\> ; `timeZoneStatus`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\>  }\>

This cluster supports all TimeSync features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:614](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L614)

___

### NtpClientComponent

• `Const` **NtpClientComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `defaultNtp`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `string`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:394](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L394)

___

### NtpServerComponent

• `Const` **NtpServerComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `ntpServerPort`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:544](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L544)

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `dstOffset`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`boolean`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `dstStatus`: [`Event`](cluster_export.md#event)<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.md#event)<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:416](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L416)

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L231)

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the TimeSync setUtcTime command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.9.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L174)

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the TimeSync timeZoneStatus event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.10.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:255](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L255)

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:200](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L200)
