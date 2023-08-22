[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalWritableAttribute

# Interface: OptionalWritableAttribute<T, F\>

[<internal>](../modules/internal_.md).OptionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](../modules/internal_.md#optionalattribute)<`T`, `F`\>

  ↳ **`OptionalWritableAttribute`**

## Table of contents

### Properties

- [default](internal_.OptionalWritableAttribute.md#default)
- [fabricScoped](internal_.OptionalWritableAttribute.md#fabricscoped)
- [fixed](internal_.OptionalWritableAttribute.md#fixed)
- [id](internal_.OptionalWritableAttribute.md#id)
- [isConditional](internal_.OptionalWritableAttribute.md#isconditional)
- [mandatoryIf](internal_.OptionalWritableAttribute.md#mandatoryif)
- [omitChanges](internal_.OptionalWritableAttribute.md#omitchanges)
- [optional](internal_.OptionalWritableAttribute.md#optional)
- [optionalIf](internal_.OptionalWritableAttribute.md#optionalif)
- [persistent](internal_.OptionalWritableAttribute.md#persistent)
- [readAcl](internal_.OptionalWritableAttribute.md#readacl)
- [scene](internal_.OptionalWritableAttribute.md#scene)
- [schema](internal_.OptionalWritableAttribute.md#schema)
- [unknown](internal_.OptionalWritableAttribute.md#unknown)
- [writable](internal_.OptionalWritableAttribute.md#writable)
- [writeAcl](internal_.OptionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalAttribute.default

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalAttribute.fabricScoped

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalAttribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

OptionalAttribute.id

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

OptionalAttribute.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalAttribute.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalAttribute.omitChanges

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalAttribute.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalAttribute.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalAttribute.persistent

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

OptionalAttribute.readAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalAttribute.scene

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

OptionalAttribute.schema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalAttribute.unknown

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Overrides

OptionalAttribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
