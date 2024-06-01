[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute\<T, F\>

[\<internal\>](../modules/internal_.md).WritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](internal_.WritableAttribute.md)\<`T`, `F`\>

  ↳ **`WritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](internal_.WritableFabricScopedAttribute.md#default)
- [fabricScoped](internal_.WritableFabricScopedAttribute.md#fabricscoped)
- [fixed](internal_.WritableFabricScopedAttribute.md#fixed)
- [id](internal_.WritableFabricScopedAttribute.md#id)
- [isConditional](internal_.WritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](internal_.WritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](internal_.WritableFabricScopedAttribute.md#omitchanges)
- [optional](internal_.WritableFabricScopedAttribute.md#optional)
- [optionalIf](internal_.WritableFabricScopedAttribute.md#optionalif)
- [persistent](internal_.WritableFabricScopedAttribute.md#persistent)
- [readAcl](internal_.WritableFabricScopedAttribute.md#readacl)
- [scene](internal_.WritableFabricScopedAttribute.md#scene)
- [schema](internal_.WritableFabricScopedAttribute.md#schema)
- [timed](internal_.WritableFabricScopedAttribute.md#timed)
- [unknown](internal_.WritableFabricScopedAttribute.md#unknown)
- [writable](internal_.WritableFabricScopedAttribute.md#writable)
- [writeAcl](internal_.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[default](internal_.WritableAttribute.md#default)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

[WritableAttribute](internal_.WritableAttribute.md).[fabricScoped](internal_.WritableAttribute.md#fabricscoped)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:64

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[fixed](internal_.WritableAttribute.md#fixed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[id](internal_.WritableAttribute.md#id)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[isConditional](internal_.WritableAttribute.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[mandatoryIf](internal_.WritableAttribute.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[omitChanges](internal_.WritableAttribute.md#omitchanges)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[optional](internal_.WritableAttribute.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:29

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[optionalIf](internal_.WritableAttribute.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[persistent](internal_.WritableAttribute.md#persistent)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[readAcl](internal_.WritableAttribute.md#readacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[scene](internal_.WritableAttribute.md#scene)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[schema](internal_.WritableAttribute.md#schema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[timed](internal_.WritableAttribute.md#timed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[unknown](internal_.WritableAttribute.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: ``true``

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[writable](internal_.WritableAttribute.md#writable)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:52

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[WritableAttribute](internal_.WritableAttribute.md).[writeAcl](internal_.WritableAttribute.md#writeacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:38
