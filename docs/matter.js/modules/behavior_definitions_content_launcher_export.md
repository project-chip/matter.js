[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/content-launcher/export

# Module: behavior/definitions/content-launcher/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_content_launcher_export._internal_.md)

### Namespaces

- [ContentLauncherBehavior](behavior_definitions_content_launcher_export.ContentLauncherBehavior.md)
- [ContentLauncherInterface](behavior_definitions_content_launcher_export.ContentLauncherInterface.md)

### Classes

- [ContentLauncherServer](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)

### Interfaces

- [ContentLauncherBehavior](../interfaces/behavior_definitions_content_launcher_export.ContentLauncherBehavior-1.md)

### Type Aliases

- [ContentLauncherInterface](behavior_definitions_content_launcher_export.md#contentlauncherinterface)
- [LaunchContentRequest](behavior_definitions_content_launcher_export.md#launchcontentrequest)
- [LaunchUrlRequest](behavior_definitions_content_launcher_export.md#launchurlrequest)
- [LauncherResponse](behavior_definitions_content_launcher_export.md#launcherresponse)

### Variables

- [ContentLauncherBehavior](behavior_definitions_content_launcher_export.md#contentlauncherbehavior)

## Type Aliases

### ContentLauncherInterface

Ƭ **ContentLauncherInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `urlPlayback`: ``true``  } ; `methods`: [`UrlPlayback`](../interfaces/behavior_definitions_content_launcher_export.ContentLauncherInterface.UrlPlayback.md)  }, \{ `flags`: \{ `contentSearch`: ``true``  } ; `methods`: [`ContentSearch`](../interfaces/behavior_definitions_content_launcher_export.ContentLauncherInterface.ContentSearch.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L41)

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L67)

___

### LaunchContentRequest

Ƭ **LaunchContentRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLaunchContentRequest`](cluster_export.ContentLauncher.md#tlvlaunchcontentrequest)\>

Upon receipt, this shall launch the specified content with optional search criteria. This command returns a Launch
Response.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L39)

___

### LaunchUrlRequest

Ƭ **LaunchUrlRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLaunchUrlRequest`](cluster_export.ContentLauncher.md#tlvlaunchurlrequest)\>

Upon receipt, this shall launch content from the specified URL.

The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols attributes.

A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L22)

___

### LauncherResponse

Ƭ **LauncherResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLauncherResponse`](cluster_export.ContentLauncher.md#tlvlauncherresponse)\>

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherInterface.ts#L31)

## Variables

### ContentLauncherBehavior

• `Const` **ContentLauncherBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ContentLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\>, [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\>

ContentLauncherBehavior is the base class for objects that support interaction with [ContentLauncher.Cluster](cluster_export.ContentLauncher.md#cluster).

This class does not have optional features of ContentLauncher.Cluster enabled. You can enable additional features
using ContentLauncherBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/content-launcher/ContentLauncherBehavior.ts#L26)
