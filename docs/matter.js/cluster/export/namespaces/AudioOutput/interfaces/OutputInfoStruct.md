[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AudioOutput](../README.md) / OutputInfoStruct

# Interface: OutputInfoStruct

This contains information about an output.

## See

MatterSpecification.v11.Cluster § 6.5.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOutputInfoStruct`](../README.md#tlvoutputinfostruct)\>

## Properties

### index

> **index**: `number`

This shall indicate the unique index into the list of outputs.

#### See

MatterSpecification.v11.Cluster § 6.5.5.1.1

#### Inherited from

`TypeFromSchema.index`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L64)

***

### name

> **name**: `string`

The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank,
but SHOULD be provided when known.

#### See

MatterSpecification.v11.Cluster § 6.5.5.1.3

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L79)

***

### outputType

> **outputType**: [`OutputType`](../enumerations/OutputType.md)

This shall indicate the type of output

#### See

MatterSpecification.v11.Cluster § 6.5.5.1.2

#### Inherited from

`TypeFromSchema.outputType`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L71)
