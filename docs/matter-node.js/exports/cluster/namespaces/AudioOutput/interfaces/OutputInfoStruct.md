[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AudioOutput](../README.md) / OutputInfoStruct

# Interface: OutputInfoStruct

This contains information about an output.

## See

MatterSpecification.v11.Cluster § 6.5.5.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvOutputInfoStruct`](../README.md#tlvoutputinfostruct)\>

## Properties

### index

> **index**: `number`

This shall indicate the unique index into the list of outputs.

#### See

MatterSpecification.v11.Cluster § 6.5.5.1.1

#### Inherited from

`TypeFromSchema.index`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:56

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

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:69

***

### outputType

> **outputType**: [`OutputType`](../enumerations/OutputType.md)

This shall indicate the type of output

#### See

MatterSpecification.v11.Cluster § 6.5.5.1.2

#### Inherited from

`TypeFromSchema.outputType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:62
