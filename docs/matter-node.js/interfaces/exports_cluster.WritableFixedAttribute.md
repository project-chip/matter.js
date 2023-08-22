[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / WritableFixedAttribute

# Interface: WritableFixedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).WritableFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`T`, `F`\>

  ↳ **`WritableFixedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.WritableFixedAttribute.md#default)
- [fabricScoped](exports_cluster.WritableFixedAttribute.md#fabricscoped)
- [fixed](exports_cluster.WritableFixedAttribute.md#fixed)
- [id](exports_cluster.WritableFixedAttribute.md#id)
- [isConditional](exports_cluster.WritableFixedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.WritableFixedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.WritableFixedAttribute.md#omitchanges)
- [optional](exports_cluster.WritableFixedAttribute.md#optional)
- [optionalIf](exports_cluster.WritableFixedAttribute.md#optionalif)
- [persistent](exports_cluster.WritableFixedAttribute.md#persistent)
- [readAcl](exports_cluster.WritableFixedAttribute.md#readacl)
- [scene](exports_cluster.WritableFixedAttribute.md#scene)
- [schema](exports_cluster.WritableFixedAttribute.md#schema)
- [unknown](exports_cluster.WritableFixedAttribute.md#unknown)
- [writable](exports_cluster.WritableFixedAttribute.md#writable)
- [writeAcl](exports_cluster.WritableFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

WritableAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

WritableAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: ``true``

#### Overrides

WritableAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:74

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

WritableAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

WritableAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

WritableAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: `boolean`

#### Inherited from

WritableAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

WritableAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

WritableAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

WritableAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

WritableAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

WritableAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

WritableAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:50

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

WritableAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
