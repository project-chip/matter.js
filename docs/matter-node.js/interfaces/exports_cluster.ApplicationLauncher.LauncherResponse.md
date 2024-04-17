[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / LauncherResponse

# Interface: LauncherResponse

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).LauncherResponse

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLauncherResponse`](../modules/exports_cluster.ApplicationLauncher.md#tlvlauncherresponse)\>

  ↳ **`LauncherResponse`**

## Table of contents

### Properties

- [data](exports_cluster.ApplicationLauncher.LauncherResponse.md#data)
- [status](exports_cluster.ApplicationLauncher.LauncherResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall specify Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:164

___

### status

• **status**: [`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:158
