[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / FixedAttribute

# Interface: FixedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).FixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `F`\>

  ↳ **`FixedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.FixedAttribute.md#default)
- [fabricScoped](exports_cluster.FixedAttribute.md#fabricscoped)
- [fixed](exports_cluster.FixedAttribute.md#fixed)
- [id](exports_cluster.FixedAttribute.md#id)
- [isConditional](exports_cluster.FixedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.FixedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.FixedAttribute.md#omitchanges)
- [optional](exports_cluster.FixedAttribute.md#optional)
- [optionalIf](exports_cluster.FixedAttribute.md#optionalif)
- [persistent](exports_cluster.FixedAttribute.md#persistent)
- [readAcl](exports_cluster.FixedAttribute.md#readacl)
- [scene](exports_cluster.FixedAttribute.md#scene)
- [schema](exports_cluster.FixedAttribute.md#schema)
- [unknown](exports_cluster.FixedAttribute.md#unknown)
- [writable](exports_cluster.FixedAttribute.md#writable)
- [writeAcl](exports_cluster.FixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

Attribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: ``true``

#### Overrides

Attribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:71

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

Attribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Attribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Attribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
