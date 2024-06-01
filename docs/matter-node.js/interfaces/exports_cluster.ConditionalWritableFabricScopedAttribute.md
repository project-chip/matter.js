[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute\<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableFabricScopedAttribute`](exports_cluster.OptionalWritableFabricScopedAttribute.md)\<`T`, `F`\>

  ↳ **`ConditionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.ConditionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](exports_cluster.ConditionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](exports_cluster.ConditionalWritableFabricScopedAttribute.md#fixed)
- [id](exports_cluster.ConditionalWritableFabricScopedAttribute.md#id)
- [isConditional](exports_cluster.ConditionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.ConditionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](exports_cluster.ConditionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](exports_cluster.ConditionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](exports_cluster.ConditionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](exports_cluster.ConditionalWritableFabricScopedAttribute.md#readacl)
- [scene](exports_cluster.ConditionalWritableFabricScopedAttribute.md#scene)
- [schema](exports_cluster.ConditionalWritableFabricScopedAttribute.md#schema)
- [timed](exports_cluster.ConditionalWritableFabricScopedAttribute.md#timed)
- [unknown](exports_cluster.ConditionalWritableFabricScopedAttribute.md#unknown)
- [writable](exports_cluster.ConditionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[default](exports_cluster.OptionalWritableFabricScopedAttribute.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

___

### fabricScoped

• **fabricScoped**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[fabricScoped](exports_cluster.OptionalWritableFabricScopedAttribute.md#fabricscoped)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:67

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[fixed](exports_cluster.OptionalWritableFabricScopedAttribute.md#fixed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[id](exports_cluster.OptionalWritableFabricScopedAttribute.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[isConditional](exports_cluster.OptionalWritableFabricScopedAttribute.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:70

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[mandatoryIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[omitChanges](exports_cluster.OptionalWritableFabricScopedAttribute.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[optional](exports_cluster.OptionalWritableFabricScopedAttribute.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[optionalIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[persistent](exports_cluster.OptionalWritableFabricScopedAttribute.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[readAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[scene](exports_cluster.OptionalWritableFabricScopedAttribute.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[schema](exports_cluster.OptionalWritableFabricScopedAttribute.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[timed](exports_cluster.OptionalWritableFabricScopedAttribute.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[unknown](exports_cluster.OptionalWritableFabricScopedAttribute.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[writable](exports_cluster.OptionalWritableFabricScopedAttribute.md#writable)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:55

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalWritableFabricScopedAttribute](exports_cluster.OptionalWritableFabricScopedAttribute.md).[writeAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
