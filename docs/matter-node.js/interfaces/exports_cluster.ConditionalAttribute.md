[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalAttribute

# Interface: ConditionalAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`T`, `F`\>

  ↳ **`ConditionalAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.ConditionalAttribute.md#default)
- [fabricScoped](exports_cluster.ConditionalAttribute.md#fabricscoped)
- [fixed](exports_cluster.ConditionalAttribute.md#fixed)
- [id](exports_cluster.ConditionalAttribute.md#id)
- [isConditional](exports_cluster.ConditionalAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.ConditionalAttribute.md#omitchanges)
- [optional](exports_cluster.ConditionalAttribute.md#optional)
- [optionalIf](exports_cluster.ConditionalAttribute.md#optionalif)
- [persistent](exports_cluster.ConditionalAttribute.md#persistent)
- [readAcl](exports_cluster.ConditionalAttribute.md#readacl)
- [scene](exports_cluster.ConditionalAttribute.md#scene)
- [schema](exports_cluster.ConditionalAttribute.md#schema)
- [timed](exports_cluster.ConditionalAttribute.md#timed)
- [unknown](exports_cluster.ConditionalAttribute.md#unknown)
- [writable](exports_cluster.ConditionalAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[default](exports_cluster.OptionalAttribute.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[fabricScoped](exports_cluster.OptionalAttribute.md#fabricscoped)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[fixed](exports_cluster.OptionalAttribute.md#fixed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[id](exports_cluster.OptionalAttribute.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[isConditional](exports_cluster.OptionalAttribute.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:48

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[mandatoryIf](exports_cluster.OptionalAttribute.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[omitChanges](exports_cluster.OptionalAttribute.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[optional](exports_cluster.OptionalAttribute.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:45

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[optionalIf](exports_cluster.OptionalAttribute.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[persistent](exports_cluster.OptionalAttribute.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[readAcl](exports_cluster.OptionalAttribute.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[scene](exports_cluster.OptionalAttribute.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[schema](exports_cluster.OptionalAttribute.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[timed](exports_cluster.OptionalAttribute.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[unknown](exports_cluster.OptionalAttribute.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### writable

• **writable**: `boolean`

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[writable](exports_cluster.OptionalAttribute.md#writable)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalAttribute](exports_cluster.OptionalAttribute.md).[writeAcl](exports_cluster.OptionalAttribute.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37
