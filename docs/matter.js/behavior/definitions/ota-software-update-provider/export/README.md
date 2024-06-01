[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/ota-software-update-provider/export

# behavior/definitions/ota-software-update-provider/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [OtaSoftwareUpdateProviderBehavior](namespaces/OtaSoftwareUpdateProviderBehavior/README.md)
- [OtaSoftwareUpdateProviderInterface](namespaces/OtaSoftwareUpdateProviderInterface/README.md)

### Classes

- [OtaSoftwareUpdateProviderServer](classes/OtaSoftwareUpdateProviderServer.md)

### Interfaces

- [OtaSoftwareUpdateProviderBehavior](interfaces/OtaSoftwareUpdateProviderBehavior.md)

## Type Aliases

### ApplyUpdateRequest

> **ApplyUpdateRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvApplyUpdateRequest`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/README.md#tlvapplyupdaterequest)\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.19

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L29)

***

### ApplyUpdateResponse

> **ApplyUpdateResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvApplyUpdateResponse`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/README.md#tlvapplyupdateresponse)\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.22

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L34)

***

### NotifyUpdateAppliedRequest

> **NotifyUpdateAppliedRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNotifyUpdateAppliedRequest`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/README.md#tlvnotifyupdateappliedrequest)\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.25

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L39)

***

### OtaSoftwareUpdateProviderInterface

> **OtaSoftwareUpdateProviderInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L41)

***

### QueryImageRequest

> **QueryImageRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvQueryImageRequest`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/README.md#tlvqueryimagerequest)\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match
the OTA Requestor’s constraints provided in the payload fields.

#### See

MatterSpecification.v11.Core § 11.19.6.5.1

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L19)

***

### QueryImageResponse

> **QueryImageResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvQueryImageResponse`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/README.md#tlvqueryimageresponse)\>

#### See

MatterSpecification.v11.Core § 11.19.6.5.10

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L24)

## Variables

### OtaSoftwareUpdateProviderBehavior

> `const` **OtaSoftwareUpdateProviderBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateProviderInterface`](README.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](README.md#otasoftwareupdateproviderinterface)\>

OtaSoftwareUpdateProviderBehavior is the base class for objects that support interaction with OtaSoftwareUpdateProvider.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L17)
