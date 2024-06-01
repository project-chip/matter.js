[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FixedAttribute

# Interface: FixedAttribute\<T, F\>

[\<internal\>](../modules/internal_.md).FixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Attribute`](internal_.Attribute.md)\<`T`, `F`\>

  ↳ **`FixedAttribute`**

## Table of contents

### Properties

- [default](internal_.FixedAttribute.md#default)
- [fabricScoped](internal_.FixedAttribute.md#fabricscoped)
- [fixed](internal_.FixedAttribute.md#fixed)
- [id](internal_.FixedAttribute.md#id)
- [isConditional](internal_.FixedAttribute.md#isconditional)
- [mandatoryIf](internal_.FixedAttribute.md#mandatoryif)
- [omitChanges](internal_.FixedAttribute.md#omitchanges)
- [optional](internal_.FixedAttribute.md#optional)
- [optionalIf](internal_.FixedAttribute.md#optionalif)
- [persistent](internal_.FixedAttribute.md#persistent)
- [readAcl](internal_.FixedAttribute.md#readacl)
- [scene](internal_.FixedAttribute.md#scene)
- [schema](internal_.FixedAttribute.md#schema)
- [timed](internal_.FixedAttribute.md#timed)
- [unknown](internal_.FixedAttribute.md#unknown)
- [writable](internal_.FixedAttribute.md#writable)
- [writeAcl](internal_.FixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[Attribute](internal_.Attribute.md).[default](internal_.Attribute.md#default)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[fabricScoped](internal_.Attribute.md#fabricscoped)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:36

___

### fixed

• **fixed**: ``true``

#### Overrides

[Attribute](internal_.Attribute.md).[fixed](internal_.Attribute.md#fixed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:73

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[Attribute](internal_.Attribute.md).[id](internal_.Attribute.md#id)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[isConditional](internal_.Attribute.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Attribute](internal_.Attribute.md).[mandatoryIf](internal_.Attribute.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[omitChanges](internal_.Attribute.md#omitchanges)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[optional](internal_.Attribute.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Attribute](internal_.Attribute.md).[optionalIf](internal_.Attribute.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[persistent](internal_.Attribute.md#persistent)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[Attribute](internal_.Attribute.md).[readAcl](internal_.Attribute.md#readacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[scene](internal_.Attribute.md#scene)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[Attribute](internal_.Attribute.md).[schema](internal_.Attribute.md#schema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[timed](internal_.Attribute.md#timed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[unknown](internal_.Attribute.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: `boolean`

#### Inherited from

[Attribute](internal_.Attribute.md).[writable](internal_.Attribute.md#writable)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:31

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[Attribute](internal_.Attribute.md).[writeAcl](internal_.Attribute.md#writeacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:38
