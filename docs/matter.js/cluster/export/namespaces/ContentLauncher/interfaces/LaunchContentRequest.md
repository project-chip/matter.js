[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / LaunchContentRequest

# Interface: LaunchContentRequest

Input to the ContentLauncher launchContent command

## See

MatterSpecification.v11.Cluster § 6.7.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLaunchContentRequest`](../README.md#tlvlaunchcontentrequest)\>

## Properties

### autoPlay

> **autoPlay**: `boolean`

This shall indicate whether to automatically start playing content, where: * TRUE means best match should
start playing automatically. * FALSE means matches should be displayed on screen for user selection.

#### See

MatterSpecification.v11.Cluster § 6.7.4.1.2

#### Inherited from

`TypeFromSchema.autoPlay`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:487](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L487)

***

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.7.4.1.3

#### Inherited from

`TypeFromSchema.data`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:494](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L494)

***

### search

> **search**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This shall indicate the content to launch.

#### See

MatterSpecification.v11.Cluster § 6.7.4.1.1

#### Type declaration

##### parameterList

> **parameterList**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

###### See

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Inherited from

`TypeFromSchema.search`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:479](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L479)
