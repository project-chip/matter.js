[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / OptionalFixedAttribute

# Interface: OptionalFixedAttribute\<T, F\>

[\<internal\>](../modules/internal_.md).OptionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](internal_.OptionalAttribute.md)\<`T`, `F`\>

  ↳ **`OptionalFixedAttribute`**

## Table of contents

### Properties

- [default](internal_.OptionalFixedAttribute.md#default)
- [fabricScoped](internal_.OptionalFixedAttribute.md#fabricscoped)
- [fixed](internal_.OptionalFixedAttribute.md#fixed)
- [id](internal_.OptionalFixedAttribute.md#id)
- [isConditional](internal_.OptionalFixedAttribute.md#isconditional)
- [mandatoryIf](internal_.OptionalFixedAttribute.md#mandatoryif)
- [omitChanges](internal_.OptionalFixedAttribute.md#omitchanges)
- [optional](internal_.OptionalFixedAttribute.md#optional)
- [optionalIf](internal_.OptionalFixedAttribute.md#optionalif)
- [persistent](internal_.OptionalFixedAttribute.md#persistent)
- [readAcl](internal_.OptionalFixedAttribute.md#readacl)
- [scene](internal_.OptionalFixedAttribute.md#scene)
- [schema](internal_.OptionalFixedAttribute.md#schema)
- [timed](internal_.OptionalFixedAttribute.md#timed)
- [unknown](internal_.OptionalFixedAttribute.md#unknown)
- [writable](internal_.OptionalFixedAttribute.md#writable)
- [writeAcl](internal_.OptionalFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[default](internal_.OptionalAttribute.md#default)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:38

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[fabricScoped](internal_.OptionalAttribute.md#fabricscoped)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### fixed

• **fixed**: ``true``

#### Overrides

[OptionalAttribute](internal_.OptionalAttribute.md).[fixed](internal_.OptionalAttribute.md#fixed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:78

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[id](internal_.OptionalAttribute.md#id)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[isConditional](internal_.OptionalAttribute.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[mandatoryIf](internal_.OptionalAttribute.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[omitChanges](internal_.OptionalAttribute.md#omitchanges)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[optional](internal_.OptionalAttribute.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:45

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[optionalIf](internal_.OptionalAttribute.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[persistent](internal_.OptionalAttribute.md#persistent)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[readAcl](internal_.OptionalAttribute.md#readacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[scene](internal_.OptionalAttribute.md#scene)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[schema](internal_.OptionalAttribute.md#schema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[timed](internal_.OptionalAttribute.md#timed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[unknown](internal_.OptionalAttribute.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### writable

• **writable**: `boolean`

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[writable](internal_.OptionalAttribute.md#writable)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[OptionalAttribute](internal_.OptionalAttribute.md).[writeAcl](internal_.OptionalAttribute.md#writeacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:37
