[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ModeSelect](../README.md) / ModeOptionStruct

# Interface: ModeOptionStruct

This is a struct representing a possible mode of the server.

## See

MatterSpecification.v11.Cluster § 1.8.8.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvModeOptionStruct`](../README.md#tlvmodeoptionstruct)\>

## Properties

### label

> **label**: `string`

This field is readable text that describes the mode option that can be used by a client to indicate to the
user what this option means. This field is meant to be readable and understandable by the user.

#### See

MatterSpecification.v11.Cluster § 1.8.8.1.1

#### Inherited from

`TypeFromSchema.label`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:57

***

### mode

> **mode**: `number`

The Mode field is used to identify the mode option. The value shall be unique for every item in the
SupportedModes attribute.

#### See

MatterSpecification.v11.Cluster § 1.8.8.1.2

#### Inherited from

`TypeFromSchema.mode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:64

***

### semanticTags

> **semanticTags**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

This field is a list of semantic tags that map to the mode option. This may be used by clients to determine
the meaning of the mode option as defined in a standard or manufacturer specific namespace. Semantic tags
can help clients look for options that meet certain criteria. A semantic tag shall be either a standard tag
or manufacturer specific tag as defined in each SemanticTagStruct list entry.

A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of standard and
manufacturer specific semantic tags.

All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute.

For example: A mode labeled "100%" can have both the HIGH (MS) and MAX (standard) semantic tag. Clients
seeking the option for either HIGH or MAX will find the same option in this case.

#### See

MatterSpecification.v11.Cluster § 1.8.8.1.3

#### Inherited from

`TypeFromSchema.semanticTags`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:81
