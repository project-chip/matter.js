[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / LauncherResponse

# Interface: LauncherResponse

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

## See

MatterSpecification.v11.Cluster § 6.7.4.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLauncherResponse`](../README.md#tlvlauncherresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.7.4.3.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:773

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.7.4.3.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:767
