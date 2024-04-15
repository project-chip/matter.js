[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / DownloadErrorEvent

# Interface: DownloadErrorEvent

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).DownloadErrorEvent

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.9

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDownloadErrorEvent`](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)\>

  ↳ **`DownloadErrorEvent`**

## Table of contents

### Properties

- [bytesDownloaded](exports_cluster.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#bytesdownloaded)
- [platformCode](exports_cluster.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#platformcode)
- [progressPercent](exports_cluster.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#progresspercent)
- [softwareVersion](exports_cluster.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#softwareversion)

## Properties

### bytesDownloaded

• **bytesDownloaded**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.bytesDownloaded

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:177

___

### platformCode

• **platformCode**: ``null`` \| `number` \| `bigint`

#### Inherited from

TypeFromSchema.platformCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:179

___

### progressPercent

• **progressPercent**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.progressPercent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:178

___

### softwareVersion

• **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:176
