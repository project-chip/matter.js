[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / QueryImageRequest

# Interface: QueryImageRequest

Input to the OtaSoftwareUpdateProvider queryImage command

## See

MatterSpecification.v11.Core § 11.19.6.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvQueryImageRequest`](../README.md#tlvqueryimagerequest)\>

## Properties

### hardwareVersion?

> `optional` **hardwareVersion**: `number`

#### Inherited from

`TypeFromSchema.hardwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L61)

***

### location?

> `optional` **location**: `string`

#### Inherited from

`TypeFromSchema.location`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L62)

***

### metadataForProvider?

> `optional` **metadataForProvider**: `Uint8Array`

#### Inherited from

`TypeFromSchema.metadataForProvider`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L64)

***

### productId

> **productId**: `number`

#### Inherited from

`TypeFromSchema.productId`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L58)

***

### protocolsSupported

> **protocolsSupported**: [`DownloadProtocol`](../enumerations/DownloadProtocol.md)[]

#### Inherited from

`TypeFromSchema.protocolsSupported`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L60)

***

### requestorCanConsent?

> `optional` **requestorCanConsent**: `boolean`

#### Inherited from

`TypeFromSchema.requestorCanConsent`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L63)

***

### softwareVersion

> **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L59)

***

### vendorId

> **vendorId**: [`VendorId`](../../../../../datatype/export/README.md#vendorid)

#### Inherited from

`TypeFromSchema.vendorId`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L57)
