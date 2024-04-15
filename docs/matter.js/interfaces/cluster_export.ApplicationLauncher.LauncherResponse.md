[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / LauncherResponse

# Interface: LauncherResponse

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).LauncherResponse

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLauncherResponse`](../modules/cluster_export.ApplicationLauncher.md#tlvlauncherresponse)\>

  ↳ **`LauncherResponse`**

## Table of contents

### Properties

- [data](cluster_export.ApplicationLauncher.LauncherResponse.md#data)
- [status](cluster_export.ApplicationLauncher.LauncherResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall specify Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L145)

___

### status

• **status**: [`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L138)
