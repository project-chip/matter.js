[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`T`, `F`\>

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
- [timed](exports_cluster.ConditionalFixedAttribute.md#timed)
- [unknown](exports_cluster.ConditionalFixedAttribute.md#unknown)
- [writable](exports_cluster.ConditionalFixedAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[default](exports_cluster.OptionalFixedAttribute.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[fabricScoped](exports_cluster.OptionalFixedAttribute.md#fabricscoped)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### fixed

• **fixed**: ``true``

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[fixed](exports_cluster.OptionalFixedAttribute.md#fixed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:79

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[id](exports_cluster.OptionalFixedAttribute.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[isConditional](exports_cluster.OptionalFixedAttribute.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:82

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[mandatoryIf](exports_cluster.OptionalFixedAttribute.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[omitChanges](exports_cluster.OptionalFixedAttribute.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[optional](exports_cluster.OptionalFixedAttribute.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[optionalIf](exports_cluster.OptionalFixedAttribute.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[persistent](exports_cluster.OptionalFixedAttribute.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[readAcl](exports_cluster.OptionalFixedAttribute.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[scene](exports_cluster.OptionalFixedAttribute.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[schema](exports_cluster.OptionalFixedAttribute.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[timed](exports_cluster.OptionalFixedAttribute.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[unknown](exports_cluster.OptionalFixedAttribute.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: `boolean`

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[writable](exports_cluster.OptionalFixedAttribute.md#writable)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalFixedAttribute](exports_cluster.OptionalFixedAttribute.md).[writeAcl](exports_cluster.OptionalFixedAttribute.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
