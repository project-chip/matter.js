[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute<T, F\>

[<internal>](../modules/internal_.md).WritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](../modules/internal_.md#writableattribute)<`T`, `F`\>

  ↳ **`WritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](internal_.WritableFabricScopedAttribute.md#default)
- [fabricScoped](internal_.WritableFabricScopedAttribute.md#fabricscoped)
- [fixed](internal_.WritableFabricScopedAttribute.md#fixed)
- [id](internal_.WritableFabricScopedAttribute.md#id)
- [isConditional](internal_.WritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](internal_.WritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](internal_.WritableFabricScopedAttribute.md#omitchanges)
- [optional](internal_.WritableFabricScopedAttribute.md#optional)
- [optionalIf](internal_.WritableFabricScopedAttribute.md#optionalif)
- [persistent](internal_.WritableFabricScopedAttribute.md#persistent)
- [readAcl](internal_.WritableFabricScopedAttribute.md#readacl)
- [scene](internal_.WritableFabricScopedAttribute.md#scene)
- [schema](internal_.WritableFabricScopedAttribute.md#schema)
- [unknown](internal_.WritableFabricScopedAttribute.md#unknown)
- [writable](internal_.WritableFabricScopedAttribute.md#writable)
- [writeAcl](internal_.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

WritableAttribute.default

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

WritableAttribute.fabricScoped

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:62

___

### fixed

• **fixed**: `boolean`

#### Inherited from

WritableAttribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

WritableAttribute.id

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

WritableAttribute.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

WritableAttribute.omitChanges

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: `boolean`

#### Inherited from

WritableAttribute.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

WritableAttribute.persistent

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

WritableAttribute.readAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

WritableAttribute.scene

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

WritableAttribute.schema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

WritableAttribute.unknown

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

WritableAttribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:50

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

WritableAttribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
