[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ModeSelect](../modules/exports_cluster.ModeSelect.md) / SemanticTagStruct

# Interface: SemanticTagStruct

[exports/cluster](../modules/exports_cluster.md).[ModeSelect](../modules/exports_cluster.ModeSelect.md).SemanticTagStruct

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSemanticTagStruct`](../modules/exports_cluster.ModeSelect.md#tlvsemantictagstruct)\>

  ↳ **`SemanticTagStruct`**

## Table of contents

### Properties

- [mfgCode](exports_cluster.ModeSelect.SemanticTagStruct.md#mfgcode)
- [value](exports_cluster.ModeSelect.SemanticTagStruct.md#value)

## Properties

### mfgCode

• **mfgCode**: ``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid)

If this field is null, the Value field shall be defined in a standard namespace as indicated by the
StandardNamespace attribute. If this field is not null, it shall indicate a manufacturer code (Vendor ID),
and the Value field shall indicate a semantic tag defined by the manufacturer. Each manufacturer code
supports a single namespace of values. The same manufacturer code and semantic tag value in separate cluster
instances are part of the same namespace and have the same meaning. For example: a manufacturer tag meaning
"pinch", has the same meaning in a cluster whose purpose is to choose the amount of sugar, or amount of salt.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.2.2

#### Inherited from

TypeFromSchema.mfgCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:29

___

### value

• **value**: `number`

This field shall indicate the semantic tag within a semantic tag namespace which is either manufacturer
specific or standard. For semantic tags in a standard namespace, see Standard Namespace.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.2.1

#### Inherited from

TypeFromSchema.value

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:36
