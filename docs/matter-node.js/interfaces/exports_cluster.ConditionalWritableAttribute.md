[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalWritableAttribute

# Interface: ConditionalWritableAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`T`, `F`\>

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
- [unknown](exports_cluster.ConditionalWritableAttribute.md#unknown)
- [writable](exports_cluster.ConditionalWritableAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalWritableAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

OptionalWritableAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalWritableAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:56

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
