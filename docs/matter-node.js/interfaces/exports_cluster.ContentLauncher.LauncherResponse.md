[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / LauncherResponse

# Interface: LauncherResponse

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).LauncherResponse

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLauncherResponse`](../modules/exports_cluster.ContentLauncher.md#tlvlauncherresponse)\>

  ↳ **`LauncherResponse`**

## Table of contents

### Properties

- [data](exports_cluster.ContentLauncher.LauncherResponse.md#data)
- [status](exports_cluster.ContentLauncher.LauncherResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:773

___

### status

• **status**: [`Status`](../enums/exports_cluster.ContentLauncher.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.3.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:767
