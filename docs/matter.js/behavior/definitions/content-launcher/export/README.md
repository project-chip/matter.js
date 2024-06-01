[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/content-launcher/export

# behavior/definitions/content-launcher/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ContentLauncherBehavior](namespaces/ContentLauncherBehavior/README.md)
- [ContentLauncherInterface](namespaces/ContentLauncherInterface/README.md)

### Classes

- [ContentLauncherServer](classes/ContentLauncherServer.md)

### Interfaces

- [ContentLauncherBehavior](interfaces/ContentLauncherBehavior.md)

## Type Aliases

### ContentLauncherInterface

> **ContentLauncherInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L41)

***

### LaunchContentRequest

> **LaunchContentRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLaunchContentRequest`](../../../../cluster/export/namespaces/ContentLauncher/README.md#tlvlaunchcontentrequest)\>

Upon receipt, this shall launch the specified content with optional search criteria. This command returns a Launch
Response.

#### See

MatterSpecification.v11.Cluster § 6.7.4.1

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L39)

***

### LaunchUrlRequest

> **LaunchUrlRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLaunchUrlRequest`](../../../../cluster/export/namespaces/ContentLauncher/README.md#tlvlaunchurlrequest)\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

#### See

MatterSpecification.v11.Cluster § 6.7.4.2

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L22)

***

### LauncherResponse

> **LauncherResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLauncherResponse`](../../../../cluster/export/namespaces/ContentLauncher/README.md#tlvlauncherresponse)\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

#### See

MatterSpecification.v11.Cluster § 6.7.4.3

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L31)

## Variables

### ContentLauncherBehavior

> `const` **ContentLauncherBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ContentLauncher/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ContentLauncherInterface`](README.md#contentlauncherinterface)\>, [`ContentLauncherInterface`](README.md#contentlauncherinterface)\>

ContentLauncherBehavior is the base class for objects that support interaction with [ContentLauncher.Cluster](../../../../cluster/export/namespaces/ContentLauncher/README.md#cluster).

This class does not have optional features of ContentLauncher.Cluster enabled. You can enable additional features
using ContentLauncherBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts#L19)
