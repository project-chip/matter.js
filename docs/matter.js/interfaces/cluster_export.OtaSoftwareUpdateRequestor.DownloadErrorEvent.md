[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / DownloadErrorEvent

# Interface: DownloadErrorEvent

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).DownloadErrorEvent

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDownloadErrorEvent`](../modules/cluster_export.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)\>

  ↳ **`DownloadErrorEvent`**

## Table of contents

### Properties

- [bytesDownloaded](cluster_export.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#bytesdownloaded)
- [platformCode](cluster_export.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#platformcode)
- [progressPercent](cluster_export.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#progresspercent)
- [softwareVersion](cluster_export.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md#softwareversion)

## Properties

### bytesDownloaded

• **bytesDownloaded**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.bytesDownloaded

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L220)

___

### platformCode

• **platformCode**: ``null`` \| `number` \| `bigint`

#### Inherited from

TypeFromSchema.platformCode

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L222)

___

### progressPercent

• **progressPercent**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.progressPercent

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L221)

___

### softwareVersion

• **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L219)
