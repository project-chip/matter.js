[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/ota-software-update-requestor/export

# behavior/definitions/ota-software-update-requestor/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [OtaSoftwareUpdateRequestorBehavior](namespaces/OtaSoftwareUpdateRequestorBehavior/README.md)
- [OtaSoftwareUpdateRequestorInterface](namespaces/OtaSoftwareUpdateRequestorInterface/README.md)

### Classes

- [OtaSoftwareUpdateRequestorServer](classes/OtaSoftwareUpdateRequestorServer.md)

### Interfaces

- [OtaSoftwareUpdateRequestorBehavior](interfaces/OtaSoftwareUpdateRequestorBehavior.md)

## Type Aliases

### AnnounceOtaProviderRequest

> **AnnounceOtaProviderRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAnnounceOtaProviderRequest`](../../../../cluster/export/namespaces/OtaSoftwareUpdateRequestor/README.md#tlvannounceotaproviderrequest)\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

#### See

MatterSpecification.v11.Core § 11.19.7.6.1

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L22)

***

### OtaSoftwareUpdateRequestorInterface

> **OtaSoftwareUpdateRequestorInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L24)

## Variables

### OtaSoftwareUpdateRequestorBehavior

> `const` **OtaSoftwareUpdateRequestorBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/OtaSoftwareUpdateRequestor/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateRequestorInterface`](README.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](README.md#otasoftwareupdaterequestorinterface)\>

OtaSoftwareUpdateRequestorBehavior is the base class for objects that support interaction with OtaSoftwareUpdateRequestor.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts#L17)
