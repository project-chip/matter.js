[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalWritableAttribute

# Interface: ConditionalWritableAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`T`, `F`\>

  ↳ **`ConditionalWritableAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.ConditionalWritableAttribute.md#default)
- [fabricScoped](exports_cluster.ConditionalWritableAttribute.md#fabricscoped)
- [fixed](exports_cluster.ConditionalWritableAttribute.md#fixed)
- [id](exports_cluster.ConditionalWritableAttribute.md#id)
- [isConditional](exports_cluster.ConditionalWritableAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalWritableAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.ConditionalWritableAttribute.md#omitchanges)
- [optional](exports_cluster.ConditionalWritableAttribute.md#optional)
- [optionalIf](exports_cluster.ConditionalWritableAttribute.md#optionalif)
- [persistent](exports_cluster.ConditionalWritableAttribute.md#persistent)
- [readAcl](exports_cluster.ConditionalWritableAttribute.md#readacl)
- [scene](exports_cluster.ConditionalWritableAttribute.md#scene)
- [schema](exports_cluster.ConditionalWritableAttribute.md#schema)
- [timed](exports_cluster.ConditionalWritableAttribute.md#timed)
- [unknown](exports_cluster.ConditionalWritableAttribute.md#unknown)
- [writable](exports_cluster.ConditionalWritableAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[default](exports_cluster.OptionalWritableAttribute.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[fabricScoped](exports_cluster.OptionalWritableAttribute.md#fabricscoped)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[fixed](exports_cluster.OptionalWritableAttribute.md#fixed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[id](exports_cluster.OptionalWritableAttribute.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[isConditional](exports_cluster.OptionalWritableAttribute.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:57

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[mandatoryIf](exports_cluster.OptionalWritableAttribute.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[omitChanges](exports_cluster.OptionalWritableAttribute.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[optional](exports_cluster.OptionalWritableAttribute.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:45

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[optionalIf](exports_cluster.OptionalWritableAttribute.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[persistent](exports_cluster.OptionalWritableAttribute.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[readAcl](exports_cluster.OptionalWritableAttribute.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[scene](exports_cluster.OptionalWritableAttribute.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[schema](exports_cluster.OptionalWritableAttribute.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[timed](exports_cluster.OptionalWritableAttribute.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[unknown](exports_cluster.OptionalWritableAttribute.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[writable](exports_cluster.OptionalWritableAttribute.md#writable)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:54

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[writeAcl](exports_cluster.OptionalWritableAttribute.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37
