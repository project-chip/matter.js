[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ModeSelect](../modules/exports_cluster.ModeSelect.md) / ModeOptionStruct

# Interface: ModeOptionStruct

[exports/cluster](../modules/exports_cluster.md).[ModeSelect](../modules/exports_cluster.ModeSelect.md).ModeOptionStruct

This is a struct representing a possible mode of the server.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvModeOptionStruct`](../modules/exports_cluster.ModeSelect.md#tlvmodeoptionstruct)\>

  ↳ **`ModeOptionStruct`**

## Table of contents

### Properties

- [label](exports_cluster.ModeSelect.ModeOptionStruct.md#label)
- [mode](exports_cluster.ModeSelect.ModeOptionStruct.md#mode)
- [semanticTags](exports_cluster.ModeSelect.ModeOptionStruct.md#semantictags)

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

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:57

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

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:64

___

### semanticTags

• **semanticTags**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid)\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[]

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

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:81
