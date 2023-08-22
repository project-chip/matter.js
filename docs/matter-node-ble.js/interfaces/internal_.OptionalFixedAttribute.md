[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalFixedAttribute

# Interface: OptionalFixedAttribute<T, F\>

[<internal>](../modules/internal_.md).OptionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](../modules/internal_.md#optionalattribute)<`T`, `F`\>

  ↳ **`OptionalFixedAttribute`**

## Table of contents

### Properties

- [default](internal_.OptionalFixedAttribute.md#default)
- [fabricScoped](internal_.OptionalFixedAttribute.md#fabricscoped)
- [fixed](internal_.OptionalFixedAttribute.md#fixed)
- [id](internal_.OptionalFixedAttribute.md#id)
- [isConditional](internal_.OptionalFixedAttribute.md#isconditional)
- [mandatoryIf](internal_.OptionalFixedAttribute.md#mandatoryif)
- [omitChanges](internal_.OptionalFixedAttribute.md#omitchanges)
- [optional](internal_.OptionalFixedAttribute.md#optional)
- [optionalIf](internal_.OptionalFixedAttribute.md#optionalif)
- [persistent](internal_.OptionalFixedAttribute.md#persistent)
- [readAcl](internal_.OptionalFixedAttribute.md#readacl)
- [scene](internal_.OptionalFixedAttribute.md#scene)
- [schema](internal_.OptionalFixedAttribute.md#schema)
- [unknown](internal_.OptionalFixedAttribute.md#unknown)
- [writable](internal_.OptionalFixedAttribute.md#writable)
- [writeAcl](internal_.OptionalFixedAttribute.md#writeacl)

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

• **fixed**: ``true``

#### Overrides

OptionalAttribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:77

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

• **writable**: `boolean`

#### Inherited from

OptionalAttribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
