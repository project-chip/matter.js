[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / QueryImageResponse

# Interface: QueryImageResponse

## See

MatterSpecification.v11.Core § 11.19.6.5.10

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvQueryImageResponse`](../README.md#tlvqueryimageresponse)\>

## Properties

### delayedActionTime?

> `optional` **delayedActionTime**: `number`

#### Inherited from

`TypeFromSchema.delayedActionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:87

***

### imageUri?

> `optional` **imageUri**: `string`

#### Inherited from

`TypeFromSchema.imageUri`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:88

***

### metadataForRequestor?

> `optional` **metadataForRequestor**: `Uint8Array`

#### Inherited from

`TypeFromSchema.metadataForRequestor`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:93

***

### softwareVersion?

> `optional` **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:89

***

### softwareVersionString?

> `optional` **softwareVersionString**: `string`

#### Inherited from

`TypeFromSchema.softwareVersionString`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:90

***

### status

> **status**: [`Status`](../enumerations/Status.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:86

***

### updateToken?

> `optional` **updateToken**: `Uint8Array`

#### Inherited from

`TypeFromSchema.updateToken`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:91

***

### userConsentNeeded?

> `optional` **userConsentNeeded**: `boolean`

#### Inherited from

`TypeFromSchema.userConsentNeeded`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:92
