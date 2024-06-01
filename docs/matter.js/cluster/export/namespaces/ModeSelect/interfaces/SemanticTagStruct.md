[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ModeSelect](../README.md) / SemanticTagStruct

# Interface: SemanticTagStruct

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

## See

MatterSpecification.v11.Cluster § 1.8.8.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSemanticTagStruct`](../README.md#tlvsemantictagstruct)\>

## Properties

### mfgCode

> **mfgCode**: `null` \| [`VendorId`](../../../../../datatype/export/README.md#vendorid)

If this field is null, the Value field shall be defined in a standard namespace as indicated by the
StandardNamespace attribute. If this field is not null, it shall indicate a manufacturer code (Vendor ID),
and the Value field shall indicate a semantic tag defined by the manufacturer. Each manufacturer code
supports a single namespace of values. The same manufacturer code and semantic tag value in separate cluster
instances are part of the same namespace and have the same meaning. For example: a manufacturer tag meaning
"pinch", has the same meaning in a cluster whose purpose is to choose the amount of sugar, or amount of salt.

#### See

MatterSpecification.v11.Cluster § 1.8.8.2.2

#### Inherited from

`TypeFromSchema.mfgCode`

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L46)

***

### value

> **value**: `number`

This field shall indicate the semantic tag within a semantic tag namespace which is either manufacturer
specific or standard. For semantic tags in a standard namespace, see Standard Namespace.

#### See

MatterSpecification.v11.Cluster § 1.8.8.2.1

#### Inherited from

`TypeFromSchema.value`

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L54)
