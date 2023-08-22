[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FixedAttribute

# Interface: FixedAttribute<T, F\>

[<internal>](../modules/internal_.md).FixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/internal_.md#attribute)<`T`, `F`\>

  ↳ **`FixedAttribute`**

## Table of contents

### Properties

- [default](internal_.FixedAttribute.md#default)
- [fabricScoped](internal_.FixedAttribute.md#fabricscoped)
- [fixed](internal_.FixedAttribute.md#fixed)
- [id](internal_.FixedAttribute.md#id)
- [isConditional](internal_.FixedAttribute.md#isconditional)
- [mandatoryIf](internal_.FixedAttribute.md#mandatoryif)
- [omitChanges](internal_.FixedAttribute.md#omitchanges)
- [optional](internal_.FixedAttribute.md#optional)
- [optionalIf](internal_.FixedAttribute.md#optionalif)
- [persistent](internal_.FixedAttribute.md#persistent)
- [readAcl](internal_.FixedAttribute.md#readacl)
- [scene](internal_.FixedAttribute.md#scene)
- [schema](internal_.FixedAttribute.md#schema)
- [unknown](internal_.FixedAttribute.md#unknown)
- [writable](internal_.FixedAttribute.md#writable)
- [writeAcl](internal_.FixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

Attribute.fabricScoped

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### fixed

• **fixed**: ``true``

#### Overrides

Attribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:71

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

Attribute.id

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Attribute.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Attribute.unknown

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:30

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
