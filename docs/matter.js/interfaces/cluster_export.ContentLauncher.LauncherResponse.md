[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / LauncherResponse

# Interface: LauncherResponse

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).LauncherResponse

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLauncherResponse`](../modules/cluster_export.ContentLauncher.md#tlvlauncherresponse)\>

  ↳ **`LauncherResponse`**

## Table of contents

### Properties

- [data](cluster_export.ContentLauncher.LauncherResponse.md#data)
- [status](cluster_export.ContentLauncher.LauncherResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.3.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:287](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L287)

___

### status

• **status**: [`Status`](../enums/cluster_export.ContentLauncher.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.4.3.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:280](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L280)
