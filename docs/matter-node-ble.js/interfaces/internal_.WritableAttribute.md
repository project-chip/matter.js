[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WritableAttribute

# Interface: WritableAttribute<T, F\>

[<internal>](../modules/internal_.md).WritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/internal_.md#attribute)<`T`, `F`\>

  ↳ **`WritableAttribute`**

## Table of contents

### Properties

- [default](internal_.WritableAttribute.md#default)
- [fabricScoped](internal_.WritableAttribute.md#fabricscoped)
- [fixed](internal_.WritableAttribute.md#fixed)
- [id](internal_.WritableAttribute.md#id)
- [isConditional](internal_.WritableAttribute.md#isconditional)
- [mandatoryIf](internal_.WritableAttribute.md#mandatoryif)
- [omitChanges](internal_.WritableAttribute.md#omitchanges)
- [optional](internal_.WritableAttribute.md#optional)
- [optionalIf](internal_.WritableAttribute.md#optionalif)
- [persistent](internal_.WritableAttribute.md#persistent)
- [readAcl](internal_.WritableAttribute.md#readacl)
- [scene](internal_.WritableAttribute.md#scene)
- [schema](internal_.WritableAttribute.md#schema)
- [unknown](internal_.WritableAttribute.md#unknown)
- [writable](internal_.WritableAttribute.md#writable)
- [writeAcl](internal_.WritableAttribute.md#writeacl)

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

• **fixed**: `boolean`

#### Inherited from

Attribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:33

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

• **writable**: ``true``

#### Overrides

Attribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:50

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
