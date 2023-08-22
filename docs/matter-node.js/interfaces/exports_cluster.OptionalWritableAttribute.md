[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalWritableAttribute

# Interface: OptionalWritableAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`T`, `F`\>

  ↳ **`OptionalWritableAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.OptionalWritableAttribute.md#default)
- [fabricScoped](exports_cluster.OptionalWritableAttribute.md#fabricscoped)
- [fixed](exports_cluster.OptionalWritableAttribute.md#fixed)
- [id](exports_cluster.OptionalWritableAttribute.md#id)
- [isConditional](exports_cluster.OptionalWritableAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalWritableAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.OptionalWritableAttribute.md#omitchanges)
- [optional](exports_cluster.OptionalWritableAttribute.md#optional)
- [optionalIf](exports_cluster.OptionalWritableAttribute.md#optionalif)
- [persistent](exports_cluster.OptionalWritableAttribute.md#persistent)
- [readAcl](exports_cluster.OptionalWritableAttribute.md#readacl)
- [scene](exports_cluster.OptionalWritableAttribute.md#scene)
- [schema](exports_cluster.OptionalWritableAttribute.md#schema)
- [unknown](exports_cluster.OptionalWritableAttribute.md#unknown)
- [writable](exports_cluster.OptionalWritableAttribute.md#writable)
- [writeAcl](exports_cluster.OptionalWritableAttribute.md#writeacl)

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

• **isConditional**: `boolean`

#### Inherited from

OptionalAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:38

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

• **writable**: ``true``

#### Overrides

OptionalAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
