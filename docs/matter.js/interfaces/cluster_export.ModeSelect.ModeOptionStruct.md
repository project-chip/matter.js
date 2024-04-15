[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ModeSelect](../modules/cluster_export.ModeSelect.md) / ModeOptionStruct

# Interface: ModeOptionStruct

[cluster/export](../modules/cluster_export.md).[ModeSelect](../modules/cluster_export.ModeSelect.md).ModeOptionStruct

This is a struct representing a possible mode of the server.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvModeOptionStruct`](../modules/cluster_export.ModeSelect.md#tlvmodeoptionstruct)\>

  ↳ **`ModeOptionStruct`**

## Table of contents

### Properties

- [label](cluster_export.ModeSelect.ModeOptionStruct.md#label)
- [mode](cluster_export.ModeSelect.ModeOptionStruct.md#mode)
- [semanticTags](cluster_export.ModeSelect.ModeOptionStruct.md#semantictags)

## Properties

### label

• **label**: `string`

This field is readable text that describes the mode option that can be used by a client to indicate to the
user what this option means. This field is meant to be readable and understandable by the user.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1.1

#### Inherited from

TypeFromSchema.label

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L76)

___

### mode

• **mode**: `number`

The Mode field is used to identify the mode option. The value shall be unique for every item in the
SupportedModes attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1.2

#### Inherited from

TypeFromSchema.mode

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L84)

___

### semanticTags

• **semanticTags**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid)\> ; `value`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]

This field is a list of semantic tags that map to the mode option. This may be used by clients to determine
the meaning of the mode option as defined in a standard or manufacturer specific namespace. Semantic tags
can help clients look for options that meet certain criteria. A semantic tag shall be either a standard tag
or manufacturer specific tag as defined in each SemanticTagStruct list entry.

A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of standard and
manufacturer specific semantic tags.

All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute.

For example: A mode labeled "100%" can have both the HIGH (MS) and MAX (standard) semantic tag. Clients
seeking the option for either HIGH or MAX will find the same option in this case.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1.3

#### Inherited from

TypeFromSchema.semanticTags

#### Defined in

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L102)
