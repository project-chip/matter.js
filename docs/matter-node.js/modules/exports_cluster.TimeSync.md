[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TimeSync

# Namespace: TimeSync

[exports/cluster](exports_cluster.md).TimeSync

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.TimeSync.Feature.md)
- [Granularity](../enums/exports_cluster.TimeSync.Granularity.md)
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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.TimeSync.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `ntpClient`: ``true``  } ? typeof [`NtpClientComponent`](exports_cluster.TimeSync.md#ntpclientcomponent) : {} & `SF` extends { `timeZone`: ``true``  } ? typeof [`TimeZoneComponent`](exports_cluster.TimeSync.md#timezonecomponent) : {} & `SF` extends { `ntpServer`: ``true``  } ? typeof [`NtpServerComponent`](exports_cluster.TimeSync.md#ntpservercomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:674

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `granularity`: [`Attribute`](exports_cluster.md#attribute)<[`Granularity`](../enums/exports_cluster.TimeSync.Granularity.md), `any`\> ; `timeSource`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TimeSource`](../enums/exports_cluster.TimeSync.TimeSource.md), `any`\> ; `trustedTimeNodeId`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/datatype/NodeId"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_datatype_NodeId_.md) \| ``null``, `any`\> ; `utcTime`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\>  }, { `setUtcTime`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all TimeSync clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:224

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `setUtcTime`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.TimeSync.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

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

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:518

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `ntpClient`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ntpServer`: [`BitFlag`](exports_schema.md#bitflag-1) ; `timeZone`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `setUtcTime`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `dstStatus`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<`void`, `any`\>\> ; `dstTableEmpty`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<`void`, `any`\>\> ; `timeZoneStatus`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }\>

This cluster supports all TimeSync features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:689

___

### NtpClientComponent

• `Const` **NtpClientComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `defaultNtp`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`string` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:326

___

### NtpServerComponent

• `Const` **NtpServerComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `ntpServerPort`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:489

___

### TimeZoneComponent

• `Const` **TimeZoneComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `dstOffset`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\> ; `localTime`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\> ; `timeZone`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\> ; `timeZoneDatabase`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`boolean`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `dstStatus`: [`Event`](exports_cluster.md#event)<`void`, `any`\> ; `dstTableEmpty`: [`Event`](exports_cluster.md#event)<`void`, `any`\> ; `timeZoneStatus`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:341

___

### TlvDSTOffsetStruct

• `Const` **TlvDSTOffsetStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with these
assumptions.

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:171

___

### TlvSetUtcTimeRequest

• `Const` **TlvSetUtcTimeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the TimeSync setUtcTime command

**`See`**

MatterCoreSpecificationV1_1 § 11.16.9.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:120

___

### TlvTimeZoneStatusEvent

• `Const` **TlvTimeZoneStatusEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the TimeSync timeZoneStatus event

**`See`**

MatterCoreSpecificationV1_1 § 11.16.10.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:192

___

### TlvTimeZoneStruct

• `Const` **TlvTimeZoneStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.16.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TimeSyncCluster.d.ts:143
