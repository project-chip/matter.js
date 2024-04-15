[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaInput](../modules/cluster_export.MediaInput.md) / InputInfoStruct

# Interface: InputInfoStruct

[cluster/export](../modules/cluster_export.md).[MediaInput](../modules/cluster_export.MediaInput.md).InputInfoStruct

This contains information about an input.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvInputInfoStruct`](../modules/cluster_export.MediaInput.md#tlvinputinfostruct)\>

  ↳ **`InputInfoStruct`**

## Table of contents

### Properties

- [description](cluster_export.MediaInput.InputInfoStruct.md#description)
- [index](cluster_export.MediaInput.InputInfoStruct.md#index)
- [inputType](cluster_export.MediaInput.InputInfoStruct.md#inputtype)
- [name](cluster_export.MediaInput.InputInfoStruct.md#name)

## Properties

### description

• **description**: `string`

This shall indicate the user editable input description, such as “Living room Playstation”. This field may
be blank, but SHOULD be provided when known.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.4

#### Inherited from

TypeFromSchema.description

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L94)

___

### index

• **index**: `number`

This shall indicate the unique index into the list of Inputs.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L71)

___

### inputType

• **inputType**: [`InputType`](../enums/cluster_export.MediaInput.InputType.md)

This shall indicate the type of input

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.2

#### Inherited from

TypeFromSchema.inputType

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L78)

___

### name

• **name**: `string`

This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when
known.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.3

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L86)
