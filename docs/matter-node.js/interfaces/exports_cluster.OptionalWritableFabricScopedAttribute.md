[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`T`, `F`\>

  ↳ **`OptionalWritableFabricScopedAttribute`**

  ↳↳ [`ConditionalWritableFabricScopedAttribute`](exports_cluster.ConditionalWritableFabricScopedAttribute.md)

## Table of contents

### Properties

- [default](exports_cluster.OptionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](exports_cluster.OptionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](exports_cluster.OptionalWritableFabricScopedAttribute.md#fixed)
- [id](exports_cluster.OptionalWritableFabricScopedAttribute.md#id)
- [isConditional](exports_cluster.OptionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.OptionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](exports_cluster.OptionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](exports_cluster.OptionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#readacl)
- [scene](exports_cluster.OptionalWritableFabricScopedAttribute.md#scene)
- [schema](exports_cluster.OptionalWritableFabricScopedAttribute.md#schema)
- [timed](exports_cluster.OptionalWritableFabricScopedAttribute.md#timed)
- [unknown](exports_cluster.OptionalWritableFabricScopedAttribute.md#unknown)
- [writable](exports_cluster.OptionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[default](exports_cluster.OptionalWritableAttribute.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[fabricScoped](exports_cluster.OptionalWritableAttribute.md#fabricscoped)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:67

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[fixed](exports_cluster.OptionalWritableAttribute.md#fixed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[id](exports_cluster.OptionalWritableAttribute.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[isConditional](exports_cluster.OptionalWritableAttribute.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[mandatoryIf](exports_cluster.OptionalWritableAttribute.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[omitChanges](exports_cluster.OptionalWritableAttribute.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[optional](exports_cluster.OptionalWritableAttribute.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[optionalIf](exports_cluster.OptionalWritableAttribute.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[persistent](exports_cluster.OptionalWritableAttribute.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[readAcl](exports_cluster.OptionalWritableAttribute.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[scene](exports_cluster.OptionalWritableAttribute.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[schema](exports_cluster.OptionalWritableAttribute.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[timed](exports_cluster.OptionalWritableAttribute.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[unknown](exports_cluster.OptionalWritableAttribute.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[writable](exports_cluster.OptionalWritableAttribute.md#writable)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:55

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](exports_cluster.OptionalWritableAttribute.md).[writeAcl](exports_cluster.OptionalWritableAttribute.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
