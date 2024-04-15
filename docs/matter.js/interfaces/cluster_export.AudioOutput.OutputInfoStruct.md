[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AudioOutput](../modules/cluster_export.AudioOutput.md) / OutputInfoStruct

# Interface: OutputInfoStruct

[cluster/export](../modules/cluster_export.md).[AudioOutput](../modules/cluster_export.AudioOutput.md).OutputInfoStruct

This contains information about an output.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOutputInfoStruct`](../modules/cluster_export.AudioOutput.md#tlvoutputinfostruct)\>

  ↳ **`OutputInfoStruct`**

## Table of contents

### Properties

- [index](cluster_export.AudioOutput.OutputInfoStruct.md#index)
- [name](cluster_export.AudioOutput.OutputInfoStruct.md#name)
- [outputType](cluster_export.AudioOutput.OutputInfoStruct.md#outputtype)

## Properties

### index

• **index**: `number`

This shall indicate the unique index into the list of outputs.

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L64)

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

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L79)

___

### outputType

• **outputType**: [`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)

This shall indicate the type of output

**`See`**

MatterSpecification.v11.Cluster § 6.5.5.1.2

#### Inherited from

TypeFromSchema.outputType

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L71)
