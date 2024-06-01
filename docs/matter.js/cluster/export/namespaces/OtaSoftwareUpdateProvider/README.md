[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

## Index

### Enumerations

- [ApplyUpdateAction](enumerations/ApplyUpdateAction.md)
- [DownloadProtocol](enumerations/DownloadProtocol.md)
- [Status](enumerations/Status.md)

### Interfaces

- [ApplyUpdateRequest](interfaces/ApplyUpdateRequest.md)
- [ApplyUpdateResponse](interfaces/ApplyUpdateResponse.md)
- [Cluster](interfaces/Cluster.md)
- [NotifyUpdateAppliedRequest](interfaces/NotifyUpdateAppliedRequest.md)
- [QueryImageRequest](interfaces/QueryImageRequest.md)
- [QueryImageResponse](interfaces/QueryImageResponse.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L226)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.applyUpdateRequest

> `readonly` **applyUpdateRequest**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Core § 11.19.6.5.19

##### commands.notifyUpdateApplied

> `readonly` **notifyUpdateApplied**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Core § 11.19.6.5.25

##### commands.queryImage

> `readonly` **queryImage**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA
Provider to match the OTA Requestor’s constraints provided in the payload fields.

###### See

MatterSpecification.v11.Core § 11.19.6.5.1

##### id

> `readonly` **id**: `41` = `0x29`

##### name

> `readonly` **name**: `"OtaSoftwareUpdateProvider"` = `"OtaSoftwareUpdateProvider"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L193)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L229)

***

### TlvApplyUpdateRequest

> `const` **TlvApplyUpdateRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

#### See

MatterSpecification.v11.Core § 11.19.6.5.19

#### Type declaration

##### newVersion

> **newVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### updateToken

> **updateToken**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L125)

***

### TlvApplyUpdateResponse

> `const` **TlvApplyUpdateResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.22

#### Type declaration

##### action

> **action**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ApplyUpdateAction`](enumerations/ApplyUpdateAction.md)\>

##### delayedActionTime

> **delayedActionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L163)

***

### TlvNotifyUpdateAppliedRequest

> `const` **TlvNotifyUpdateAppliedRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

#### See

MatterSpecification.v11.Core § 11.19.6.5.25

#### Type declaration

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### updateToken

> **updateToken**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L178)

***

### TlvQueryImageRequest

> `const` **TlvQueryImageRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OtaSoftwareUpdateProvider queryImage command

#### See

MatterSpecification.v11.Core § 11.19.6.5.1

#### Type declaration

##### hardwareVersion

> **hardwareVersion**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### location

> **location**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

##### metadataForProvider

> **metadataForProvider**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### productId

> **productId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### protocolsSupported

> **protocolsSupported**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DownloadProtocol`](enumerations/DownloadProtocol.md)[]\>

##### requestorCanConsent

> **requestorCanConsent**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### vendorId

> **vendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid)\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L56)

***

### TlvQueryImageResponse

> `const` **TlvQueryImageResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.10

#### Type declaration

##### delayedActionTime

> **delayedActionTime**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### imageUri

> **imageUri**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

##### metadataForRequestor

> **metadataForRequestor**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### softwareVersion

> **softwareVersion**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### softwareVersionString

> **softwareVersionString**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

##### updateToken

> **updateToken**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### userConsentNeeded

> **userConsentNeeded**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L104)
