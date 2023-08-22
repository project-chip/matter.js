[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalAttribute

# Interface: ConditionalAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`T`, `F`\>

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
- [unknown](exports_cluster.ConditionalAttribute.md#unknown)
- [writable](exports_cluster.ConditionalAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

OptionalAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:47

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: `boolean`

#### Inherited from

OptionalAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
