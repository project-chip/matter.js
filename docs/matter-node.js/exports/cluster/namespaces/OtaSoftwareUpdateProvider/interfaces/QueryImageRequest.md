[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / QueryImageRequest

# Interface: QueryImageRequest

Input to the OtaSoftwareUpdateProvider queryImage command

## See

MatterSpecification.v11.Core § 11.19.6.5.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvQueryImageRequest`](../README.md#tlvqueryimagerequest)\>

## Properties

### hardwareVersion?

> `optional` **hardwareVersion**: `number`

#### Inherited from

`TypeFromSchema.hardwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:47

***

### location?

> `optional` **location**: `string`

#### Inherited from

`TypeFromSchema.location`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:48

***

### metadataForProvider?

> `optional` **metadataForProvider**: `Uint8Array`

#### Inherited from

`TypeFromSchema.metadataForProvider`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:50

***

### productId

> **productId**: `number`

#### Inherited from

`TypeFromSchema.productId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:44

***

### protocolsSupported

> **protocolsSupported**: [`DownloadProtocol`](../enumerations/DownloadProtocol.md)[]

#### Inherited from

`TypeFromSchema.protocolsSupported`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:46

***

### requestorCanConsent?

> `optional` **requestorCanConsent**: `boolean`

#### Inherited from

`TypeFromSchema.requestorCanConsent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:49

***

### softwareVersion

> **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:45

***

### vendorId

> **vendorId**: [`VendorId`](../../../../datatype/README.md#vendorid)

#### Inherited from

`TypeFromSchema.vendorId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:43
