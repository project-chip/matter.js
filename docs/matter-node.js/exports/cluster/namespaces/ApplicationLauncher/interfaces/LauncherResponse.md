[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ApplicationLauncher](../README.md) / LauncherResponse

# Interface: LauncherResponse

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

## See

MatterSpecification.v11.Cluster § 6.4.4.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLauncherResponse`](../README.md#tlvlauncherresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall specify Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.4.4.4.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:164

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.4.4.4.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:158
