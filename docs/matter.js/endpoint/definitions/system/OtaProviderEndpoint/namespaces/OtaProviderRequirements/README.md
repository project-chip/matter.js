[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/OtaProviderEndpoint](../../README.md) / OtaProviderRequirements

# Namespace: OtaProviderRequirements

## Variables

### OtaSoftwareUpdateProviderServer

> `const` **OtaSoftwareUpdateProviderServer**: *typeof* [`OtaSoftwareUpdateProviderServer`](../../../../../../behavior/definitions/ota-software-update-provider/export/classes/OtaSoftwareUpdateProviderServer.md) = `BaseOtaSoftwareUpdateProviderServer`

The OtaSoftwareUpdateProvider cluster is required by the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateProviderServer](README.md#otasoftwareupdateproviderserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L33)

***

### OtaSoftwareUpdateRequestorBehavior

> `const` **OtaSoftwareUpdateRequestorBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OtaSoftwareUpdateRequestor/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateRequestorInterface`](../../../../../../behavior/definitions/ota-software-update-requestor/export/README.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](../../../../../../behavior/definitions/ota-software-update-requestor/export/README.md#otasoftwareupdaterequestorinterface)\> = `BaseOtaSoftwareUpdateRequestorBehavior`

The OtaSoftwareUpdateRequestor cluster is optional per the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateRequestorBehavior](README.md#otasoftwareupdaterequestorbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L40)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.OtaSoftwareUpdateRequestor

> **OtaSoftwareUpdateRequestor**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OtaSoftwareUpdateRequestor/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`OtaSoftwareUpdateRequestorInterface`](../../../../../../behavior/definitions/ota-software-update-requestor/export/README.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](../../../../../../behavior/definitions/ota-software-update-requestor/export/README.md#otasoftwareupdaterequestorinterface)\> = `OtaSoftwareUpdateRequestorBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L50)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.OtaSoftwareUpdateProvider

> **OtaSoftwareUpdateProvider**: *typeof* [`OtaSoftwareUpdateProviderServer`](../../../../../../behavior/definitions/ota-software-update-provider/export/classes/OtaSoftwareUpdateProviderServer.md) = `OtaSoftwareUpdateProviderServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L45)
