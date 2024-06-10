[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute\<T, F\>

[\<internal\>](../modules/internal_.md).OptionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](internal_.OptionalWritableAttribute.md)\<`T`, `F`\>

  ↳ **`OptionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](internal_.OptionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](internal_.OptionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](internal_.OptionalWritableFabricScopedAttribute.md#fixed)
- [id](internal_.OptionalWritableFabricScopedAttribute.md#id)
- [isConditional](internal_.OptionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](internal_.OptionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](internal_.OptionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](internal_.OptionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](internal_.OptionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](internal_.OptionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](internal_.OptionalWritableFabricScopedAttribute.md#readacl)
- [scene](internal_.OptionalWritableFabricScopedAttribute.md#scene)
- [schema](internal_.OptionalWritableFabricScopedAttribute.md#schema)
- [timed](internal_.OptionalWritableFabricScopedAttribute.md#timed)
- [unknown](internal_.OptionalWritableFabricScopedAttribute.md#unknown)
- [writable](internal_.OptionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](internal_.OptionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[default](internal_.OptionalWritableAttribute.md#default)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[fabricScoped](internal_.OptionalWritableAttribute.md#fabricscoped)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:67

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[fixed](internal_.OptionalWritableAttribute.md#fixed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[id](internal_.OptionalWritableAttribute.md#id)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[isConditional](internal_.OptionalWritableAttribute.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[mandatoryIf](internal_.OptionalWritableAttribute.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[omitChanges](internal_.OptionalWritableAttribute.md#omitchanges)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[optional](internal_.OptionalWritableAttribute.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:46

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[optionalIf](internal_.OptionalWritableAttribute.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[persistent](internal_.OptionalWritableAttribute.md#persistent)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[readAcl](internal_.OptionalWritableAttribute.md#readacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[scene](internal_.OptionalWritableAttribute.md#scene)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[schema](internal_.OptionalWritableAttribute.md#schema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[timed](internal_.OptionalWritableAttribute.md#timed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[unknown](internal_.OptionalWritableAttribute.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[writable](internal_.OptionalWritableAttribute.md#writable)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:55

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](internal_.OptionalWritableAttribute.md).[writeAcl](internal_.OptionalWritableAttribute.md#writeacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:38
