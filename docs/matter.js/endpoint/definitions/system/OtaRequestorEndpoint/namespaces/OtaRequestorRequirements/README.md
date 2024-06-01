[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/OtaRequestorEndpoint](../../README.md) / OtaRequestorRequirements

# Namespace: OtaRequestorRequirements

## Variables

### OtaSoftwareUpdateProviderBehavior

> `const` **OtaSoftwareUpdateProviderBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateProviderInterface`](../../../../../../behavior/definitions/ota-software-update-provider/export/README.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](../../../../../../behavior/definitions/ota-software-update-provider/export/README.md#otasoftwareupdateproviderinterface)\> = `BaseOtaSoftwareUpdateProviderBehavior`

The OtaSoftwareUpdateProvider cluster is required by the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateProviderBehavior](README.md#otasoftwareupdateproviderbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L40)

***

### OtaSoftwareUpdateRequestorServer

> `const` **OtaSoftwareUpdateRequestorServer**: *typeof* [`OtaSoftwareUpdateRequestorServer`](../../../../../../behavior/definitions/ota-software-update-requestor/export/classes/OtaSoftwareUpdateRequestorServer.md) = `BaseOtaSoftwareUpdateRequestorServer`

The OtaSoftwareUpdateRequestor cluster is required by the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateRequestorServer](README.md#otasoftwareupdaterequestorserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L33)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.OtaSoftwareUpdateProvider

> **OtaSoftwareUpdateProvider**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OtaSoftwareUpdateProvider/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateProviderInterface`](../../../../../../behavior/definitions/ota-software-update-provider/export/README.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](../../../../../../behavior/definitions/ota-software-update-provider/export/README.md#otasoftwareupdateproviderinterface)\> = `OtaSoftwareUpdateProviderBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L50)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.OtaSoftwareUpdateRequestor

> **OtaSoftwareUpdateRequestor**: *typeof* [`OtaSoftwareUpdateRequestorServer`](../../../../../../behavior/definitions/ota-software-update-requestor/export/classes/OtaSoftwareUpdateRequestorServer.md) = `OtaSoftwareUpdateRequestorServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L45)
