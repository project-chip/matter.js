[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / DownloadErrorEvent

# Interface: DownloadErrorEvent

Body of the OtaSoftwareUpdateRequestor downloadError event

## See

MatterSpecification.v11.Core § 11.19.7.7.9

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDownloadErrorEvent`](../README.md#tlvdownloaderrorevent)\>

## Properties

### bytesDownloaded

> **bytesDownloaded**: `number` \| `bigint`

#### Inherited from

`TypeFromSchema.bytesDownloaded`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:175

***

### platformCode

> **platformCode**: `null` \| `number` \| `bigint`

#### Inherited from

`TypeFromSchema.platformCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:177

***

### progressPercent

> **progressPercent**: `null` \| `number`

#### Inherited from

`TypeFromSchema.progressPercent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:176

***

### softwareVersion

> **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:174
