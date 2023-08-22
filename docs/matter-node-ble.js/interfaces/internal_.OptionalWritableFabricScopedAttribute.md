[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute<T, F\>

[<internal>](../modules/internal_.md).OptionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](../modules/internal_.md#optionalwritableattribute)<`T`, `F`\>

  ↳ **`OptionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](internal_.OptionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](internal_.OptionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](internal_.OptionalWritableFabricScopedAttribute.md#fixed)
- [id](internal_.OptionalWritableFabricScopedAttribute.md#id)
- [isConditional](internal_.OptionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](internal_.OptionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](internal_.OptionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](internal_.OptionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](internal_.OptionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](internal_.OptionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](internal_.OptionalWritableFabricScopedAttribute.md#readacl)
- [scene](internal_.OptionalWritableFabricScopedAttribute.md#scene)
- [schema](internal_.OptionalWritableFabricScopedAttribute.md#schema)
- [unknown](internal_.OptionalWritableFabricScopedAttribute.md#unknown)
- [writable](internal_.OptionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](internal_.OptionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

OptionalWritableAttribute.fabricScoped

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:65

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableAttribute.fixed

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

OptionalWritableAttribute.id

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

OptionalWritableAttribute.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableAttribute.omitChanges

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableAttribute.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableAttribute.persistent

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.readAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableAttribute.scene

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableAttribute.schema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableAttribute.unknown

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableAttribute.writable

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.writeAcl

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:36
