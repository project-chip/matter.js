[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaInput](../README.md) / InputInfoStruct

# Interface: InputInfoStruct

This contains information about an input.

## See

MatterSpecification.v11.Cluster § 6.9.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvInputInfoStruct`](../README.md#tlvinputinfostruct)\>

## Properties

### description

> **description**: `string`

This shall indicate the user editable input description, such as “Living room Playstation”. This field may
be blank, but SHOULD be provided when known.

#### See

MatterSpecification.v11.Cluster § 6.9.5.1.4

#### Inherited from

`TypeFromSchema.description`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L94)

***

### index

> **index**: `number`

This shall indicate the unique index into the list of Inputs.

#### See

MatterSpecification.v11.Cluster § 6.9.5.1.1

#### Inherited from

`TypeFromSchema.index`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L71)

***

### inputType

> **inputType**: [`InputType`](../enumerations/InputType.md)

This shall indicate the type of input

#### See

MatterSpecification.v11.Cluster § 6.9.5.1.2

#### Inherited from

`TypeFromSchema.inputType`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L78)

***

### name

> **name**: `string`

This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when
known.

#### See

MatterSpecification.v11.Cluster § 6.9.5.1.3

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L86)
