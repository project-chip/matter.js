[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / LauncherResponse

# Interface: LauncherResponse

This command shall be generated in response to LaunchContent and LaunchURL commands.

WARNING TODO: Data in table above needs a max size

## See

MatterSpecification.v11.Cluster § 6.7.4.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLauncherResponse`](../README.md#tlvlauncherresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.7.4.3.2

#### Inherited from

`TypeFromSchema.data`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L286)

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.7.4.3.1

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:279](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L279)
