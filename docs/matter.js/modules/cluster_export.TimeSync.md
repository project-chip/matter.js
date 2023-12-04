[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TimeSync

# Namespace: TimeSync

[cluster/export](cluster_export.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.TimeSync.Feature.md)
- [Granularity](../enums/cluster_export.TimeSync.Granularity.md)
- [StatusCode](../enums/cluster_export.TimeSync.StatusCode.md)
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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.TimeSync.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `ntpClient`: ``true``  } ? typeof [`NtpClientComponent`](cluster_export.TimeSync.md#ntpclientcomponent) : {} & `SF` extends { `timeZone`: ``true``  } ? typeof [`TimeZoneComponent`](cluster_export.TimeSync.md#timezonecomponent) : {} & `SF` extends { `ntpServer`: ``true``  } ? typeof [`NtpServerComponent`](cluster_export.TimeSync.md#ntpservercomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:600](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L600)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `features`: { `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all TimeSync clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:291](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L291)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``56`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"TimeSync"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `features`: { `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``56`` = 0x38; `name`: ``"TimeSync"`` = "TimeSync"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.TimeSync.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

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

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:576](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L576)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `defaultNtp`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `string`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `dstOffset`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `granularity`: [`Attribute`](cluster_export.md#attribute)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md), `any`\> ; `localTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `ntpServerPort`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeSource`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md), `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `trustedTimeNodeId`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| [`NodeId`](datatype_export.md#nodeid), `any`\> ; `utcTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: { `setUtcTime`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  } = Cluster.commands; `events`: { `dstStatus`: [`Event`](cluster_export.md#event)<`void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `dstTableEmpty`: [`Event`](cluster_export.md#event)<`void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `timeZoneStatus`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `ntpClient`: [`BitFlag`](schema_export.md#bitflag-1) ; `ntpServer`: [`BitFlag`](schema_export.md#bitflag-1) ; `timeZone`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``56`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"TimeSync"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all TimeSync features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:617](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L617)

___

### NtpClientComponent

• `Const` **NtpClientComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `defaultNtp`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `string`, `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:394](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L394)

___

### NtpServerComponent

• `Const` **NtpServerComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `ntpServerPort`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:544](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L544)

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `dstOffset`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> ; `localTime`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> ; `timeZone`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`boolean`, `any`\>  } ; `events`: { `dstStatus`: [`Event`](cluster_export.md#event)<`void`, `any`\> ; `dstTableEmpty`: [`Event`](cluster_export.md#event)<`void`, `any`\> ; `timeZoneStatus`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }  }\>

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:416](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L416)

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validStarting`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `validUntil`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:231](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L231)

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `granularity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Granularity`](../enums/cluster_export.TimeSync.Granularity.md)\> ; `timeSource`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TimeSource`](../enums/cluster_export.TimeSync.TimeSource.md)\> ; `utcTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the TimeSync setUtcTime command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.9.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:165](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L165)

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the TimeSync timeZoneStatus event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.10.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:255](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L255)

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `offset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `validAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.16.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:200](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L200)
