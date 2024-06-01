[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TimeSync](../modules/cluster_export.TimeSync.md) / TimeZoneStatusEvent

# Interface: TimeZoneStatusEvent

[cluster/export](../modules/cluster_export.md).[TimeSync](../modules/cluster_export.TimeSync.md).TimeZoneStatusEvent

Body of the TimeSync timeZoneStatus event

**`See`**

MatterSpecification.v11.Core § 11.16.10.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTimeZoneStatusEvent`](../modules/cluster_export.TimeSync.md#tlvtimezonestatusevent)\>

  ↳ **`TimeZoneStatusEvent`**

## Table of contents

### Properties

- [name](cluster_export.TimeSync.TimeZoneStatusEvent.md#name)
- [offset](cluster_export.TimeSync.TimeZoneStatusEvent.md#offset)

## Properties

### name

• `Optional` **name**: `string`

Current time zone name. This name SHOULD use the country/city format specified by the IANA time zone
database [https://www.iana.org/time-zones].

**`See`**

MatterSpecification.v11.Core § 11.16.10.3.2

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:120](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L120)

___

### offset

• **offset**: `number`

Current time zone offset from UTC in seconds.

**`See`**

MatterSpecification.v11.Core § 11.16.10.3.1

#### Inherited from

TypeFromSchema.offset

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:112](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L112)
