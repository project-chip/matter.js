[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`T`, `F`\>

  ↳ **`ConditionalFixedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.ConditionalFixedAttribute.md#default)
- [fabricScoped](exports_cluster.ConditionalFixedAttribute.md#fabricscoped)
- [fixed](exports_cluster.ConditionalFixedAttribute.md#fixed)
- [id](exports_cluster.ConditionalFixedAttribute.md#id)
- [isConditional](exports_cluster.ConditionalFixedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalFixedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.ConditionalFixedAttribute.md#omitchanges)
- [optional](exports_cluster.ConditionalFixedAttribute.md#optional)
- [optionalIf](exports_cluster.ConditionalFixedAttribute.md#optionalif)
- [persistent](exports_cluster.ConditionalFixedAttribute.md#persistent)
- [readAcl](exports_cluster.ConditionalFixedAttribute.md#readacl)
- [scene](exports_cluster.ConditionalFixedAttribute.md#scene)
- [schema](exports_cluster.ConditionalFixedAttribute.md#schema)
- [unknown](exports_cluster.ConditionalFixedAttribute.md#unknown)
- [writable](exports_cluster.ConditionalFixedAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalFixedAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalFixedAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: ``true``

#### Inherited from

OptionalFixedAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:77

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

OptionalFixedAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalFixedAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:80

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalFixedAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalFixedAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalFixedAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalFixedAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalFixedAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalFixedAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalFixedAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalFixedAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalFixedAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: `boolean`

#### Inherited from

OptionalFixedAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalFixedAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
