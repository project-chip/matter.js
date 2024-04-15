[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AudioOutput](../modules/exports_cluster.AudioOutput.md) / OutputInfoStruct

# Interface: OutputInfoStruct

[exports/cluster](../modules/exports_cluster.md).[AudioOutput](../modules/exports_cluster.AudioOutput.md).OutputInfoStruct

This contains information about an output.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvOutputInfoStruct`](../modules/exports_cluster.AudioOutput.md#tlvoutputinfostruct)\>

  ↳ **`OutputInfoStruct`**

## Table of contents

### Properties

- [index](exports_cluster.AudioOutput.OutputInfoStruct.md#index)
- [name](exports_cluster.AudioOutput.OutputInfoStruct.md#name)
- [outputType](exports_cluster.AudioOutput.OutputInfoStruct.md#outputtype)

## Properties

### index

• **index**: `number`

This shall indicate the unique index into the list of outputs.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:56

___

### name

• **name**: `string`

The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank,
but SHOULD be provided when known.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1.3

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:69

___

### outputType

• **outputType**: [`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)

This shall indicate the type of output

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1.2

#### Inherited from

TypeFromSchema.outputType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:62
